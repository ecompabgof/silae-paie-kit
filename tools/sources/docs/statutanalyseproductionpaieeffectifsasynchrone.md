---
title: "StatutAnalyseProductionPaieEffectifsAsynchrone"
slug: "statutanalyseproductionpaieeffectifsasynchrone"
updated: 2025-02-18T05:13:10Z
published: 2025-02-18T05:13:10Z
canonical: "silae-api.document360.io/statutanalyseproductionpaieeffectifsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieEffectifsAsynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieEffectifsAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieEffectifsAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieeffectifsasynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [AnalyseProductionPaieEffectifsAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaieeffectifsasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| effectifs | AnalyseEffectifs[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

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
  "guidTache": "string"
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
