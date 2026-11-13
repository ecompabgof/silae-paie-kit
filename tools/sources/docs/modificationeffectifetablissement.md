---
title: "ModificationEffectifEtablissement"
slug: "modificationeffectifetablissement"
updated: 2023-05-19T10:54:25Z
published: 2023-05-19T10:54:25Z
canonical: "silae-api.document360.io/modificationeffectifetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationEffectifEtablissement

## Fonction API

```
/v1/FicheSociete/ModificationEffectifEtablissement
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les informations d'effectif d'un établissement

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom de l'établissement pour lequel on veut modifier les informations d'effectif |
| effectifEtablissement | EffectifEtablissement[] | Liste d'éléments structurés contenant les informations sur l'effectif de l'établissement, sur plusieurs années (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### EffectifEtablissement

| Paramètre | Type | Description |
| --- | --- | --- |
| annee | string(date-time) | Année qui correpond à l'effectif indiqué dans le paramètre **EffectifCT** |
| effectifCT | number(double) | Effectif de l'établissement calculé selon le code du travail |

## Requête

```
{
  "nomInterneEtablissement": "string",
  "effectifEtablissement": [
    {
      "annee": "2020-10-14T21:46:24",
      "effectifCT": 10.5
    },
    {
      "annee": "2020-10-14T21:46:24",
      "effectifCT": 10.5
    }
  ],
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
