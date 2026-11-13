---
title: "EditionHistoriqueAsynchrone"
slug: "editionhistoriqueasynchrone"
updated: 2025-04-29T08:42:16Z
published: 2025-04-29T08:42:16Z
canonical: "silae-api.document360.io/editionhistoriqueasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionHistoriqueAsynchrone

## Fonction API

```
/v1/EditionHistoriques/EditionHistoriqueAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [EditionHistorique](https://silae-api.document360.io/api-rest/docs/editionhistorique), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEditionHistoriqueAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionhistoriqueasynchrone)

## Groupe de fonctions API

DATA002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeEditionHistorique | string | Nom de l'édition historique à générer |
| motDePasse | string | Mot qui pourrait éventuellement protéger l'accès à l'édition historique |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition historique |
| periodeFin | string(date-time) | Date de début de la période pour laquelle générer l'édition historique |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEditionHistoriqueAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionhistoriqueasynchrone) pour obtenir le résultat |

## Requête

```
{
  "codeEditionHistorique": "string",
  "motDePasse": "string",
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
