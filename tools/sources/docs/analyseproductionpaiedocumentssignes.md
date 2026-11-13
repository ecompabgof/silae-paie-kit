---
title: "AnalyseProductionPaieDocumentsSignes"
slug: "analyseproductionpaiedocumentssignes"
updated: 2026-06-05T14:16:50Z
published: 2026-06-05T14:16:50Z
canonical: "silae-api.document360.io/analyseproductionpaiedocumentssignes"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseProductionPaieDocumentsSignes

## Fonction API

```
/v1/AnalyseProduction/AnalyseProductionPaieDocumentsSignes
```

## Verbe HTTP

Post

## Description

Permet de récupérer le total des documents à signer par dossier et par mois sur une période donnée. Cette même fonction est proposée en mode asynchrone : [AnalyseProductionPaieDocumentsSignesAsynchrone](https://silae-api.document360.io/api-rest/docs/AnalyseProductionPaieDocumentsSignesAsynchrone)

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteAnalyseProduction | RequeteAnalyseProduction | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### RequeteAnalyseProduction

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période de recherche |
| periodeFin | string(date-time) | Date de fin de la période de recherche |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| codeAgence | string | Code agence pour lequel récupérer les données |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | StatistiquesDocumentsSignes[] | Liste d'éléments structurés contenant les informations de production pour chaque dossier concerné (cf. détail ci-dessous) |

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
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 50 | "Aucun dossier trouvé pour ces critères" | Le N° de dossier ne doit pas appartenir au code agence indiqué |
