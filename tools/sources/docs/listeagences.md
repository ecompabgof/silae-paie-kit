---
title: "ListeAgences"
slug: "listeagences"
updated: 2023-06-20T09:27:09Z
published: 2023-06-20T09:27:09Z
canonical: "silae-api.document360.io/listeagences"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeAgences

## Fonction API

```
/v1/AdminAgences/ListeAgences
```

## Verbe HTTP

Get

          

## Description

          

Permet de récupérer la liste des agences du domaine.

## Groupe de fonctions API

ADMIN02

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| agences | Agence[] | Liste d'éléments structurés contenant les informations de chaque agence (cf. détail ci-dessous) |

### Agence

| Paramètre | Type | Description |
| --- | --- | --- |
| codeAgence | string | Code de l'agence |
| raisonSociale | string | Raison sociale de l'agence |
| siret | string | Siret de l'agence |
| codePostal | string | Code postal de l'agence |
| nomVille | string | Nom de la ville de l'agence |

## Réponse

```
{
  "agences": [
    {
      "codeAgence": "string",
      "raisonSociale": "string",
      "siret": "string",
      "codePostal": "string",
      "nomVille": "string"
    },
    {
      "codeAgence": "string",
      "raisonSociale": "string",
      "siret": "string",
      "codePostal": "string",
      "nomVille": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
