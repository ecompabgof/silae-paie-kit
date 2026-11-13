---
title: "ModificationTaxeApprentissageSociete"
slug: "modificationtaxeapprentissagesociete"
updated: 2023-05-19T10:58:30Z
published: 2023-05-19T10:58:30Z
canonical: "silae-api.document360.io/modificationtaxeapprentissagesociete"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationTaxeApprentissageSociete

## Fonction API

```
/v1/FicheSociete/ModificationTaxeApprentissageSociete
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les informations de la taxe d'apprentissage de la société pour une année. **Important : La modification d'éléments de taxe d'apprentissage en cours d'année nécessite le recalcul des bulletins concernés.**

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| anneeMillesime | string(date-time) | Année à modifier |
| soumisTaxeApprentissage | boolean | Permet d'indiquer si la société est soumise (**true**) ou non (**false**) à la taxe d'apprentissage |
| motifNonAssujettissement | string | Si la société n'est pas soumise à la taxe d'apprentissage,permet d'indiquer le motif de la non-soumission. Liste des valeurs : ([CodeNonAssujettissement](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-de-nonassujettissement-%C3%A0-la-taxe)) |
| operateurCompetences | string | Opérateur de compétence (optionnel) : ([CodeOperateurCompetence](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-dop%C3%A9rateur-de-comp%C3%A9tence)) |
| soumisTaxeApprentissageAvecMajoration | boolean | Permet d'indiquer s'il y a une majoration supplémentaire (**true**) ou non (**false**). Ce champ n'est disponible que si l'établissement est soumis à la taxe d'apprentissage |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| taxeApprentissage | TaxeApprentissage | Élément structuré contenant les informations de taxe d'apprentissage pour l'année concernée (cf. détail ci-dessous) |

### TaxeApprentissage

| Paramètre | Type | Description |
| --- | --- | --- |
| anneeMillesime | string(date-time) | Année concernée |
| soumisTaxeApprentissage | boolean | Indique si la société est soumise (**true**) ou non (**false**) à la taxe d'apprentissage |
| motifNonAssujettissement | string | Si la société n'est pas soumise à la taxe d'apprentissage, indique le motif de la non-soumission. Liste des valeurs : ([CodeNonAssujettissement](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-de-nonassujettissement-%C3%A0-la-taxe)) |
| operateurCompetences | string | Opérateur de compétence (optionnel) : ([CodeOperateurCompetence](https://silae-api.document360.io/preview/api-rest/fr/5e01b13b-ee46-4459-b40c-94288ee69839/1#codes-dop%C3%A9rateur-de-comp%C3%A9tence)) |
| soumisTaxeApprentissageAvecMajoration | boolean | Permet d'indiquer s'il y a une majoration supplémentaire (**true**) ou non (**false**). Ce champ n'est disponible que si l'établissement est soumis à la taxe d'apprentissage |

## Requête

```
{
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
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
