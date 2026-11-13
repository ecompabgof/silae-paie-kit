---
title: "ListeComptesApi"
slug: "listecomptesapi"
updated: 2023-05-30T04:05:30Z
published: 2023-05-30T04:05:30Z
canonical: "silae-api.document360.io/listecomptesapi"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeComptesApi

## Fonction API

```
/v1/AdministrationAPI/ListeComptesApi
```

## Verbe HTTP

Get

          

## Description

          

Permet de récupérer la liste des comptes API disponibles (actifs) sur le domaine courant.

## Groupe de fonctions API

ADMIN02

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| comptes | CompteApi[] | Liste d'éléments structurés contenant les informations de chaque compte API (cf. détail ci-dessous) |

### CompteApi

| Paramètre | Type | Description |
| --- | --- | --- |
| clientId | string | ClientId du compte API |
| nomCompteAPI | string | Nom du compte API |

## Réponse

```
{
  "comptes": [
    {
      "clientId": "string",
      "nomCompteAPI": "string"
    },
    {
      "clientId": "string",
      "nomCompteAPI": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
