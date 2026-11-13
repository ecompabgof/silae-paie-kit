---
title: "ListeEtablissementsDossierPaie"
slug: "listeetablissementsdossierpaie"
updated: 2023-05-19T10:00:03Z
published: 2023-05-19T10:00:04Z
canonical: "silae-api.document360.io/listeetablissementsdossierpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeEtablissementsDossierPaie

## Fonction API

```
/v1/FicheSociete/ListeEtablissementsDossierPaie
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la liste des établissements d'un dossier de paie

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| informationsEtablissements | InformationsEtablissement[] | Liste d'éléments structurés contenant les informations des établissements (cf. détail ci-dessous) |

### InformationsEtablissement

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterne | string | Nom interne de l'établissement |
| siret | string | Numéro de SIRET |
| etablissementPrincipal | boolean | Permet d'indiquer s'il s'agit de l'établissement principal (**true**) ou non (**false**) |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "informationsEtablissements": [
    {
      "nomInterne": "string",
      "siret": "string",
      "etablissementPrincipal": true
    },
    {
      "nomInterne": "string",
      "siret": "string",
      "etablissementPrincipal": true
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
