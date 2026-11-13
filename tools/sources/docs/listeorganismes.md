---
title: "ListeOrganismes"
slug: "listeorganismes"
updated: 2024-08-26T17:20:03Z
published: 2024-08-26T17:20:03Z
canonical: "silae-api.document360.io/listeorganismes"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeOrganismes

## Fonction API

```
/v1/Organisme/ListeOrganismes
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la liste des organismes : Urssaf, Retraite, Prévoyance … avec toutes les données rattachées depuis un numéro de dossier

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeOrganisme | string | Filtre par code organisme (facultatif) |
| codeNature | string | Filtre par code nature (facultatif) |
| nomInterneEtablissement | string | Filtre par nom interne d'établissement (facultatif) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeOrganismes | Organisme[] | Liste d'éléments structurés contenant les informations des organismes du dossier (Détail ci-dessous) |

### Organisme

| Paramètre | Type | Description |
| --- | --- | --- |
| codeOrganisme | string | Code de l'organisme, tel qu'il est identifié dans Silae (facultatif) |
| codeInterne | string | Code interne (tous les organismes n'ont pas de code interne) tel que défini dans la base commune Silae (facultatif si le code organisme est présent) |
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
| filtreSalaries | string | Filtres Salariés pour lesquels l'organisme est utilisé (exemple : distinction entre statuts cadre et non-cadre) |
| filtreCodesLibelles | string | Filtres codes libellés pour lesquels les libellés de cotisation sont rattachés à cet organisme |
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
  "codeOrganisme": "string",
  "codeNature": "string",
  "nomInterneEtablissement": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeOrganismes": [
    {
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
    {
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
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Code nature recherché incorrect" | Le code nature demandé n'existe pas |
|  | "NomInterneEtablissement non trouvé" | Le nom interne de l'établissement n'existe pas |
| 1011 | "la valeur de la liste de dossiers est nulle ou vide" | Vérifier si les droits d'accès sont suffisants pour le dossier de paie demandé |
