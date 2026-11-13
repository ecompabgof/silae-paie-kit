---
title: "SalarieBulletinDetails"
slug: "salariebulletindetails"
updated: 2025-11-24T16:53:05Z
published: 2025-11-25T08:00:14Z
canonical: "silae-api.document360.io/salariebulletindetails"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieBulletinDetails

## Fonction API

```
/v1/InfosBulletins/SalarieBulletinDetails
```

## Verbe HTTP

Post

## Description

Permet de récupérer les informations des entêtes de bulletin comme c'est le cas dans la fonction [SalarieBulletinEntete](https://silae-api.document360.io/api-rest/docs/salariebulletinentete) et/ou les informations des lignes de bulletins, en utilisant des filtres comme c'est le cas dans la fonction [SalarieBulletinLignesSelonFiltres](https://silae-api.document360.io/api-rest/docs/salariebulletinlignesselonfiltres). Le choix du type de retour se fait avec le paramètre TypeDetails. Les résultats sont présentés sous forme de tableau, en cas de bulletins multiples

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalarieBulletinDetails | RequeteSalarieBulletinDetails | Élément structuré contenant les paramètres de la recherche du bulletin et le type de détails souhaité (cf. détail ci-dessous) |
| requeteSalarieBulletinFiltres | RequeteSalarieBulletinLignesFiltres | Élément structuré contenant les filtres à appliquer sur les lignes du ou des bulletins à remonter (cf. détail ci-dessous). Ce paramètre est facultatif, s'il n'est pas renseigné aucun filtre n'est appliqué et toutes les lignes sont remontées |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalarieBulletinDetails

| Paramètre | Type | Description |
| --- | --- | --- |
| typeDetails | integer(int32) | Type de détail : \| Type de détail voulu \| Valeur correspondante \| \| --- \| --- \| \| Entête seulement \| 1 \| \| Lignes seulement \| 2 \| \| Entête et Lignes \| 3 \| |
| Type de détail voulu | Valeur correspondante |
| Entête seulement | 1 |
| Lignes seulement | 2 |
| Entête et Lignes | 3 |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periode | string(date-time) | Période pour laquelle rechercher les bulletins |
| indicePeriode | integer(int32) | Indice du bulletin (cf. [SalarieBulletinsIndices](https://silae-api.document360.io/api-rest/docs/salariebulletinsindices)) *Paramètre optionnel, par défaut le 1er bulletin généré* |

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
| codeContratTravail | string | Code contrat de travail : \| Contrat de travail \| Valeur correspondante \| \| --- \| --- \| \| Contrat à durée indéterminée \| 01 \| \| Contrat à durée déterminée \| 02 \| \| Contrat de travail temporaire (mission) \| 03 \| \| Contrat d'apprentissage entreprises artisanales ou de moins de 11 salariés (loi de 1979) \| 04 \| \| Contrat d'apprentissage entreprises non artisanales d'au moins 11 salariés (loi de 1987) \| 05 \| \| Contrat à durée indéterminée intérimaire \| 09 \| \| Contrat à durée déterminée de droit public \| 10 \| \| Contrat à durée indéterminée de droit public \| 11 \| \| CUI-Contrat d'Accompagnement dans l'Emploi (CDD) \| 25 \| \| CUI-Contrat d'Accompagnement dans l'Emploi (CDI) \| 26 \| \| Contrat à durée déterminée à objet défini \| 27 \| \| Contrat à durée déterminée pour les seniors \| 28 \| \| Convention de stage \| 29 \| \| Convention volontaire associatif \| 30 \| \| Contrat de tuteur de cessionnaire d'entreprise \| 31 \| \| Contrat d'appui à la création d'entreprise \| 32 \| \| Convention de stage 6 mois (agriculture) \| 33 \| \| Convention relative à la mise en œuvre d'une Période de Mise en Situation en Milieu Professionnel \| 34 \| \| Nomination dans la fonction publique \| 50 \| \| Contrat d'engagement détenu \| 53 \| \| Bénéficiaire d'une rémunération versée par un tiers \| 66 \| \| Mandat d'élu \| 81 \| \| Engagement de service civique (moins de 26 mois) \| 88 \| \| Volontariat de service civique \| 89 \| \| Sans contrat de travail ou conventionnement \| 90 \| \| Contrat d'Insertion dans la Vie Sociale (CIVIS) \| 91 \| \| Convention avec association d'étudiants à caractère pédagogique \| 92 \| \| Bénéficiaire de revenus de remplacement (RG) \| 93 \| \| Bénéficiaire de revenus de remplacement (RS) \| 94 \| |
| Contrat de travail | Valeur correspondante |
| Contrat à durée indéterminée | 01 |
| Contrat à durée déterminée | 02 |
| Contrat de travail temporaire (mission) | 03 |
| Contrat d'apprentissage entreprises artisanales ou de moins de 11 salariés (loi de 1979) | 04 |
| Contrat d'apprentissage entreprises non artisanales d'au moins 11 salariés (loi de 1987) | 05 |
| Contrat à durée indéterminée intérimaire | 09 |
| Contrat à durée déterminée de droit public | 10 |
| Contrat à durée indéterminée de droit public | 11 |
| CUI-Contrat d'Accompagnement dans l'Emploi (CDD) | 25 |
| CUI-Contrat d'Accompagnement dans l'Emploi (CDI) | 26 |
| Contrat à durée déterminée à objet défini | 27 |
| Contrat à durée déterminée pour les seniors | 28 |
| Convention de stage | 29 |
| Convention volontaire associatif | 30 |
| Contrat de tuteur de cessionnaire d'entreprise | 31 |
| Contrat d'appui à la création d'entreprise | 32 |
| Convention de stage 6 mois (agriculture) | 33 |
| Convention relative à la mise en œuvre d'une Période de Mise en Situation en Milieu Professionnel | 34 |
| Nomination dans la fonction publique | 50 |
| Contrat d'engagement détenu | 53 |
| Bénéficiaire d'une rémunération versée par un tiers | 66 |
| Mandat d'élu | 81 |
| Engagement de service civique (moins de 26 mois) | 88 |
| Volontariat de service civique | 89 |
| Sans contrat de travail ou conventionnement | 90 |
| Contrat d'Insertion dans la Vie Sociale (CIVIS) | 91 |
| Convention avec association d'étudiants à caractère pédagogique | 92 |
| Bénéficiaire de revenus de remplacement (RG) | 93 |
| Bénéficiaire de revenus de remplacement (RS) | 94 |
| bulletins | SalarieBulletinResult[] | Liste d'éléments structurés contenant les informations des différents bulletins pour le salarié demandé et la période demandée (cf. Détail ci-dessous) |

### SalarieBulletinResult

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantBulletin | integer(int32) | Identifiant interne du bulletin |
| entete | SalarieBulletinEnteteSimpleResult | Élément structuré contenant les informations d'entête du bulletin (cf. détail ci-dessous) |
| lignesBulletin | LigneBulletin[] | Liste d'éléments structurés contenant les informations des lignes du bulletin (cf. détail ci-dessous) |

### SalarieBulletinEnteteSimpleResult

| Paramètre | Type | Description |
| --- | --- | --- |
| bulletinOriginal | boolean | Indique s'il s'agit d'un bulletin original (**true**) ou non (**fasle**) |
| brut | number(double) | Montant du salaire Brut (et pas le salaire de base) |
| netAPayer | number(double) | Net à payer |
| cumulRetenuesSD | number(double) | Total des retenues déductibles |
| cumulRetenuesSND | number(double) | Total des retenues non déductibles |
| cumulRetenuesP | number(double) | Total des retenues patronales |
| supplementCoutGlobal | number(double) | Supplément du coût global, calculé à partir de la différence entre le coût total et le coût global |
| netImposable | number(double) | Net imposable |
| heuresNormales | number(double) | Heures normales |
| heuresMajorees | number(double) | Heures majorées |

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
  "requeteSalarieBulletinDetails": {
    "typeDetails": 0,
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "periode": "2020-10-14T21:46:24",
    "indicePeriode": 0
  },
  "requeteSalarieBulletinFiltres": {
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
  "codeContratTravail": "string",
  "bulletins": [
    {
      "identifiantBulletin": 0,
      "entete": {
        "bulletinOriginal": true,
        "brut": 10.5,
        "netAPayer": 10.5,
        "cumulRetenuesSD": 10.5,
        "cumulRetenuesSND": 10.5,
        "cumulRetenuesP": 10.5,
        "supplementCoutGlobal": 10.5,
        "netImposable": 10.5,
        "heuresNormales": 10.5,
        "heuresMajorees": 10.5
      },
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
    },
    {
      "identifiantBulletin": 0,
      "entete": {
        "bulletinOriginal": true,
        "brut": 10.5,
        "netAPayer": 10.5,
        "cumulRetenuesSD": 10.5,
        "cumulRetenuesSND": 10.5,
        "cumulRetenuesP": 10.5,
        "supplementCoutGlobal": 10.5,
        "netImposable": 10.5,
        "heuresNormales": 10.5,
        "heuresMajorees": 10.5
      },
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
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Aucun bulletin ne correspond à l'emploi X et/ou à l'indice Y pour la période MM/AAAA" | Aucun bulletin trouvé pour l'emploi X demandé et/ou l'indice période Y indiqué sur la période renseignée |
