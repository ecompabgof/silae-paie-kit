---
name: silae-entree-salarie
description: Créer un nouveau salarié dans Silae à partir d'un contrat, d'une fiche d'embauche ou d'un mail, puis préparer la DPAE. Couvre aussi la modification d'une fiche salarié (adresse, RIB, télétravail, grille horaire, personnes liées). À utiliser pour « crée le salarié », « nouvelle embauche », « fais la DPAE », « mets à jour la fiche de ».
---

# Entrée d'un salarié et mise à jour de fiche

Prérequis : contrat API 1B, mode `ecriture` pour la fiche, mode `complet` pour la DPAE. Lire `silae-api`.

## 1. Collecter
Depuis le contrat ou la fiche d'embauche, extraire : état civil (nom de naissance, nom d'usage, prénoms, sexe, date et lieu de naissance, nationalité), NIR, adresse, e-mails, RIB, date d'embauche, type de contrat, date de fin si CDD et motif, période d'essai, emploi, classification, coefficient, horaire, salaire de base, établissement (obligatoire si le dossier en a plusieurs : `ListeEtablissementsDossierPaie`).
Lister ce qui manque et le demander. Ne rien inventer, ne rien déduire d'un autre salarié.

## 2. Vérifier l'absence de doublon
`ExistenceMatricule` avec NIR, nom de naissance et e-mails. Si le salarié existe déjà (retour, réembauche), le signaler avant toute création.

## 3. Préparer la création
1. `silae_decrire` sur `CreationSalarieEmplois` : la fonction a plusieurs centaines de champs (fiche salarié et emploi). Les champs sont décrits dans les fiches « Fiche Salarié, Informations salarié » et « Fiche Salarié, Emploi » de la documentation Silae.
2. Remplir uniquement les champs connus. Pour la convention et la classification, partir d'un salarié comparable du même dossier (`LectureInformationsSalarie`) seulement pour connaître le format attendu, jamais pour copier ses valeurs.
3. Présenter la fiche complète à l'utilisateur, champ par champ, et attendre son accord.

## 4. Créer
`CreationSalarieEmplois` (ou `silae_appeler_asynchrone` sur la version Asynchrone) avec `confirmer: true`. Relire avec `LectureInformationsSalarie` et `ListeSalarieEmplois` et montrer le résultat.

## 5. DPAE (critique)
1. La DPAE est une déclaration envoyée à l'URSSAF. Elle doit être faite avant l'embauche effective.
2. Avant l'envoi, montrer : matricule, établissement, date et heure d'embauche, type de contrat, date de fin éventuelle. Faire confirmer explicitement « envoyer la DPAE ».
3. `SalarieDUE` (`salarieDUE.matriculeSalarie`, `nomInterneEtablissement`, `dateEmbauche`, `dateFinContrat`, `typeContrat`) avec `confirmer: true`, en mode `complet`.
4. Récupérer l'accusé : `SalarieRecupererRecuDPAE`, enregistré en PDF dans le dossier de sortie.

## Mise à jour d'une fiche existante
| Besoin | Fonction |
|---|---|
| Un ou plusieurs champs de la fiche | `ModificationChampSalarie` |
| Télétravail | `ModificationTeletravailFicheSalarie` |
| Grille horaire | `ModificationGrilleHoraireSalarie` |
| Ayants droit, personnes liées | `ModificationPersonnesLiees` |
| Axes analytiques | `ModificationAxesAnalytiquesSalarie` |
| Handicap, salarié protégé | `ModificationHandicap`, `ModificationSalarieProtege` |
| Saisie sur salaire (critique) | `ModificationSaisieArret` |

Toujours lire la valeur actuelle (fonction `Lecture...` correspondante), montrer avant et après, faire confirmer, puis relire.

Rappel : un changement qui a un impact paie crée un nouvel emploi dans Silae, l'identifiant emploi externe reste le même.
