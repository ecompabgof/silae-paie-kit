---
title: "LectureFicheAgence"
slug: "lectureficheagence"
updated: 2023-06-20T09:27:23Z
published: 2023-06-20T09:27:23Z
canonical: "silae-api.document360.io/lectureficheagence"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureFicheAgence

## Fonction API

```
/v1/AdminAgences/LectureFicheAgence
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer certaines informations de l'agence.

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeAgence | string | Code de l'agence à lire |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| telBureau | string | Numéro de téléphone de l'agence |
| mel | string | Mail de l'agence |
| affectationExpediteurCollab | string | Intitulé du rôle recherché pour le nom de l'expéditeur des mails |
| ediMethode | string | Type de compte de télétransmission utilisé (JEDECLARE,ASPONE,FIDUCIAL,SOREGOR,NETENTREPRISES, AGENCE_PRINCIPALE : envoi Edi liés à l'agence principale, INCONNU : pas d'envoi Edi ) |
| ediJdcLogin | string | Identifiant JeDeclare utilisé si type de télétransmision JEDECLARE |
| ediAspOneLogin | string | Identifiant AspOne utilisé si type de télétransmision ASPONE |
| ediAutreLogin | string | Identifiant utilisé pour les autres types de télétransmision |
| codeAgence | string | Code agence demandé |
| raisonSociale | string | Raison sociale de l'agence |
| siret | string | Siret de l'agence |
| codePostal | string | Code postal de l'agence |
| nomVille | string | Nom de la ville de l'agence |

## Requête

```
{
  "codeAgence": "string"
}
```

## Réponse

```
{
  "telBureau": "string",
  "mel": "string",
  "affectationExpediteurCollab": "string",
  "ediMethode": "string",
  "ediJdcLogin": "string",
  "ediAspOneLogin": "string",
  "ediAutreLogin": "string",
  "codeAgence": "string",
  "raisonSociale": "string",
  "siret": "string",
  "codePostal": "string",
  "nomVille": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
