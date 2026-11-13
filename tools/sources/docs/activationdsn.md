---
title: "ActivationDSN"
slug: "activationdsn"
updated: 2023-05-19T05:54:21Z
published: 2023-05-19T05:54:21Z
canonical: "silae-api.document360.io/activationdsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ActivationDSN

## Fonction API

```
/v1/ConfigurationDSN/ActivationDSN
```

## Verbe HTTP

Post

          

## Description

          

Permet d'activer/désactiver la DSN dans un dossier. 3 dates peuvent être renseignées :

- Si les 3 dates sont à NULL, la DSN est désactivée
- Si seule la date de démarrage des DSN mensuelles est renseignée (les autres à NULL), la DSN est activée et les 2 autres dates sont renseignées automatiquement (+3 mois pour les arrêts de travail, +12 mois pour els fins de contrat)
- Si toutes les dates sont renseignées, elles sont prises en compte par l'application.  

À noter que pour les périodicité de paiement non mensuelles pour l'URSSAF, il est recommandé de choisir une date de démarrage en début de trimestre.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| activationDSN | ActivationDSN | Élément structuré contenant les informations sur les dates d'activation (cf. détail ci-dessous) |

### ActivationDSN

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| periodeDemarrageDsnMensuelle | string(date-time) | Période de démarrage de la DSN mensuelle |
| periodeDemarrageDsnArretDeTravail | string(date-time) | Période de démarrage de la DSN arrêt de travail |
| periodeDemarrageDsnFinDeContrat | string(date-time) | Période de démarrage de la DSN fin de contrat |

## Requête

```
{
  "activationDSN": {
    "numeroDossier": "string",
    "periodeDemarrageDsnMensuelle": "2020-10-14T21:46:24",
    "periodeDemarrageDsnArretDeTravail": "2020-10-14T21:46:24",
    "periodeDemarrageDsnFinDeContrat": "2020-10-14T21:46:24"
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
