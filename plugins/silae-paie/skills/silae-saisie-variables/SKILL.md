---
name: silae-saisie-variables
description: Saisir dans Silae les éléments variables de paie envoyés par un client (heures supplémentaires, primes, éléments variables, acomptes, absences, congés, arrêts) à partir d'un mail, d'un Excel, d'un PDF ou d'une liste dictée. À utiliser pour « saisis les variables du mois », « importe ce fichier de variables dans Silae », « mets les heures sup de X », « ajoute une prime », « saisis les absences ».
---

# Saisie des variables de paie dans Silae

Prérequis : contrat API 1B (ou 2) et mode d'accès `ecriture`. Lire d'abord le skill `silae-api` pour les garde-fous.

## Déroulé

### 1. Cadrer
1. Identifier le dossier (`ListeDossiers` si besoin) et la période. Vérifier la période avec `DossierRecupererPeriodeEnCours` : on ne saisit que sur la période en cours, sauf demande contraire explicite.
2. Lire la source fournie par le client (Excel, CSV, PDF, mail) et la normaliser en lignes : salarié, nature, quantité ou montant, dates, commentaire.

### 2. Faire correspondre les salariés
1. `ListeSalaries` avec `listeSalariesOptions.optionActifSurPeriode` = la période, pour avoir matricules et noms des actifs.
2. Associer chaque ligne au matricule : nom et prénom, puis e-mail ou NIR si ambigu. Toute ligne non associée ou ambiguë part dans une liste « à clarifier », jamais devinée.
3. Salarié multi emplois : `ListeSalarieEmplois`, puis utiliser la variante `...SurEmploi`.

### 3. Faire correspondre les codes du dossier
1. `ListeVariablesASaisir` donne les variables propres au dossier (nom, famille, libellés, type numérique ou alphanumérique, format). Les codes changent d'un dossier à l'autre : ne jamais réutiliser un code d'un autre dossier.
2. Associer chaque nature du client à un code :

| Nature | Fonction | Champ code |
|---|---|---|
| Heures (supplémentaires, majorées, nuit, dimanche) | `SalarieAjouterHeures` | `heures.codeHeures` |
| Heures natives du dossier | `SalarieAjouterHeuresNatives` | voir `silae_decrire` |
| Élément variable ou prime déjà paramétrée dans le dossier | `SalarieAjouterElementVariable` | `elementVariable.codeElementVariable` |
| Prime ponctuelle non paramétrée | `SalarieAjouterPrime` | `prime.codePrime`, avec `intituleBulletin` (45 caractères max) et `intituleCourt` (10 max) |
| Acompte | `SalarieAjouterAcompte` | `acompte.dateAcompte`, `montantAcompte` |
| Absence, congé, arrêt | `SalarieAjouterAbsenceV2` | `absence.codeAbsence` |

3. Pour `SalarieAjouterElementVariable`, mettre `controleExistenceElementVariable: true` : Silae refuse alors un code inexistant au lieu de l'ignorer. Un code absent du profil de primes du dossier est sinon supprimé au calcul suivant.
4. `SalarieAjouterHeures` : `ajouter: true` additionne à l'existant, `false` remplace. Par défaut utiliser `false` pour qu'une relance ne double pas les heures.

### 4. Absences : prudence
La saisie dépend du paramétrage du dossier (saisie manuelle des heures d'absence, suivi des CP en jours ouvrés, ouvrables ou en heures) et du type d'absence.
1. Lire `SalarieAbsencesV2` du salarié sur la période pour voir comment les absences existantes sont saisies, et reproduire la même méthode.
2. Jour unique : `dureeEnJoursSiJourUnique` ou `dureeEnHeuresSiJourUnique`. Valeurs détaillées : `valeur1..5` avec `bValeur1..5: true`.
3. Demi-journée : `absencesDemiJournee` précise matin ou après-midi.
4. Arrêt maladie : `typeArret`, et `absenceDebutantPartiellementTravaille` si le premier jour est partiellement travaillé.
5. Annuler une absence d'une période antérieure : code 633 avec `absenceRectificative: true`.
En cas de doute sur une absence, la laisser dans « à clarifier » plutôt que de la saisir.

### 5. Valider avec l'utilisateur
Présenter un tableau unique : matricule, nom, fonction, code, libellé du code, valeur, période. Ajouter la liste « à clarifier » et le total par nature. Attendre l'accord explicite.

### 6. Saisir
1. Regrouper par fonction et utiliser `silae_appeler_lot` avec `confirmer: true`, une ligne par saisie.
2. Si des lignes échouent : afficher le message Silae, corriger ou les sortir du lot, ne jamais relancer tout le lot (risque de doublon si `ajouter: true`).
3. Si le cabinet valide les saisies par l'API : `SalariesConfirmerSaisies` (heures et primes) sur la période, seulement si l'utilisateur le demande.

### 7. Vérifier et rendre compte
1. Relire : `SalarieAbsencesV2`, `HistoriqueDesModifications` avec `modifAPI: true` sur la journée.
2. Compte rendu : lignes saisies, lignes en échec avec la raison, lignes à clarifier, et la question à poser au client pour chacune.

## Corriger une erreur
`SalarieReinitialiserSaisies` remet à zéro heures, primes et ou absences d'un salarié sur une période (`identifiantEmploi` requis). C'est une remise à zéro complète de la nature choisie : montrer à l'utilisateur ce qui sera effacé et demander confirmation.
