---
title: "EditionControleCICE"
slug: "editioncontrolecice"
updated: 2024-07-26T14:58:18Z
published: 2024-07-26T14:58:18Z
canonical: "silae-api.document360.io/editioncontrolecice"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionControleCICE

## Fonction API

```
/v1/EditionEtatsPaie/EditionControleCICE
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et récupérer l'édition CICE. *Cette même fonction est proposée en mode asynchrone : [EditionControleCICEAsynchrone](https://silae-api.document360.io/api-rest/docs/editioncontroleciceasynchrone)*

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle générer l'édition |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Édition générée au format PDF encodée en base64 |

## Requête

```
{
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
