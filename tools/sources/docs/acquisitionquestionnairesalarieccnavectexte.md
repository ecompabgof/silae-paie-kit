---
title: "AcquisitionQuestionnaireSalarieCCNAvecTexte"
slug: "acquisitionquestionnairesalarieccnavectexte"
updated: 2023-03-21T07:05:14Z
published: 2023-03-21T07:05:14Z
canonical: "silae-api.document360.io/acquisitionquestionnairesalarieccnavectexte"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AcquisitionQuestionnaireSalarieCCNAvecTexte

## Fonction API

```
/v1/QuestionnaireCCN/AcquisitionQuestionnaireSalarieCCNAvecTexte
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer les informations des questionnaires conventionnels salarié de la même manière que la fonction [AcquisitionQuestionnaireSalarieCCN](https://silae-api.document360.io/api-rest/docs/acquisitionquestionnairesalarieccn), avec en plus les titres et textes rattachés à ces questions dans Silae. Les titres et textes sont remontés de la même manière que les questions, mais avec respectivement comme type de champ "TITRE" et "TEXTE".

## Groupe de fonctions API

JURID02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| code_CCN | string | Identifiant Silae de la convention collective |
| listeChamps | ModificationChampValeursTypees[] | Liste d'éléments structurés contenant les critères de recherche (cf. détail ci-dessous) |

### ModificationChampValeursTypees

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Nom du champ |
| typeValeur | string | Indique lequel des paramètres ValeurXXX doit être pris en compte : {{snippet.API_correspondances_typevaleur}} |
| valeurINT32 | integer(int32) | Contient la valeur d'un champ int |
| valeurDOUBLE | number(double) | Contient la valeur d'un champ double |
| valeurSTRING | string | Contient la valeur d'un champ string |
| valeurDATETIME | string(date-time) | Contient la valeur d'un champ DateTime |
| valeurBYTE | integer(int32) | Contient la valeur d'un champ unsignedByte |
| valeurBOOL | boolean | Contient la valeur d'un champ boolean |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| qccn | QCCN[] | Liste d'éléments structurés contenant les informations (questions) du questionnaire conventionnel (cf. détail ci-dessous) |

### QCCN

| Paramètre | Type | Description |
| --- | --- | --- |
| libelleQuestion | string | Libellé de la question |
| nomChamp | string | Nom du champ lié à la question ( utile notamment pour la mise à jour du champ par la modification de la fiche salarié) |
| typeChamp | string | Type du champ lié à la question |
| nombreEntier | integer(int32) | Si le type de champ est Int32 ou double, correspond au nombre d'entiers |
| nombreDecimale | integer(int32) | Si le type de champ est double, correspond au nombre de décimales |
| listeChoix | LibelleValeur[] | Liste d'éléments structurés contenant les informations des choix possibles pour répondre à la question (cf. détail ci-dessous). Si **ListeChoix** est null, la réponse est ouverte à la saisie et n'est pas limitée à un choix prédéterminé |

### LibelleValeur

| Paramètre | Type | Description |
| --- | --- | --- |
| libelle | string | Libellé du choix |
| valeur | integer(int32) | Valeur correspondante du choix |

## Requête

```
{
  "code_CCN": "string",
  "listeChamps": [
    {
      "nomChamp": "string",
      "typeValeur": "string",
      "valeurINT32": 0,
      "valeurDOUBLE": 10.5,
      "valeurSTRING": "string",
      "valeurDATETIME": "2020-10-14T21:46:24",
      "valeurBYTE": 0,
      "valeurBOOL": true
    },
    {
      "nomChamp": "string",
      "typeValeur": "string",
      "valeurINT32": 0,
      "valeurDOUBLE": 10.5,
      "valeurSTRING": "string",
      "valeurDATETIME": "2020-10-14T21:46:24",
      "valeurBYTE": 0,
      "valeurBOOL": true
    }
  ]
}
```

## Réponse

```
{
  "qccn": [
    {
      "libelleQuestion": "string",
      "nomChamp": "string",
      "typeChamp": "string",
      "nombreEntier": 0,
      "nombreDecimale": 0,
      "listeChoix": [
        {
          "libelle": "string",
          "valeur": 0
        },
        {
          "libelle": "string",
          "valeur": 0
        }
      ]
    },
    {
      "libelleQuestion": "string",
      "nomChamp": "string",
      "typeChamp": "string",
      "nombreEntier": 0,
      "nombreDecimale": 0,
      "listeChoix": [
        {
          "libelle": "string",
          "valeur": 0
        },
        {
          "libelle": "string",
          "valeur": 0
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
