---
title: "SalarieAjouterHeures"
slug: "salarieajouterheures"
updated: 2025-08-11T07:50:28Z
published: 2025-08-11T07:50:28Z
canonical: "silae-api.document360.io/salarieajouterheures"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterHeures

## Fonction API

```
/v1/ActivitesEtHeures/SalarieAjouterHeures
```

## Verbe HTTP

Post

          

## Description

          

Permet d'ajouter des heures sur l'emploi actif du salarié (sauf les heures natives qui sont gérées via la fonction [SalarieAjouterHeuresNatives](https://silae-api.document360.io/api-rest/docs/salarieajouterheuresnatives)). Les heures natives sont décrites dans la fiche de la fonction correspondante

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| heures | SalarieHeures | Élément structuré contenant les informations sur les heures à ajouter (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieHeures

| Paramètre | Type | Description |
| --- | --- | --- |
| periodeHeures | string(date-time) | Période de paie sur laquelle rajouter les heures |
| codeHeures | string | Code Silae qui définit quel type d'heure rajouter. La liste des CodeHeures disponibles peut varier en fonction de la configuration du dossier. Pour savoir quels types d'heure sont disponible, il est nécessaire de consulter l'aide et la configuration du dossier. |
| nombreHeures | number(double) | Nombre d'heure à ajouter sur la période |
| ajouter | boolean | Ce paramètre permet avec la valeur : - **true** : d'ajouter à la valeur existante le nombre d'heures indiqué dans le paramètre précédent - **false** : de remplacer la valeur existante par le nombre d'heures indiqué dans le paramètre précédent |

## Requête

```
{
  "heures": {
    "periodeHeures": "2020-10-14T21:46:24",
    "codeHeures": "string",
    "nombreHeures": 10.5,
    "ajouter": true
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
