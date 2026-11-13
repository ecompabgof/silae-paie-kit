---
title: "ModificationPersonnesLiees"
slug: "modificationpersonnesliees"
updated: 2025-09-23T03:45:08Z
published: 2025-09-23T03:45:08Z
canonical: "silae-api.document360.io/modificationpersonnesliees"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationPersonnesLiees

## Fonction API

```
/v1/SalarieEmplois/ModificationPersonnesLiees
```

## Verbe HTTP

Post

          

## Description

          

Permet d'ajouter, modifier ou supprimer les informations sur les personnes liées

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| conjoint | PersonneLieeV2 | Élément structuré contenant les informations du conjoint (cf. détail ci-dessous) |
| personnesLiees | PersonneLieeV2[] | Liste d'éléments structurés contenant les informations des autres personnes liées au salarié (cf. détail ci-dessous) |
| matricule | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### PersonneLieeV2

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
| dateDeces | string(date-time) | Date de décès |
| handicape | boolean | Indique si c'est une personne handicapée (**true**) ou (**false**) |
| bDateDeces | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DateDeces** (**true**) ou pas (**false**) |
| dateDebutRattachement | string(date-time) | Date de début de rattachement à l'ouvrant droit |
| bDateDebutRattachement | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DateDebutRattachement** (**true**) ou pas (**false**) |
| dateFinRattachement | string(date-time) | Date de fin de rattachement à l'ouvrant droit |
| bDateFinRattachement | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DateFinRattachement** (**true**) ou pas (**false**) |
| codeOrganismeAM | string | Code organisme d'affiliation à l'assurance maladie |
| alsaceMoselle | boolean | Régime local Alsace Moselle |
| bCivilite | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Civilite** (**true**) ou pas (**false**) |
| civilite | integer(int32) | \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |

## Requête

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
  ],
  "matricule": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
