---
title: "AnalyseProductionPaieUtilisateursV2"
slug: "analyseproductionpaieutilisateursv2"
updated: 2026-06-01T15:53:40Z
published: 2026-06-01T15:53:40Z
canonical: "silae-api.document360.io/analyseproductionpaieutilisateursv2"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieUtilisateursV2

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieUtilisateursV2
```

## Verbe HTTP

Post

## Description

Cette fonction API est identique à [AnalyseProductionPaieUtilisateurs](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieutilisateurs), permet de récupérer le nombre de bulletins, mais également le nombre d'entrées et de sortis contrôlés par les utilisateurs en fonction des droits d'accès de l'utilisateur courant.

Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieUtilisateursV2Asynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieutilisateursV2asynchrone)

---

**Point d'attention** Pour améliorer les délais de traitement, il est fortement recommandé de renseigner le paramètre ***code agence***.

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
| statistiquesUtilisateurs | StatistiquesUtilisateursV2[] | Liste d'éléments structurés contenant les informations sur les utilisateurs pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesUtilisateursV2

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence de l'agence concernée |
| statistiquesProductionUtilisateurs | StatistiquesProductionUtilisateurV2[] | Liste d'éléments structurés contenant les informations de chaque utilisateur concerné (cf. détail ci-dessous) |

### StatistiquesProductionUtilisateurV2

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantUtilisateur | string | Identifiant de l'utilisateur |
| periode | string(date-time) | Période sur laquelle se base l'analyse |
| nbBulletins | integer(int32) | Nombre de bulletins contrôlés par l'utilisateur |
| nbEntrees | integer(int32) | Nombre d'entrées liées aux bulletins contrôlés par l'utilisateur |
| nbSorties | integer(int32) | Nombre de sorties liées aux bulletins contrôlés par l'utilisateur |

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
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbSorties": 0
        },
        {
          "identifiantUtilisateur": "string",
          "periode": "2020-10-14T21:46:24",
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbSorties": 0
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
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbSorties": 0
        },
        {
          "identifiantUtilisateur": "string",
          "periode": "2020-10-14T21:46:24",
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbSorties": 0
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
