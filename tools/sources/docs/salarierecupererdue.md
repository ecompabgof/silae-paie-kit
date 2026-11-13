---
title: "SalarieRecupererDUE"
slug: "salarierecupererdue"
updated: 2023-05-19T10:04:29Z
published: 2023-05-19T10:04:29Z
canonical: "silae-api.document360.io/salarierecupererdue"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieRecupererDUE

## Fonction API

```
/v1/GenerationEnvoiDUE/SalarieRecupererDUE
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer la DUE générée pour un salarié

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Fichier DUE encodé en base64 |

## Requête

```
{
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
