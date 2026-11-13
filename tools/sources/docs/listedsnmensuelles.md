---
title: "ListeDSNMensuelles"
slug: "listedsnmensuelles"
updated: 2025-12-05T15:53:21Z
published: 2025-12-05T15:53:21Z
canonical: "silae-api.document360.io/listedsnmensuelles"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeDSNMensuelles

## Fonction API

```
/v1/InfosDeclaration/ListeDSNMensuelles
```

## Verbe HTTP

Post

## Description

Permet de récupérer la liste des DSN mensuelles générées avec quelques informations

## Groupe de fonctions API

DATA004

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date) | Période de paie pour laquelle récupérer la liste des DSN mensuelles *La date doit être au format AAAA-MM-JJ* |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeDSNMensuelles | DSNMensuelle[] | Liste d'éléments structurés contenant les informations des DSN mensuelles (cf. détail ci-dessous) |

### DSNMensuelle

| Paramètre | Type | Description |
| --- | --- | --- |
| etablissement | string | Nom interne de l'établissement sur lequel porte la DSN |
| codeOrganisme | string | Code organisme correspondant à la DSN |
| numeroAffiliation | string | Numéro d'affiliation à l'organisme |
| typeDSN | integer(int32) | Type de DSN. Ce Type apparaît dans l'écran DSN au début du libellé de l'organisme social et permet de faire la distinction entre différents types de DSN : \| Type de DSN \| Valeur correspondante \| \| --- \| --- \| \| Non attribué \| 0 \| \| Net-Entreprises \| 1 \| \| MSA \| 2 \| \| Avec PASRAU \| 3 \| \| DSM Monaco \| 4 \| |
| Type de DSN | Valeur correspondante |
| Non attribué | 0 |
| Net-Entreprises | 1 |
| MSA | 2 |
| Avec PASRAU | 3 |
| DSM Monaco | 4 |
| siret | string | Siret de l'établissement sur lequel porte la DSN |
| fraction | integer(int32) | En cas de DSN fractionnée pour le mois, l'organisme et l'établissement, cet index auto-incrémenté par date de calcul (1,23,etc.) permet d'identifier la fraction de DSN à récupérer |
| dateEnvoiDSN | string(date-time) | Date d'envoi de la DSN si réalisé (similaire à Date EDI sur l'état d'avancement) ***La date d'envoi peut ne pas être renseignée dans certains cas (une DSN traitée manuellement, déclarée obsolète…)*** |

## Requête

```
{
  "periode": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeDSNMensuelles": [
    {
      "etablissement": "string",
      "codeOrganisme": "string",
      "numeroAffiliation": "string",
      "typeDSN": 0,
      "siret": "string",
      "fraction": 0,
      "dateEnvoiDSN": "2020-10-14T21:46:24"
    },
    {
      "etablissement": "string",
      "codeOrganisme": "string",
      "numeroAffiliation": "string",
      "typeDSN": 0,
      "siret": "string",
      "fraction": 0,
      "dateEnvoiDSN": "2020-10-14T21:46:24"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| ERREUR | "siret": "ERREUR" | Dans le cas où la DSN présente une erreur (exemple : "etablissement": "INCONNU", le champ SIRET contient la valeur "ERREUR" |
|  | "Vous n'avez pas l'autorisation d'accéder aux états des déclarations de ce dossier" | Les droits d'accès sont insuffisants pour exploiter cette fonction API. Vérifier notamment l'option ***Droits limités en paie*** sur fiche Collaborateur qui doit être décochée |
