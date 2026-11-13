---
title: "ModificationAxesAnalytiquesSalarie"
slug: "modificationaxesanalytiquessalarie"
updated: 2025-01-14T06:49:40Z
published: 2025-01-14T06:49:40Z
canonical: "silae-api.document360.io/modificationaxesanalytiquessalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationAxesAnalytiquesSalarie

## Fonction API

```
/v1/SalarieEmplois/ModificationAxesAnalytiquesSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier l'axe analytique d'un salarié en se référent directement au titre de la catégorie d'affectation.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| titreCategorie | string | Nouvelle catégorie à affecter |
| sousCategorieParDefaut | string | Nouvelle sous catégorie à affecter. Pour enlever l'affectation laisser le champ à vide. |
| matricule | string | Matricule du salarié |
| numeroDossier | string | Numéro de dossier |

## Requête

```
{
  "titreCategorie": "string",
  "sousCategorieParDefaut": "string",
  "matricule": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
