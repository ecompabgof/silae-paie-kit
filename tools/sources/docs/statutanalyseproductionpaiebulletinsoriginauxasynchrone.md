---
title: "StatutAnalyseProductionPaieBulletinsOriginauxAsynchrone"
slug: "statutanalyseproductionpaiebulletinsoriginauxasynchrone"
updated: 2025-08-05T12:30:17Z
published: 2025-08-05T12:30:17Z
canonical: "silae-api.document360.io/statutanalyseproductionpaiebulletinsoriginauxasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieBulletinsOriginauxAsynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieBulletinsOriginauxAsynchrone
```

## Verbe HTTP

Get

              

## Description

              

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieBulletinsOriginauxAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaiebulletinsoriginauxasynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [AnalyseProductionPaieBulletinsOriginauxAsynchrone](https://silae-api.document360.io/api-rest/docs/analyseproductionpaiebulletinsoriginauxasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesBulletin[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### StatistiquesBulletin

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier |
| codeAgence | string | Code de l'agence de rattachement du dossier |
| statistiquesProduction | StatistiquesProductionBulletin[] | Liste d'éléments structurés contenant les informations de production (cf. détail ci-dessous) |

### StatistiquesProductionBulletin

| Paramètre | Type | Description |
| --- | --- | --- |
| periodePaie | string(date) | Période de paie concernée ***Le résultat est toujours exprimé en période de paie même si typePeriode = 1 période (calendaire)*** |
| nbBulletinsOriginaux | integer(int32) | Nombre de bulletins originaux produits sur cette période de paie |

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
      "statistiquesProduction": [
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsOriginaux": 0
        },
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsOriginaux": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProduction": [
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsOriginaux": 0
        },
        {
          "periodePaie": "2020-10-14",
          "nbBulletinsOriginaux": 0
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
