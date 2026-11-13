---
title: "SpectacleCreation"
slug: "spectaclecreation"
updated: 2023-05-19T11:02:53Z
published: 2023-05-19T11:02:53Z
canonical: "silae-api.document360.io/spectaclecreation"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SpectacleCreation

## Fonction API

```
/v1/ModuleSpectacle/SpectacleCreation
```

## Verbe HTTP

Post

          

## Description

          

Permet de créer un spectacle dans le module Spectacle

## Groupe de fonctions API

SPECT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| structSpectacle | Spectacle | Élément structuré contenant les informations du spectacle (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### Spectacle

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattaché le spectacle |
| axeAnalytique | string | Il est possible de rattacher le spectacle à 3 axes analytiques. Ce paramètre définit le premier axe analytique |
| valeurAxeAnalytique | string | Définit à quelle valeur de l'axe analytique 1 sera rattaché le spectacle |
| axeAnalytique2 | string | Il est possible de rattacher le spectacle à 3 axes analytiques. Ce paramètre définit le deuxième axe analytique |
| valeurAxeAnalytique2 | string | Définit à quelle valeur de l'axe analytique 2 sera rattaché le spectacle |
| axeAnalytique3 | string | Il est possible de rattacher le spectacle à 3 axes analytiques. Ce paramètre définit le troisième axe analytique |
| valeurAxeAnalytique3 | string | Définit à quelle valeur de l'axe analytique 3 sera rattaché le spectacle |
| referenceExterneSpectacle | string | Identifiant de spectacle qui pourra être réutilisé par les autres fonctions API liées à la gestion des spectacles |
| numeroObjet | string | Numéro Objet du spectacle |
| intituleSpectacle | string | Intitulé du spectacle |
| dateDebut | string(date-time) | Date de début du spectacle |
| dateFin | string(date-time) | Date de fin du spectacle |

## Requête

```
{
  "structSpectacle": {
    "nomInterneEtablissement": "string",
    "axeAnalytique": "string",
    "valeurAxeAnalytique": "string",
    "axeAnalytique2": "string",
    "valeurAxeAnalytique2": "string",
    "axeAnalytique3": "string",
    "valeurAxeAnalytique3": "string",
    "referenceExterneSpectacle": "string",
    "numeroObjet": "string",
    "intituleSpectacle": "string",
    "dateDebut": "2020-10-14T21:46:24",
    "dateFin": "2020-10-14T21:46:24"
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
