# Kit Silae Paie pour Claude Code

Un plugin Claude Code qui donne accès à toute l'API REST Silae Paie (299 fonctions) avec des garde-fous adaptés à la paie.

Kit non officiel, sans lien avec Silae. Il s'appuie sur la spécification OpenAPI et la documentation publiques de Silae (https://silae-api.document360.io).

## Ce que contient le kit

| Élément | Contenu |
|---|---|
| Connecteur MCP `silae` | 8 outils : statut, catégories, rechercher, décrire, appeler, appeler en asynchrone, appeler par lot, journal. Couvre les 299 fonctions de l'API |
| 7 skills | Socle de l'API, saisie des variables, contrôle de paie, entrée de salarié et DPAE, éditions et documents, pilotage du cabinet, mise en place de l'accès |
| 9 commandes | `/silae-paie:statut`, `:dossiers`, `:variables`, `:controle`, `:edition`, `:production`, `:embauche`, `:fonction`, `:journal` |
| 1 agent | `controleur-paie`, revue des bulletins en lecture seule |
| CLI | `scripts/silae.mjs`, même moteur en ligne de commande |

Aucune dépendance à installer : Node.js 18 ou plus suffit (déjà présent avec Claude Code).

## Ce que l'API Silae permet, et ce qu'elle ne permet pas

Avec le modèle 1A (usage interne Paie), inclus dans l'offre Silae Paie sans facturation : lire dossiers, salariés, bulletins, cumuls, absences, DSN. Sortir journal, récap, coûts salariaux, charges, bulletins PDF en PDF ou Excel. Récupérer les écritures comptables et les fichiers de virement. Suivre la production du cabinet.

Avec le modèle 1B (usage interne RH), tout le 1A, plus : saisir heures, primes, éléments variables, acomptes et absences, créer un salarié, faire la DPAE, modifier les fiches salarié et société. Le 1B est facturé selon les dossiers ouverts à l'API.

L'API ne calcule pas les bulletins de la paie classique, n'envoie pas la DSN mensuelle et ne supprime pas de bulletin. Le calcul et la validation restent dans Silae.

## Installation

Prérequis : Claude Code 2.1.271 ou plus récent, et un accès API Silae (voir plus bas).

1. Ajouter le catalogue :
   ```
   /plugin marketplace add ecompabgof/silae-paie-kit
   ```
   En local : `/plugin marketplace add /chemin/vers/silae-paie-kit`
2. Installer le plugin :
   ```
   /plugin install silae-paie@oseria-plugins
   ```
3. Renseigner les réglages proposés : Client ID, Client Secret, clé de configuration d'accès API, dossier par défaut, mode d'accès, modèle, environnement, dossier de sortie. Le Client Secret et la clé sont rangés dans le trousseau du système.
4. Redémarrer Claude Code, puis lancer `/silae-paie:statut`.

## Sécurité

1. **Lecture seule par défaut.** Le réglage `mode_acces` vaut `lecture` : aucune fonction qui modifie Silae ne peut partir.
2. **Mode `ecriture`** : saisies, salariés, fiches. Chaque appel exige `confirmer: true`, que Claude ne passe qu'après avoir montré le contenu exact et obtenu votre accord.
3. **Mode `complet`** : ajoute les 38 opérations critiques (DPAE, DSN, création et état de dossier, robot et cycle de paie, droits des collaborateurs, coordonnées bancaires, cumuls, CCN).
4. **Journal** : chaque écriture est consignée localement dans `~/.claude/plugins/data/<plugin>/journal-ecritures.jsonl`, consultable avec `/silae-paie:journal`. Silae trace aussi les modifications faites par API (`HistoriqueDesModifications`).
5. **Droits réels** : l'API agit avec les droits de l'utilisateur mySilae rattaché à la configuration d'accès. Créez un utilisateur dédié aux droits limités.
6. Commencez par l'environnement de test Silae, sur une copie de dossier.

## Obtenir l'accès API Silae

1. Le contrat de distribution Silae doit inclure l'annexe 7 (accès API), sinon signer l'avenant avec votre commercial Silae.
2. Remplir le formulaire d'ouverture de compte API : modèle 1A, 1B ou les deux. Délai annoncé de 2 à 3 semaines minimum.
3. Sur https://api-portal.silae.fr : récupérer le Client ID, générer le Client Secret.
4. Dans mySilae, Paramétrage paie, Options, Configuration API : créer une configuration sur les dossiers voulus, puis générer sa clé dans le portail.

Silae facture à l'usage, selon le nombre de bulletins des dossiers dont l'accès API est actif dans le mois. Ouvrir l'accès sur quelques dossiers d'abord permet de mesurer le gain avant d'étendre.

Le skill `silae-connexion` détaille chaque étape et le dépannage des erreurs.

## Utilisation en ligne de commande

```
cp exemple.silae.env ~/.silae.env && chmod 600 ~/.silae.env
node plugins/silae-paie/scripts/silae.mjs statut --tester
node plugins/silae-paie/scripts/silae.mjs rechercher element variable
node plugins/silae-paie/scripts/silae.mjs decrire SalarieAjouterElementVariable
node plugins/silae-paie/scripts/silae.mjs appeler ListeDossiers
node plugins/silae-paie/scripts/silae.mjs async EditionJournalDePaie --dossier 00123 --corps '{"format":"ExcelXLSX","periodeDebut":"2026-10-01T00:00:00","periodeFin":"2026-10-01T00:00:00"}'
```

## Mettre à jour le catalogue des fonctions

Quand Silae publie une nouvelle version de l'API : télécharger la spec OpenAPI et la collection Postman depuis la page Release Note de la documentation, les placer dans `tools/sources/`, ajouter si besoin les fiches de la documentation dans `tools/sources/docs/`, puis :

```
node tools/build-catalog.mjs
```

## Licence

MIT. Les marques Silae et mySilae appartiennent à Silae.
