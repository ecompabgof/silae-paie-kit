---
title: "RecupererImageAsynchrone"
slug: "recupererimageasynchrone"
updated: 2026-03-10T06:47:28Z
published: 2026-03-10T06:47:28Z
canonical: "silae-api.document360.io/recupererimageasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererImageAsynchrone

## Fonction API

```
/v1/RecuperationBulletins/RecupererImageAsynchrone
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [RecupererImage](https://silae-api.document360.io/api-rest/docs/recupererimage). Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutRecupererImageAsynchrone](https://silae-api.document360.io/api-rest/docs/statutrecupererimageasynchrone).

---

**Points d'attention**

- Impact de la récupération des bulletins originaux et AER :
  - Bulletin original (valeur 3) : si le bulletin est au statut Contrôlé (non édité) = bulle bleue, il passera en statut Édité = bulle verte, avec enregistrement de la date d'édition (qui est remise à jour en cas de nouvelle récupération).
  - AER (valeurs 2 et 5) : idem, s'il n'a pas encore été édité, l'AER passera au statut Edité, avec enregistrement de la date d'édition (qui est remise à jour en cas de nouvelle récupération - modification du 02/09/25). Valable pour les intermittents du spectacle depuis le passage des AEM en DSN avec France Travail

## Groupe de fonctions API

BLTIN01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| natureImage | integer(int32) | Nature du document à récupérer : - 1 = Bulletin duplicata - 2 = Attestation France Travail (AER) - ou AEM pour les intermittents du spectacle - 3 = Bulletin original - 4 = Déclarations nominatives de congés spectacles (DNCS) - 5 = Attestation France Travail (AER) avec signataire (idem 2 mais avec signataire) |
| iD_IMAGE | integer(int32) | Identifiant de l'image du bulletin Peut être récupéré via la fonction [SalariesBulletins](https://silae-api.document360.io/api-rest/docs/salariesbulletins) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de tâche de calcul à utiliser dans la fonction [StatutRecupererImageAsynchrone](https://silae-api.document360.io/api-rest/docs/statutrecupererimageasynchrone) pour obtenir le résultat |

## Requête

```
{
  "natureImage": 0,
  "iD_IMAGE": 0
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
