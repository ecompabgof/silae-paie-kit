---
title: "SalarieAjouterPrime"
slug: "salarieajouterprime"
updated: 2026-06-12T14:10:12Z
published: 2026-06-12T14:10:12Z
canonical: "silae-api.document360.io/salarieajouterprime"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterPrime

## Fonction API

```
/v1/ElementsVariables/SalarieAjouterPrime
```

## Verbe HTTP

Post

          

## Description

          

Permet de saisir une prime pour un salarié.

**A noter** : Dans le cas où le code prime est déjà paramétrée dans le dossier de paie (PCCN), Il est essentiel d’utiliser la fonction API appropriée : [SalarieAjouterElementVariable](https://silae-api.document360.io/api-rest/docs/salarieajouterelementvariable).

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| prime | SalariePrime | Élément structuré contenant les informations de la prime à saisir (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalariePrime

| Paramètre | Type | Description |
| --- | --- | --- |
| periodePrime | string(date-time) | Période pour laquelle saisir la prime |
| codePrime | string | Code de la prime à saisir. Doit correspondre à un code existant dans Silae |
| montantPrime | number(double) | Valeur de la prime à saisir s'il s'agit d'un montant |
| valeurChainePrime | string | Valeur de la prime à saisir s'il s'agit d'une chaîne de caractères |
| primeNette | boolean | Permet d'indiquer s'il s'agit dun'e prime nette (**true**) ou non (**false**) |
| intituleBulletin | string | Intitulé de la prime tel qu'il apparaîtra sur le bulletin (ne doit pas contenir de retour chariot ni dépasser 45 caractères) |
| intituleCourt | string | Intitulé qui apparaîtra dans la colonne de l'écran des éléments variables (ne doit pas dépasser 10 caractères pour être pris en compte) |

## Requête

```
{
  "prime": {
    "periodePrime": "2020-10-14T21:46:24",
    "codePrime": "string",
    "montantPrime": 10.5,
    "valeurChainePrime": "string",
    "primeNette": true,
    "intituleBulletin": "string",
    "intituleCourt": "string"
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
