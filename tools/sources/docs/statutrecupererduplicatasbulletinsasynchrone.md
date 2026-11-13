---
title: "StatutRecupererDuplicatasBulletinsAsynchrone"
slug: "statutrecupererduplicatasbulletinsasynchrone"
updated: 2026-10-20T08:00:59Z
published: 2026-10-20T08:00:59Z
canonical: "silae-api.document360.io/statutrecupererduplicatasbulletinsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutRecupererDuplicatasBulletinsAsynchrone

## Fonction API

```
/v1/RecuperationBulletins/StatutRecupererDuplicatasBulletinsAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [RecupererDuplicatasBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/recupererduplicatasbulletinsasynchrone)

## Groupe de fonctions API

BLTIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [RecupererDuplicatasBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/recupererduplicatasbulletinsasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Document PDF encodé en base64 contenant le résultat demandé : peut contenir un à N duplicatas bulletins concaténés |
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
