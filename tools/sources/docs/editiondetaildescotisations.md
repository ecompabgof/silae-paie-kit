---
title: "EditionDetailDesCotisations"
slug: "editiondetaildescotisations"
updated: 2026-07-21T06:08:15Z
published: 2026-07-21T06:08:15Z
canonical: "silae-api.document360.io/editiondetaildescotisations"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionDetailDesCotisations

## Fonction API

```
/v1/EditionEtatsPaie/EditionDetailDesCotisations
```

## Verbe HTTP

Post

## Description

Permet de générer et récupérer l'édition Détail des cotisations. *Cette même fonction est proposée en mode asynchrone : [EditionDetailDesCotisationsAsynchrone](https://silae-api.document360.io/api-rest/docs/editiondetaildescotisationsasynchrone)*

## Groupe de fonctions API

CYCLE01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| detailSalaries | boolean | - True : avec le détail par salarié (valeur par défaut) - False : sans le détail par salarié (valeur par défaut) |
| axeAnalytique | string | Nom de l'axe analytique sur lequel l'édition sera générée ***Paramètre optionnel*** |
| grouperParOrganismes | boolean | - True : grouper par organisme - False : pas de regroupement (valeur par défaut) |
| grouperEnIgnorantLesCodesDucs | boolean | - True : grouper en ignorant les codes Ducs - False : pas de regroupement (valeur par défaut) |
| GrouperPar | string | 0 : sans groupement (valeur par défaut) 1 : mensuel 2 : trimestriel ***Valeurs acceptées : 0, 1, 2 ou par nom "sansgroupement", "mensuel", "trimestriel"*** |
| detailParnatureDeCotisation | boolean | - True : pas de détail par nature de cotisation - False : détail par nature de cotisation (valeur par défaut) |
| format | string | - "pdf" : édition générée au format PDF - "excel" : édition générée au format EXCEL - "excelXLSX" : édition générée au format XLSX (Excel) - Par défaut PDF : supprimer ce paramètre de la requête |
| periodeDebut | string(date-time) | Date de début de la période pour laquelle générer l'édition |
| periodeFin | string(date-time) | Date de fin de la période pour laquelle générer l'édition |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| document | string(byte) | Édition générée, encodée en base64 |

## Requête

```
{
  "detailSalaries": true,
  "axeAnalytique": "string",
  "grouperParOrganismes": true,
  "grouperEnIgnorantLesCodesDucs": true,
  "GrouperPar": "sansgroupement",
  "detailParnatureDeCotisation": true,
  "format": "string",
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "document": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 13 | "La plage des périodes doit être de 12 mois maximum" | la période ne peut dépasser 12 mois |
| 1000 | "GrouperPar : valeur incorrecte" | Les valeurs acceptées sont indiquées dans le paramètre concerné |
