---
title: "RecupererDuplicatasBulletins"
slug: "recupererduplicatasbulletins"
updated: 2024-08-23T08:13:27Z
published: 2024-08-23T08:13:27Z
canonical: "silae-api.document360.io/recupererduplicatasbulletins"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererDuplicatasBulletins

## Fonction API

```
/v1/RecuperationBulletins/RecupererDuplicatasBulletins
```

## Verbe HTTP

Post

              

## Description

              

Permet d'obtenir uniquement les duplicatas de bulletins en un seul fichier PDF pour :

- 1 seul salarié d'une société sur plusieurs mois
- Plusieurs salariés d'une même société sur 1 seul mois

*(Combinaison des fonctionnalités [SalariesBulletins](https://silae-api.document360.io/api-rest/docs/salariesbulletins) et [RecupererImage](https://silae-api.document360.io/api-rest/docs/recupererimage))*

*Cette même fonction est proposée en mode asynchrone : [RecupererDuplicatasBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/recupererduplicatasbulletinsasynchrone)*

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
| document | string(byte) | Document PDF encodé en base64 contenant le résultat demandé : peut contenir un à N duplicatas bulletins concaténés |

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
  "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
