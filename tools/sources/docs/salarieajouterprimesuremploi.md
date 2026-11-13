---
title: "SalarieAjouterPrimeSurEmploi"
slug: "salarieajouterprimesuremploi"
updated: 2025-08-12T09:24:15Z
published: 2025-08-12T09:24:15Z
canonical: "silae-api.document360.io/salarieajouterprimesuremploi"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterPrimeSurEmploi

## Fonction API

```
/v1/ElementsVariables/SalarieAjouterPrimeSurEmploi
```

## Verbe HTTP

Post

          

## Description

          

Permet de saisir une prime rattachée à un emploi d'un salarié. Le principe est le même que pour la fonction [SalarieAjouterPrime](https://silae-api.document360.io/api-rest/docs/salarieajouterprime) mais pour un élément variable spécifique à un emploi

**A noter** : Dans le cas où le code prime est déjà paramétrée dans le dossier de paie (PCCN), Il est essentiel d’utiliser la fonction API appropriée : [SalarieAjouterElementVariable](https://silae-api.document360.io/api-rest/docs/salarieajouterelementvariable).

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
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
  "identifiantEmploi": 0,
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
