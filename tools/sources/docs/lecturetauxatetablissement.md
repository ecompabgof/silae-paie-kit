---
title: "LectureTauxATEtablissement"
slug: "lecturetauxatetablissement"
updated: 2026-09-29T04:21:42Z
published: 2026-09-29T04:21:42Z
canonical: "silae-api.document360.io/lecturetauxatetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureTauxATEtablissement

## Fonction API

```
/v1/FicheSociete/LectureTauxATEtablissement
```

## Verbe HTTP

Post

## Description

Permet de récupérer les informations liées aux différents taux AT définis au niveau de l'établissement d'un dossier de paie.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement (obligatoire) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| tauxAccidentTravail | TauxAT[] | Liste d'éléments structurés contenant les informations sur les taux AT du dossier (cf. détail ci-dessous) |
| nomInterneEtablissement | string | Nom interne de l'établissement concerné |
| numeroDossier | string | Numéro de dossier concerné |

### TauxAT

| Paramètre | Type | Description |
| --- | --- | --- |
| dateEffet | string(date-time) | Date d'effet du taux AT |
| taux | number(double) | Valeur du taux AT |
| numeroADS | string | Correspond à l'identifiant du flux |
| dateModification | string(date-time) | Date et heure de modification |

## Requête

```
{
  "nomInterneEtablissement": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "tauxAccidentTravail": [
    {
      "dateEffet": "2020-10-14T21:46:24",
      "taux": 10.5,
      "numeroADS": "string",
      "dateModification": "2020-10-14T21:46:24"
    },
    {
      "dateEffet": "2020-10-14T21:46:24",
      "taux": 10.5,
      "numeroADS": "string",
      "dateModification": "2020-10-14T21:46:24"
    }
  ],
  "nomInterneEtablissement": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "NomInterneEtablissement non renseigné" | Le nom interne de l'établissement doit être renseigné |
