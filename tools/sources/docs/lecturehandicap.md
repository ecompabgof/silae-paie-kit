---
title: "LectureHandicap"
slug: "lecturehandicap"
updated: 2026-03-30T09:08:06Z
published: 2026-03-30T09:08:06Z
canonical: "silae-api.document360.io/lecturehandicap"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureHandicap

## Fonction API

```
/v1/InfosSalaries/LectureHandicap
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations sur le handicap d'un salarié

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
| salarieHandicape | boolean | Permet de savoir si le salarié est un travailleur handicapé (**true**) ou non (**false**) |
| handicap | Handicap[] | Liste d'éléments structurés contenant les informations liées au handicap du salarié (cf. détail ci-dessous) |

### Handicap

| Paramètre | Type | Description |
| --- | --- | --- |
| cdapH_RQTH | boolean | Permet de savoir si le salarié a la RSTH de la part de la CDAPH (**true**) ou non (**false**) |
| cdapH_AAH | boolean | Permet de savoir si le salarié a droits aux AAH (**true**) ou non (**false**) |
| cdapH_CarteInvalidite | boolean | Permet de savoir si le salarié a une carte invalidité (**true**) ou non (**false**) |
| cdapH_DateDebut | string(date-time) | Date de début de validité |
| cdapH_DateFin | string(date-time) | Date de fin de validité |
| cdapH_DtDepotRenouvellement | string(date-time) | Date de dépôt de la demande de renouvellement |
| cdapH_TauxIncapacite | number(double) | Taux d'incapacité du salarié |
| accident_Nature | integer(int32) | Permet d'indiquer si le salarié a été victime d'accident du travail, de maladie professionnelle ou est invalide pensionné : \| Type d'invalidité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Accident du travail/Maladie Professionnelle \| 1 \| \| Invalide pensionné \| 2 \| |
| Type d'invalidité | Valeur correspondante |
| Vide | 0 |
| Accident du travail/Maladie Professionnelle | 1 |
| Invalide pensionné | 2 |
| accident_DateDebut | string(date-time) | Date de début de validité |
| accident_TauxIPP | number(double) | Taux d'IPP |
| accident_CategoriePension | integer(int32) | Catégorie de la pension : \| Catégorie de la pension \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Première catégorie \| 1 \| \| Deuxième catégorie \| 2 \| \| Troisième catégorie \| 3 \| |
| Catégorie de la pension | Valeur correspondante |
| Vide | 0 |
| Première catégorie | 1 |
| Deuxième catégorie | 2 |
| Troisième catégorie | 3 |
| autre_Categorie | integer(int32) | Autre catégorie de handicap: \| Autre catégorie de handicap \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Mutilé de guerre \| 1 \| \| Assimilé mutilé de guerre \| 2 \| \| Titulaire d'une allocation ou d'une rente d'invalidité (Loi n°91-1389 du 31/12/1991) \| 3 \| \| Bénéficiaire article L.241-2 du CPMIVG \| 4 \| \| Bénéficiaire article L.241-3 et L.241-4 du CPMIVG \| 5 \| \| Bénéficiaire article L.241-5 et L.241-6 du CPMIVG \| 6 \| \| Agent public reclassé (3ème alinéa article L.323-5 du CT) \| 7 \| \| Agent public bénéficiaire d'une allocation temporaire d'invalidité (4ème alinéa de l'article L.323-5 du CT) \| 8 \| \| Ayant droit aux prestations prévues par l'article L5212-7 du CT \| 9 \| |
| Autre catégorie de handicap | Valeur correspondante |
| Vide | 0 |
| Mutilé de guerre | 1 |
| Assimilé mutilé de guerre | 2 |
| Titulaire d'une allocation ou d'une rente d'invalidité (Loi n°91-1389 du 31/12/1991) | 3 |
| Bénéficiaire article L.241-2 du CPMIVG | 4 |
| Bénéficiaire article L.241-3 et L.241-4 du CPMIVG | 5 |
| Bénéficiaire article L.241-5 et L.241-6 du CPMIVG | 6 |
| Agent public reclassé (3ème alinéa article L.323-5 du CT) | 7 |
| Agent public bénéficiaire d'une allocation temporaire d'invalidité (4ème alinéa de l'article L.323-5 du CT) | 8 |
| Ayant droit aux prestations prévues par l'article L5212-7 du CT | 9 |
| autre_DateDebut | string(date-time) | Date de début de pension |

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
  "salarieHandicape": true,
  "handicap": [
    {
      "cdapH_RQTH": true,
      "cdapH_AAH": true,
      "cdapH_CarteInvalidite": true,
      "cdapH_DateDebut": "2020-10-14T21:46:24",
      "cdapH_DateFin": "2020-10-14T21:46:24",
      "cdapH_DtDepotRenouvellement": "2020-10-14T21:46:24",
      "cdapH_TauxIncapacite": 10.5,
      "accident_Nature": 0,
      "accident_DateDebut": "2020-10-14T21:46:24",
      "accident_TauxIPP": 10.5,
      "accident_CategoriePension": 0,
      "autre_Categorie": 0,
      "autre_DateDebut": "2020-10-14T21:46:24"
    },
    {
      "cdapH_RQTH": true,
      "cdapH_AAH": true,
      "cdapH_CarteInvalidite": true,
      "cdapH_DateDebut": "2020-10-14T21:46:24",
      "cdapH_DateFin": "2020-10-14T21:46:24",
      "cdapH_DtDepotRenouvellement": "2020-10-14T21:46:24",
      "cdapH_TauxIncapacite": 10.5,
      "accident_Nature": 0,
      "accident_DateDebut": "2020-10-14T21:46:24",
      "accident_TauxIPP": 10.5,
      "accident_CategoriePension": 0,
      "autre_Categorie": 0,
      "autre_DateDebut": "2020-10-14T21:46:24"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
