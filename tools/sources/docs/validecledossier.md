---
title: "ValideCleDossier"
slug: "validecledossier"
updated: 2024-01-02T16:42:54Z
published: 2024-01-02T16:42:54Z
canonical: "silae-api.document360.io/validecledossier"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ValideCleDossier

## Fonction API

```
/v1/Connexion/ValideCleDossier
```

## Verbe HTTP

Post

          

## Description

          

Permet de déverrouiller l'accès à un dossier protégé par un mot de passe, pendant toute la durée de la session.

*Si la session reste inactive plus de 5 minutes, il sera nécessaire de lancer à nouveau cette fonction.Tenir compte également du temps de validité du token*.

## Groupe de fonctions API

CNX0001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| cle | string | Le mot de passe du dossier |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Requête

```
{
  "cle": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| unknown | "Clé d'accès incorrecte" | La clé d'accès (mot de passe) n'est pas valide |
| unknown | "La clé comporte plus de 10 caractères" | La clé d'accès (mot de passe) contient plus de 10 caractères |
| unknown | "Clé non décrite" | La clé d'accès (mot de passe) est vide (non renseignée) |
