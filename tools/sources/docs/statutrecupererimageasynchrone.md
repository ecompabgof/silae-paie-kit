---
title: "StatutRecupererImageAsynchrone"
slug: "statutrecupererimageasynchrone"
updated: 2025-08-28T14:54:01Z
published: 2025-08-28T14:54:01Z
canonical: "silae-api.document360.io/statutrecupererimageasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutRecupererImageAsynchrone

## Fonction API

```
/v1/RecuperationBulletins/StatutRecupererImageAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [RecupererImageAsynchrone](https://silae-api.document360.io/api-rest/docs/recupererimageasynchrone)

## Groupe de fonctions API

BLTIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [RecupererImageAsynchrone](https://silae-api.document360.io/api-rest/docs/recupererimageasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| image | string(byte) | Document PDF encodé en base64 |
| imagesAnnexes | ImageAnnexe[] | Élément structuré contenant les éventuelles images annexes (cf. détail ci-dessous). *A noter : pour l'AEM, l'exemplaire salarié est retourné en document principal (image) et l'exemplaire organisme est retourné en document annexe (imagesAnnexes).* |
| warning | string | Eventuel message d'alerte, si plusieurs documents existent par rapport à l'identifiant bulletins demandé |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### ImageAnnexe

| Paramètre | Type | Description |
| --- | --- | --- |
| image | string(byte) | Document annexe PDF encodé en base64 |

## Requête

```
{
  "guidTache": "string"
}
```

## Réponse

```
{
  "image": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg==",
  "imagesAnnexes": [
    {
      "image": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    },
    {
      "image": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    }
  ],
  "warning": "string",
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
