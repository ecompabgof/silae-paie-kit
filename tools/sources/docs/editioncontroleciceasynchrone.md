---
title: "EditionControleCICEAsynchrone"
slug: "editioncontroleciceasynchrone"
updated: 2026-10-05T13:14:43Z
published: 2026-10-05T13:14:43Z
canonical: "silae-api.document360.io/editioncontroleciceasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionControleCICEAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/EditionControleCICEAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [EditionControleCICE](https://silae-api.document360.io/api-rest/docs/editioncontrolecice), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEditionControleCICEAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditioncontroleciceasynchrone)

## Groupe de fonctions API

CYCLE02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle générer l'édition |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEditionControleCICEAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditioncontroleciceasynchrone) pour obtenir le résultat |

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
