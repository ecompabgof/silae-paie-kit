---
name: silae-controle-paie
description: Contrôler la paie d'un dossier Silae après calcul des bulletins. Compare chaque bulletin au mois précédent, détecte les écarts et anomalies (net, brut, heures, absences, cotisations, entrées et sorties), produit une liste de points à vérifier et un mail de synthèse au client. À utiliser pour « contrôle la paie de », « vérifie les bulletins », « revue de paie », « écarts M-1 », « qu'est-ce qui a changé ce mois-ci ».
---

# Contrôle de paie après calcul

Entièrement en lecture, sauf l'étape finale facultative de passage au statut « contrôlé ». Pour un dossier lourd, déléguer à l'agent `controleur-paie`.

## 1. Récupérer les données
1. Période : `DossierRecupererPeriodeEnCours` ou celle donnée par l'utilisateur. M-1 = mois précédent.
2. Avancement : `SalarieBulletinStatutEtatAvancement` (période au format date `AAAA-MM-JJ`) pour savoir quels bulletins sont calculés.
3. Bulletins de la période et de M-1 : `SalariesBulletins` (ou `silae_appeler_asynchrone` au-delà de quelques dizaines de salariés).
4. Pour chaque salarié : `SalarieBulletinCumuls` sur la période et sur M-1 (brut, net à payer, net imposable, PAS, heures et jours travaillés, PSS).
5. En cas d'écart notable : `SalarieBulletinLignes` des deux mois pour expliquer ligne à ligne.
6. Contexte : `SalarieAbsencesV2` sur la période, `AnalyseProductionPaieEntreesSorties` ou `ListeSalaries` (actifs M et M-1) pour les entrées et sorties, `HistoriqueDesModifications` pour les modifications de fiche du mois.

## 2. Contrôles à faire
| Contrôle | Règle de signalement |
|---|---|
| Variation du net à payer | Plus ou moins 10 % par rapport à M-1, sauf explication par absence, prime ou entrée et sortie |
| Variation du brut | Plus ou moins 10 % ou salaire de base modifié |
| Heures travaillées | Différentes de l'horaire contractuel sans absence ni heures supplémentaires saisies |
| Absences | Absence saisie sans retenue visible, ou retenue sans absence |
| Net négatif ou nul | Toujours signaler |
| Prélèvement à la source | Taux nul ou en forte variation |
| Entrée | Premier bulletin : vérifier proratisation, DPAE (`SalarieRecupererRecuDPAE`) |
| Sortie | Solde de tout compte : indemnités, CP restants (`SoldeRepos`), attestation (`RecupererImage`) |
| Bulletin non calculé | Salarié actif sans bulletin sur la période |
| Doublons | `ListeMatriculesDupliques` |

Les seuils sont des points de départ : les adapter si l'utilisateur en donne d'autres.

## 3. Restituer
1. Tableau des points à vérifier, triés par gravité : salarié, constat chiffré M-1 vers M, explication probable, action proposée.
2. Liste courte des bulletins sans anomalie.
3. Si demandé, projet de mail au client listant seulement les questions à lui poser (pas de jargon, pas de données sensibles inutiles).
4. Si demandé, le récapitulatif en Excel : `EditionRecapDePaie` au format `ExcelXLSX` (voir `silae-editions`).

Ne jamais affirmer qu'un bulletin est faux : parler de point à vérifier, la validation reste au gestionnaire de paie.

## 4. Statut « contrôlé » (facultatif, écriture)
`ControlerBulletinsPeriode` passe les bulletins de la période au statut contrôlé, pour tout le dossier ou un seul salarié (`matriculeSalarie`). Seulement sur demande explicite, après que le gestionnaire a levé les points ouverts, avec `confirmer: true`.
