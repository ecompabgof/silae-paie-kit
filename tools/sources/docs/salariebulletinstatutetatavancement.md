---
title: "SalarieBulletinStatutEtatAvancement"
slug: "salariebulletinstatutetatavancement"
updated: 2026-05-12T08:20:34Z
published: 2026-05-12T08:20:34Z
canonical: "silae-api.document360.io/salariebulletinstatutetatavancement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieBulletinStatutEtatAvancement

## Fonction API

```
/v1/InfosBulletins/SalarieBulletinStatutEtatAvancement
```

## Verbe HTTP

Post

## Description

Permet de connaître le statut du bulletin de chaque salarié dans l'état d'avancement pour une période donnée

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné (facultatif) |
| periode | string(date) | Période de paie pour laquelle les informations sont générées |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeSalarieBulletinStatutEtatAvancement | SalarieBulletinStatutEtatAvancementReponse[] | Élément structuré contenant les paramètres de la recherche du bulletin (cf. détail ci-dessous) |

### SalarieBulletinStatutEtatAvancementReponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi |
| statutEtatAvancement | integer(int32) | \| Valeur \| Description \| \| --- \| --- \| \| 10 \| Bulletin en cours de saisie de traitement (Bulle Rouge) \| \| 20 \| Bulletin calculé (bulle Orange) \| \| 30 \| Bulletin contrôlé (bulle Bleue) \| \| 40 \| Bulletin édité (bulle Verte) \| |
| Valeur | Description |
| 10 | Bulletin en cours de saisie de traitement (Bulle Rouge) |
| 20 | Bulletin calculé (bulle Orange) |
| 30 | Bulletin contrôlé (bulle Bleue) |
| 40 | Bulletin édité (bulle Verte) |

## Requête

```
{
  "matriculeSalarie": "string",
  "periode": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeSalarieBulletinStatutEtatAvancement": [
    {
      "matriculeSalarie": "string",
      "identifiantEmploi": 0,
      "statutEtatAvancement": 0
    },
    {
      "matriculeSalarie": "string",
      "identifiantEmploi": 0,
      "statutEtatAvancement": 0
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
