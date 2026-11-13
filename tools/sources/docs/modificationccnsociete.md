---
title: "ModificationCCNSociete"
slug: "modificationccnsociete"
updated: 2023-05-19T10:53:54Z
published: 2023-05-19T10:53:54Z
canonical: "silae-api.document360.io/modificationccnsociete"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationCCNSociete

## Fonction API

```
/v1/FicheSociete/ModificationCCNSociete
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier la liste des conventions collectives liées à un dossier avec l'information de la convention collective rattachée au siège (s'il y en a une)

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| pasDeCCSiege | boolean | Permet d'indiquer s'il y a une convention collective rattachée au siège (**false**) ou non (**true**) |
| ccnSociete | CCNSociete[] | Liste d'éléments structurés contenant les informations sur les conventions collectives du dossier (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### CCNSociete

| Paramètre | Type | Description |
| --- | --- | --- |
| codeCCN | string | Code Silae identifiant une convention collective |
| idcc | string | Code IDCC de la convention collective |
| codeJO | string | Code JO de la convention collective |
| forceApplicationExtension | boolean | Permet de d'indiquer si les particularités des avenants non étendus sont appliqués (**true**) ou pas (**false**) |
| syndicat | string | Syndicats listés pour cette DSN |
| ccSiege | boolean | Permet d'indiquer s'il s'agit de la convention collective du siège (**true**) ou pas (**false**) |

## Requête

```
{
  "pasDeCCSiege": true,
  "ccnSociete": [
    {
      "codeCCN": "string",
      "idcc": "string",
      "codeJO": "string",
      "forceApplicationExtension": true,
      "syndicat": "string",
      "ccSiege": true
    },
    {
      "codeCCN": "string",
      "idcc": "string",
      "codeJO": "string",
      "forceApplicationExtension": true,
      "syndicat": "string",
      "ccSiege": true
    }
  ],
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
