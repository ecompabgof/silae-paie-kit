---
title: "ListeDossiersDemoSilae"
slug: "listedossiersdemosilae"
updated: 2024-08-23T07:56:03Z
published: 2024-08-23T07:56:03Z
canonical: "silae-api.document360.io/listedossiersdemosilae"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeDossiersDemoSilae

## Fonction API

```
/v1/AdminDossier/ListeDossiersDemoSilae
```

## Verbe HTTP

Get

              

## Description

              

Permet de récupérer la liste des dossiers de démo mis à disposition par Silae pour des démonstrations/présentations.

## Groupe de fonctions API

ADMIN01

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| modeles | DossierDemoSilae[] | Liste d'éléments structurés contenant les informations de dossiers de démo disponible sur le domaine (cf. détail ci-dessous) |

### DossierDemoSilae

| Paramètre | Type | Description |
| --- | --- | --- |
| tokenDossierDemo | string | Token d'import à utiliser pour importer ce dossier |
| nomDossier | string | Nom du modèle de dossier de démo |

## Réponse

```
{
  "modeles": [
    {
      "tokenDossierDemo": "string",
      "nomDossier": "string"
    },
    {
      "tokenDossierDemo": "string",
      "nomDossier": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
