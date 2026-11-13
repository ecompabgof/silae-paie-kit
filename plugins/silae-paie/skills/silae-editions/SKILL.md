---
name: silae-editions
description: Sortir de Silae les documents et états de paie (journal de paie, récapitulatif, coûts salariaux, tableau des charges, détail des cotisations, état des paiements, soldes de repos, bulletins PDF, attestations, déclarations, écritures comptables, fichiers de virement) en PDF ou Excel, pour un dossier et une période. À utiliser pour « sors le journal de paie », « envoie-moi les bulletins de », « récap de paie en Excel », « coût salarial du trimestre », « écritures de paie pour la compta », « fichier de virement des salaires ».
---

# Éditions et documents Silae

Tout est en lecture. Les documents arrivent en base64 dans le champ `document` : le connecteur les enregistre automatiquement dans le dossier de sortie et renvoie le chemin. Donner ce chemin à l'utilisateur.

## États de paie
Corps commun : `numeroDossier`, `periodeDebut`, `periodeFin`, `format` parmi `Pdf`, `Excel`, `ExcelXLSX`. Préférer `ExcelXLSX` pour retravailler, `Pdf` pour transmettre.

| Document | Fonction |
|---|---|
| Journal de paie | `EditionJournalDePaie` |
| Récapitulatif de paie | `EditionRecapDePaie` |
| Récap détaillé par salarié, par période, avec analytique | `EditionRecapDePaieDetailleParSalarie`, `EditionRecapDePaieDetailleParPeriode`, `EditionRecapDePaieDetailleAvecAnalytique` |
| Coûts salariaux | `EditionCoutsSalariaux` |
| Tableau des charges | `EditionTableauDesCharges` |
| Détail des cotisations (par organisme, nature, analytique) | `EditionDetailDesCotisations` |
| État des paiements | `EditionEtatDesPaiements` |
| Soldes de repos (CP, RTT) | `EditionSoldeDeRepos`, données brutes `SoldeRepos` |
| Contrôle CICE | `EditionControleCICE` |
| Éditions historiques paramétrées dans le dossier | `EditionHistorique`, version chiffrée `EditionHistoriqueChiffre` |
| Éditions groupées | `EditionsGroupees` |

Sur plusieurs mois ou un gros dossier, passer par `silae_appeler_asynchrone` (le connecteur choisit la version Asynchrone et attend).

## Bulletins et documents salariés
| Document | Fonction |
|---|---|
| Duplicatas de bulletins PDF (filtre par matricules possible) | `RecupererDuplicatasBulletins` |
| Attestations employeur et autres images | `RecupererImage` (voir `silae_decrire` pour les natures). Attention : récupérer une AER non éditée la passe au statut édité |
| Reçu de DPAE, DUE | `SalarieRecupererRecuDPAE`, `SalarieRecupererDUE` |
| Synthèse de carrière | `SalarieSyntheseCarriere` |

## Déclarations
`ListeDSNMensuelles` (période au format date), `ListeDSNEvenementielles`, `RechercheDeclarationEvenementielle`, `AcquisitionContenuPartielDSN`, `RecupererDeclarations`, `EtatDeclarations`.

## Comptabilité et paiements
| Besoin | Fonction |
|---|---|
| Écritures d'OD de paie avec code journal et analytique | `EcrituresComptables4` |
| Fichiers d'écritures au format du logiciel comptable paramétré | `RecupererFichiersEcrituresComptables` |
| Écritures de paiement des salaires et des acomptes | `EcrituresComptablesPaiementSalaires`, `EcrituresComptablesPaiementAcomptes`, lots `EcrituresComptablesPaiementSalairesLotsVirement` |
| Fichiers de virement SEPA | `RecupererFichiersVirement`, `RecupererFichiersVirementHorsBulletin` (versions `Chiffres` en 1B) |
| Fichier titres restaurant | `GenerationFichierTR` |

Si le cabinet utilise Pennylane, Cegid, Inqom, Teogest ou Tiime, ces éditeurs ont leur propre connecteur Silae (modèle 4, facturé à l'éditeur) : le signaler avant de bâtir un export manuel des écritures.

## Restitution
Nommer clairement les fichiers produits (dossier, document, période) et proposer, si utile, une synthèse chiffrée tirée de la version Excel.
