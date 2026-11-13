---
title: "EditionSoldeDeRepos"
slug: "editionsoldederepos"
updated: 2025-07-29T06:13:25Z
published: 2025-07-29T06:13:25Z
canonical: "silae-api.document360.io/editionsoldederepos"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionSoldeDeRepos

## Fonction API

```
/v1/EditionEtatsPaie/EditionSoldeDeRepos
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et récupérer l'édition Solde de repos. *Cette même fonction est proposée en mode asynchrone : [EditionSoldeDeReposAsynchrone](https://silae-api.document360.io/api-rest/docs/editionsoldedereposasynchrone)*

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| format | string | - "pdf" : édition générée au format PDF - "excel" : édition générée au format EXCEL - "excelXLSX" : édition générée au format XLSX (Excel) - Par défaut PDF : supprimer ce paramètre de la requête |
| optionEdition | string | Cette option permet d'obtenir avec la valeur : - 1 : édition Classique - 2 : édition Jours CP - 3 (par défaut) : édition Détaillée - 4 : édition Détaillée avec charges fiscales - 5 : édition Détaillée Par Période - 6 : édition avec répartition analytique (uniquement sur le 1er axe analytique) |
| titreCategorie | string | Nom de l'axe analytique si le paramètre précédent, optionEdition = 6 ***Si ce paramètre n'est pas présent ou contient une valeur non renseignée, on obtient une édition avec répartition analytique sur le 1er axe analytique)*** |
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
  "optionEdition": "string",
  "titreCategorie": "string",
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
