---
title: "LectureReponsesQuestionnaireFicheSalarie"
slug: "lecturereponsesquestionnairefichesalarie"
updated: 2025-10-15T07:00:55Z
published: 2025-10-15T07:00:55Z
canonical: "silae-api.document360.io/lecturereponsesquestionnairefichesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureReponsesQuestionnaireFicheSalarie

## Fonction API

```
/v1/InfosSalaries/LectureReponsesQuestionnaireFicheSalarie
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer les réponses au questionnaire Salarié avec leurs libellés respectifs depuis sa fiche.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| reponses | QReponse[] | Liste d'éléments structurés contenant les questions et les réponses au questionnaire associé à la fiche du salarié (cf. détail ci-dessous) |

### QReponse

| Paramètre | Type | Description |
| --- | --- | --- |
| libelleQuestion | string | Libellé de la question tel qu'il apparait sur la fiche du salarié |
| listeChoix | LibelleValeur[] | N/A |
| nomChamp | string | Nom codifié du champ à utiliser pour modifier la valeur |
| typeChamp | string | Indique lequel des paramètres ValeurXXX doit être pris en compte |
| valeurINT32 | integer(int32) | Contient la valeur d'un champ int |
| valeurDOUBLE | number(double) | Contient la valeur d'un champ double |
| valeurSTRING | string | Contient la valeur d'un champ string |
| valeurDATETIME | string(date-time) | Contient la valeur d'un champ DateTime |
| valeurBOOL | boolean | Contient la valeur d'un champ boolean |

### LibelleValeur

| Paramètre | Type | Description |
| --- | --- | --- |
| libelle | string | N/A |
| valeur | integer(int32) | N/A |

## Requête

```
{
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "reponses": [
    {
      "libelleQuestion": "string",
      "listeChoix": [
        {
          "libelle": "string",
          "valeur": 0
        },
        {
          "libelle": "string",
          "valeur": 0
        }
      ],
      "nomChamp": "string",
      "typeChamp": "string",
      "valeurINT32": 0,
      "valeurDOUBLE": 10.5,
      "valeurSTRING": "string",
      "valeurDATETIME": "2020-10-14T21:46:24",
      "valeurBOOL": true
    },
    {
      "libelleQuestion": "string",
      "listeChoix": [
        {
          "libelle": "string",
          "valeur": 0
        },
        {
          "libelle": "string",
          "valeur": 0
        }
      ],
      "nomChamp": "string",
      "typeChamp": "string",
      "valeurINT32": 0,
      "valeurDOUBLE": 10.5,
      "valeurSTRING": "string",
      "valeurDATETIME": "2020-10-14T21:46:24",
      "valeurBOOL": true
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
