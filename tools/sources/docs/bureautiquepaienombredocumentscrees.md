---
title: "BureautiquePaieNombreDocumentsCrees"
slug: "bureautiquepaienombredocumentscrees"
updated: 2023-04-06T16:46:11Z
published: 2023-04-06T16:46:11Z
canonical: "silae-api.document360.io/bureautiquepaienombredocumentscrees"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# BureautiquePaieNombreDocumentsCrees

## Fonction API

```
/v1/AnalyseProduction/BureautiquePaieNombreDocumentsCrees
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer le nombre de documents générés sur une période pour chaque dossier de paie accessible. Un dossier pour lequel aucun document n'a été généré ne remontera pas dans les résultats

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomDocument | string | Permet de filtrer sur le nom du document. Il est possible d'utiliser le caractère % pour ne pas faire une recherche exacte sur le nom du document (par exemple "%CDD%" permet de ne compter que les documents qui contiennent CDD). Laisser vide pour ne pas filtrer |
| dateDebut | string(date-time) | Permet de filtrer pour ne remonter que les documents qui ont été créés après cette date |
| dateFin | string(date-time) | Permet de filtrer pour ne remonter que les documents qui ont été créés avant cette date. Laisser vide pour que DateFin soit la date du jour |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiquesBureautique | StatistiquesBureautique[] | Liste d'éléments structurés contenant les informations des documents générés (cf. détail ci-dessous) |

### StatistiquesBureautique

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| nbDocumentsCrees | integer(int32) | Nombre de documents générés pour le dossier qui correspondent aux critères (période, nom du document) |

## Requête

```
{
  "nomDocument": "string",
  "dateDebut": "2020-10-14T21:46:24",
  "dateFin": "2020-10-14T21:46:24"
}
```

## Réponse

```
{
  "statistiquesBureautique": [
    {
      "numeroDossier": "string",
      "nbDocumentsCrees": 0
    },
    {
      "numeroDossier": "string",
      "nbDocumentsCrees": 0
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
