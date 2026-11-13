---
title: "RecupererFichiersVirement"
slug: "recupererfichiersvirement"
updated: 2024-08-23T08:05:54Z
published: 2024-08-23T08:05:54Z
canonical: "silae-api.document360.io/recupererfichiersvirement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererFichiersVirement

## Fonction API

```
/v1/Paiements/RecupererFichiersVirement
```

## Verbe HTTP

Post

              

## Description

              

Permet de générer les fichiers de virements pour les salariés identifiés en paramètre de la requête.

Plusieurs fichiers sont générés via l'appel à cette fonction :

- Le fichier de virement pour les salariés concernés.
- Les fichiers qui correspondent aux états de paiement qui accompagnent les fichiers de virement lors de la génération.

Dans le cas où les virements ont été déjà réalisés sur la période, seuls les salariés pour lesquels un virement est réalisable sont pris en compte. Ces matricules seront contenus dans la propriété MatriculesInclus. Tous les matricules non inclus dans les fichiers de virements seront contenus dans la propriété MatriculeExclus.

***Cette fonction API est opérationnelle lorsque la génération des fichiers de virements n'est pas bloquée : [Générer des fichiers de virements chiffrés via API](https://support.silae.fr/hc/fr/articles/16534759214610-G%C3%A9n%C3%A9rer-des-fichiers-de-virements-chiffr%C3%A9s-via-API#h_01HMY8WZYTMCGG0H4FGG2H6PCQ)***

## Groupe de fonctions API

PAIE001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dateValeur | string(date-time) | Date de valeur du virement |
| libelleVirement | string | Libellé du virement. Ce paramètre peut être vide. Dans ce cas la fonction utilise le libellé de la précédente génération des fichiers de virements. **Complément sur LibelleVirement** La longueur du libellé pour les virements est de : - 31 caractères pour la norme ETEBAC - 140 caractères pour la norme SEPA Vous disposez de variables pour créer votre libellé : - %PERIODE : la période du bulletin correspondant au virement (ex: 01-2013) - %PERIODEL : la période du bulletin correspondant au virement en minuscules (ex: janvier 2013) - %PERIODELM : la période du bulletin correspondant au virement en majuscules (ex: JANVIER 2013) - %ETABLISSEMENT : la raison sociale de l'établissement sur lequel le bulletin a été fait - %MATRICULE : le matricule du salarié concerné par le virement |
| matriculeSalaries | string[] | Liste des matricules des salariés à inclure dans les fichiers de virements. Cette liste peut être vide. La fonction utilisera alors tous les salariés ayant un bulletin sur la période |
| periode | string(date) | Période de génération des fichiers de virements. Ce paramètre est obligatoire. *La date doit être au format AAAA-MM-JJ* |
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
  "dateValeur": "2020-10-14T21:46:24",
  "libelleVirement": "string",
  "matriculeSalaries": [
    "string",
    "string"
  ],
  "periode": "2020-10-14",
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
| Error | "Impossible de récupérer des fichiers de virements non-chiffrés lorsque le chiffrement est activé" | L'option ***Bloquer la génération des fichiers de virements*** a été activée sur le dossier de paie (cf. [Générer des fichiers de virements chiffrés via API](https://support.silae.fr/hc/fr/articles/16534759214610-G%C3%A9n%C3%A9rer-des-fichiers-de-virements-chiffr%C3%A9s-via-API#h_01HMY8WZYTMCGG0H4FGG2H6PCQ) |
