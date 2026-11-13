---
title: "EcrituresComptables4Asynchrone"
slug: "ecriturescomptables4asynchrone"
updated: 2025-04-29T08:42:04Z
published: 2025-04-29T08:42:04Z
canonical: "silae-api.document360.io/ecriturescomptables4asynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EcrituresComptables4Asynchrone

## Fonction API

```
/v1/EcrituresComptables/EcrituresComptables4Asynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [EcrituresComptables4](https://silae-api.document360.io/docs/ecriturescomptables4), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEcrituresComptables4Asynchrone](https://silae-api.document360.io/docs/statutecriturescomptables4asynchrone)

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| avecToutesLesRepartitionsAnalytiques | boolean | Permet de récupérer les lignes de - True : tous les axes analytiques (**true**) - False : un seul axe analytique |
| periodeDebut | string(date-time) | Date de début de la période à prendre en compte pour les écritures comptables |
| periodeFin | string(date-time) | Date de fin de la période à prendre en compte pour les écritures comptables |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEcrituresComptables4Asynchrone](https://silae-api.document360.io/api-rest/docs/ecriturescomptablesasynchrone) pour obtenir le résultat |

## Requête

```
{
  "avecToutesLesRepartitionsAnalytiques": true,
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
