---
title: "SpectacleSalarieCalculerBulletin"
slug: "spectaclesalariecalculerbulletin"
updated: 2023-03-30T13:50:20Z
published: 2023-03-30T13:50:20Z
canonical: "silae-api.document360.io/spectaclesalariecalculerbulletin"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SpectacleSalarieCalculerBulletin

## Fonction API

```
/v1/ModuleSpectacle/SpectacleSalarieCalculerBulletin
```

## Verbe HTTP

Post

          

## Description

          

Permet de calculer un bulletin sur une période définie. *Cette même fonction est proposée en mode asynchrone : [SpectacleSalarieCalculerBulletinAsynchrone](https://silae-api.document360.io/api-rest/docs/spectaclesalariecalculerbulletinasynchrone)*

## Groupe de fonctions API

SPECT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSpectacleSalarieAffectations | RequeteSpectacleSalarieAffectations | Élément structuré contenant les informations pour déterminer quel bulletin calculer (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSpectacleSalarieAffectations

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| verifierDisponibiliteEmploi | boolean | Permet de ne calculer que les bulletins pour les emplois en cours |
| periode | string(date-time) | Période de paie pour laquelle calculer le bulletin |
| nomInterneEtablissement | string | Nom interne de l'établissement |

## Requête

```
{
  "requeteSpectacleSalarieAffectations": {
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "verifierDisponibiliteEmploi": true,
    "periode": "2020-10-14T21:46:24",
    "nomInterneEtablissement": "string"
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
