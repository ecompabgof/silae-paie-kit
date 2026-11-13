---
title: "AnalyseProductionPaieEntreesSorties"
slug: "analyseproductionpaieentreessorties"
updated: 2023-04-25T03:53:28Z
published: 2023-04-25T03:53:28Z
canonical: "silae-api.document360.io/analyseproductionpaieentreessorties"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieEntreesSorties

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieEntreesSorties
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer des informations concernant les entrées/sorties enregistrées en fonction des droits d'accès de l'utilisateur courant.

***Dans le cas où aucun mouvement n'est trouvé sur la période demandée, aucun résultat sera obtenu.***

*Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieEntreesSortiesAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieentreessortiesasynchrone)*

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
| statistiquesEntreesSorties | StatistiquesEntreesSorties[] | Liste d'éléments structurés contenant les informations de production sur les entrées/sorties (cf. détail ci-dessous) |

### StatistiquesEntreesSorties

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence de l'agence concernée |
| statistiquesEntreesSortiesDetails | StatistiquesEntreesSortiesDetails[] | Liste d'éléments structurés contenant les informations d'entrées/sorties pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesEntreesSortiesDetails

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date-time) | Période de paie à laquelle correspondent les données remontées via les autres paramètres de cet élément structuré |
| entreesCDI_NouveauSalarie | integer(int32) | Nombre d'entrées de nouveaux salariés en CDI |
| entreesCDD_NouveauSalarie | integer(int32) | Nombre d'entrées de nouveaux salariés en CDD |
| entreesAutre_NouveauSalarie | integer(int32) | Nombre d'entrées de nouveaux salariés avec un statut autre que CDD et CDI |
| entreesCDI_NouvelEmploi | integer(int32) | Nombre d'entrées de nouveaux emplois en CDI |
| entreesCDD_NouvelEmploi | integer(int32) | Nombre d'entrées de nouveaux emplois en CDD |
| entreesAutre_NouvelEmploi | integer(int32) | Nombre d'entrées de nouveaux emplois avec un statut autre que CDD et CDI |
| sorties_FinCDD | integer(int32) | Nombre de sorties liées à une fin de CDD |
| sorties_Demission | integer(int32) | Nombre de sorties liées à une démission |
| sorties_RuptureConventionnelle | integer(int32) | Nombre de sorties liées à une rupture conventionnelle |
| sorties_Licenciement | integer(int32) | Nombre de sorties liées à un licenciement |
| sorties_Autre | integer(int32) | Nombre de sorties liées à un autre motif que ceux référencés par les autres paramètres de cet élément structuré |

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
  "statistiquesEntreesSorties": [
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesEntreesSortiesDetails": [
        {
          "periode": "2020-10-14T21:46:24",
          "entreesCDI_NouveauSalarie": 0,
          "entreesCDD_NouveauSalarie": 0,
          "entreesAutre_NouveauSalarie": 0,
          "entreesCDI_NouvelEmploi": 0,
          "entreesCDD_NouvelEmploi": 0,
          "entreesAutre_NouvelEmploi": 0,
          "sorties_FinCDD": 0,
          "sorties_Demission": 0,
          "sorties_RuptureConventionnelle": 0,
          "sorties_Licenciement": 0,
          "sorties_Autre": 0
        },
        {
          "periode": "2020-10-14T21:46:24",
          "entreesCDI_NouveauSalarie": 0,
          "entreesCDD_NouveauSalarie": 0,
          "entreesAutre_NouveauSalarie": 0,
          "entreesCDI_NouvelEmploi": 0,
          "entreesCDD_NouvelEmploi": 0,
          "entreesAutre_NouvelEmploi": 0,
          "sorties_FinCDD": 0,
          "sorties_Demission": 0,
          "sorties_RuptureConventionnelle": 0,
          "sorties_Licenciement": 0,
          "sorties_Autre": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesEntreesSortiesDetails": [
        {
          "periode": "2020-10-14T21:46:24",
          "entreesCDI_NouveauSalarie": 0,
          "entreesCDD_NouveauSalarie": 0,
          "entreesAutre_NouveauSalarie": 0,
          "entreesCDI_NouvelEmploi": 0,
          "entreesCDD_NouvelEmploi": 0,
          "entreesAutre_NouvelEmploi": 0,
          "sorties_FinCDD": 0,
          "sorties_Demission": 0,
          "sorties_RuptureConventionnelle": 0,
          "sorties_Licenciement": 0,
          "sorties_Autre": 0
        },
        {
          "periode": "2020-10-14T21:46:24",
          "entreesCDI_NouveauSalarie": 0,
          "entreesCDD_NouveauSalarie": 0,
          "entreesAutre_NouveauSalarie": 0,
          "entreesCDI_NouvelEmploi": 0,
          "entreesCDD_NouvelEmploi": 0,
          "entreesAutre_NouvelEmploi": 0,
          "sorties_FinCDD": 0,
          "sorties_Demission": 0,
          "sorties_RuptureConventionnelle": 0,
          "sorties_Licenciement": 0,
          "sorties_Autre": 0
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
