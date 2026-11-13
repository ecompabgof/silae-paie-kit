---
title: "StatutCreationSalarieEmploisAsynchrone"
slug: "statutcreationsalarieemploisasynchrone"
updated: 2026-05-12T07:57:03Z
published: 2026-05-12T08:15:42Z
canonical: "silae-api.document360.io/statutcreationsalarieemploisasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutCreationSalarieEmploisAsynchrone

## Fonction API

```
/v1/SalarieEmplois/StatutCreationSalarieEmploisAsynchrone
```

## Verbe HTTP

Get

## Description

Cette fonction sert à récupérer le résultat de l'appel à [CreationSalarieEmploisAsynchrone](https://silae-api.document360.io/api-rest/docs/creationsalarieemploisasynchrone)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [CreationSalarieEmploisAsynchrone](https://silae-api.document360.io/api-rest/docs/creationsalarieemploisasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| resultatsCreationsEmplois | CreationSalarieEmploiResult[] | Élément structuré contenant les informations du salarié à créer ou modifier et de ses emplois |
| erreurNumero | integer(int32) | Code erreur |
| warning | string | Eventuel message d'alerte |
| matriculeSalarie | string | Matricule du salarié concerné |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### CreationSalarieEmploiResult

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi créé pour le salarié |
| error | string | Vide s'il n'y a pas d'erreur, sinon contient la description de l'erreur rencontrée |

## Requête

```
{
  "guidTache": "string"
}
```

## Réponse

```
{
  "resultatsCreationsEmplois": [
    {
      "identifiantEmploi": 0,
      "error": "string"
    },
    {
      "identifiantEmploi": 0,
      "error": "string"
    }
  ],
  "erreurNumero": 0,
  "warning": "string",
  "matriculeSalarie": "string",
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| "error": | "Erreur de paramétrage du pourcentage d'abattement pour l'emploi: 1" | les paramètres CodeSecteurDFS et pctAbattement ne peuvent être renseignés simultanément |
| "error": | "Erreur de paramétrage du pourcentage d'abattement pour l'emploi: 1" | les paramètres CodeSecteurDFS et pctAbattement ne peuvent être renseignés simultanément |
| "error": | "Le NIR n'est pas correct, veuillez vérifiez le NIR saisi." | Le NIR est incorrect |
| "error": | "La clé n'est pas correcte, veuillez vérifiez le NIR saisi" | La clé du NIR est incorrect |
| "error": | "La date de naissance n'est pas cohérente par rapport au NIR" | Incohérence entre date de naissance et le NIR |
| "error": | "L'année de naissance n'est pas cohérente par rapport au NIR" | Incohérence entre année de naissance et celle du NIR |
| "error": | "Le département de naissance n'est pas cohérent par rapport au NIR." | Incohérence entre département de naissance et celui du NIR |
| "error": | "Veuillez saisir une année de naissance valide. Exemple : 2001" | saisie année de naissance incorrecte |
| "error": | "Veuillez saisir le NIR ou la date de naissance ou à défaut l'année de naissance du salarié" | 1 des 3 éléments doit être renseigné |
| "warning": | "Ce NIR est déjà présent dans ce dossier pour un autre salarié Matricule Prénom Nom. Un NIR ne peut-être associé qu'à un seul salarié. Veuillez vérifier la cohérence des données saisies" | un NIR identique sur plusieurs fiches Salarié |
| "error": | "Vous devez indiquer un nom de naissance" | Le nom de naissance est une valeur obligatoire |
| "error": | "Le code statut régime protection sociale n'accepte que les valeurs 01 ou 04" | Les seules valeurs acceptées sont 01 (Cadre et assimilé) ou 04 (Non cadre) |
| "error": | "Erreur de paramétrage de FJNbJAn pour un emploi qui n'est pas au forfait jour : 1" | Le Code caractéristique de l'activité de l'emploi doit être renseigné avec la valeur 10 (Forfait jour) pour permettre de valoriser ce paramètre |
|  | "Erreur 16 lors de l'enregistrement du salarié *[N°Matricule]* : Nom établissement incorrect" | Le nom interne établissement n'existe pas |
|  | "Salarié modèle identique à celui à créer/mettre à jour" | Le matricule salarié et le matricule salarié modèle sont identiques et doivent être différents |
|  | "Le paramètre motifCDDExclusions ne peut pas être valorisé car la méthode 220 n'est pas activée" | Pour utiliser ce paramètre, il est nécessaire d'activer le Circuit dérogatoire pour les CDD d'Usage (CDDU-D) sur le dossier concerné. Modalité de déclaration activable via la méthode 220 |
|  | "L’option : Ne pas appliquer le circuit dérogatoire de fin de CDDU ne peut être prise en compte en l’absence de renseignement du motif de fin d’emploi." | Un motif de fin d'emploi (motifFinEmploi) doit être renseigné pour activer cette option |
