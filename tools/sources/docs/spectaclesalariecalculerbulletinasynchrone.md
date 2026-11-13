---
title: "SpectacleSalarieCalculerBulletinAsynchrone"
slug: "spectaclesalariecalculerbulletinasynchrone"
updated: 2023-03-28T09:53:54Z
published: 2023-03-28T09:53:54Z
canonical: "silae-api.document360.io/spectaclesalariecalculerbulletinasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SpectacleSalarieCalculerBulletinAsynchrone

## Fonction API

```
/v1/ModuleSpectacle/SpectacleSalarieCalculerBulletinAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [SpectacleSalarieCalculerBulletin](https://silae-api.document360.io/api-rest/docs/spectaclesalariecalculerbulletin), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutSpectacleSalarieCalculerBulletinAsynchrone](https://silae-api.document360.io/api-rest/docs/statutspectaclesalariecalculerbulletinasynchrone)

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

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutSpectacleSalarieCalculerBulletinAsynchrone](https://silae-api.document360.io/api-rest/docs/statutspectaclesalariecalculerbulletinasynchrone) pour obtenir le résultat |

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

## Réponse

```
{
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
