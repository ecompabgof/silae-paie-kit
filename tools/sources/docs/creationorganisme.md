---
title: "CreationOrganisme"
slug: "creationorganisme"
updated: 2023-05-19T06:02:28Z
published: 2023-05-19T06:02:28Z
canonical: "silae-api.document360.io/creationorganisme"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationOrganisme

## Fonction API

```
/v1/Organisme/CreationOrganisme
```

## Verbe HTTP

Post

          

## Description

          

Permet de créer un organisme dans un dossier ou de modifier un organisme existant

*Remarques :*

- Un organisme est identifié par son code (soit le code organisme soit le code interne, donc au moins un des 2 doit être renseigné dans les requêtes), sa nature et son établissement s'il est rattaché à un établissement (+ les éventuels filtres configurés).
- Si un organisme correspond aux données d'identification (cf. liste ci-dessus) passées dans la requête, l'organisme sera modifié avec les informations de la requête.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| organisme | Organisme | Élément structuré qui contient les informations de l'organisme à créer (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### Organisme

| Paramètre | Type | Description |
| --- | --- | --- |
| codeOrganisme | string | Code de l'organisme, tel qu'il est identifié dans Silae |
| codeInterne | string | (facultatif si le code organisme est présent) Code interne tel que défini dans la base commune Silae (tous les organismes n'ont pas de code interne) |
| codeNature | string | Nature de l'organisme : \| Nature de l'organisme \| Valeur correspondante \| \| --- \| --- \| \| Sécurité sociale \| SSOC \| \| Chômage \| CH \| \| ARRCO \| ARRCO \| \| AGIRC \| AGIRC \| \| Garantie retraite supplémentaire \| GRS \| \| Régime de Prévoyance Obligatoire \| RPO \| \| Régime de Prévoyance Supplémentaire \| RPS \| \| Caisse de Congés Payés \| CCP \| \| Médecine du Travail \| MT \| \| Formation Professionnelle \| FP \| \| Régime Spécial \| RSPECIAL \| \| Taxe sur les Salaires \| TS \| \| Autres Taxes/Contributions sur les Salaires \| ATCS \| \| Divers \| DIV \| |
| Nature de l'organisme | Valeur correspondante |
| Sécurité sociale | SSOC |
| Chômage | CH |
| ARRCO | ARRCO |
| AGIRC | AGIRC |
| Garantie retraite supplémentaire | GRS |
| Régime de Prévoyance Obligatoire | RPO |
| Régime de Prévoyance Supplémentaire | RPS |
| Caisse de Congés Payés | CCP |
| Médecine du Travail | MT |
| Formation Professionnelle | FP |
| Régime Spécial | RSPECIAL |
| Taxe sur les Salaires | TS |
| Autres Taxes/Contributions sur les Salaires | ATCS |
| Divers | DIV |
| nomInterneEtablissement | string | Nom de l'établissement auquel rattacher l'organisme. Si le champ est vide, l'organisme est rattaché à la société |
| numeroAffiliation | string | Numéro d'affiliation |
| periodicite | integer(int32) | Périodicité : \| Périodicité \| Valeur correspondante \| \| --- \| --- \| \| Mensuelle \| 0 \| \| Trimestrielle \| 1 \| \| Annuelle \| 2 \| \| Semestrielle \| 3 \| |
| Périodicité | Valeur correspondante |
| Mensuelle | 0 |
| Trimestrielle | 1 |
| Annuelle | 2 |
| Semestrielle | 3 |
| jourPaiement | integer(int32) | Jour de paiement des cotisations |
| filtreSalaries | string | Permet de filtrer les salariés pour lesquels l'organisme sera utilisé (par exemple pour faire une différence cadre / non-cadre |
| filtreCodesLibelles | string | Permet de filtrer, via leur code, les libellés de cotisation qui seront rattachés à cet organisme |
| edi | boolean | permet d'indiquer si la déclaration se fait en EDI (**true**) ou pas (**false**) |
| ediModePaiement | integer(int32) | Mode de paiement : \| Mode de paiement \| Valeur correspondante \| \| --- \| --- \| \| Chèque \| 1 \| \| Virement \| 2 \| \| Télépaiement \| 3 \| |
| Mode de paiement | Valeur correspondante |
| Chèque | 1 |
| Virement | 2 |
| Télépaiement | 3 |
| numeroRattachement | string | Numéro de rattachement |
| codePopulation | string | Code population |
| codeOption | string | Code Option |
| codeDelegataireDeGestion | string | Code délégataire de gestion |

## Requête

```
{
  "organisme": {
    "codeOrganisme": "string",
    "codeInterne": "string",
    "codeNature": "string",
    "nomInterneEtablissement": "string",
    "numeroAffiliation": "string",
    "periodicite": 0,
    "jourPaiement": 0,
    "filtreSalaries": "string",
    "filtreCodesLibelles": "string",
    "edi": true,
    "ediModePaiement": 0,
    "numeroRattachement": "string",
    "codePopulation": "string",
    "codeOption": "string",
    "codeDelegataireDeGestion": "string"
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
