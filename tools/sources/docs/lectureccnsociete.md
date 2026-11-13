---
title: "LectureCCNSociete"
slug: "lectureccnsociete"
updated: 2026-09-28T09:54:12Z
published: 2026-09-28T09:54:12Z
canonical: "silae-api.document360.io/lectureccnsociete"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureCCNSociete

## Fonction API

```
/v1/FicheSociete/LectureCCNSociete
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la liste des conventions collectives liées à un dossier avec l'information de la convention collective rattachée au siège (s'il y en a une).

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| ccnSociete | CCNSociete[] | Liste d'éléments structurés contenant les informations sur les conventions collectives du dossier (cf. détail ci-dessous) |
| pasDeCCSiege | boolean | Permet d'indiquer s'il y a une convention collective rattachée au siège (**false**) ou non (**true**) |

### CCNSociete

| Paramètre | Type | Description |
| --- | --- | --- |
| codeCCN | string | Code Silae identifiant une convention collective |
| idcc | string | Code IDCC de la convention collective |
| codeJO | string | Code JO de la convention collective |
| forceApplicationExtension | boolean | Permet de savoir si les particularités des avenants non étendus sont appliqués (**true**) ou pas (**false**) |
| syndicat | string | Syndicats listés pour cette DSN |
| ccSiege | boolean | Permet de savoir s'il s'agit de la convention collective du siège (**true**) ou pas (**false**) |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
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
  "pasDeCCSiege": true
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
