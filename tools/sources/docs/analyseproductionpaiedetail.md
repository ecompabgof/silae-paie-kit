---
title: "AnalyseProductionPaieDetail"
slug: "analyseproductionpaiedetail"
updated: 2026-06-01T13:13:39Z
published: 2026-06-01T13:13:39Z
canonical: "silae-api.document360.io/analyseproductionpaiedetail"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieDetail

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieDetail
```

## Verbe HTTP

Post

## Description

Permet de récupérer la liste des salariés concernés par chaque paramètre remonté via la fonction [AnalyseProductionPaie](https://silae-api.document360.io/api-rest/docs/analyseproductionpaie).

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProductionDetail | RequeteAnalyseProductionDetailV2 | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProductionDetailV2

| Paramètre | Type | Description |
| --- | --- | --- |
| typePeriode | integer(int32) | Type de période de recherche : - 0 = Période de paie (valeur par défaut) - 1 = Période calendaire |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| periodeDebut | string(date-time) | Date de début de la période de recherche |
| periodeFin | string(date-time) | Date de fin de la période de recherche |
| nomAnalyse | string | Nom de l'analyse pour laquelle remonter les informations des salariés. Peut prendre les valeurs suivantes : - NbBulletinsOriginauxACalculer - NbEntrees - NbSorties - NbBulletinsOriginaux - NbBulletinsBrouillon - NbDUE - NbAttestationsPoleEmploi - NbIJSS - NbIJSSAT - NbIJSS_M_P - NbBulletinsCoffresForts - NbBulletinsCoffresFortsEditique |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| salaires | SalarieBase[] | Liste d'éléments structurés contenant les informations des salariés comptabilisés dans le résultat de l'analyse (cf. détail ci-dessous) |

### SalarieBase

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| nomAffiche | string | Nom du salarié tel qu'il est affiché dans Silae |

## Requête

```
{
  "requeteAnalyseProductionDetail": {
    "typePeriode": 0,
    "numeroDossier": "string",
    "periodeDebut": "2020-10-14T21:46:24",
    "periodeFin": "2020-10-14T21:46:24",
    "nomAnalyse": "string"
  }
}
```

## Réponse

```
{
  "salaires": [
    {
      "matriculeSalarie": "string",
      "nomAffiche": "string"
    },
    {
      "matriculeSalarie": "string",
      "nomAffiche": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
