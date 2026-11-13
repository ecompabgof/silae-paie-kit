---
title: "EditionRecapDePaieDetailleParPeriode"
slug: "editionrecapdepaiedetailleparperiode"
updated: 2026-07-21T06:08:15Z
published: 2026-07-21T06:08:15Z
canonical: "silae-api.document360.io/editionrecapdepaiedetailleparperiode"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionRecapDePaieDetailleParPeriode

## Fonction API

```
/v1/EditionEtatsPaie/EditionRecapDePaieDetailleParPeriode
```

## Verbe HTTP

Post

## Description

Permet de générer et récupérer l'édition Récapitulatif de paie détaillé par période. *Cette même fonction est proposée en mode asynchrone : [EditionRecapDePaieDetailleParPeriode](https://silae-api.document360.io/api-rest/docs/editionrecapdepaiedetailleparperiodeasynchrone)*

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement concerné ***Paramètre optionnel**.* |
| affichage | string | 0 : masquer détails (valeur par défaut) 1 : Détails cotisations ***Valeurs acceptées : 0, 1 ou par nom "masquerdetails", "detailscotisations"*** |
| format | string | - "pdf" : édition générée au format PDF - "excel" : édition générée au format EXCEL - "excelXLSX" : édition générée au format XLSX (Excel) - Par défaut PDF : supprimer ce paramètre de la requête |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle générer l'édition |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Édition générée, encodée en base64 |

## Requête

```
{
  "nomInterneEtablissement": "string",
  "affichage": "string",
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
| 13 | "La plage des périodes doit être de 12 mois maximum" | la période ne peut dépasser 12 mois |
| 1000 | "Affichage : valeur incorrecte" | Les valeurs acceptées sont indiquées dans le paramètre concerné |
