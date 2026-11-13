---
title: "ModificationCCNEtablissement"
slug: "modificationccnetablissement"
updated: 2024-08-26T17:19:27Z
published: 2024-08-26T17:19:27Z
canonical: "silae-api.document360.io/modificationccnetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationCCNEtablissement

## Fonction API

```
/v1/FicheSociete/ModificationCCNEtablissement
```

## Verbe HTTP

Post

              

## Description

              

Permet de modifier la convention collective liée à l'établissement selon les différentes conventions collectives rattachées à la fiche Société.

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterne | string | Nom interne de l'établissement |
| codeCCN | string | Code Silae identifiant une convention collective parmi la liste des codes CCN de la fiche Société |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Requête

```
{
  "nomInterne": "string",
  "codeCCN": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "NomInterne non renseigné" | Non interne de l'établissement à renseigner obligatoirement |
|  | "NomInterne non trouvé" | Non interne de l'établissement inexistant dans le dossier de paie concerné |
|  | "CodeCCN non renseigné" | Le nouveau code CCN est à renseigner |
|  | "Le code CCN ne fait pas partie de la liste des codes CCN définies sur la fiche Société" | Le code CCN indiqué n'appartient pas à la liste des CCN de la fiche Société |
