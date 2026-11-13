---
title: "ModificationTaxeApprentissageEtablissement"
slug: "modificationtaxeapprentissageetablissement"
updated: 2023-05-26T13:56:16Z
published: 2023-05-26T13:56:16Z
canonical: "silae-api.document360.io/modificationtaxeapprentissageetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationTaxeApprentissageEtablissement

## Fonction API

```
/v1/FicheSociete/ModificationTaxeApprentissageEtablissement
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les informations de la taxe d'apprentissage d'un établissement pour une année.

**Important : La modification d'éléments de taxe d'apprentissage en cours d'année nécessite le recalcul des bulletins concernés.**

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement à modifier |
| etablissementDiffereSociete | boolean | Permet d'indiquer si le paramétrage de la taxe d'apprentissage de cet établissement est différent (**true**) ou non (**false**) de celui de la société. ***Dans le cas où la valeur de ce paramètre est à false, le résultat renvoie les données renseignées au niveau de la fiche Société*** |
| anneeMillesime | string(date-time) | Année à modifier |
| soumisTaxeApprentissage | boolean | Permet d'indiquer si l'établissmement est soumis (**true**) ou non (**false**) à la taxe d'apprentissage |
| motifNonAssujettissement | string | Si l'établissement n'est pas soumis à la taxe d'apprentissage,permet d'indiquer le motif de la non-soumission. Liste des valeurs : ([CodeNonAssujettissement](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-de-nonassujettissement-%C3%A0-la-taxe)) |
| operateurCompetences | string | Opérateur de compétence (optionnel) : ([CodeOperateurCompetence](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-dop%C3%A9rateur-de-comp%C3%A9tence)) |
| soumisTaxeApprentissageAvecMajoration | boolean | Permet d'indiquer s'il y a une majoration supplémentaire (**true**) ou non (**false**). Ce champ n'est disponible que si l'établissement est soumis à la taxe d'apprentissage |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| taxeApprentissage | TaxeApprentissage | Élément structuré contenant les informations de taxe d'apprentissage pour l'année concernée (cf. détail ci-dessous) |
| etablissementDiffereSociete | boolean | Indique si le paramétrage de la taxe d'apprentissage de cet établissement est différent (**true**) ou non (**false**) de celui de la société. S'il ne l'est pas, les modifications ne seront pas appliquées ***Dasn le cas où la valeur de ce paramètre est à **false**, le résultat renvoie automatiqment les données renseignées au niveau de la fiche société*** |

### TaxeApprentissage

| Paramètre | Type | Description |
| --- | --- | --- |
| anneeMillesime | string(date-time) | Année concernée |
| soumisTaxeApprentissage | boolean | Indique si l'établissmement est soumis (**true**) ou non (**false**) à la taxe d'apprentissage |
| motifNonAssujettissement | string | Si l'établissement n'est pas soumis à la taxe d'apprentissage, indique le motif de la non-soumission. Liste des valeurs : ([CodeNonAssujettissement](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-de-nonassujettissement-%C3%A0-la-taxe)) |
| operateurCompetences | string | Opérateur de compétence (optionnel) : ([CodeOperateurCompetence](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-dop%C3%A9rateur-de-comp%C3%A9tence)) |
| soumisTaxeApprentissageAvecMajoration | boolean | Permet d'indiquer s'il y a une majoration supplémentaire (**true**) ou non (**false**). Ce champ n'est disponible que si l'établissement est soumis à la taxe d'apprentissage |

## Requête

```
{
  "nomInterneEtablissement": "string",
  "etablissementDiffereSociete": true,
  "anneeMillesime": "2020-10-14T21:46:24",
  "soumisTaxeApprentissage": true,
  "motifNonAssujettissement": "string",
  "operateurCompetences": "string",
  "soumisTaxeApprentissageAvecMajoration": true,
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "taxeApprentissage": {
    "anneeMillesime": "2020-10-14T21:46:24",
    "soumisTaxeApprentissage": true,
    "motifNonAssujettissement": "string",
    "operateurCompetences": "string",
    "soumisTaxeApprentissageAvecMajoration": true
  },
  "etablissementDiffereSociete": true
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| TA001 | Erreur TA001 : Impossible de créer une taxe d'apprentissage plus d'un an à l'avance |  |
| TA002 | Erreur TA002 : Impossible de modifier une taxe d'apprentissage vieille de plus de 3 ans |  |
| TA003 | Erreur TA003 : Impossible de saisir un motif de non assujettissement si soumis à la taxe d'apprentissage |  |
| TA004 | Erreur TA004 : Si non soumis à la taxe d'apprentissage, le motif de non assujettissement est obligatoire |  |
| TA005 | Erreur TA005 : Impossible de saisir un opérateur de compétence si non soumis à la taxe d'apprentissage |  |
| TA006 | Erreur TA006 : Impossible d'avoir une majoration sur la taxe d'apprentissage si non soumis à la taxe d'apprentissage |  |
| TA007 | Erreur TA007 : Motif de Non Assujettissement inconnu (xxx) |  |
| TA008 | Erreur TA008 : Operateur de competence inconnu (xxx) |  |
