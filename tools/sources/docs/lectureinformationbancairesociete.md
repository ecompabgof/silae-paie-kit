---
title: "LectureInformationBancaireSociete"
slug: "lectureinformationbancairesociete"
updated: 2023-05-19T09:48:45Z
published: 2023-05-19T09:48:45Z
canonical: "silae-api.document360.io/lectureinformationbancairesociete"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureInformationBancaireSociete

## Fonction API

```
/v1/FicheSociete/LectureInformationBancaireSociete
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les informations bancaires liées à un dossier

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| sepaModeComptabilisation | integer(int32) | Indique le mode de comptabilisation des opérations configuré dans le dossier : \| Mode de comptabilisation des opérations \| Valeur correspondante \| \| --- \| --- \| \| Par défaut \| 0 \| \| Comptabilisation par lot \| 1 \| \| Comptabilisation unitaire \| 2 \| |
| Mode de comptabilisation des opérations | Valeur correspondante |
| Par défaut | 0 |
| Comptabilisation par lot | 1 |
| Comptabilisation unitaire | 2 |
| informationBancaireSociete | InformationBancaireSociete[] | Liste d'éléments structurés contenant les informations bancaires de la société (cf. détail ci-dessous) |

### InformationBancaireSociete

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel sont rattachées les informations bancaires |
| rib | string | RIB du compte |
| formatFichiers | integer(int32) | Format du fichier bancaire: \| Format du fichier bancaire \| Valeur correspondante \| \| --- \| --- \| \| Sepa \| 0 \| \| Sepa 03 \| 3 \| \| Sepa 03 2.1 \| 4 \| \| Paymen \| 5 \| \| Etebac \| 2 \| \| CFonb 160c \| 6 \| \| International \| 7 \| |
| Format du fichier bancaire | Valeur correspondante |
| Sepa | 0 |
| Sepa 03 | 3 |
| Sepa 03 2.1 | 4 |
| Paymen | 5 |
| Etebac | 2 |
| CFonb 160c | 6 |
| International | 7 |
| iban | string | IBAN du compte |
| bic | string | BIC du compte |
| numeroEmetteur | string | Numéro émetteur du compte |

## Requête

```
{
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "sepaModeComptabilisation": 0,
  "informationBancaireSociete": [
    {
      "nomInterneEtablissement": "string",
      "rib": "string",
      "formatFichiers": 0,
      "iban": "string",
      "bic": "string",
      "numeroEmetteur": "string"
    },
    {
      "nomInterneEtablissement": "string",
      "rib": "string",
      "formatFichiers": 0,
      "iban": "string",
      "bic": "string",
      "numeroEmetteur": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
