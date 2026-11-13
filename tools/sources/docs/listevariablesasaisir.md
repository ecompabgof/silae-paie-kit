---
title: "ListeVariablesASaisir"
slug: "listevariablesasaisir"
updated: 2023-05-19T10:02:35Z
published: 2023-05-19T10:02:35Z
canonical: "silae-api.document360.io/listevariablesasaisir"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeVariablesASaisir

## Fonction API

```
/v1/VariablesASaisir/ListeVariablesASaisir
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la liste des variables à saisir

Note : La liste est également alimentée par les primes que l'on peut retrouver dans les profils utilisateur. Ces dernières seront reconnaissables par leur champ "Options" renseigné par "#PPU#".

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeVariablesASaisir | VariableASaisir[] | Liste d'éléments structurés contenant les informations des variables à saisir (cf. détail ci-dessous) |

### VariableASaisir

| Paramètre | Type | Description |
| --- | --- | --- |
| nom | string | Nom |
| famille | string | Famille |
| libelle_Long | string | Libellé Long |
| libelle_Court | string | Libellé court |
| type_Variable | integer(int32) | Indique s'il s'agit d'une variable alphanumérique (**1**) ou numérique (**2**) |
| format | string | Format du champ : X,Y où X est le nombre d'entiers, et Y le nombre de décimales |
| ordre | string | Ordre de l'élément variable |
| indiceCouleur | integer(int32) | Indice de la couleur utilisée pour l'affichage dans Silae |
| masquee | boolean | indique si la variable est masquée (**true**) ou non (**false**) |
| options | string | Permet d'indiquer si une prime est issue d'un profil utilisateur (ce champ vaut alors "#PPU#) |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeVariablesASaisir": [
    {
      "nom": "string",
      "famille": "string",
      "libelle_Long": "string",
      "libelle_Court": "string",
      "type_Variable": 0,
      "format": "string",
      "ordre": "string",
      "indiceCouleur": 0,
      "masquee": true,
      "options": "string"
    },
    {
      "nom": "string",
      "famille": "string",
      "libelle_Long": "string",
      "libelle_Court": "string",
      "type_Variable": 0,
      "format": "string",
      "ordre": "string",
      "indiceCouleur": 0,
      "masquee": true,
      "options": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
