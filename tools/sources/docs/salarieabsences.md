---
title: "SalarieAbsences"
slug: "salarieabsences"
updated: 2025-12-15T13:12:45Z
published: 2025-12-15T13:12:45Z
canonical: "silae-api.document360.io/salarieabsences"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAbsences

## Fonction API

```
/v1/Absences/SalarieAbsences
```

## Verbe HTTP

Post

## Description

Permet de récupérer les absences d'un salarié sur une période

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalarieAbsences | RequeteSalarieAbsences | Élément structuré contenant les paramètres de la recherche d'absences (cf. détail ci-dessous) |
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
| salarieAbsences | SalarieAbsence[] | Liste d'éléments structurés contenant les informations des absences trouvées (cf. détail ci-dessous) |

### SalarieAbsence

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
| commentaire | string | Commentaire rattaché à l'absence |
| absenceRectificative | boolean | Indique s'il s'agit d'une absence rectificative (**true**) ou pas (**false**) |

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
      "commentaire": "string",
      "absenceRectificative": true
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
      "commentaire": "string",
      "absenceRectificative": true
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
