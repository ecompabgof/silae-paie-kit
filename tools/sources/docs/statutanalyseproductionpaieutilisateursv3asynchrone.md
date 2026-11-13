---
title: "StatutAnalyseProductionPaieUtilisateursV3Asynchrone"
slug: "statutanalyseproductionpaieutilisateursv3asynchrone"
updated: 2026-06-02T06:22:50Z
published: 2026-06-02T06:22:50Z
canonical: "silae-api.document360.io/statutanalyseproductionpaieutilisateursv3asynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieUtilisateursV3Asynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieUtilisateursV3Asynchrone
```

## Verbe HTTP

Get

## Description

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieUtilisateursV3Asynchrone](/api-rest/docs/analyseproductionpaieutilisateursV3asynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutAnalyseProductionPaieUtilisateursV3Asynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieutilisateursV3asynchrone) pour obtenir le résultat |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiqueUtilisateurs | StatistiquesUtilisateursV3[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statistiques | StatistiquesUtilisateursV3[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### StatistiquesUtilisateursV3

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier |
| codeAgence | string | Code de l'agence de rattachement du dossier |
| statistiquesProductionUtilisateurs | StatistiquesProductionUtilisateurV3[] | Liste d'éléments structurés contenant les informations de production (cf. détail ci-dessous) |

### StatistiquesProductionUtilisateurV3

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantUtilisateur | string | Identifiant de l'utilisateur |
| periodePaie | string(date-time) | Période sur laquelle se base l'analyse |
| dateEdition | string(date-time) | Date d'édition (date de la dernière édition effectuée) |
| nbBulletins | integer(int32) | Nombre de bulletins contrôlés par l'utilisateur |
| nbEntrees | integer(int32) | Nombre d'entrées liées aux bulletins contrôlés par l'utilisateur |
| nbEntreesCDI | integer(int32) | Nombre d'entrées en CDI liées aux bulletins contrôlés par l'utilisateur |
| nbEntreesCDD | integer(int32) | Nombre d'entrées en CDD liées aux bulletins contrôlés par l'utilisateur |
| nbEntreesAutres | integer(int32) | Nombre d'entrées autres liées aux bulletins contrôlés par l'utilisateur |
| nbSorties | integer(int32) | Nombre de sorties liées aux bulletins contrôlés par l'utilisateurr |
| nbSortiesCDI | integer(int32) | Nombre de sorties en CDI liées aux bulletins contrôlés par l'utilisateur |
| nbSortiesCDD | integer(int32) | Nombre de sorties en CDD liées aux bulletins contrôlés par l'utilisateur |
| nbSortiesDemission | integer(int32) | Nombre de sorties en démission liées aux bulletins contrôlés par l'utilisateur |
| nbSortiesRuptureConventionnelle | integer(int32) | Nombre de sorties en rupture conventionnelle liées aux bulletins contrôlés par l'utilisateur |
| nbSortiesLicenciement | integer(int32) | Nombre de sorties en licenciement liées aux bulletins contrôlés par l'utilisateur |
| nbSortiesAutres | integer(int32) | Nombre de sorties autres liées aux bulletins contrôlés par l'utilisateur |

## Requête

```
{
  "guidTache": "string"
}
```

## Réponse

```
{
  "statistiqueUtilisateurs": [
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProductionUtilisateurs": [
        {
          "identifiantUtilisateur": "string",
          "periodePaie": "2020-10-14T21:46:24",
          "dateEdition": "2020-10-14T21:46:24",
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbEntreesCDI": 0,
          "nbEntreesCDD": 0,
          "nbEntreesAutres": 0,
          "nbSorties": 0,
          "nbSortiesCDI": 0,
          "nbSortiesCDD": 0,
          "nbSortiesDemission": 0,
          "nbSortiesRuptureConventionnelle": 0,
          "nbSortiesLicenciement": 0,
          "nbSortiesAutres": 0
        },
        {
          "identifiantUtilisateur": "string",
          "periodePaie": "2020-10-14T21:46:24",
          "dateEdition": "2020-10-14T21:46:24",
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbEntreesCDI": 0,
          "nbEntreesCDD": 0,
          "nbEntreesAutres": 0,
          "nbSorties": 0,
          "nbSortiesCDI": 0,
          "nbSortiesCDD": 0,
          "nbSortiesDemission": 0,
          "nbSortiesRuptureConventionnelle": 0,
          "nbSortiesLicenciement": 0,
          "nbSortiesAutres": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProductionUtilisateurs": [
        {
          "identifiantUtilisateur": "string",
          "periodePaie": "2020-10-14T21:46:24",
          "dateEdition": "2020-10-14T21:46:24",
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbEntreesCDI": 0,
          "nbEntreesCDD": 0,
          "nbEntreesAutres": 0,
          "nbSorties": 0,
          "nbSortiesCDI": 0,
          "nbSortiesCDD": 0,
          "nbSortiesDemission": 0,
          "nbSortiesRuptureConventionnelle": 0,
          "nbSortiesLicenciement": 0,
          "nbSortiesAutres": 0
        },
        {
          "identifiantUtilisateur": "string",
          "periodePaie": "2020-10-14T21:46:24",
          "dateEdition": "2020-10-14T21:46:24",
          "nbBulletins": 0,
          "nbEntrees": 0,
          "nbEntreesCDI": 0,
          "nbEntreesCDD": 0,
          "nbEntreesAutres": 0,
          "nbSorties": 0,
          "nbSortiesCDI": 0,
          "nbSortiesCDD": 0,
          "nbSortiesDemission": 0,
          "nbSortiesRuptureConventionnelle": 0,
          "nbSortiesLicenciement": 0,
          "nbSortiesAutres": 0
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
