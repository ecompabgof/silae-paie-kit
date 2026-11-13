---
title: "StatutImportDossierDemoAsynchrone"
slug: "statutimportdossierdemoasynchrone"
updated: 2023-06-20T09:28:20Z
published: 2023-06-20T09:28:20Z
canonical: "silae-api.document360.io/statutimportdossierdemoasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutImportDossierDemoAsynchrone

## Fonction API

```
/v1/AdminDossier/StatutImportDossierDemoAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à la fonction [ImportDossierDemoAsynchrone](https://silae-api.document360.io/api-rest/docs/ImportDossierDemoAsynchrone)

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche d'import obtenu en résultat de l'appel à [ImportDossierDemoAsynchrone](https://silae-api.document360.io/api-rest/docs/importdossierdemoasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
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
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
