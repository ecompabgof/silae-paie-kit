---
title: "StatutSalariesConfirmerSaisiesAsynchrone"
slug: "statutsalariesconfirmersaisiesasynchrone"
updated: 2023-03-30T13:44:14Z
published: 2023-03-30T13:44:14Z
canonical: "silae-api.document360.io/statutsalariesconfirmersaisiesasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutSalariesConfirmerSaisiesAsynchrone

## Fonction API

```
/v1/ElementsVariables/StatutSalariesConfirmerSaisiesAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [SalariesConfirmerSaisiesAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesconfirmersaisiesasynchrone)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [SalariesConfirmerSaisiesAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesconfirmersaisiesasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| saisiesHeuresConfirmees | integer(int32) | Indique le nombre d'heures confirmées |
| saisiesPrimesConfirmees | integer(int32) | Indique le nombre de primes confirmées |
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
  "saisiesHeuresConfirmees": 0,
  "saisiesPrimesConfirmees": 0,
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
