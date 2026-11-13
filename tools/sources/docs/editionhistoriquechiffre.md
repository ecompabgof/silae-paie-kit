---
title: "EditionHistoriqueChiffre"
slug: "editionhistoriquechiffre"
updated: 2025-05-06T04:14:05Z
published: 2025-05-06T04:14:05Z
canonical: "silae-api.document360.io/editionhistoriquechiffre"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionHistoriqueChiffre

## Fonction API

```
/v1/EditionHistoriques/EditionHistoriqueChiffre
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer et récupérer une édition historique configurée dans le dossier de manière chiffrée

Note : Seules les éditions avec l'export activé pourront être appelées par cette fonction (export.actif = true) : ![SWS_EditionHistorique_exportactif](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/SWS_EditionHistorique_exportactif.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A38%3A37Z&se=2026-11-13T20%3A38%3A37Z&sr=c&sp=r&sig=v06hDV1h8Cp5bJZTNV7T55EJbLBx2KUimzNsGKp1sZc%3D)

Plus d'informations sur les éditions historiques dans la base de connaissance Silae : "Editions historiques : Guide des fiches à consulter"

*Cette même fonction est proposée en mode asynchrone : [EditionHistoriqueChiffreAsynchrone](https://silae-api.document360.io/api-rest/docs/editionhistoriquechiffreasynchrone)*

## Groupe de fonctions API

PAIE002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| proprietesChiffrement | ProprietesChiffrement | Élément structuré contenant les propriétés de chiffrement avec lesquelles les fichiers seront chiffrés (cf. Détail ci-dessous) |
| codeEditionHistorique | string | Nom de l'édition historique à générer |
| motDePasse | string | Mot qui pourrait éventuellement protéger l'accès à l'édition historique |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition historique |
| periodeFin | string(date-time) | Date de début de la période pour laquelle générer l'édition historique |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ProprietesChiffrement

| Paramètre | Type | Description |
| --- | --- | --- |
| cle | string | Clé publique à utiliser pour le chiffrement. Ce paramètre accepte le format binaire encodé en base64 ou le format texte commençant par la ligne "-----BEGIN PGP PUBLIC KEY BLOCK-----" |
| algorithmeSymetrique | string | Algorithme symétrique qui sera utilisé par la fonction pour chiffrer le contenu des fichiers générés. Les valeurs possibles sont : AES128, AES192, **AES256 (recommandé)** |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Fichier de l'édition historique encodé en base64 |

## Requête

```
{
  "proprietesChiffrement": {
    "cle": "string",
    "algorithmeSymetrique": "string"
  },
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
