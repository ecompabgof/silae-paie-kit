---
title: "LectureInformationsSalarie"
slug: "lectureinformationssalarie"
updated: 2026-03-30T09:07:30Z
published: 2026-03-31T06:02:18Z
canonical: "silae-api.document360.io/lectureinformationssalarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureInformationsSalarie

## Fonction API

```
/v1/InfosSalaries/LectureInformationsSalarie
```

## Verbe HTTP

Post

## Description

Permet d'obtenir les informations principales de la fiche Salarié et du dernier emploi occupé en cours ou archivé.

---

**Point d'attention** Cas d'un accès via fiche Contact avec accès partiel

- La fonction API est opérationnelle si la fonctionnalité **Fiches salariés restreintes** est cochée
- L'option ***Avec informations d'embauche*** cochée au niveau du droit **Fiches salariés restreintes** de la fiche Contact permet de valoriser les paramètres sur l'embauche.

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
| salarie | LectureInformationsSalarie | Liste d'éléments structurés contenant les informations liées aux données principales du salarié (cf. détail ci-dessous) |

### LectureInformationsSalarie

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| matriculeInterne | string | Matricule interne du salarié |
| civilite | integer(int32) | Civilité du salarié |
| sexe | integer(int32) | Sexe du salarié |
| nomNaissance | string | Nom de naissance du salarié |
| nomMarital | string | Nom marital du salarié |
| nomUsuel | string | Nom usuel du salarié |
| prenom | string | Prénom ce du salarié |
| numeroSecuriteSociale | string | N° de sécurité sociale du salarié |
| situationFamiliale | integer(int32) | Situation familiale |
| dateNaissance | string(date-time) | Date de naissance |
| anneeNaissance | integer(int32) | Année de naissance |
| departementNaissance | string | Département de naissance |
| communeNaissance | string | Commune de naissance |
| paysNaissanceISO | string | Code ISO du pays de naissance |
| paysNaissance | string | Pays de naissance |
| paysNationaliteISO | string | Code ISO du pays de nationalité |
| paysNationalite | string | Pays de nationalité |
| numVoie | string | N° de la voie |
| btqc | string | Indicateur de répétition (Bis, Ter…) |
| nomVoie | string | Nom de la voie |
| complementAdresse | string | Complément d'adresse |
| codePostal | string | Code postal |
| nomVille | string | Nom de la ville |
| frontalier | boolean | Salarié frontalier |
| communeINSEE | string | Code INSSE de la commune |
| commune | string | Nom de la commune |
| paysISO | string | Code ISO du pays |
| nomPays | string | Nom du pays |
| telDomicile | string | Numéro de téléphone domicile |
| telPortable | string | Numéro de téléphone portable |
| telBureau | string | Numéro de téléphone bureau |
| telPortablePro | string | Numéro de téléphone portable professionnel |
| melPerso | string | Adresse email personnel |
| mel | string | Adresse email professionnel |
| personneAContacterUrgenceNom | string | Nom de la personne à contacter en cas d'urgence |
| personneAContacterUrgencePrenom | string | Prénom de la personne à contacter en cas d'urgence |
| personneAContacterUrgenceTel | string | Numéro de téléphone de la personne à contacter en cas d'urgence |
| personneAContacterUrgenceMel | string | Email de la personne à contacter en cas d'urgence |
| enT_Code | string | Nature d'étude |
| enV_Code | string | Niveau d'étude |
| edP_Code | string | Diplôme |
| etudesInfosComplementaires | string | Informations complémentaires études |
| formationPlusEleve | string | Niveau de formation le plus élevé |
| diplomePrepare | string | Niveau de diplôme préparé |
| SituationAvantEmbauche | string | Situation Avant embauche |
| DureePeriodeEssai1 | integer(int32) | Durée Période 1 d'essai |
| DureePeriodeEssai2 | integer(int32) | Durée Période 2 d'essai |
| pointure | string | Taille poiture |
| tailleHaut | string | Taille haut |
| taillePantalon | string | Taille pantalon |
| tourDeTete | string | Taille tour de tête |
| tourDeCou | string | Taille tour du cou |
| titreSejourType | integer(int32) | Type de titre de séjour |
| titreSejourNumOrdre | string | Numéro d'ordre du titre de séjour |
| titreSejourDebut | string(date-time) | Date début titre séjour |
| titreSejourFin | string(date-time) | Date fin titre séjour |
| surveillanceMedRenforcee | boolean | Le salarié est sous surveillance médicale renforcée |
| emplois | LectureInformationsSalarieEmploi[] | Liste d'éléments structurés contenant les informations du dernier emploi du salarié (cf. détail ci-dessous) |
| numeroDossier | string | Nuémro de dossier |

