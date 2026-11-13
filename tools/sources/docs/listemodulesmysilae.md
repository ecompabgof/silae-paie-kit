---
title: "ListeModulesMySilae"
slug: "listemodulesmysilae"
updated: 2026-06-05T14:13:03Z
published: 2026-06-05T14:13:03Z
canonical: "silae-api.document360.io/listemodulesmysilae"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeModulesMySilae

## Fonction API

```
/v1/AnalyseProduction/ListeModulesMySilae
```

## Verbe HTTP

Get

              

## Description

              

Permet de récupérer la liste des dossiers de paie où MySilae est activé avec les modules associés et leurs statuts respectifs.

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeAgence | string | Filtrage optionnel par code agence |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| listeDossiers | ModulesMySilaeParDossier[] | Liste d'éléments structurés contenant les informations de modules actifs pour chaque dossier concerné (cf. détail ci-dessous) |

### ModulesMySilaeParDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro de dossier |
| modules | ModuleMySilaeParDossier[] | Liste d'éléments structurés contenant les informations de modules actifs d'un dossier (cf. détail ci-dessous) |

### ModuleMySilaeParDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| codeModule | string | Code du module (AbsencesEtConges,ElementsVariablesPaie,Entretiens,Salaries,AcomptesAuto,VisitesMedicales) |
| codeEtat | integer(int32) | 0 (inactif), 1 (actif), 2 (en attente), 3 (en montage), 4 (actif externe) |
| libelleEtat | string | Inactif, Actif, EnAttente, EnMontage, ActifExterne |
| dateDernierChangementEtat | string(date-time) | Date du dernier changement d'état (ex : date d'activation du module si le module est à l'état Actif) |
| utilisateurDernierChangementEtat | string | NOM Prenom de l'utilisateur ayant réalisé le changement d'état |

## Requête

```
{
  "codeAgence": "string"
}
```

## Réponse

```
{
  "listeDossiers": [
    {
      "numeroDossier": "string",
      "modules": [
        {
          "codeModule": "string",
          "codeEtat": 0,
          "libelleEtat": "string",
          "dateDernierChangementEtat": "2020-10-14T21:46:24",
          "utilisateurDernierChangementEtat": "string"
        },
        {
          "codeModule": "string",
          "codeEtat": 0,
          "libelleEtat": "string",
          "dateDernierChangementEtat": "2020-10-14T21:46:24",
          "utilisateurDernierChangementEtat": "string"
        }
      ]
    },
    {
      "numeroDossier": "string",
      "modules": [
        {
          "codeModule": "string",
          "codeEtat": 0,
          "libelleEtat": "string",
          "dateDernierChangementEtat": "2020-10-14T21:46:24",
          "utilisateurDernierChangementEtat": "string"
        },
        {
          "codeModule": "string",
          "codeEtat": 0,
          "libelleEtat": "string",
          "dateDernierChangementEtat": "2020-10-14T21:46:24",
          "utilisateurDernierChangementEtat": "string"
        }
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
