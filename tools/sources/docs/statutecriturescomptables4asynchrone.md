---
title: "StatutEcrituresComptables4Asynchrone"
slug: "statutecriturescomptables4asynchrone"
updated: 2025-04-29T08:42:00Z
published: 2025-04-29T08:42:00Z
canonical: "silae-api.document360.io/statutecriturescomptables4asynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutEcrituresComptables4Asynchrone

## Fonction API

```
/v1/EcrituresComptables/StatutEcrituresComptables4Asynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [EcrituresComptables4Asynchrone](https://silae-api.document360.io/api-rest/docs/ecriturescomptables4asynchrone)

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [EcrituresComptables4Asynchrone](https://silae-api.document360.io/api-rest/docs/ecriturescomptables4asynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| ecrituresComptables | EcrituresComptablesAvecRuptures | Liste d'éléments structurés contenant les informations de chaque ensemble d'écritures comptables tels que paramétrés dans la liaison comptable (cf. détail ci-dessous |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### EcrituresComptablesAvecRuptures

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle sont remontées les écritures comptables |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle sont remontées les écritures comptables |
| ruptures | EcrituresComptablesRupture[] | Liste d'éléments structurés contenant les informations de chaque ensemble d'écritures comptables tels que paramétrés dans la liaison comptable (cf. détail ci-dessous) |

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
  "guidTache": "string"
}
```

## Réponse

```
{
  "ecrituresComptables": {
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
  },
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
