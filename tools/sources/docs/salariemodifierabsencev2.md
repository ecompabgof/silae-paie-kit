---
title: "SalarieModifierAbsenceV2"
slug: "salariemodifierabsencev2"
updated: 2026-10-20T05:51:18Z
published: 2026-10-20T05:51:18Z
canonical: "silae-api.document360.io/salariemodifierabsencev2"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieModifierAbsenceV2

## Fonction API

```
/v1/Absences/SalarieModifierAbsenceV2
```

## Verbe HTTP

Post

## Description

Identique à la fonction [SalarieModifierAbsence](https://silae-api.document360.io/api-rest/docs/SalarieModifierAbsence) elle permet de prendre en charge également les options : type d'arrêt, arrêt sur jour partiellement travaillé… [Gestion des arrêts de travail pour Maladie Non Professionnelle (MNP)](https://support.silae.fr/hc/fr/articles/25243852601490-Gestion-des-arr%C3%AAts-de-travail-pour-Maladie-Non-Professionnelle-MNP)

---

**Points d'attention** Dans My Silae, la saisie des absences diffère selon :

- Le paramétrage effectué au niveau de la fiche Société (exemple : *Saisie manuelle des heures d’absence*) et de la fiche Salarié (exemple : les *Méthodes pour le suivi des congés payés : jours ouvrés, ouvrables, heures*)
- Le type d'absence (Maladie non professionnel, RTT, CP…)

Soit cela peut correspondre à :

- Une durée en jour(champ dureeEnHeuresSiJourUnique) ou en heure (champ dureeEnJoursSiJourUnique)
- Différents types d'heure à saisir (heures normales avec valeur1 +bValeur1), Heures majorées (valeur2 + bValeur2, valeur3 + bValeur3...)

**Il est important de connaître la méthode définie dans My Silae pour valoriser les bons paramètres dans la requête de cette fonction API.**

Cas particulier : annulation absence sur une période antérieure à la période en cours de paie Pour effectuer cette opération, il est conseillé d'utiliser la fonction API [SalarieAjouterAbsenceV2](https://silae-api.document360.io/api-rest/docs/SalarieAjouterAbsenceV2)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebutAbsence | string(date-time) | Date de début de l'absence à modifier |
| dateFinAbsence | string(date-time) | Date de fin de l'absence à modifier |
| codeAbsence | string | CodeAbsence de l'absence à modifier |
| absence_Modif | SalarieAbsence_V3 | Élément structuré contenant les informations à modifier dans l'absence (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieAbsence_V3

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebutAbsence | string(date-time) | Date de début de l'absence |
| dateFinAbsence | string(date-time) | Date de fin de l'absence |
| codeAbsence | string | Code de l'absence (cf. détail directement dans Silae) |
| dureeEnHeuresSiJourUnique | number(double) | Durée de l'absence en heure si l'absence est sur une journée |
| dureeEnJoursSiJourUnique | number(double) | Durée de l'absence en jours si l'absence est sur une journée (0,5 pour une demi journée d'absence par exemple) |
| valeur1 | number(double) | Nombre de jours ou d'heures normales selon la gestion des absences |
| bValeur1 | boolean | Indique s'il faut tenir compte du champ **Valeur1** (**true**) ou non (**false**) |
| valeur2 | number(double) | Nombre d'heures majorées |
| bValeur2 | boolean | Indique s'il faut tenir compte du champ **Valeur2** (**true**) ou non (**false**) |
| valeur3 | number(double) | Nombre d'heures "Libre1" (tel que défini dans la fiche salarié) |
| bValeur3 | boolean | Indique s'il faut tenir compte du champ **Valeur3** (**true**) ou non (**false**) |
| valeur4 | number(double) | Nombre d'heures "Libre2" (tel que défini dans la fiche salarié) |
| bValeur4 | boolean | Indique s'il faut tenir compte du champ **Valeur4** (**true**) ou non (**false**) |
| valeur5 | number(double) | Nombre d'heures "Libre3" (tel que défini dans la fiche salarié) |
| bValeur5 | boolean | Indique s'il faut tenir compte du champ **Valeur5** (**true**) ou non (**false**) |
| absenceRectificative | boolean | Indique s'il s'agit d'une absence rectificative (**true**) ou pas (**false**) |
| absencePartielleSansEffetSurPSS | boolean | Permet d'indiquer si l'absence partielle est sans effet sur le PSS : - **true** : option cochée - **false** : option décochée |
| absenceCompleteAvecInfluencePSS | boolean | Permet de préciser si l'absence complète est avec effet sur le PSS : - **true** : option cochée - **false** : option décochée |
| absenceDebutantPartiellementTravaille | boolean | Permet d'indiquer si l'absence débute sur un jour partiellement travaillé : - **true** : option cochée - **false** : option décochée |
| typeArret | integer(int32) | Liée aux absences soumises à prescriptions médicales, cette option permet de spécifier le type d'arrêt : **0** : pas de précision **1** : initial **2** : prolongation |
| pourcentageActivite | number(double) | Permet de renseigner le pourcentage d'activité pour une absence partielle (ex: absence thérapeutique, chômage…) |
| commentaire | string | Permet de rattacher un commentaire à l'absence |
| fraction | integer(int32) | Permet d'indiquer le n° de fraction pour une absence Congé Supplémentaire de Naissance (code 280) : - 0 : Pas de fraction dans le cas de 2 mois consécutifs - 1 : 1er mois - 2 : 2ème mois ***Application d’un coefficient de dégressivité sur les IJSS calculée*** |
| sansControleFraction | boolean | Permet d'indiquer si la valeur du paramètre précédent ***fraction*** doit être prise en compte : - true : le N° de fraction n'est pas pris en compte. Il est automatiquement valorisé à 0 (zéro) - false : les contrôles sont appliqués sur la valorisation du paramètre précédent ***fraction*** |
| absencesDemiJournee | integer(int32) | Permet d'indiquer si l'absence d'une demi-journée a lieu le matin ou l'après-midi : - 0 : Aucune indication - 1 : Matin - 2 : Après midi ***Valable pour les congés payés, RTT, repos forfait jour, et autres compteurs supplémentaires*** |

## Requête

```
{
  "dateDebutAbsence": "2020-10-14T21:46:24",
  "dateFinAbsence": "2020-10-14T21:46:24",
  "codeAbsence": "string",
  "absence_Modif": {
    "dateDebutAbsence": "2020-10-14T21:46:24",
    "dateFinAbsence": "2020-10-14T21:46:24",
    "codeAbsence": "string",
    "dureeEnHeuresSiJourUnique": 10.5,
    "dureeEnJoursSiJourUnique": 10.5,
    "valeur1": 10.5,
    "bValeur1": true,
    "valeur2": 10.5,
    "bValeur2": true,
    "valeur3": 10.5,
    "bValeur3": true,
    "valeur4": 10.5,
    "bValeur4": true,
    "valeur5": 10.5,
    "bValeur5": true,
    "absenceRectificative": true,
    "absencePartielleSansEffetSurPSS": true,
    "absenceCompleteAvecInfluencePSS": true,
    "absenceDebutantPartiellementTravaille": true,
    "typeArret": 0,
    "pourcentageActivite": 10.5,
    "commentaire": "string",
    "fraction": 0,
    "sansControleFraction": true,
    "absencesDemiJournee": 0
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Le code absence n'existe pas" | De manière générale, le code absence indiqué n'existe pas. Le code absence renseignée n'existe pas dans la CCN du salarié |
|  | "L'absence sans influence sur le pss nécessite au moins la valorisation d'une des paramètres valeur" | Le paramètre **absencePartielleSansEffetSurPSS** est à true, un des paramètres **valeur** (valeur1, valeur2...) doit être renseigné |
|  | "L'absence ne peut être à la fois SANS et AVEC influence sur le PSS" | Les paramètres **absencePartielleSansEffetSurPSS** et **absenceCompleteAvecInfluencePSS** ne peuvent pas être à true simultanément |
|  | "L'option AbsenceDebutantPartiellementTravaille n'est valable que sur certaines absences de type Santé" | Le paramètre **AbsenceDebutantPartiellementTravaille** peut être à true uniquement sur certaines absences de type Santé (Maladie non professionnelle et professionnelle, Congé pathologique post-natal, Accident du travail et Accident de trajet) |
|  | "L'option TypeArret n'est valable que sur certaines absences de type Santé" | Le paramètre **TypeArret** peut être valorisé à 1 ou 2 uniquement sur certains absences de type Santé (Maladie non professionnelle et professionnelle, Congé pathologique post-natal, Accident du travail et Accident de trajet) |
|  | "Une absence de type Prolongation n'est pas compatible avec l'option AbsenceDebutantPartiellementTravaille" | Cette option ne peut être appliquée sur une absence avec comme type d'arrêt : 2 (Prolongation) |
|  | "Le code d'absence demandé n'autorise pas la saisie d'un pourcentage d'activité" | Un pourcentage d'activité ne peut s'appliquer que sur certains absences (absence partielle : thérapeutique, invalidité, chômage…) |
|  | "Ce type d'absence n'est disponible qu'à partir du 01/07/2026" | Pour une absence Congé Supplémentaire de Naissance (code 280), la période ne peut être antérieure au 01/07/2026 |
|  | "La durée du congé doit être d'un ou deux mois de date à date" | Pour une absence Congé Supplémentaire de Naissance (code 280), la période doit correspondre à 1 mois ou 2 mois consécutifs de date à date |
|  | "Le numéro de fraction doit être compris entre 0 et 2" | Pour une absence Congé Supplémentaire de Naissance (code 280), le n° de fraction accepte comme valeur : 0,1 ou 2 |
|  | "Le numéro de fraction doit être renseigné en cas de congé fractionné en 2 périodes" | Le n° de fraction doit être indiqué pour une période de 1 mois : 1 ou 2 |
|  | "Le numéro de fraction ne doit pas être renseigné" | Pour une absence Congé Supplémentaire de Naissance (code 280), le n° de fraction ne doit pas être renseigné (=0) pour un congé de 2 mois consécutifs |
|  | "L'indication d'une demi-journée n'est possible que pour une absence d'une demi-journée au plus" | Pour une absence d'une demi-journée, le paramètre ***dureeEnJoursSiJourUnique*** doit être égal à 0.5 |
|  | "L'indication d'une demi-journée n'est possible que pour les congés payés, RTT, repos forfait jour, compteurs congés supplémentaires et congé supplémentaire apprenti" | Le paramètre ***absencesDemiJournee*** est renseigné alors que le code absence indiqué ne correspond pas à l'un des types d'absence citées dans le message |
