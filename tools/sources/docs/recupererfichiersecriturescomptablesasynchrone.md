---
title: "RecupererFichiersEcrituresComptablesAsynchrone"
slug: "recupererfichiersecriturescomptablesasynchrone"
updated: 2024-10-16T07:13:53Z
published: 2024-10-16T07:13:53Z
canonical: "silae-api.document360.io/recupererfichiersecriturescomptablesasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererFichiersEcrituresComptablesAsynchrone

## Fonction API

```
/v1/EcrituresComptables/RecupererFichiersEcrituresComptablesAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [RecupererFichiersEcrituresComptables](https://silae-api.document360.io/docs/RecupererFichiersEcrituresComptables), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutRecupererFichiersEcrituresComptables](https://silae-api.document360.io/docs/StatutRecupererFichiersEcrituresComptables)

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période à prendre en compte pour les écritures comptables |
| periodeFin | string(date-time) | Date de fin de la période à prendre en compte pour les écritures comptables |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | A compléter |

## Requête

```
{
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
