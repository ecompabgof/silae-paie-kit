---
title: "RechercheCCNParCode"
slug: "rechercheccnparcode"
updated: 2023-03-21T07:04:54Z
published: 2023-03-21T07:04:54Z
canonical: "silae-api.document360.io/rechercheccnparcode"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RechercheCCNParCode

## Fonction API

```
/v1/InformationBaseCommune/RechercheCCNParCode
```

## Verbe HTTP

Post

              

## Description

              

Permet de rechercher des informations concernant les conventions collectives par l'identifiant de la convention collective dans Silae.

## Groupe de fonctions API

JURID01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeCCN | string | Identifiant de la convention collective dans Silae |

## Paramètres de la réponse

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
  "codeCCN": "string"
}
```

## Réponse

```
{
  "codeCCN": "string",
  "libelleCCN": "string",
  "codeIDCC": "string",
  "libelleIDCC": "string",
  "codeJO": "string",
  "libelleJO": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
