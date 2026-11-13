---
title: "ModificationFNAL"
slug: "modificationfnal"
updated: 2023-05-19T10:55:11Z
published: 2023-05-19T10:55:11Z
canonical: "silae-api.document360.io/modificationfnal"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationFNAL

## Fonction API

```
/v1/FicheSociete/ModificationFNAL
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les informations liées à l'abattement pour le Fond National d'Aide au Logement (FNAL) pour le dossier

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| fnal | FNAL | Élément structuré contenant les informations sur le FNAL (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### FNAL

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
  "fnal": {
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
