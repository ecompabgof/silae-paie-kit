---
title: "SalarieRecupererPeriodeDernierBulletinCalcule"
slug: "salarierecupererperiodedernierbulletincalcule"
updated: 2023-03-21T06:57:10Z
published: 2023-03-21T06:57:10Z
canonical: "silae-api.document360.io/salarierecupererperiodedernierbulletincalcule"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieRecupererPeriodeDernierBulletinCalcule

## Fonction API

```
/v1/InfosDossiers/SalarieRecupererPeriodeDernierBulletinCalcule
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer la période de paie du dernier bulletin calculé pour un salarié

## Groupe de fonctions API

DATA002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | {{snippet.API_numerodossier}} |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDernierBulletinCalcule | string(date-time) | Période du dernier bulletin calculé |

## Requête

```
{
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "periodeDernierBulletinCalcule": "2020-10-14T21:46:24"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
