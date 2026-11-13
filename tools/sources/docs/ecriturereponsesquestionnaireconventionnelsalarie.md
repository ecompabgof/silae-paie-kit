---
title: "EcritureReponsesQuestionnaireConventionnelSalarie"
slug: "ecriturereponsesquestionnaireconventionnelsalarie"
updated: 2024-03-01T07:07:35Z
published: 2024-03-01T07:07:35Z
canonical: "silae-api.document360.io/ecriturereponsesquestionnaireconventionnelsalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EcritureReponsesQuestionnaireConventionnelSalarie

## Fonction API

```
/v1/QuestionnaireCCN/EcritureReponsesQuestionnaireConventionnelSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les réponses au questionnaire conventionnel d'un emploi d'un salarié.

*Plusieurs questionnaires peuvent être mis à jour (ex: CCN M110 - Métallurgie)*

## Groupe de fonctions API

JURID02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| qccn | QCCNReponsesSimple[] | Liste d'éléments structurés contenant les réponses aux questionnaires de chaque convention associés à l'emploi d'un salarié (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### QCCNReponsesSimple

| Paramètre | Type | Description |
| --- | --- | --- |
| codeCCN | string | Code de convention collective ou code territorial en cas de fusion |
| reponses | QReponseSimple[] | Liste d'éléments structurés contenant les réponses associées à la convention et à l'emploi (cf. détail ci-dessous) |

### QReponseSimple

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Nom codifié du champ à utiliser pour modifier la valeur |
| typeChamp | string | Indique lequel des paramètres ValeurXXX doit être pris en compte |
| valeurINT32 | integer(int32) | Contient la valeur d'un champ int |
| valeurDOUBLE | number(double) | Contient la valeur d'un champ double |
| valeurSTRING | string | Contient la valeur d'un champ string |
| valeurDATETIME | string(date-time) | Contient la valeur d'un champ DateTime |
| valeurBOOL | boolean | Contient la valeur d'un champ boolean |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| message | string | A compléter |

## Requête

```
{
  "identifiantEmploi": 0,
  "qccn": [
    {
      "codeCCN": "string",
      "reponses": [
        {
          "nomChamp": "string",
          "typeChamp": "string",
          "valeurINT32": 0,
          "valeurDOUBLE": 10.5,
          "valeurSTRING": "string",
          "valeurDATETIME": "2020-10-14T21:46:24",
          "valeurBOOL": true
        },
        {
          "nomChamp": "string",
          "typeChamp": "string",
          "valeurINT32": 0,
          "valeurDOUBLE": 10.5,
          "valeurSTRING": "string",
          "valeurDATETIME": "2020-10-14T21:46:24",
          "valeurBOOL": true
        }
      ]
    },
    {
      "codeCCN": "string",
      "reponses": [
        {
          "nomChamp": "string",
          "typeChamp": "string",
          "valeurINT32": 0,
          "valeurDOUBLE": 10.5,
          "valeurSTRING": "string",
          "valeurDATETIME": "2020-10-14T21:46:24",
          "valeurBOOL": true
        },
        {
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
  ],
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "message": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
