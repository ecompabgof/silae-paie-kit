---
title: "ListeDSNEvenementielles"
slug: "listedsnevenementielles"
updated: 2025-05-06T06:28:03Z
published: 2025-05-06T06:28:03Z
canonical: "silae-api.document360.io/listedsnevenementielles"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ListeDSNEvenementielles

## Fonction API

```
/v1/InfosDeclaration/ListeDSNEvenementielles
```

## Verbe HTTP

Post

          

## Description

          

Permet d'obtenir la liste des DSN évènementielles par salarié concerné sur une période donnée

## Groupe de fonctions API

DATA004

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date-time) | Date de début de la période à prendre en compte pour les DSN évènementielles |
| dateFin | string(date-time) | Date de fin de la période à prendre en compte pour les DSN évènementielles |
| dateDebutDepot | string(date-time) | Date de début de la période de dépôt à prendre en compte pour les DSN évènementielles |
| dateFinDepot | string(date-time) | Date de fin de la période de dépôt à prendre en compte pour les DSN évènementielles |
| typeDSN | string | - Valeur non renseignée : toutes les DSN évènementielles - FCTU : DSN évènementielles Fin de Contrat de Travail Unique - DSN AT : DSN évènementielles Arrêt de Travail - SADV : DSN évènementielles Signalement d'Amorçage des Données Variables |
| afficherDSIJ | boolean | - False : les DSN évènementielles de type DSIJ ne sont pas prises en compte - True : les DSN évènementielles de type DSIJ sont prises en compte |
| numeroDossier | string | Numéro du dossier concerné par la requête |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| declarationsEvenementielles | ListeDeclarationEvenementielle[] | Liste d'éléments structurés contenant les informations de chaque ligne Déclaration evenementielle (cf. détail ci-dessous) |

### ListeDeclarationEvenementielle

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDepot | string(date-time) | Date de dépôt de la déclaration évènementielle |
| typeDSN | string | Type de déclaration évènementielle ***Ce champ contient la valeur "DSIJ - S3201n" s'il s'agit d'un DSN DSIJ (paramètre afficherDSIJ = true)*** |
| salarieConcerne | string | Numéro de matricule du salarié - Nom et prénom du salarié |
| periode | string | période de la déclaration évènementielle |
| statut | string | Statut de la de la déclaration évènementielle (Validé, En attente...) |

## Requête

```
{
  "dateDebut": "2020-10-14T21:46:24",
  "dateFin": "2020-10-14T21:46:24",
  "dateDebutDepot": "2020-10-14T21:46:24",
  "dateFinDepot": "2020-10-14T21:46:24",
  "typeDSN": "string",
  "afficherDSIJ": false,
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "declarationsEvenementielles": [
    {
      "dateDepot": "2020-10-14T21:46:24",
      "typeDSN": "string",
      "salarieConcerne": "string",
      "periode": "string",
      "statut": "string"
    },
    {
      "dateDepot": "2020-10-14T21:46:24",
      "typeDSN": "string",
      "salarieConcerne": "string",
      "periode": "string",
      "statut": "string"
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
|  | "Aucune DSN trouvée sur la période demandée" | Sur la période demandée, aucune DSN n'a été trouvée |
|  | "Aucune date de début ou de fin n'est renseigné" | la date de début et/ou de fin n'ont pas été indiquées |
|  | "message": "Aucun dossier n'est renseigné" | le numéro de dossier n' a pas été indiqué |
