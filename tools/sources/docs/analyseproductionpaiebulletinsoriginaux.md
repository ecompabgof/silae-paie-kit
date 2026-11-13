---
title: "AnalyseProductionPaieBulletinsOriginaux"
slug: "analyseproductionpaiebulletinsoriginaux"
updated: 2025-12-08T09:46:22Z
published: 2025-12-08T09:46:22Z
canonical: "silae-api.document360.io/analyseproductionpaiebulletinsoriginaux"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieBulletinsOriginaux

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieBulletinsOriginaux
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer le nombre de bulletins originaux produits par période de paie.

*Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieBulletinsOriginauxAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaiebulletinsoriginauxasynchrone)*

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProduction | RequeteAnalyseProductionV2 | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProductionV2

| Paramètre | Type | Description |
| --- | --- | --- |
| typePeriode | integer(int32) | Type de période de recherche : 0 = Période de paie (valeur par défaut) 1 = Période calendaire |
| periodeDebut | string(date-time) | Borne inférieure de recherche (en période de paie ou en période calendaire selon typePeriode) |
| periodeFin | string(date-time) | Borne supérieure de recherche (en période de paie ou en période calendaire selon typePeriode) |
| numeroDossier | string | Numéro du dossier concerné par la recherche (optionnel) |
| codeAgence | string | Code de l'agence concernée par la recherche (optionnel) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesBulletin[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesBulletin

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier |
| codeAgence | string | Code de l'agence de rattachement du dossier |
| statistiquesProduction | StatistiquesProductionBulletin[] | Liste d'éléments structurés contenant les informations de production (cf. détail ci-dessous) |

### StatistiquesProductionBulletin

| Paramètre | Type | Description |
| --- | --- | --- |
| periodePaie | string(date) | Période de paie concernée ***Le résultat est toujours exprimé en période de paie même si typePeriode = 1 (période calendaire)*** |
| nbBulletinsOriginaux | integer(int32) | Nombre de bulletins originaux produits sur cette période de paie |

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
          "nbBulletinsOriginaux": 0
        },
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsOriginaux": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProduction": [
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsOriginaux": 0
        },
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsOriginaux": 0
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
