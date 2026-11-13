---
title: "RecupererFichiersEcrituresComptables"
slug: "recupererfichiersecriturescomptables"
updated: 2024-10-10T06:51:43Z
published: 2024-10-10T06:51:43Z
canonical: "silae-api.document360.io/recupererfichiersecriturescomptables"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererFichiersEcrituresComptables

## Fonction API

```
/v1/EcrituresComptables/RecupererFichiersEcrituresComptables
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer le ou les fichiers d'écritures comptables tel que paramétré dans l'écran de génération des fichiers séquentiels.

## Groupe de fonctions API

COMPT01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeDebut | string(date-time) | Date de début de la période à prendre en compte pour les écritures comptables |
| periodeFin | string(date-time) | Date de fin de la période à prendre en compte pour les écritures comptables |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| fichiers | EcrituresComptablesFichier[] | Liste d'éléments structurés représentant les fichiers générés (cf. détail ci-dessous) |

### EcrituresComptablesFichier

| Paramètre | Type | Description |
| --- | --- | --- |
| nomFichier | string | Nom du fichier généré, extension de fichier incluse |
| document | string(byte) | Image binaire du fichier généré, encodée en base64. *<font size="1" data-tomark-pass=""> Pour les formats Sage MAESTRIA v11, v12, v13 et v18, la valeur du N&#xB0; de pi&#xE8;ce renseign&#xE9;e sur &#xE9;cran n&apos;est pas r&#xE9;cup&#xE9;r&#xE9;e.<br></font>* |

## Requête

```
{
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "fichiers": [
    {
      "nomFichier": "string",
      "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    },
    {
      "nomFichier": "string",
      "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
