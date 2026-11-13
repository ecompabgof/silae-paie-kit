---
title: "SalarieDUE"
slug: "salariedue"
updated: 2023-03-30T13:40:42Z
published: 2023-03-30T13:40:42Z
canonical: "silae-api.document360.io/salariedue"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieDUE

## Fonction API

```
/v1/GenerationEnvoiDUE/SalarieDUE
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et d'envoyer automatiquement une DUE au format EDI.

*Cette même fonction est proposée en mode asynchrone : [SalarieDUEAsynchrone](https://silae-api.document360.io/api-rest/docs/salariedueasynchrone)*

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

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
