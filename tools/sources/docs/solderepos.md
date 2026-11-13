---
title: "SoldeRepos"
slug: "solderepos"
updated: 2024-11-13T14:33:34Z
published: 2024-11-13T14:33:34Z
canonical: "silae-api.document360.io/solderepos"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SoldeRepos

## Fonction API

```
/v1/EditionEtatsPaie/SoldeRepos
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer les informations de repos de tous les salariés d'un dossier. *Cette même fonction est proposée en mode asynchrone : [SoldeReposAsynchrone](https://silae-api.document360.io/api-rest/docs/soldereposasynchrone)*

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné (facultatif) |
| periode | string(date) | Période pour laquelle remonter les informations de repos. *La date doit être au format AAAA-MM-JJ* |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| periode | string(date-time) | Période à laquelle sont rattachées les informations de repos |
| soldeReposSalaries | SoldeReposSalarie[] | Liste d'éléments structurés contenant les informations des repos des salariés (cf. détail ci-dessous) |

### SoldeReposSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| matricule | string | Matricule du salarié |
| nomAffiche | string | Nom du salarié tel qu'affiché dans Silae |
| cpN1Acquis | number(double) | Nombre de CP N-1 acquis |
| cpN1Pris | number(double) | Nombre de CP N-1 pris |
| cpN1Solde | number(double) | Solde de CP N-1 |
| cpN1Provision | number(double) | Provision de CP N-1 |
| cpnAcquis | number(double) | Nombre de CP N acquis |
| cpnPris | number(double) | Nombre de CP N pris |
| cpnSolde | number(double) | Solde de CP N |
| cpnProvision | number(double) | Provision de CP N |
| cpProvision | number(double) | Total provision de CP |
| cpTauxChargesPatronales | number(double) | Taux des charges patronales |
| cpMontantChargesPatronales | number(double) | Montant des charges patronales |
| cpTotalProvision | number(double) | Provision totale |
| rttAcquis | number(double) | Nombre de RTT acquis |
| rttPris | number(double) | Nombre de RTT pris |
| rttSolde | number(double) | Solde de RTT |
| rttProvision | number(double) | Provision de RTT |
| rttMontantChargesPatronales | number(double) | Montant des charges patronales RTT |
| rttTotalProvision | number(double) | Total provision de RTT |
| cpSupAcquis | number(double) | Nombre de CP Sup acquis |
| cpSupPris | number(double) | Nombre de CP Sup pris |
| cpSupSolde | number(double) | Solde de CP Sup |
| cpSupProvision | number(double) | Provision de CP Sup |
| cpSupMontantChargesPatronales | number(double) | Montant des charges patronales CP Sup |
| cpSupTotalProvision | number(double) | Total provision de CP Sup |
| cpSup2Acquis | number(double) | Nombre de CP Sup 2 acquis |
| cpSup2Pris | number(double) | Nombre de CP Sup 2 pris |
| cpSup2Solde | number(double) | Solde de CP Sup 2 |
| cpSup2Provision | number(double) | Provision de CP Sup 2 |
| cpSup2MontantChargesPatronales | number(double) | Montant des charges patronales CP Sup 2 |
| cpSup2TotalProvision | number(double) | Total provision de CP Sup 2 |
| rcrAcquis | number(double) | Nombre de RCR acquis |
| rcrPris | number(double) | Nombre de RCR pris |
| rcrSolde | number(double) | Solde de RCR |
| rcrProvision | number(double) | Provision de RCR |
| rccAcquis | number(double) | Nombre de RCC acquis |
| rccPris | number(double) | Nombre de RCC pris |
| rccSolde | number(double) | Solde de RCC |
| rccProvision | number(double) | Provision de RCC |
| rcoAcquis | number(double) | Nombre de RCO acquis |
| rcoPris | number(double) | Nombre de RCO pris |
| rcoSolde | number(double) | Solde de RCO |
| rcoProvision | number(double) | Provision de RCO |
| rcAcquis | number(double) | Nombre de RC acquis |
| rcPris | number(double) | Nombre de RC pris |
| rcSolde | number(double) | Solde de RC |
| rcProvision | number(double) | Provision de RC |

## Requête

```
{
  "matriculeSalarie": "string",
  "periode": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "numeroDossier": "string",
  "periode": "2020-10-14T21:46:24",
  "soldeReposSalaries": [
    {
      "matricule": "string",
      "nomAffiche": "string",
      "cpN1Acquis": 10.5,
      "cpN1Pris": 10.5,
      "cpN1Solde": 10.5,
      "cpN1Provision": 10.5,
      "cpnAcquis": 10.5,
      "cpnPris": 10.5,
      "cpnSolde": 10.5,
      "cpnProvision": 10.5,
      "cpProvision": 10.5,
      "cpTauxChargesPatronales": 10.5,
      "cpMontantChargesPatronales": 10.5,
      "cpTotalProvision": 10.5,
      "rttAcquis": 10.5,
      "rttPris": 10.5,
      "rttSolde": 10.5,
      "rttProvision": 10.5,
      "rttMontantChargesPatronales": 10.5,
      "rttTotalProvision": 10.5,
      "cpSupAcquis": 10.5,
      "cpSupPris": 10.5,
      "cpSupSolde": 10.5,
      "cpSupProvision": 10.5,
      "cpSupMontantChargesPatronales": 10.5,
      "cpSupTotalProvision": 10.5,
      "cpSup2Acquis": 10.5,
      "cpSup2Pris": 10.5,
      "cpSup2Solde": 10.5,
      "cpSup2Provision": 10.5,
      "cpSup2MontantChargesPatronales": 10.5,
      "cpSup2TotalProvision": 10.5,
      "rcrAcquis": 10.5,
      "rcrPris": 10.5,
      "rcrSolde": 10.5,
      "rcrProvision": 10.5,
      "rccAcquis": 10.5,
      "rccPris": 10.5,
      "rccSolde": 10.5,
      "rccProvision": 10.5,
      "rcoAcquis": 10.5,
      "rcoPris": 10.5,
      "rcoSolde": 10.5,
      "rcoProvision": 10.5,
      "rcAcquis": 10.5,
      "rcPris": 10.5,
      "rcSolde": 10.5,
      "rcProvision": 10.5
    },
    {
      "matricule": "string",
      "nomAffiche": "string",
      "cpN1Acquis": 10.5,
      "cpN1Pris": 10.5,
      "cpN1Solde": 10.5,
      "cpN1Provision": 10.5,
      "cpnAcquis": 10.5,
      "cpnPris": 10.5,
      "cpnSolde": 10.5,
      "cpnProvision": 10.5,
      "cpProvision": 10.5,
      "cpTauxChargesPatronales": 10.5,
      "cpMontantChargesPatronales": 10.5,
      "cpTotalProvision": 10.5,
      "rttAcquis": 10.5,
      "rttPris": 10.5,
      "rttSolde": 10.5,
      "rttProvision": 10.5,
      "rttMontantChargesPatronales": 10.5,
      "rttTotalProvision": 10.5,
      "cpSupAcquis": 10.5,
      "cpSupPris": 10.5,
      "cpSupSolde": 10.5,
      "cpSupProvision": 10.5,
      "cpSupMontantChargesPatronales": 10.5,
      "cpSupTotalProvision": 10.5,
      "cpSup2Acquis": 10.5,
      "cpSup2Pris": 10.5,
      "cpSup2Solde": 10.5,
      "cpSup2Provision": 10.5,
      "cpSup2MontantChargesPatronales": 10.5,
      "cpSup2TotalProvision": 10.5,
      "rcrAcquis": 10.5,
      "rcrPris": 10.5,
      "rcrSolde": 10.5,
      "rcrProvision": 10.5,
      "rccAcquis": 10.5,
      "rccPris": 10.5,
      "rccSolde": 10.5,
      "rccProvision": 10.5,
      "rcoAcquis": 10.5,
      "rcoPris": 10.5,
      "rcoSolde": 10.5,
      "rcoProvision": 10.5,
      "rcAcquis": 10.5,
      "rcPris": 10.5,
      "rcSolde": 10.5,
      "rcProvision": 10.5
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
