---
title: "SpectacleSalarieAjouterAffectations"
slug: "spectaclesalarieajouteraffectations"
updated: 2025-08-29T07:54:03Z
published: 2025-08-29T07:54:03Z
canonical: "silae-api.document360.io/spectaclesalarieajouteraffectations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SpectacleSalarieAjouterAffectations

## Fonction API

```
/v1/ModuleSpectacle/SpectacleSalarieAjouterAffectations
```

## Verbe HTTP

Post

          

## Description

          

Permet de créer ou modifier des affectations sur des spectacles.

---

Points d'attentions :

- Cette API fonctionne en création et en modification, tant que les dates de début et de fin de l'affectation (dateDebut et dateFin) restent inchangées. Dans le cas contraire, il convient de supprimer l'affectation avec [SpectacleSalarieReinitialiserAffectations](/api-rest/docs/spectaclesalariereinitialiseraffectations), puis de la recréer.
- Il est possible de créer un nouveau spectacle simultanément à la création de l'affectation en renseignant une référence externe de spectacle qui n'existe pas encore (cf. referenceExterneSpectacle).
- Pour les contrats longs (spectacles sur plusieurs mois civils), on pourra créer 1 AEM initiale + N AEM complémentaires, à l'instar de ce qui est fait par le module Spectacle. Il faudra en revanche les créer explicitement :
  - Créer une AEM initiale avec : AEMInitiale = true, AEMComplementaire = false, ses propres dateDebut et dateFin (mais sans valorisation de dateDebutAEMInitiale et dateFinAEMInitiale).
  - Puis créer une ou plusieurs AEM complémentaires avec : AEMInitiale = false, AEMComplementaire = true, ses propres dateDebut et dateFin, tout en veillant à bien ajouter dateDebutAEMInitiale et dateFinAEMInitiale = dates de début et de fin de l'AEM initiale créée juste avant. **Il convient de créer les AEM complémentaires directement à la suite de la création de l'AEM initiale (avant de calculer le 1er bulletin).**

## Groupe de fonctions API

