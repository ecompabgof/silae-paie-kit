---
title: "EcrituresComptablesPaiementAcomptes"
slug: "ecriturescomptablespaiementacomptes"
updated: 2025-03-18T04:36:53Z
published: 2025-03-18T04:36:53Z
canonical: "silae-api.document360.io/ecriturescomptablespaiementacomptes"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EcrituresComptablesPaiementAcomptes

## Fonction API

```
/v1/EcrituresComptables/EcrituresComptablesPaiementAcomptes
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les lignes d'écritures comptables relatives au paiement des acomptes (rupture par date d'acompte)

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
| ruptures | EcrituresComptablesRupture[] | Liste d'éléments structurés contenant les informations de chaque ensemble d'écritures comptables tels que paramétrés dans EcrituresComptablesRupture (cf. détail ci-dessous) |

### EcrituresComptablesRupture

| Paramètre | Type | Description |
| --- | --- | --- |
| libelle | string | Libellé du sous-ensemble |
| totalDebit | number(double) | Total débit (valeur absolue) |
| totalCredit | number(double) | Total crédit (valeur absolue) |
| ecritures | EcrituresComptablesLigneRupture[] | Liste d'éléments structurés contenant les informations de chaque ligne d'écritures comptables (cf. détail ci-dessous) |

### EcrituresComptablesLigneRupture

| Paramètre | Type | Description |
| --- | --- | --- |
| codeJournal | string | Code journal de l'écriture comptable |
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
  "ruptures": [
    {
      "libelle": "string",
      "totalDebit": 10.5,
      "totalCredit": 10.5,
      "ecritures": [
        {
          "codeJournal": "string",
          "periode": "2020-10-14T21:46:24",
          "compte": "string",
          "libelle": "string",
          "sens": "string",
          "indexRepartition": 0,
          "valeur": 10.5,
          "pctRepartition": 10.5
        },
        {
          "codeJournal": "string",
          "periode": "2020-10-14T21:46:24",
          "compte": "string",
          "libelle": "string",
          "sens": "string",
          "indexRepartition": 0,
          "valeur": 10.5,
          "pctRepartition": 10.5
        }
      ]
    },
    {
      "libelle": "string",
      "totalDebit": 10.5,
      "totalCredit": 10.5,
      "ecritures": [
        {
          "codeJournal": "string",
          "periode": "2020-10-14T21:46:24",
          "compte": "string",
          "libelle": "string",
          "sens": "string",
          "indexRepartition": 0,
          "valeur": 10.5,
          "pctRepartition": 10.5
        },
        {
          "codeJournal": "string",
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
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 11 | "Période de début non renseignée" | La date de début de période n'a pas été indiquée |
| 12 | "Période de début postérieure à la période de fin" | La date de fin de période est inférieure à la date de début de période |
