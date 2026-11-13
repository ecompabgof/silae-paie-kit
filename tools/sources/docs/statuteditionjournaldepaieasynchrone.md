---
title: "StatutEditionJournalDePaieAsynchrone"
slug: "statuteditionjournaldepaieasynchrone"
updated: 2024-07-26T15:00:24Z
published: 2024-07-26T15:00:24Z
canonical: "silae-api.document360.io/statuteditionjournaldepaieasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutEditionJournalDePaieAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/StatutEditionJournalDePaieAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [EditionJournalDePaieAsynchrone](https://silae-api.document360.io/api-rest/docs/editionjournaldepaieasynchrone)

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [EditionJournalDePaieAsynchrone](https://silae-api.document360.io/api-rest/docs/editionjournaldepaieasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Édition générée au format PDF encodée en base64 |
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
