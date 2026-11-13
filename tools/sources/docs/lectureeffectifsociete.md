---
title: "LectureEffectifSociete"
slug: "lectureeffectifsociete"
updated: 2023-05-19T09:47:31Z
published: 2023-05-19T09:47:32Z
canonical: "silae-api.document360.io/lectureeffectifsociete"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureEffectifSociete

## Fonction API

```
/v1/FicheSociete/LectureEffectifSociete
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations d'effectif d'une société

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| effectifSociete | EffectifSociete[] | Liste d'éléments structurés contenant les informations sur l'effectif de la société, sur plusieurs années (cf. détail ci-dessous) |

### EffectifSociete

| Paramètre | Type | Description |
| --- | --- | --- |
| annee | string(date-time) | Année à laquelle correponent les effectifs indiqués dans les autres paramètres de l'objet **EffectifSociete** |
| effectif1_GlobalURSSAF | number(double) | Effectif global calculé selon la méthode de l'URSSAF |
| effectif2_MoyenURSAFF | number(double) | Effectif moyen calculé selon la méthode de l'URSSAF |
| effectif_DADSU | number(double) | Effectif calculé selon la méthode qui alimente la DSN |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "effectifSociete": [
    {
      "annee": "2020-10-14T21:46:24",
      "effectif1_GlobalURSSAF": 10.5,
      "effectif2_MoyenURSAFF": 10.5,
      "effectif_DADSU": 10.5
    },
    {
      "annee": "2020-10-14T21:46:24",
      "effectif1_GlobalURSSAF": 10.5,
      "effectif2_MoyenURSAFF": 10.5,
      "effectif_DADSU": 10.5
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
