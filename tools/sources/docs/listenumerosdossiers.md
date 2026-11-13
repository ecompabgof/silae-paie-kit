---
title: "ListeNumerosDossiers"
slug: "listenumerosdossiers"
updated: 2023-06-27T02:15:33Z
published: 2023-06-27T02:15:33Z
canonical: "silae-api.document360.io/listenumerosdossiers"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeNumerosDossiers

## Fonction API

```
/v1/InfosTechniquesDossiers/ListeNumerosDossiers
```

## Verbe HTTP

Post

              

## Description

              

Cette méthode est à rapprocher de la fonction [ListeDossiers](https://silae-api.document360.io/api-rest/docs/listedossiers). Elle s'exécute plus rapidement car elle ne remonte que les numéros de dossier et est donc plus efficace pour tester l'existence d'un dossier par exemple. En revanche, les dossiers pour lesquels il n'y a pas d'établissement rattaché remonteront dans la réponse à cette requête. C'est l'équivalent de faire un appel à la fonction [ListeDossiers](https://silae-api.document360.io/api-rest/docs/listedossiers) en passant le paramètre TypeDossiers avec une autre valeur que 1.

## Groupe de fonctions API

DATA005

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeNumerosDossiers | string[] | Liste des numéros de dossiers du domaine, accessibles via la session (basé sur les droits de l'utilisateur Silae utilisé pour se connecter) |

## Réponse

```
{
  "listeNumerosDossiers": [
    "string",
    "string"
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
