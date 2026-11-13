---
title: "SalarieAjouterAbsence"
slug: "salarieajouterabsence"
updated: 2025-07-17T11:32:30Z
published: 2025-07-17T11:32:30Z
canonical: "silae-api.document360.io/salarieajouterabsence"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterAbsence

## Fonction API

```
/v1/Absences/SalarieAjouterAbsence
```

## Verbe HTTP

Post

          

## Description

          

Permet d'ajouter une absence à un salarié

A noter : Dans My Silae, la saisie des absences diffère selon :

- Le paramétrage effectué au niveau de la fiche Société (exemple : *Saisie manuelle des heures d’absence*) et de la fiche Salarié (exemple : les *Méthodes pour le suivi des congés payés : jours ouvrés, ouvrables, heures*)
- Le type d'absence (Maladie non professionnel, RTT, CP…)

Soit cela peut correspondre à :

- Une durée en jour(champ dureeEnHeuresSiJourUnique) ou en heure (champ dureeEnJoursSiJourUnique)
- Différents types d'heure à saisir (heures normales avec valeur1 +bValeur1, Heures majorées avec valeur2 + bValeur2, valeur3 + bValeur3...)

Il est important de connaître la méthode définie dans My Silae pour valoriser les bons paramètres dans la requête de cette fonction API.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| absence | SalarieAbsence_V2 | Élément structuré contenant les informations de l'absence (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieAbsence_V2

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebutAbsence | string(date-time) | Date de début de l'absence |
| dateFinAbsence | string(date-time) | Date de fin de l'absence |
| codeAbsence | string | Code de l'absence (cf. détail directement dans Silae) |
| dureeEnHeuresSiJourUnique | number(double) | Durée de l'absence en heure si l'absence est sur une journée (**DateDebutAbsence** = **DateFinAbsence**) |
| dureeEnJoursSiJourUnique | number(double) | Durée de l'absence en jours si l'absence est sur une journée (0,5 pour une demi journée d'absence par exemple) |
| valeurPourcentage | number(double) | Permet d'indiquer un pourcentage (par exemple le pourcentage d'activité pour une absence activité partielle) |
| sansInfluencePSS | boolean | Permet d'indiquer si l'absence partielle est sans effet sur le PSS : - **true** : option cochée - **false** : option décochée *(permet de récupérer la période d'absence dans le libellé de la ligne du bulletin*) |
| commentaire | string | Commentaire rattaché à l'absence |
| absenceRectificative | boolean | Indique s'il s'agit d'une absence rectificative (**true**) ou pas (**false**) |
| valeur1 | number(double) | Selon le type d'absence, nombre de jours d'absence (ex: Congés payés) ou nombre d'heures normales d'absence (ex: Maladie non professionnelle). ***La valeur à renseigner doit être négative*** |
| bValeur1 | boolean | Indique s'il faut tenir compte du champ **Valeur1** (**true**) et donc forcer le nombre d'heure par rapport au calcul de Silae ou non (**false**) |
| valeur2 | number(double) | Nombre d'heures majorées. ***La valeur à renseigner doit être négative*** |
| bValeur2 | boolean | Indique s'il faut tenir compte du champ **Valeur2** (**true**) et donc forcer le nombre d'heure par rapport au calcul de Silae ou non (**false**) |
| valeur3 | number(double) | Nombre d'heures "Libre1" (tel que défini dans la fiche salarié). ***La valeur à renseigner doit être négative*** |
| bValeur3 | boolean | Indique s'il faut tenir compte du champ **Valeur3** (**true**) et donc forcer le nombre d'heure par rapport au calcul de Silae ou non (**false**) |
| valeur4 | number(double) | Nombre d'heures "Libre2" (tel que défini dans la fiche salarié). ***La valeur à renseigner doit être négative*** |
| bValeur4 | boolean | Indique s'il faut tenir compte du champ **Valeur4** (**true**) et donc forcer le nombre d'heure par rapport au calcul de Silae ou non (**false**) |
| valeur5 | number(double) | Nombre d'heures "Libre3" (tel que défini dans la fiche salarié). ***La valeur à renseigner doit être négative*** |
| bValeur5 | boolean | Indique s'il faut tenir compte du champ **Valeur5** (**true**) et donc forcer le nombre d'heure par rapport au calcul de Silae ou non (**false**) |
| avecInfluencePSS | boolean | Permet d'indiquer si l'absence complète est avec effet sur le PSS : - **true** : option cochée (*Dans ce cas, l'option précédente **sansInfluencePSS** sera automatiquement décochée*) - **false** : option décochée |

## Requête

```
{
  "absence": {
    "dateDebutAbsence": "2020-10-14T21:46:24",
    "dateFinAbsence": "2020-10-14T21:46:24",
    "codeAbsence": "string",
    "dureeEnHeuresSiJourUnique": 10.5,
    "dureeEnJoursSiJourUnique": 10.5,
    "valeurPourcentage": 10.5,
    "sansInfluencePSS": true,
    "commentaire": "string",
    "absenceRectificative": true,
    "valeur1": 10.5,
    "bValeur1": true,
    "valeur2": 10.5,
    "bValeur2": true,
    "valeur3": 10.5,
    "bValeur3": true,
    "valeur4": 10.5,
    "bValeur4": true,
    "valeur5": 10.5,
    "bValeur5": true,
    "avecInfluencePSS": true
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Le code absence n'existe pas" | De manière générale, le code absence indiqué n'existe pas. Le code absence renseignée n'existe pas dans la CCN du salarié |
