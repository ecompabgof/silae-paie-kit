---
title: "SalarieBulletinLignes"
slug: "salariebulletinlignes"
updated: 2025-11-24T16:54:20Z
published: 2025-11-25T08:00:14Z
canonical: "silae-api.document360.io/salariebulletinlignes"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieBulletinLignes

## Fonction API

```
/v1/InfosBulletins/SalarieBulletinLignes
```

## Verbe HTTP

Post

## Description

Permet de récupérer les informations de toutes les lignes (hors totaux) du bulletin d'un salarié, telles qu'elle apparaissent dans l'écran d'affichage du bulletin dans Silae

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalarieBulletinLignes | RequeteSalarieBulletinLignes | Élément structuré contenant les paramètres de la recherche du bulletin (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalarieBulletinLignes

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periode | string(date-time) | Période à laquelle est rattachée le bulletin recherché |
| indicePeriode | integer(int32) | Indice du bulletin (cf. fonction API [SalarieBulletinsIndices](https://silae-api.document360.io/api-rest/docs/salariebulletinsindices)) *Paramètre optionnel, par défaut le 1er bulletin généré (indice = 0)* |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periode | string(date-time) | Période à laquelle est rattaché le bulletin |
| intituleEmploi | string | Intitulé de l'emploi |
| lignesBulletin | LigneBulletin[] | Liste d'éléments structurés contenant les informations de chaque ligne du bulletin (cf. détail ci-dessous) |

### LigneBulletin

| Paramètre | Type | Description |
| --- | --- | --- |
| codeLibelle | string | Code Libellé |
| libelle | string | Libellé |
| baseSalariale | number(double) | Base salariale |
| tauxOuMontantSalarial | number(double) | Taux/montant salarial |
| resultatSalarial | number(double) | Résultat salarial |
| basePatronale | number(double) | Base patronale |
| tauxOuMontantPatronal | number(double) | Taux/montant patronal |
| resultatPatronal | number(double) | Résultat patronal |
| codeDucs | string | Code DUCS |
| csg | number(double) | Valeur CSG |
| taxe8pc | number(double) | Valeur taxe 8% |
| rs | number(double) | Valeur R.S |
| rf | number(double) | Valeur R.F |
| fs | number(double) | Valeur F.S |
| tauxReference | string | Code Taux de référence |
| marqueCodeCCN | string | Marque code CCN |
| marque1 | string | Marque 1 |
| marque2 | string | Marque 2 |
| periodeDebut | string(date-time) | Période début |
| periodeFin | string(date-time) | Période fin |

## Requête

```
{
  "requeteSalarieBulletinLignes": {
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "periode": "2020-10-14T21:46:24",
    "indicePeriode": 0
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "matriculeSalarie": "string",
  "identifiantEmploi": 0,
  "periode": "2020-10-14T21:46:24",
  "intituleEmploi": "string",
  "lignesBulletin": [
    {
      "codeLibelle": "string",
      "libelle": "string",
      "baseSalariale": 10.5,
      "tauxOuMontantSalarial": 10.5,
      "resultatSalarial": 10.5,
      "basePatronale": 10.5,
      "tauxOuMontantPatronal": 10.5,
      "resultatPatronal": 10.5,
      "codeDucs": "string",
      "csg": 10.5,
      "taxe8pc": 10.5,
      "rs": 10.5,
      "rf": 10.5,
      "fs": 10.5,
      "tauxReference": "string",
      "marqueCodeCCN": "string",
      "marque1": "string",
      "marque2": "string",
      "periodeDebut": "2020-10-14T21:46:24",
      "periodeFin": "2020-10-14T21:46:24"
    },
    {
      "codeLibelle": "string",
      "libelle": "string",
      "baseSalariale": 10.5,
      "tauxOuMontantSalarial": 10.5,
      "resultatSalarial": 10.5,
      "basePatronale": 10.5,
      "tauxOuMontantPatronal": 10.5,
      "resultatPatronal": 10.5,
      "codeDucs": "string",
      "csg": 10.5,
      "taxe8pc": 10.5,
      "rs": 10.5,
      "rf": 10.5,
      "fs": 10.5,
      "tauxReference": "string",
      "marqueCodeCCN": "string",
      "marque1": "string",
      "marque2": "string",
      "periodeDebut": "2020-10-14T21:46:24",
      "periodeFin": "2020-10-14T21:46:24"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Aucun bulletin ne correspond à l'emploi X et/ou à l'indice Y pour la période MM/AAAA" | Aucun bulletin trouvé pour l'emploi X demandé et/ou l'indice période Y indiqué sur la période renseignée |
