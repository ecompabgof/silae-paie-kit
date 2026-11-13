---
title: "ListeSalarieEmplois"
slug: "listesalarieemplois"
updated: 2024-08-23T08:03:25Z
published: 2024-08-23T08:03:25Z
canonical: "silae-api.document360.io/listesalarieemplois"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeSalarieEmplois

## Fonction API

```
/v1/SalarieEmplois/ListeSalarieEmplois
```

## Verbe HTTP

Post

              

## Description

              

Permet de :

- Initialiser l'identifiant emploi pour chaque emploi de la fiche salarié (utile pour les fonctions API qui ont besoin de l'identifiant Emploi en paramètre. Ex : CreationSalarieEmploi)
- Lister les informations des emplois du salarié.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| typeEmplois | integer(int32) | Définit si on récupère uniquement les emplois en cours (Valeur 0) ou les emplois en cours et les emplois archivés (Valeur 1) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeSalarieEmplois | SalarieEmploiInformations[] | Liste d'éléments structurés contenant les informations des emplois du salarié (cf. détail ci-dessous) |

### SalarieEmploiInformations

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi |
| dateDebut | string(date-time) | Date de début de l'emploi |
| dateFin | string(date-time) | Date de fin de l'emploi |
| intituleEmploi | string | Intitulé de l'emploi |
| emploiArchive | boolean | Permet de savoir si l'emploi est en cours (false) ou archivé (true) |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattaché l'emploi |

## Requête

```
{
  "typeEmplois": 0,
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeSalarieEmplois": [
    {
      "identifiantEmploi": 0,
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "intituleEmploi": "string",
      "emploiArchive": true,
      "nomInterneEtablissement": "string"
    },
    {
      "identifiantEmploi": 0,
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "intituleEmploi": "string",
      "emploiArchive": true,
      "nomInterneEtablissement": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
