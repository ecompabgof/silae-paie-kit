---
title: "EditionRecapDePaieDetailleParPeriodeAsynchrone"
slug: "editionrecapdepaiedetailleparperiodeasynchrone"
updated: 2026-07-21T06:08:15Z
published: 2026-07-21T06:08:15Z
canonical: "silae-api.document360.io/editionrecapdepaiedetailleparperiodeasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionRecapDePaieDetailleParPeriodeAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/EditionRecapDePaieDetailleParPeriodeAsynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [EditionRecapDePaieDetailleParPeriode](https://silae-api.document360.io/api-rest/docs/editionrecapdepaiedetailleparperiode), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEditionRecapDePaieDetailleParPeriodeAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionrecapdepaiedetailleparperiodeasynchrone)

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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEditionRecapDePaieDetailleParPeriodeAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionrecapdepaiedetailleparperiodeasynchrone) pour obtenir le résultat |

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
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 13 | "La plage des périodes doit être de 12 mois maximum" | la période ne peut dépasser 12 mois |
| 1000 | "Affichage : valeur incorrecte" | Les valeurs acceptées sont indiquées dans le paramètre concerné |
