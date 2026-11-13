---
title: "AffectationDossierPaie"
slug: "affectationdossierpaie"
updated: 2024-09-03T06:57:38Z
published: 2024-09-03T06:57:38Z
canonical: "silae-api.document360.io/affectationdossierpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AffectationDossierPaie

## Fonction API

```
/v1/AdminCollaborateurs/AffectationDossierPaie
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier les affectations des collaborateurs à un dossier, par type d'affectation. Il est possible dans chaque domaine d'avoir jusqu'à 9 types d'affectation différents (par exemple par défaut pour les experts comptables : Expert Comptable, Chef de mission, Collaborateur comptable, Collaborateur paie).

Il est recommandé de faire appel à la fonction [AffectationDossierPaieLecture](https://silae-api.document360.io/api-rest/docs/affectationdossierpaielecture) en amont de la modification, les chaînes vides écrasant les affectations existantes.

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| affectation | string[] | Tableau de 9 chaînes de caractères qui représentent les 9 types d'affectation possibles. Chaque chaîne représente la liste des collaborateurs d'un type d'affectation, à affecter au dossier. Cette chaîne doit être composée de la liste des codes Collaborateur séparés par des ';' et commence et termine par un ';'. Exemple : ";AA;ABE;CRT;BGT;". Notes : - Pour chaque type d'affectation, les collaborateurs renseignés doivent appartenir à ce type d'affectation - Une chaîne vide supprimera tous les collaborateurs affectés au dossier pour ce type d'affectation |
| codeAgence | string | Code agence du dossier (si omis, le code agence du dossier n'est pas modifié) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Requête

```
{
  "affectation": [
    "string",
    "string"
  ],
  "codeAgence": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
