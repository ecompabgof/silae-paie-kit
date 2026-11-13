---
title: "ModificationEffortConstruction"
slug: "modificationeffortconstruction"
updated: 2023-05-19T10:54:52Z
published: 2023-05-19T10:54:52Z
canonical: "silae-api.document360.io/modificationeffortconstruction"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationEffortConstruction

## Fonction API

```
/v1/FicheSociete/ModificationEffortConstruction
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les informations liées à la participation des employeurs à l'effort de construction

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| effortConstruction | EffortConstruction | Élément structuré contenant les informations sur la participation à l'effort de construction (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### EffortConstruction

| Paramètre | Type | Description |
| --- | --- | --- |
| assujettissement | boolean | Permet d'indiquer si la société est assujettie (**true**) ou non (**false**) |
| anneeN | string(date-time) | Première année de la période de lissage |
| pourcentageAnneeN | number(double) | Pourcentage d'abattement prévu pour l'année N |
| pourcentageAnneeNPlus1 | number(double) | Pourcentage d'abattement prévu pour l'année N+1 |
| pourcentageAnneeNPlus2 | number(double) | Pourcentage d'abattement prévu pour l'année N+2 |
| pourcentageAnneeNPlus3 | number(double) | Pourcentage d'abattement prévu pour l'année N+3 |
| pourcentageAnneeNPlus4 | number(double) | Pourcentage d'abattement prévu pour l'année N+4 |
| pourcentageAnneeNPlus5 | number(double) | Pourcentage d'abattement prévu pour l'année N+5 |

## Requête

```
{
  "effortConstruction": {
    "assujettissement": true,
    "anneeN": "2020-10-14T21:46:24",
    "pourcentageAnneeN": 10.5,
    "pourcentageAnneeNPlus1": 10.5,
    "pourcentageAnneeNPlus2": 10.5,
    "pourcentageAnneeNPlus3": 10.5,
    "pourcentageAnneeNPlus4": 10.5,
    "pourcentageAnneeNPlus5": 10.5
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
