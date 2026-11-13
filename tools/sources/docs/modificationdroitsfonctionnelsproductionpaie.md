---
title: "ModificationDroitsFonctionnelsProductionPaie"
slug: "modificationdroitsfonctionnelsproductionpaie"
updated: 2026-09-15T06:17:21Z
published: 2026-09-15T06:17:21Z
canonical: "silae-api.document360.io/modificationdroitsfonctionnelsproductionpaie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ModificationDroitsFonctionnelsProductionPaie

## Fonction API

```
/v1/AdminCollaborateurs/ModificationDroitsFonctionnelsProductionPaie
```

## Verbe HTTP

Post

## Description

Dans Silae il est possible d'afficher plusieurs onglets **Production** avec des vues différentes basées sur des filtres. Le principe est de pouvoir faciliter l'accès à certains dossiers (par localisation géographique par exemple) ou de gérer les accès aux dossiers en fonction des collaborateurs paie. Cette fonction permet de créer, modifier, supprimer ces onglets **Production**.

*Note : La gestion des droits fonctionnels est un droit particulier que le compte Silae exploitant l'API doit posséder pour pouvoir utiliser cette fonction.*

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| loginUtilisateur | string | Identifiant du compte utilisateur sur lequel on souhaite intervenir |
| ongletProductionPaie | OngletProduction | Élément structuré représentant l'onglet Production et ses caractéristiques (Cf. détail ci-dessous) |

### OngletProduction

| Paramètre | Type | Description |
| --- | --- | --- |
| nomOnglet | string | Nom de l'onglet à créer, modifier ou supprimer. C'est par son nom que l'onglet est identifié, donc ce nom est unique |
| aSupprimer | boolean | Doit être à **true** en cas de suppression de l'onglet, **false** sinon |
| ordre | integer(int32) | Permet de définir la position de l'onglet. En création, la valeur 0 positionnera l'onglet en dernière position. En modification, la valeur 0 indiquera que l'onglet ne doit pas changer de position |
| nouveauNomOnglet | string | À utiliser en cas de modification |
| paramPaieGestion | boolean | Indique si dans l'interface "Dossier" le bouton *Gestion* sera disponible (**true**) ou non (**false**) |
| paramPaieLiaisonClient | boolean | Indique si dans l'interface "Dossier" le bouton *Relation Client* sera disponible (**true**) ou non (**false**) |
| paramPaieComplet | boolean | Indique si dans l'interface "Dossier" tous les boutons sont affichés |
| paramPaieSimplifie | boolean | Indique si dans l'interface "Dossier" les boutons affichés seront uniquement ceux des droits limités en paie (**true**) ou pas (**false**) ***Si ce paramètre est désactivé (= false), les options fonctionnalités droit simplifié seront automatiquement décochées*** |
| optionFonctionnalite | string | Précise les fonctionnalités du droit simplifié à activer. Tableau de 5 éléments : 0 : AccordsEntreprises, 1 : AvenantsCCN, 2 : EditionsHistoriques, 3 : Images, 4 : ModelesBureautiques. Les valeurs acceptées peuvent être les codes correspondants ou directement les libellés. ***Pris en compte si le paramètre **paramPaieSimplifie** est activé (= true). En cas de modification, les options existantes sont annulées et remplacées par les nouvelles***. |
| afficherLaListe | boolean | Permet d'indiquer si dans l'onglet sera affichée la liste des dossiers (**true**) ou un menu déroulant (**false**) |
| restreindreLaListe | boolean | Permet d'indiquer si dans la liste des dossiers remonteront tous les dossiers accessibles (**false**) ou si seuls les dossiers avec le paramètre *Suivi Paie* activé seront remontés (**true**) |
| requeteFiltre | string | Requête permettant de limiter l'accès aux dossiers en construisant un filtre. Le détail de l'utilisation de ce filtre est disponible via la fiche dédiée accessible [ici](https://silae-api.document360.io/api-rest/docs/syntaxe-de-la-gestion-des-droits-fonctionnels) |

## Requête

```
{
  "loginUtilisateur": "string",
  "ongletProductionPaie": {
    "nomOnglet": "string",
    "aSupprimer": true,
    "ordre": 0,
    "nouveauNomOnglet": "string",
    "paramPaieGestion": true,
    "paramPaieLiaisonClient": true,
    "paramPaieComplet": true,
    "paramPaieSimplifie": true,
    "optionFonctionnalite": [
        "accordsEntreprises",
        "avenantsCCN",
        "editionsHistoriques",
        "Images",
        "modelesBureautiques"
    ],
    "afficherLaListe": true,
    "restreindreLaListe": true,
    "requeteFiltre": "string"
  }
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
