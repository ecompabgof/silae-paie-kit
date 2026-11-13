---
title: "ListeModulesActifs"
slug: "listemodulesactifs"
updated: 2024-10-01T09:56:06Z
published: 2024-10-01T09:56:06Z
canonical: "silae-api.document360.io/listemodulesactifs"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeModulesActifs

## Fonction API

```
/v1/AnalyseProduction/ListeModulesActifs
```

## Verbe HTTP

Get

          

## Description

          

Permet de lister les modules activés par dossier

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeAgence | string | Filtrage optionnel par code agence |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeDossiers | ModulesActifsParDossier[] | Liste d'éléments structurés contenant les informations de modules actifs pour chaque dossier concerné (cf. détail ci-dessous) |

### ModulesActifsParDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro de dossier |
| modules | ModuleActifParDossier[] | Liste d'éléments structurés contenant les informations de modules actif d'un dossier (cf. détail ci-dessous) |

### ModuleActifParDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| codeModule | string | Code du module tel que décrit en base commune |
| libelleModule | string | Libellé du module tel que décrit en base commune |
| dateDerniereModification | string(date-time) | Date de dernière activation du module |

## Requête

```
{
  "codeAgence": "string"
}
```

## Réponse

```
{
  "listeDossiers": [
    {
      "numeroDossier": "string",
      "modules": [
        {
          "codeModule": "string",
          "libelleModule": "string",
          "dateDerniereModification": "2020-10-14T21:46:24"
        },
        {
          "codeModule": "string",
          "libelleModule": "string",
          "dateDerniereModification": "2020-10-14T21:46:24"
        }
      ]
    },
    {
      "numeroDossier": "string",
      "modules": [
        {
          "codeModule": "string",
          "libelleModule": "string",
          "dateDerniereModification": "2020-10-14T21:46:24"
        },
        {
          "codeModule": "string",
          "libelleModule": "string",
          "dateDerniereModification": "2020-10-14T21:46:24"
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
