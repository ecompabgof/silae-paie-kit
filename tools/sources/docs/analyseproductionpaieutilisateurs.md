---
title: "AnalyseProductionPaieUtilisateurs"
slug: "analyseproductionpaieutilisateurs"
updated: 2025-09-16T05:37:33Z
published: 2025-09-16T05:37:33Z
canonical: "silae-api.document360.io/analyseproductionpaieutilisateurs"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieUtilisateurs

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieUtilisateurs
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer le nombre de bulletins contrôlés par les utilisateurs en fonction des droits d'accès de l'utilisateur courant.

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProduction | RequeteAnalyseProduction | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProduction

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période sur laquelle récupérer les données |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle récupérer les données |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence pour lequel récupérer les données. Laisser vide pour récupérer les données de tous les codes agence accessibles |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiquesUtilisateurs | StatistiquesUtilisateurs[] | Liste d'éléments structurés contenant les informations sur les utilisateurs pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesUtilisateurs

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence de l'agence concernée |
| statistiquesProductionUtilisateurs | StatistiquesProductionUtilisateur[] | Liste d'éléments structurés contenant les informations de chaque utilisateur concerné (cf. détail ci-dessous) |

### StatistiquesProductionUtilisateur

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantUtilisateur | string | Identifiant de l'utilisateur |
| periode | string(date-time) | Période sur laquelle se base l'analyse |
| nbBulletins | integer(int32) | Nombre de bulletins contrôlés par l'utilisateur |

## Requête

```
{
  "requeteAnalyseProduction": {
    "periodeDebut": "2020-10-14T21:46:24",
    "periodeFin": "2020-10-14T21:46:24",
    "numeroDossier": "string",
    "codeAgence": "string"
  }
}
```

## Réponse

```
{
  "statistiquesUtilisateurs": [
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProductionUtilisateurs": [
        {
          "identifiantUtilisateur": "string",
          "periode": "2020-10-14T21:46:24",
          "nbBulletins": 0
        },
        {
          "identifiantUtilisateur": "string",
          "periode": "2020-10-14T21:46:24",
          "nbBulletins": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProductionUtilisateurs": [
        {
          "identifiantUtilisateur": "string",
          "periode": "2020-10-14T21:46:24",
          "nbBulletins": 0
        },
        {
          "identifiantUtilisateur": "string",
          "periode": "2020-10-14T21:46:24",
          "nbBulletins": 0
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
