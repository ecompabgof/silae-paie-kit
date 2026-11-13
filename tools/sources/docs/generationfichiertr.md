---
title: "GenerationFichierTR"
slug: "generationfichiertr"
updated: 2024-06-17T03:47:45Z
published: 2024-06-17T03:47:45Z
canonical: "silae-api.document360.io/generationfichiertr"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# GenerationFichierTR

## Fonction API

```
/v1/EditionEtatsPaie/GenerationFichierTR
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer le fichier d'export des tickets restaurant au format spécifié en paramètre (Edenred, sodexo, etc...)

*Cet export s'effectue sur le même mode de fonctionnement que l'export automatique via le Robot de paie. Cela signifie que tout champ à saisir dans le formulaire de génération de fichier Ticket Restaurant ne sera pas pris en compte (ex: le champ Référence de la commande pour la configuration 'Edenred - Carnet de tickets').*

## Groupe de fonctions API

CYCLE01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeFonction | string | Code de la fonction de calcul correspondant au format de fichier de tickets restaurant à exporter ( ex : SCALC.CONF.GTR.0001) tel que visible dans les écrans de paramétrage des tickets restaurant (ex : Traitement mois > Ticket restaurant) |
| periode | string(date) | Période comptable pour laquelle générer le fichier. *La date doit être au format AAAA-MM-JJ* |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| nomFichier | string | Nom du fichier par défaut tel que paramétré dans l'écran de génération manuel |
| document | string(byte) | Fichier généré encodé en base64 |

## Requête

```
{
  "codeFonction": "string",
  "periode": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "nomFichier": "string",
  "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| GFTR001 | GFTR001 : Code fonction non décrit | Vous n'avez pas spécifié de codeFonction |
| GFTR002 | GFTR002 : Type de fonction de calcul de tickets restaurant erroné ou non présent pour ce client | Contrôlez le paramétrage des ticket restaurant sur le dossier spécifié. Le code demandé doit être paramétré sur le dossier concerné et doit corrrespondre |
| GFTR003 | GFTR003 : Vous n'avez pas l'autorisation d'accéder à cette fonction pour ce dossier | L'utilisateur configuré pour faire l'appel API n'a pas les droits sur cette fonction de calcul (vérifier notamment dans la fonction Relation client > Contacts) |
| GFTR004 | GFTR004 : Pas de fichier de ticket restaurant généré pour cette période | Les prérequis au calcul des tickets restaurants sur le mois demandé n'ont pas encore été atteints |
| GFTR005 | GFTR005 : Une erreur s'est produite à l'exécution de la fonction de calcul, veuillez vérifier le paramétrage : xxxxxx | Pour certains configurations, il est nécessaire de renseigner la **Référence client** pour permettre de générer le fichier (elle fait partie du nom de fichier généré) |