SPECT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| structSpectacleSalarieAffectations | SpectacleSalarieAffectations | Élément structuré contenant les informations des affectations à créer/modifier (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SpectacleSalarieAffectations

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| periode | string(date-time) | Permet de définir la période pour laquelle créer les affectations |
| nomInterneEtablissement | string | Permet de définir le nom interne de l'établissement auquel rattacher les affectations |
| affectations | SpectacleSalarieAffectation[] | Liste d'éléments structurés contenant les informations des affectations à créer/modifier (cf. détail ci-dessous) |

### SpectacleSalarieAffectation

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date-time) | Date de début de l'affectation |
| dateFin | string(date-time) | Date de fin de l'affectation |
| numeroObjet | string | Numéro Objet du spectacle |
| referenceExterneSpectacle | string | Référence externe du spectacle auquel doit être rattachée l'affectation, tel que défini via [SpectacleCreation](/api-rest/docs/spectaclecreation). Peut être récupéré [SpectacleListe](/api-rest/docs/spectacleliste) (pas visible dans les écrans). Si la référence externe n'existe pas alors Silae créera automatiquement un nouveau spectacle avec ces informations. |
| aemInitiale | boolean | Uniquement pour les contrats longs (supra-mensuels) : - Pour l'AEM initiale : renseigner à **true** - Pour les AEM complémentaires : renseigner à **false** |
| aemComplementaire | boolean | Uniquement pour les contrats longs (supra-mensuels) : - Pour l'AEM initiale : renseigner à **false** - Pour les AEM complémentaires : renseigner à **true** |
| dateDebut_AEMInitiale | string(date-time) | Uniquement pour les contrats longs (supra-mensuels) / AEM complémentaires : date de début de l'AEM initiale créée précédemment, à ne valoriser que sur les AEM complémentaires (permet de faire le lien avec l'AEM initial) |
| dateFin_AEMInitiale | string(date-time) | Uniquement pour les contrats longs (supra-mensuels) / AEM complémentaires : date de fin de l'AEM initiale créée précédemment, à ne valoriser que sur les AEM complémentaires (permet de faire le lien avec l'AEM initial) |
| docsFinContrat | boolean | Permet de définir si les documents de fin de contrat doivent être générés avec le bulletin (**true**) ou pas (**false**) |
| tauxHoraire | number(double) | Taux horaire de l'affectation (si le calcul doit être basé sur des heures et pas des cachets) |
| nbH | number(double) | Nombre d'heures (si le calcul doit être basé sur des heures et pas des cachets) |
| nbCachets | number(double) | Nombre de cachets (si le calcul doit être basé sur des heures et pas des cachets) |
| puCachet | number(double) | Prix unitaire des cachets (si le calcul doit être basé sur des heures et pas des cachets) |
| typeCachet | integer(int32) | Type de cachet (si le calcul doit être basé sur des heures et pas des cachets) : |
| montantNet | boolean | Définit si le montant global calculé est en net (**true**) ou pas (**false**) |
| montantCoutGlobal | boolean | Permet de définir si le montant calculé correspond à un coût global (**true**) ou pas (**false**) |
| nbJours | number(double) | Nombre de jours |
| nbHRepet | number(double) | Nombre d'heures de répétitions |
| mtHRepet | number(double) | Montant des heures de répétition |
| hLibreCode1 | string | Code de l'heure libre 1 pour laquelle renseigner une valeur |
| hLibreValeur1 | number(double) | Valeur de l'heure libre 1 à renseigner |
| hLibreCode2 | string | Code de l'heure libre 2 pour laquelle renseigner une valeur |
| hLibreValeur2 | number(double) | Valeur de l'heure libre 2 à renseigner |
| hLibreCode3 | string | Code de l'heure libre 3 pour laquelle renseigner une valeur |
| hLibreValeur3 | number(double) | Valeur de l'heure libre 3 à renseigner |
| hLibreCode4 | string | Code de l'heure libre 4 pour laquelle renseigner une valeur |
| hLibreValeur4 | number(double) | Valeur de l'heure libre 4 à renseigner |
| hLibreCode5 | string | Code de l'heure libre 5 pour laquelle renseigner une valeur |
| hLibreValeur5 | number(double) | Valeur de l'heure libre 5 à renseigner |
| hLibreCode6 | string | Code de l'heure libre 6 pour laquelle renseigner une valeur |
| hLibreValeur6 | number(double) | Valeur de l'heure libre 6 à renseigner |
| variableCode1 | string | Code de l'élément variable 1 pour lequel renseigner une valeur |
| variableValeur1 | number(double) | Valeur de l'élément variable 1 à renseigner |
| variableCode2 | string | Code de l'élément variable 2 pour lequel renseigner une valeur |
| variableValeur2 | number(double) | Valeur de l'élément variable 2 à renseigner |
| variableCode3 | string | Code de l'élément variable 3 pour lequel renseigner une valeur |
| variableValeur3 | number(double) | Valeur de l'élément variable 3 à renseigner |
| variableCode4 | string | Code de l'élément variable 4 pour lequel renseigner une valeur |
| variableValeur4 | number(double) | Valeur de l'élément variable 4 à renseigner |
| variableCode5 | string | Code de l'élément variable 5 pour lequel renseigner une valeur |
| variableValeur5 | number(double) | Valeur de l'élément variable 5 à renseigner |
| variableCode6 | string | Code de l'élément variable 6 pour lequel renseigner une valeur |
| variableValeur6 | number(double) | Valeur de l'élément variable 6 à renseigner |
| variableCode7 | string | Code de l'élément variable 7 pour lequel renseigner une valeur |
| variableValeur7 | number(double) | Valeur de l'élément variable 7 à renseigner |
| variableCode8 | string | Code de l'élément variable 8 pour lequel renseigner une valeur |
| variableValeur8 | number(double) | Valeur de l'élément variable 8 à renseigner |
| variableCode9 | string | Code de l'élément variable 9 pour lequel renseigner une valeur |
| variableValeur9 | number(double) | Valeur de l'élément variable 9 à renseigner |
| affectationAnalytique | string | Valeur de l'axe analytique 1 spécifique au salarié si différent de l'axe analytique défini par défaut au niveau de la manifestation |
| affectationAnalytique2 | string | Valeur de l'axe analytique 2 spécifique au salarié si différent de l'axe analytique défini par défaut au niveau de la manifestation |
| affectationAnalytique3 | string | Valeur de l'axe analytique 3 spécifique au salarié si différent de l'axe analytique défini par défaut au niveau de la manifestation |

## Requête

```
{
  "structSpectacleSalarieAffectations": {
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
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
