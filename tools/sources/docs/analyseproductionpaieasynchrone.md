---
title: "AnalyseProductionPaieAsynchrone"
slug: "analyseproductionpaieasynchrone"
updated: 2025-09-23T03:34:41Z
published: 2025-09-23T03:34:41Z
canonical: "silae-api.document360.io/analyseproductionpaieasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieAsynchrone

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [AnalyseProductionPaie](https://silae-api.document360.io/api-rest/docs/analyseproductionpaie), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutAnalyseProductionPaieAsynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieasynchrone)

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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieAsynchrone](https://silae-api.document360.io/api-rest/docs/StatutAnalyseProductionPaieAsynchrone) pour obtenir le résultat |

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
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
