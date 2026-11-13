---
title: "SalariesDUE"
slug: "salariesdue"
updated: 2023-03-28T09:47:44Z
published: 2023-03-28T09:47:44Z
canonical: "silae-api.document360.io/salariesdue"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalariesDUE

## Fonction API

```
/v1/GenerationEnvoiDUE/SalariesDUE
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et d'envoyer automatiquement un ensemble de DUE au format EDI.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalariesDUE | RequeteSalariesDUE | Élément structuré contenant les informations des salariés permettant de générer les DUE (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalariesDUE

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculesSalaries | string[] | Liste des matricules pour lesquels générer les DUE |
| dateMinEmploi | string(date-time) | Date permettant de limiter la génération de DUE aux emplois ayant commecné à cette date. Tous les emplois seront pris en compte si la date est laissée vide. |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| nbDUEEnvoyees | integer(int32) | Nombre de DUE envoyées |

## Requête

```
{
  "requeteSalariesDUE": {
    "matriculesSalaries": [
      "string",
      "string"
    ],
    "dateMinEmploi": "2020-10-14T21:46:24"
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "nbDUEEnvoyees": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
