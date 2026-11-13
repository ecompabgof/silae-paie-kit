---
title: "AnalyseProductionPaieRevenus"
slug: "analyseproductionpaierevenus"
updated: 2026-01-20T06:56:44Z
published: 2026-01-20T06:56:44Z
canonical: "silae-api.document360.io/analyseproductionpaierevenus"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieRevenus

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieRevenus
```

## Verbe HTTP

Post

## Description

Permet de récupérer les revenus de chaque salarié à partir d'un millésime donné. Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieRevenusAsynchrone](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieRevenusAsynchrone)

---

**Point d'attention** Selon la volumétrie de données à traiter, il est vivement conseillé de renseigner les paramètres ***N° de dossier*** ou ***code agence*** pour ne pas être confronté à un échec de la requête.

La valeur **null** sur un paramètre signifie que ce dernier n'est pas concerné par l'analyse demandée (exemple : "netImposableN1" : null si le type d'analyse = 0)

Pour obtenir la **variation** entre les 2 millésimes dans l'analyse des revenus sur deux années à partir de la DSN, ci-après la formule à appliquer : ((totalDeclareN - totalDeclareN1)/ totalDeclareN) x 100 avec un arrondi à 2 décimales

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
| statistiques | StatistiquesRevenus[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesRevenus

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro de dossier |
| codeAgence | string | Code agence |
| statistiquesProductionMatricule | StatistiquesRevenusSalarie[] | Liste d'éléments structurés contenant les informations de chaque salarié (cf. détail ci-dessous) |

### StatistiquesRevenusSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| matricule | string | Matricule du salarié |
| nomUsuel | string | Nom usuel du salarié |
| prenom | string | Prénom du salarié |
| netImposableN | number(double) | Net imposable année millésime |
| totalDeclareN | number(double) | Total déclaré année millésime |
| pasN | number(double) | PAS année millésime |
| pasDeclareN | number(double) | PAS déclaré année millésime |
| brutALN | number(double) | Brut AL année millésime |
| brutALDeclareN | number(double) | Brut AL déclaré année millésime |
| netImposableN1 | number(double) | Net imposable année millésime - 1 |
| totalDeclareN1 | number(double) | Total déclaré année millésime - 1 |
| pasN1 | number(double) | PAS année millésime - 1 |
| pasDeclareN1 | number(double) | PAS déclaré année millésime - 1 |
| brutALN1 | number(double) | Brut AL année millésime - 1 |
| brutALDeclareN1 | number(double) | Brut AL déclaré année millésime - 1 |

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
  "statistiques": [
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProductionMatricule": [
        {
          "matricule": "string",
          "nomUsuel": "string",
          "prenom": "string",
          "netImposableN": 10.5,
          "totalDeclareN": 10.5,
          "pasN": 10.5,
          "pasDeclareN": 10.5,
          "brutALN": 10.5,
          "brutALDeclareN": 10.5,
          "netImposableN1": 10.5,
          "totalDeclareN1": 10.5,
          "pasN1": 10.5,
          "pasDeclareN1": 10.5,
          "brutALN1": 10.5,
          "brutALDeclareN1": 10.5
        },
        {
          "matricule": "string",
          "nomUsuel": "string",
          "prenom": "string",
          "netImposableN": 10.5,
          "totalDeclareN": 10.5,
          "pasN": 10.5,
          "pasDeclareN": 10.5,
          "brutALN": 10.5,
          "brutALDeclareN": 10.5,
          "netImposableN1": 10.5,
          "totalDeclareN1": 10.5,
          "pasN1": 10.5,
          "pasDeclareN1": 10.5,
          "brutALN1": 10.5,
          "brutALDeclareN1": 10.5
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProductionMatricule": [
        {
          "matricule": "string",
          "nomUsuel": "string",
          "prenom": "string",
          "netImposableN": 10.5,
          "totalDeclareN": 10.5,
          "pasN": 10.5,
          "pasDeclareN": 10.5,
          "brutALN": 10.5,
          "brutALDeclareN": 10.5,
          "netImposableN1": 10.5,
          "totalDeclareN1": 10.5,
          "pasN1": 10.5,
          "pasDeclareN1": 10.5,
          "brutALN1": 10.5,
          "brutALDeclareN1": 10.5
        },
        {
          "matricule": "string",
          "nomUsuel": "string",
          "prenom": "string",
          "netImposableN": 10.5,
          "totalDeclareN": 10.5,
          "pasN": 10.5,
          "pasDeclareN": 10.5,
          "brutALN": 10.5,
          "brutALDeclareN": 10.5,
          "netImposableN1": 10.5,
          "totalDeclareN1": 10.5,
          "pasN1": 10.5,
          "pasDeclareN1": 10.5,
          "brutALN1": 10.5,
          "brutALDeclareN1": 10.5
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 1 | "Millésime non renseigné ou incohérent" | Le paramètre Millésime est incorrect (valeur non indiquée ou non conforme : AAAA |
