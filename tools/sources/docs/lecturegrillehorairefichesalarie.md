---
title: "LectureGrilleHoraireFicheSalarie"
slug: "lecturegrillehorairefichesalarie"
updated: 2026-02-06T08:16:07Z
published: 2026-02-06T10:37:25Z
canonical: "silae-api.document360.io/lecturegrillehorairefichesalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureGrilleHoraireFicheSalarie

## Fonction API

```
/v1/SalarieEmplois/LectureGrilleHoraireFicheSalarie
```

## Verbe HTTP

Post

          

## Description

          

Permet de lire la grille horaire d'un salarié.

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi concerné |
| matriculeSalarie | string | Matricule du salarié |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| horaires | LectureHoraireSalarie | Élément structuré contenant les informations liées à la grille horaire du salarié (cf. détail ci-dessous) |

### LectureHoraireSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| nomGrilleHoraire | string | Nom de la grille horaire appliqué au salarié |
| heuresTravaillees | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures travaillées pour un jour de la semaine (indice 0 = Lundi) |
| heuresDeNuit | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures de nuit pour un jour de la semaine (indice 0 = Lundi). Attention ces heures sont incluses dans les heures travaillées |
| heuresPayeesNormales | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures payées pour un jour de la semaine (indice 0 = Lundi) |
| heuresPayeesMajorees | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures payées majorées pour un jour de la semaine (indice 0 = Lundi) |
| codeHeuresLibres1 | string | Code heure libre 1 |
| heuresLibres1 | number[] | Tableau de 7 éléments, chaque élément représentant la valeur les heures libres 1 pour un jour de la semaine (indice 0 = Lundi) |
| codeHeuresLibres2 | string | Code heure libre 2 |
| heuresLibres2 | number[] | Tableau de 7 éléments, chaque élément représentant la valeur les heures libres 2 pour un jour de la semaine (indice 0 = Lundi) |
| codeHeuresLibres3 | string | Code heure libre 3 |
| heuresLibres3 | number[] | Tableau de 7 éléments, chaque élément représentant la valeur les heures libres 3 pour un jour de la semaine (indice 0 = Lundi) |
| totalMensuelHeuresNormales | number(double) | Total mensuel des heures normales |
| totalMensuelHeuresMajorees | number(double) | Total mensuel des heures majorées |
| pourcentageHeuresMajorees | number(double) | Pourcentage des heures majorées |
| totalMensuelHeuresLibres1 | number(double) | Total mensuel des heures libres 1 |
| totalMensuelHeuresLibres2 | number(double) | Total mensuel des heures libres 2 |
| totalMensuelHeuresLibres3 | number(double) | Total mensuel des heures libres 3 |
| tauxHeuresLibres1 | number(double) | Taux des heures libres 1 |
| tauxHeuresLibres2 | number(double) | Taux des heures libres 2 |
| tauxHeuresLibres3 | number(double) | Taux des heures libres 3 |
| totHT | number(double) | Total des heures travaillées |
| totHTN | number(double) | Total des heures travaillées de nuit |
| totHN | number(double) | Total des heures normales |
| totHM | number(double) | Total des heures majorées |
| totHL1 | number(double) | Total des heures libres 1 |
| totHL2 | number(double) | Total des heures libres 2 |
| totHL3 | number(double) | Total des heures libres 3 |
| totHLun | number(double) | Total des heures le lundi |
| totHMar | number(double) | Total des heures le mardi |
| totHMer | number(double) | Total des heures le mercredi |
| totHJeu | number(double) | Total des heures le jeudi |
| totHVen | number(double) | Total des heures le vendredi |
| totHSam | number(double) | Total des heures le samedi |
| totHDim | number(double) | Total des heures le dimanche |
| nonSoumisHEta | boolean | indique si le salarié est soumis aux horaires par défaut de l'établissement : - **true** : l'option est décochée - **false** : l'option est cochée |
| gestionModulationHeures | boolean | Edition des heures réellement effectuées : - **true** : l'option est cochée - **false** : l'option est décochée |
| cotisRetraiteTpsPlein | boolean | Cotisations retraite à temps plein (champ disponible sous conditions) : - **true** : l'option est cochée - **false** : l'option est décochée |
| saisieManuelleHeuresAbsences | boolean | Saisie manuelle des heures d'absence : - **true** : l'option est cochée - **false** : l'option est décochée |

## Requête

```
{
  "identifiantEmploi": 0,
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "horaires": {
    "nomGrilleHoraire": "string",
    "heuresTravaillees": [
      10.5,
      10.5
    ],
    "heuresDeNuit": [
      10.5,
      10.5
    ],
    "heuresPayeesNormales": [
      10.5,
      10.5
    ],
    "heuresPayeesMajorees": [
      10.5,
      10.5
    ],
    "codeHeuresLibres1": "string",
    "heuresLibres1": [
      10.5,
      10.5
    ],
    "codeHeuresLibres2": "string",
    "heuresLibres2": [
      10.5,
      10.5
    ],
    "codeHeuresLibres3": "string",
    "heuresLibres3": [
      10.5,
      10.5
    ],
    "totalMensuelHeuresNormales": 10.5,
    "totalMensuelHeuresMajorees": 10.5,
    "pourcentageHeuresMajorees": 10.5,
    "totalMensuelHeuresLibres1": 10.5,
    "totalMensuelHeuresLibres2": 10.5,
    "totalMensuelHeuresLibres3": 10.5,
    "tauxHeuresLibres1": 10.5,
    "tauxHeuresLibres2": 10.5,
    "tauxHeuresLibres3": 10.5,
    "totHT": 10.5,
    "totHTN": 10.5,
    "totHN": 10.5,
    "totHM": 10.5,
    "totHL1": 10.5,
    "totHL2": 10.5,
    "totHL3": 10.5,
    "totHLun": 10.5,
    "totHMar": 10.5,
    "totHMer": 10.5,
    "totHJeu": 10.5,
    "totHVen": 10.5,
    "totHSam": 10.5,
    "totHDim": 10.5,
    "nonSoumisHEta": true,
    "gestionModulationHeures": true,
    "cotisRetraiteTpsPlein": true,
    "saisieManuelleHeuresAbsences": true
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Salarié au forfait jour : pas de grille horaire" | Le salarié interrogé est déclaré au forfait jour. pas de grille horaire |
