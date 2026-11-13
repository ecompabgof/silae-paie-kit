---
title: "EditionRecapDePaieDetailleParSalarieAsynchrone"
slug: "editionrecapdepaiedetailleparsalarieasynchrone"
updated: 2025-07-29T06:13:25Z
published: 2025-07-29T06:13:25Z
canonical: "silae-api.document360.io/editionrecapdepaiedetailleparsalarieasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionRecapDePaieDetailleParSalarieAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/EditionRecapDePaieDetailleParSalarieAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [EditionRecapDePaieDetailleParSalarie](https://silae-api.document360.io/api-rest/docs/EditionRecapDePaieDetailleParSalarie), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEditionRecapDePaieDetailleParSalarie](https://silae-api.document360.io/api-rest/docs/StatutEditionRecapDePaieDetailleParSalarie)

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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEditionRecapDePaieDetailleParSalarieAsynchrone](https://silae-api.document360.io/api-rest/docs/StatutEditionRecapDePaieDetailleParSalarieAsynchrone) pour obtenir le résultat |

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
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 1000 | "Error converting value "" to type 'SILAE.PaieRestApi.Controllers.v1. EditionEtatsPaie.Models.TypeExportEdition. Path 'format', line x, position y." | Le format du fichier d'export n'est pas renseigné. Valeur acceptée : pdf ou excel. Valeur par défaut : format PDF, supprimer le paramètre de la requête |
