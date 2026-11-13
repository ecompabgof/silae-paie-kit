---
title: "LectureTaxeApprentissageEtablissement"
slug: "lecturetaxeapprentissageetablissement"
updated: 2023-05-19T09:49:10Z
published: 2023-05-19T09:49:10Z
canonical: "silae-api.document360.io/lecturetaxeapprentissageetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureTaxeApprentissageEtablissement

## Fonction API

```
/v1/FicheSociete/LectureTaxeApprentissageEtablissement
```

## Verbe HTTP

Post

          

## Description

          

Permet de lire les informations de taxe d'apprentissage d'un établissement sur les 3 dernières années, à partir de 2022

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| taxeApprentissage | TaxeApprentissage[] | Liste d'éléments structurés contenant les informations de taxe d'apprentissage par année (cf. détail ci-dessous) |
| etablissementDiffereSociete | boolean | Indique si le paramétrage de la taxe d'apprentissage de cet établissement est différent (**true**) ou non (**false**) de celui de la société |

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
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "taxeApprentissage": [
    {
      "anneeMillesime": "2020-10-14T21:46:24",
      "soumisTaxeApprentissage": true,
      "motifNonAssujettissement": "string",
      "operateurCompetences": "string",
      "soumisTaxeApprentissageAvecMajoration": true
    },
    {
      "anneeMillesime": "2020-10-14T21:46:24",
      "soumisTaxeApprentissage": true,
      "motifNonAssujettissement": "string",
      "operateurCompetences": "string",
      "soumisTaxeApprentissageAvecMajoration": true
    }
  ],
  "etablissementDiffereSociete": true
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
