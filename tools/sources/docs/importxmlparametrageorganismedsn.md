---
title: "ImportXmlParametrageOrganismeDSN"
slug: "importxmlparametrageorganismedsn"
updated: 2023-03-21T06:53:36Z
published: 2023-03-21T06:53:36Z
canonical: "silae-api.document360.io/importxmlparametrageorganismedsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ImportXmlParametrageOrganismeDSN

## Fonction API

```
/v1/ConfigurationDSN/ImportXmlParametrageOrganismeDSN
```

## Verbe HTTP

Post

              

## Description

              

Permet d'importer une fiche de paramétrage organisme au format XML

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| xmlEnByteArray | string(byte) | Fiche de paramétrage organisme au format XML encodé en base64 |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| compteRendu | string | Compte rendu du traitement de l'opération |
| traitementGlobal | string | Détails sur le traitement réalisé |

## Requête

```
{
  "xmlEnByteArray": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Réponse

```
{
  "compteRendu": "string",
  "traitementGlobal": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
