---
title: "AnalyseProductionPaieBulletinsOriginauxAsynchrone"
slug: "analyseproductionpaiebulletinsoriginauxasynchrone"
updated: 2025-08-05T12:29:58Z
published: 2025-08-05T12:29:58Z
canonical: "silae-api.document360.io/analyseproductionpaiebulletinsoriginauxasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieBulletinsOriginauxAsynchrone

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieBulletinsOriginauxAsynchrone
```

## Verbe HTTP

Post

              

## Description

              

Cette fonction est identique à [AnalyseProductionPaieBulletinsOriginaux](https://silae-api.document360.io/api-rest/docs/analyseproductionpaiebulletinsoriginaux), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutAnalyseProductionPaieBulletinsOriginauxAsynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaiebulletinsoriginauxasynchrone)

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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieBulletinsOriginauxAsynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaiebulletinsoriginauxasynchrone) pour obtenir le résultat |

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
