---
title: "LectureSaisieArret"
slug: "lecturesaisiearret"
updated: 2023-05-19T10:01:14Z
published: 2023-05-19T10:01:14Z
canonical: "silae-api.document360.io/lecturesaisiearret"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureSaisieArret

## Fonction API

```
/v1/InfosSalaries/LectureSaisieArret
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations liées aux saisies arrêts d'un salarié

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| matricule | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| saisieArrets | SaisieArret[] | Liste d'éléments structurés contenant les informations des saisies arrêts du salarié (cf.détail ci-dessous) |

### SaisieArret

| Paramètre | Type | Description |
| --- | --- | --- |
| reference | integer(int32) | Référence interne de la saisie, indiquée en fin de ligne dans l'interface Silae |
| demandeur | string | Demandeur |
| dateDemande | string(date-time) | Date de la demande au format YYYY-MM-DDT00:00:00 |
| montantCreance | number(double) | Montant de la créance |
| dateDebutPrelevement | string(date-time) | Mois de début de prélèvement au format YYYY-MM-01T00:00:00 (car c'est un mois qui est référencé). |
| type | integer(int32) | Type de saisie arrêt : \| Type de saisie arrêt \| Valeur correspondante \| \| --- \| --- \| \| Saisie sur rémunération \| 0 \| \| Pension alimentaire \| 10 \| \| Saisie à tiers détenteurs \| 20 \| \| Saisie attribution \| 30 \| |
| Type de saisie arrêt | Valeur correspondante |
| Saisie sur rémunération | 0 |
| Pension alimentaire | 10 |
| Saisie à tiers détenteurs | 20 |
| Saisie attribution | 30 |
| priorite | integer(int32) | Priorité. Plus le chiffre est bas, plus la priorité est haute |
| libelleBulletin | string | Libellé qui apparaît sur le bulletin |
| montantsDejaVerses | number(double) | Montants déjà versés |

## Requête

```
{
  "matricule": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "saisieArrets": [
    {
      "reference": 0,
      "demandeur": "string",
      "dateDemande": "2020-10-14T21:46:24",
      "montantCreance": 10.5,
      "dateDebutPrelevement": "2020-10-14T21:46:24",
      "type": 0,
      "priorite": 0,
      "libelleBulletin": "string",
      "montantsDejaVerses": 10.5
    },
    {
      "reference": 0,
      "demandeur": "string",
      "dateDemande": "2020-10-14T21:46:24",
      "montantCreance": 10.5,
      "dateDebutPrelevement": "2020-10-14T21:46:24",
      "type": 0,
      "priorite": 0,
      "libelleBulletin": "string",
      "montantsDejaVerses": 10.5
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
