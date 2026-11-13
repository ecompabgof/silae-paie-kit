---
title: "CreationEmetteurDSN"
slug: "creationemetteurdsn"
updated: 2023-04-07T06:06:18Z
published: 2023-04-07T06:06:18Z
canonical: "silae-api.document360.io/creationemetteurdsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationEmetteurDSN

## Fonction API

```
/v1/ConfigurationDSN/CreationEmetteurDSN
```

## Verbe HTTP

Post

          

## Description

          

Permet de configurer un émetteur DSN

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| emetteur | EmetteurDSN | Élément structuré contenant les informations sur l'émetteur DSN à configurer (cf. détail ci-dessous) |

### EmetteurDSN

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| civilite | integer(int32) | Civilité de l'émetteur : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| nom | string | Nom de l'émetteur |
| prenom | string | Prénom de l'émetteur |
| siret | string | SIRET auquel est rattaché l'émetteur (doit correspondre au SIRET du compte Net-Entreprise) |
| affectation | integer(int32) | Permet, au moment de la génération de la déclaration DSN, de récupérer l'adresse mail du collaborateur ayant l'affectation sélectionnée pour le dossier concerné. Pour rappel il y a 9 affectations possibles au maximum. Par exemple pour les cabinets d'expert comptable il y a 4 affectations par défaut (1 = Expert Comptable, 2 = Chef de mission, 3 = Collaborateur comptable, 4 = Collaborateur paie). La valeur 0 permet de ne pase rechercher les collaborateurs affectés |
| mail | string | Adresse e-mail de l'émetteur |
| telephone | string | Numéro de téléphone de l'émetteur |
| choixAdresse | integer(int32) | Choix de l'adresse de l'émetteur : \| Adresse émetteur \| Valeur correspondante \| \| --- \| --- \| \| Adresse spécifique \| 0 \| \| Adresse de l'établissement \| 1 \| \| Adresse de la société \| 2 \| \| Adresse de l'agence du dossier \| 3 \| \| Adresse de l'agence principale \| 4 \| |
| Adresse émetteur | Valeur correspondante |
| Adresse spécifique | 0 |
| Adresse de l'établissement | 1 |
| Adresse de la société | 2 |
| Adresse de l'agence du dossier | 3 |
| Adresse de l'agence principale | 4 |
| codeAgence | string | Liste de codes agences séparés par un ';' |
| raisonSociale | string | Raison sociale. Utilisé si le paramètre **ChoixAdresse** correspond à "Adresse spécifique" |
| numVoie | string | Numéro de la voie. Utilisé si le paramètre **ChoixAdresse** correspond à "Adresse spécifique" |
| btqc | string | Indicateur de répétition (BIS, TER, QUATER, QUINQUIES...). Utilisé si le paramètre **ChoixAdresse** correspond à "Adresse spécifique" |
| nomVoie | string | Nom de la voie. Utilisé si le paramètre **ChoixAdresse** correspond à "Adresse spécifique" |
| codePostal | string | Code postal. Utilisé si le paramètre **ChoixAdresse** correspond à "Adresse spécifique" |
| nomVille | string | Nom de la ville. Utilisé si le paramètre **ChoixAdresse** correspond à "Adresse spécifique" |

## Requête

```
{
  "emetteur": {
    "numeroDossier": "string",
    "civilite": 0,
    "nom": "string",
    "prenom": "string",
    "siret": "string",
    "affectation": 0,
    "mail": "string",
    "telephone": "string",
    "choixAdresse": 0,
    "codeAgence": "string",
    "raisonSociale": "string",
    "numVoie": "string",
    "btqc": "string",
    "nomVoie": "string",
    "codePostal": "string",
    "nomVille": "string"
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
