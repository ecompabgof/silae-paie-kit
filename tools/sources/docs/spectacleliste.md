---
title: "SpectacleListe"
slug: "spectacleliste"
updated: 2023-05-19T11:03:16Z
published: 2023-05-19T11:03:16Z
canonical: "silae-api.document360.io/spectacleliste"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SpectacleListe

## Fonction API

```
/v1/ModuleSpectacle/SpectacleListe
```

## Verbe HTTP

Post

          

## Description

          

Permet de lister les spectacles d'un dossier à partir d'une date donnée

## Groupe de fonctions API

SPECT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebutMin | string(date-time) | Les spectacles qui remonteront dans la réponse seront ceux avec une date de début supérieure à la date renseignée dans ce paramètre |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| spectacles | Spectacle[] | Liste d'éléments structurés contenant les informations des spectacles trouvés (cf. détail ci-dessous) |

### Spectacle

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattaché le spectacle |
| axeAnalytique | string | Il est possible de rattacher le spectacle à 3 axes analytiques. Ce paramètre définit le premier axe analytique |
| valeurAxeAnalytique | string | Indique à quelle valeur de l'axe analytique 1 est rattaché le spectacle |
| axeAnalytique2 | string | Il est possible de rattacher le spectacle à 3 axes analytiques. Ce paramètre définit le deuxième axe analytique |
| valeurAxeAnalytique2 | string | Indique à quelle valeur de l'axe analytique 2 est rattaché le spectacle |
| axeAnalytique3 | string | Indique à quelle valeur de l'axe analytique 3 est rattaché le spectacle |
| valeurAxeAnalytique3 | string | Il est possible de rattacher le spectacle à 3 axes analytiques. Ce paramètre définit le troisième axe analytique |
| referenceExterneSpectacle | string | Identifiant externe du spectacle trouvé |
| numeroObjet | string | Numéro objet du spectacle |
| intituleSpectacle | string | Intitulé du spectacle |
| dateDebut | string(date-time) | Date de début du spectacle |
| dateFin | string(date-time) | Date de fin du spectacle |

## Requête

```
{
  "dateDebutMin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "spectacles": [
    {
      "nomInterneEtablissement": "string",
      "axeAnalytique": "string",
      "valeurAxeAnalytique": "string",
      "axeAnalytique2": "string",
      "valeurAxeAnalytique2": "string",
      "axeAnalytique3": "string",
      "valeurAxeAnalytique3": "string",
      "referenceExterneSpectacle": "string",
      "numeroObjet": "string",
      "intituleSpectacle": "string",
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24"
    },
    {
      "nomInterneEtablissement": "string",
      "axeAnalytique": "string",
      "valeurAxeAnalytique": "string",
      "axeAnalytique2": "string",
      "valeurAxeAnalytique2": "string",
      "axeAnalytique3": "string",
      "valeurAxeAnalytique3": "string",
      "referenceExterneSpectacle": "string",
      "numeroObjet": "string",
      "intituleSpectacle": "string",
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
