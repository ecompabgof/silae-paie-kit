---
title: "CreationConfigurationAccesApi"
slug: "creationconfigurationaccesapi"
updated: 2026-07-28T13:25:42Z
published: 2026-07-28T13:25:42Z
canonical: "silae-api.document360.io/creationconfigurationaccesapi"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationConfigurationAccesApi

## Fonction API

```
/v1/AdministrationAPI/CreationConfigurationAccesApi
```

## Verbe HTTP

Post

## Description

Permet de créer ou de modifier (mode annule et remplace) une configuration d'accès API.

*Une configuration d'accès API ajoutée est au statut désactivé. Il est nécessaire de l'activer depuis le portail API.*

 

*Pour connaitre la liste des configurations d''accès API, utiliser la fonction **AnalyseConfigurationAccesAPI***

**A noter** : La mise à jour d'une configuration d'accès API nécessite quelques minutes de traitement avant que la liste définitive des dossiers de paie affectés soit prise en compte.

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| configuration | CreationConfigurationAccesApi | Elément structuré contenant les informations de la configuration d'accès à créer ou modifier (cf. détail ci-dessous) |

### CreationConfigurationAccesApi

| Paramètre | Type | Description |
| --- | --- | --- |
| clientId | string | ClientId du compte API auquel rattacher la configuration d'accès. *Valeur à renseigner obligatoirement même en modification* |
| identifiantUtilisateurSilae | string | Identifiant du compte utilisateur Silae à utiliser pour les droits d'accès fonctionnels |
| idConfiguration | string | Id de la configuration à renseigner pour modifier une configuration d'accès API existante. Pour connaître l'id de la configuration, utiliser la fonction **AnalyseConfigurationAccesApi** |
| niveauAcces | string | Niveau d'accès sur les dossiers du domaine. Valeurs acceptées : - Dossiers - TousDossiers |
| dossiers | string[] | Si le niveau d'accès = "Dossiers", préciser le sous ensemble de dossiers auxquels donner accès ***Seuls les numéros de dossiers trouvés sont pris en compte*** |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| clientId | string | ClientId du compte API parent |
| identifiantUtilisateurSilae | string | Identifiant du compte utilisateur Silae |
| idConfiguration | string | Id de la configuration créée ou mise à jour |
| niveauAcces | string | Niveau d'accès de la configuration |
| dossiers | string[] | Liste des dossiers retenue |

## Requête

```
{
  "configuration": {
    "clientId": "string",
    "identifiantUtilisateurSilae": "string",
    "idConfiguration": "string",
    "niveauAcces": "string",
    "dossiers": [
      "string",
      "string"
    ]
  }
}
```

## Réponse

```
{
  "clientId": "string",
  "identifiantUtilisateurSilae": "string",
  "idConfiguration": "string",
  "niveauAcces": "string",
  "dossiers": [
    "string",
    "string"
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
