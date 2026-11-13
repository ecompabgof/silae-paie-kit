---
title: "ExtraSalarieAcquisitionVacations"
slug: "extrasalarieacquisitionvacations"
updated: 2025-12-08T14:35:06Z
published: 2025-12-08T14:35:06Z
canonical: "silae-api.document360.io/extrasalarieacquisitionvacations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ExtraSalarieAcquisitionVacations

## Fonction API

```
/v1/ModuleCTCD/ExtraSalarieAcquisitionVacations
```

## Verbe HTTP

Post

## Description

Permet de lister les vacations d'un salarié en fonction de critères

---

**Point d'attention**

Cette fonction API permet de récupérer, pour la période choisie et selon l’état du bulletin, toutes les vacations dont la classification métier et l’intitulé de l’emploi correspondent à l’identifiant emploi indiqué dans les paramètres de la requête.

## Groupe de fonctions API

CTCD001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| categorie | string | Permet de déterminer sur quel module s'appuiera l'API pour la recherche de vacations. Peut valoir "HCR" ou "CTCD" |
| requeteExtraSalarieVacations | RequeteExtraSalarieVacationsV2 | Élément structuré contenant les critères de recherche des vacations du salarié (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteExtraSalarieVacationsV2

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| verifierDisponibiliteEmploi | boolean | Pas utilisé |
| periode | string(date-time) | Permet de définir la période pour laquelle rechercher les vacations |
| nomInterneEtablissement | string | Permet de définir le nom de l'établissement interne pour lequel rechercher les vacations |
| vacationBulletin | integer(int32) | Permet de sélectionner les vacations avec et sans bulletin calculé : - 0 : Vacations sans bulletin calculé (valeur par défaut) - 1 : Vacations avec bulletin calculé - 2 : Vacations avec et sans bulletin calculé |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| identifiantEmploi | integer(int32) | Indentifiant de l'emploi auquel sont rattachées les vacations trouvées |
| periode | string(date) | Période de paie à laquelle sont rattachées les vacations |
| nomInterneEtablissement | string | Nom de l'établissement interne auquel sont rattachées les vacations |
| vacations | ExtraSalarieVacation[] | Liste d'éléments structurés contenant les informations des vacations trouvées (cf. détail ci-dessous) |

### ExtraSalarieVacation

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date) | Date de début de la vacation |
| dateFin | string(date) | Date de fin de la vacation |
| referenceExterneManifestation | string | Référence externe de la manifestation à laquelle est rattachée la vacation, utilisée pour l'exploitation des manifestations via les APIs |
| hEmbauche | integer(int32) | Heure d'embauche |
| mEmbauche | integer(int32) | Minute d'embauche |
| docsFinContrat | boolean | Indique si les documents de fin de contrat doivent être générés avec le bulletin (**true**) ou pas (**false**) |
| tauxHoraire | number(double) | Taux horaire de la vacation |
| nbH | number(double) | Nombre d'heures |
| montantNet | boolean | Indique si le montant calculé est en net (**true**) ou pas (**false**) |
| montantCoutGlobal | boolean | Indique si le montant calculé correspond à un coût global (**true**) ou pas (**false**) |
| nbJours | number(double) | Nombre de jours qu'a duré la vacation |
| hLibresCodes | string[] | Code de l'heure libre pour laquelle renseigner une valeur |
| hLibresValeurs | number[] | Valeur de l'heure libre à renseigner, correspondant au code renseigner dans le tableau **HLibresCodes**, avec le même indice |
| variablesCodes | string[] | Code de l'élément variable pour lequel renseigner une valeur |
| variablesValeurs | number[] | Valeur de l'élément variable à renseigner, correspondant au code renseigner dans le tableau **VariablesCodes**, avec le même indice |
| valeurAxeAnalytique1 | string | Valeur de l'axe analytique 1 affecté au salarié sur cette vacation |
| valeurAxeAnalytique2 | string | Valeur de l'axe analytique 2 affecté au salarié sur cette vacation |
| valeurAxeAnalytique3 | string | Valeur de l'axe analytique 3 affecté au salarié sur cette vacation |

## Requête

```
{
  "categorie": "string",
  "requeteExtraSalarieVacations": {
    "vacationBulletin": 0,
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "verifierDisponibiliteEmploi": true,
    "periode": "2020-10-14T21:46:24",
    "nomInterneEtablissement": "string"
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
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
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
