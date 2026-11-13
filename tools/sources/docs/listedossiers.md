---
title: "ListeDossiers"
slug: "listedossiers"
updated: 2026-06-16T06:26:17Z
published: 2026-06-16T06:26:17Z
canonical: "silae-api.document360.io/listedossiers"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeDossiers

## Fonction API

```
/v1/InfosTechniquesDossiers/ListeDossiers
```

## Verbe HTTP

Post

## Description

Permet de lister les dossiers accessibles via la session (basé sur les droits de l'utilisateur Silae utilisé pour se connecter)

## Groupe de fonctions API

DATA005

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| typeDossiers | integer(int32) | TypeDossiers alimenté avec 1 permet d'obtenir uniquement la liste des dossiers de paie avec un établissement renseigné. Toute autre valeur renverra les liste des dossiers de paie, y compris ceux sans établissement |
| etatDossier | integer(int32) | ***Paramètre qui peut être ajouté si besoin*** Etat du dossier renseigné dans la fiche Société qui permet d'obtenir la liste des dossiers : 0 : inactifs 1 : en montage 2 : en production |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeDossiers | ProprietesDossier[] | Liste d'éléments structurés contenant des informations sur les dossiers présents dans le domaine et accessibles (cf. Détail ci-dessous) |

### ProprietesDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| numero | string | Numéro du dossier |
| raisonSociale | string | Raison sociale du dossier |
| siret | string | Siret de l'établissement principal du dossier |
| groupe | string | Groupe auquel est rattaché le dossier |
| jourPaiementMaxSSOC | integer(int32) | Le jour de paiement maximum des cotisations du code nature Organisme SSOC trouvé parmi les différentes fiches Établissement du dossier de paie (valeur 0 si pas trouvé ou organisme résilié |
| etatDossier | integer(int32) | Etat du dossier renseigné dans la fiche Société 0 : Dossier inactif 1 : Dossier en montage 2 : Dossier en production |
| numeroInterne | string | Numéro interne du dossier tel que définit dans la fiche Client du dossier de paie (fonction **Gestion interne > Clients**) |
| dossierInterne | boolean | Dossier déclaré interne |
| miseADisposition | boolean | Dossier mis à disposition |
| referenceFacturation | string | Référence de facturation |

## Requête

```
{
  "typeDossiers": 0,
  "etatDossier": 0
}
```

## Réponse

```
{
  "listeDossiers": [
    {
      "numero": "string",
      "raisonSociale": "string",
      "siret": "string",
      "groupe": "string",
      "jourPaiementMaxSSOC": 0,
      "etatDossier": 0,
      "numeroInterne": "string",
      "dossierInterne": true,
      "miseADisposition": true,
      "referenceFacturation": "string"
    },
    {
      "numero": "string",
      "raisonSociale": "string",
      "siret": "string",
      "groupe": "string",
      "jourPaiementMaxSSOC": 0,
      "etatDossier": 0,
      "numeroInterne": "string",
      "dossierInterne": true,
      "miseADisposition": true,
      "referenceFacturation": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
