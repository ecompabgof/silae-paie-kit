---
title: "StatutSalariesBulletinsAsynchrone"
slug: "statutsalariesbulletinsasynchrone"
updated: 2025-11-04T06:29:36Z
published: 2025-11-04T06:29:36Z
canonical: "silae-api.document360.io/statutsalariesbulletinsasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutSalariesBulletinsAsynchrone

## Fonction API

```
/v1/InfosSalaries/StatutSalariesBulletinsAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [SalariesBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesbulletinsasynchrone)

## Groupe de fonctions API

DATA003

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [SalariesBulletinsAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesbulletinsasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| salariesBulletins | SalarieBulletinsResult[] | Liste d'éléments structurés contenant les informations des bulletins identifiés pour chaque période de paie (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

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
  "guidTache": "string"
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
  ],
  "statut": "string",
  "messageErreur": "string",
  "progression": 10.5,
  "dureeExecution": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
