---
title: "LectureReponsesQuestionnaireConventionnelSalarie"
slug: "lecturereponsesquestionnaireconventionnelsalarie"
updated: 2024-03-01T07:08:05Z
published: 2024-03-01T07:08:05Z
canonical: "silae-api.document360.io/lecturereponsesquestionnaireconventionnelsalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureReponsesQuestionnaireConventionnelSalarie

## Fonction API

```
/v1/QuestionnaireCCN/LectureReponsesQuestionnaireConventionnelSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de lire le questionnaire conventionnel d'un emploi d'un salarié.

*Plusieurs questionnaires peuvent se présenter (ex: CCN M110 - Métallurgie)*

## Groupe de fonctions API

JURID02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| qccn | QCCNReponses[] | Liste d'éléments structurés contenant les réponses et les questions de chaque convention appliquée à l'emploi (cf. détail ci-dessous) |

### QCCNReponses

| Paramètre | Type | Description |
| --- | --- | --- |
| codeCCN | string | Code de convention collective ou code territorial en cas de fusion |
| reponses | QReponse[] | Liste d'éléments structurés contenant les questions et les réponses associées à la convention et à l'emploi (cf. détail ci-dessous) |

### QReponse

| Paramètre | Type | Description |
| --- | --- | --- |
| libelleQuestion | string | Libellé de la question |
| listeChoix | LibelleValeur[] | Liste d'éléments structurés contenant les choix possibles en cas de question à choix multiples (cf. détail ci-dessous) |
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
| libelle | string | Libellé du choix |
| valeur | integer(int32) | Valeur du choix à utiliser dans le champ valeurINT32 associé |

## Requête

```
{
  "identifiantEmploi": 0,
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "qccn": [
    {
      "codeCCN": "string",
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
    },
    {
      "codeCCN": "string",
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
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
