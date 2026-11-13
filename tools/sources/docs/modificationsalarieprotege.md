---
title: "ModificationSalarieProtege"
slug: "modificationsalarieprotege"
updated: 2023-05-19T10:46:10Z
published: 2023-05-19T10:46:10Z
canonical: "silae-api.document360.io/modificationsalarieprotege"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationSalarieProtege

## Fonction API

```
/v1/SalarieEmplois/ModificationSalarieProtege
```

## Verbe HTTP

Post

          

## Description

          

Permet d'ajouter, modifier ou supprimer les informations liées à la protection d'un salarié protégé.

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| salarieProtege | SalarieProtege[] | Liste d'éléments structurés contenant les informations liées à la protection du salarié (cf. détail ci-dessous). Laisser ce paramètre à null pour supprimer les informations de protection |
| matricule | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieProtege

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date-time) | Date de début de la protection |
| dateFin | string(date-time) | Date de fin de la protection |
| codeProtection | string | Motif de la protection : \| Motif de protection \| Valeur correspondante \| \| --- \| --- \| \| Délégué syndical \| 01 \| \| Délégué du personnel \| 02 \| \| Membre du comité d'entreprise (CE) \| 03 \| \| Représentant du personnel au Comité d'Hygiène, de Sécurité et des Conditions de Travail (CHSCT) \| 04 \| \| Conseiller prud'homal \| 05 \| \| Délégué du personnel au CSE \| 06 \| \| Autre motif \| 99 \| |
| Motif de protection | Valeur correspondante |
| Délégué syndical | 01 |
| Délégué du personnel | 02 |
| Membre du comité d'entreprise (CE) | 03 |
| Représentant du personnel au Comité d'Hygiène, de Sécurité et des Conditions de Travail (CHSCT) | 04 |
| Conseiller prud'homal | 05 |
| Délégué du personnel au CSE | 06 |
| Autre motif | 99 |

## Requête

```
{
  "salarieProtege": [
    {
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "codeProtection": "string"
    },
    {
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "codeProtection": "string"
    }
  ],
  "matricule": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
