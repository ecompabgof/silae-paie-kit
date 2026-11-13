---
title: "RecupererImage"
slug: "recupererimage"
updated: 2026-10-27T06:44:59Z
published: 2026-10-27T06:44:59Z
canonical: "silae-api.document360.io/recupererimage"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# RecupererImage

## Fonction API

```
/v1/RecuperationBulletins/RecupererImage
```

## Verbe HTTP

Post

## Description

Permet de récupérer les documents suivants en PDF à partir de l'identifiant de l'image du bulletin :

- Bulletin original
- Bulletin duplicata
- Attestation Employeur : AER FCTU, AER CDDU-D...(ou anciennement AEM généré automatiquement pour les intermittents du spectacle)
- Déclaration nominative de congés spectacle (DNCS)

*Cette même fonction est proposée en mode asynchrone : [RecupererImageAsynchrone](https://silae-api.document360.io/api-rest/docs/recupererimageasynchrone)*

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
| image | string(byte) | Document PDF encodé en base64 |
| imagesAnnexes | ImageAnnexe[] | Élément structuré contenant les éventuelles images annexes (cf. détail ci-dessous). *A noter : Selon le document disponible, AER FCTU, sinon AER CDDU-D, AEM CDDU-D, AEM, exemplaire salarié est retourné en document principal (image) et l'exemplaire organisme est retourné en document annexe (imagesAnnexes).* |
| warning | string | Eventuel message d'alerte, si plusieurs documents existent par rapport à l'identifiant bulletin demandé |

### ImageAnnexe

| Paramètre | Type | Description |
| --- | --- | --- |
| image | string(byte) | Document annexe PDF encodés en base64 |

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
  "image": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg==",
  "imagesAnnexes": [
    {
      "image": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    },
    {
      "image": "VW4gZXhlbXBsZSBpbGx1c3RyYW50IGxlIHR5cGUgc3RyaW5nKGJ5dGUpLg=="
    }
  ],
  "warning": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| "warning" | "L'Attestation Employeur Rematérialisée (AER) n'a pas été trouvée. Une AEM a été générée en remplacement." | Lorsque une AER n'est pas trouvée, une AEM est générée automatiquement en remplacement |
