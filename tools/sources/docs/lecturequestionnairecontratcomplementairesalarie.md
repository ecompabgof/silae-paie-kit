---
title: "LectureQuestionnaireContratComplementaireSalarie"
slug: "lecturequestionnairecontratcomplementairesalarie"
updated: 2023-06-20T09:31:20Z
published: 2023-06-20T09:31:20Z
canonical: "silae-api.document360.io/lecturequestionnairecontratcomplementairesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureQuestionnaireContratComplementaireSalarie

## Fonction API

```
/v1/SalarieEmplois/LectureQuestionnaireContratComplementaireSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de lire les réponses d'un salarié à un questionnaire de contrat complémentaire.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | {{snippet.API_numerodossier}} |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| reponseQCComp | LectureChampLibelle[] | Liste d'éléments structurés contenant les réponses aux questionnaires complémentaires (cf. détail ci-dessous) |

### LectureChampLibelle

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Intitulé du choix |
| valeurByte | integer(int32) | Valeur correspondante au choix |
| libelle | string | Libellé correspondant au choix |

## Requête

```
{
  "identifiantEmploi": 0,
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "reponseQCComp": [
    {
      "nomChamp": "string",
      "valeurByte": 0,
      "libelle": "string"
    },
    {
      "nomChamp": "string",
      "valeurByte": 0,
      "libelle": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
