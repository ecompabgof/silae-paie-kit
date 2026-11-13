---
title: "SalariesConfirmerSaisiesAsynchrone"
slug: "salariesconfirmersaisiesasynchrone"
updated: 2023-03-28T09:42:16Z
published: 2023-03-28T09:42:16Z
canonical: "silae-api.document360.io/salariesconfirmersaisiesasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalariesConfirmerSaisiesAsynchrone

## Fonction API

```
/v1/ElementsVariables/SalariesConfirmerSaisiesAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [SalariesConfirmerSaisies](https://silae-api.document360.io/api-rest/docs/salariesconfirmersaisies), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutSalariesConfirmerSaisiesAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariesconfirmersaisiesasynchrone)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| confirmationSaisies | SalariesConfirmerSaisies | Élément structuré contenant les informations sur les saisies à confirmer (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalariesConfirmerSaisies

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeConfirmation | string(date-time) | Période de paie sur laquelle confirmer les saisies |
| confirmerHeures | boolean | Permet de confirmer les heures (**true**) ou non (**false**) |
| confirmerPrimes | boolean | Permet de confirmer les primes (**true**) ou non (**false**) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutSalariesConfirmerSaisiesAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariesconfirmersaisiesasynchrone) pour obtenir le résultat |

## Requête

```
{
  "confirmationSaisies": {
    "periodeConfirmation": "2020-10-14T21:46:24",
    "confirmerHeures": true,
    "confirmerPrimes": true
  },
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
