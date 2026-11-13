---
title: "RecupererDuplicatasBulletinsAsynchrone"
slug: "recupererduplicatasbulletinsasynchrone"
updated: 2023-03-28T09:58:47Z
published: 2023-03-28T09:58:49Z
canonical: "silae-api.document360.io/recupererduplicatasbulletinsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererDuplicatasBulletinsAsynchrone

## Fonction API

```
/v1/RecuperationBulletins/RecupererDuplicatasBulletinsAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [RecupererDuplicatasBulletins](https://silae-api.document360.io/api-rest/docs/recupererduplicatasbulletins), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutRecupererDuplicatasBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutrecupererduplicatasbulletinsasynchrone)

## Groupe de fonctions API

BLTIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| filtreMatricules | string[] | Liste de matricules salariés sur lesquels les duplicatas de bulletins seront récupérés (par défaut, tous les salariés de la société sur lesquels l'utilisateur courant à les droits sont remontés) |
| periodeDebut | string(date-time) | Début de la période à récupérer |
| periodeFin | string(date-time) | Fin de la période récupérer (optionnel, dans ce cas égal à periodeDebut). Limite : - 12 mois pour un salarié, - 1 mois pour plusieurs salariés |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutRecupererDuplicatasBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutrecupererduplicatasbulletinsasynchrone) pour obtenir le résultat |

## Requête

```
{
  "filtreMatricules": [
    "string",
    "string"
  ],
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
