---
title: "StatutAnalyseProductionPaieDocumentsSignesAsynchrone"
slug: "statutanalyseproductionpaiedocumentssignesasynchrone"
updated: 2026-01-20T06:14:17Z
published: 2026-01-20T06:24:07Z
canonical: "silae-api.document360.io/statutanalyseproductionpaiedocumentssignesasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutAnalyseProductionPaieDocumentsSignesAsynchrone

## Fonction API

```
/v1/AnalyseProduction/StatutAnalyseProductionPaieDocumentsSignesAsynchrone
```

## Verbe HTTP

Get

## Description

Cette fonction sert à récupérer le résultat de l'appel à [AnalyseProductionPaieDocumentsSignesAsynchrone](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieDocumentsSignesAsynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [AnalyseProductionPaieDocumentsSignesAsynchrone](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieDocumentsSignesAsynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesDocumentsSignes[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### StatistiquesDocumentsSignes

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro de dossier |
| codeAgence | string | Code agence |
| statistiquesProduction | StatistiquesProductionDocumentsSignes[] | Liste d'éléments structurés contenant les informations de chaque période (cf. détail ci-dessous) |

### StatistiquesProductionDocumentsSignes

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date) | Période concernée ***Le résultat est toujours exprimé en période calendaire*** |
| docSignes | integer(int32) | Nombre de documents signés |
| docSortie | integer(int32) | Nombre de documents de sortie signés |
| docSignesSantePrevoyance | integer(int32) | Nombre de documents de Santé et Prévoyance signés |
| signatairesFactures | integer(int32) | Nombre de signataires facturés |
| signatairesFacturesDocSortie | integer(int32) | Nombre de signataires facturés sur document de sortie |
| signatairesFacturesDocSantePrevoyance | integer(int32) | Nombre de signataires facturés sur document de santé et prévoyance |
| zoneSignature | integer(int32) | Nombre de zones de signature |
| zoneSignatureDocSortie | integer(int32) | Nombre de zones de signature dans document de sortie |
| zoneSignatureDocSantePrevoyance | integer(int32) | Nombre de zones de signature dans document de santé et prévoyance |

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
          "periode": "2020-10-14",
          "docSignes": 0,
          "docSortie": 0,
          "docSignesSantePrevoyance": 0,
          "signatairesFactures": 0,
          "signatairesFacturesDocSortie": 0,
          "signatairesFacturesDocSantePrevoyance": 0,
          "zoneSignature": 0,
          "zoneSignatureDocSortie": 0,
          "zoneSignatureDocSantePrevoyance": 0
        },
        {
          "periode": "2020-10-14",
          "docSignes": 0,
          "docSortie": 0,
          "docSignesSantePrevoyance": 0,
          "signatairesFactures": 0,
          "signatairesFacturesDocSortie": 0,
          "signatairesFacturesDocSantePrevoyance": 0,
          "zoneSignature": 0,
          "zoneSignatureDocSortie": 0,
          "zoneSignatureDocSantePrevoyance": 0
        }
      ]
    },
    {
      "numeroDossier": "string",
      "codeAgence": "string",
      "statistiquesProduction": [
        {
          "periode": "2020-10-14",
          "docSignes": 0,
          "docSortie": 0,
          "docSignesSantePrevoyance": 0,
          "signatairesFactures": 0,
          "signatairesFacturesDocSortie": 0,
          "signatairesFacturesDocSantePrevoyance": 0,
          "zoneSignature": 0,
          "zoneSignatureDocSortie": 0,
          "zoneSignatureDocSantePrevoyance": 0
        },
        {
          "periode": "2020-10-14",
          "docSignes": 0,
          "docSortie": 0,
          "docSignesSantePrevoyance": 0,
          "signatairesFactures": 0,
          "signatairesFacturesDocSortie": 0,
          "signatairesFacturesDocSantePrevoyance": 0,
          "zoneSignature": 0,
          "zoneSignatureDocSortie": 0,
          "zoneSignatureDocSantePrevoyance": 0
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
| 50 | "Aucun dossier trouvé pour ces critères" | Le N° de dossier ne doit pas appartenir au code agence indiqué |
