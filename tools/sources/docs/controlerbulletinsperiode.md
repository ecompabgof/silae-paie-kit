---
title: "ControlerBulletinsPeriode"
slug: "controlerbulletinsperiode"
updated: 2026-06-09T06:56:40Z
published: 2026-06-09T06:56:40Z
canonical: "silae-api.document360.io/controlerbulletinsperiode"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ControlerBulletinsPeriode

## Fonction API

```
/v1/ControleBulletins/ControlerBulletinsPeriode
```

## Verbe HTTP

Post

## Description

Permet de contrôler les bulletins de paie d'un dossier ou d'un salarié

## Groupe de fonctions API

CYCLE01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periode | string(date-time) | Période de paie pour laquelle passer les bulletins au statut "Contrôlé" |
| matriculeSalarie | string | Matricule du salarié (paramètre optionnel) |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné (Paramètre optionnel) ***Ne pas renseigner si le matricule salarié n'est pas indiqué*** |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| nbBulletinsControles | integer(int32) | Indique le nombre de bulletins qui ont été contrôlés |

## Requête

```
{
  "periode": "2020-10-14T21:46:24",
  "matriculeSalarie": "string",
  "identifiantEmploi": 0,
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "nbBulletinsControles": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Aucun salarié trouvé pour ce dossier avec la matricule: XXXXXX" | Le matricule renseigné ne correspond à aucun salarié |
| --- | "Aucun emploi en cours ne correspond" | L'identifiant emploi indiqué ne correspond à aucune fiche emploi du salarié |
| --- | "Un identifiant emploi a été renseigné pour aucun matricule salarié désigné." | L'identifiant emploi ne peut être précisé si aucun matricule salarié n'a été renseigné |
