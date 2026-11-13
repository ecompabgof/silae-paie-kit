---
name: silae-api
description: Socle pour utiliser l'API REST Silae Paie (mySilae) via le connecteur silae. À lire dès qu'une demande touche Silae, la paie d'un dossier, des bulletins, salariés, variables, absences, DSN, DPAE, éditions de paie, écritures comptables de paie ou statistiques de production d'un cabinet. Donne les outils, les conventions de l'API, les garde-fous d'écriture et la carte des 299 fonctions.
---

# API Silae Paie : socle

## Outils du connecteur (serveur MCP `silae`)

| Outil | Usage |
|---|---|
| `silae_statut` | Configuration, mode d'accès, dossier par défaut. `tester_connexion: true` vérifie l'authentification |
| `silae_categories` | Les 42 catégories de fonctions avec leur nombre de fonctions en lecture, écriture et critiques |
| `silae_rechercher` | Trouver une fonction par mots clés, catégorie, accès ou modèle de contrat |
| `silae_decrire` | Corps attendu, aide sur chaque champ, exemple, réponse, erreurs connues, lien doc |
| `silae_appeler` | Appel simple. Les PDF et Excel renvoyés sont enregistrés sur disque, le chemin est renvoyé |
| `silae_appeler_asynchrone` | Lance la version Asynchrone et attend le résultat via la fonction Statut associée |
| `silae_appeler_lot` | Même fonction sur une liste de corps (500 au maximum), résultat ligne par ligne |
| `silae_journal` | Historique local de toutes les écritures faites par le kit |

Méthode systématique : `silae_rechercher` puis `silae_decrire` puis `silae_appeler`. Ne jamais deviner un nom de fonction ni un champ.

Si le connecteur n'est pas chargé, le même moteur existe en ligne de commande :
`node "${CLAUDE_PLUGIN_ROOT}/scripts/silae.mjs" rechercher absence` (identifiants dans `~/.silae.env`).

## Garde-fous d'écriture (non négociables)

