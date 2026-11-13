---
title: "EcrituresComptables2"
slug: "ecriturescomptables2"
updated: 2025-01-06T11:13:34Z
published: 2025-01-06T11:13:34Z
canonical: "silae-api.document360.io/ecriturescomptables2"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EcrituresComptables2

## Fonction API

```
/v1/EcrituresComptables/EcrituresComptables2
```

## Verbe HTTP

Post

          

## Description

          

Identique au fonctionnement de la fonction [EcrituresComptables](https://silae-api.document360.io/api-rest/docs/ecriturescomptables) mais avec la possibilité de récupérer les libellés par défaut pour les lignes "normales". Ces libellés par défaut se paramètrent dans le paramétrage de la liaison comptables du dossier

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| avecLibelleParDefautDesEcritures | boolean | Permet de récupérer les libellés par défaut des écritures (**true**) ou pas (**false**) |
| periodeDebut | string(date-time) | Date de début de la période à prendre en compte pour les écritures comptables |
| periodeFin | string(date-time) | Date de fin de la période à prendre en compte pour les écritures comptables |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle sont remontées les écritures comptables |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle sont remontées les écritures comptables |
| ecritures | EcrituresComptablesLigne[] | Liste d'éléments structurés contenant les informations de chaque ligne d'écritures comptables (cf. détail ci-dessous) |

### EcrituresComptablesLigne

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date-time) | Période de paie à laquelle est rattachée la ligne d'écritures comptables |
| compte | string | Numéro du compte |
| libelle | string | Libellé de la ligne d'écriture pour une ligne "normales". Remplacé par la valeur/catégorie de l'axe analytique à laquelle est rattachée la ligne lorsqu'il s'agit d'une ligne liée à une répartition analytique |
| sens | string | Indique s'il s'agit d'un crédit (C) ou d'un débit (D). Sera vide s'il s'agit d'une ligne liée à la répartition analytique |
| indexRepartition | integer(int32) | Index de l'axe analytique s'il s'agit d'une ligne liée à la répartition analytique. Vaut 0 sinon |
| valeur | number(double) | Montant de la ligne |
| pctRepartition | number(double) | Pourcentage de la répartition affecté à la catégorie de l'axe analytique indiqué par l'index (IndexRepartition) dans le cas d'une ligne liée à la répartition analytique sinon la valeur est à 0 (zéro) |

## Requête

```
{
  "avecLibelleParDefautDesEcritures": true,
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "numeroDossier": "string",
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "ecritures": [
    {
      "periode": "2020-10-14T21:46:24",
      "compte": "string",
      "libelle": "string",
      "sens": "string",
      "indexRepartition": 0,
      "valeur": 10.5,
      "pctRepartition": 10.5
    },
    {
      "periode": "2020-10-14T21:46:24",
      "compte": "string",
      "libelle": "string",
      "sens": "string",
      "indexRepartition": 0,
      "valeur": 10.5,
      "pctRepartition": 10.5
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
