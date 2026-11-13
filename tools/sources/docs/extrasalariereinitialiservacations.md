---
title: "ExtraSalarieReinitialiserVacations"
slug: "extrasalariereinitialiservacations"
updated: 2023-05-19T11:02:21Z
published: 2023-05-19T11:02:21Z
canonical: "silae-api.document360.io/extrasalariereinitialiservacations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ExtraSalarieReinitialiserVacations

## Fonction API

```
/v1/ModuleCTCD/ExtraSalarieReinitialiserVacations
```

## Verbe HTTP

Post

          

## Description

          

Permet de supprimer les vacations trouvées en fonction de critères de recherche

## Groupe de fonctions API

CTCD001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| categorie | string | Permet de déterminer sur quel module s'appuiera l'API pour la suppression de vacations. Peut valoir "HCR" ou "CTCD" |
| requeteExtraSalarieVacations | RequeteExtraSalarieVacations | Élément structuré contenant les critères de recherche des vacations à supprimer (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteExtraSalarieVacations

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié. Seul paramètre obligatoire, les autres permettant d'affiner la recherche des vacations à supprimer |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi pour lequel supprimer les vacations |
| verifierDisponibiliteEmploi | boolean | Pas utilisé pour la réinitialisation de vacations |
| periode | string(date-time) | Période de paie pour laquelle supprimer les vacations |
| nomInterneEtablissement | string | Nom interne de l'établissement pour lequel supprimer les vacations |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| vacationsReinitialisees | integer(int32) | Indique le nombre de vacations qui ont été supprimées |

## Requête

```
{
  "categorie": "string",
  "requeteExtraSalarieVacations": {
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "verifierDisponibiliteEmploi": true,
    "periode": "2020-10-14T21:46:24",
    "nomInterneEtablissement": "string"
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "vacationsReinitialisees": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
