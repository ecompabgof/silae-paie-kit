---
title: "CreationDossierPaie"
slug: "creationdossierpaie"
updated: 2026-06-16T06:26:17Z
published: 2026-06-16T06:26:17Z
canonical: "silae-api.document360.io/creationdossierpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationDossierPaie

## Fonction API

```
/v1/CreationDossier/CreationDossierPaie
```

## Verbe HTTP

Post

## Description

Permet la création d'un dossier de paie, à partir d'un modèle ou uniquement à partir des informations fournies dans la requête. Si un numéro de dossier modèle est renseigné, les établissements seront créés avec les informations passées en paramètres de la requête. Pour les informations et configurations qui ne sont pas disponibles via l'API, ce sont les informations de l'établissement principal du dossier modèle qui seront utilisées pour tous les établissements créés, notamment les paramétrages (comme les primes, cotisations, contrats complémentaires, ...), les conventions collectives et les abattements spécifiques.

Rappel : Dans Silae, le numéro de dossier correspond à l'identifiant du dossier.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dossier | Dossier | Élément structuré contenant les informations du dossier à créer (cf. détail ci-dessous) |

### Dossier

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| numeroDossierModele | string | Numéro de dossier du dossier à utiliser comme modèle si on souhaite créer le dossier à partir d'un modèle |
| dateDebutMontage | string(date-time) | Date de début de montage |
| codeAgence | string | Code de l'agence à laquelle rattacher le dossier |
| longueurMatricule | integer(int32) | Permet de configurer la longueur qu'auront les matricules dans ce dossier |
| employeurCivilite | integer(int32) | Civilité de l'employeur : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| employeurNom | string | Nom de l'employeur signataire |
| employeurPrenom | string | Prénom de l'employeur signataire |
| employeurQualite | integer(int32) | Qualité de l'employeur signataire : \| Qualité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Chef d'entreprise \| 10 \| \| Gérant \| 20 \| \| Directeur \| 30 \| \| Chef du personnel \| 40 \| \| Comptable \| 50 \| \| Administrateur judiciaire \| 60 \| \| Mandataire liquidateur \| 70 \| \| Autre \| 90 \| |
| Qualité | Valeur correspondante |
| Vide | 0 |
| Chef d'entreprise | 10 |
| Gérant | 20 |
| Directeur | 30 |
| Chef du personnel | 40 |
| Comptable | 50 |
| Administrateur judiciaire | 60 |
| Mandataire liquidateur | 70 |
| Autre | 90 |
| employeurQualiteAutre | string | Si la qualité de l'employeur est "Autre", permet de renseigner l'information |
| groupe | string | Groupe auquel sera rattaché le dossier |
| numeroInterne | string | Numéro interne du dossier |
| miseADisposition | boolean | Le dossier est mis à disposition demandée ***Cette option ne peut être active si le dossier est déclaré interne (dossierInterne)*** |
| bMiseADisposition | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **miseADisposition** (**true**) ou pas (**false**) |
| dossierInterne | boolean | Le dossier est déclaré interne (équipement interne) ***Cette option ne peut être active si le dossier est déclaré mis à disposition (miseADisposition)*** |
| referenceFacturation | string | Permet d'indiquer la référence de facturation ***Caractères interdits : espace, caractères accentués et spéciaux :, " [ % . , : ;*** |
| etablissements | Etablissement[] | Élément structurécontenant les informations de chaque établissement du dossier. Il peut y avoir un ou plusieurs établissements, le premier sera considéré comme étant l'établissement principal. Dans la requête il est indispensable d'avoir au moins 1 établissement renseigné |

