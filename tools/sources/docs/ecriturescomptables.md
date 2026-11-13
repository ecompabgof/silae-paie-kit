---
title: "EcrituresComptables"
slug: "ecriturescomptables"
updated: 2024-09-20T10:22:37Z
published: 2024-09-20T10:22:37Z
canonical: "silae-api.document360.io/ecriturescomptables"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EcrituresComptables

## Fonction API

```
/v1/EcrituresComptables/EcrituresComptables
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les lignes d'écritures comptables Les lignes remontées ont les mêmes paramètres mais qui peuvent avoir une valeur/signification différente s'il s'agit d'une ligne "normale" ou s'il s'agit d'une ligne liée à une répartition analytique. Ces lignes de répartition analytique sont précédées de lignes "normales" qui correspondent au total. Ces lignes ne sont présentes que si la répartition analytique en pourcentage est correctement configurée dans le dossier pour apparaître dans les écritures comptables. À noter que seul un seul axe de répartition analytique sera remonté via cette fonction API. Pour pouvoir remonter les lignes de plusieurs axes analytiques, il est nécessaire de faire appel à la fonction : [EcrituresComptables3](https://silae-api.document360.io/api-rest/docs/ecriturescomptables3)

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
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
| pctRepartition | number(double) | Pourcentage de la répartition affecté à la catégorie de l'axe analytique indiqué par l'index (**IndexRepartition**), dans le cas d'une ligne liée à la répartition analytique. Vaut 0 sinon |

## Requête

```
{
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
