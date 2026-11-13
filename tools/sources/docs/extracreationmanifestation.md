---
title: "ExtraCreationManifestation"
slug: "extracreationmanifestation"
updated: 2024-08-22T14:20:49Z
published: 2024-08-22T14:20:49Z
canonical: "silae-api.document360.io/extracreationmanifestation"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ExtraCreationManifestation

## Fonction API

```
/v1/ModuleCTCD/ExtraCreationManifestation
```

## Verbe HTTP

Post

              

## Description

              

Permet de créer / modifier une manifestation

## Groupe de fonctions API

CTCD001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| categorie | string | Permet de déterminer sur quel module s'appuiera l'API pour la création/modification de la manifestation. Peut valoir "HCR" ou "CTCD" |
| structManifestation | ExtraManifestation | Élément structuré contenant les informations de la manifestation (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ExtraManifestation

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattachée la manifestation |
| axeAnalytique | string | Il est possible de rattacher la manifestation à 2 axes analytiques. Ce paramètre définit le premier axe analytique |
| valeurAxeAnalytique | string | Définit à quelle valeur de l'axe analytique 1 sera rattachée la manifestation |
| axeAnalytique2 | string | Ce paramètre définit le second axe analytique |
| valeurAxeAnalytique2 | string | Définit à quelle valeur de l'axe analytique 2 sera rattachée la manifestation |
| referenceExterneManifestation | string | Identifiant de manifestation qui pourra être réutilisé par les autres fonctions API liées à la gestion des manifestations |
| intituleManifestation | string | Nom de la manifestation |
| dateDebut | string(date) | Date de début de la manifestation. ***La date doit respecter ce format : AAAA-MM-JJ*** |
| dateFin | string(date) | Date de fin de la manifestation. ***La date doit respecter ce format : AAAA-MM-JJ*** |
| axeAnalytique3 | string | A compléter |
| valeurAxeAnalytique3 | string | Définit à quelle valeur de l'axe analytique 3 sera rattachée la manifestation |

## Requête

```
{
  "categorie": "string",
  "structManifestation": {
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
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
