---
title: "LectureAxesAnalytiquesSalaries"
slug: "lectureaxesanalytiquessalaries"
updated: 2026-09-15T06:17:21Z
published: 2026-09-15T06:17:21Z
canonical: "silae-api.document360.io/lectureaxesanalytiquessalaries"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureAxesAnalytiquesSalaries

## Fonction API

```
/v1/AxesAnalytiques/LectureAxesAnalytiquesSalaries
```

## Verbe HTTP

Post

## Description

Permet de récupérer pour chaque salarié la répartition analytique associée

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date-time) | Période de paie sur laquelle remonter les informations |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| axesAnalytiqueSalarie | AxesAnalytiqueSalarie[] | Liste d'éléments structurés contenant les informations de chaque salarié avec ses affectations analytiques (cf. détail ci-dessous) |
| periode | string(date-time) | Période concernée |

### AxesAnalytiqueSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| nomAffiche | string | Nom et prénom du salarié |
| affectationAnalytique | DonneesAxeAnalytiqueSalarie[] | Liste d'éléments structurés contenant les informations d'affectations analytiques du salarié (cf. détail ci-dessous) |

### DonneesAxeAnalytiqueSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| titreCategorie | string | Nom de l'axe analytique |
| sousCategorieParDefaut | string | Nom de la sous-catégorie par défaut à laquelle est rattaché le salarié |
| libelleSousCategorie | string | Libellé de la sous-catégorie à laquelle est rattaché le salarié |
| sousCategoriesEnPC | SousCategoriesEnPC[] | Liste d'éléments structurés contenant les informations de répartition analytique en pourcentage de chaque salarié (cf. détail ci-dessous) |

### SousCategoriesEnPC

| Paramètre | Type | Description |
| --- | --- | --- |
| sousCategorie | string | Nom de la sous-catégorie concernée |
| pc | number(double) | Pourcentage de répartition sur cette sous catégorie de l'axe analytique |

## Requête

```
{
  "periode": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "axesAnalytiqueSalarie": [
    {
      "matriculeSalarie": "string",
      "nomAffiche": "string",
      "affectationAnalytique": [
        {
          "titreCategorie": "string",
          "sousCategorieParDefaut": "string",
          "libelleSousCategorie": "string",
          "sousCategoriesEnPC": [
            {
              "sousCategorie": "string",
              "pc": 10.5
            },
            {
              "sousCategorie": "string",
              "pc": 10.5
            }
          ]
        },
        {
          "titreCategorie": "string",
          "sousCategorieParDefaut": "string",
          "libelleSousCategorie": "string",
          "sousCategoriesEnPC": [
            {
              "sousCategorie": "string",
              "pc": 10.5
            },
            {
              "sousCategorie": "string",
              "pc": 10.5
            }
          ]
        }
      ]
    },
    {
      "matriculeSalarie": "string",
      "nomAffiche": "string",
      "affectationAnalytique": [
        {
          "titreCategorie": "string",
          "sousCategorieParDefaut": "string",
          "libelleSousCategorie": "string",
          "sousCategoriesEnPC": [
            {
              "sousCategorie": "string",
              "pc": 10.5
            },
            {
              "sousCategorie": "string",
              "pc": 10.5
            }
          ]
        },
        {
          "titreCategorie": "string",
          "sousCategorieParDefaut": "string",
          "libelleSousCategorie": "string"
          "sousCategoriesEnPC": [
            {
              "sousCategorie": "string",
              "pc": 10.5
            },
            {
              "sousCategorie": "string",
              "pc": 10.5
            }
          ]
        }
      ]
    }
  ],
  "periode": "2020-10-14T21:46:24"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
