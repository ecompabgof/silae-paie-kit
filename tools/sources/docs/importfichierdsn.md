---
title: "ImportFichierDSN"
slug: "importfichierdsn"
updated: 2023-03-21T06:54:00Z
published: 2023-03-21T06:54:00Z
canonical: "silae-api.document360.io/importfichierdsn"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ImportFichierDSN

## Fonction API

```
/v1/CreationDossier/ImportFichierDSN
```

## Verbe HTTP

Post

              

## Description

              

Permet d'importer un fichier DSN dans un dossier de paie existant ou de créer un dossier de paie en se basant sur les informations de la DSN.

#### Déroulement de l'import DSN

1. La première phase est le contrôle de la validité du fichier DSN. Si une erreur est relevée, le champ **ErreurAnalyse** sera renseigné.
2. Recherche du dossier/établissement concerné par cet import DSN en utilisant le SIREN/SIRET indiqué dans la DSN).
3. Création du dossier/établissement en fonction des cas
4. Import du fichier DSN

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dsnEnByteArray | string(byte) | Le fichier DSN sous forme de tableau de bytes, encodé en base64 |
| numeroDossierSiCreation | string | Pour la création d'un dossier : Numéro du dossier de paie à créer. Pour l'import dans un dossier existant : Numéro du dossier dans lequel importer la DSN (paramètre indispensable si la DSN ne correspond à aucun SIRET connu |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| existenceErreur | boolean | Vaudra **true** si une erreur, bloquante ou non, est détectée lors du processus |
| importDansDossier | boolean | Lors de la phase de recherche (**2**), si un unique dossier contenant le SIREN est trouvé, l'import se fera dans le dossier et ce paramètre vaudra true. À noter que si l'établissement référencé dans le fichier DSN n'existe pas dans le dossier, il sera créé |
| importDansDomaine | boolean | Lors de la phase de recherche (**2**), si aucun dossier contenant le SIREN n'a été trouvé, le dossier sera créé dans le domaine avec comme numéro de dossier la valeur du paramètre **NumeroDossierSiCreation** et le paramètre **ImportDansDomaine** vaudra **true** |
| importDansEtablissement | boolean | Lors de la phase de recherche (**2**), si un unique dossier contenant le SIREN est trouvé et que l'établissement référencé dans le fichier est trouvé également, l'import se fera dans le dossier et ce paramètre vaudra **true**. À noter qu'un contrôle est réalisé pour vérifier si une DSN mensuelle existe déjà dans le dossier. Si c'est le cas, le paramètre **DSNMensuelleExistante** vaudra **true** |
| dsnMensuelleExistante | boolean | Permet d'indiquer si une DSN mensuelle existe déjà dans le dossier pour l'établissement concerné pour la période de la DSN à importer |
| erreurAnalyse | string | vide si aucune erreur n'est détectée dans la phase de contrôle de validité du fichier DSN (**1**), sinon le message d'erreur |
| erreurImport | boolean | Vaudra **true** si une erreur non bloquante est détectée lors des phases **3** et **4** |
| erreurBlocanteImport | boolean | Vaudra **true** si une erreur bloquante est détectée lors des phases **3** et **4** |
| compteRendu | string[] | Liste toutes les erreurs rencontrées lors des phases **3** et **4**. Si le processus n'est pas allé jusqu'à la phase d'import, vaut **null** |
| numeroDossier | string | {{snippet.API_numerodossier}} |
| nomInterneEtablissementPricipal | string | Correspond au nom interne de l'établissement principal trouvé/créé lors des phases **2** et **3** |
| nomInterneEtablissementDeclare | string | Correspond au nom interne de l'établissement trouvé/créé lors des phases **2** et **3** |

## Requête

```
{
  "dsnEnByteArray": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg==",
  "numeroDossierSiCreation": "string"
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
