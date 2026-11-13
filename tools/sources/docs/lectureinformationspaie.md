---
title: "LectureInformationsPaie"
slug: "lectureinformationspaie"
updated: 2024-09-17T13:38:07Z
published: 2024-09-17T13:38:07Z
canonical: "silae-api.document360.io/lectureinformationspaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureInformationsPaie

## Fonction API

```
/v1/InfosDossiers/LectureInformationsPaie
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer les informations de paie liées au dossier, établissement, salarié...

## Groupe de fonctions API

DATA002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteLectureInfos | RequeteLectureInfos | Élément structuré contenant les critères de recherche d'informations (cf. détail ci-dessous) |

### RequeteLectureInfos

| Paramètre | Type | Description |
| --- | --- | --- |
| tableInformations | string | Correspond à la table dans laquelle se trouve l'information recherchées. Peut valoir "CLIENT", "PAIETABLISSEMENT", "INTERVENANT", "PAISALARIE", "PAISALARIEEMPLOI" ou "PAISALARIEEMPLOIEXTERNE" |
| numeroDossier | string | {{snippet.API_numerodossier}} |
| nomInterneEtablissement | string | Nom interne de l'établissement concerné, utilisé pour les recherches sur les tables "PAIETABLISSEMENT", "INTERVENANT" |
| matriculeSalarie | string | Matricule du salarié concerné, utilisé pour les recherches sur les tables "INTERVENANT" et "PAISALARIE" |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné, utilisé pour les recherches sur les tables "PAISALARIEEMPLOI" et "PAISALARIEEMPLOIEXTERNE" |
| champs | string[] | Liste des champs qui contiennent les informations recherchées. Les champs principaux des fiches salarié et société sont décrits dans les fiches annexes [Fiche Salarié - Informations salarié](https://silae-api.document360.io/api-rest/docs/fiche-salarie-informations-salarie), [Fiche Salarié - Emploi](https://silae-api.document360.io/api-rest/docs/fiche-salarie-emploi), [Fiche Société - Société](https://silae-api.document360.io/api-rest/docs/fiche-societe-societe) ou [Fiche Société - Établissement](https://silae-api.document360.io/api-rest/docs/fiche-societe-etablissement) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| reponsesInfosPaie | LectureInfosResult[] | Liste d'éléments structurés contenant les valeurs associées aux champs recherchés (cf. détail ci-dessous) |

### LectureInfosResult

| Paramètre | Type | Description |
| --- | --- | --- |
| champ | string | Nom du champ |
| valeur | object | Valeur associée au champ selon les critères de recherche |

## Requête

```
{
  "requeteLectureInfos": {
    "tableInformations": "string",
    "numeroDossier": "string",
    "nomInterneEtablissement": "string",
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "champs": [
      "string",
      "string"
    ]
  }
}
```

## Réponse

```
{
  "reponsesInfosPaie": [
    {
      "champ": "string",
      "valeur": null
    },
    {
      "champ": "string",
      "valeur": null
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
