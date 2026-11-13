---
title: "StatutAnalyseProductionPaieRevenusAsynchrone"
slug: "statutanalyseproductionpaierevenusasynchrone"
updated: 2026-01-20T05:33:19Z
published: 2026-01-20T06:24:07Z
canonical: "silae-api.document360.io/statutanalyseproductionpaierevenusasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieRevenusAsynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieRevenusAsynchrone
```

## Verbe HTTP

Get

## Description

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieRevenusAsynchrone](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieRevenusAsynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [AnalyseProductionPaieRevenusAsynchrone](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieRevenusAsynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesRevenus[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

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
  "guidTache": "string"
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
