---
title: "SalariesBulletinsAsynchrone"
slug: "salariesbulletinsasynchrone"
updated: 2025-11-04T06:29:27Z
published: 2025-11-04T06:29:27Z
canonical: "silae-api.document360.io/salariesbulletinsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalariesBulletinsAsynchrone

## Fonction API

```
/v1/InfosSalaries/SalariesBulletinsAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [SalariesBulletins](https://silae-api.document360.io/api-rest/docs/salariesbulletins), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutSalariesBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariesbulletinsasynchrone)

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalariesBulletins | RequeteSalariesBulletins | Élément structuré contenant les critères de recherche des bulletins à remonter (cf. détail ci-dessous) |
| nomInterneEtablissement | string | Filtre optionnel d'établissement |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalariesBulletins

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné. Si ce paramètre est vide, la recherche se fera sur tous les salariés |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi pour lequel on recherche des bulletins. la valeur 0 permet de rechercher sur tous les emplois du salarié |
| periodeDebut | string(date-time) | Date de début de la période sur laquelle rechercher des bulletins |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle rechercher des bulletins |
| bulletinsOriginauxSeulement | boolean | Permet d'indiquer si on recherche uniquement les bulletins orignaux (**true**) ou non (**false**) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutSalariesBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/statutsalariesbulletinsasynchrone) pour obtenir le résultat |

## Requête

```
{
  "requeteSalariesBulletins": {
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "periodeDebut": "2020-10-14T21:46:24",
    "periodeFin": "2020-10-14T21:46:24",
    "bulletinsOriginauxSeulement": true
  },
  "nomInterneEtablissement": "string",
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
