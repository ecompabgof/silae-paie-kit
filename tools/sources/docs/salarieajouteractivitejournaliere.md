---
title: "SalarieAjouterActiviteJournaliere"
slug: "salarieajouteractivitejournaliere"
updated: 2024-08-07T09:27:22Z
published: 2024-08-07T09:27:22Z
canonical: "silae-api.document360.io/salarieajouteractivitejournaliere"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterActiviteJournaliere

## Fonction API

```
/v1/ActivitesEtHeures/SalarieAjouterActiviteJournaliere
```

## Verbe HTTP

Post

          

## Description

          

Permet d'alimenter la grille de l'activité journalière pour un salarié. Ce mode de saisie doit être activé dans la fiche salarié. En fonction de la configuration dans la fiche société et la fiche salarié, la saisie peut être activée en mode "Classique" ou mode "Avancé" : ![SWS_SalarieAjouterActiviteJournaliere_fichesociete](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/SWS_SalarieAjouterActiviteJournaliere_fichesociete.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A33%3A15Z&se=2026-11-13T20%3A33%3A15Z&sr=c&sp=r&sig=LhCx2zSYiDPcgdVyGZXuPp6ppZVTfsGwYOXHl3exlac%3D) ![SWS_SalarieAjouterActiviteJournaliere_fichesalarie](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/SWS_SalarieAjouterActiviteJournaliere_fichesalarie.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A33%3A15Z&se=2026-11-13T20%3A33%3A15Z&sr=c&sp=r&sig=LhCx2zSYiDPcgdVyGZXuPp6ppZVTfsGwYOXHl3exlac%3D)

En mode avancé, il n'est possible de saisir que 3 plages horaires par jour via cette fonction API. Si des données existent déjà pour la journée concernée, elles sont écrasées.

ReinitialiserJournee : Si valeur à true alors toutes les saisies de la journée seront supprimées. Pour enregistrer de nouvelles saisies il faudra rappeler la fonction car ce mode se contente de supprimer l'existant.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
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
