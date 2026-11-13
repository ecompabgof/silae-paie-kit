---
title: "ExistenceMatricule"
slug: "existencematricule"
updated: 2025-09-23T03:43:58Z
published: 2025-09-23T03:43:58Z
canonical: "silae-api.document360.io/existencematricule"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ExistenceMatricule

## Fonction API

```
/v1/InfosTechniquesDossiers/ExistenceMatricule
```

## Verbe HTTP

Post

          

## Description

          

Permet de savoir si un ou plusieurs matricules existent ou non dans le dossier.

---

**Points d'attention**

- Tous les paramètres de la requête sont optionnels.
- Il est nécessaire de renseigner au moins 1 paramètre sinon message d'erreur
- Tous les paramètres qui ont été renseignés, leurs valeurs respectives doivent toutes être conformes à celles renseignées dans la fiche Salarié. Dans le cas où une des valeurs ne correspond pas, aucun matricule salarié ne sera trouvé.

## Groupe de fonctions API

DATA005

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroSecuriteSociale | string | NIR complet (13 caractères et la clé) à vérifier |
| nomNaissance | string | Nom de naissance à vérifier |
| nomUsuel | string | Nom usuel à vérifier |
| mel | string | Adresse mail perso à vérifier |
| melPerso | string | Adresse mail pro à vérifier |
| matricule | string | Matricule à vérifier |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| existe | boolean | - **true** : le matricule existe dans le dossier - **false** : aucun matricule n'existe |
| matricules | string[] | Liste des matricules salariés correspondants aux critères demandés |

## Requête

```
{
  "numeroSecuriteSociale": "string",
  "nomNaissance": "string",
  "nomUsuel": "string",
  "mel": "string",
  "melPerso": "string",
  "matricule": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "existe": true,
  "matricules": [
    "string",
    "string"
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Aucun paramètre n'a été renseigné" | Il est nécessaire de renseigner au moins 1 paramètre de la requête |
