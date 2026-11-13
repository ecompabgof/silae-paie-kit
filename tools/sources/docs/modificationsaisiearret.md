---
title: "ModificationSaisieArret"
slug: "modificationsaisiearret"
updated: 2026-02-24T13:17:50Z
published: 2026-02-24T13:17:50Z
canonical: "silae-api.document360.io/modificationsaisiearret"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationSaisieArret

## Fonction API

```
/v1/SalarieEmplois/ModificationSaisieArret
```

## Verbe HTTP

Post

          

## Description

          

Permet d'ajouter, modifier ou supprimer les informations liées aux saisies d'un salarié . Pour une bonne utilisation des saisies arrêts, il est important de bien renseigner le nombre de personnes à charge (Fonction [ModificationChampSalarie](https://silae-api.document360.io/api-rest/docs/modificationchampsalarie), pour modifier le champ SAL_NbPersACharge)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| saisieArrets | SaisieArret[] | Liste d'éléments structurés contenant les informations des saisies arrêts du salarié (cf.détail ci-dessous). Seules 5 saisies arrêts peuvent être enregistrées |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SaisieArret

| Paramètre | Type | Description |
| --- | --- | --- |
| reference | integer(int32) | Référence interne de la saisie, indiquée en fin de ligne dans l'interface Silae. Cette référence doit être unique (utilisée comme clé, notamment pour identifier la saisie arrêt lors de la modification) et a maximum 3 chiffres. |
| demandeur | string | Demandeur (30 caractères maximum) |
| dateDemande | string(date-time) | Date de la demande au format YYYY-MM-DDT00:00:00 |
| montantCreance | number(double) | Montant de la créance (7 entiers max, 2 décimales max). Ne peut pas être modifié lors d'une modification. Doit être mis à 0 pour la suppression de la saisie arrêt |
| dateDebutPrelevement | string(date-time) | Mois de début de prélèvement au format YYYY-MM-01T00:00:00 (car c'est un mois qui est référencé). Ne peut pas être modifiée lors d'une modification. Doit être mis à null pour la suppression de la saisie arrêt |
| type | integer(int32) | Type de saisie arrêt : \| Type de saisie arrêt \| Valeur correspondante \| \| --- \| --- \| \| Saisie sur rémunération \| 0 \| \| Pension alimentaire \| 10 \| \| Saisie à tiers détenteurs \| 20 \| \| Saisie attribution \| 30 \| |
| Type de saisie arrêt | Valeur correspondante |
| Saisie sur rémunération | 0 |
| Pension alimentaire | 10 |
| Saisie à tiers détenteurs | 20 |
| Saisie attribution | 30 |
| priorite | integer(int32) | Priorité. Plus le chiffre est bas, plus la priorité est haute |
| libelleBulletin | string | Libellé qui apparaît sur le bulletin (30 caractères maximum) |
| montantsDejaVerses | number(double) | Montants déjà versés (7 entiers max, 2 décimales max). Il est recommandé de ne pas modifier ce champ lors d'une modification |

## Requête

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
  ],
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
