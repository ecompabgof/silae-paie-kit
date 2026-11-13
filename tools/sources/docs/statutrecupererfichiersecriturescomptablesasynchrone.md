---
title: "StatutRecupererFichiersEcrituresComptablesAsynchrone"
slug: "statutrecupererfichiersecriturescomptablesasynchrone"
updated: 2024-10-16T07:16:12Z
published: 2024-10-16T07:16:12Z
canonical: "silae-api.document360.io/statutrecupererfichiersecriturescomptablesasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutRecupererFichiersEcrituresComptablesAsynchrone

## Fonction API

```
/v1/EcrituresComptables/StatutRecupererFichiersEcrituresComptablesAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [RecupererFichiersEcrituresComptablesAsynchrone](https://silae-api.document360.io/api-rest/docs/RecupererFichiersEcrituresComptablesAsynchrone)

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [RecupererFichiersEcrituresComptablesAsynchrone](https://silae-api.document360.io/api-rest/docs/RecupererFichiersEcrituresComptablesAsynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| fichiers | EcrituresComptablesFichier[] | Liste d'éléments structurés représentant les fichiers générés (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### EcrituresComptablesFichier

| Paramètre | Type | Description |
| --- | --- | --- |
| nomFichier | string | Nom du fichier généré, extension de fichier incluse |
| document | string(byte) | Image binaire du fichier généré, encodée en base64. *<font size="1" data-tomark-pass=""> Pour les formats Sage MAESTRIA v11, v12, v13 et v18, la valeur du N° de pièce renseignée sur écran n'est pas récupérée.<br></font>* |

## Requête

```
{
  "guidTache": "string"
}
```

## Réponse

```
{
  "fichiers": [
    {
      "nomFichier": "string",
      "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    },
    {
      "nomFichier": "string",
      "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    }
  ],
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
