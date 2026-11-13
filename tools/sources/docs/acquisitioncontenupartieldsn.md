---
title: "AcquisitionContenuPartielDSN"
slug: "acquisitioncontenupartieldsn"
updated: 2026-02-06T16:02:45Z
published: 2026-02-06T16:02:45Z
canonical: "silae-api.document360.io/acquisitioncontenupartieldsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AcquisitionContenuPartielDSN

## Fonction API

```
/v1/InfosDeclaration/AcquisitionContenuPartielDSN
```

## Verbe HTTP

Post

## Description

Permet de récupérer le contenu de la DSN de manière partielle ou complète, en fonction des blocs renseignés en paramètre.

A noter : La fonction [ListeDSNMensuelles](https://silae-api.document360.io/api-rest/docs/listedsnmensuelles) permet de récupérer la liste des DSN mensuelles générées avec notamment des données utiles comme le code organisme, le numéro d'affiliation.

## Groupe de fonctions API

DATA004

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement concerné |
| codeOrganisme | string | Code organisme ***A renseigner si l'appel à la fonction [ListeDSNMensuelles](https://silae-api.document360.io/api-rest/docs/listedsnmensuelles) le précise*** |
| numeroAffiliation | string | Numéro d'affiliation de l'organisme ***A renseigner si l'appel à la fonction [ListeDSNMensuelles](https://silae-api.document360.io/api-rest/docs/listedsnmensuelles) le précise*** |
| typeDSN | integer(int32) | Type de DSN (peut être récupéré via l'appel à la fonction [ListeDSNMensuelles](https://silae-api.document360.io/api-rest/docs/listedsnmensuelles)). Ce Type apparaît dans l'écran DSN au début du libellé de l'organisme social et permet de faire la distinction entre différents types de DSN : \| Type de DSN \| Valeur correspondante \| \| --- \| --- \| \| Non attribué \| 0 \| \| Net-Entreprises \| 1 \| \| MSA \| 2 \| \| Avec PASRAU \| 3 \| \| DSM Monaco \| 4 \| |
| Type de DSN | Valeur correspondante |
| Non attribué | 0 |
| Net-Entreprises | 1 |
| MSA | 2 |
| Avec PASRAU | 3 |
| DSM Monaco | 4 |
| segments | string[] | Liste des blocs à récupérer, au format "XXX.YYY.ZZ" par exemple : "S21.G00.30" |
| fraction | integer(int32) | En cas de DSN fractionnée pour le mois, l'organisme et l'établissement, cet index auto-incrémenté par date de calcul (1,23,etc.) permet d'identifier la fraction de DSN à récupérer (peut être récupéré via l'appel à la fonction [ListeDSNMensuelles](https://silae-api.document360.io/api-rest/docs/listedsnmensuelles)) |
| periode | string(date) | Période pour laquelle remonter les informations *La date doit être au format AAAA-MM-JJ* |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| contenuPartiel | string(byte) | Contenu de la DSN structuré, encodé en base64 |

## Requête

```
{
  "nomInterneEtablissement": "string",
  "codeOrganisme": "string",
  "numeroAffiliation": "string",
  "typeDSN": 0,
  "segments": [
    "string",
    "string"
  ],
  "fraction": 0,
  "periode": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "contenuPartiel": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Vous n'avez pas l'autorisation d'accéder aux états des déclarations de ce dossier" | Les droits d'accès sont insuffisants pour exploiter cette fonction API. Vérifier notamment l'option ***Droits limités en paie*** sur fiche Collaborateur qui doit être décochée |
