---
title: "MatriculeSalarie"
slug: "matriculesalarie"
updated: 2025-10-13T08:47:50Z
published: 2025-10-13T08:47:50Z
canonical: "silae-api.document360.io/matriculesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# MatriculeSalarie

## Fonction API

```
/v1/InfosTechniquesDossiers/MatriculeSalarie
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer le matricule du salarié à partir de son matricule interne. Les champs correspondants dans la fiche salarié : ![SWS_MatriculeSalarie_ChampsMatricules](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/SWS_MatriculeSalarie_ChampsMatricules.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A19%3A17Z&se=2026-11-13T20%3A19%3A17Z&sr=c&sp=r&sig=6DONXAOhZfZ7dlzzt3LTmb1Zr7mqYQ%2BwvT8OlYI%2FbG8%3D)

## Groupe de fonctions API

DATA005

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeInterneSalarie | string | Matricule interne du salarié dont on cherche le matricule |
| numeroDossier | string | {{snippet.API_numerodossier}} |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |

## Requête

```
{
  "matriculeInterneSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "matriculeSalarie": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
