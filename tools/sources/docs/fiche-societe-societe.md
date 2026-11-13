---
title: "Fiche Société - Société"
slug: "fiche-societe-societe"
updated: 2026-07-28T13:43:16Z
published: 2026-07-28T13:43:16Z
canonical: "silae-api.document360.io/fiche-societe-societe"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Fiche Société - Société

Cette fiche permet de lister les noms des champs de la fiche société ainsi que les informations associées.

## État du dossier

![Fiche_societe_1](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_1.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_EtatDossierPaie | byte | [État du dossier de paie](https://silae-api.document360.io/api-rest/docs/fiche-societe/#etat-dossier-paie) |
| CLI_MontagePaiePeriodeDebut | DateTime |  |

## Employeur Signataire & Personne à contacter

![Fiche_societe_2](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_2.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_EmployeurCivilite | byte | [Civilité](https://silae-api.document360.io/api-rest/docs/fiche-societe/#civilit%C3%A9) |
| CLI_EmployeurNom | string[30] |  |
| CLI_EmployeurPrenom | string[30] |  |
| CLI_EmployeurQualite | byte | [Qualité Employeur](https://silae-api.document360.io/api-rest/docs/fiche-societe/#qualit%C3%A9-employeur) |
| CLI_EmployeurQualiteAutre | string[30] | N'est utile que lorsque CLI_EmployeurQualite vaut "Autre" |
| CLI_PersonneAContacterNom | string[30] |  |
| CLI_PersonneAContacterPrenom | string[30] |  |
| CLI_PersonneAContacterTel | string[20] |  |
| CLI_PersonneAContacterMel | string[60] |  |

## Méthodes

![Fiche_societe_3](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_3.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_CalculMaintienInhibeLegal | boolean |  |
| CLI_MethodesSuiviAbsencesDansEta | boolean |  |

### Méthodes pour le suivi des absences

![Fiche_societe_4](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_4.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_MethodeSuiviAbsencesJC | byte | [Traitement des absences](https://silae-api.document360.io/api-rest/docs/fiche-societe/#traitement-des-absences) |
| CLI_MethodeSuiviAbsences | byte | [Méthode de suivi des absences](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-de-suivi-des-absences) |
| CLI_SousMethodeSuiviAbsences | byte | [Sous-méthode de suivi des absences](https://silae-api.document360.io/api-rest/docs/fiche-societe/#sousm%C3%A9thode-de-suivi-des-absences) |
| CLI_SousMethodeSuiviAbsenceFJ | byte | Type byte qui est ensuite transformé en booléen. Il prend donc les valeur **0** (pour false) et **1** (pour true) |
| CLI_MethodeSuiviAbsencesDeductionHM | byte | [Déduction des heures majorées](https://silae-api.document360.io/api-rest/docs/fiche-societe/#d%C3%A9duction-des-heures-major%C3%A9es) |
| CLI_CalcAutoMaintienInactif | boolean | Indique si le calcul automatique du maintien de salaire est activé (**false**) ou désactivé (**true**) |
| CLI_MethodeCalculMaintien | byte | [Méthode de calcul du maintien](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-de-calcul-du-maintien) |
| CLI_MethodeCalculMaintienNbM | int | Nombre de mois |
| CLI_Subrogation | boolean |  |
| CLI_SubrogationVersEtaPrincipal | boolean | Case à cocher disponible lorsque plusieurs établissements existent et que la subrogation est active |
| CLI_CalcAutoIJSSInactif | boolean | Indique si l'entreprise avance les IJSS |
| CLI_TassageAbsencesJours | int | Détermine à partir de combien de jours il faut favoriser en tenant compte de la présence |
| CLI_ChaineFabricationDateLimiteAbsence | string[6] | Le détail des valeurs à saisir est disponible dans [l'article correspondant](https://silae.document360.io/docs/decaler-ou-limiter-le-traitement-des-absences) de la base de connaissance Silae |

### Méthodes pour le suivi des congés payés

![Fiche_societe_6](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_6.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_MethodeSuiviCP | byte | [Suivi des congés payés](https://silae-api.document360.io/api-rest/docs/fiche-societe/#suivi-des-cong%C3%A9s-pay%C3%A9s) |
| CLI_MethodeSuiviCPAcqMois | double | Champ de type double avec 1 chiffre entier et 4 décimales |
| CLI_MethodeRetenueCP | byte | [Méthode de retenue des CP](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-de-retenue-des-cp) (l'option en jours ouvrables est disponible si la société est affiliée à une caisse de CP) |
| CLI_GestionCPExclEnJours | boolean |  |
| CLI_MethodeArbitrage | byte | [Méthode d'arbitrage](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-darbitrage) |

### Base pour le calcul de l'ancienneté

![Fiche_societe_12](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_12.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_BaseCalculAnciennete | byte | [Base de calcul de l'ancienneté](https://silae-api.document360.io/api-rest/docs/fiche-societe/#base-de-calcul-de-lanciennet%C3%A9) |

## Effectifs

![Fiche_societe_19](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_19.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

La gestion des effectifs se fait via des fonctions API spécifique : [LectureEffectifSociete](https://silae-api.document360.io/api-rest/docs/lectureeffectifsociete) et [ModificationEffectifSociete](https://silae-api.document360.io/api-rest/docs/modificationeffectifsociete).

## Social et fiscal

![Fiche_societe_11](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_11.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_AffilieCCP | boolean |  |
| CLI_TaxeApprentissagePayeeCCP | boolean |  |
| CLI_PaieDecalee | boolean |  |
| CLI_DtDebChangePaieDecalee | DateTime |  |
| CLI_JourVersementSalaires | int |  |
| CLI_SortieAppliJourVersementSalaires | boolean |  |
| CLI_SortieAppliModeReglementNormal | boolean | Gestion inversée : false pour indiquer que la case est cochée, true pour indiquer qu'elle est décochée |
| CLI_TaxeCotPPrev | boolean |  |
| CLI_RegimeFiscalSocPers | boolean |  |

### FNAL supplémentaire

Le FNAL est géré par des fonctions API spécifiques : [LectureFNAL](https://silae-api.document360.io/api-rest/docs/lecturefnal) et [ModificationFNAL](https://silae-api.document360.io/api-rest/docs/modificationfnal).

### Déduction forfaitaire patronale TEPA

![Fiche_societe_8](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_8.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_DFPTepa | boolean |  |
| CLI_DFPTepaDebut | int |  |

### Participation à l'effort de construction

La participation à l'effort de construction est gérée par des fonctions API spécifiques : [LectureEffortConstruction](https://silae-api.document360.io/api-rest/docs/lectureeffortconstruction) et [ModificationEffortConstruction](https://silae-api.document360.io/api-rest/docs/modificationeffortconstruction).

### Taxe d'apprentissage

![Fiche_societe_20](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_20.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

La gestion de la taxe d'apprentissage sera gérée par des fonctions API spécifiques à venir.

### Participation à la formation professionnelle

![Fiche_societe_9](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_9.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_FormaProfTranche | byte | [Taille d'entreprise](https://silae-api.document360.io/api-rest/docs/fiche-societe/#taille-dentreprise) |
| CLI_FormaProfTrancheAnnee | int |  |
| CLI_FormaProfTrancheAnnee2 | int |  |
| CLI_FormaProfTrancheAnnee3 | int |  |
| CLI_FormaProfTrancheAnnee4 | int |  |

### Forfait social (participation, intéressement et épargne salariale)

![Fiche_societe_13](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_13.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_ForfaitSocialEffectif | byte | [Taille d'entreprise](https://silae-api.document360.io/api-rest/docs/fiche-societe/#taille-dentreprise-forfait-social) |

### Exercice comptable

![Fiche_societe_10](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_10.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_DtDebExerciceComptable | DateTime |  |
| CLI_DtFinExerciceComptable | DateTime |  |

### Données d'immatriculation société

![Fiche_societe_21](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_21.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_GreffeImmatriculationRcs | string[50] | Greffe d'immatriculation (RCS) |
| INT_CapitalSocial | Double | Capital social (€) |

## Conventions collectives

Les conventions collectives sont gérées par des fonctions API spécifiques : [LectureCCNSociete](https://silae-api.document360.io/api-rest/docs/lectureccnsociete) et [ModificationCCNSociete](https://silae-api.document360.io/api-rest/docs/modificationccnsociete).

## Informations bancaires

Les informations bancaires sont gérées par des fonctions API spécifiques : [LectureInformationBancaireSociete](https://silae-api.document360.io/api-rest/docs/lectureinformationbancairesociete) et [ModificationInformationBancaireSociete](https://silae-api.document360.io/api-rest/docs/modificationinformationbancairesociete).

## Questionnaire salariés

Non modifiable/lisible par API

## Paramétrage technique

### Gestion du matricule des salariés

![Fiche_societe_14](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_14.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_MatriculeLongueur | int |  |
| CLI_MatriculeAuto | boolean |  |
| CLI_MatriculeAutoGroupe | boolean |  |

### Liste des salariés

![Fiche_societe_15](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_15.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_ListesTriSalaries | byte | [Type de tri des listes de salariés](https://silae-api.document360.io/api-rest/docs/fiche-societe/#type-de-tri-des-listes-de-salari%C3%A9s) |

### Gestion des entrées / sorties des salariés

![Fiche_societe_16](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_16.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_CalcAutoESInactif | boolean |  |
| CLI_CalcAutoRegulInactif | boolean |  |
| CLI_ModuleCTCDActif | boolean |  |

### Gestion de la confidentialité des salariés

![Fiche_societe_17](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_17.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_ConfSalActive | boolean |  |

## Don par arrondi

![Fiche_societe_18](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_societe_18.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A12Z&se=2026-11-13T20%3A40%3A12Z&sr=c&sp=r&sig=EpJsoTZMpM5oCPHxaStrrfAjzU2kLLSgwZW6GiwlgDM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| CLI_DonArrondiActif | boolean |  |
| CLI_DonArrondiPctAbond | double | Double avec 6 chiffres entiers et 2 décimales |
