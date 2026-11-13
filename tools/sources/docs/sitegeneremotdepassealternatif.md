---
title: "SiteGenereMotDePasseAlternatif"
slug: "sitegeneremotdepassealternatif"
updated: 2024-03-13T15:57:34Z
published: 2024-03-13T15:57:34Z
canonical: "silae-api.document360.io/sitegeneremotdepassealternatif"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SiteGenereMotDePasseAlternatif

## Fonction API

```
/v1/SSO/SiteGenereMotDePasseAlternatif
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer un mot de passe alternatif pour un compte.

*Pour exploiter cette fonction API, il est nécessaire d'activer l'option **Utilisation API > Génération de mot de passe alternatif** dans les droits d'accès de la fiche Collaborateur ou Contact, utilisateur des appels API.*

## Groupe de fonctions API

SSO0001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeUtilisateur | string | Identifiant du compte |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| motDePasseAlternatif | string | Mot de passe alternatif |

## Requête

```
{
  "codeUtilisateur": "string"
}
```

## Réponse

```
{
  "motDePasseAlternatif": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| Erreur | "Erreur : opération interdite" | L'utilisateur n'est pas autorisé à utiliser cette fonction API |
