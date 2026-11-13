---
title: "StatutSalarieSyntheseCarriereAsynchrone"
slug: "statutsalariesynthesecarriereasynchrone"
updated: 2023-12-05T09:41:36Z
published: 2023-12-05T09:41:37Z
canonical: "silae-api.document360.io/statutsalariesynthesecarriereasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# StatutSalarieSyntheseCarriereAsynchrone

## Fonction API

```
/v1/InfosSalaries/StatutSalarieSyntheseCarriereAsynchrone
```

## Verbe HTTP

Get

          

## Description

          

Cette fonction sert à récupérer le résultat de l'appel à [SalarieSyntheseCarriereAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesynthesecarriereasynchrone)

## Groupe de fonctions API

DATA001

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | Identifiant de la tâche de calcul obtenu en résultat de l'appel à [SalariesyntheseCarriereAsynchrone](https://silae-api.document360.io/api-rest/docs/salariesynthesecarriereasynchrone) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| syntheseCarriere | SalarieElementCarriere[] | Liste d'éléments structurés qui contiennent les informations de la fiche de synthèse du salarié pour chaque emploi (cf. détail ci-dessous) |
| statut | string | Statut de la tâche \| Code \| Description \| \| --- \| --- \| \| ETAT_TERMINEE \| tâche terminée normalement \| \| ETAT_ERREUR \| tâche en erreur \| \| ETAT_ENCOURS \| tâche toujours en cours (une autre demande de statut peut être faite) \| |
| Code | Description |
| ETAT_TERMINEE | tâche terminée normalement |
| ETAT_ERREUR | tâche en erreur |
| ETAT_ENCOURS | tâche toujours en cours (une autre demande de statut peut être faite) |
| messageErreur | string | Compte rendu d'erreur si la tâche a échoué |
| progression | number(double) | Pourcentage estimatif de réalisation de la tâche |
| dureeExecution | string | Si la tâche est terminée, contient le temps de traitement global |

### SalarieElementCarriere

| Paramètre | Type | Description |
| --- | --- | --- |
| dateDebut | string(date-time) | Date de début de l'emploi |
| dateFin | string(date-time) | Date de fin de l'emploi |
| libelleEmploi | string | Intitulé de l'emploi |
| estCadre | boolean | Indique si pour cet emploi le salarié était cadre (**true**) ou non (**false**) |
| typeContrat | string | Type de contrat |
| heuresContractuelles | number(double) | Heures contractuelles |
| salaireDeBase | number(double) | Salaire de base |
| coeff1 | string | Valeur du Coefficient1 tel que configuré dans la convention collective (Position pour la convention SYNTEC par exemple) |
| libelleCoeff1 | string | Libellé du Coefficient2 tel que configuré dans la convention collective |
| coeff2 | string | Valeur du Coefficient2 tel que configuré dans la convention collective |
| libelleCoeff2 | string | Libellé du Coefficient2 tel que configuré dans la convention collective |
| coeff3 | string | Valeur du Coefficient3 tel que configuré dans la convention collective |
| libelleCoeff3 | string | Libellé du Coefficient3 tel que configuré dans la convention collective |
| coeff4 | string | Valeur du Coefficient4 tel que configuré dans la convention collective |
| libelleCoeff4 | string | Libellé du Coefficient4 tel que configuré dans la convention collective |
| tauxHeuresNormales | number(double) | Taux d'heures normales |
| salaireDeBaseETP | number(double) | Montant du salaire de base en Équivalent Temps Plein |
| dateReelleDebutEmploi | string(date-time) | Date réelle du début de l'emploi (date qui peut être différente de celles renseignées en cas de sortie du salarié par exemple) |
| dateReelleFinEmploi | string(date-time) | Date réelle de la fin de l'emploi |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi |

## Requête

```
{
  "guidTache": "string"
}
```

## Réponse

```
{
  "syntheseCarriere": [
    {
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "libelleEmploi": "string",
      "estCadre": true,
      "typeContrat": "string",
      "heuresContractuelles": 10.5,
      "salaireDeBase": 10.5,
      "coeff1": "string",
      "libelleCoeff1": "string",
      "coeff2": "string",
      "libelleCoeff2": "string",
      "coeff3": "string",
      "libelleCoeff3": "string",
      "coeff4": "string",
      "libelleCoeff4": "string",
      "tauxHeuresNormales": 10.5,
      "salaireDeBaseETP": 10.5,
      "dateReelleDebutEmploi": "2020-10-14T21:46:24",
      "dateReelleFinEmploi": "2020-10-14T21:46:24",
      "identifiantEmploi": 0
    },
    {
      "dateDebut": "2020-10-14T21:46:24",
      "dateFin": "2020-10-14T21:46:24",
      "libelleEmploi": "string",
      "estCadre": true,
      "typeContrat": "string",
      "heuresContractuelles": 10.5,
      "salaireDeBase": 10.5,
      "coeff1": "string",
      "libelleCoeff1": "string",
      "coeff2": "string",
      "libelleCoeff2": "string",
      "coeff3": "string",
      "libelleCoeff3": "string",
      "coeff4": "string",
      "libelleCoeff4": "string",
      "tauxHeuresNormales": 10.5,
      "salaireDeBaseETP": 10.5,
      "dateReelleDebutEmploi": "2020-10-14T21:46:24",
      "dateReelleFinEmploi": "2020-10-14T21:46:24",
      "identifiantEmploi": 0
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
