---
title: "RecupererDeclarationsAsynchrone"
slug: "recupererdeclarationsasynchrone"
updated: 2025-12-05T15:56:49Z
published: 2025-12-05T15:56:49Z
canonical: "silae-api.document360.io/recupererdeclarationsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererDeclarationsAsynchrone

## Fonction API

```
/v1/DeclarationPDF/RecupererDeclarationsAsynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [RecupererDeclarations](https://silae-api.document360.io/api-rest/docs/recupererdeclarations), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutRecupererDeclarationsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutrecupererdeclarationsasynchrone)

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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutRécupererDeclarationsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutrecupererdeclarationsasynchrone) pour obtenir le résultat |

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
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Vous n'avez pas l'autorisation d'accéder aux états des déclarations de ce dossier" | Les droits d'accès sont insuffisants pour exploiter cette fonction API. Vérifier notamment l'option ***Droits limités en paie*** sur fiche Collaborateur qui doit être décochée |
