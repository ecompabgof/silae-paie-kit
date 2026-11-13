---
title: "SalarieBulletinEntete"
slug: "salariebulletinentete"
updated: 2025-11-24T16:53:57Z
published: 2025-11-25T08:00:14Z
canonical: "silae-api.document360.io/salariebulletinentete"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieBulletinEntete

## Fonction API

```
/v1/InfosBulletins/SalarieBulletinEntete
```

## Verbe HTTP

Post

## Description

Permet de récupérer des informations générales sur le bulletin d'un salarié

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalarieBulletinEntete | RequeteSalarieBulletinEntete | Élément structuré contenant les paramètres de la recherche des bulletins (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalarieBulletinEntete

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periode | string(date-time) | Période de paie pour laquelle remonter les informations |
| indicePeriode | integer(int32) | Indice du bulletin (cf. fonction API [SalarieBulletinsIndices](https://silae-api.document360.io/api-rest/docs/salariebulletinsindices)) *Paramètre optionnel, par défaut le 1er bulletin généré (indice = 0)* |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi |
| bulletinOriginal | boolean | Indique s'il s'agit d'un bulletin original (**true**) ou non (**fasle**) |
| periode | string(date-time) | Période de paie à laquelle est rattachée le bulletin |
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
| brut | number(double) | Montant du salaire Brut (et pas le salaire de base) |
| netAPayer | number(double) | Net à payer |
| cumulRetenuesSD | number(double) | Total des retenues déductibles |
| cumulRetenuesSND | number(double) | Total des retenues non déductibles |
| cumulRetenuesP | number(double) | Total des retenues patronales |
| supplementCoutGlobal | number(double) | Supplément du coût global, calculé à partir de la différence entre le coût total et le coût global |
| netImposable | number(double) | Net imposable |
| heuresNormales | number(double) | Heures normales |
| heuresMajorees | number(double) | Heures majorées |
| indicePeriode | integer(int32) | Indice du bulletin |

## Requête

```
{
  "requeteSalarieBulletinEntete": {
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
  "bulletinOriginal": true,
  "periode": "2020-10-14T21:46:24",
  "intituleEmploi": "string",
  "codeContratTravail": "string",
  "brut": 10.5,
  "netAPayer": 10.5,
  "cumulRetenuesSD": 10.5,
  "cumulRetenuesSND": 10.5,
  "cumulRetenuesP": 10.5,
  "supplementCoutGlobal": 10.5,
  "netImposable": 10.5,
  "heuresNormales": 10.5,
  "heuresMajorees": 10.5,
  "indicePeriode": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Aucun bulletin ne correspond à l'emploi X et/ou à l'indice Y pour la période MM/AAAA" | Aucun bulletin trouvé pour l'emploi X demandé et/ou l'indice période Y indiqué sur la période renseignée |
