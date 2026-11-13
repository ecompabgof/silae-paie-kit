---
title: "EditionRecapDePaieDetailleParSalarie"
slug: "editionrecapdepaiedetailleparsalarie"
updated: 2025-07-29T06:13:25Z
published: 2025-07-29T06:13:25Z
canonical: "silae-api.document360.io/editionrecapdepaiedetailleparsalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionRecapDePaieDetailleParSalarie

## Fonction API

```
/v1/EditionEtatsPaie/EditionRecapDePaieDetailleParSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et récupérer l'édition récapitulatif de paie détaillé par salarié. *Cette même fonction est proposée en mode asynchrone : [EditionRecapDePaieDetailleParSalarieAsynchrone](https://silae-api.document360.io/api-rest/docs/EditionRecapDePaieDetailleParSalarieAsynchrone)*

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom de l'établissement sur lequel on souhaite filtrer l'édition (facultatif) |
| format | string | - "pdf" : édition générée au format PDF - "excel" : édition générée au format EXCEL - "excelXLSX" : édition générée au format XLSX (Excel) - Par défaut PDF : supprimer ce paramètre de la requête |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle générer l'édition |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Édition générée au format PDF ou EXCEL encodée en base64 |

## Requête

```
{
  "nomInterneEtablissement": "string",
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
