---
title: "AnalyseProductionPaieUtilisateursV3"
slug: "analyseproductionpaieutilisateursv3"
updated: 2026-06-16T16:28:36Z
published: 2026-06-16T16:28:36Z
canonical: "silae-api.document360.io/analyseproductionpaieutilisateursv3"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieUtilisateursV3

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieUtilisateursV3
```

## Verbe HTTP

Post

## Description

Cette fonction API identique à [AnalyseProductionPaieUtilisateursV2](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieutilisateursV2), permet de récupérer les données suivantes par les utilisateurs en fonction des droits d'accès de l'utilisateur courant :

- Le nombre de bulletins contrôlés
- Le nombre d'entrées total et en fonction du type de contrat
- Le nombre de sorties en fonction du type de contrat et du type de licenciement

**Les données sont réparties par identifiant utilisateur, puis par date d'édition.** Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieUtilisateursV3Asynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieutilisateursV3asynchrone)

---

**Point d'attention** Pour améliorer les délais de traitement, il est fortement recommandé de renseigner le paramètre ***code agence***.

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProduction | RequeteAnalyseProductionV3 | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProductionV3

| Paramètre | Type | Description |
| --- | --- | --- |
| typePeriode | integer(int32) | Type de période de recherche : - 0 = Période de paie (valeur par défaut) - 1 = Période calendaire |
| periodeDebut | string(date-time) | Date de début de la période sur laquelle récupérer les données |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle récupérer les données |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence pour lequel récupérer les données |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiquesUtilisateurs | StatistiquesUtilisateursV3[] | Liste d'éléments structurés contenant les informations sur les utilisateurs pour chaque dossier concerné (cf. détail ci-dessous) |

### StatistiquesUtilisateursV3

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence de l'agence concernée |
| statistiquesProductionUtilisateurs | StatistiquesProductionUtilisateurV3[] | Liste d'éléments structurés contenant les informations de chaque utilisateur concerné (cf. détail ci-dessous) |

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
| nbSortiesRuptureConventionnelle | integer(int32) | Nombre de sorties en rupture conventionnel liées aux bulletins contrôlés par l'utilisateur |
| nbSortiesLicenciement | integer(int32) | Nombre de sorties en licenciement liées aux bulletins contrôlés par l'utilisateur |
| nbSortiesAutres | integer(int32) | Nombre de sorties autres liées aux bulletins contrôlés par l'utilisateur |

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
  "statistiquesUtilisateurs": [
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
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
