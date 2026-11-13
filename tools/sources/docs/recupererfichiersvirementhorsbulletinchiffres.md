---
title: "RecupererFichiersVirementHorsBulletinChiffres"
slug: "recupererfichiersvirementhorsbulletinchiffres"
updated: 2025-04-28T08:47:30Z
published: 2025-04-28T08:47:30Z
canonical: "silae-api.document360.io/recupererfichiersvirementhorsbulletinchiffres"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererFichiersVirementHorsBulletinChiffres

## Fonction API

```
/v1/Paiements/RecupererFichiersVirementHorsBulletinChiffres
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer les fichiers de virements pour les salariés identifiés en paramètre de la requête et de renvoyer ces fichiers chiffrés. Plusieurs fichiers sont générés via l'appel à cette fonction :

- Le fichier de virement pour les salariés concernés.
- Les fichiers qui correpondent aux états de paiement qui accompagnent les fichiers de virement lors de la génération.  

Il est possible que des virements aient déjà été réalisés sur la période. Dans ce cas la méthode ne va utiliser que les matricules pour lesquel il est possible de générer des virements. Ces matricules seront contenus dans la propriété MatriculesInclus. Tous les matricules non inclus dans les fichiers de virements seront contenus dans la propriété MatriculeExclus.  

Cette fonction produit des résultats uniquement lorsque la génération des fichiers est bloquée dans la section « Configuration API » de la « Gestion Interne ».

## Groupe de fonctions API

PAIE002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| proprietesChiffrement | ProprietesChiffrement | Élément structuré contenant les propriétés de chiffrement avec lesquelles les fichiers seront chiffrés (cf. Détail ci-dessous) |
| libelleVirement | string | Libellé du virement. Ce paramètre peut être vide. Dans ce cas la fonction utilise le libellé de la précédente génération des fichiers de virements. **Complément sur LibelleVirement** La longueur du libellé pour les virements est de : - 31 caractères pour la norme ETEBAC - 140 caractères pour la norme SEPA Vous disposez de variables pour créer votre libellé : - %PERIODE : la période du bulletin correspondant au virement (ex: 01-2013) - %PERIODEL : la période du bulletin correspondant au virement en minuscules (ex: janvier 2013) - %PERIODELM : la période du bulletin correspondant au virement en majuscules (ex: JANVIER 2013) - %ETABLISSEMENT : la raison sociale de l'établissement sur lequel le bulletin a été fait - %MATRICULE : le matricule du salarié concerné par le virement |
| matriculeSalaries | string[] | Liste des matricules des salariés à inclure dans les fichiers de virements. Cette liste peut être vide. La fonction utilisera alors tous les salariés ayant un bulletin sur la période |
| periodeDebut | string(date-time) | A compléter |
| periodeFin | string(date-time) | A compléter |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### ProprietesChiffrement

| Paramètre | Type | Description |
| --- | --- | --- |
| cle | string | Clé publique à utiliser pour le chiffrement. Ce paramètre accepte le format binaire encodé en base64 ou le format texte commençant par la ligne "-----BEGIN PGP PUBLIC KEY BLOCK-----" |
| algorithmeSymetrique | string | Algorithme symétrique qui sera utilisé par la fonction pour chiffrer le contenu des fichiers générés. Les valeurs possibles sont : AES128, AES192, **AES256 (recommandé)** |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| bilanMatricules | BilanMatricules | Élément structuré contenant les informations des matricules pour lesquels les fichiers ont été générés (cf. détail ci-dessous). Alimenté si la requête a été exécutée avec succès |
| fichiersVirements | RecupererFichierVirementResult[] | Liste d'éléments structurés contenant les fichiers générés (cf. détail ci-dessous). Alimenté si la requête a été exécutée avec succès |

### BilanMatricules

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculesInclus | string[] | Liste des matricules pour lesquels les fichiers ont été générés |
| matriculesExclus | string[] | Liste des matricules pour lesquels les fichiers n'ont pas été généres (par exemple si le fichier de virement a déjà été généré pour ces salariés) |

### RecupererFichierVirementResult

| Paramètre | Type | Description |
| --- | --- | --- |
| fichier | string | Nom du fichier |
| contenu | string(byte) | Fichiers chiffrés selon les paramètres de la requête et encodés en base64 : 2 fichiers au format PDF 1 fichier au format XML |

## Requête

```
{
  "proprietesChiffrement": {
    "cle": "string",
    "algorithmeSymetrique": "string"
  },
  "libelleVirement": "string",
  "matriculeSalaries": [
    "string",
    "string"
  ],
  "periodeDebut": "2020-10-14T21:46:24",
  "periodeFin": "2020-10-14T21:46:24",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "bilanMatricules": {
    "matriculesInclus": [
      "string",
      "string"
    ],
    "matriculesExclus": [
      "string",
      "string"
    ]
  },
  "fichiersVirements": [
    {
      "fichier": "string",
      "contenu": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    },
    {
      "fichier": "string",
      "contenu": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
