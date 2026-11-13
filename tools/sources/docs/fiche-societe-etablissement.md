---
title: "Fiche Société - Établissement"
slug: "fiche-societe-etablissement"
updated: 2024-10-01T12:14:12Z
published: 2024-10-01T12:14:12Z
canonical: "silae-api.document360.io/fiche-societe-etablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Fiche Société - Établissement

Cette fiche permet de lister les noms des champs de la fiche société en rapport avec les établissements ainsi que les informations associées.

## Identification

          Important

          

Le nom interne de l'établissement est modifiable par API. Il faut être vigilant en cas de modification, car ce nom interne est la clé pour identifier l'établissement lors de l'utilisation des fonctions API.

![Fiche_Etab_1](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_1.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_NomInterne | string[15] |  |
| ETA_DadsInactive | string[50] |  |
| ETA_DateCreation | DateTime |  |
| ETA_SiteDeclarantCIBTP | string[4] |  |
| INT_RaisonSociale | string[100] |  |
| INT_Enseigne | string[50] |  |
| INT_NumVoie | string[4] |  |
| INT_BTQC | string[10] |  |
| INT_NomVoie | string[32] |  |
| INT_ComplementAdresse | string[38] |  |
| INT_CodePostal | string[5] |  |
| INT_NomVille | string[32] |  |
| INT_FormeJuridique | string[4] |  |
| INT_SIRET | string[14] |  |
| INT_PseudoSiret | string[14] |  |
| ETA_NumeroFINESS | string[9] |  |
| ETA_NumeroFINESSParSalarie | boolean |  |
| INT_NAF | string[7] |  |
| INT_NAFPrecision | int |  |
| INT_CommuneINSEE | string[5] |  |
| INT_Commune | string[32] |  |
| INT_PaysISO | string[2] |  |
| INT_NomPays | string[38] |  |
| INT_TelBureau | string[20] |  |
| INT_Fax | string[20] |  |
| INT_Mel | string[60] |  |
| INT_SiteWeb | string[50] |  |

**En fonction de la forme juridique, les champs de saisie peuvent changer :** ![Fiche_Etab_2](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_2.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_ForceDroitCICE | string[15] |  |

![Fiche_Etab_3](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_3.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_Civilite | byte | [Civilité](https://silae-api.document360.io/api-rest/docs/fiche-societe/#civilit%C3%A9) |
| INT_NomUsuel | string[40] |  |
| INT_Prenom | string[50] |  |
| INT_DateNaissance | DateTime |  |
| INT_DateDeces | DateTime |  |

**En fonction du pays, des champs de saisie peuvent se rajouter :** ![Fiche_Etab_4](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_4.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_PaysISOJF | string[2] |  |
| INT_CodePostalJF | string[5] |  |

## Employeur signataire

![Fiche_Etab_5](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_5.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_EmployeurCivilite | byte | [Civilité](https://silae-api.document360.io/api-rest/docs/fiche-societe/#civilit%C3%A9) |
| ETA_EmployeurNom | string[30] |  |
| ETA_EmployeurPrenom | string[30] |  |
| ETA_EmployeurQualite | byte | [Qualité de l'employeur](https://silae-api.document360.io/api-rest/docs/fiche-societe/#qualit%C3%A9-employeur) |
| ETA_EmployeurQualiteAutre | string[30] | N'est utile que lorsque **ETA_EmployeurQualite** vaut **90 - Autre** |

## Personne à contacter

![Fiche_Etab_6](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_6.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_PersonneAContacterNom | string[30] |  |
| ETA_PersonneAContacterPrenom | string[30] |  |
| ETA_PersonneAContacterTel | string[20] |  |
| ETA_PersonneAContacterMel | string[60] |  |

## Paramètres de paie

![Fiche_Etab_7](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_7.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_DureeHebdo | double | 2 entiers, 2 décimales |
| ETA_PrefixeMatriculeSalaries | string[7] |  |

### Méthodes

Si plusieurs établissement sont présents pour la société et qu'au niveau société la case **Les méthodes de suivi des absences sont gérées dans chaque établissement (CLI_MethodesSuiviAbsencesDansEta)** est cochée, les 2 blocs suivants sont disponibles et peuvent donc être gérés via API.

#### Méthodes pour le suivi des absences

![Fiche_Etab_8](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_8.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_MethodeSuiviAbsencesJC | byte | [Traitement des absences](https://silae-api.document360.io/api-rest/docs/fiche-societe/#traitement-des-absences) |
| ETA_MethodeSuiviAbsences | byte | [Méthode de suivi des absences](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-de-suivi-des-absences) |
| ETA_SousMethodeSuiviAbsences | byte | [Sous-méthode de suivi des absences](https://silae-api.document360.io/api-rest/docs/fiche-societe/#sousm%C3%A9thode-de-suivi-des-absences) |
| ETA_SousMethodeSuiviAbsenceFJ | byte | Type byte qui est ensuite transformé en booléen. Il prend donc les valeur **0** (pour false) et **1** (pour true) |
| ETA_MethodeSuiviAbsencesDeductionHM | byte | [Déduction des heures majorées](https://silae-api.document360.io/api-rest/docs/fiche-societe/#d%C3%A9duction-des-heures-major%C3%A9es) |
| ETA_CalcAutoMaintienInactif | boolean | Indique si le calcul automatique du maintien de salaire est activé (**false**) ou désactivé (**true**) |
| ETA_MethodeCalculMaintien | byte | [Méthode de calcul du maintien](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-de-calcul-du-maintien) |
| ETA_MethodeCalculMaintienNbM | int | Nombre de mois |
| ETA_Subrogation | boolean |  |
| ETA_SubrogationVersEtaPrincipal | boolean | Case à cocher disponible lorsque plusieurs établissements existent et que la subrogation est active |
| ETA_CalcAutoIJSSInactif | boolean | Indique si l'entreprise avance les IJSS |
| ETA_TassageAbsencesJours | int | Détermine à partir de combien de jours il faut favoriser en tenant compte de la présence |
| ETA_ChaineFabricationDateLimiteAbsence | string[6] | Le détail des valeurs à saisir est disponible dans [l'article correspondant](https://silae.document360.io/docs/decaler-ou-limiter-le-traitement-des-absences) de la base de connaissance Silae |

#### Méthodes pour le suivi des congés payés

![Fiche_Etab_9](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_9.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_MethodeSuiviCP | byte | [Suivi des congés payés](https://silae-api.document360.io/api-rest/docs/fiche-societe/#suivi-des-cong%C3%A9s-pay%C3%A9s) |
| ETA_MethodeSuiviCPAcqMois | double | Champ de type double avec 1 chiffre entier et 4 décimales |
| ETA_MethodeRetenueCP | byte | [Méthode de retenue des CP](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-de-retenue-des-cp) (l'option en jours ouvrables est disponible si la société est affiliée à une caisse de CP) |
| ETA_GestionCPExclEnJours | boolean |  |
| ETA_MethodeArbitrage | byte | [Méthode d'arbitrage](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-darbitrage) |

### Congés payés

![Fiche_Etab_10](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_10.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_MoisClotureCP | string[2] | Correspond au numéro de mois, 01 pour janvier, 02 pour février, ... |
| ETA_ClotureCPArrondiInactif | boolean |  |
| ETA_ClotureCPReport | boolean |  |

### RTT

![Fiche_Etab_11](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_11.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_MoisClotureRTT | string[2] | Correspond au numéro de mois, 01 pour janvier, 02 pour février, ... |
| ETA_ClotureRTTReport | boolean |  |
| ETA_RTTEnHeures | double | 2 entiers, 2 décimales |

### Repos

![Fiche_Etab_12](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_12.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_MoisClotureRepos | string[2] | Correspond au numéro de mois, 01 pour janvier, 02 pour février, ... |

### Forfaits jours

![Fiche_Etab_13](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_13.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_MoisClotureFJ | string[2] | Correspond au numéro de mois, 01 pour janvier, 02 pour février, ... |

### Horaires par défaut de l'établissement

![Fiche_Etab_14](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_14.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_SuiviContingentAnnuelHS | boolean | Suivi contingent annuel d'heures supplémentaires |
| ETA_SaisieManuelleHeuresAbsences | boolean | Saisie manuelle des heures d'absences |
| ETA_HTLun | int | Heures travaillées |
| ETA_HTMar | int | Heures travaillées |
| ETA_HTMer | int | Heures travaillées |
| ETA_HTJeu | int | Heures travaillées |
| ETA_HTVen | int | Heures travaillées |
| ETA_HTSam | int | Heures travaillées |
| ETA_HTDim | int | Heures travaillées |
| ETA_TotHT | int | Heures travaillées total |
| ETA_HTNLun | int | Heures travaillées de nuit |
| ETA_HTNMar | int | Heures travaillées de nuit |
| ETA_HTNMer | int | Heures travaillées de nuit |
| ETA_HTNJeu | int | Heures travaillées de nuit |
| ETA_HTNVen | int | Heures travaillées de nuit |
| ETA_HTNSam | int | Heures travaillées de nuit |
| ETA_HTNDim | int | Heures travaillées de nuit |
| ETA_TotHTN | int | Heures travaillées de nuit total |
| ETA_HNLun | int | Heures normales |
| ETA_HNMar | int | Heures normales |
| ETA_HNMer | int | Heures normales |
| ETA_HNJeu | int | Heures normales |
| ETA_HNVen | int | Heures normales |
| ETA_HNSam | int | Heures normales |
| ETA_HNDim | int | Heures normales |
| ETA_TotHN | int | Heures normales total |
| ETA_HMLun | int | Heures majorées |
| ETA_HMMar | int | Heures majorées |
| ETA_HMMer | int | Heures majorées |
| ETA_HMJeu | int | Heures majorées |
| ETA_HMVen | int | Heures majorées |
| ETA_HMSam | int | Heures majorées |
| ETA_HMDim | int | Heures majorées |
| ETA_TotHM | int | Heures majorées total |
| ETA_HL1Lun | int | Heures libres 1 |
| ETA_HL1Mar | int | Heures libres 1 |
| ETA_HL1Mer | int | Heures libres 1 |
| ETA_HL1Jeu | int | Heures libres 1 |
| ETA_HL1Ven | int | Heures libres 1 |
| ETA_HL1Sam | int | Heures libres 1 |
| ETA_HL1Dim | int | Heures libres 1 |
| ETA_TotHL1 | int | Heures libres 1 total |
| ETA_HL2Lun | int | Heures libres 2 |
| ETA_HL2Mar | int | Heures libres 2 |
| ETA_HL2Mer | int | Heures libres 2 |
| ETA_HL2Jeu | int | Heures libres 2 |
| ETA_HL2Ven | int | Heures libres 2 |
| ETA_HL2Sam | int | Heures libres 2 |
| ETA_HL2Dim | int | Heures libres 2 |
| ETA_TotHL2 | int | Heures libres 2 total |
| ETA_HL3Lun | int | Heures libres 3 |
| ETA_HL3Mar | int | Heures libres 3 |
| ETA_HL3Mer | int | Heures libres 3 |
| ETA_HL3Jeu | int | Heures libres 3 |
| ETA_HL3Ven | int | Heures libres 3 |
| ETA_HL3Sam | int | Heures libres 3 |
| ETA_HL3Dim | int | Heures libres 3 |
| ETA_TotHL3 | int | Heures libres 3 total |
| ETA_TotHLun | int | Total heures |
| ETA_TotHMar | int | Total heures |
| ETA_TotHMer | int | Total heures |
| ETA_TotHJeu | int | Total heures |
| ETA_TotHVen | int | Total heures |
| ETA_TotHSam | int | Total heures |
| ETA_TotHDim | int | Total heures |
| ETA_TotH | int | Total heures total |
| ETA_HNHoraireMensuel | int | Heures normales mensuelles |
| ETA_HMHoraireMensuel | int | Heures majorées mensuelles |
| ETA_PctHeuresMajorees | double | Pourcentage des heures majorées |
| ETA_HL1HoraireMensuel | int | Heures libre 1 mensuelles |
| ETA_HL2HoraireMensuel | int | Heures libre 2 mensuelles |
| ETA_HL3HoraireMensuel | int | Heures libre 3 mensuelles |
| ETA_HLIBRECV1 | int | CV Heures libres 1 mensuelles |
| ETA_HLIBRECV2 | int | CV Heures libres 2 mensuelles |
| ETA_HLIBRECV3 | int | CV Heures libres 3 mensuelles |
| ETA_HLIBRECT1 | int | CT Heures libres 1 mensuelles |
| ETA_HLIBRECT2 | int | CT Heures libres 2 mensuelles |
| ETA_HLIBRECT3 | int | CT Heures libres 3 mensuelles |
| ETA_TOTHEBDOHN | int | Total heures normales hebdomadaires |
| ETA_TOTHEBDOHM | int | Total heures majorées hebdomadaires |
| ETA_TOTHEBDOHL1 | int | Total heures libres 1 hebdomadaires |
| ETA_TOTHEBDOHL2 | int | Total heures libres 2 hebdomadaires |
| ETA_TOTHEBDOHL3 | int | Total heures libres 3 hebdomadaires |
| ETA_TotHoraireMensuel | int | Total heures mensuelles |
| ETA_TOTHEBDO | int | Total des heures hebdomadaires |

### Activité journalière

![Fiche_Etab_15](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_15.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_ModeSaisieActiviteJournaliere | byte | Permet de définir le [mode de saisie de l'activité journalière](https://silae-api.document360.io/api-rest/docs/fiche-societe/#mode-de-saisie-de-lactivit%C3%A9-journali%C3%A8re) |
| ETA_DecoupageActiviteJournaliere | byte | Permet d'indiquer si le calcul des heures supplémentaires se fait par semaine ou par mois : [Découpage activité journalière](https://silae-api.document360.io/api-rest/docs/fiche-societe/#d%C3%A9coupage-de-lactivit%C3%A9-journali%C3%A8re) |
| ETA_DecalageActiviteJournaliere | int | Permet de définir le décalage de l'activité journalière : Lorsque SEM_DecoupageActiviteJournaliere vaut “Mois”, le décalage en semaine est interdit et les valeurs possibles sont : 0 pour pas de décalage, 100 pour décalage d'un mois. Lorsque SEM_DecoupageActiviteJournaliere vaut “Semaine”, les valeurs possibles sont : 0 pas de décalage, 1, 2, 3, 4 pour le nombre de semaines. |
| Le décalage peut être aussi d'un mois complet, dans ce cas, renseigner la valeur 100. |  |  |
| ETA_JourDebSemActiviteJournaliere | byte | [Jour de la semaine](https://silae-api.document360.io/api-rest/docs/fiche-societe/#jour-de-la-semaine) |

### Jours fériés travaillés

![Fiche_Etab_16](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_16.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_JoursFeriesTravailles | string[255] | **ETA_JoursFeriesTravailles :** Ce champ est une chaîne de caractères structurée avec la liste des jours fériés travaillés représentés par un code (cf. détail ci-dessous) séparés par des '+'. Par exemple : "0111+ASC+" qui correspond aux cases "Toussaint" et "Acsension". [Liste des jours fériés](https://silae-api.document360.io/api-rest/docs/fiche-societe/#jours-f%C3%A9ri%C3%A9s) |
| ETA_JourneeSolidarite | string[5] | [Journée de solidarité](https://silae-api.document360.io/api-rest/docs/fiche-societe/#journ%C3%A9e-de-solidarit%C3%A9) |

### Fractionnement des congés payés

![Fiche_Etab_17](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_17.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_FractionnementCP | boolean |  |
| ETA_FractionnementCPMoisDebut | int | 0 représente "non renseigné", 1 correspond à janvier, 2 à février, ... |
| ETA_FractionnementCPMoisFin | int | 0 représente "non renseigné", 1 correspond à janvier, 2 à février, ... |
| ETA_FractionnementCPMoisCalcSpe | int | 0 représente "non renseigné", 1 correspond à janvier, 2 à février, ... |

### Gestion des contrats à Durée Déterminée

![Fiche_Etab_18](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_18.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_CDDPaiMensIndPrecarite | boolean |  |
| ETA_CDDPaiMensIndCP | boolean |  |

### Gestion des tickets restaurants

![Fiche_Etab_19](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_19.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_TResto | boolean |  |
| ETA_TRestoNomVariable | string[10] |  |
| ETA_TRestoPartSalariale | double | 3 entiers, 2 décimales |

### Gestion des titres de transport

![Fiche_Etab_20](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_20.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_TitresTrs | boolean |  |

## Social et fiscal

### Régime de base obligatoire

![Fiche_Etab_21](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_21.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_S41_G01_00_018_001 | string[3] | [Code régime de base obligatoire pour la première ligne](https://silae-api.document360.io/api-rest/docs/fiche-societe/#code-r%C3%A9gime-de-base-obligatoire) |
| ETA_S41_G01_00_018_001_Comp | string[70] | Code régime de base obligatoire pour les lignes suivantes (cf. champ **ETA_S41_G01_00_018_001** pour les valeurs disponibles). Les lignes suivantes ne sont disponibles que pour l'établissement principal et le champ est la concaténation des codes avec comme séparateur de ligne **;** |
| ETA_S41_G01_00_018_006 | string[2] | 01 représente la case cochée, vide représente la case cochée |
| ETA_AssimiliesCadresPrevoyanceNonCadre | boolean | Indique si les articles 36 bénéficient de la prévoyance non cadre (**true**) ou pas (**false**) |

### Taux AT

![Fiche_Etab_22](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_22.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_S41_G01_00_025_x | string[2] | Section - ligne x |
| ETA_S41_G01_00_026_x | string[5] | Code risque - ligne x |
| ETA_S41_G01_00_027_x | string[1] | Code Bureau, ce champ contient soit la valeur 'B' soit vide - ligne x |
| ETA_S41_G01_00_028_x | double | Taux spécifique (3 entiers, 2 décimales) - ligne x |
| ETA_PeriodeRegulTauxAT_x | DateTime | Mois d'application - ligne x |

Dans cet écran il y a 10 lignes. Pour les champs indiqués dans le tableau ci-dessus, le '_x' correspond au numéro de ligne, qui va de 1 à 10.

### Taxe versement transport

![Fiche_Etab_23](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_23.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_VTrsAuto | boolean | Versement et calcul automatique de la taxe |
| ETA_CodeRegion | string[5] | Code région - Standard |
| ETA_TauxVersementTrs | double | Taux spécifique (3 entiers, 2 décimales) - Standard |
| ETA_VTACodeRegion | string[5] | Code région - Additionnelle |
| ETA_VTATaux | double | Taux spécifique (3 entiers, 2 décimales) - Additionnelle |

Les abattements sont traités via des fonctions API spécifiques : [LectureTaxeTransport](https://silae-api.document360.io/api-rest/docs/lecturetaxetransport) et [ModificationTaxeTransport](https://silae-api.document360.io/api-rest/docs/modificationtaxetransport).

### Taxe d'apprentissage

![Fiche_Etab_24](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_24.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

Fonctionnement pour les périodes antérieures à 2022 :

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_SoumisTaxeAppr | boolean |  |
| ETA_SoumisTaxeApprAvecMajoration | boolean |  |

Fonctionnement pour les périodes à partir de 2022 :

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_TAEtablissementDiffereSociete | boolean |  |
| Les autres champs ne sont pas exploitables via API. |  |  |

### Taxe sur les salaires

![Fiche_Etab_25](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_25.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_SoumisTaxeSalaires | boolean |  |
| ETA_SoumisTaxeSalairesPctImp | double | 3 entiers, 2 décimales |
| ETA_TaxeSalairesSurSeuilsAnnuel | boolean |  |
| ETA_TaxeSalairesAbattement | boolean |  |

### La cotisation sur valeur ajoutée des entreprises (CVAE)

![Fiche_Etab_26](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_26.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_NonSoumisCVAE | boolean | Indique si l'établissement est soumis à la CVAE (**false**) ou pas (**true**) |

### Exonérations

![Fiche_Etab_27](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_27.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_ExoJEIDateDebut | DateTime |  |

### Effectifs

![Fiche_Etab_28](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_28.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

Les effectifs sont gérés via des fonctions API spécifiques : [LectureEffectifEtablissement](https://silae-api.document360.io/api-rest/docs/lectureeffectifetablissement) et [ModificationEffectifEtablissement](https://silae-api.document360.io/api-rest/docs/modificationeffectifetablissement).

### Frais de santé

![Fiche_Etab_29](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Etab_27.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A16Z&se=2026-11-13T20%3A40%3A16Z&sr=c&sp=r&sig=FoLxnoufCC3NS3BH09AmSgxK2bEAu66B0pFvj4xzbW8%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| ETA_FSMethode | byte | [Méthode d'application](https://silae-api.document360.io/api-rest/docs/fiche-societe/#m%C3%A9thode-dapplication-des-frais-de-sant%C3%A9) |
| ETA_FSConserverCondAnc | boolean |  |

## Questionnaire conventionnel

Les questionnaires conventionnels sont gérés via des fonctions API spécifiques.
