---
title: "EcrituresComptablesPaiementSalairesLotsVirement"
slug: "ecriturescomptablespaiementsalaireslotsvirement"
updated: 2025-03-20T12:07:31Z
published: 2025-03-20T12:07:31Z
canonical: "silae-api.document360.io/ecriturescomptablespaiementsalaireslotsvirement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EcrituresComptablesPaiementSalairesLotsVirement

## Fonction API

```
/v1/EcrituresComptables/EcrituresComptablesPaiementSalairesLotsVirement
```

## Verbe HTTP

Post

              

## Description

              

Permet d'obtenir la liste des numéros de lot de virement de paiement des salaires sur une période donnée

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date) | Date de début de la période à prendre en compte pour les numéros de lot de virement |
| dateFin | string(date) | Date de fin de la période à prendre en compte pour les numéros de lot de virement |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeLotsVirement | LotsVirement[] | Liste des numéros de lot de virement |

### LotsVirement

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroLotVirement | integer(int32) | Numéro de lot de virement |
| date | string(date-time) | Date et heure du lot de virement |

## Requête

```
{
  "dateDebut": "2020-10-14",
  "dateFin": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeLotsVirement": [
    {
      "numeroLotVirement": 0,
      "date": "2020-10-14T21:46:24"
    },
    {
      "numeroLotVirement": 0,
      "date": "2020-10-14T21:46:24"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "La date de fin doit être supérieure à la date de début" | La date de fin de période est incorrecte par rapport à la date de début |
| --- | "Aucune date de début ou de fin n'est renseigné" | La date de début et/ou de fin n'est pas renseignée |
