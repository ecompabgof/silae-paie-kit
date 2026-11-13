---
title: "SpectacleSalarieAcquisitionAffectations"
slug: "spectaclesalarieacquisitionaffectations"
updated: 2026-01-14T15:34:10Z
published: 2026-01-14T15:34:10Z
canonical: "silae-api.document360.io/spectaclesalarieacquisitionaffectations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SpectacleSalarieAcquisitionAffectations

## Fonction API

```
/v1/ModuleSpectacle/SpectacleSalarieAcquisitionAffectations
```

## Verbe HTTP

Post

## Description

Permet de lister les affectations d'un salarié à des spectacles en fonction de critères.

---

**Points d'attention**

- Cette fonction API permet de récupérer, pour la période choisie et selon l’état du bulletin, toutes les affectations dont la ***classification métier*** et l’***intitulé de l’emploi*** correspondent à l’identifiant emploi indiqué dans les paramètres de la requête.
- Le détail sur le fonctionnement des paramètres **AEMInitiale** et **AEMComplementaire** se trouve dans la fiche [SpectacleSalarieAjouterAffectations](https://silae-api.document360.io/api-rest/docs/spectaclesalarieajouteraffectations)

## Groupe de fonctions API

SPECT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSpectacleSalarieAffectations | RequeteSpectacleSalarieAffectationsV2 | Élément structuré contenant les critères de recherche des affectations du salarié (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSpectacleSalarieAffectationsV2

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| verifierDisponibiliteEmploi | boolean | Pas utilisé |
| periode | string(date-time) | Permet de définir la période pour laquelle rechercher les affectations |
| nomInterneEtablissement | string | Permet de définir le nom de l'établissement interne pour lequel rechercher les affectations |
| affectationBulletin | integer(int32) | Permet de sélectionner les affectations avec et sans bulletin calculé : - 0 : Affectations sans bulletin calculé (valeur par défaut) - 1 : Affectations avec bulletin calculé - 2 : Affectations avec et sans bulletin calculé |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| identifiantEmploi | integer(int32) | Indentifiant de l'emploi auquel sont rattachées les affectations trouvées |
| periode | string(date-time) | Période de paie à laquelle sont rattachées les affectations |
| nomInterneEtablissement | string | Nom de l'établissement interne auquel sont rattachées les affectations |
| affectations | SpectacleSalarieAffectation[] | Liste d'éléments structurés contenant les informations des affectations trouvées (cf. détail ci-dessous) |

### SpectacleSalarieAffectation

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date-time) | Date de début de l'affectation |
| dateFin | string(date-time) | Date de fin de l'affectation |
| numeroObjet | string | Numéro Objet du spectacle auquel est rattachée l'affectation |
| referenceExterneSpectacle | string | Référence externe du spectacle auquel est rattachée l'affectation |
| aemInitiale | boolean | Permet de définir si les attestations liées à la manifestation, à laquelle est rattachée cette affectation, génère des AEM complémentaires (**true**) ou pas (**false**). Permet donc de définir que cette affectation génèrera l'AEM initiale |
| aemComplementaire | boolean | Permet de définir si l'affectation engendre une AEM complémentaire (**true**) ou pas (**false**) |
| dateDebut_AEMInitiale | string(date-time) | Date de début de l'AEM initiale |
| dateFin_AEMInitiale | string(date-time) | Date de fin de l'AEM initiale |
| docsFinContrat | boolean | Indique si les documents de fin de contrat doivent être générés avec le bulletin (**true**) ou pas (**false**) |
| tauxHoraire | number(double) | Taux horaire de l'affectation (si le calcul doit être basé sur des heures et pas des cachets) |
| nbH | number(double) | Nombre d'heures (si le calcul doit être basé sur des heures et pas des cachets) |
| nbCachets | number(double) | Nombre de cachets (si le calcul doit être basé sur des cachets et pas des heures) |
| puCachet | number(double) | Prix unitaire des cachets (si le calcul doit être basé sur des cachets et pas des heures) |
| typeCachet | integer(int32) | Type de cachet (si le calcul doit être basé sur des heures et pas des cachets) : \| Type de cachet \| Valeur correspondante \| \| --- \| --- \| \| Règle par défaut \| 0 \| \| Cachets isolés \| 1 \| \| Cachets groupés \| 2 \| |
| Type de cachet | Valeur correspondante |
| Règle par défaut | 0 |
| Cachets isolés | 1 |
| Cachets groupés | 2 |
| montantNet | boolean | Indique si le montant global calculé est en net (**true**) ou pas (**false**) |
| montantCoutGlobal | boolean | Indique si le montant calculé correspond à un coût global (**true**) ou pas (**false**) |
| nbJours | number(double) | Nombre de jours |
| nbHRepet | number(double) | Nombre d'heures de répétition |
| mtHRepet | number(double) | Montant des heures de répétition |
| hLibreCode1 | string | Code de l'heure libre 1 |
| hLibreValeur1 | number(double) | Valeur de l'heure libre 1 |
| hLibreCode2 | string | Code de l'heure libre 2 |
| hLibreValeur2 | number(double) | Valeur de l'heure libre 2 |
| hLibreCode3 | string | Code de l'heure libre 3 |
| hLibreValeur3 | number(double) | Valeur de l'heure libre 3 |
| hLibreCode4 | string | Code de l'heure libre 4 |
| hLibreValeur4 | number(double) | Valeur de l'heure libre 4 |
| hLibreCode5 | string | Code de l'heure libre 5 |
| hLibreValeur5 | number(double) | Valeur de l'heure libre 5 |
| hLibreCode6 | string | Code de l'heure libre 6 |
| hLibreValeur6 | number(double) | Valeur de l'heure libre 6 |
| variableCode1 | string | Code de l'élément variable 1 |
| variableValeur1 | number(double) | Valeur de l'élément variable 1 |
| variableCode2 | string | Code de l'élément variable 2 |
| variableValeur2 | number(double) | Valeur de l'élément variable 2 |
| variableCode3 | string | Code de l'élément variable 3 |
| variableValeur3 | number(double) | Valeur de l'élément variable 3 |
| variableCode4 | string | Code de l'élément variable 4 |
| variableValeur4 | number(double) | Valeur de l'élément variable 4 |
| variableCode5 | string | Code de l'élément variable 5 |
| variableValeur5 | number(double) | Valeur de l'élément variable 5 |
| variableCode6 | string | Code de l'élément variable 6 |
| variableValeur6 | number(double) | Valeur de l'élément variable 6 |
| variableCode7 | string | Code de l'élément variable 7 |
| variableValeur7 | number(double) | Valeur de l'élément variable 7 |
| variableCode8 | string | Code de l'élément variable 8 |
| variableValeur8 | number(double) | Valeur de l'élément variable 8 |
| variableCode9 | string | Code de l'élément variable 9 |
| variableValeur9 | number(double) | Valeur de l'élément variable 9 |
| affectationAnalytique | string | Valeur de l'axe analytique 1 spécifique au salarié si différent de l'axe analytique défini par défaut au niveau de la manifestation |
| affectationAnalytique2 | string | Valeur de l'axe analytique 2 spécifique au salarié si différent de l'axe analytique défini par défaut au niveau de la manifestation |
| affectationAnalytique3 | string | Valeur de l'axe analytique 3 spécifique au salarié si différent de l'axe analytique défini par défaut au niveau de la manifestation |

## Requête

```
{
  "requeteSpectacleSalarieAffectations": {
    "affectationBulletin": 0,
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
  "periode": "2020-10-14T21:46:24",
  "nomInterneEtablissement": "string",
  "affectations": [
    {
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "numeroObjet": "string",
      "referenceExterneSpectacle": "string",
      "aemInitiale": true,
      "aemComplementaire": true,
      "dateDebut_AEMInitiale": "2020-10-14T21:46:24",
      "dateFin_AEMInitiale": "2020-10-14T21:46:24",
      "docsFinContrat": true,
      "tauxHoraire": 10.5,
      "nbH": 10.5,
      "nbCachets": 10.5,
      "puCachet": 10.5,
      "typeCachet": 0,
      "montantNet": true,
      "montantCoutGlobal": true,
      "nbJours": 10.5,
      "nbHRepet": 10.5,
      "mtHRepet": 10.5,
      "hLibreCode1": "string",
      "hLibreValeur1": 10.5,
      "hLibreCode2": "string",
      "hLibreValeur2": 10.5,
      "hLibreCode3": "string",
      "hLibreValeur3": 10.5,
      "hLibreCode4": "string",
      "hLibreValeur4": 10.5,
      "hLibreCode5": "string",
      "hLibreValeur5": 10.5,
      "hLibreCode6": "string",
      "hLibreValeur6": 10.5,
      "variableCode1": "string",
      "variableValeur1": 10.5,
      "variableCode2": "string",
      "variableValeur2": 10.5,
      "variableCode3": "string",
      "variableValeur3": 10.5,
      "variableCode4": "string",
      "variableValeur4": 10.5,
      "variableCode5": "string",
      "variableValeur5": 10.5,
      "variableCode6": "string",
      "variableValeur6": 10.5,
      "variableCode7": "string",
      "variableValeur7": 10.5,
      "variableCode8": "string",
      "variableValeur8": 10.5,
      "variableCode9": "string",
      "variableValeur9": 10.5,
      "affectationAnalytique": "string",
      "affectationAnalytique2": "string",
      "affectationAnalytique3": "string"
    },
    {
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "numeroObjet": "string",
      "referenceExterneSpectacle": "string",
      "aemInitiale": true,
      "aemComplementaire": true,
      "dateDebut_AEMInitiale": "2020-10-14T21:46:24",
      "dateFin_AEMInitiale": "2020-10-14T21:46:24",
      "docsFinContrat": true,
      "tauxHoraire": 10.5,
      "nbH": 10.5,
      "nbCachets": 10.5,
      "puCachet": 10.5,
      "typeCachet": 0,
      "montantNet": true,
      "montantCoutGlobal": true,
      "nbJours": 10.5,
      "nbHRepet": 10.5,
      "mtHRepet": 10.5,
      "hLibreCode1": "string",
      "hLibreValeur1": 10.5,
      "hLibreCode2": "string",
      "hLibreValeur2": 10.5,
      "hLibreCode3": "string",
      "hLibreValeur3": 10.5,
      "hLibreCode4": "string",
      "hLibreValeur4": 10.5,
      "hLibreCode5": "string",
      "hLibreValeur5": 10.5,
      "hLibreCode6": "string",
      "hLibreValeur6": 10.5,
      "variableCode1": "string",
      "variableValeur1": 10.5,
      "variableCode2": "string",
      "variableValeur2": 10.5,
      "variableCode3": "string",
      "variableValeur3": 10.5,
      "variableCode4": "string",
      "variableValeur4": 10.5,
      "variableCode5": "string",
      "variableValeur5": 10.5,
      "variableCode6": "string",
      "variableValeur6": 10.5,
      "variableCode7": "string",
      "variableValeur7": 10.5,
      "variableCode8": "string",
      "variableValeur8": 10.5,
      "variableCode9": "string",
      "variableValeur9": 10.5,
      "affectationAnalytique": "string",
      "affectationAnalytique2": "string",
      "affectationAnalytique3": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
