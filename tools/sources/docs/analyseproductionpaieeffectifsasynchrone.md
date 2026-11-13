---
title: "AnalyseProductionPaieEffectifsAsynchrone"
slug: "analyseproductionpaieeffectifsasynchrone"
updated: 2026-01-15T09:44:12Z
published: 2026-01-15T09:44:12Z
canonical: "silae-api.document360.io/analyseproductionpaieeffectifsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieEffectifsAsynchrone

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieEffectifsAsynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [AnalyseProductionPaieEffectifs](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieeffectifs), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutAnalyseProductionPaieEffectifsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieeffectifsasynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProduction | RequeteAnalyseProduction | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProduction

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période sur laquelle sont récupérées les données |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle sont récupérées les données |
| numeroDossier | string | Numéro du dossier concerné par la requête *Laisser vide pour récupérer les données de tous les numéros de dossiers accessibles* |
| codeAgence | string | Code agence pour lequel sont récupérées les données. *Laisser vide pour récupérer les données de tous les codes agences accessibles* |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieEffectifsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieeffectifsasynchrone) pour obtenir le résultat |

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
| 50 | "Aucun dossier trouvé pour ces critères" | Parmi les critères erronés, cela peut correspondre à : - Un N° de dossier inexistant - Un N° de dossier inaccessible en raison des droits d'accès qui sont insuffisants |
