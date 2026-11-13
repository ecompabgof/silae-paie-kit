---
title: "AnalyseProductionPaieBulletinsCoffresForts"
slug: "analyseproductionpaiebulletinscoffresforts"
updated: 2025-09-23T03:41:11Z
published: 2025-09-23T03:41:11Z
canonical: "silae-api.document360.io/analyseproductionpaiebulletinscoffresforts"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieBulletinsCoffresForts

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieBulletinsCoffresForts
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer le nombre de bulletins déposés sur le coffre fort, avec une ventilation par période de paie.

*Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieBulletinsCoffresFortsAsynchrone](/api-rest/docs/analyseproductionpaiebulletinscoffresfortsasynchrone)*

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProduction | RequeteAnalyseProductionV2 | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProductionV2

| Paramètre | Type | Description |
| --- | --- | --- |
| typePeriode | integer(int32) | Type de période de recherche : 0 = Période de paie (valeur par défaut) 1 = Période calendaire -> la recherche se base alors sur la date de dépôt du document |
| periodeDebut | string(date-time) | Borne inférieure de recherche (en période de paie ou en période calendaire selon typePeriode) |
| periodeFin | string(date-time) | Borne supérieure de recherche (en période de paie ou en période calendaire selon typePeriode) |
| numeroDossier | string | Numéro du dossier concerné par la recherche (optionnel) |
| codeAgence | string | Code de l'agence concernée par la recherche (optionnel) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesBulletinCoffreFort[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesBulletinCoffreFort

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier |
| codeAgence | string | Code de l'agence de rattachement du dossier |
| statistiquesProduction | StatistiquesProductionBulletinCoffreFort[] | Liste d'éléments structurés contenant les informations de production (cf. détail ci-dessous) |

### StatistiquesProductionBulletinCoffreFort

| Paramètre | Type | Description |
| --- | --- | --- |
| periodePaie | string(date) | Période de paie concernée **Le résultat est toujours exprimé en période de paie même si typePeriode = 1 (période calendaire)** |
| nbBulletinsCoffresForts | integer(int32) | Nombre de bulletins déposés sur le coffre fort sur cette période de paie |
| nbBulletinsCoffresFortsEditique | integer(int32) | Nombre de bulletins envoyés vers l'éditique sur cette période de paie |
| nbDocsSortieCoffresForts | integer(int32) | Nombre de documents de sortie sur le coffre fort |

## Requête

```
{
  "requeteAnalyseProduction": {
    "typePeriode": 0,
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
  "statistiques": [
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProduction": [
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0
        },
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProduction": [
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0
        },
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
