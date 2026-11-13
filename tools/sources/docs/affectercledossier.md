---
title: "AffecterCleDossier"
slug: "affectercledossier"
updated: 2023-04-07T05:10:54Z
published: 2023-04-07T05:10:54Z
canonical: "silae-api.document360.io/affectercledossier"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AffecterCleDossier

## Fonction API

```
/v1/AdminDossier/AffecterCleDossier
```

## Verbe HTTP

Post

          

## Description

          

Permet de définir un mot de passe pour accéder au dossier. Pour pouvoir définir un mot de passe, il faut avoir accès au dossier, c'est à dire que pour changer le mot de passe d'un dossier déjà protégé, il faudra en amont déverrouiller l'accès en utilisant la fonction [ValideCleDossier](https://silae-api.document360.io/api-rest/docs/validecledossier)

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nouvelleCle | string | Mot de passe à appliquer au dossier |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Requête

```
{
  "nouvelleCle": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
