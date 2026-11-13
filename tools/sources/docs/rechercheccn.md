---
title: "RechercheCCN"
slug: "rechercheccn"
updated: 2023-03-21T07:04:51Z
published: 2023-03-21T07:04:51Z
canonical: "silae-api.document360.io/rechercheccn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RechercheCCN

## Fonction API

```
/v1/InformationBaseCommune/RechercheCCN
```

## Verbe HTTP

Post

              

## Description

              

Permet de rechercher des informations concernant les conventions collectives par 2 biais :

1. Rechercher les informations de toutes les conventions collectives liées à un ou plusieurs codes NAF
2. Rechercher les informations de conventions collectives en fonction des codes IDCC, JO et d'un texte libre (renverra les résultats qui répondent simultanément aux 3 critères).

## Groupe de fonctions API

JURID01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| critere | CritereRechercheCCN | Élément structuré contenant les critères de recherche des conventions collectives (cf. détail ci-dessous) |

### CritereRechercheCCN

| Paramètre | Type | Description |
| --- | --- | --- |
| listeCodesNAF | string[] | Liste de codes NAF. Si un ou plusieurs codes NAF sont renseignés, les autres critères ne sont pas pris en compte |
| codeIDCC | string | Code IDCC |
| codeJO | string | Code JO |
| texteLibre | string | Texte libre qui sera recheché dans le libellé (IDCC et Silae) des conventions collectives |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| ccn | CCN[] | Liste d'éléments structurés contenant les informations des conventions collectives qui correspondent aux critères de recherche (cf. détail ci-dessous) |

### CCN

| Paramètre | Type | Description |
| --- | --- | --- |
| codeCCN | string | Identifiant de la convention collective dans Silae |
| libelleCCN | string | Libellé de la convention collective |
| codeIDCC | string | Code IDCC de la convention collective |
| libelleIDCC | string | Libellé IDCC de la convention collective |
| codeJO | string | Code JO de la convention collective |
| libelleJO | string | Libellé JO de la convention collective |

## Requête

```
{
  "critere": {
    "listeCodesNAF": [
      "string",
      "string"
    ],
    "codeIDCC": "string",
    "codeJO": "string",
    "texteLibre": "string"
  }
}
```

## Réponse

```
{
  "ccn": [
    {
      "codeCCN": "string",
      "libelleCCN": "string",
      "codeIDCC": "string",
      "libelleIDCC": "string",
      "codeJO": "string",
      "libelleJO": "string"
    },
    {
      "codeCCN": "string",
      "libelleCCN": "string",
      "codeIDCC": "string",
      "libelleIDCC": "string",
      "codeJO": "string",
      "libelleJO": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
