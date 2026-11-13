---
title: "LectureAxesAnalytiques"
slug: "lectureaxesanalytiques"
updated: 2026-09-15T06:17:21Z
published: 2026-09-15T06:17:21Z
canonical: "silae-api.document360.io/lectureaxesanalytiques"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureAxesAnalytiques

## Fonction API

```
/v1/AxesAnalytiques/LectureAxesAnalytiques
```

## Verbe HTTP

Post

## Description

Permet de récupérer la liste des axes analytiques configurés dans le dossier avec les sous-catégories rattachées à chaque axe.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| axesAnalytiques | AxeAnalytique[] | Liste de 15 (nombre maximum d'axes analytiques disponibles dans Silae) éléments structurés contenant les informations de chaque axe analytique (cf. détail ci-dessous) |

### AxeAnalytique

| Paramètre | Type | Description |
| --- | --- | --- |
| titreCategorie | string | Nom de l'axe analytique |
| sousCategorie | SousCategorie[] | Liste d'éléments structurés contenant les informations de chaque sous-catégorie (cf. détail ci-dessous) |

### SousCategorie

| Paramètre | Type | Description |
| --- | --- | --- |
| nomSousCategorie | string | Nom de la sous-catégorie |
| nouveauNomSousCategorie | string | Identique au paramètre **NomSousCategorie** |
| libelleSousCategorie | string | Libellé de la sous-catégorie |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "axesAnalytiques": [
    {
      "titreCategorie": "string",
      "sousCategorie": [
        {
          "nomSousCategorie": "string",
          "nouveauNomSousCategorie": "string",
          "libelleSousCategorie": "string"
        },
        {
          "nomSousCategorie": "string",
          "nouveauNomSousCategorie": "string",
          "libelleSousCategorie": "string"
        }
      ]
    },
    {
      "titreCategorie": "string",
      "sousCategorie": [
        {
          "nomSousCategorie": "string",
          "nouveauNomSousCategorie": "string",
          "libelleSousCategorie": "string"
        },
        {
          "nomSousCategorie": "string",
          "nouveauNomSousCategorie": "string",
          "libelleSousCategorie": "string"
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
