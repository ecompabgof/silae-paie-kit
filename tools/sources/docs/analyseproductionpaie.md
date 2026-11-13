---
title: "AnalyseProductionPaie"
slug: "analyseproductionpaie"
updated: 2026-06-15T14:49:08Z
published: 2026-06-15T14:49:08Z
canonical: "silae-api.document360.io/analyseproductionpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaie

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaie
```

## Verbe HTTP

Post

## Description

Permet de récupérer les informations de production de paie en fonction des droits d'accès de l'utilisateur courant. *Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieasynchrone)*

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
| periodeDebut | string(date-time) | Date de début de la période sur laquelle récupérer les données |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle récupérer les données |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence pour lequel récupérer les données. Laisser vide pour récupérer les données de tous les codes agence accessibles |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesV2[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesV2

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence de l'agence concernée |
| statistiquesProduction | StatistiquesProductionV2[] | Liste d'éléments structurés contenant les informations de production (cf. détail ci-dessous) |
| statistiquesDADS | StatistiquesDADS[] | Élément structuré contenant les informations liées aux DADS du dossier (cf. détail ci-dessous) |

### StatistiquesProductionV2

| Paramètre | Type | Description |
| --- | --- | --- |
| nbBulletinsCoffresForts | integer(int32) | Nombre de bulletins sur le coffre fort, dont éditique |
| nbBulletinsCoffresFortsEditique | integer(int32) | Nombre de bulletins sur le coffre fort, éditique uniquement |
| nbDocsSortieCoffresForts | integer(int32) | Nombre de documents de sortie sur le coffre fort |
| periode | string(date-time) | Période de paie à laquelle correspondent les données remontées via les autres paramètres de cet élément structuré |
| nbBulletinsOriginaux | integer(int32) | Nombre de bulletins originaux calculés, c'est à dire avec le statut Contrôle (bulle bleue) ou Édité (bulle verte) |
| nbBulletinsOriginauxACalculer | integer(int32) | Nombre de bulletins qui n'ont pas été calculés (bulle rouge) |
| nbEntrees | integer(int32) | Nombre d'entrées de salariés sur la période |
| nbSorties | integer(int32) | Nombre de sorties de salariés sur la période |
| nbDeclarations | integer(int32) | Nombre de déclarations calculées sur la période |
| nbDUE | integer(int32) | Nombre de DUE générées sur la période |
| nbAttestationsPoleEmploi | integer(int32) | Nombre d'attestations Pôel Emploi générées sur la période |
| nbIJSS | integer(int32) | Nombre d'IJSS sur la période |

### StatistiquesDADS

| Paramètre | Type | Description |
| --- | --- | --- |
| annee | integer(int32) | Année de la DADS |
| nbSalaries | integer(int32) | Nombre de salarié |
| effectif3112 | integer(int32) | Effectif au 31/12 |

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
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0,
          "periode": "2020-10-14T21:46:24",
          "nbBulletinsOriginaux": 0,
          "nbBulletinsOriginauxACalculer": 0,
          "nbEntrees": 0,
          "nbSorties": 0,
          "nbDeclarations": 0,
          "nbDUE": 0,
          "nbAttestationsPoleEmploi": 0,
          "nbIJSS": 0
        },
        {
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0,
          "periode": "2020-10-14T21:46:24",
          "nbBulletinsOriginaux": 0,
          "nbBulletinsOriginauxACalculer": 0,
          "nbEntrees": 0,
          "nbSorties": 0,
          "nbDeclarations": 0,
          "nbDUE": 0,
          "nbAttestationsPoleEmploi": 0,
          "nbIJSS": 0
        }
      ],
      "statistiquesDADS": [
        {
          "annee": 0,
          "nbSalaries": 0,
          "effectif3112": 0
        },
        {
          "annee": 0,
          "nbSalaries": 0,
          "effectif3112": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProduction": [
        {
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0,
          "periode": "2020-10-14T21:46:24",
          "nbBulletinsOriginaux": 0,
          "nbBulletinsOriginauxACalculer": 0,
          "nbEntrees": 0,
          "nbSorties": 0,
          "nbDeclarations": 0,
          "nbDUE": 0,
          "nbAttestationsPoleEmploi": 0,
          "nbIJSS": 0
        },
        {
          "nbBulletinsCoffresForts": 0,
          "nbBulletinsCoffresFortsEditique": 0,
          "nbDocsSortieCoffresForts": 0,
          "periode": "2020-10-14T21:46:24",
          "nbBulletinsOriginaux": 0,
          "nbBulletinsOriginauxACalculer": 0,
          "nbEntrees": 0,
          "nbSorties": 0,
          "nbDeclarations": 0,
          "nbDUE": 0,
          "nbAttestationsPoleEmploi": 0,
          "nbIJSS": 0
        }
      ],
      "statistiquesDADS": [
        {
          "annee": 0,
          "nbSalaries": 0,
          "effectif3112": 0
        },
        {
          "annee": 0,
          "nbSalaries": 0,
          "effectif3112": 0
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
