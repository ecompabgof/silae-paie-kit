---
title: "SalariesConfirmerSaisies"
slug: "salariesconfirmersaisies"
updated: 2023-03-30T13:44:30Z
published: 2023-03-30T13:44:30Z
canonical: "silae-api.document360.io/salariesconfirmersaisies"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalariesConfirmerSaisies

## Fonction API

```
/v1/ElementsVariables/SalariesConfirmerSaisies
```

## Verbe HTTP

Post

          

## Description

          

Permet de confirmer les saisies des éléments variables

- SaisiesHeuresConfirmees : correspondant au nombre de record confirmés pour les heures. (1 record = toute une ligne de saisie pour un salarié dans le menu Silae)
- SaisiePrimesConfirmees : correspondant au nombre de record réinitialisés pour les primes. (1 record = 1 colonne pour un salarié dans le menu Silae)

*Cette même fonction est proposée en mode asynchrone : [SalariesConfirmerSaisiesAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesconfirmersaisiesasynchrone)*

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
| saisiesHeuresConfirmees | integer(int32) | Indique le nombre d'heures confirmées |
| saisiesPrimesConfirmees | integer(int32) | Indique le nombre de primes confirmées |

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
  "saisiesHeuresConfirmees": 0,
  "saisiesPrimesConfirmees": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
