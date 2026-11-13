---
title: "EtatDeclarations"
slug: "etatdeclarations"
updated: 2025-12-05T15:55:10Z
published: 2025-12-05T15:55:10Z
canonical: "silae-api.document360.io/etatdeclarations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EtatDeclarations

## Fonction API

```
/v1/EtatDeclaration/EtatDeclarations
```

## Verbe HTTP

Post

## Description

Permet de récupérer des informations sur les déclarations d'un dossier, notamment leur état

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| typeDeclaration | string | Type de déclaration recherchée. Peut valoir : "DECLARATION", "DADSU", "DUE, "DN-AC-AE" ou "DSIJ" |
| periode | string(date-time) | Période de paie pour laquelle rechercher une déclaration. Obligatoire uniquement pour les recherches sur le type "DECLARATION" Période basée sur la date de référence pour les recherches sur le type "DN-AC-AE" |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| etatDeclarations | EtatDeclaration[] | Liste d'éléments structurés contenant les informations des déclarations trouvées (cf. détail ci-dessous) |

### EtatDeclaration

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroADS | string | Numéro ADS de la déclaration |
| date | string(date-time) | Date de la déclaration |
| typeDeclaration | string | Type de déclaration |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattachée la déclaration |
| destinataire | string | Destinataire de la déclaration |
| obsolete | boolean | Permet d'indiquer si la déclaration est obsolète (**true**) ou pas (**false**) |
| test | boolean | Permet d'indiquer s'il s'agit d'une déclaration test (**true**) ou pas (**false**) |
| retour | EtatDeclarationRetour[] | Liste d'éléments structurés contenant les informations des retours reçus suite aux déclarations (cf. détail ci-dessous) |

### EtatDeclarationRetour

| Paramètre | Type | Description |
| --- | --- | --- |
| date | string(date-time) | Date du retour |
| nature | string | Nature du retour (pas exemple "ADS", "ARS" ou "ACS" |
| etat | string | Statut du retour (accepté, accepté avec anomalie, ...) |

## Requête

```
{
  "typeDeclaration": "string",
  "periode": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "etatDeclarations": [
    {
      "numeroADS": "string",
      "date": "2020-10-14T21:46:24",
      "typeDeclaration": "string",
      "nomInterneEtablissement": "string",
      "destinataire": "string",
      "obsolete": true,
      "test": true,
      "retour": [
        {
          "date": "2020-10-14T21:46:24",
          "nature": "string",
          "etat": "string"
        },
        {
          "date": "2020-10-14T21:46:24",
          "nature": "string",
          "etat": "string"
        }
      ]
    },
    {
      "numeroADS": "string",
      "date": "2020-10-14T21:46:24",
      "typeDeclaration": "string",
      "nomInterneEtablissement": "string",
      "destinataire": "string",
      "obsolete": true,
      "test": true,
      "retour": [
        {
          "date": "2020-10-14T21:46:24",
          "nature": "string",
          "etat": "string"
        },
        {
          "date": "2020-10-14T21:46:24",
          "nature": "string",
          "etat": "string"
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| unknown | Retour null de la fonction | Aucune déclaration trouvée sur la période demandée |
|  | "Vous n'avez pas l'autorisation d'accéder aux états des déclarations de ce dossier" | Les droits d'accès sont insuffisants pour exploiter cette fonction API. Vérifier notamment l'option ***Droits limités en paie*** sur fiche Collaborateur qui doit être décochée |
