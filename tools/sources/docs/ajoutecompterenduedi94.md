---
title: "AjouteCompteRenduEdi94"
slug: "ajoutecompterenduedi94"
updated: 2023-03-21T06:53:24Z
published: 2023-03-21T06:53:24Z
canonical: "silae-api.document360.io/ajoutecompterenduedi94"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AjouteCompteRenduEdi94

## Fonction API

```
/v1/CompteRenduDSN/AjouteCompteRenduEdi94
```

## Verbe HTTP

Post

              

## Description

              

Permet d'ajouter un compte rendu métier CRM94 et le rattacher à une DSN. Chaque dépôt EDI est identifié par un numéro ADS. Les ACS et ARS qui s'y rapportent ont le même numéro d'ADS

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
| crm94NomFichier | string | Nom du fichier au format <datepubli data-tomark-pass=""><em><cte-dgfip data-tomark-pass=""></cte-dgfip></em><idflux data-tomark-pass=""><em>1_2</em><statut data-tomark-pass=""><em><pointdepot data-tomark-pass=""></pointdepot></em><idfichier data-tomark-pass=""><em><dateproduction data-tomark-pass=""></dateproduction></em><siret data-tomark-pass="">.xml <br data-tomark-pass="">avec : <ul data-tomark-pass=""><li data-tomark-pass="">DatePubli : Date de publication au format yyyy-MM-ddTHHmmss</li><li data-tomark-pass="">Cte-DGFIP : Constante DGFIP</li><li data-tomark-pass="">IdFlux : Identifiant du flux d&apos;origine. Donn&#xE9; par Net-Entreprises</li><li data-tomark-pass="">Statut : vaut &quot;OK&quot; ou &quot;KO&quot;. Donn&#xE9; par Net-Entreprises</li><li data-tomark-pass="">PointDepot : Point de d&#xE9;p&#xF4;t : vaut &quot;RG&quot; ou &quot;RA&quot;. Donn&#xE9; par Net-Entreprises</li><li data-tomark-pass="">IdFichier : Identifiant du fichier sur 10 caract&#xE8;res (compl&#xE9;t&#xE9; &#xE0; gauche par des 0 si besoin). Donn&#xE9; par Net-Entreprises</li><li data-tomark-pass="">DateProduction : Date de production au format yyyyMMddHHmmss</li><li data-tomark-pass="">SIRET : SIRET de l&apos;&#xE9;metteur</li></ul>Exemple : 2018-08-20T000346_DGFIP-WSftwvWBFAp6I6RUVlM0-IT-1-2-OK-RG-0000116632_20180818041016_55715006700972.xml</siret></idfichier></statut></idflux></datepubli> |
| crm94Xml | string(byte) | contenu du fichier CRM94 en XML encodé en base64 |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| nbSalariesPresentsXML | integer(int32) | Nombre de salariés présents dans le fichier CRM en XML |
| nbSalariesTrouves | integer(int32) | Nombre de salariés retrouvés |
| nbTauxSalariesCrees | integer(int32) | Nombre de taux salariés créés |
| nbTauxSalariesMisAJour | integer(int32) | Nombre de taux salariés mis à jour |

## Requête

```
{
  "numeroADS": "string",
  "adsacsars": "string",
  "statutDeclaration": "string",
  "statutTelepaiement": "string",
  "typeMessage": "string",
  "messageTexte": "string",
  "messageBa": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg==",
  "crm94NomFichier": "string",
  "crm94Xml": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Réponse

```
{
  "nbSalariesPresentsXML": 0,
  "nbSalariesTrouves": 0,
  "nbTauxSalariesCrees": 0,
  "nbTauxSalariesMisAJour": 0
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
