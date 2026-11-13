---
title: "EditionEtatDesPaiements"
slug: "editionetatdespaiements"
updated: 2026-10-05T12:52:29Z
published: 2026-10-05T12:52:29Z
canonical: "silae-api.document360.io/editionetatdespaiements"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionEtatDesPaiements

## Fonction API

```
/v1/EditionEtatsPaie/EditionEtatDesPaiements
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et récupérer l'édition État des paiements. *Cette même fonction est proposée en mode asynchrone : [EditionEtatDesPaiementsAsynchrone](https://silae-api.document360.io/api-rest/docs/editionetatdespaiementsasynchrone)*

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| format | string | - "pdf" : édition générée au format PDF - "excel" : édition générée au format EXCEL - "excelXLSX" : édition générée au format XLSX (Excel) - Par défaut PDF : supprimer ce paramètre de la requête |
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
  "format": "string",
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
| 1000 | "Error converting value "" to type 'SILAE.PaieRestApi.Controllers.v1. EditionEtatsPaie.Models.TypeExportEdition. Path 'format', line x, position y." | Le format du fichier d'export n'est pas renseigné. Valeur acceptée : pdf ou excel. Valeur par défaut : format PDF, supprimer le paramètre de la requête |
