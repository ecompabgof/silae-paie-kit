---
title: "ImportDossierDemoAsynchrone"
slug: "importdossierdemoasynchrone"
updated: 2023-06-20T09:27:45Z
published: 2023-06-20T09:27:45Z
canonical: "silae-api.document360.io/importdossierdemoasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ImportDossierDemoAsynchrone

## Fonction API

```
/v1/AdminDossier/ImportDossierDemoAsynchrone
```

## Verbe HTTP

Post

              

## Description

              

Permet de lancer l'import d'un dossier de démonstration Silae sur le même principe que la fonction **Outils > Importer un dossier de démonstration**.

Cette fonction qui est en mode asynchrone, génère un identifiant de la tâche à utiliser par la fonction [StatutImportDossierDemoAsynchrone](https://silae-api.document360.io/api-rest/docs/StatutImportDossierDemoAsynchrone) pour obtenir le résultat.

## Groupe de fonctions API

ADMIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| tokenDossierDemo | string | Token identifiant le dossier de démo à importer tel que récupéré sur la fonction (ListeDossiersDemoSilae) |
| nouveauNumeroDossier | string | Numéro de dossier à utiliser pour le nouveau dossier ainsi créé (ne peut être identique à un dossier existant) |
| changerAffectations | boolean | Si true, écrase les affectations par défaut du dossier de démo avec le contenu du champ suivant |
| affectations | AffectationsDossier | Elément structuré comportant les informations d'affectation à surcharger (cf. détail ci-dessous) |

### AffectationsDossier

| Paramètre | Type | Description |
| --- | --- | --- |
| codeAgence | string | Code agence à affecter au nouveau dossier |
| rG1 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 1 |
| rG2 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 2 |
| rG3 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 3 |
| rG4 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 4 |
| rG5 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 5 |
| rG6 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 6 |
| rG7 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 7 |
| rG8 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 8 |
| rG9 | string | Liste de code collaborateurs (séparés par des ';' ) à affecter à la fonction de type 9 |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche d'import à utiliser dans la fonction [StatutImportDossierDemoAsynchrone](https://silae-api.document360.io/api-rest/docs/statutimportdossierdemoasynchrone) pour obtenir le résultat |

## Requête

```
{
  "tokenDossierDemo": "string",
  "nouveauNumeroDossier": "string",
  "changerAffectations": true,
  "affectations": {
    "codeAgence": "string",
    "rG1": "string",
    "rG2": "string",
    "rG3": "string",
    "rG4": "string",
    "rG5": "string",
    "rG6": "string",
    "rG7": "string",
    "rG8": "string",
    "rG9": "string"
  }
}
```

## Réponse

```
{
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
