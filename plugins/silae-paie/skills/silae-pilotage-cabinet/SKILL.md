---
name: silae-pilotage-cabinet
description: Piloter l'activité paie d'un cabinet sur tout le domaine Silae - volume de bulletins par dossier, par mois et par gestionnaire, entrées et sorties, effectifs, coffre-fort, documents signés, retards de production, connexions et modifications, base de facturation. À utiliser pour « combien de bulletins ce mois », « production par gestionnaire », « tableau de bord paie », « quels dossiers sont en retard », « base de facturation paie », « qui a modifié ».
---

# Pilotage du cabinet

Tout en lecture, disponible dès le modèle 1A. Ces fonctions portent sur tout le domaine : ne pas préciser de dossier pour avoir la vue globale.

## Fonctions
| Besoin | Fonction |
|---|---|
| Bulletins, entrées, sorties, déclarations, DUE, attestations par dossier et par mois | `AnalyseProductionPaie` (`requeteAnalyseProduction.typePeriode` : période de paie ou calendaire, `periodeDebut`, `periodeFin`, `codeAgence` facultatif) |
| Détail par dossier | `AnalyseProductionPaieDetail` |
| Production par gestionnaire (bulletins contrôlés, entrées, sorties par type) | `AnalyseProductionPaieUtilisateursV3` |
| Effectifs | `AnalyseProductionPaieEffectifs` |
| Entrées et sorties | `AnalyseProductionPaieEntreesSorties` |
| Bulletins originaux produits | `AnalyseProductionPaieBulletinsOriginaux` |
| Coffre-fort et documents à signer | `AnalyseProductionPaieBulletinsCoffresForts`, `AnalyseProductionPaieDocumentsSignes` |
| Revenus annuels par salarié | `AnalyseProductionPaieRevenus` |
| Modules et options actifs par dossier | `AnalyseActiviteStatutAccesOptions`, `ListeModulesActifs` |
| Liste et état des dossiers, référence de facturation | `ListeDossiers`, `ListeInformationsDossiersPaie`, `ListeDossiersAgence`, `ListeAgences` |
| Collaborateurs et affectations | `AdministrationCollaborateurLecture`, `AffectationDossierPaieLecture` |
| Traçabilité | `HistoriqueDesConnexions`, `HistoriqueDesModifications` (`modifAPI: true` pour isoler ce qui vient de l'API) |
| Configurations d'accès API actives (et donc facturées) | `AnalyseConfigurationAccesApi`, `ListeComptesApi` |

Préférer la version Asynchrone via `silae_appeler_asynchrone` sur plusieurs mois ou tout le domaine.

## Restitutions types
1. **Tableau de bord mensuel** : bulletins par dossier sur 12 mois, variation, entrées et sorties, dossiers en hausse ou en baisse.
2. **Charge par gestionnaire** : bulletins contrôlés par personne et par mois.
3. **Retards** : dossiers dont `nbBulletinsOriginauxACalculer` reste positif après la date de paie habituelle.
4. **Base de facturation** : bulletins par dossier et par mois, à rapprocher de la référence de facturation (`ListeDossiers`). Ne pas calculer de prix sans grille tarifaire fournie par l'utilisateur.
5. **Coût API** : nombre de bulletins des dossiers ayant une configuration d'accès API active, multiplié par le tarif Silae communiqué par l'utilisateur.

Produire un fichier Excel ou un tableau dans la conversation selon la demande. Indiquer la période et la date d'extraction.
