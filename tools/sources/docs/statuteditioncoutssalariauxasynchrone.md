---
title: "StatutEditionCoutsSalariauxAsynchrone"
slug: "statuteditioncoutssalariauxasynchrone"
updated: 2025-04-29T08:44:48Z
published: 2025-04-29T08:44:48Z
canonical: "silae-api.document360.io/statuteditioncoutssalariauxasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutEditionCoutsSalariauxAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/StatutEditionCoutsSalariauxAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [EditionCousSalariauxAsynchrone](https://silae-api.document360.io/api-rest/docs/editioncoutssalariauxasynchrone)

## Groupe de fonctions API

CYCLE01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [EditionCoutsSalariauxAsynchrone](https://silae-api.document360.io/api-rest/docs/editioncoutssalariauxasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Édition générée, encodée en base64 |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

## Requête

```
{
  "guidTache": "string"
}
```

## Réponse

```
{
  "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg==",
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
