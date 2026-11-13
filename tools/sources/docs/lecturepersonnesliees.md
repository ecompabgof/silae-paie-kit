---
title: "LecturePersonnesLiees"
slug: "lecturepersonnesliees"
updated: 2025-09-23T03:44:39Z
published: 2025-09-23T03:44:39Z
canonical: "silae-api.document360.io/lecturepersonnesliees"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LecturePersonnesLiees

## Fonction API

```
/v1/InfosSalaries/LecturePersonnesLiees
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations sur les personnes liées à un salarié (conjoint et autres personnes liées)

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matricule | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| conjoint | PersonneLiee | Élément structuré contenant les informations du conjoint (cf. détail ci-dessous) |
| personnesLiees | PersonneLiee[] | Liste d'éléments structurés contenant les informations des autres personnes liées au salarié (cf. détail ci-dessous) |

### PersonneLiee

| Paramètre | Type | Description |
| --- | --- | --- |
| prenom | string | Prénom |
| nomUsuel | string | Nom |
| typeLien | integer(int32) | Type de lien : \| Lien de parenté \| Valeur correspondante \| \| --- \| --- \| \| Enfant \| 10 \| \| Autre \| 0 \| |
| Lien de parenté | Valeur correspondante |
| Enfant | 10 |
| Autre | 0 |
| dateNaissance | string(date-time) | Date de naissance |
| numeroSS | string | Numéro de sécurité sociale |
| sexe | integer(int32) | \| Sexe de la personne \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Homme \| 10 \| \| Femme \| 20 \| |
| Sexe de la personne | Valeur correspondante |
| Vide | 0 |
| Homme | 10 |
| Femme | 20 |
| aCharge | boolean | Indique si c'est une personne à charge (**true**) ou (**false**) |
| dateDeces | string(date-time) | Date de décès *valeur =null signifie non renseignée* |
| handicape | boolean | Indique si c'est une personne handicapée (**true**) ou (**false**) |
| bDateDeces | boolean | Non exploitable avec cette fonction API cf. [ModificationPersonnesLiees](https://silae-api.document360.io/api-rest/docs/modificationpersonnesliees) |
| dateDebutRattachement | string(date-time) | Date de début de rattachement à l'ouvrant droit *valeur =null signifie non renseignée* |
| bDateDebutRattachement | boolean | Non exploitable avec cette fonction API cf. [ModificationPersonnesLiees](https://silae-api.document360.io/api-rest/docs/modificationpersonnesliees) |
| dateFinRattachement | string(date-time) | Date de fin de rattachement à l'ouvrant droit *valeur =null signifie non renseignée* |
| bDateFinRattachement | boolean | Non exploitable avec cette fonction API cf. [ModificationPersonnesLiees](https://silae-api.document360.io/api-rest/docs/modificationpersonnesliees) |
| codeOrganismeAM | string | Code organisme d'affiliation à l'assurance maladie |
| alsaceMoselle | boolean | Régime local Alsace Moselle |
| bCivilite | boolean | Non exploitable avec cette fonction API cf. [ModificationPersonnesLiees](https://silae-api.document360.io/api-rest/docs/modificationpersonnesliees) |
| civilite | integer(int32) | \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |

## Requête

```
{
  "matricule": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "conjoint": {
    "prenom": "string",
    "nomUsuel": "string",
    "typeLien": 0,
    "dateNaissance": "2020-10-14T21:46:24",
    "numeroSS": "string",
    "sexe": 0,
    "aCharge": true,
    "dateDeces": "2020-10-14T21:46:24",
    "handicape": true,
    "bDateDeces": true,
    "dateDebutRattachement": "2020-10-14T21:46:24",
    "bDateDebutRattachement": true,
    "dateFinRattachement": "2020-10-14T21:46:24",
    "bDateFinRattachement": true,
    "codeOrganismeAM": "string",
    "alsaceMoselle": true,
    "bCivilite": true,
    "civilite": 0
  },
  "personnesLiees": [
    {
      "prenom": "string",
      "nomUsuel": "string",
      "typeLien": 0,
      "dateNaissance": "2020-10-14T21:46:24",
      "numeroSS": "string",
      "sexe": 0,
      "aCharge": true,
      "dateDeces": "2020-10-14T21:46:24",
      "handicape": true,
      "bDateDeces": true,
      "dateDebutRattachement": "2020-10-14T21:46:24",
      "bDateDebutRattachement": true,
      "dateFinRattachement": "2020-10-14T21:46:24",
      "bDateFinRattachement": true,
      "codeOrganismeAM": "string",
      "alsaceMoselle": true,
      "bCivilite": true,
      "civilite": 0
    },
    {
      "prenom": "string",
      "nomUsuel": "string",
      "typeLien": 0,
      "dateNaissance": "2020-10-14T21:46:24",
      "numeroSS": "string",
      "sexe": 0,
      "aCharge": true,
      "dateDeces": "2020-10-14T21:46:24",
      "handicape": true,
      "bDateDeces": true,
      "dateDebutRattachement": "2020-10-14T21:46:24",
      "bDateDebutRattachement": true,
      "dateFinRattachement": "2020-10-14T21:46:24",
      "bDateFinRattachement": true,
      "codeOrganismeAM": "string",
      "alsaceMoselle": true,
      "bCivilite": true,
      "civilite": 0
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
