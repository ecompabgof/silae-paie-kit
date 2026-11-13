---
title: "SalarieAjouterAcompte"
slug: "salarieajouteracompte"
updated: 2025-05-12T06:48:57Z
published: 2025-05-12T06:48:57Z
canonical: "silae-api.document360.io/salarieajouteracompte"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterAcompte

## Fonction API

```
/v1/ElementsVariables/SalarieAjouterAcompte
```

## Verbe HTTP

Post

              

## Description

              

Permet d'ajouter un acompte.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| acompte | SalarieAcompte | Élément structuré contenant les informations de l'acompte (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieAcompte

| Paramètre | Type | Description |
| --- | --- | --- |
| dateAcompte | string(date-time) | Date de l'acompte |
| jourNonSignificatif | boolean | Indique s'il faut faire apparaître la date de l'acompte sur le bulletin avec l'intitulé “Acompte du ...” (**false**) ou non (**true**) |
| montantAcompte | number(double) | Montant de l'acompte |
| libelleAcompte | string | Libellé de l'acompte (facultatif) |

## Requête

```
{
  "acompte": {
    "dateAcompte": "2020-10-14T21:46:24",
    "jourNonSignificatif": true,
    "montantAcompte": 10.5,
    "libelleAcompte": "string"
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
