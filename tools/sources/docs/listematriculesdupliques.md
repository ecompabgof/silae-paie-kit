---
title: "ListeMatriculesDupliques"
slug: "listematriculesdupliques"
updated: 2023-06-27T02:15:22Z
published: 2023-06-27T02:15:22Z
canonical: "silae-api.document360.io/listematriculesdupliques"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeMatriculesDupliques

## Fonction API

```
/v1/InfosTechniquesDossiers/ListeMatriculesDupliques
```

## Verbe HTTP

Post

              

## Description

              

Permet de lister les matricules en double dans un dossier

## Groupe de fonctions API

DATA005

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| filtreMatricule | string | Permet de limiter la recherche à un seul matricule dupliqué en particulier. Ce paramètre doit être soit un et un seul matricule, soit vide et dans ce cas il n'y aura pas de filtre et la fonction remontera tous les matricules en double |
| numeroDossier | string | {{snippet.API_numerodossier}} |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculesDupliques | string[] | Liste des matricules identifiés comme appartenant à plusieurs salariés |

## Requête

```
{
  "filtreMatricule": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "matriculesDupliques": [
    "string",
    "string"
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
