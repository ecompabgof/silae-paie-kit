---
title: "ModificationTaxeTransport"
slug: "modificationtaxetransport"
updated: 2023-05-19T10:58:57Z
published: 2023-05-19T10:58:57Z
canonical: "silae-api.document360.io/modificationtaxetransport"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationTaxeTransport

## Fonction API

```
/v1/FicheSociete/ModificationTaxeTransport
```

## Verbe HTTP

Post

          

## Description

          

Permet d'indiquer les informations liées à la taxe versement transport pour un établissement

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom de l'établissement pour lequel on veut modifier les informations |
| taxeTransport | TaxeTransport[] | Liste d'éléments structurés contenant les informations liées à l'abattement pour la taxe versement transport si l'établissement est dans une période de lissage (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### TaxeTransport

| Paramètre | Type | Description |
| --- | --- | --- |
| moisDebut | string(date-time) | Mois correspondant à l'abattement |
| pourcentageAbattement | number(double) | Pourcentage de l'abattement |

## Requête

```
{
  "nomInterneEtablissement": "string",
  "taxeTransport": [
    {
      "moisDebut": "2020-10-14T21:46:24",
      "pourcentageAbattement": 10.5
    },
    {
      "moisDebut": "2020-10-14T21:46:24",
      "pourcentageAbattement": 10.5
    }
  ],
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
