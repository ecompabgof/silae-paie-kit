---
title: "ListeSalariesExternes"
slug: "listesalariesexternes"
updated: 2023-05-19T10:03:34Z
published: 2023-05-19T10:03:34Z
canonical: "silae-api.document360.io/listesalariesexternes"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeSalariesExternes

## Fonction API

```
/v1/InfosSalaries/ListeSalariesExternes
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la liste des travailleurs externes actifs sur une période donnée ou à une date donnée. Si les 2 critères de filtre sont renseignés, seuls les salariés répondant aux 2 critères seront remontés.

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
| optionActifSurPeriode | string(date-time) | Permet de restreindre la liste remontée aux salariés actifs dans une période de paie. Le format de la date est YYYY-MM-01T00:00:00, une période de paie étant toujours représentée par le premier jour du mois |
| optionActifALaDate | string(date-time) | Permet de restreindre la liste remontée aux salariés actifs à une date donnée. Le format de la date est YYYY-MM-DDT00:00:00 |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeSalariesExternes | SalarieBase[] | Liste d'éléments structurés qui contiennent les informations sur les travailleurs externes (cf. détail ci-dessous) |

### SalarieBase

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du travailleur externe |
| nomAffiche | string | Nom du travailleur externe tel qu'il est affiché dans Silae |

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
  "listeSalariesExternes": [
    {
      "matriculeSalarie": "string",
      "nomAffiche": "string"
    },
    {
      "matriculeSalarie": "string",
      "nomAffiche": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
