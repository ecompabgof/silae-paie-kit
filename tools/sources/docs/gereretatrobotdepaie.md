---
title: "GererEtatRobotDePaie"
slug: "gereretatrobotdepaie"
updated: 2023-06-19T08:57:29Z
published: 2023-06-19T08:57:29Z
canonical: "silae-api.document360.io/gereretatrobotdepaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# GererEtatRobotDePaie

## Fonction API

```
/v1/AdminDossier/GererEtatRobotDePaie
```

## Verbe HTTP

Post

          

## Description

          

Permet de rendre actif/inactif le robot d'un dossier de paie

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| desactiver | boolean | Permet d'activer (**false**) ou désactiver (**true**) le robot de paie de ce dossier |
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
