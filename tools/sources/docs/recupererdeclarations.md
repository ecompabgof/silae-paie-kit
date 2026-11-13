---
title: "RecupererDeclarations"
slug: "recupererdeclarations"
updated: 2025-12-05T15:56:08Z
published: 2025-12-05T15:56:08Z
canonical: "silae-api.document360.io/recupererdeclarations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererDeclarations

## Fonction API

```
/v1/DeclarationPDF/RecupererDeclarations
```

## Verbe HTTP

Post

## Description

Permet de récupérer les récapitulatifs des déclarations de la période au format PDF. *Cette même fonction est proposée en mode asynchrone : [RecupererDeclarationsAsynchrone](https://silae-api.document360.io/api-rest/docs/recupererdeclarationsasynchrone)*

## Groupe de fonctions API

CYCLE01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date) | Période pour laquelle récupérer les récapitulatifs des déclarations. *La date doit être au format AAAA-MM-JJ* |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Document PDF regroupant l'ensemble des récapitulatifs encodé en base64 |

## Requête

```
{
  "periode": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Vous n'avez pas l'autorisation d'accéder aux états des déclarations de ce dossier" | Les droits d'accès sont insuffisants pour exploiter cette fonction API. Vérifier notamment l'option ***Droits limités en paie*** sur fiche Collaborateur qui doit être décochée |
