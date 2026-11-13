---
title: "EditionSoldeDeReposAsynchrone"
slug: "editionsoldedereposasynchrone"
updated: 2025-07-29T06:13:25Z
published: 2025-07-29T06:13:25Z
canonical: "silae-api.document360.io/editionsoldedereposasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionSoldeDeReposAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/EditionSoldeDeReposAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [EditionSoldeDeRepos](https://silae-api.document360.io/api-rest/docs/editionsoldederepos), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEditionSoldeDeReposAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionsoldedereposasynchrone)

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| format | string | - "pdf" : édition générée au format PDF - "excel" : édition générée au format EXCEL - "excelXLSX" : édition générée au format XLSX (Excel) - Par défaut PDF : supprimer ce paramètre de la requête |
| optionEdition | string | Cette option permet d'obtenir avec la valeur : - 1 : édition Classique - 2 : édition Jours CP - 3 (par défaut) : édition Détaillée - 4 : édition Détaillée avec charges fiscales - 5 : édition Détaillée Par Période - 6 : édition avec répartition analytique (uniquement sur l'axe analytique N°1) |
| titreCategorie | string | Nom de l'axe analytique si le paramètre précédent, optionEdition = 6 ***Si ce paramètre n'est pas présent ou contient une valeur non renseignée, on obtient une édition avec répartition analytique sur le 1er axe analytique)*** |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle générer l'édition |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEditionSoldeDeReposAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionsoldedereposasynchrone) pour obtenir le résultat |

## Requête

```
{
  "format": "string",
  "optionEdition": "string",
  "titreCategorie": "string",
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 1000 | "Error converting value "" to type 'SILAE.PaieRestApi.Controllers.v1. EditionEtatsPaie.Models.TypeExportEdition. Path 'format', line x, position y." | Le format du fichier d'export n'est pas renseigné. Valeur acceptée : pdf ou excel. Valeur par défaut : format PDF, supprimer le paramètre de la requête |
|  | "Aucun axe analytique n'existe avec le nom XXXXXX" | Le nom de l'axe analytique renseigné dans le paramètre titreCategorie est incorrect |
