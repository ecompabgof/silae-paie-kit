---
title: "ExtraSalarieCalculerBulletin"
slug: "extrasalariecalculerbulletin"
updated: 2023-05-19T11:01:00Z
published: 2023-05-19T11:01:00Z
canonical: "silae-api.document360.io/extrasalariecalculerbulletin"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ExtraSalarieCalculerBulletin

## Fonction API

```
/v1/ModuleCTCD/ExtraSalarieCalculerBulletin
```

## Verbe HTTP

Post

          

## Description

          

Permet de calculer un bulletin sur une période définie

## Groupe de fonctions API

CTCD001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| categorie | string | Permet de déterminer sur quel module s'appuiera l'API pour le calcul de bulletin. Peut valoir "HCR" ou "CTCD" |
| requeteExtraSalarieVacations | RequeteExtraSalarieVacations | Élément structuré contenant les informations pour déterminer quel bulletin calculer (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteExtraSalarieVacations

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
  "categorie": "string",
  "requeteExtraSalarieVacations": {
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
