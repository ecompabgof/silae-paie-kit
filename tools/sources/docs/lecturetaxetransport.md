---
title: "LectureTaxeTransport"
slug: "lecturetaxetransport"
updated: 2023-05-19T09:59:45Z
published: 2023-05-19T09:59:45Z
canonical: "silae-api.document360.io/lecturetaxetransport"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureTaxeTransport

## Fonction API

```
/v1/FicheSociete/LectureTaxeTransport
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations liées à la taxe versement transport pour un établissement.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom de l'établissement pour lequel on veut récupérer les informations |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| taxeTransport | TaxeTransport[] | Liste d'éléments structurés contenant les informations liées à l'abattement pour la taxe versement transport si l'établissement est dans une période de lissage (cf. détail ci-dessous) |

### TaxeTransport

| Paramètre | Type | Description |
| --- | --- | --- |
| moisDebut | string(date-time) | Mois correspondant à l'abattement |
| pourcentageAbattement | number(double) | Pourcentage de l'abattement |

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
  "taxeTransport": [
    {
      "moisDebut": "2020-10-14T21:46:24",
      "pourcentageAbattement": 10.5
    },
    {
      "moisDebut": "2020-10-14T21:46:24",
      "pourcentageAbattement": 10.5
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
