---
title: "HistoriqueDesConnexions"
slug: "historiquedesconnexions"
updated: 2026-06-09T06:56:40Z
published: 2026-06-09T06:56:40Z
canonical: "silae-api.document360.io/historiquedesconnexions"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# HistoriqueDesConnexions

## Fonction API

```
/v1/InfosDossiers/HistoriqueDesConnexions
```

## Verbe HTTP

Post

## Description

Permet d'obtenir l'historique des connexions au domaine.

---

**Point d'attention** Seul un compte Collaborateur qui possède le droit d'accès **Historique connexions** peut exploiter cette fonction API.

## Groupe de fonctions API

DATA002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date-time) | Date et heure de début des connexions à rechercher (obligatoire) *7 jours maximum (tient compte de l'horaire indiqué)* |
| dateFin | string(date-time) | Date et heure de début des connexions à rechercher (obligatoire) *7 jours maximum (tient compte de l'horaire indiqué)* |
| filtre | string | Valeur qui permet de filtrer les enregistrements |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| connexions | HistoriqueConnexion[] | Liste d'éléments structurés contenant des informations sur les connexions présentes dans le domaine et accessibles (cf. Détail ci-dessous) |
| warning | string | Le message suivant apparaît lorsque le nombre de connexions dépasse les 5 000 enregistrements : ***"Le résultat contient plus de 5000 enregistrements. En conséquence, le résultat ne contient que les 5000 premiers résultats liés à votre filtre. Modifiez les filtres pour approfondir votre recherche."*** |

### HistoriqueConnexion

| Paramètre | Type | Description |
| --- | --- | --- |
| date | string(date-time) | Date et heure de début de connexion |
| deconnexion | string(date-time) | Date et heure de fin de connexion |
| identifiantUtilisateur | string | Identifiant utilisateur |
| modifAPI | boolean | Modification effectuée par API **true** : oui / **false** : non |
| identifiantMachine | string | Identifiant machine |
| retourConnexion | string | Résultat de la connexion |

## Requête

```
{
  "dateDebut": "2020-10-14T21:46:24",
  "dateFin": "2020-10-14T21:46:24",
  "filtre": "string"
}
```

## Réponse

```
{
  "connexions": [
    {
      "date": "2020-10-14T21:46:24",
      "deconnexion": "2020-10-14T21:46:24",
      "identifiantUtilisateur": "string",
      "modifAPI": true,
      "identifiantMachine": "string",
      "retourConnexion": "string"
    },
    {
      "date": "2020-10-14T21:46:24",
      "deconnexion": "2020-10-14T21:46:24",
      "identifiantUtilisateur": "string",
      "modifAPI": true,
      "identifiantMachine": "string",
      "retourConnexion": "string"
    }
  ],
  "warning": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
