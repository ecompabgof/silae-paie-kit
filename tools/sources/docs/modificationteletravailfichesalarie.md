---
title: "ModificationTeletravailFicheSalarie"
slug: "modificationteletravailfichesalarie"
updated: 2026-06-08T07:14:40Z
published: 2026-06-08T07:14:40Z
canonical: "silae-api.document360.io/modificationteletravailfichesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationTeletravailFicheSalarie

## Fonction API

```
/v1/SalarieEmplois/ModificationTeletravailFicheSalarie
```

## Verbe HTTP

Post

## Description

Permet de modifier les informations liées au télétravail d'un salarié

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| teletravail | TeletravailFicheSalarie | Élément structuré contenant les informations liées au télétravail du salarié (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### TeletravailFicheSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| teletravailChoixParametrage | integer(int32) | Règle appliquée au salarié - 0 : Oui, suivant les règles définies pour l’établissement - 1 : Oui, avec des droits spécifiques - 2 : Non, le salarié n’a pas droit au télétravail |
| modeSaisieTeletravail | integer(int32) | Mode de saisie du télétravail - 0 : Ponctuel - 1 : Fixe |
| limite | integer(int32) | Limite en nombre de jours |
| periode | integer(int32) | Périodicité (par défaut 0 : semaine) |
| lundi | boolean | Jour fixe : True = Oui / false = Non *Valeur prise en compte si teletravailChoixParametrage = 1 et Mode de saisie du télétravail = 1* |
| mardi | boolean | Jour fixe : True = Oui / false = Non *Valeur prise en compte si teletravailChoixParametrage = 1 et Mode de saisie du télétravail = 1* |
| mercredi | boolean | Jour fixe : True = Oui / false = Non *Valeur prise en compte si teletravailChoixParametrage = 1 et Mode de saisie du télétravail = 1* |
| jeudi | boolean | Jour fixe : True = Oui / false = Non *Valeur prise en compte si teletravailChoixParametrage = 1 et Mode de saisie du télétravail = 1* |
| vendredi | boolean | Jour fixe : True = Oui / false = Non *Valeur prise en compte si teletravailChoixParametrage = 1 et Mode de saisie du télétravail = 1* |
| samedi | boolean | Jour fixe : True = Oui / false = Non *Valeur prise en compte si teletravailChoixParametrage = 1 et Mode de saisie du télétravail = 1* |
| dimanche | boolean | Jour fixe : True = Oui / false = Non *Valeur prise en compte si teletravailChoixParametrage = 1 et Mode de saisie du télétravail = 1* |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| message | string | Message selon le paramétrage : - "Les données de télétravail ont été enregistrées" : les règles du télétravail ont bien été pris en compte pour l'emploi du salarié demandé -"Les données de télétravail indiquées sur la fiche établissement ont été affectées à l'identifiant emploi du salarié" : les règles du télétravail renseignées sur l'établissement (cf. fiche Société) sont appliquées sur la fiche emploi du salarié |

## Requête

```
{
  "identifiantEmploi": 0,
  "teletravail": {
    "teletravailChoixParametrage": 0,
    "modeSaisieTeletravail": 0,
    "limite": 0,
    "periode": 0,
    "lundi": true,
    "mardi": true,
    "mercredi": true,
    "jeudi": true,
    "vendredi": true,
    "samedi": true,
    "dimanche": true
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "message": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Nombre de jours fixes demandés supérieur à la limite" | Le nombre de jours sélectionnés dépasse la limite |
