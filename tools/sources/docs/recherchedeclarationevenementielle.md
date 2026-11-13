---
title: "RechercheDeclarationEvenementielle"
slug: "recherchedeclarationevenementielle"
updated: 2024-06-17T03:43:00Z
published: 2024-06-17T03:43:00Z
canonical: "silae-api.document360.io/recherchedeclarationevenementielle"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RechercheDeclarationEvenementielle

## Fonction API

```
/v1/InfosDeclaration/RechercheDeclarationEvenementielle
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer des informations sur les DSN évènementielles du dossier

## Groupe de fonctions API

DATA004

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| etatDeclaration | integer(int32) | Permet de filtrer les déclarations pour ne remonter que celles qui sont dans un état spécifique : \| État de la déclaration \| Valeur correspondante \| \| --- \| --- \| \| Inconnu \| 0 \| \| À envoyer, attestation non faite \| 1 \| \| À envoyer, attestation prête \| 2 \| \| Rejetée \| 3 \| \| Acceptée \| 4 \| \| En attente \| 5 \| \| Tout (permet de récupérer toutes les DSN sans tenir compte de l'état) \| 6 \| |
| État de la déclaration | Valeur correspondante |
| Inconnu | 0 |
| À envoyer, attestation non faite | 1 |
| À envoyer, attestation prête | 2 |
| Rejetée | 3 |
| Acceptée | 4 |
| En attente | 5 |
| Tout (permet de récupérer toutes les DSN sans tenir compte de l'état) | 6 |
| periode | string(date) | Période sur laquelle rechercher les DSN *La date doit être au format AAAA-MM-JJ* |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeDeclarationEvenementielle | DeclarationEvenementielle[] | Liste d'éléments structurés contenant les informations des DSN évènementielles (cf. détail ci-dessous) |

### DeclarationEvenementielle

| Paramètre | Type | Description |
| --- | --- | --- |
| typeDeclaration | string | Type de déclaration |
| etatDeclaration | integer(int32) | État de la déclaration : \| État de la déclaration \| Valeur correspondante \| \| --- \| --- \| \| Inconnu \| 0 \| \| À envoyer, attestation non faite \| 1 \| \| À envoyer, attestation prête \| 2 \| \| Rejetée \| 3 \| \| Acceptée \| 4 \| \| En attente \| 5 \| \| Tout (permet de récupérer toutes les DSN sans tenir compte de l'état) \| 6 \| |
| État de la déclaration | Valeur correspondante |
| Inconnu | 0 |
| À envoyer, attestation non faite | 1 |
| À envoyer, attestation prête | 2 |
| Rejetée | 3 |
| Acceptée | 4 |
| En attente | 5 |
| Tout (permet de récupérer toutes les DSN sans tenir compte de l'état) | 6 |
| etatEnvoi | integer(int32) | État de l'envoi : \| État de l'envoi \| Valeur correspondante \| \| --- \| --- \| \| Inconnu \| 0 \| \| Envoyée \| 1 \| \| En erreur \| 2 \| |
| État de l'envoi | Valeur correspondante |
| Inconnu | 0 |
| Envoyée | 1 |
| En erreur | 2 |
| libelleEtat | string | Libellé de l'état |
| matricule | string | Matricule du salarié concerné |
| nomSalarie | string | Nom du salarié concerné |
| dateDebut | string(date-time) | Date de début d el'évènement |
| dateFin | string(date-time) | Date de fin de l'évènement |
| codeAbsence | string | Code absence (cf. détail directement dans Silae) |
| libelleAbsence | string | Libellé de l'absence |

## Requête

```
{
  "etatDeclaration": 0,
  "periode": "2020-10-14",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "listeDeclarationEvenementielle": [
    {
      "typeDeclaration": "string",
      "etatDeclaration": 0,
      "etatEnvoi": 0,
      "libelleEtat": "string",
      "matricule": "string",
      "nomSalarie": "string",
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "codeAbsence": "string",
      "libelleAbsence": "string"
    },
    {
      "typeDeclaration": "string",
      "etatDeclaration": 0,
      "etatEnvoi": 0,
      "libelleEtat": "string",
      "matricule": "string",
      "nomSalarie": "string",
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "codeAbsence": "string",
      "libelleAbsence": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
