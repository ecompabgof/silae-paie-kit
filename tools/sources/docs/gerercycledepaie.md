---
title: "GererCycleDePaie"
slug: "gerercycledepaie"
updated: 2023-06-19T12:30:17Z
published: 2023-06-19T12:30:17Z
canonical: "silae-api.document360.io/gerercycledepaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# GererCycleDePaie

## Fonction API

```
/v1/AdminDossier/GererCycleDePaie
```

## Verbe HTTP

Post

          

## Description

          

Permet de configurer les tâches du cycle de paie d'un dossier

*Mode de fonctionnement : Lorsqu'aucune tâche n'est configurée, la tâche est ajoutée Lorsque des tâches sont configurées, la dernière tâche est remplacée*

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dossierTache | DossierTache | Élément structuré contenant les informations de la tâche à mettre à jour |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### DossierTache

| Paramètre | Type | Description |
| --- | --- | --- |
| nature | integer(int32) | Nature de la tâche du cycle de paie : \| Nature de la tâche \| Valeur correspondante \| \| --- \| --- \| \| Saisie des heures \| 100 \| \| Saisie des variables \| 110 \| \| Validation des éléments variables \| 120 \| \| Contrôle des bulletins \| 130 \| \| Bulletins originaux \| 200 \| \| Bulletins duplicatas \| 210 \| \| Écritures comptables \| 220 \| \| État des paiements \| 220 \| \| Éditions historiques \| 270 \| \| Éditions groupées \| 280 \| \| Éditions SCALC \| 290 \| |
| Nature de la tâche | Valeur correspondante |
| Saisie des heures | 100 |
| Saisie des variables | 110 |
| Validation des éléments variables | 120 |
| Contrôle des bulletins | 130 |
| Bulletins originaux | 200 |
| Bulletins duplicatas | 210 |
| Écritures comptables | 220 |
| État des paiements | 220 |
| Éditions historiques | 270 |
| Éditions groupées | 280 |
| Éditions SCALC | 290 |
| jour | integer(int32) | Date prévue pour la réalisation de la tâche |
| heure | integer(int32) | Heure prévue pour la réalisation de la tâche |
| minute | integer(int32) | Minutes de l'heure prévue pour la réalisation de la tâche |
| destinataire | string | Destinataire de la notification |
| aFaireParLeClient | boolean | Permet de définir si le travail est à faire par le client |
| optionBool1 | boolean | Les paramètres OptionXXXY permettent de définir la valeur des options spécifiques aux différentes tâches. OptionBool1 permet de définir la valeur du premier paramètre de configuration de type booléen s'il existe. Par exemple pour la tâche de nature 220 - écritures comptables, OptionBool1 permet de définir s'il faut joindre (**false**) ou non (**true**) l'édition PDF aux écritures comptables générées |
| optionBool2 | boolean | Permet de définir la valeur du deuxième paramètre de configuration de type booléen s'il existe |
| optionBool3 | boolean | Permet de définir la valeur du troisième paramètre de configuration de type booléen s'il existe |
| optionString1 | string | Permet de définir la valeur du premier paramètre de configuration de type string s'il existe |
| rappel1_Jour | integer(int32) | Jour de l'envoi de la notification pour le premier rappel |
| rappel1_Heure | integer(int32) | Heure d'envoi de la notification pour le premier rappel |
| rappel1_Minute | integer(int32) | Minutes de l'heure d'envoi de la notification pour le premier rappel |
| rappel1_Destinataire | string | Destinataire du premier rappel |
| rappel2_Jour | integer(int32) | Jour de l'envoi de la notification pour le deuxième rappel |
| rappel2_Heure | integer(int32) | Heure d'envoi de la notification pour le deuxième rappel |
| rappel2_Minute | integer(int32) | Minutes de l'heure d'envoi de la notification pour le deuxième rappel |
| rappel2_Destinataire | string | Destinataire du deuxième rappel |
| rappel3_Jour | integer(int32) | Jour de l'envoi de la notification pour le troisième rappel |
| rappel3_Heure | integer(int32) | Heure d'envoi de la notification pour le troisième rappel |
| rappel3_Minute | integer(int32) | Minutes de l'heure d'envoi de la notification pour le troisième rappel |
| rappel3_Destinataire | string | Destinataire du troisième rappel |
| rappel4_Jour | integer(int32) | Jour de l'envoi de la notification pour le quatrième rappel |
| rappel4_Heure | integer(int32) | Heure d'envoi de la notification pour le quatrième rappel |
| rappel4_Minute | integer(int32) | Minutes de l'heure d'envoi de la notification pour le quatrième rappel |
| rappel4_Destinataire | string | Destinataire du quatrième rappel |
| rappel5_Jour | integer(int32) | Jour de l'envoi de la notification pour le cinquième rappel |
| rappel5_Heure | integer(int32) | Heure d'envoi de la notification pour le cinquième rappel |
| rappel5_Minute | integer(int32) | Minutes de l'heure d'envoi de la notification pour le cinquième rappel |
| rappel5_Destinataire | string | Destinataire du cinquième rappel |
| supprimerTache | boolean | Permet de supprimer une tâche existante si la valeur est mise à **true**, devra valloir **false** sinon |
| nomServeur | string | Nom du serveur FTP/SFTP à utiliser pour les envois tel que défini dans l'écran de configuration des serveurs d'export (remplace le champ destinataire) si option activée |
| nomRepertoire | string | Chemin du répertoire de destination (surcharge optionnelle du paramétrage général) si option activée |

## Requête

```
{
  "dossierTache": {
    "nature": 0,
    "jour": 0,
    "heure": 0,
    "minute": 0,
    "destinataire": "string",
    "aFaireParLeClient": true,
    "optionBool1": true,
    "optionBool2": true,
    "optionBool3": true,
    "optionString1": "string",
    "rappel1_Jour": 0,
    "rappel1_Heure": 0,
    "rappel1_Minute": 0,
    "rappel1_Destinataire": "string",
    "rappel2_Jour": 0,
    "rappel2_Heure": 0,
    "rappel2_Minute": 0,
    "rappel2_Destinataire": "string",
    "rappel3_Jour": 0,
    "rappel3_Heure": 0,
    "rappel3_Minute": 0,
    "rappel3_Destinataire": "string",
    "rappel4_Jour": 0,
    "rappel4_Heure": 0,
    "rappel4_Minute": 0,
    "rappel4_Destinataire": "string",
    "rappel5_Jour": 0,
    "rappel5_Heure": 0,
    "rappel5_Minute": 0,
    "rappel5_Destinataire": "string",
    "supprimerTache": true,
    "nomServeur": "string",
    "nomRepertoire": "string"
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
