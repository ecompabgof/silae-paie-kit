---
title: "EcritureReponsesQuestionnaireFicheSalarie"
slug: "ecriturereponsesquestionnairefichesalarie"
updated: 2024-03-01T07:17:51Z
published: 2024-03-01T07:17:51Z
canonical: "silae-api.document360.io/ecriturereponsesquestionnairefichesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EcritureReponsesQuestionnaireFicheSalarie

## Fonction API

```
/v1/SalarieEmplois/EcritureReponsesQuestionnaireFicheSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les réponses au questionnaire Salarié sur sa fiche.

*Afin de connaître le libellé de chaque question, le nom et le type de champ correspondant, ainsi que sa valeur actuelle, veuillez exécuter au préalable la fonction API [LectureReponsesQuestionnaireFicheSalarie](https://silae-api.document360.io/api-rest/docs/lecturereponsesquestionnairefichesalarie)*

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| reponses | QReponseSimple[] | Liste d'éléments structurés contenant les réponses au questionnaire associé à la fiche du salarié (cf. détail ci-dessous |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### QReponseSimple

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Nom codifié du champ à utiliser pour modifier la valeur tel que reçu dans la fonction de lecture |
| typeChamp | string | Indique lequel des paramètres ValeurXXX doit être pris en compte |
| valeurINT32 | integer(int32) | Contient la valeur d'un champ int |
| valeurDOUBLE | number(double) | Contient la valeur d'un champ double |
| valeurSTRING | string | Contient la valeur d'un champ string |
| valeurDATETIME | string(date-time) | Contient la valeur d'un champ DateTime |
| valeurBOOL | boolean | Contient la valeur d'un champ boolean |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| message | string | Message indiquant le succès de l'appel |

## Requête

```
{
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
