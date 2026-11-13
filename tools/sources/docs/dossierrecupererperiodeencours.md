---
title: "DossierRecupererPeriodeEnCours"
slug: "dossierrecupererperiodeencours"
updated: 2023-06-27T02:15:00Z
published: 2023-06-27T02:15:00Z
canonical: "silae-api.document360.io/dossierrecupererperiodeencours"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# DossierRecupererPeriodeEnCours

## Fonction API

```
/v1/InfosTechniquesDossiers/DossierRecupererPeriodeEnCours
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer la période en cours d'un dossier.

## Groupe de fonctions API

DATA005

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | {{snippet.API_numerodossier}} |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeEnCours | string(date-time) | Période en cours, au format YYYY-MM-DDTHH:MM:SS. La période en cours étant un mois, cette variable correspondra toujours au premier jour du mois |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "periodeEnCours": "2020-10-14T21:46:24"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
