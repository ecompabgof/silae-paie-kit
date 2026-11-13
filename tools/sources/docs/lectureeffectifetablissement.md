---
title: "LectureEffectifEtablissement"
slug: "lectureeffectifetablissement"
updated: 2023-05-19T09:47:08Z
published: 2023-05-19T09:47:09Z
canonical: "silae-api.document360.io/lectureeffectifetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureEffectifEtablissement

## Fonction API

```
/v1/FicheSociete/LectureEffectifEtablissement
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations d'effectif d'un établissement

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom de l'établissement pour lequel on veut récupérer les informations d'effectif |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| effectifEtablissement | EffectifEtablissement[] | Liste d'éléments structurés contenant les informations sur l'effectif de l'établissement, sur plusieurs années (cf. détail ci-dessous) |

### EffectifEtablissement

| Paramètre | Type | Description |
| --- | --- | --- |
| annee | string(date-time) | Année qui correpond à l'effectif indiqué dans le paramètre **EffectifCT** |
| effectifCT | number(double) | Effectif de l'établissement calculé selon le code du travail |

## Requête

```
{
  "nomInterneEtablissement": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "effectifEtablissement": [
    {
      "annee": "2020-10-14T21:46:24",
      "effectifCT": 10.5
    },
    {
      "annee": "2020-10-14T21:46:24",
      "effectifCT": 10.5
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
