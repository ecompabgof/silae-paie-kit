---
title: "EditionDetailDesCotisationsAsynchrone"
slug: "editiondetaildescotisationsasynchrone"
updated: 2026-07-21T06:08:15Z
published: 2026-07-21T06:08:15Z
canonical: "silae-api.document360.io/editiondetaildescotisationsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# EditionDetailDesCotisationsAsynchrone

## Fonction API

```
/v1/EditionEtatsPaie/EditionDetailDesCotisationsAsynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [EditionDetailDesCotisations](https://silae-api.document360.io/api-rest/docs/editiondetaildescotisations), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutEditionDetailDesCotisationsAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditiondetaildescotisationsasynchrone)

## Groupe de fonctions API

CYCLE01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| detailSalaries | boolean | - True : avec le détail par salarié (valeur par défaut) - False : sans le détail par salarié |
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
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutEditionDetailDesCotisationsAsynchrone](https://silae-api.document360.io/api-rest/docs/statuteditiondetaildescotisationsasynchrone) pour obtenir le résultat |

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
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| 13 | "La plage des périodes doit être de 12 mois maximum" | la période ne peut dépasser 12 mois |
| 1000 | "GrouperPar : valeur incorrecte" | Les valeurs acceptées sont indiquées dans le paramètre concerné |
