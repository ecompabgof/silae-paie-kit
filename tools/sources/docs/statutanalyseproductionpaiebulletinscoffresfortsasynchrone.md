---
title: "StatutAnalyseProductionPaieBulletinsCoffresFortsAsynchrone"
slug: "statutanalyseproductionpaiebulletinscoffresfortsasynchrone"
updated: 2025-09-23T03:41:18Z
published: 2025-09-23T03:41:18Z
canonical: "silae-api.document360.io/statutanalyseproductionpaiebulletinscoffresfortsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieBulletinsCoffresFortsAsynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieBulletinsCoffresFortsAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieBulletinsCoffresFortsAsynchrone](/api-rest/docs/analyseproductionpaiebulletinscoffresfortsasynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [AnalyseProductionPaieBulletinsCoffresFortsAsynchrone](/api-rest/docs/analyseproductionpaiebulletinscoffresfortsasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesBulletinCoffreFort[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

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
