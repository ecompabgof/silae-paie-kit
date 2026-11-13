---
title: "AnalyseProductionPaieUtilisateursV2Asynchrone"
slug: "analyseproductionpaieutilisateursv2asynchrone"
updated: 2026-06-01T15:53:49Z
published: 2026-06-01T15:53:49Z
canonical: "silae-api.document360.io/analyseproductionpaieutilisateursv2asynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieUtilisateursV2Asynchrone

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieUtilisateursV2Asynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à la fonction API [AnalyseProductionPaieUtilisateursV2](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieutilisateursV2), à la différence que le traitement est asynchrone.

Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutAnalyseProductionPaieUtilisateursV2Asynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieutilisateursV2asynchrone)

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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieUtilisateursV2Asynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieutilisateursV2asynchrone) pour obtenir le résultat |

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
