---
title: "SalarieReinitialiserIdentifiantsEmploisExternes"
slug: "salariereinitialiseridentifiantsemploisexternes"
updated: 2023-05-19T10:47:25Z
published: 2023-05-19T10:47:25Z
canonical: "silae-api.document360.io/salariereinitialiseridentifiantsemploisexternes"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieReinitialiserIdentifiantsEmploisExternes

## Fonction API

```
/v1/SalarieEmplois/SalarieReinitialiserIdentifiantsEmploisExternes
```

## Verbe HTTP

Post

          

## Description

          

Permet de réinitialiser les identifiants des missions en les reclassant par ordre chronologique et "sans trou"

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du travailleur externe |
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
