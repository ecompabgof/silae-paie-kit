---
title: "LectureCompteCollaborateurModeles"
slug: "lecturecomptecollaborateurmodeles"
updated: 2026-03-10T07:11:27Z
published: 2026-03-10T07:11:27Z
canonical: "silae-api.document360.io/lecturecomptecollaborateurmodeles"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureCompteCollaborateurModeles

## Fonction API

```
/v1/AdminCollaborateurs/LectureCompteCollaborateurModeles
```

## Verbe HTTP

Get

          

## Description

          

Permet de récupérer la liste des modèles de collaborateurs actifs.

## Groupe de fonctions API

ADMIN02

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| modeles | CollaborateurModele[] | Liste d'éléments structurés contenant les informations de chaque modèle de collaborateur (cf. détail ci-dessous) |

### CollaborateurModele

| Paramètre | Type | Description |
| --- | --- | --- |
| nomModele | string | Nom du modèle |
| defaut | boolean | Indique s'il s'agit du modèle par défaut ou non (**true**) ou non (**false**) |
| dateCreation | string(date-time) | Date de création du modèle |

## Réponse

```
{
  "modeles": [
    {
      "nomModele": "string",
      "defaut": true,
      "dateCreation": "2020-10-14T21:46:24"
    },
    {
      "nomModele": "string",
      "defaut": true,
      "dateCreation": "2020-10-14T21:46:24"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
