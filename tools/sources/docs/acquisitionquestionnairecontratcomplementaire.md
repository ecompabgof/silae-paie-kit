---
title: "AcquisitionQuestionnaireContratComplementaire"
slug: "acquisitionquestionnairecontratcomplementaire"
updated: 2023-06-20T09:29:42Z
published: 2023-06-20T09:29:42Z
canonical: "silae-api.document360.io/acquisitionquestionnairecontratcomplementaire"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AcquisitionQuestionnaireContratComplementaire

## Fonction API

```
/v1/ContratComplementaire/AcquisitionQuestionnaireContratComplementaire
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les questionnaires complémentaires tels que configurés dans un dossier

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeStatutCategoriel | string | Statut catégoriel pour lequel récupérer le questionnaire : \| Statut Catégoriel \| Valeur correspondante \| \| --- \| --- \| \| Cadre et assimilé (article 4 et 4 bis) \| 01 \| \| Autre bénéficiaire AGIRC (article 36) \| 02 \| \| Non cadre \| 04 \| |
| Statut Catégoriel | Valeur correspondante |
| Cadre et assimilé (article 4 et 4 bis) | 01 |
| Autre bénéficiaire AGIRC (article 36) | 02 |
| Non cadre | 04 |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| qContratComplementaire | QuestionnaireContratComplementaire[] | Liste d'éléments structurés contenant les informations du questionnaire complémentaire (cf. détail ci-dessous) |

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

## Requête

```
{
  "codeStatutCategoriel": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "qContratComplementaire": [
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
    },
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
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
