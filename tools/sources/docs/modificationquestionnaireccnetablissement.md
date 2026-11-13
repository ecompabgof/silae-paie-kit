---
title: "ModificationQuestionnaireCCNEtablissement"
slug: "modificationquestionnaireccnetablissement"
updated: 2023-05-19T10:57:16Z
published: 2023-05-19T10:57:16Z
canonical: "silae-api.document360.io/modificationquestionnaireccnetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationQuestionnaireCCNEtablissement

## Fonction API

```
/v1/FicheSociete/ModificationQuestionnaireCCNEtablissement
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les informations des questionnaires conventionnels établissement.

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement concerné |
| code_CCN | string | Identifiant Silae de la convention collective concernée |
| listeChamps | ModificationChampValeursTypees[] | Liste d'éléments structurés contenant les critères de recherche (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ModificationChampValeursTypees

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Nom du champ |
| typeValeur | string | Indique lequel des paramètres ValeurXXX doit être pris en compte : \| Type de valeur \| Valeur correspondante \| \| --- \| --- \| \| Integer \| Int32 \| \| Double \| double \| \| String \| string \| \| DateTime \| datetime \| \| Unsigned Byte \| byte \| \| Booléen \| bool \| |
| Type de valeur | Valeur correspondante |
| Integer | Int32 |
| Double | double |
| String | string |
| DateTime | datetime |
| Unsigned Byte | byte |
| Booléen | bool |
| valeurINT32 | integer(int32) | Contient la valeur d'un champ int |
| valeurDOUBLE | number(double) | Contient la valeur d'un champ double |
| valeurSTRING | string | Contient la valeur d'un champ string |
| valeurDATETIME | string(date-time) | Contient la valeur d'un champ DateTime |
| valeurBYTE | integer(int32) | Contient la valeur d'un champ unsignedByte |
| valeurBOOL | boolean | Contient la valeur d'un champ boolean |

## Requête

```
{
  "nomInterneEtablissement": "string",
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
  ],
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
