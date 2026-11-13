---
title: "EtablissementsAExclureCVAE"
slug: "etablissementsaexclurecvae"
updated: 2023-05-19T10:52:39Z
published: 2023-05-19T10:52:39Z
canonical: "silae-api.document360.io/etablissementsaexclurecvae"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EtablissementsAExclureCVAE

## Fonction API

```
/v1/FicheSociete/EtablissementsAExclureCVAE
```

## Verbe HTTP

Post

          

## Description

          

Permet d'indiquer si les établissements d'un dossier sont assujetis ou non à la CVAE

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomsInterneEtablissements | string[] | Liste de noms internes des établissements à exclure ou non |
| exclure | boolean | Permet d'indiquer s'il faut exclure (**true**) ou non (**false**) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| etablissementsTraites | string[] | Liste des établissements pour lequel la modification a été prise en compte |

## Requête

```
{
  "nomsInterneEtablissements": [
    "string",
    "string"
  ],
  "exclure": true,
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "etablissementsTraites": [
    "string",
    "string"
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
