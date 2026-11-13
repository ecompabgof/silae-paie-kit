---
title: "AnalyseProductionPaieEffectifs"
slug: "analyseproductionpaieeffectifs"
updated: 2025-12-11T16:39:59Z
published: 2025-12-11T16:39:59Z
canonical: "silae-api.document360.io/analyseproductionpaieeffectifs"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieEffectifs

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieEffectifs
```

## Verbe HTTP

Post

## Description

Permet d'obtenir l'effectif moyen sur une période donnée

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
| effectifs | AnalyseEffectifs[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |

### AnalyseEffectifs

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence du dossier concerné |
| effectifSecuriteSociale | number(double) | Effectif moyen selon le code de la Sécurité Sociale |
| effectifCodeDuTravail | number(double) | Effectif moyen selon le code du Travail |
| effectifOeth | number(double) | Effectif moyen selon le code de l'Obligation d’Emploi des Travailleurs Handicapés |
| effectifBoeth | number(double) | Effectif moyen selon le code du Bénéficiaire de l’Obligation d’Emploi des Travailleurs Handicapés |
| effectifEcap | number(double) | Effectif moyen selon le code des Catégories d’emplois exigeant des Conditions d’Aptitude Particulières |
| effectifCsa | number(double) | Effectif moyen selon le code CSA |
| effectifCsaCfip | number(double) | Effectif moyen selon le code CSA CFIP |

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
  "effectifs": [
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "effectifSecuriteSociale": 10.5,
      "effectifCodeDuTravail": 10.5,
      "effectifOeth": 10.5,
      "effectifBoeth": 10.5,
      "effectifEcap": 10.5,
      "effectifCsa": 10.5,
      "effectifCsaCfip": 10.5
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "effectifSecuriteSociale": 10.5,
      "effectifCodeDuTravail": 10.5,
      "effectifOeth": 10.5,
      "effectifBoeth": 10.5,
      "effectifEcap": 10.5,
      "effectifCsa": 10.5,
      "effectifCsaCfip": 10.5
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 50 | "Aucun dossier trouvé pour ces critères" | Parmi les critères erronés, cela peut correspondre à : - Un N° de dossier inexistant -Un N° de dossier inaccessible en raison des droits d'accès qui sont insuffisants |
