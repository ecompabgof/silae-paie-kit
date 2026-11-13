---
title: "SalarieInitialiserCumuls"
slug: "salarieinitialisercumuls"
updated: 2023-05-19T10:49:39Z
published: 2023-05-19T10:49:39Z
canonical: "silae-api.document360.io/salarieinitialisercumuls"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# SalarieInitialiserCumuls

## Fonction API

```
/v1/Cumuls/SalarieInitialiserCumuls
```

## Verbe HTTP

Post

          

## Description

          

Permet d'initialiser les cumuls d'un salarié, liés aux CP, RTT, RCR, RCC et RCO

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| salarieCumuls | SalarieCumuls | Élément structuré contenant les informations des cumuls à initialiser (cf. détail ci-dessous) |
| matriculeSalarie | string | Matricule du salarié concerné |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieCumuls

| Paramètre | Type | Description |
| --- | --- | --- |
| cp_ModifierCumuls | boolean | Permet d'indiquer si on doit prendre en compte (**true**) ou pas (**false**) les champs liés aux CP qui débutent par "CP_" |
| cp_AcquisParReportN1 | number(double) | Nombre de CP acquis par report pour l'année N-1 |
| cp_AcquisParAncienneteN1 | number(double) | Nombre de CP acquis par ancienneté pour l'année N-1 |
| cp_AcquisParFractionnementN1 | number(double) | Nombre de CP de fractionnement acquis pour l'année N-1 |
| cp_TotalAcquisN1 | number(double) | Nombre total de CP acquis pour l'année N-1 |
| cp_TotalPrisN1 | number(double) | Nombre total de CP pris sur l'année N-1 |
| cp_ProvisionAcquiseParReportN1 | number(double) | Provision de CP acquis par report pour l'année N-1 |
| cp_TotalProvisionAcquiseN1 | number(double) | Provision totale de CP acquis pour l'année N-1 |
| cp_TotalProvisionConsommeeN1 | number(double) | Provision totale de CP consommés pour l'année N-1 |
| cp_TotalAcquisN | number(double) | Nombre total de CP acquis pour l'année N |
| cp_TotalPrisN | number(double) | Nombre total de CP pris sur l'année N |
| cp_TotalProvisionAcquiseN | number(double) | Provision de CP acquis par report pour l'année N |
| cp_TotalProvisionConsommeeN | number(double) | Provision totale de CP consommés pour l'année N |
| rtt_ModifierCumuls | boolean | Permet d'indiquer si on doit prendre en compte (**true**) ou pas (**false**) les champs liés aux RTT qui débutent par "RTT_" |
| rtt_JoursAcquis | number(double) | Nombre de RTT acquis |
| rtt_JoursPris | number(double) | Nombre de RTT pris |
| rcr_ModifierCumuls | boolean | Permet d'indiquer si on doit prendre en compte (**true**) ou pas (**false**) les champs liés aux RCR qui débutent par "RCR_" |
| rcr_HeuresAcquises | number(double) | Nombre d'heures RCR acquises |
| rcr_HeuresPrises | number(double) | Nombre d'heures RCR prises |
| rcc_ModifierCumuls | boolean | Permet d'indiquer si on doit prendre en compte (**true**) ou pas (**false**) les champs liés aux RCC qui débutent par "RCC_" |
| rcc_HeuresAcquises | number(double) | Nombre d'heures RCC acquises |
| rcc_HeuresPrises | number(double) | Nombre d'heures RCC prises |
| rco_ModifierCumuls | boolean | Permet d'indiquer si on doit prendre en compte (**true**) ou pas (**false**) les champs liés aux RCO qui débutent par "RCO_" |
| rco_HeuresAcquises | number(double) | Nombre d'heures RCO acquises |
| rco_HeuresPrises | number(double) | Nombre d'heures RCO prises |

## Requête

```
{
  "salarieCumuls": {
    "cp_ModifierCumuls": true,
    "cp_AcquisParReportN1": 10.5,
    "cp_AcquisParAncienneteN1": 10.5,
    "cp_AcquisParFractionnementN1": 10.5,
    "cp_TotalAcquisN1": 10.5,
    "cp_TotalPrisN1": 10.5,
    "cp_ProvisionAcquiseParReportN1": 10.5,
    "cp_TotalProvisionAcquiseN1": 10.5,
    "cp_TotalProvisionConsommeeN1": 10.5,
    "cp_TotalAcquisN": 10.5,
    "cp_TotalPrisN": 10.5,
    "cp_TotalProvisionAcquiseN": 10.5,
    "cp_TotalProvisionConsommeeN": 10.5,
    "rtt_ModifierCumuls": true,
    "rtt_JoursAcquis": 10.5,
    "rtt_JoursPris": 10.5,
    "rcr_ModifierCumuls": true,
    "rcr_HeuresAcquises": 10.5,
    "rcr_HeuresPrises": 10.5,
    "rcc_ModifierCumuls": true,
    "rcc_HeuresAcquises": 10.5,
    "rcc_HeuresPrises": 10.5,
    "rco_ModifierCumuls": true,
    "rco_HeuresAcquises": 10.5,
    "rco_HeuresPrises": 10.5
  },
  "matriculeSalarie": "string",
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
