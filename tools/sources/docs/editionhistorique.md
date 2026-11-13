---
title: "EditionHistorique"
slug: "editionhistorique"
updated: 2025-04-29T08:42:33Z
published: 2025-04-29T08:42:33Z
canonical: "silae-api.document360.io/editionhistorique"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionHistorique

## Fonction API

```
/v1/EditionHistoriques/EditionHistorique
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et récupérer une édition historique configurée dans le dossier

Note : Seules les éditions avec l'export activé pourront être appelées par cette fonction (export.actif = true) : ![SWS_EditionHistorique_exportactif](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/SWS_EditionHistorique_exportactif.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A25%3A44Z&se=2026-11-13T20%3A25%3A44Z&sr=c&sp=r&sig=9mpkXUEKayg04QPjAaqXmYY20IWFNVEDHacIzkxzNp0%3D)

Plus d'informations sur les éditions historiques dans la base de connaissance Silae : "Editions historiques : Guide des fiches à consulter"

*Cette même fonction est proposée en mode asynchrone : [EditionHistoriqueAsynchrone](https://silae-api.document360.io/api-rest/docs/editionhistoriqueasynchrone)*

## Groupe de fonctions API

DATA002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeEditionHistorique | string | Nom de l'édition historique à générer |
| motDePasse | string | Mot qui pourrait éventuellement protéger l'accès à l'édition historique |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition historique |
| periodeFin | string(date-time) | Date de début de la période pour laquelle générer l'édition historique |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Fichier de l'édition historique encodé en base64 |

## Requête

```
{
  "codeEditionHistorique": "string",
  "motDePasse": "string",
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
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
