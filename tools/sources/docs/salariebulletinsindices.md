---
title: "SalarieBulletinsIndices"
slug: "salariebulletinsindices"
updated: 2025-09-30T06:08:04Z
published: 2025-09-30T06:08:04Z
canonical: "silae-api.document360.io/salariebulletinsindices"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieBulletinsIndices

## Fonction API

```
/v1/InfosBulletins/SalarieBulletinsIndices
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer l'indice et le libellé de chaque bulletin généré sur une période

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalariesBulletins | RequeteSalarieBulletinIndices | Élément structuré contenant les paramètres de la recherche du bulletin (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalarieBulletinIndices

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periodeDebut | string(date-time) | Date de début de la période sur laquelle rechercher des bulletins |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle rechercher des bulletins |
| bulletinsOriginauxSeulement | boolean | Permet d'indiquer si on recherche uniquement les bulletins orignaux (**true**) ou non (**false**) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| salariesBulletins | SalarieBulletinsIndicesResult[] | Liste d'éléments structurés contenant les informations des bulletins identifiés pour chaque période de paie (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié |

### SalarieBulletinsIndicesResult

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date-time) | Période à laquelle est rattaché le bulletin |
| indices | SalarieBulletinIndiceResult[] | Liste d'éléments structurés contenant les informations des bulletins identifiés pour chaque bulletin de paie (cf. détail ci-dessous) |

### SalarieBulletinIndiceResult

| Paramètre | Type | Description |
| --- | --- | --- |
| indicePeriode | integer(int32) | Indice du bulletin |
| bul_Com1 | string | Libellé du bulletin *Le bulletin de paie du mois ne possède pas de libellé contraire aux autres qui peuvent être présents: "PARTICIPATION ET INTERESSEMENT", "BULLETIN SUPPLEMENTAIRE"* |

## Requête

```
{
  "requeteSalariesBulletins": {
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "periodeDebut": "2020-10-14T21:46:24",
    "periodeFin": "2020-10-14T21:46:24",
    "bulletinsOriginauxSeulement": true
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "salariesBulletins": [
    {
      "periode": "2020-10-14T21:46:24",
      "indices": [
        {
          "indicePeriode": 0,
          "bul_Com1": "string"
        },
        {
          "indicePeriode": 0,
          "bul_Com1": "string"
        }
      ]
    },
    {
      "periode": "2020-10-14T21:46:24",
      "indices": [
        {
          "indicePeriode": 0,
          "bul_Com1": "string"
        },
        {
          "indicePeriode": 0,
          "bul_Com1": "string"
        }
      ]
    }
  ],
  "matriculeSalarie": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
