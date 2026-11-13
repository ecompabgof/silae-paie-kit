---
title: "LectureFNAL"
slug: "lecturefnal"
updated: 2023-05-19T09:48:18Z
published: 2023-05-19T09:48:18Z
canonical: "silae-api.document360.io/lecturefnal"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureFNAL

## Fonction API

```
/v1/FicheSociete/LectureFNAL
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations liées à l'abattement pour le Fond National d'Aide au Logement (FNAL) pour le dossier.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| assujettissement | boolean | Permet de savoir si la société est assujettie (**true**) ou non (**false**) |
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
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "assujettissement": true,
  "anneeN": "2020-10-14T21:46:24",
  "pourcentageAnneeN": 10.5,
  "pourcentageAnneeNPlus1": 10.5,
  "pourcentageAnneeNPlus2": 10.5,
  "pourcentageAnneeNPlus3": 10.5,
  "pourcentageAnneeNPlus4": 10.5,
  "pourcentageAnneeNPlus5": 10.5
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
