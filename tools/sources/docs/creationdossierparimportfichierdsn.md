---
title: "CreationDossierParImportFichierDSN"
slug: "creationdossierparimportfichierdsn"
updated: 2023-05-19T06:01:48Z
published: 2023-05-19T06:01:48Z
canonical: "silae-api.document360.io/creationdossierparimportfichierdsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationDossierParImportFichierDSN

## Fonction API

```
/v1/CreationDossier/CreationDossierParImportFichierDSN
```

## Verbe HTTP

Post

          

## Description

          

Permet de créer un dossier via l'import d'un ou plusieurs fichiers DSN. Le fonctionnement est similaire à l'import DSN dans Silae, avec reconstitution de bulletins fictifs. Pour importer plusieurs fichiers DSN, il sera nécessaire de faire des appels successifs à cette fonction API. Il faudra indiquer dans chaque appel la période correspondant à l'import et s'il s'agit du dernier fichier à importer. La date de montage sera positionnée au mois suivant la date de fin de période d'import (paramètre PeriodeMax)

#### Règles à respecter pour l'import de plusieurs fichiers DSN

- Un seul fichier doit être transmis par appel (taille maximum approximative d'un fichier : 3Mo)
- Il est important d'attendre que le traitement d'un appel soit terminé avant de faire l'appel avec le fichier suivant
- Les fichiers doivent être envoyés par ordre chronologique de période déclarée (pour information, cette période déclarée est inscrite dans le fichier DSN à la rubrique S20.G00.05.005, au format : DDMMYYYY)
- Il est important de bien signaler le dernier fichier envoyé via le paramètre prévu à cet effet, car des traitements spécifiques sont déclenchés par ce biais

#### Déroulement de l'import DSN

1. La première phase est le contrôle de la validité du fichier DSN. Si une erreur est relevée, le champ **ErreurAnalyse** sera renseigné.
2. Recherche du dossier/établissement concerné par cet import DSN en utilisant le SIREN/SIRET indiqué dans la DSN.
3. Création du dossier/établissement en fonction des cas
4. Import du fichier DSN

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dsnEnByteArray | string(byte) | Fichier DSN sous forme de tableau de bytes, encodé en base64 |
| periodeMin | string(date-time) | Date de début de la période d'import |
| periodeMax | string(date-time) | Date de fin de la période d'import |
| dernierFichier | boolean | permet d'indiquer s'il s'agit du dernier fichier DSN à importer (true) ou non (false) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| existenceErreur | boolean | Vaudra **true** si une erreur, bloquante ou non, est détectée lors du processus |
| importDansDossier | boolean | Lors de la phase de recherche (**2**), si un unique dossier contenant le SIREN est trouvé, l'import se fera dans le dossier et ce paramètre vaudra true. À noter que si l'établissement référencé dans le fichier DSN n'existe pas dans le dossier, il sera créé |
| importDansDomaine | boolean | Lors de la phase de recherche (**2**), si aucun dossier contenant le SIREN n'a été trouvé, le dossier sera créé dans le domaine et ce paramètre vaudra **true** |
| importDansEtablissement | boolean | Lors de la phase de recherche (**2**), si un unique dossier contenant le SIREN est trouvé et que l'établissement référencé dans le fichier est trouvé également, l'import se fera dans le dossier et ce paramètre vaudra **true**. À noter qu'un contrôle est réalisé pour vérifier si une DSN mensuelle existe déjà dans le dossier. Si c'est le cas, le paramètre **DSNMensuelleExistante** vaudra **true** |
| dsnMensuelleExistante | boolean | Permet d'indiquer si une DSN mensuelle existe déjà dans le dossier pour l'établissement concerné pour la période de la DSN à importer |
| erreurAnalyse | string | vide si aucune erreur n'est détectée dans la phase de contrôle de validité du fichier DSN (**1**), sinon le message d'erreur |
| erreurImport | boolean | Vaudra **true** si une erreur non bloquante est détectée lors des phases **3** et **4** |
| erreurBlocanteImport | boolean | Vaudra **true** si une erreur bloquante est détectée lors des phases **3** et **4** |
| compteRendu | string[] | Liste toutes les erreurs rencontrées lors des phases **3** et **4**. Si le processus n'est pas allé jusqu'à la phase d'import, vaut **null** |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| nomInterneEtablissementPricipal | string | Correspond au nom interne de l'établissement principal trouvé/créé lors des phases **2** et **3** |
| nomInterneEtablissementDeclare | string | Correspond au nom interne de l'établissement trouvé/créé lors des phases **2** et **3** |

## Requête

```
{
  "dsnEnByteArray": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg==",
  "periodeMin": "2020-10-14T21:46:24",
  "periodeMax": "2020-10-14T21:46:24",
  "dernierFichier": true,
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "existenceErreur": true,
  "importDansDossier": true,
  "importDansDomaine": true,
  "importDansEtablissement": true,
  "dsnMensuelleExistante": true,
  "erreurAnalyse": "string",
  "erreurImport": true,
  "erreurBlocanteImport": true,
  "compteRendu": [
    "string",
    "string"
  ],
  "numeroDossier": "string",
  "nomInterneEtablissementPricipal": "string",
  "nomInterneEtablissementDeclare": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
