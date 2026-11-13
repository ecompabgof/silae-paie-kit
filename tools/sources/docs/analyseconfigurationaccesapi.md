---
title: "AnalyseConfigurationAccesApi"
slug: "analyseconfigurationaccesapi"
updated: 2024-09-15T07:23:59Z
published: 2024-09-15T07:23:59Z
canonical: "silae-api.document360.io/analyseconfigurationaccesapi"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseConfigurationAccesApi

## Fonction API

```
/v1/AdministrationAPI/AnalyseConfigurationAccesApi
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la liste des configurations d'accès API déclarées dans un domaine.

**A noter** : La mise à jour d'une configuration d'accès API nécessite quelques minutes de traitement avant que la liste définitive des dossiers de paie affectés soit prise en compte.

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomCompteAPI | string | Filtre optionnel de type "contient" sur la chaine de caractères du nom de compte associé aux configurations |
| identifiantUtilisateurSilae | string | Filtre optionnel de type "match exact" sur l'identifiant de l'utilisateur Silae donnant des droits fonctionnels à cette configuration d'accès |
| numeroDossier | string | Filtre optionnel sur un des dossiers accessible à la configuration d'accès (une configuration avec un niveau d'accès TousDossiers est aussi prise en compte quelle que soit la valeur de ce filtre) |
| statutConfiguration | string | Filtre optionnel sur le statut courant de la configuration \| **Statut** \| **Valeur** \| \| --- \| --- \| \| Activé \| Enabled \| \| Désactivé \| Desabled \| \| Bloqué \| Blocked \| \| En erreur \| Error \| |
| **Statut** | **Valeur** |
| Activé | Enabled |
| Désactivé | Desabled |
| Bloqué | Blocked |
| En erreur | Error |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statistiques | ConfigurationAccesApi[] | Liste d'éléments structurés contenant les informations de chaque configuration d'accès (cf. détail ci-dessous) |

### ConfigurationAccesApi

| Paramètre | Type | Description |
| --- | --- | --- |
| nomCompteAPI | string | Nom du compte API auquel est rattaché la configuration d'accès |
| identifiantUtilisateurSilae | string | Identifiant de l'utilisateur Silae qui possède l'accès à la fonction configuration d'accès API |
| idConfiguration | string | Identifiant de la configuration d'accès |
| niveauAcces | string | Niveau d'accès (Dossiers ou TousDossiers) |
| statutConfiguration | string | Statut courant de la configuration \| **Statut** \| **Valeur** \| \| --- \| --- \| \| Activé \| Enabled \| \| Désactivé \| Desabled \| \| Bloqué \| Blocked \| \| En erreur \| Error \| |
| **Statut** | **Valeur** |
| Activé | Enabled |
| Désactivé | Desabled |
| Bloqué | Blocked |
| En erreur | Error |
| dateCreation | string(date-time) | Date de création de la configuration |
| dateModification | string(date-time) | Date de dernière modification de la configuration |
| dossiers | ConfigurationAccesApiDossier[] | Liste d'éléments structurés contenant les informations sur les dossiers autorisés pour cette configuration, si le niveau d'accès est de type "Dossiers" (cf. détail ci-dessous) |

### ConfigurationAccesApiDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro de dossier autorisé pour cette configuration |
| raisonSociale | string | Raison sociale du dossier telle que renseignée dans la fiche société |
| agence | string | Code agence de rattachement du dossier |
| groupe | string | Groupe de rattachement du dossier |

## Requête

```
{
  "nomCompteAPI": "string",
  "identifiantUtilisateurSilae": "string",
  "numeroDossier": "string",
  "statutConfiguration": "string"
}
```

## Réponse

```
{
  "statistiques": [
    {
      "nomCompteAPI": "string",
      "identifiantUtilisateurSilae": "string",
      "idConfiguration": "string",
      "niveauAcces": "string",
      "statutConfiguration": "string",
      "dateCreation": "2020-10-14T21:46:24",
      "dateModification": "2020-10-14T21:46:24",
      "dossiers": [
        {
          "numeroDossier": "string",
          "raisonSociale": "string",
          "agence": "string",
          "groupe": "string"
        },
        {
          "numeroDossier": "string",
          "raisonSociale": "string",
          "agence": "string",
          "groupe": "string"
        }
      ]
    },
    {
      "nomCompteAPI": "string",
      "identifiantUtilisateurSilae": "string",
      "idConfiguration": "string",
      "niveauAcces": "string",
      "statutConfiguration": "string",
      "dateCreation": "2020-10-14T21:46:24",
      "dateModification": "2020-10-14T21:46:24",
      "dossiers": [
        {
          "numeroDossier": "string",
          "raisonSociale": "string",
          "agence": "string",
          "groupe": "string"
        },
        {
          "numeroDossier": "string",
          "raisonSociale": "string",
          "agence": "string",
          "groupe": "string"
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
