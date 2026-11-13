---
title: "ListeUtilisateursDossierPaieV2"
slug: "listeutilisateursdossierpaiev2"
updated: 2026-06-16T06:26:17Z
published: 2026-06-16T06:26:17Z
canonical: "silae-api.document360.io/listeutilisateursdossierpaiev2"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeUtilisateursDossierPaieV2

## Fonction API

```
/v1/Contacts/ListeUtilisateursDossierPaieV2
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer la liste des détails des utilisateurs de type "Contact" rattachés au dossier.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeUtilisateursDossierPaie | ContactInformations[] | Liste d'éléments structurés contenant les informations des comptes utilisateurs Contact (cf. détail ci-dessous) |

### ContactInformations

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiant | string | Identifiant de connexion du contact |
| nom | string | Nom du contact |
| prenom | string | Prénom du contact |
| fonction | string | Fonction du contact |
| telBureau | string | Téléphone de bureau du contact |
| eMail | string | Mel du contact |
| typeContact | integer(int32) | Type de contact : - 0 : Contact Standard (valeur par défaut) - 1 : Contact dédié API - 2 : contact dédié My Silae Entreprise |
| referenceFacturation | string | A compléter |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeUtilisateursDossierPaie": [
    {
      "identifiant": "string",
      "nom": "string",
      "prenom": "string",
      "fonction": "string",
      "telBureau": "string",
      "eMail": "string",
      "typeContact": 0,
      "referenceFacturation": "string"
    },
    {
      "identifiant": "string",
      "nom": "string",
      "prenom": "string",
      "fonction": "string",
      "telBureau": "string",
      "eMail": "string",
      "typeContact": 0,
      "referenceFacturation": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
