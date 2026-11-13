---
title: "AnalyseProductionPaieRevenusAsynchrone"
slug: "analyseproductionpaierevenusasynchrone"
updated: 2026-01-20T05:19:14Z
published: 2026-01-20T06:24:07Z
canonical: "silae-api.document360.io/analyseproductionpaierevenusasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieRevenusAsynchrone

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieRevenusAsynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [AnalyseProductionPaieRevenus](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieRevenus), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutAnalyseProductionPaieRevenusAsynchrone](https://silae-api.document360.io/api-rest/docs/StatutAnalyseProductionPaieRevenusAsynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProductionRevenus | RequeteAnalyseProductionRevenus | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProductionRevenus

| Paramètre | Type | Description |
| --- | --- | --- |
| millesime | integer(int32) | Année de l'analyse |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence pour lequel récupérer les données |
| typeAnalyse | integer(int32) | Type de l'analyse : - 0 : Analyse sur une année - 1 : analyse sur deux années à partir des bulletins - 2 : analyse sur deux années à partir des DSN |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieRevenusAsynchrone](https://silae-api.document360.io/api-rest/docs/StatutAnalyseProductionPaieRevenusAsynchrone) pour obtenir le résultat |

## Requête

```
{
  "requeteAnalyseProductionRevenus": {
    "millesime": 0,
    "numeroDossier": "string",
    "codeAgence": "string",
    "typeAnalyse": 0
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
| 1 | "Millésime non renseigné ou incohérent" | Le paramètre Millésime est incorrect (valeur non indiquée ou non conforme : AAAA |
