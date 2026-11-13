---
title: "StatutAnalyseProductionPaieAsynchrone"
slug: "statutanalyseproductionpaieasynchrone"
updated: 2026-01-20T06:14:40Z
published: 2026-01-20T06:14:40Z
canonical: "silae-api.document360.io/statutanalyseproductionpaieasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieAsynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieAsynchrone
```

## Verbe HTTP

Get

## Description

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieasynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [AnalyseProductionPaieAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesV2[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

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
  "guidTache": "string"
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
  ],
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