### Etablissement

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterne | string | Nom interne de l'établissement |
| raisonSociale | string | Raison Sociale |
| numVoie | string | Numéro de voie |
| btqc | string | Indicateur de répétition (BIS, TER, QUATER, QUINQUIES...) |
| nomVoie | string | Nom de la voie |
| complement | string | Complément d'adresse |
| codePostal | string | Code postal |
| nomVille | string | Nom de la ville |
| codeOfficielCommune | string | Code INSEE de la commune |
| commune | string | Nom de la commune |
| siret | string | SIRET de l'établissement |
| codeNaf | string | Code NAF de l'établissement |
| paysISO | string | Code ISO du pays |
| nomPays | string | Nom du pays |
| tel | string | Numéro de téléphone |
| fax | string | Numéro de fax |
| numeroAffiliationURSSAF | string | Numéro d'affiliation URSSAF, configuré dans Silae via la gestion des organismes. Si un numéro d'affiliation URSSAF est renseigné, alors un organisme sera automatiquement créé en fonction du code postal de l' établissement. Si aucun organisme ne correspond une erreur sera renvoyée |
| nbHeuresTravaillees | number[] | Permet de définir le nombre d'heures travaillées dans l'établissement. Le tableau doit toujours contenir sept valeurs : une pour chaque jour de la semaine (Lundi = 0) |
| nbHeuresDeNuitTravaillees | number[] | Permet de définir le nombre d'heures de nuit travaillées dans l'établissement. Le tableau doit toujours contenir sept valeurs : une pour chaque jour de la semaine (Lundi = 0) |
| bNbHeuresTravaillees | boolean | Indique si les tableaux de nombre d'heures travaillées doivent être pris en compte (true) ou non (false) |
| employeurCivilite | integer(int32) | Civilité de l'employeur : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| employeurNom | string | Nom de l'employeur signataire |
| employeurPrenom | string | Prénom de l'employeur signataire |
| employeurQualite | integer(int32) | Qualité de l'employeur signataire : \| Qualité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Chef d'entreprise \| 10 \| \| Gérant \| 20 \| \| Directeur \| 30 \| \| Chef du personnel \| 40 \| \| Comptable \| 50 \| \| Administrateur judiciaire \| 60 \| \| Mandataire liquidateur \| 70 \| \| Autre \| 90 \| |
| Qualité | Valeur correspondante |
| Vide | 0 |
| Chef d'entreprise | 10 |
| Gérant | 20 |
| Directeur | 30 |
| Chef du personnel | 40 |
| Comptable | 50 |
| Administrateur judiciaire | 60 |
| Mandataire liquidateur | 70 |
| Autre | 90 |
| employeurQualiteAutre | string | Si la qualité de l'employeur est "Autre", permet de renseigner l'information |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| nomsInternesEtablissements | string[] | Liste des noms internes des établissements créés dans le dossier |

## Requête

```
{
  "dossier": {
    "numeroDossier": "string",
    "numeroDossierModele": "string",
    "dateDebutMontage": "2020-10-14T21:46:24",
    "codeAgence": "string",
    "longueurMatricule": 0,
    "employeurCivilite": 0,
    "employeurNom": "string",
    "employeurPrenom": "string",
    "employeurQualite": 0,
    "employeurQualiteAutre": "string",
    "groupe": "string",
    "numeroInterne": "string",
    "miseADisposition": true,
    "bMiseADisposition": true,
    "dossierInterne": true,
    "referenceFacturation": "string",
    "etablissements": [
      {
        "nomInterne": "string",
        "raisonSociale": "string",
        "numVoie": "string",
        "btqc": "string",
        "nomVoie": "string",
        "complement": "string",
        "codePostal": "string",
        "nomVille": "string",
        "codeOfficielCommune": "string",
        "commune": "string",
        "siret": "string",
        "codeNaf": "string",
        "paysISO": "string",
        "nomPays": "string",
        "tel": "string",
        "fax": "string",
        "numeroAffiliationURSSAF": "string",
        "nbHeuresTravaillees": [
          10.5,
          10.5
        ],
        "nbHeuresDeNuitTravaillees": [
          10.5,
          10.5
        ],
        "bNbHeuresTravaillees": true,
        "employeurCivilite": 0,
        "employeurNom": "string",
        "employeurPrenom": "string",
        "employeurQualite": 0,
        "employeurQualiteAutre": "string"
      },
      {
        "nomInterne": "string",
        "raisonSociale": "string",
        "numVoie": "string",
        "btqc": "string",
        "nomVoie": "string",
        "complement": "string",
        "codePostal": "string",
        "nomVille": "string",
        "codeOfficielCommune": "string",
        "commune": "string",
        "siret": "string",
        "codeNaf": "string",
        "paysISO": "string",
        "nomPays": "string",
        "tel": "string",
        "fax": "string",
        "numeroAffiliationURSSAF": "string",
        "nbHeuresTravaillees": [
          10.5,
          10.5
        ],
        "nbHeuresDeNuitTravaillees": [
          10.5,
          10.5
        ],
        "bNbHeuresTravaillees": true,
        "employeurCivilite": 0,
        "employeurNom": "string",
        "employeurPrenom": "string",
        "employeurQualite": 0,
        "employeurQualiteAutre": "string"
      }
    ]
  }
}
```

## Réponse

```
{
  "nomsInternesEtablissements": [
    "string",
    "string"
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Le dossier XXXXXX existe déjà" | Le dossier existe déjà dans le domaine |
|  | "La référence de facturation contient des caractères interdits : xx" | Certains cartactères ne sont pas acceptés dans le paramètre **referenceFacturation**. xx représentent les caractères qui sont refusés |
|  | "Les options mise à disposition et dossier interne sont mutuellement exclusives" | Les options ***Dossier interne*** et ***Mise à disposition*** ne peuvent être activées simultanément |
