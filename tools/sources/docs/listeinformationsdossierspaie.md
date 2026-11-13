---
title: "ListeInformationsDossiersPaie"
slug: "listeinformationsdossierspaie"
updated: 2025-10-13T08:47:21Z
published: 2025-10-13T08:47:21Z
canonical: "silae-api.document360.io/listeinformationsdossierspaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeInformationsDossiersPaie

## Fonction API

```
/v1/InfosTechniquesDossiers/ListeInformationsDossiersPaie
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer la liste des conventions collectives configurées dans les dossiers accessibles via la session (basé sur les droits de l'utilisateur Silae utilisé pour se connecter).

## Groupe de fonctions API

DATA005

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| informationsDossiersDePaie | InformationsDossier[] | Liste d'éléments structurés contenant les informations des conventions collectives dans les dossiers présents dans le domaine et accessibles (Détail ci-dessous) |

### InformationsDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | {{snippet.API_numerodossier}} |
| conventionsCollectives | string[] | Liste des conventions collectives configurées dans le bloc "Conventions Collectives" de la fiche société du dossier |

## Réponse

```
{
  "informationsDossiersDePaie": [
    {
      "numeroDossier": "string",
      "conventionsCollectives": [
        "string",
        "string"
      ]
    },
    {
      "numeroDossier": "string",
      "conventionsCollectives": [
        "string",
        "string"
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
