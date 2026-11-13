---
title: "SalarieSalaireDeBase"
slug: "salariesalairedebase"
updated: 2023-05-19T10:01:59Z
published: 2023-05-19T10:01:59Z
canonical: "silae-api.document360.io/salariesalairedebase"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieSalaireDeBase

## Fonction API

```
/v1/InfosSalaries/SalarieSalaireDeBase
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer le salaire de base du salarié ainsi que les informations horaires.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| salaireDeBase | number(double) | Montant du salaire de base |
| salaireDeBaseHeuresNormales | number(double) | Montant du salaire de base pour les heures normales |
| salaireDeBaseHeuresMajorees | number(double) | Montant du salaire de base pour les heures majorées |
| salaireDeBaseHLibre1 | number(double) | Montant du salaire de base pour les heures libres 1 |
| salaireDeBaseHLibre2 | number(double) | Montant du salaire de base pour les heures libres 2 |
| salaireDeBaseHLibre3 | number(double) | Montant du salaire de base pour les heures libres 3 |

## Requête

```
{
  "identifiantEmploi": 0,
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "matriculeSalarie": "string",
  "identifiantEmploi": 0,
  "salaireDeBase": 10.5,
  "salaireDeBaseHeuresNormales": 10.5,
  "salaireDeBaseHeuresMajorees": 10.5,
  "salaireDeBaseHLibre1": 10.5,
  "salaireDeBaseHLibre2": 10.5,
  "salaireDeBaseHLibre3": 10.5
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