Chaque fonction a un niveau d'accès.
1. **lecture** : libre.
2. **ecriture** (saisies d'heures, primes, éléments variables, absences, acomptes, fiche salarié, création de salarié, contrôle des bulletins) : exige le mode `ecriture` ou `complet` et `confirmer: true`.
3. **critique** (DPAE, DSN, création ou état de dossier, robot et cycle de paie, droits des collaborateurs, coordonnées bancaires, cumuls, CCN, saisie sur salaire, calcul de bulletins des modules spectacle et extras) : exige le mode `complet` et `confirmer: true`.

Avant toute écriture :
1. Lire l'état actuel (par exemple les saisies existantes) pour éviter les doublons.
2. Présenter à l'utilisateur un tableau exact de ce qui va être envoyé : dossier, salarié (matricule et nom), période, code, valeur.
3. Attendre son accord explicite sur ce tableau. Un « ok » général sur le principe ne suffit pas.
4. Seulement alors appeler avec `confirmer: true`, puis relire dans Silae pour vérifier et faire un compte rendu.

Ne jamais passer `confirmer: true` de sa propre initiative. Ne jamais contourner le mode d'accès : si l'outil refuse, expliquer à l'utilisateur comment changer le réglage `mode_acces` via `/plugin`.

## Conventions de l'API

1. **Dossier** : chaque appel vise un dossier de paie (`numeroDossier` dans le corps, en-tête `dossiers` géré par le connecteur). Le dossier doit faire partie de la configuration d'accès API, sinon erreur 1011. Après ajout d'un dossier dans la configuration, attendre quelques minutes.
2. **Périodes** : format `AAAA-MM-JJT00:00:00`. Pour `periodeDebut` et `periodeFin`, seuls le mois et l'année comptent (période de paie). Pour `dateDebut` et `dateFin`, la date exacte compte. Une absence du 30/04 saisie sur le bulletin de mai sort sur la période de mai.
3. **Période en cours** : `DossierRecupererPeriodeEnCours` avant toute saisie, pour ne pas écrire sur un mois clos.
4. **Emplois** : chaque modification de fiche ayant un impact paie crée un nouvel emploi dans Silae. L'API expose un identifiant emploi externe stable (`ListeSalarieEmplois`). Les fonctions `...SurEmploi` ciblent un emploi précis pour les salariés multi emplois.
5. **Mise à jour conditionnelle** : beaucoup de champs vont par paire `valeur` et `bValeur` ; seule une valeur dont le booléen vaut `true` est prise en compte.
6. **Asynchrone** : pour les gros volumes, la fonction `XAsynchrone` renvoie un identifiant de tâche, puis `StatutXAsynchrone?guidTache=` donne le résultat. `silae_appeler_asynchrone` gère cela.
7. **Caractères** : jeu ANSI Windows 1252. Éviter les emojis et caractères exotiques dans les libellés.
8. **Maintenance** : pas d'appel entre 1 h et 5 h, heure de Paris.
9. **Jeton** : valable 60 minutes, limite de 60 jetons par minute. Le connecteur le met en cache.
10. **Bulletin déjà calculé** : une saisie sur un salarié dont le bulletin est calculé est refusée. Il faut supprimer le bulletin dans Silae, l'API ne le fait pas.

## Ce que l'API ne fait pas

1. Elle ne calcule pas les bulletins de la paie classique. Seuls les modules intermittents du spectacle et extras CTCD ont une fonction de calcul. Le calcul reste fait dans Silae, par le gestionnaire ou le robot de paie.
2. Elle n'envoie pas la DSN mensuelle. Elle permet de lire les DSN (`ListeDSNMensuelles`, `AcquisitionContenuPartielDSN`, `RecupererDeclarations`) et de générer une DSN événementielle de fin de contrat d'usage (`GenererDSNEvenementielleFCTUAsynchrone`).
3. Elle ne supprime pas de bulletin.

## Modèles de contrat API (ce que le cabinet a souscrit)

| Modèle | Pour qui | Périmètre |
|---|---|---|
| 1A | Cabinet, usage interne paie | Lecture, éditions, écritures comptables, administration du domaine, contrôle des bulletins |
| 1B | Cabinet, usage interne RH | Tout le 1A, plus saisies (heures, primes, éléments variables, absences, acomptes), salariés, DPAE, fiche société |
| 2 | Client final du cabinet | Compte API mis à disposition d'un client, sur ses seuls dossiers |
| 4 | Éditeur de comptabilité | Écritures comptables et quelques états |

`silae_decrire` indique les modèles de chaque fonction. Si Silae refuse une fonction alors que la configuration est bonne, vérifier que le modèle souscrit la couvre.

Facturation Silae : à l'usage, sur le nombre de bulletins des dossiers dont la configuration d'accès API est active dans le mois. Activer l'accès dossier par dossier limite le coût.

## Carte des fonctions par besoin

| Besoin | Fonctions clés |
|---|---|
| Lister dossiers et salariés | `ListeDossiers`, `ListeInformationsDossiersPaie`, `ListeSalaries`, `LectureInformationsSalarie`, `ListeSalarieEmplois`, `ExistenceMatricule`, `MatriculeSalarie` |
| Préparer la paie | `DossierRecupererPeriodeEnCours`, `ListeVariablesASaisir`, `SalarieAbsencesV2`, `SalarieActiviteJournaliere` |
| Saisir | `SalarieAjouterHeures`, `SalarieAjouterElementVariable`, `SalarieAjouterPrime`, `SalarieAjouterAcompte`, `SalarieAjouterAbsenceV2`, `SalariesConfirmerSaisies`, `SalarieReinitialiserSaisies` |
| Lire les bulletins | `SalariesBulletins`, `SalarieBulletinEntete`, `SalarieBulletinLignes`, `SalarieBulletinLignesSelonFiltres`, `SalarieBulletinCumuls`, `SalarieBulletinDetails`, `SalariesStockVar`, `SalarieBulletinStatutEtatAvancement` |
| Contrôler | `ControlerBulletinsPeriode`, `HistoriqueDesModifications`, `EtatDeclarations` |
| Éditions (PDF, Excel) | `EditionJournalDePaie`, `EditionRecapDePaie`, `EditionCoutsSalariaux`, `EditionTableauDesCharges`, `EditionDetailDesCotisations`, `EditionEtatDesPaiements`, `EditionSoldeDeRepos`, `RecupererDuplicatasBulletins`, `RecupererImage` |
| Comptabilité et paiements | `EcrituresComptables4`, `RecupererFichiersEcrituresComptables`, `EcrituresComptablesPaiementSalaires`, `RecupererFichiersVirement` |
| Déclarations | `ListeDSNMensuelles`, `ListeDSNEvenementielles`, `RecupererDeclarations`, `SalarieRecupererRecuDPAE`, `SalarieRecupererDUE` |
| Embauche | `CreationSalarieEmplois`, `SalarieDUE` |
| Pilotage du cabinet | `AnalyseProductionPaie`, `AnalyseProductionPaieUtilisateursV3`, `AnalyseProductionPaieEffectifs`, `AnalyseProductionPaieEntreesSorties`, `HistoriqueDesConnexions` |

Skills spécialisés du kit : `silae-saisie-variables`, `silae-controle-paie`, `silae-entree-salarie`, `silae-editions`, `silae-pilotage-cabinet`, `silae-connexion`.

## Données personnelles

Les réponses contiennent des données salariés (NIR, salaires, RIB, arrêts maladie). N'en afficher que le nécessaire, ne pas les recopier dans des fichiers hors du dossier de sortie configuré, ne jamais les envoyer à un service tiers.
