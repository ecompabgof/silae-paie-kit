---
title: "ModificationGrilleHoraireEtablissement"
slug: "modificationgrillehoraireetablissement"
updated: 2025-09-10T16:04:14Z
published: 2025-09-10T16:04:14Z
canonical: "silae-api.document360.io/modificationgrillehoraireetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationGrilleHoraireEtablissement

## Fonction API

```
/v1/FicheSociete/ModificationGrilleHoraireEtablissement
```

## Verbe HTTP

Post

          

## Description

          

Permet de modifier la grille horaire d'un établissement. Notes sur le fonctionnement de la fonction API :

- Il est possible de définir la grille horaire :
  - Soit en indiquant une grille horaire à utiliser (paramètre **bNomGrilleHoraire = true** et paramètre **NomGrilleHoraire** renseigné avec le nom d'une grille horaire existante)
  - Soit en renseignant les heures de la grille horaire (paramètre **bHeuresTravaillees = true** et les champs de la grille renseignés)
- Il est également possible de remettre les valeurs des heures travaillées et de nuit à 0 en mettant les paramètres **bNomGrilleHoraire** et **bHeuresTravaillees** à **false**
- Les heures sont définies et arrondies avec 4 décimales.
- Les totaux mensuels et pourcentages sont définis et arrondis avec 2 décimales.

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomEtablissement | string | Nom interne de l'établissement concerné |
| horaire | ModificationHoraireEtablissement | Élément structuré contenant les informations liées à la grille horaire de l'établissement (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ModificationHoraireEtablissement

| Paramètre | Type | Description |
| --- | --- | --- |
| bNomGrilleHoraire | boolean | Indique s'il faut prendre en compte la valeur du champ **nomGrilleHoraire** (**true**) ou non (**false**) |
| nomGrilleHoraire | string | Nom de la grille horaire à appliquer pour l'établissement |
| bHeuresTravaillees | boolean | Indique s'il faut prendre en compte la valeur des champs **heuresTravaillees** et **heuresDeNuit** (**true**) ou non (**false**) |
| heuresTravaillees | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures travaillées pour un jour de la semaine (indice 0 = Lundi) |
| heuresDeNuit | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures de nuit pour un jour de la semaine (indice 0 = Lundi). Attention ces heures sont incluses dans les heures travaillées |
| bHeuresPayees | boolean | Indique s'il faut prendre en compte la valeur des champs **heuresPayeesNormales** et **heuresPayeesMajorees** (**true**) ou non (**false**) |
| heuresPayeesNormales | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures payées pour un jour de la semaine (indice 0 = Lundi) |
| heuresPayeesMajorees | number[] | Tableau de 7 éléments, chaque élément représentant la valeur des heures payées majorées pour un jour de la semaine (indice 0 = Lundi) |
| bHeuresLibres1 | boolean | Indique s'il faut prendre en compte la valeur des champs **codeHeuresLibres1** et **heuresLibres1** (**true**) ou non (**false**) |
| codeHeuresLibres1 | string | Permet de définir quelles heures seront désignées par les heures libres 1. Les codes heures sont définies dans Silae |
| heuresLibres1 | number[] | Tableau de 7 éléments, chaque élément représentant la valeur les heures libres 1 pour un jour de la semaine (indice 0 = Lundi) |
| bHeuresLibres2 | boolean | Indique s'il faut prendre en compte la valeur des champs **codeHeuresLibres2** et **heuresLibres2** (**true**) ou non (**false**) |
| codeHeuresLibres2 | string | Permet de définir quelles heures seront désignées par les heures libres 2. Les codes heures sont définies dans Silae |
| heuresLibres2 | number[] | Tableau de 7 éléments, chaque élément représentant la valeur les heures libres 2 pour un jour de la semaine (indice 0 = Lundi) |
| bHeuresLibres3 | boolean | Indique s'il faut prendre en compte la valeur des champs **codeHeuresLibres3** et **heuresLibres3** (**true**) ou non (**false**) |
| codeHeuresLibres3 | string | Permet de définir quelles heures seront désignées par les heures libres 3. Les codes heures sont définies dans Silae |
| heuresLibres3 | number[] | Tableau de 7 éléments, chaque élément représentant la valeur les heures libres 3 pour un jour de la semaine (indice 0 = Lundi) |
| bTotalMensuelHeuresNormales | boolean | Indique s'il faut prendre en compte la valeur du champ **totalMensuelHeuresNormales** (**true**) ou non (**false**) |
| totalMensuelHeuresNormales | number(double) | Permet de modifier le total mensuel des heures normales, pour qu'il soit différent du total généré par Silae |
| bTotalMensuelHeuresMajorees | boolean | Indique s'il faut prendre en compte la valeur des champs **totalMensuelHeuresMajorees** et **pourcentageHeuresMajorees** (**true**) ou non (**false**) |
| totalMensuelHeuresMajorees | number(double) | Permet de modifier le total mensuel des heures majorées, pour qu'il soit différent du total généré par Silae |
| pourcentageHeuresMajorees | number(double) | Permet de modifier le pourcentage des heures majorées, pour qu'il soit différent du total généré par Silae. Nécessaire si on modifie le total mensuel des heures majorées |
| bTotalMensuelHeuresLibres1 | boolean | Indique s'il faut prendre en compte la valeur du champ **totalMensuelHeuresLibres1** (**true**) ou non (**false**) |
| totalMensuelHeuresLibres1 | number(double) | Permet de modifier le total mensuel des heures libres 1, pour qu'il soit différent du total généré par Silae |
| bTotalMensuelHeuresLibres2 | boolean | Indique s'il faut prendre en compte la valeur du champ **totalMensuelHeuresLibres2** (**true**) ou non (**false**) |
| totalMensuelHeuresLibres2 | number(double) | Permet de modifier le total mensuel des heures libres 2, pour qu'il soit différent du total généré par Silae |
| bTotalMensuelHeuresLibres3 | boolean | Indique s'il faut prendre en compte la valeur du champ **totalMensuelHeuresLibres3** (**true**) ou non (**false**) |
| totalMensuelHeuresLibres3 | number(double) | Permet de modifier le total mensuel des heures libres 3, pour qu'il soit différent du total généré par Silae |

## Requête

```
{
  "nomEtablissement": "string",
  "horaire": {
    "bNomGrilleHoraire": true,
    "nomGrilleHoraire": "string",
    "bHeuresTravaillees": true,
    "heuresTravaillees": [
      10.5,
      10.5
    ],
    "heuresDeNuit": [
      10.5,
      10.5
    ],
    "bHeuresPayees": true,
    "heuresPayeesNormales": [
      10.5,
      10.5
    ],
    "heuresPayeesMajorees": [
      10.5,
      10.5
    ],
    "bHeuresLibres1": true,
    "codeHeuresLibres1": "string",
    "heuresLibres1": [
      10.5,
      10.5
    ],
    "bHeuresLibres2": true,
    "codeHeuresLibres2": "string",
    "heuresLibres2": [
      10.5,
      10.5
    ],
    "bHeuresLibres3": true,
    "codeHeuresLibres3": "string",
    "heuresLibres3": [
      10.5,
      10.5
    ],
    "bTotalMensuelHeuresNormales": true,
    "totalMensuelHeuresNormales": 10.5,
    "bTotalMensuelHeuresMajorees": true,
    "totalMensuelHeuresMajorees": 10.5,
    "pourcentageHeuresMajorees": 10.5,
    "bTotalMensuelHeuresLibres1": true,
    "totalMensuelHeuresLibres1": 10.5,
    "bTotalMensuelHeuresLibres2": true,
    "totalMensuelHeuresLibres2": 10.5,
    "bTotalMensuelHeuresLibres3": true,
    "totalMensuelHeuresLibres3": 10.5
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
