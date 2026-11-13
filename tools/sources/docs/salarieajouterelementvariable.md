---
title: "SalarieAjouterElementVariable"
slug: "salarieajouterelementvariable"
updated: 2026-05-12T08:03:08Z
published: 2026-05-12T08:15:42Z
canonical: "silae-api.document360.io/salarieajouterelementvariable"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterElementVariable

## Fonction API

```
/v1/ElementsVariables/SalarieAjouterElementVariable
```

## Verbe HTTP

Post

## Description

Permet de saisir un élément variable.

**A noter** : Le paramètre ***codeElementVariable*** doit exister dans un profil de primes utilisé lors du calcul du bulletin. Si ce n'est pas le cas, Il ne sera pas pris en compte et sera supprimé au prochain calcul de bulletin.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| elementVariable | SalarieElementVariable | Élément structuré contenant les informations de l'élément variable à saisir (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieElementVariable

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeElementVariable | string(date-time) | Période pour laquelle saisir l'élément variable |
| codeElementVariable | string | Code de l'élément variable à saisir. Ce code doit exister dans un profil de primes utilisé lors du calcul du bulletin. Si ce n'est pas le cas, l'élément variable saisi ne sera pas pris en compte et sera supprimé au prochain calcul de bulletin |
| montantElementVariable | number(double) | Valeur de l'élément variable à saisir, s'il s'agit d'un montant |
| valeurChaineElementVariable | string | Valeur de l'élément variable à saisir, s'il s'agit d'une chaîne de caractères |
| ControleExistenceElementVariable | string | Permet de contrôler l'existence du code élément variable (paramètre optionnel) |

## Requête

```
{
  "elementVariable": {
    "periodeElementVariable": "2020-10-14T21:46:24",
    "codeElementVariable": "string",
    "montantElementVariable": 10.5,
    "valeurChaineElementVariable": "string",
    "controleExistenceElementVariable": true
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Le bulletin est calculé. Il faut le supprimer pour permettre la prise en compte de la nouvelle valeur de l'élément variable." | Pour prendre en compte la valeur de l'élément variable, il est nécessaire de supprimer le bulletin calculé |
|  | "Veuillez vérifier le code, celui-ci semble être incorrect." | Le code élément variable semble incorrect. veuillez contrôler dans le dossier de paie concerné |
