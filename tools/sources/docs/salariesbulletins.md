---
title: "SalariesBulletins"
slug: "salariesbulletins"
updated: 2026-10-20T08:03:53Z
published: 2026-10-20T08:03:53Z
canonical: "silae-api.document360.io/salariesbulletins"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalariesBulletins

## Fonction API

```
/v1/InfosSalaries/SalariesBulletins
```

## Verbe HTTP

Post

          

## Description

          

Permet de récupérer les ID des images des bulletins de salariés, avec quelques informations complémentaires (comme la présence ou non d'attestation Pôle Emploi). Cette même fonction est proposée en mode asynchrone : [SalariesBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesbulletinsasynchrone)

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| requeteSalariesBulletins | RequeteSalariesBulletins | Élément structuré contenant les critères de recherche des bulletins à remonter (cf. détail ci-dessous) |
| nomInterneEtablissement | string | Filtre optionnel d'établissement |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### RequeteSalariesBulletins

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié concerné. Si ce paramètre est vide, la recherche se fera sur tous les salariés |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi pour lequel on recherche des bulletins. la valeur 0 permet de rechercher sur tous les emplois du salarié |
| periodeDebut | string(date-time) | Date de début de la période sur laquelle rechercher des bulletins |
| periodeFin | string(date-time) | Date de fin de la période sur laquelle rechercher des bulletins |
| bulletinsOriginauxSeulement | boolean | Permet d'indiquer si on recherche uniquement les bulletins orignaux (**true**) ou non (**false**) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| salariesBulletins | SalarieBulletinsResult[] | Liste d'éléments structurés contenant les informations des bulletins identifiés pour chaque période de paie (cf. détail ci-dessous) |

### SalarieBulletinsResult

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié |
| periode | string(date-time) | Période de paie des bulletins trouvés |
| arr_ID_PAIBULLETIN | integer[] | Liste des ID des images des bulletins trouvés. Cet ID pourra être utilisé pour récupérer l'image PDF du bulletin via la fonction [RecupererImage](https://silae-api.document360.io/api-rest/docs/recupererimage) |
| arr_PresenceAttestationPoleEmploi | boolean[] | Indique pour chaque bulletin s'il y a une attestation Pôle Emploi rattachée (**true**) ou non (**false**). Pour faire la correspondance, l'indice du tableau de booléen correspond à l'indice du tableau d'int du paramètre **arr_ID_PAIBULLETIN** |

## Requête

```
{
  "requeteSalariesBulletins": {
    "matriculeSalarie": "string",
    "identifiantEmploi": 0,
    "periodeDebut": "2020-10-14T21:46:24",
    "periodeFin": "2020-10-14T21:46:24",
    "bulletinsOriginauxSeulement": true
  },
  "nomInterneEtablissement": "string",
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "salariesBulletins": [
    {
      "matriculeSalarie": "string",
      "periode": "2020-10-14T21:46:24",
      "arr_ID_PAIBULLETIN": [
        0,
        0
      ],
      "arr_PresenceAttestationPoleEmploi": [
        true,
        true
      ]
    },
    {
      "matriculeSalarie": "string",
      "periode": "2020-10-14T21:46:24",
      "arr_ID_PAIBULLETIN": [
        0,
        0
      ],
      "arr_PresenceAttestationPoleEmploi": [
        true,
        true
      ]
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
