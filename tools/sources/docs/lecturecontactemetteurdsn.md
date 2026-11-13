---
title: "LectureContactEmetteurDSN"
slug: "lecturecontactemetteurdsn"
updated: 2023-10-01T05:40:31Z
published: 2023-10-01T05:40:32Z
canonical: "silae-api.document360.io/lecturecontactemetteurdsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureContactEmetteurDSN

## Fonction API

```
/v1/ConfigurationDSN/LectureContactEmetteurDSN
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les infos du contact émetteur DSN paramétré sur un numéro de dossier et le numero de siren de la société de rattachement (optionnel).

*Les informations résultent des règles de paramétrage et de fonctionnement mis en place dans Silae Paie.*

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| siren | string | Siren de la société de rattachée au dossier (optionnel, sur 9 caractères) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| emetteurDSN | LectureContactEmetteurDSN | Élément structuré contenant les informations sur l'émetteur DSN configuré (cf. détail ci-dessous) |

### LectureContactEmetteurDSN

| Paramètre | Type | Description |
| --- | --- | --- |
| siret | string | Numero de SIRET émetteur |
| nom | string | Nom du contact émetteur |
| prenom | string | Prénom du contact émetteur |
| mail | string | Adresse mail du contact émetteur |

## Requête

```
{
  "numeroDossier": "string",
  "siren": "string"
}
```

## Réponse

```
{
  "emetteurDSN": {
    "siret": "string",
    "nom": "string",
    "prenom": "string",
    "mail": "string"
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
