---
title: "GererEtatDossierPaie"
slug: "gereretatdossierpaie"
updated: 2023-05-19T05:53:00Z
published: 2023-05-19T05:53:00Z
canonical: "silae-api.document360.io/gereretatdossierpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# GererEtatDossierPaie

## Fonction API

```
/v1/AdminDossier/GererEtatDossierPaie
```

## Verbe HTTP

Post

          

## Description

          

Permet de rendre un dossier actif ou inactif au niveau de la paie

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| desactiver | boolean | Permet de désactiver **true** ou d'activer **false** un dossier de paie |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Requête

```
{
  "desactiver": true,
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
