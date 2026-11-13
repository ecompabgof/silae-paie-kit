---
title: "SalarieReinitialiserSaisies"
slug: "salariereinitialisersaisies"
updated: 2025-12-01T13:53:57Z
published: 2025-12-01T13:53:57Z
canonical: "silae-api.document360.io/salariereinitialisersaisies"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieReinitialiserSaisies

## Fonction API

```
/v1/ActivitesEtHeures/SalarieReinitialiserSaisies
```

## Verbe HTTP

Post

## Description

Permet de réinitialiser la saisie d'heures, de primes, d'absences réalisées pour un salarié

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| reinitialisationSaisies | SalarieReinitialisationSaisies | Élément structuré contenant les informations des saisies à réinitialiser (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieReinitialisationSaisies

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeReinitialisation | string(date-time) | Période pour laquelle réinitialiser les saisies **Format à respecter : AAAA-MM-JJ** |
| reinitialiserHeures | boolean | Permet d'indiquer s'il faut réinitialiser les heures (**true**) ou pas (**false**) |
| reinitialiserPrimes | boolean | Permet d'indiquer s'il faut réinitialiser les primes (**true**) ou pas (**false**) |
| reinitialiserAbsences | boolean | Permet d'indiquer s'il faut réinitialiser les absences dont la date de début est contenue dans la **PeriodeReinitialisation** (**true**) ou pas (**false**) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| saisiesHeuresReinitialisees | integer(int32) | Indique le nombre de saisies ("lignes") réinitialisées |
| saisiesPrimesReinitialisees | integer(int32) | Indique le nombre de primes réinitialisées |
| saisiesAbsencesReinitialisees | integer(int32) | Indique le nombre de d'absences réinitialisées |

## Requête

```
{
  "identifiantEmploi": 0,
  "reinitialisationSaisies": {
    "periodeReinitialisation": "2020-10-14T21:46:24",
    "reinitialiserHeures": true,
    "reinitialiserPrimes": true,
    "reinitialiserAbsences": true
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "saisiesHeuresReinitialisees": 0,
  "saisiesPrimesReinitialisees": 0,
  "saisiesAbsencesReinitialisees": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
