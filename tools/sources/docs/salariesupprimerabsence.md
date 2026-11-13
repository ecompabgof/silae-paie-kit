---
title: "SalarieSupprimerAbsence"
slug: "salariesupprimerabsence"
updated: 2025-04-01T13:01:40Z
published: 2025-04-01T13:01:40Z
canonical: "silae-api.document360.io/salariesupprimerabsence"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieSupprimerAbsence

## Fonction API

```
/v1/Absences/SalarieSupprimerAbsence
```

## Verbe HTTP

Post

          

## Description

          

Permet de supprimer l'absence d'un salarié. Cette absence est caractérisée par les paramètres :

- DateDebutAbsence
- DateFinAbsence
- CodeAbsence

Note : Une absence ne peut être supprimée si le bulletin est calculé.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebutAbsence | string(date-time) | Date de début de l'absence à supprimer |
| dateFinAbsence | string(date-time) | Date de fin de l'absence à supprimer |
| codeAbsence | string | CodeAbsence de l'absence à supprimer |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Requête

```
{
  "dateDebutAbsence": "2020-10-14T21:46:24",
  "dateFinAbsence": "2020-10-14T21:46:24",
  "codeAbsence": "string",
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Absence non trouvée" | Ce message apparait lorsque les paramètres de la requête ne correspond à aucune absence présente (date, code absence...) et dans le cas où elle ne peut être supprimée (bulletin calculé) |
