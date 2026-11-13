---
title: "AffectationDossierPaieLecture"
slug: "affectationdossierpaielecture"
updated: 2024-09-03T06:57:51Z
published: 2024-09-03T06:57:51Z
canonical: "silae-api.document360.io/affectationdossierpaielecture"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AffectationDossierPaieLecture

## Fonction API

```
/v1/AdminCollaborateurs/AffectationDossierPaieLecture
```

## Verbe HTTP

Post

          

## Description

          

Permet de lire les affectations des collaborateurs à un dossier par type d'affectation. Il est possible dans chaque domaine d'avoir jusqu'à 9 types d'affectation différents (par exemple par défaut pour les experts comptables : Expert Comptable, Chef de mission, Collaborateur comptable, Collaborateur paie).

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| affectationDossier | string[] | Tableau de 9 chaînes de caractères qui représentent les 9 types d'affectation possibles. Chaque chaîne représente la liste des collaborateurs d'un type d'affectation, affectés au dossier. Cette chaîne est composée de la liste des codes Collaborateur séparés par des ';' et commence et termine par un ';'. Exemple : ";AA;ABE;CRT;BGT;" |
| codeAgence | string | Code agence du dossier |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "affectationDossier": [
    "string",
    "string"
  ],
  "codeAgence": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
