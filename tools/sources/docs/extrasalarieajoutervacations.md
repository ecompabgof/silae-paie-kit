---
title: "ExtraSalarieAjouterVacations"
slug: "extrasalarieajoutervacations"
updated: 2024-07-09T07:16:37Z
published: 2024-07-09T07:16:37Z
canonical: "silae-api.document360.io/extrasalarieajoutervacations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ExtraSalarieAjouterVacations

## Fonction API

```
/v1/ModuleCTCD/ExtraSalarieAjouterVacations
```

## Verbe HTTP

Post

          

## Description

          

Permet de créer des vacations et les rattacher à des manifestations. Si la référence externe d'une manifestation n'existe pas, alors une manifestation est créée automatiquement avec ces informations.

## Groupe de fonctions API

CTCD001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| categorie | string | Permet de déterminer sur quel module s'appuiera l'API pour la création/modification de vacations. Peut valoir "HCR" ou "CTCD" |
| extraSalarieVacations | ExtraSalarieVacations | Élément structuré contenant les informations des vacations à créer/modifier (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ExtraSalarieVacations

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periode | string(date) | Permet de définir la période pour laquelle créer les vacations. ***La date doit respectée ce format : AAAA-MM-JJ*** |
| nomInterneEtablissement | string | Permet de définir le nom interne de l'établissement auquel rattacher les vacations |
| vacations | ExtraSalarieVacation[] | Liste d'éléments structurés contenant les informations des vacations à créer/modifier (cf. détail ci-dessous) |

### ExtraSalarieVacation

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date) | Date de début de la vacation. ***La date doit respectée ce format : AAAA-MM-JJ*** |
| dateFin | string(date) | Date de fin de la vacation. ***La date doit respectée ce format : AAAA-MM-JJ*** |
| referenceExterneManifestation | string | Référence externe de la manifestation à laquelle doit être rattachée la vacation |
| hEmbauche | integer(int32) | Heure d'embauche |
| mEmbauche | integer(int32) | Minute d'embauche |
| docsFinContrat | boolean | Permet de définir si les documents de fin de contrat doivent être générés avec le bulletin (**true**) ou pas (**false**) |
| tauxHoraire | number(double) | Taux horaire de la vacation |
| nbH | number(double) | Nombre d'heures |
| montantNet | boolean | Permet de définir si le montant doit être calculé en net (**true**) ou pas (**false**) |
| montantCoutGlobal | boolean | Permet de définir si le montant calculé doit correspondre au coût global (**true**) ou pas (**false**) |
| nbJours | number(double) | Nombre de jours qu'a duré la vacation |
| hLibresCodes | string[] | Code de l'heure libre pour laquelle renseigner une valeur |
| hLibresValeurs | number[] | Valeur de l'heure libre à renseigner, correspondant au code renseigner dans le tableau **HLibresCodes**, avec le même indice |
| variablesCodes | string[] | Code de l'élément variable pour lequel renseigner une valeur |
| variablesValeurs | number[] | Valeur de l'élément variable à renseigner, correspondant au code renseigner dans le tableau **VariablesCodes**, avec le même indice |
| valeurAxeAnalytique1 | string | Valeur de l'axe analytique 1 affectée au salarié sur cette vacation, si les axes analytiques sont paramétrés sur ce dossier |
| valeurAxeAnalytique2 | string | Valeur de l'axe analytique 2 affectée au salarié sur cette vacation, si les axes analytiques sont paramétrés sur ce dossier |
| valeurAxeAnalytique3 | string | Valeur de l'axe analytique 3 affectée au salarié sur cette vacation, si les axes analytiques sont paramétrés sur ce dossier |

## Requête

```
{
  "categorie": "string",
  "extraSalarieVacations": {
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "periode": "2020-10-14",
    "nomInterneEtablissement": "string",
    "vacations": [
      {
        "dateDebut": "2020-10-14",
        "dateFin": "2020-10-14",
        "referenceExterneManifestation": "string",
        "hEmbauche": 0,
        "mEmbauche": 0,
        "docsFinContrat": true,
        "tauxHoraire": 10.5,
        "nbH": 10.5,
        "montantNet": true,
        "montantCoutGlobal": true,
        "nbJours": 10.5,
        "hLibresCodes": [
          "string",
          "string"
        ],
        "hLibresValeurs": [
          10.5,
          10.5
        ],
        "variablesCodes": [
          "string",
          "string"
        ],
        "variablesValeurs": [
          10.5,
          10.5
        ],
        "valeurAxeAnalytique1": "string",
        "valeurAxeAnalytique2": "string",
        "valeurAxeAnalytique3": "string"
      },
      {
        "dateDebut": "2020-10-14",
        "dateFin": "2020-10-14",
        "referenceExterneManifestation": "string",
        "hEmbauche": 0,
        "mEmbauche": 0,
        "docsFinContrat": true,
        "tauxHoraire": 10.5,
        "nbH": 10.5,
        "montantNet": true,
        "montantCoutGlobal": true,
        "nbJours": 10.5,
        "hLibresCodes": [
          "string",
          "string"
        ],
        "hLibresValeurs": [
          10.5,
          10.5
        ],
        "variablesCodes": [
          "string",
          "string"
        ],
        "variablesValeurs": [
          10.5,
          10.5
        ],
        "valeurAxeAnalytique1": "string",
        "valeurAxeAnalytique2": "string",
        "valeurAxeAnalytique3": "string"
      }
    ]
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
