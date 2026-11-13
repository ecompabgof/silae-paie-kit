---
title: "ListeSalarieEmploisExternes"
slug: "listesalarieemploisexternes"
updated: 2023-05-19T09:46:17Z
published: 2023-05-19T09:46:17Z
canonical: "silae-api.document360.io/listesalarieemploisexternes"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeSalarieEmploisExternes

## Fonction API

```
/v1/SalarieEmplois/ListeSalarieEmploisExternes
```

## Verbe HTTP

Post

          

## Description

          

Permet de lister les informations des missions du travailleur externe

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du travailleur externe concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeSalarieEmploisExternes | SalarieEmploiExterneInformations[] | Liste d'éléments structurés contenant les informations des missions du travailleur externe (cf. détail ci-dessous) |

### SalarieEmploiExterneInformations

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de la mission |
| dateDebut | string(date-time) | Date de début de la mission |
| dateFin | string(date-time) | Date de fin de la mission |
| intituleEmploi | string | Nature de la mission |
| motif | string | Motif du recours |
| codeSociete | string | Société |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel le travailleur externe est rattaché |

## Requête

```
{
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeSalarieEmploisExternes": [
    {
      "identifiantEmploi": 0,
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "intituleEmploi": "string",
      "motif": "string",
      "codeSociete": "string",
      "nomInterneEtablissement": "string"
    },
    {
      "identifiantEmploi": 0,
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "intituleEmploi": "string",
      "motif": "string",
      "codeSociete": "string",
      "nomInterneEtablissement": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
