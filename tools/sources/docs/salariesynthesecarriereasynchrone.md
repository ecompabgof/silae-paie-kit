---
title: "SalarieSyntheseCarriereAsynchrone"
slug: "salariesynthesecarriereasynchrone"
updated: 2023-12-05T04:46:32Z
published: 2023-12-05T04:46:32Z
canonical: "silae-api.document360.io/salariesynthesecarriereasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieSyntheseCarriereAsynchrone

## Fonction API

```
/v1/InfosSalaries/SalarieSyntheseCarriereAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [SalarieSyntheseCarriere](https://silae-api.document360.io/api-rest/docs/salariesynthesecarriere), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutSalarieSyntheseCarriereAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariesynthesecarriereasynchrone)

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutSalarieSyntheseCarriereAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariesynthesecarriereasynchrone) pour obtenir le résultat |

## Requête

```
{
  "matriculeSalarie": "string",
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
