---
title: "RecupererFichiersVirementHorsBulletin"
slug: "recupererfichiersvirementhorsbulletin"
updated: 2024-07-26T15:04:32Z
published: 2024-07-26T15:04:32Z
canonical: "silae-api.document360.io/recupererfichiersvirementhorsbulletin"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererFichiersVirementHorsBulletin

## Fonction API

```
/v1/Paiements/RecupererFichiersVirementHorsBulletin
```

## Verbe HTTP

Post

          

## Description

          

Permet de générer les fichiers de virements pour les salariés identifiés en paramètre de la requête. Il est possible que des virements aient déjà été réalisés sur la période. Dans ce cas la méthode ne va utiliser que les matricules pour lesquel il est possible de générer des virements. Ces matricules seront contenus dans la propriété MatriculesInclus. Tous les matricules non inclus dans les fichiers de virements seront contenus dans la propriété MatriculeExclus.

## Groupe de fonctions API

PAIE001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| libelleVirement | string | Libellé du virement. Ce paramètre peut être vide. Dans ce cas la fonction utilise le libellé de la précédente génération des fichiers de virements. **Complément sur LibelleVirement** La longueur du libellé pour les virements est de : - 31 caractères pour la norme ETEBAC - 140 caractères pour la norme SEPA Vous disposez de variables pour créer votre libellé : - %PERIODE : la période du bulletin correspondant au virement (ex: 01-2013) - %PERIODEL : la période du bulletin correspondant au virement en minuscules (ex: janvier 2013) - %PERIODELM : la période du bulletin correspondant au virement en majuscules (ex: JANVIER 2013) - %ETABLISSEMENT : la raison sociale de l'établissement sur lequel le bulletin a été fait - %MATRICULE : le matricule du salarié concerné par le virement |
| matriculeSalaries | string[] | Liste des matricules des salariés à inclure dans les fichiers de virements |
| periodeDebut | string(date-time) | Période de début de génération des fichiers de virements. Ce paramètre est obligatoire. *La date doit être au format AAAA-MM-JJ* |
| periodeFin | string(date-time) | Période de fin de génération des fichiers de virements. Ce paramètre est obligatoire |
| numeroDossier | string | Numéro du dossier concerné par la requête |

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
| contenu | string(byte) | Fichiers encodés en base 64 : 2 fichiers au format PDF 1 fichier au format XML |

## Requête

```
{
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
