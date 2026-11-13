---
title: "ModificationChampSalarie"
slug: "modificationchampsalarie"
updated: 2024-08-23T08:04:24Z
published: 2024-08-23T08:04:24Z
canonical: "silae-api.document360.io/modificationchampsalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationChampSalarie

## Fonction API

```
/v1/SalarieEmplois/ModificationChampSalarie
```

## Verbe HTTP

Post

              

## Description

              

Permet de modifier des informations de la fiche salarié. Pour faire un parallèle avec la fonction de lecture [LectureInformationsPaie](https://silae-api.document360.io/api-rest/docs/lectureinformationspaie), les champs modifiables correspondent aux champs des tables "PAISALARIE", "INTERVENANT" et "PAISALARIEEMPLOI". Les champs principaux de la fiche salarié sont décrits dans les fiches annexes [Fiche Salarié - Informations salarié](https://silae-api.document360.io/api-rest/docs/fiche-salarie-informations-salarie), [Fiche Salarié - Emploi](https://silae-api.document360.io/api-rest/docs/fiche-salarie-emploi).

Dans le cas où la mise à jour des champs s'effectue correctement, seule la valeur **null** est renvoyée. Si un champ est en erreur, un message d'erreur sera généré et aucun champ ne sera mis à jour.

Par ailleurs, il est recommandé d'utiliser la requête CreationSalarieEmploi dans un usage standard et d'utiliser la fonction ModificationChampSalarie uniquement pour des modifications à la marge.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné, s'il s'agit d'une modification liée à un emploi |
| listeChamps | ModificationChampValeursTypees[] | Liste d'éléments structurés contenant les informations des champs à modifier (cf. détail ci-dessous) |
| matricule | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ModificationChampValeursTypees

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Nom du champ à modifier |
| typeValeur | string | Indique lequel des paramètres ValeurXXX (valeur correspondante) doit être pris en compte : \| Type de valeur \| Valeur correspondante \| \| --- \| --- \| \| Integer \| Int32 \| \| Double \| double \| \| String \| string \| \| DateTime \| datetime \| \| Unsigned Byte \| byte \| \| Booléen \| bool \| ***Dans le cas où ce paramètre n'est pas valorisé, le champ est mis à jour avec la valeur NULL (valeur existante effacée)*** |
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

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Nom du champ en erreur |
| valeur | object | Valeur associée au champ |

## Requête

```
{
  "identifiantEmploi": 0,
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
  "matricule": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "nomChamp": "string",
  "valeur": null
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| Code : "1000" | Could not convert string to integer: 10.5. Path 'listeChamps[0].valeurINT32', line 7, position 27. | Dans cet exemple de message d'erreur la valeur attendue est une valeur entière et non décimale. |
