---
title: "CreationQuestionnaireContratComplementaire"
slug: "creationquestionnairecontratcomplementaire"
updated: 2023-06-20T09:29:15Z
published: 2023-06-20T09:29:15Z
canonical: "silae-api.document360.io/creationquestionnairecontratcomplementaire"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationQuestionnaireContratComplementaire

## Fonction API

```
/v1/ContratComplementaire/CreationQuestionnaireContratComplementaire
```

## Verbe HTTP

Post

          

## Description

          

Permet de créer ou modifier un questionnaire de contrat complémentaire pour un dossier.

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| questionnaireContratComplementaire | QuestionnaireContratComplementaire | Elément structuré contenant les informations du questionnaire complémentaire (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### QuestionnaireContratComplementaire

| Paramètre | Type | Description |
| --- | --- | --- |
| code | string | Identifiant du contrat complémentaire configuré dans le dossier |
| libelle | string | Intitulé du questionnaire |
| listeChoix | LibelleValeurComplete[] | Liste d'éléments structurés représentant chacun un choix du questionnaire (cf. détail ci-dessous) |
| codeLibelleCotisation | string | Code cotisation du contrat complémentaire configuré dans le dossier |
| selectionSalarie | integer(int32) | Type de salarié concerné par ce contrat complémentaire (0= Tous, 1= Cadres, 2= Cadres et assimilés, 3= Non cadres, 4= Non cadres et non assimilés cadres) |
| action | integer(int32) | Cible de l'action du contrat complémentaire (0= Sur le taux, 1 = Sur la base) |

### LibelleValeurComplete

| Paramètre | Type | Description |
| --- | --- | --- |
| libelle | string | Intitulé du choix |
| valeur | integer(int32) | Valeur correspondant au choix |
| reference | string | Référence du choix |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| code | string | Identifiant du contrat complémentaire configuré dans le dossier |
| libelle | string | Intitulé du questionnaire |
| listeChoix | LibelleValeurComplete[] | Liste d'éléments structurés représentant chacun un choix du questionnaire (cf. détail ci-dessous) |
| codeLibelleCotisation | string | Code cotisation du contrat complémentaire configuré dans le dossier |
| selectionSalarie | integer(int32) | Type de salarié concerné par ce contrat complémentaire (0= Tous, 1= Cadres, 2= Cadres et assimilés, 3= Non cadres, 4= Non cadres et non assimilés cadres) |
| action | integer(int32) | Cible de l'action du contrat complémentaire (0= Sur le taux, 1 = Sur la base) |

### LibelleValeurComplete

| Paramètre | Type | Description |
| --- | --- | --- |
| libelle | string | Intitulé du choix |
| valeur | integer(int32) | Valeur correspondant au choix |
| reference | string | Référence du choix |

## Requête

```
{
  "questionnaireContratComplementaire": {
    "code": "string",
    "libelle": "string",
    "listeChoix": [
      {
        "libelle": "string",
        "valeur": 0,
        "reference": "string"
      },
      {
        "libelle": "string",
        "valeur": 0,
        "reference": "string"
      }
    ],
    "codeLibelleCotisation": "string",
    "selectionSalarie": 0,
    "action": 0
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "code": "string",
  "libelle": "string",
  "listeChoix": [
    {
      "libelle": "string",
      "valeur": 0,
      "reference": "string"
    },
    {
      "libelle": "string",
      "valeur": 0,
      "reference": "string"
    }
  ],
  "codeLibelleCotisation": "string",
  "selectionSalarie": 0,
  "action": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
