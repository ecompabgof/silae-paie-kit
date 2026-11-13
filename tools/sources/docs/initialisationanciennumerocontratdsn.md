---
title: "InitialisationAncienNumeroContratDSN"
slug: "initialisationanciennumerocontratdsn"
updated: 2023-03-21T06:53:41Z
published: 2023-03-21T06:53:41Z
canonical: "silae-api.document360.io/initialisationanciennumerocontratdsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# InitialisationAncienNumeroContratDSN

## Fonction API

```
/v1/ConfigurationDSN/InitialisationAncienNumeroContratDSN
```

## Verbe HTTP

Post

              

## Description

              

Permet de gérer le changement de numéro de contrat en DSN pour un salarié (Notamment pour gérer les cas de changement de logiciel de paie)

Ces informations seront prises en compte à la prochaine génération d'une DSN ou bien à la période de déclaration saisie.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| initAncienContratDSN | InitialisationAncienNumeroContratDSN | Élément structuré contenant les informations du salarié concerné (cf. détail ci-dessous) |

### InitialisationAncienNumeroContratDSN

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | {{snippet.API_numerodossier}} |
| matriculeSalarie | string | Matricule du salarié concerné |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| numeroContratDSN | string | Numéro de contrat DSN généré par l'ancien logiciel de paie |
| siretDOrigine | string | SIRET d'origine (pour la génération du bloc changement en DSN) |
| periodeDeclaration | string(date-time) | Période de la déclaration dans laquelle ce changement doit être pris en compte. Si ce paramètre n'est pas renseigné, les changements seront pris en compte dans la prochaine déclaration |

## Requête

```
{
  "initAncienContratDSN": {
    "numeroDossier": "string",
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "numeroContratDSN": "string",
    "siretDOrigine": "string",
    "periodeDeclaration": "2020-10-14T21:46:24"
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
