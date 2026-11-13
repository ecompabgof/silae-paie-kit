---
title: "StatutAnalyseProductionPaieEntreesSortiesAsynchrone"
slug: "statutanalyseproductionpaieentreessortiesasynchrone"
updated: 2025-02-18T05:09:38Z
published: 2025-02-18T05:09:38Z
canonical: "silae-api.document360.io/statutanalyseproductionpaieentreessortiesasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieEntreesSortiesAsynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieEntreesSortiesAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieEntreesSortiesAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieentreessortiesasynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [AnalyseProductionPaieEntreesSortiesAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieentreessortiesasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiquesEntreesSorties | StatistiquesEntreesSorties[] | Liste d'éléments structurés contenant les informations de production sur les entrées/sorties (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

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
  "guidTache": "string"
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
  ],
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
