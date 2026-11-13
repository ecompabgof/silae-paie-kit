---
title: "SalarieAjouterHeuresNatives"
slug: "salarieajouterheuresnatives"
updated: 2025-08-11T07:50:54Z
published: 2025-08-11T07:50:54Z
canonical: "silae-api.document360.io/salarieajouterheuresnatives"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieAjouterHeuresNatives

## Fonction API

```
/v1/ActivitesEtHeures/SalarieAjouterHeuresNatives
```

## Verbe HTTP

Post

          

## Description

          

Permet d'ajouter des heures natives sur l'emploi actif du salarié. Les heures natives sont les heures avec les codes suivants :

- HN = heures normales
- HM = heures majorées
- HC = heures complémentaires
- HCNSTEPA = heures complémentaires non soumises à TEPA
- HS25 = heures supplémentaires à 25%
- HS50 = heures complémentaires à 50%
- HS100 = heures complémentaires à 100%

Attention : si la convention collective ou le dossier est paramétré avec des profils d'heures, seules les colonnes HN et HM seront visibles en saisie. Il convient alors de ne jamais appeler cette fonction avec d'autres codes que HN ou HM.

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
| codeHeures | string | Code Silae qui définit quel type d'heure rajouter. La liste des CodeHeures disponibles pour cette fonction est décrite dans la description |
| nombreHeures | number(double) | Nombre d'heure à sur la période |
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
