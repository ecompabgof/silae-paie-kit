---
title: "SalarieAjouterActiviteJournaliereSurEmploi"
slug: "salarieajouteractivitejournalieresuremploi"
updated: 2023-05-19T10:05:46Z
published: 2023-05-19T10:05:46Z
canonical: "silae-api.document360.io/salarieajouteractivitejournalieresuremploi"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterActiviteJournaliereSurEmploi

## Fonction API

```
/v1/ActivitesEtHeures/SalarieAjouterActiviteJournaliereSurEmploi
```

## Verbe HTTP

Post

          

## Description

          

Fonctionnement identique à la fonction [SalarieAjouterActiviteJournaliere](https://silae-api.document360.io/api-rest/docs/salarieajouteractivitejournaliere), en précisant sur quel emploi saisir les données

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| activiteJournalierePeriode | SalarieActiviteJournalierePeriode | Élément structuré contenant les informations de l'activité journalière à saisir (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieActiviteJournalierePeriode

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeActivite | string(date-time) | Période de paie sur laquelle saisir l'activité journalière |
| calendrier | SalarieActiviteJournaliere[] | Liste d'éléments structurés contenant les informations de l'activité journalière à saisir sur la période (cf. détail ci-dessous) |

### SalarieActiviteJournaliere

| Paramètre | Type | Description |
| --- | --- | --- |
| jour | string(date-time) | Jour concerné par la saisie de l'activité journalière |
| nombreHeures | number(double) | Nombre d'heure à renseigner. Obligatoire en mode "Classique", et peut être utilisé en mode "Avancé" pour saisir un nombre d'heures global sur la journée. La saisie est une valeur numérique (par ex : pour 8h30 saisir 8.5) |
| heureDebut1 | number(double) | À renseigner uniquement en mode "Avancé". Indique l'heure de début de la plage horaire n°1 |
| heureFin1 | number(double) | À renseigner uniquement en mode "Avancé". Indique l'heure de fin de la plage horaire n°1 |
| heureDebut2 | number(double) | À renseigner uniquement en mode "Avancé". Indique l'heure de début de la plage horaire n°2 |
| heureFin2 | number(double) | À renseigner uniquement en mode "Avancé". Indique l'heure de fin de la plage horaire n°2 |
| heureDebut3 | number(double) | À renseigner uniquement en mode "Avancé". Indique l'heure de début de la plage horaire n°3 |
| heureFin3 | number(double) | À renseigner uniquement en mode "Avancé". Indique l'heure de fin de la plage horaire n°3 |
| reinitialiserJournee | boolean | Indique s'il faut supprimer toutes les valeurs saisies pour la journée concernée (**true**) ou tenir compte des valeurs indiquées ci-dessus pour saisir les données (**false**) |

## Requête

```
{
  "identifiantEmploi": 0,
  "activiteJournalierePeriode": {
    "periodeActivite": "2020-10-14T21:46:24",
    "calendrier": [
      {
        "jour": "2020-10-14T21:46:24",
        "nombreHeures": 10.5,
        "heureDebut1": 10.5,
        "heureFin1": 10.5,
        "heureDebut2": 10.5,
        "heureFin2": 10.5,
        "heureDebut3": 10.5,
        "heureFin3": 10.5,
        "reinitialiserJournee": true
      },
      {
        "jour": "2020-10-14T21:46:24",
        "nombreHeures": 10.5,
        "heureDebut1": 10.5,
        "heureFin1": 10.5,
        "heureDebut2": 10.5,
        "heureFin2": 10.5,
        "heureDebut3": 10.5,
        "heureFin3": 10.5,
        "reinitialiserJournee": true
      }
    ]
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
