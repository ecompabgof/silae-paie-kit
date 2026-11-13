---
title: "SpectacleSalarieReinitialiserAffectations"
slug: "spectaclesalariereinitialiseraffectations"
updated: 2023-05-19T11:15:43Z
published: 2023-05-19T11:15:43Z
canonical: "silae-api.document360.io/spectaclesalariereinitialiseraffectations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SpectacleSalarieReinitialiserAffectations

## Fonction API

```
/v1/ModuleSpectacle/SpectacleSalarieReinitialiserAffectations
```

## Verbe HTTP

Post

          

## Description

          

Permet de supprimer les affectations trouvées en fonction de critères de recherche

## Groupe de fonctions API

SPECT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSpectacleSalarieAffectations | RequeteSpectacleSalarieAffectations | Élément structuré contenant les critères de recherche des affectations à supprimer (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSpectacleSalarieAffectations

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié. Seul paramètre obligatoire, les autres permettant d'affiner la recherche des vacations à supprimer |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi pour lequel supprimer les affectations |
| verifierDisponibiliteEmploi | boolean | Pas utilisé pour la réinitialisation de vacations |
| periode | string(date-time) | Période de paie pour laquelle supprimer les affectations |
| nomInterneEtablissement | string | Nom interne de l'établissement pour lequel supprimer les affectations |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| affectationsReinitialisees | integer(int32) | Indique le nombre d'affectations qui ont été supprimées |

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
  "affectationsReinitialisees": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
