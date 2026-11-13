---
title: "AnalyseActiviteStatutAccesOptions"
slug: "analyseactivitestatutaccesoptions"
updated: 2026-06-16T16:29:02Z
published: 2026-06-16T16:29:02Z
canonical: "silae-api.document360.io/analyseactivitestatutaccesoptions"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AnalyseActiviteStatutAccesOptions

## Fonction API

```
/v1/AnalyseProduction/AnalyseActiviteStatutAccesOptions
```

## Verbe HTTP

Post

## Description

Permet d'indiquer le statut des différents services, options et accès définis sur chaque dossier

---

**Point d'attention** Pour améliorer les délais de traitement, il est fortement recommandé de renseigner le paramètre ***code agence***.

## Groupe de fonctions API

ANALY01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| codeAgence | string | Code agence pour lequel récupérer les données Laisser vide pour récupérer les données de tous les codes agence accessibles |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| statutAccesOptions | AnalyseActiviteStatutAccesOptions[] | Élément structuré contenant les critères d'analyse (cf. détail ci-dessous) |

### AnalyseActiviteStatutAccesOptions

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête |
| mySilaeActif | boolean | Permet de préciser si mySilae est actif |
| loginsActifs | number(double) | Permet d'indiquer le nombre de logins actifs |
| absencesMobiliteActif | boolean | Permet de préciser si le module Absences est actif |
| gestionTempsActif | boolean | Permet de préciser si mySilae est actif |
| saisieVariableActif | boolean | Permet d'indiquer si la saisie des variables est active |
| accesBulletinActif | boolean | Permet de préciser si l'accès aux bulletins est actif |
| accesVirementActif | boolean | Permet d'indiquer si l'accès aux virements est actif |
| signatureElectroniqueActif | boolean | Permet de préciser si la signature électronique est active |
| entretiensActif | boolean | Permet d'indiquer la gestion des entretiens est active |
| acomptesActif | boolean | Permet de préciser si la gestion des acomptes est active |
| gestionSalariesActif | boolean | Permet d'indiquer si la gestion des salariés est active |
| visitesMedicalesActif | boolean | Permet de préciser si la gestion des visites médicales est active |
| mySilaeSanteActif | boolean | Permet d'indiquer si le service mySilae Santé est actif |
| mySilaeExpenseActif | boolean | Permet de préciser si le service mySilae Expense est actif |

## Requête

```
{
  "codeAgence": "string"
}
```

## Réponse

```
{
  "statutAccesOptions": [
    {
      "numeroDossier": "string",
      "mySilaeActif": true,
      "loginsActifs": 10.5,
      "absencesMobiliteActif": true,
      "gestionTempsActif": true,
      "saisieVariableActif": true,
      "accesBulletinActif": true,
      "accesVirementActif": true,
      "signatureElectroniqueActif": true,
      "entretiensActif": true,
      "acomptesActif": true,
      "gestionSalariesActif": true,
      "visitesMedicalesActif": true,
      "mySilaeSanteActif": true,
      "mySilaeExpenseActif": true
    },
    {
      "numeroDossier": "string",
      "mySilaeActif": true,
      "loginsActifs": 10.5,
      "absencesMobiliteActif": true,
      "gestionTempsActif": true,
      "saisieVariableActif": true,
      "accesBulletinActif": true,
      "accesVirementActif": true,
      "signatureElectroniqueActif": true,
      "entretiensActif": true,
      "acomptesActif": true,
      "gestionSalariesActif": true,
      "visitesMedicalesActif": true,
      "mySilaeSanteActif": true,
      "mySilaeExpenseActif": true
    }
  ]
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
