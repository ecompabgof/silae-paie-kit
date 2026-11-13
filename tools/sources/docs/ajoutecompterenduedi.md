---
title: "AjouteCompteRenduEdi"
slug: "ajoutecompterenduedi"
updated: 2023-03-21T06:53:20Z
published: 2023-03-21T06:53:20Z
canonical: "silae-api.document360.io/ajoutecompterenduedi"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AjouteCompteRenduEdi

## Fonction API

```
/v1/CompteRenduDSN/AjouteCompteRenduEdi
```

## Verbe HTTP

Post

              

## Description

              

Permet d'ajouter un compte rendu EDI et le rattacher à une DSN. Chaque dépôt EDI est identifié par un numéro ADS. Les ACS et ARS qui s'y rapportent ont le même numéro d'ADS.

À noter, pour une intégration RCP, les paramètres doivent prendre la valeur suivante :

- ADSACSARS : "RCP"
- StatutDeclaration : "OK"
- StatutTelepaiement : rien
- TypeMessage : rien
- MessageTexte : le nom du fichier
- MessageBa : Tableau de Byte encodé en base64 avec le contenu du flux RCP.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroADS | string | Numéro de l'ADS |
| adsacsars | string | Peut valoir "ADS", "ACS" ou "ARS" |
| statutDeclaration | string | Peut valoir "OK", "KO", "ANO" |
| statutTelepaiement | string | Peut valoir "OK", "KO", "ANO" ou être vide |
| typeMessage | string | Type du message, peut être "TXT" ou "EML" |
| messageTexte | string | Le message en texte à transformer en EML si le paramètre MessageBa est null |
| messageBa | string(byte) | Tableau de Byte encodé en base64 représentant un flux EML explicatif du compte-rendu |

## Requête

```
{
  "numeroADS": "string",
  "adsacsars": "string",
  "statutDeclaration": "string",
  "statutTelepaiement": "string",
  "typeMessage": "string",
  "messageTexte": "string",
  "messageBa": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
