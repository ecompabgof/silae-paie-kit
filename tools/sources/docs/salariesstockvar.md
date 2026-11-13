---
title: "SalariesStockVar"
slug: "salariesstockvar"
updated: 2026-06-11T09:52:48Z
published: 2026-06-11T09:52:48Z
canonical: "silae-api.document360.io/salariesstockvar"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalariesStockVar

## Fonction API

```
/v1/InfosBulletins/SalariesStockVar
```

## Verbe HTTP

Post

## Description

Permet de récupérer les valeurs des variables "StockVar"

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalariesStockVar | RequeteSalariesStockVar | Élément structuré contenant les criètres de recherche des StockVar (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalariesStockVar

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné. Laisser vide pour rechercher sur tous les salariés du dossier |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle chercher les StockVar. Laisser vide pour ne pas limiter la recherche à une date de début |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle chercher les StockVar. Laisser vide pour ne pas limiter la recherche à une date de fin |
| codesStockVar | string[] | Liste des noms/codes des StockVar à rechercher |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| salariesStockVar | SalarieStockVarResult[] | Liste d'éléments structurés contenant les informations des StockVar trouvés dans les bulletins en fonction des critères de recherche (cf. détail ci-dessous) |

### SalarieStockVarResult

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| codesStockVar | string[] | Liste des noms/codes des StockVar trouvés |
| valeursStockVar | number[] | Liste des valeurs des StockVar trouvés. La correspondance entre code et valeur se fait sur l'indice du tableau. Si un StockVar vaut 0, il ne remontera pas. Si la recherche s'est fait sur une période, la valeur du StockVar sera le cumul des valeurs de ce StockVar sur la période |

## Requête

```
{
  "requeteSalariesStockVar": {
    "matriculeSalarie": "string",
    "periodeDebut": "2020-10-14T21:46:24",
    "periodeFin": "2020-10-14T21:46:24",
    "codesStockVar": [
      "string",
      "string"
    ]
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "salariesStockVar": [
    {
      "matriculeSalarie": "string",
      "codesStockVar": [
        "string",
        "string"
      ],
      "valeursStockVar": [
        10.5,
        10.5
      ]
    },
    {
      "matriculeSalarie": "string",
      "codesStockVar": [
        "string",
        "string"
      ],
      "valeursStockVar": [
        10.5,
        10.5
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
