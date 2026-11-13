---
title: "ListeSalaries"
slug: "listesalaries"
updated: 2026-02-25T15:03:20Z
published: 2026-02-25T15:03:20Z
canonical: "silae-api.document360.io/listesalaries"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeSalaries

## Fonction API

```
/v1/InfosSalaries/ListeSalaries
```

## Verbe HTTP

Post

## Description

Permet de récupérer la liste des salariés actifs sur une période donnée ou à une date donnée. Si les 2 critères de filtre sont renseignés, seuls les salariés répondant aux 2 critères seront remontés.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| listeSalariesOptions | ListeSalariesOptions | Élément structuré qui contient les informations de filtre sur les salariés (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ListeSalariesOptions

| Paramètre | Type | Description |
| --- | --- | --- |
| optionActifSurPeriode | string(date-time) | Permet de restreindre la liste remontée aux salariés actifs dans une période de paie. Le format de la date est AAAA-MM-01, une période de paie étant toujours représentée par le premier jour du mois |
| optionActifALaDate | string(date-time) | Permet de restreindre la liste remontée aux salariés actifs à une date donnée. Le format de la date est AAAA-MM-JJ |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeSalariesInformations | SalarieInformations_V3[] | Liste d'éléments structurés qui contiennent les informations sur les salariés (cf. détail ci-dessous) |

### SalarieInformations_V3

| Paramètre | Type | Description |
| --- | --- | --- |
| mel | string | Adresse mail professionnelle |
| melPerso | string | Adresse mail personnelle |
| matriculeSalarie | string | Matricule du salarié |
| numeroSecuriteSociale | string | NIR complet (13 caractères et la clé) |
| nomAffiche | string | Nom du salarié tel qu'il est affiché dans My Silae |

## Requête

```
{
  "listeSalariesOptions": {
    "optionActifSurPeriode": "2020-10-14T21:46:24",
    "optionActifALaDate": "2020-10-14T21:46:24"
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeSalariesInformations": [
    {
      "mel": "string",
      "melPerso": "string",
      "matriculeSalarie": "string",
      "numeroSecuriteSociale": "string",
      "nomAffiche": "string"
    },
    {
      "mel": "string",
      "melPerso": "string",
      "matriculeSalarie": "string",
      "numeroSecuriteSociale": "string",
      "nomAffiche": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
