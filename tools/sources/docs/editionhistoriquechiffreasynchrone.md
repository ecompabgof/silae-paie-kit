---
title: "EditionHistoriqueChiffreAsynchrone"
slug: "editionhistoriquechiffreasynchrone"
updated: 2025-05-06T04:13:42Z
published: 2025-05-06T04:13:42Z
canonical: "silae-api.document360.io/editionhistoriquechiffreasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionHistoriqueChiffreAsynchrone

## Fonction API

```
/v1/EditionHistoriques/EditionHistoriqueChiffreAsynchrone
```

## Verbe HTTP

Post

          

## Description

          

Cette fonction est identique à [EditionHistoriqueChiffre](https://silae-api.document360.io/api-rest/docs/editionhistoriquechiffre), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEditionHistoriqueChiffreAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionhistoriquechiffreasynchrone)

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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEditionHistoriqueChiffreAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditionhistoriquechiffreasynchrone) pour obtenir le résultat |

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
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
