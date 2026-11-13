---
title: "ListeDossiersAgence"
slug: "listedossiersagence"
updated: 2026-06-16T06:26:17Z
published: 2026-06-16T06:26:17Z
canonical: "silae-api.document360.io/listedossiersagence"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeDossiersAgence

## Fonction API

```
/v1/AdminAgences/ListeDossiersAgence
```

## Verbe HTTP

Post

## Description

Permet de récupérer la liste des dossiers affectés à une agence.

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeAgence | string | Code agence demandé |
| typeDossiers | integer(int32) | TypeDossiers alimenté avec 1 permet d'obtenir uniquement la liste des dossiers de paie avec un établissement renseigné. Toute autre valeur renverra les liste des dossiers de paie, y compris ceux sans établissement |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| dossiers | DossierAgence[] | Liste d'éléments structurés contenant les informations de chaque dossier (cf. détail ci-dessous) |

### DossierAgence

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier |
| raisonSociale | string | Raison sociale du dossier |
| siret | string | Siret de l'établissement principal du dossier |
| groupe | string | Groupe auquel est rattaché le dossier |
| dateCreation | string(date-time) | Date de création du dossier |
| dossierInterne | boolean | Dossier interne au cabinet comptable |
| miseADisposition | boolean | Dossier mise à disposition au client final ou externalisée |
| referenceFacturation | string | Référence de facturation |
| numeroInterne | string | Numéro interne |

## Requête

```
{
  "codeAgence": "string",
  "typeDossiers": 0
}
```

## Réponse

```
{
  "dossiers": [
    {
      "numeroDossier": "string",
      "raisonSociale": "string",
      "siret": "string",
      "groupe": "string",
      "dateCreation": "2020-10-14T21:46:24",
      "dossierInterne": true,
      "miseADisposition": true,
      "referenceFacturation": "string",
      "numeroInterne": "string"
    },
    {
      "numeroDossier": "string",
      "raisonSociale": "string",
      "siret": "string",
      "groupe": "string",
      "dateCreation": "2020-10-14T21:46:24",
      "dossierInterne": true,
      "miseADisposition": true,
      "referenceFacturation": "string",
      "numeroInterne": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
