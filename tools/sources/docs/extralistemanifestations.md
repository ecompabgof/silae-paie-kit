---
title: "ExtraListeManifestations"
slug: "extralistemanifestations"
updated: 2024-08-22T14:20:39Z
published: 2024-08-22T14:20:39Z
canonical: "silae-api.document360.io/extralistemanifestations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ExtraListeManifestations

## Fonction API

```
/v1/ModuleCTCD/ExtraListeManifestations
```

## Verbe HTTP

Post

              

## Description

              

Permet de lister les manifestations d'un dossier à partir d'une date donnée

## Groupe de fonctions API

CTCD001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| categorie | string | Permet de déterminer sur quel module s'appuiera l'API pour la recherche de manifestations. Peut valoir "HCR" ou "CTCD" |
| dateDebutMin | string(date-time) | Les manifestations qui remonteront dans la réponse seront celles avec une date de début supérieure à la date renseignée dans ce paramètre |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| manifestations | ExtraManifestation[] | Liste d'éléments structurés contenant les informations des manifestations trouvées (cf. détail ci-dessous) |

### ExtraManifestation

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattachée la manifestation |
| axeAnalytique | string | Il est possible de rattacher la manifestation à 2 axes analytiques. Ce paramètre définit le premier axe analytique |
| valeurAxeAnalytique | string | Indique à quelle valeur de l'axe analytique 1 est rattachée la manifestation |
| axeAnalytique2 | string | Il est possible de rattacher la manifestation à 2 axes analytiques. Ce paramètre définit le premier axe analytique |
| valeurAxeAnalytique2 | string | Indique à quelle valeur de l'axe analytique 2 est rattachée la manifestation |
| referenceExterneManifestation | string | Identifiant externe de la manifestation trouvée |
| intituleManifestation | string | Nom de la manifestation |
| dateDebut | string(date) | Date de début de la manifestation |
| dateFin | string(date) | Date de fin de la manifestation |
| axeAnalytique3 | string | A compléter |
| valeurAxeAnalytique3 | string | A compléter |

## Requête

```
{
  "categorie": "string",
  "dateDebutMin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "manifestations": [
    {
      "nomInterneEtablissement": "string",
      "axeAnalytique": "string",
      "valeurAxeAnalytique": "string",
      "axeAnalytique2": "string",
      "valeurAxeAnalytique2": "string",
      "referenceExterneManifestation": "string",
      "intituleManifestation": "string",
      "dateDebut": "2020-10-14",
      "dateFin": "2020-10-14",
      "axeAnalytique3": "string",
      "valeurAxeAnalytique3": "string"
    },
    {
      "nomInterneEtablissement": "string",
      "axeAnalytique": "string",
      "valeurAxeAnalytique": "string",
      "axeAnalytique2": "string",
      "valeurAxeAnalytique2": "string",
      "referenceExterneManifestation": "string",
      "intituleManifestation": "string",
      "dateDebut": "2020-10-14",
      "dateFin": "2020-10-14",
      "axeAnalytique3": "string",
      "valeurAxeAnalytique3": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
