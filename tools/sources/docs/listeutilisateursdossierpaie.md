---
title: "ListeUtilisateursDossierPaie"
slug: "listeutilisateursdossierpaie"
updated: 2023-05-19T06:03:01Z
published: 2023-05-19T06:03:01Z
canonical: "silae-api.document360.io/listeutilisateursdossierpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeUtilisateursDossierPaie

## Fonction API

```
/v1/Contacts/ListeUtilisateursDossierPaie
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la liste des identifiants des utilisateurs de type "Contact" rattachés au dossier

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeUtilisateursDossierPaie | string[] | Liste des utilisateurs de type Contact |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeUtilisateursDossierPaie": [
    "string",
    "string"
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
