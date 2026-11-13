---
title: "SalarieAbsencesV2"
slug: "salarieabsencesv2"
updated: 2026-10-19T15:43:45Z
published: 2026-10-19T15:43:45Z
canonical: "silae-api.document360.io/salarieabsencesv2"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAbsencesV2

## Fonction API

```
/v1/Absences/SalarieAbsencesV2
```

## Verbe HTTP

Post

## Description

Identique à la fonction [SalarieAbsences](https://silae-api.document360.io/api-rest/docs/SalarieAbsences) elle permet de prendre en charge également les options : type d'arrêt, arrêt sur jour partiellement travaillé… [Gestion des arrêts de travail pour Maladie Non Professionnelle (MNP)](https://support.silae.fr/hc/fr/articles/25243852601490/live_preview/01K4MWYJKPG4J30EPGE9NC7FYY)

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalarieAbsences | RequeteSalarieAbsences | lément structuré contenant les paramètres de la recherche d'absences (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalarieAbsences

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| periodeDebut | string(date-time) | Date de début de la période de recherche |
| periodeFin | string(date-time) | Date de fin de la période de recherche |
| optionFiltrage | integer(int32) | Option de filtrage: \| Option de filtrage \| Valeur correspondante \| \| --- \| --- \| \| Absences validées intégrées ou non au bulletin (bulletin calculé ou pas) \| 0 \| \| Absences validées non intégrées au bulletin (bulletin non calculé) \| 1 \| \| Absences validées intégrées au bulletin (bulletin calculé) \| 2 \| \| Absences validées et non validées intégrées ou non au bulletin (bulletin calculé ou pas) \| 3 \| \| Absences validées et non validées non intégrées au bulletin (bulletin non calculé) \| 4 \| \| Absences validées et non validées intégrées au bulletin (bulletin calculé) \| 5 \| |
| Option de filtrage | Valeur correspondante |
| Absences validées intégrées ou non au bulletin (bulletin calculé ou pas) | 0 |
| Absences validées non intégrées au bulletin (bulletin non calculé) | 1 |
| Absences validées intégrées au bulletin (bulletin calculé) | 2 |
| Absences validées et non validées intégrées ou non au bulletin (bulletin calculé ou pas) | 3 |
| Absences validées et non validées non intégrées au bulletin (bulletin non calculé) | 4 |
| Absences validées et non validées intégrées au bulletin (bulletin calculé) | 5 |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| salarieAbsences | SalarieAbsence_V3[] | Liste d'éléments structurés contenant les informations des absences trouvées (cf. détail ci-dessous) |

### SalarieAbsence_V3

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebutAbsence | string(date-time) | Date de début de l'absence |
| dateFinAbsence | string(date-time) | Date de fin de l'absence |
| codeAbsence | string | Code de l'absence (cf. détail directement dans Silae) |
| dureeEnHeuresSiJourUnique | number(double) | Durée de l'absence en heure si l'absence est sur une journée |
| dureeEnJoursSiJourUnique | number(double) | Durée de l'absence en jours si l'absence est sur une journée (0,5 pour une demi journée d'absence par exemple) |
| valeur1 | number(double) | Nombre d'heures normales |
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
| absencePartielleSansEffetSurPSS | boolean | Permet de préciser si l'absence partielle est sans effet sur le PSS : - **true** : option cochée - **false** : option décochée |
| absenceCompleteAvecInfluencePSS | boolean | Permet d'indiquer si l'absence complète est avec effet sur le PSS : - **true** : option cochée - **false** : option décochée |
| absenceDebutantPartiellementTravaille | boolean | A compléter |
| typeArret | integer(int32) | Liée aux absences soumises à prescriptions médicales, cette option permet de spécifier le type d'arrêt : **0** : pas de précision **1** : initial **2** : prolongation |
| pourcentageActivite | number(double) | Permet d'indiquer le pourcentage d'activité pour une absence partielle (ex: absence thérapeutique, chômage…) |
| commentaire | string | Permet de préciser le commentaire lié à l'absence |
| absencesDemiJournee | integer(int32) | Permet d'indiquer si l'absence d'une demi-journée a lieu le matin ou l'après-midi : - 0 : Aucune indication - 1 : Matin - 2 : Après midi |
| fraction | integer(int32) | Permet d'indiquer le n° de fraction pour une absence Congé Supplémentaire de Naissance (code 280) : - 0 : Pas de fraction dans le cas de 2 mois consécutifs - 1 : 1er mois - 2 : 2ème mois |

## Requête

```
{
  "requeteSalarieAbsences": {
    "matriculeSalarie": "string",
    "periodeDebut": "2020-10-14T21:46:24",
    "periodeFin": "2020-10-14T21:46:24",
    "optionFiltrage": 0
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "salarieAbsences": [
    {
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
      "absencesDemiJournee": 0,
      "sansControleFraction": true
    },
    {
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
      "absencesDemiJournee": 0,
      "sansControleFraction": true
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
