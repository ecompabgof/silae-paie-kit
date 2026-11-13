---
title: "AjoutSousCategorieAxeAnalytique"
slug: "ajoutsouscategorieaxeanalytique"
updated: 2026-09-15T06:17:21Z
published: 2026-09-15T06:17:21Z
canonical: "silae-api.document360.io/ajoutsouscategorieaxeanalytique"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AjoutSousCategorieAxeAnalytique

## Fonction API

```
/v1/AxesAnalytiques/AjoutSousCategorieAxeAnalytique
```

## Verbe HTTP

Post

## Description

Permet d'ajouter une sous-catégorie à un axe analytique.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomAxe | string | Nom de l'axe analytique auquel rajouter une sous-catégorie |
| nomSousCategorie | string | Nom de la sous-catégorie à rajouter. ***Les caractères spéciaux acceptés sont '.', '/' et '-' (point, slash, moins)*** |
| libelleSousCategorie | string | Libellé de la sous-catégorie à rajouter |

| numeroDossier | string |

Numéro du dossier concerné par la requête

 |

## Requête

```
{
  "nomAxe": "string",
  "nomSousCategorie": "string",
  "libelleSousCategorie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
