---
title: "SalarieBulletinLignesSelonFiltres"
slug: "salariebulletinlignesselonfiltres"
updated: 2025-11-24T16:54:36Z
published: 2025-11-25T08:00:14Z
canonical: "silae-api.document360.io/salariebulletinlignesselonfiltres"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieBulletinLignesSelonFiltres

## Fonction API

```
/v1/InfosBulletins/SalarieBulletinLignesSelonFiltres
```

## Verbe HTTP

Post

## Description

Permet de récupérer les informations des lignes (hors totaux) du bulletin d'un salarié de la même manière que la fonction [SalarieBulletinLignes](https://silae-api.document360.io/api-rest/docs/salariebulletinlignes), mais en appliquant des filtres. Pour les filtres sur les chaînes de caractères, le caractère % pourra être utilisé comme "joker" pour rechercher une suite de caractères plutôt qu'une chaîne complète. Exemples :

- CodeLibelle = "SS0%" renverra toutes les lignes dont le code libellé commence par "SS0"
- Libelle = "%heure%" renverra toutes les lignes dont le libellé contient "heure"

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalarieBulletinLignes | RequeteSalarieBulletinLignes | Élément structuré contenant les paramètres de la recherche du bulletin (cf. détail ci-dessous) |
| requeteSalarieBulletinLignesFiltres | RequeteSalarieBulletinLignesFiltres | Élément structuré contenant les filtres à appliquer sur les lignes du bulletin à remonter (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalarieBulletinLignes

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periode | string(date-time) | Période à laquelle est rattachée le bulletin recherché |
| indicePeriode | integer(int32) | Indice du bulletin (cf. fonction API [SalarieBulletinsIndices](https://silae-api.document360.io/api-rest/docs/salariebulletinsindices)) *Paramètre optionnel, par défaut le 1er bulletin généré* (indice = 0) |

### RequeteSalarieBulletinLignesFiltres

| Paramètre | Type | Description |
| --- | --- | --- |
| codeLibelle | string | Permet de filtrer sur le code libellé. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| libelle | string | Permet de filtrer sur le libellé. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| codeDucs | string | Permet de filtrer sur le code DUCS. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| zone | integer(int32) | Permet de ne remonter que les lignes appartenant à une zone du bulletin : \| Zone du bulletin \| Valeur correspondante \| \| --- \| --- \| \| Zone Salaire (Située entre le salaire de base et le salaire brut) \| 2 \| \| Zone cotisation (Située entre le salaire de brut et le total des retenues) \| 3 \| \| Zone Net à payer (Située entre le net imposable et le net à payer) \| 4 \| |
| Zone du bulletin | Valeur correspondante |
| Zone Salaire (Située entre le salaire de base et le salaire brut) | 2 |
| Zone cotisation (Située entre le salaire de brut et le total des retenues) | 3 |
| Zone Net à payer (Située entre le net imposable et le net à payer) | 4 |
| marqueInterne | string | Permet de filtrer sur la Marque interne. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| marque1 | string | Permet de filtrer sur la Marque 1. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| marque2 | string | Permet de filtrer sur la Marque 2. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| marqueDtDeb | string(date-time) | Permet de filtrer sur la Période debut. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| marqueDtFin | string(date-time) | Permet de filtrer sur la Période fin. Laisser vide pour qu'aucun filtre ne soit appliqué sur cette colonne |
| compte4 | string | Permet de filtrer sur les lignes rattachées aux comptes tiers en se basant sur le code du compte |
| compte6 | string | Permet de filtrer sur les lignes rattachées aux comptes de charges en se basant sur le code du compte |
| exclureLignesNeutres | boolean | Permet de remonter (**false**) ou non (**true**) les lignes qui sont grisées sur l'écran des bulletins |
| exclureLignesNonNeutres | boolean | Permet de remonter (**false**) ou non (**true**) les lignes qui ne sont pas grisées sur l'écran des bulletins |

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
  "requeteSalarieBulletinLignesFiltres": {
    "codeLibelle": "string",
    "libelle": "string",
    "codeDucs": "string",
    "zone": 0,
    "marqueInterne": "string",
    "marque1": "string",
    "marque2": "string",
    "marqueDtDeb": "2020-10-14T21:46:24",
    "marqueDtFin": "2020-10-14T21:46:24",
    "compte4": "string",
    "compte6": "string",
    "exclureLignesNeutres": true,
    "exclureLignesNonNeutres": true
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
