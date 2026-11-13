---
title: "CreationUtilisateurClientPaie"
slug: "creationutilisateurclientpaie"
updated: 2026-06-16T06:26:17Z
published: 2026-06-16T06:26:17Z
canonical: "silae-api.document360.io/creationutilisateurclientpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationUtilisateurClientPaie

## Fonction API

```
/v1/Contacts/CreationUtilisateurClientPaie
```

## Verbe HTTP

Post

## Description

Permet de créer ou modifier un compte utilisateur de type Contact. Si l'utilisateur Contact existe déjà, le compte est mis à jour avec les informations transmises dans la requête.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| utilisateurClient | UtilisateurClient | Élément structuré contenant les informations du compte utilisateur Contact à créer (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### UtilisateurClient

| Paramètre | Type | Description |
| --- | --- | --- |
| nom | string | Nom du contact |
| prenom | string | Prénom du contact |
| mail | string | Adresse mail du contact |
| identifiant | string | Identifiant du compte. Il permet d'identifier le compte Contact lors de la modification. - A la création, l'identifiant doit obligatoirement adopter un format email et doit être identique à l'email - A la modification, l'identifiant ne peut être changé |
| debutValidite | string(date-time) | Date de début de validité du compte |
| finValidite | string(date-time) | Date de fin de validité du compte |
| accesComplet | boolean | Permet de donner les droits "accès complet" par défaut |
| accesComplet_AvecParametrageSimplifie | boolean | Permet de donner les droits "accès complet avec paramétrage simplifié" |
| accesComplet_AvecParametrageComplet | boolean | Permet de donner les droits "accès complet avec paramétrage complet" |
| accesComplet_AccesBureautique | boolean | Permet de donner les droits "Accès Bureautique" |
| accesComplet_AccesRelationClient | boolean | Permet de donner les droits "Accès relation client" |
| telBureau | string | Téléphone de bureau du contact |
| fonction | string | Fonction du contact |
| typeContact | integer(int32) | Type de contact : - 0 : Contact Standard (valeur par défaut) - 1 : Contact dédié API - 2 : contact dédié My Silae Entreprise |
| referenceFacturation | string | Permet d'indiquer la référence de facturation ***Caractères interdits : espace, caractères accentués et spéciaux :, " [ % . , : ;*** |

## Requête

```
{
  "utilisateurClient": {
    "nom": "string",
    "prenom": "string",
    "mail": "string",
    "identifiant": "string",
    "debutValidite": "2020-10-14T21:46:24",
    "finValidite": "2020-10-14T21:46:24",
    "accesComplet": true,
    "accesComplet_AvecParametrageSimplifie": true,
    "accesComplet_AvecParametrageComplet": true,
    "accesComplet_AccesBureautique": true,
    "accesComplet_AccesRelationClient": true,
    "telBureau": "string",
    "fonction": "string",
    "typeContact": 0,
    "referenceFacturation": "string"
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Le type de contact n'existe pas" | Le type de contact est incorrect |
|  | "La référence de facturation contient des caractères interdits : xx" | Certains cartactères ne sont pas acceptés dans le paramètre **referenceFacturation**. xx représentent les caractères qui sont refusés |
