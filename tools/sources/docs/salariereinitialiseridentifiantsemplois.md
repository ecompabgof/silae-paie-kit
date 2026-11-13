---
title: "SalarieReinitialiserIdentifiantsEmplois"
slug: "salariereinitialiseridentifiantsemplois"
updated: 2023-05-19T10:46:57Z
published: 2023-05-19T10:46:57Z
canonical: "silae-api.document360.io/salariereinitialiseridentifiantsemplois"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieReinitialiserIdentifiantsEmplois

## Fonction API

```
/v1/SalarieEmplois/SalarieReinitialiserIdentifiantsEmplois
```

## Verbe HTTP

Post

          

## Description

          

Permet de réinitialiser les identifiants emplois en les reclassant par ordre chronologique et "sans trou"

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Requête

```
{
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