### LectureInformationsSalarieEmploi

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi |
| dateDebut | string(date-time) | Date de début de l'emploi |
| dateDebutContrat | string(date-time) | Date de début de contrat |
| dateFin | string(date-time) | Date de fin de l'emploi |
| intituleEmploi | string | Intitulé de l'emploi |
| emploiArchive | boolean | Emploi est en cours (false) ou archivé (true) |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattaché l'emploi |

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
  "salarie": {
    "matriculeSalarie": "string",
    "matriculeInterne": "string",
    "civilite": 0,
    "sexe": 0,
    "nomNaissance": "string",
    "nomMarital": "string",
    "nomUsuel": "string",
    "prenom": "string",
    "numeroSecuriteSociale": "string",
    "situationFamiliale": 0,
    "dateNaissance": "2020-10-14T21:46:24",
    "anneeNaissance": 0,
    "departementNaissance": "string",
    "communeNaissance": "string",
    "paysNaissanceISO": "string",
    "paysNaissance": "string",
    "paysNationaliteISO": "string",
    "paysNationalite": "string",
    "numVoie": "string",
    "btqc": "string",
    "nomVoie": "string",
    "complementAdresse": "string",
    "codePostal": "string",
    "nomVille": "string",
    "frontalier": true,
    "communeINSEE": "string",
    "commune": "string",
    "paysISO": "string",
    "nomPays": "string",
    "telDomicile": "string",
    "telPortable": "string",
    "telBureau": "string",
    "telPortablePro": "string",
    "melPerso": "string",
    "mel": "string",
    "personneAContacterUrgenceNom": "string",
    "personneAContacterUrgencePrenom": "string",
    "personneAContacterUrgenceTel": "string",
    "personneAContacterUrgenceMel": "string",
    "enT_Code": "string",
    "enV_Code": "string",
    "edP_Code": "string",
    "etudesInfosComplementaires": "string",
    "formationPlusEleve": "string",
    "diplomePrepare": "string",
    "situationAvantEmbauche": "string",
    "dureePeriodeEssai1": "string",
    "dureePeriodeEssai2": "string",
    "pointure": "string",
    "tailleHaut": "string",
    "taillePantalon": "string",
    "tourDeTete": "string",
    "tourDeCou": "string",
    "titreSejourType": 0,
    "titreSejourNumOrdre": "string",
    "titreSejourDebut": "2020-10-14T21:46:24",
    "titreSejourFin": "2020-10-14T21:46:24",
    "surveillanceMedRenforcee": true,
    "emplois": [
      {
        "identifiantEmploi": 0,
        "dateDebut": "2020-10-14T21:46:24",
        "dateDebutContrat": "2020-10-14T21:46:24",
        "dateFin": "2020-10-14T21:46:24",
        "intituleEmploi": "string",
        "emploiArchive": true,
        "nomInterneEtablissement": "string"
      }
    ],
    "numeroDossier": "string"
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Vous n'avez pas l'autorisation de lire la fiche salarié de ce dossier" | Il est nécessaire de vérifier les droits d'accès définis sur l'Utilisateur Silae renseigné sur la configuration API dans laquelle le dossier de paie concerné a été ajouté, notamment si cet utilisateur correspond à une fiche Contact avec des droits restreints |
|  | "Aucun salarié ne correspond au matricule XXXXXXX" | le matricule indiqué n'existe pas dans le dossier de paie concerné |
