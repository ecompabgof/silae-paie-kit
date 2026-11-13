---
title: "StatutAnalyseProductionPaieUtilisateursV2Asynchrone"
slug: "statutanalyseproductionpaieutilisateursv2asynchrone"
updated: 2026-06-01T15:53:58Z
published: 2026-06-01T15:53:58Z
canonical: "silae-api.document360.io/statutanalyseproductionpaieutilisateursv2asynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieUtilisateursV2Asynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieUtilisateursV2Asynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieUtilisateursV2Asynchrone](/api-rest/docs/analyseproductionpaieutilisateursV2asynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieUtilisateursV2Asynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieutilisateursV2asynchrone) pour obtenir le résultat |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesUtilisateursV2[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### StatistiquesUtilisateursV2

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier |
| codeAgence | string | Code de l'agence de rattachement du dossier |
| statistiquesProductionUtilisateurs | StatistiquesProductionUtilisateurV2[] | Liste d'éléments structurés contenant les informations de production (cf. détail ci-dessous) |

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
