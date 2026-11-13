---
title: "SoldeReposAsynchrone"
slug: "soldereposasynchrone"
updated: 2024-11-13T14:33:19Z
published: 2024-11-13T14:33:19Z
canonical: "silae-api.document360.io/soldereposasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SoldeReposAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/SoldeReposAsynchrone
```

## Verbe HTTP

Post

              

## Description

              

Cette fonction est identique à [SoldeRepos](https://silae-api.document360.io/api-rest/docs/solderepos), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutSoldeReposAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsoldereposasynchrone)

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné (facultatif) |
| periode | string(date) | Période pour laquelle remonter les informations de repos. *La date doit être au format AAAA-MM-JJ* |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutSoldeReposAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsoldereposasynchrone) pour obtenir le résultat |

## Requête

```
{
  "matriculeSalarie": "string",
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
