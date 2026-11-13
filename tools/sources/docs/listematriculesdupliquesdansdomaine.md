---
title: "ListeMatriculesDupliquesDansDomaine"
slug: "listematriculesdupliquesdansdomaine"
updated: 2023-06-27T02:15:27Z
published: 2023-06-27T02:15:27Z
canonical: "silae-api.document360.io/listematriculesdupliquesdansdomaine"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeMatriculesDupliquesDansDomaine

## Fonction API

```
/v1/InfosTechniquesDossiers/ListeMatriculesDupliquesDansDomaine
```

## Verbe HTTP

Post

              

## Description

              

Permet de récupérer la liste des matricules en double dans les dossiers du domaine

## Groupe de fonctions API

DATA005

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeCoupleDossierMatricule | CoupleDossierMatricule[] | Liste d'éléments structurés contenant les informations des dossiers concernés avec les matricules en double (cf. Détail ci-dessous) |

### CoupleDossierMatricule

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier |
| matricule | string | Matricule identifié comme appartenant à plusieurs salariés |

## Réponse

```
{
  "listeCoupleDossierMatricule": [
    {
      "numeroDossier": "string",
      "matricule": "string"
    },
    {
      "numeroDossier": "string",
      "matricule": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
