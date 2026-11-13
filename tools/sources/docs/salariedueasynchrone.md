---
title: "SalarieDUEAsynchrone"
slug: "salariedueasynchrone"
updated: 2023-03-28T11:34:08Z
published: 2023-03-28T11:34:08Z
canonical: "silae-api.document360.io/salariedueasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieDUEAsynchrone

## Fonction API

```
/v1/GenerationEnvoiDUE/SalarieDUEAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [SalarieDUE](https://silae-api.document360.io/api-rest/docs/salariedue), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutSalarieDUEAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariedueasynchrone)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| salarieDUE | SalarieDUE | Élément structuré contenant les informations du salarié permettant de générer la DUE (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieDUE

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattaché le salarié |
| dateEmbauche | string(date-time) | Date d'embauche |
| dateFinContrat | string(date-time) | Date de fin de contrat |
| typeContrat | integer(int32) | Type de contrat : \| Type de contrat \| Valeur correspondante \| \| --- \| --- \| \| Tout type de contrat sauf CDD \| 0 \| \| CDD \| 1 \| |
| Type de contrat | Valeur correspondante |
| Tout type de contrat sauf CDD | 0 |
| CDD | 1 |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutSalarieDUEAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariedueasynchrone) pour obtenir le résultat |

## Requête

```
{
  "salarieDUE": {
    "matriculeSalarie": "string",
    "nomInterneEtablissement": "string",
    "dateEmbauche": "2020-10-14T21:46:24",
    "dateFinContrat": "2020-10-14T21:46:24",
    "typeContrat": 0
  },
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
