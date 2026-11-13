---
title: "AnalyseProductionPaieDocumentsSignesAsynchrone"
slug: "analyseproductionpaiedocumentssignesasynchrone"
updated: 2026-01-20T06:06:13Z
published: 2026-01-20T06:24:07Z
canonical: "silae-api.document360.io/analyseproductionpaiedocumentssignesasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieDocumentsSignesAsynchrone

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieDocumentsSignesAsynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [AnalyseProductionPaieDocumentsSignes](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieDocumentsSignes), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutAnalyseProductionPaieDocumentsSignesAsynchrone](https://silae-api.document360.io/api-rest/docs/StatutAnalyseProductionPaieDocumentsSignesAsynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProduction | RequeteAnalyseProduction | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProduction

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période de recherche |
| periodeFin | string(date-time) | Date de fin de la période de recherche |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence pour lequel récupérer les données |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieDocumentsSignesAsynchrone](https://silae-api.document360.io/api-rest/docs/StatutAnalyseProductionPaieDocumentsSignesAsynchrone) pour obtenir le résultat |

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
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
