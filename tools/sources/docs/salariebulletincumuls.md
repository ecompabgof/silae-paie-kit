---
title: "SalarieBulletinCumuls"
slug: "salariebulletincumuls"
updated: 2025-02-27T04:45:41Z
published: 2025-02-27T04:45:41Z
canonical: "silae-api.document360.io/salariebulletincumuls"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieBulletinCumuls

## Fonction API

```
/v1/InfosBulletins/SalarieBulletinCumuls
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer le cumul de certains éléments du bulletin pour un salarié sur une période donnée (maximum 12 mois).

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période sur laquelle récupérer les données |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle récupérer les données |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| salaireDeBase | number(double) | Cumul du salaire de base sur la période (peut tenir compte de certains évènements comme par exemple les heures mensuelles majorées) |
| brut | number(double) | Cumul du salaire brut sur la période |
| cumulRetenuesSD | number(double) | Cumul des retenues déductibles sur la période |
| cumulRetenuesSND | number(double) | Cumul des retenues non déductibles sur la période |
| netImposable | number(double) | Cumul du salaire net imposable sur la période |
| netAPayerAvantImpot | number(double) | Cumul du salaire net à payer avant imposition sur la période |
| netAPayer | number(double) | Cumul du salaire net à payer sur la période |
| impotSurLeRevenuPreleveALaSource | number(double) | Cumul des prélevements à la source sur la période (ne tient pas compte de l'impôt sur revenu via Import DSN) |
| plafondSecuriteSocial | number(double) | Cumul du plafond Sécurité Sociale |
| nombreHeuresTravaillees | number(double) | Cumul du nombre d'heures travaillées |
| nombreJoursTravailees | number(double) | Cumul du nombre des jours travaillés ***Ne tient pas compte du mois de clôture des forfaits jours paramétré dans la fiche Société*** |

## Requête

```
{
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "salaireDeBase": 10.5,
  "brut": 10.5,
  "cumulRetenuesSD": 10.5,
  "cumulRetenuesSND": 10.5,
  "netImposable": 10.5,
  "netAPayerAvantImpot": 10.5,
  "netAPayer": 10.5,
  "impotSurLeRevenuPreleveALaSource": 10.5,
  "plafondSecuriteSocial": 10.5,
  "nombreHeuresTravaillees": 10.5,
  "nombreJoursTravailees": 10.5
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
