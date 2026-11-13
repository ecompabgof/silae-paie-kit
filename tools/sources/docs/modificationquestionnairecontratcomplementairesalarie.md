---
title: "ModificationQuestionnaireContratComplementaireSalarie"
slug: "modificationquestionnairecontratcomplementairesalarie"
updated: 2026-02-25T15:02:26Z
published: 2026-02-25T15:02:26Z
canonical: "silae-api.document360.io/modificationquestionnairecontratcomplementairesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationQuestionnaireContratComplementaireSalarie

## Fonction API

```
/v1/SalarieEmplois/ModificationQuestionnaireContratComplementaireSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les réponses aux questions relatives aux contrats complémentaires. Pour avoir les informations relatives aux contrats complémentaires configurés dans le dossier, il est recommandé de faire appel à la fonction [AcquisitionQuestionnaireContratComplementaire](https://silae-api.document360.io/preview/api-rest/fr/0df84686-27a4-4bcb-b34d-e3f8df2c8e0b/1)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| reponseQCComp | ModificationChampByte[] | Liste d'éléments structurés contenant les réponses aux questionnaires complémentaires (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ModificationChampByte

| Paramètre | Type | Description |
| --- | --- | --- |
| nomChamp | string | Intitulé du choix |
| valeurByte | integer(int32) | Valeur correspondant au choix. *Si la valeur ne correspond à aucun choix du contrat, Aucune option n'est cochée* |

## Requête

```
{
  "identifiantEmploi": 0,
  "reponseQCComp": [
    {
      "nomChamp": "string",
      "valeurByte": 0
    },
    {
      "nomChamp": "string",
      "valeurByte": 0
    }
  ],
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
