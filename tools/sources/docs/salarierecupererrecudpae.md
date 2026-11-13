---
title: "SalarieRecupererRecuDPAE"
slug: "salarierecupererrecudpae"
updated: 2026-02-23T06:40:24Z
published: 2026-02-24T06:30:02Z
canonical: "silae-api.document360.io/salarierecupererrecudpae"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieRecupererRecuDPAE

## Fonction API

```
/v1/GenerationEnvoiDUE/SalarieRecupererRecuDPAE
```

## Verbe HTTP

Post

## Description

Permet de récupérer le reçu de la DPAE pour un salarié renvoyé par l'organisme ayant traité la DPAE

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné |
| emploiArchive | string | Permet de récupérer la DPAE lorsque : - false : le salarié possède un emploi en cours (valeur par défaut) - true : le salarié ne possède pas d'emploi en cours (prend en compte les emplois archivés) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| recusDPAEParEmploi | RecupererRecuDPAEResult[] | Liste d'éléments structurés qui contiennent les reçus de DPAE par emploi (cf. détail ci-dessous) |

### RecupererRecuDPAEResult

| Paramètre | Type | Description |
| --- | --- | --- |
| idEmploi | integer(int32) | Identifiant interne de l'emploi correspondant |
| recuDPAE | string(byte) | Fichier pdf du reçu de la DPAE encodé en base64 |

## Requête

```
{
  "matriculeSalarie": "string",
  "emploiArchive": false,
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "recusDPAEParEmploi": [
    {
      "idEmploi": 0,
      "recuDPAE": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    },
    {
      "idEmploi": 0,
      "recuDPAE": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Aucun emploi actif pour le salarié 98000" | Le salarié désigné ne possède pas d'emploi en cours. Conseil : exécuter à nouveau la requête avec le paramètre ***emploiArchive*** à true |
