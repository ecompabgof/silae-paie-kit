---
title: "LectureTeletravailFicheSalarie"
slug: "lectureteletravailfichesalarie"
updated: 2026-02-06T10:30:44Z
published: 2026-02-10T07:10:20Z
canonical: "silae-api.document360.io/lectureteletravailfichesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureTeletravailFicheSalarie

## Fonction API

```
/v1/SalarieEmplois/LectureTeletravailFicheSalarie
```

## Verbe HTTP

Post

## Description

Permet de récupérer les informations liées au télétravail d'un salarié

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| matriculeSalarie | string | Matricule du salarié |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| teletravail | TeletravailFicheSalarie | Élément structuré contenant les informations liées au télétravail du salarié (cf. détail ci-dessous) |

### TeletravailFicheSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| teletravailChoixParametrage | integer(int32) | Règle appliquée au salarié - 0 : Oui, suivant les règles définies pour l’établissement - 1 : Oui, avec des droits spécifiques - 2 : Non, le salarié n’a pas droit au télétravail |
| modeSaisieTeletravail | integer(int32) | Mode de saisie du télétravail - 0 : Ponctuel - 1 : Fixe |
| limite | integer(int32) | Limite en nombre de jours |
| periode | integer(int32) | Périodicité (par défaut 0 : semaine) |
| lundi | boolean | Jour fixe : True = Oui / false = Non *valeur si Mode de saisie du télétravail = 0 (Ponctuel)* |
| mardi | boolean | Jour fixe : True = Oui / false = Non *Ne pas tenir compte de la valeur si Mode de saisie du télétravail = 0 (Ponctuel)* |
| mercredi | boolean | Jour fixe : True = Oui / false = Non *Ne pas tenir compte de la valeur si Mode de saisie du télétravail = 0 (Ponctuel)* |
| jeudi | boolean | Jour fixe : True = Oui / false = Non *Ne pas tenir compte de la valeur si Mode de saisie du télétravail = 0 (Ponctuel)* |
| vendredi | boolean | Jour fixe : True = Oui / false = Non *Ne pas tenir compte de la valeur si Mode de saisie du télétravail = 0 (Ponctuel)* |
| samedi | boolean | Jour fixe : True = Oui / false = Non *Ne pas tenir compte de la valeur si Mode de saisie du télétravail = 0 (Ponctuel)* |
| dimanche | boolean | Jour fixe : True = Oui / false = Non *Ne pas tenir compte de la valeur si Mode de saisie du télétravail = 0 (Ponctuel)* |

## Requête

```
{
  "identifiantEmploi": 0,
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
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
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Le télétravail n'est pas autorisé au niveau de l'établissement de ce salarié" | Le télétravail n'est pas actif sur l'établissement du salarié (cf. fiche Société) |
| --- | "Le salarié n'a pas droit au télétravail sur l'identifiant emploi demandé" | Le télétravail n'est pas actif sur l'emploi du salarié |
