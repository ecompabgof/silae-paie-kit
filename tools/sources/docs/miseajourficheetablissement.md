---
title: "MiseAJourFicheEtablissement"
slug: "miseajourficheetablissement"
updated: 2023-05-19T10:53:00Z
published: 2023-05-19T10:53:00Z
canonical: "silae-api.document360.io/miseajourficheetablissement"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# MiseAJourFicheEtablissement

## Fonction API

```
/v1/FicheSociete/MiseAJourFicheEtablissement
```

## Verbe HTTP

Post

          

## Description

          

Permet de mettre à jour les informations d'un établissement de la fiche société

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| nomInterne | string | Nom interne de l'établissement à modifier |
| etablissementInfoSup | EtablissementInfoSup | Élément structuré contenant les informations sur l'établissement à mettre à jour (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### EtablissementInfoSup

| Paramètre | Type | Description |
| --- | --- | --- |
| bETA_AcquisitionHeuresDIF | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_AcquisitionHeuresDIF**true) ou non (false) |
| etA_AcquisitionHeuresDIF | number(double) | Obsolète |
| bETA_AssimiliesCadresPrevoyanceNonCadre | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_AssimiliesCadresPrevoyanceNonCadre** (true) ou non (false) |
| etA_AssimiliesCadresPrevoyanceNonCadre | boolean | Permet d'indiquer si les articles 36 bénéficient de la prévoyance non cadre (**true**) ou pas (**false**) |
| bETA_BulletinEditionDIF | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_BulletinEditionDIF** (true) ou non (false) |
| etA_BulletinEditionDIF | integer(int32) | Obsolète |
| bETA_CalcAutoIJSSInactif | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_CalcAutoIJSSInactif** (true) ou non (false) |
| etA_CalcAutoIJSSInactif | boolean | Permet d'indiquer si l'établissement avance les IJSS (**false**) ou non (**true**) |
| bETA_CalcAutoMaintienInactif | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_CalcAutoMaintienInactif** (true) ou non (false) |
| etA_CalcAutoMaintienInactif | boolean | Permet d'indiquer si le calcul automatique du maintien de salaire est activé (**false**) ou désactivé (**true**) |
| bETA_CDDPaiMensIndCP | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_CDDPaiMensIndCP** (true) ou non (false) |
| etA_CDDPaiMensIndCP | boolean | Permet d'indiquer, pour les CDD, si les indemnités de congés payés sont versées mensuellement (**true**) ou non (**false**) |
| bETA_CDDPaiMensIndPrecarite | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_CDDPaiMensIndPrecarite** (true) ou non (false) |
| etA_CDDPaiMensIndPrecarite | boolean | Permet d'indiquer, pour les CDD, si les indemnités de précarité sont versées mensuellement (**true**) ou non (**false**) |
| bETA_ChaineFabricationDateLimiteAbsences | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_ChaineFabricationDateLimiteAbsences** (true) ou non (false) |
| etA_ChaineFabricationDateLimiteAbsences | string | Permet de configurer la date limite de prise en compte des absences (cf. fiche "Décaler ou limiter le traitement des absences" de la base de connaissance Silae) |
| bETA_ClotureCPArrondiInactif | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_ClotureCPArrondiInactif** (true) ou non (false) |
| etA_ClotureCPArrondiInactif | boolean | Permet d'activer (**false**) ou désactiver (**true**) l'arrondi automtique du total des congés |
| bETA_ClotureCPReport | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_ClotureCPReport** (true) ou non (false) |
| etA_ClotureCPReport | boolean | Permet d'activer (**true**) ou désactiver (**false**) le report automatique du solde des congés |
| bETA_ClotureRTTReport | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_ClotureRTTReport** (true) ou non (false) |
| etA_ClotureRTTReport | boolean | Permet d'activer (**true**) ou désactiver (**false**) le report automatique du solde des RTT |
| bETA_CodeBTAPEMSA | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_CodeBTAPEMSA** (true) ou non (false) |
| etA_CodeBTAPEMSA | string | Code BTAPE, présent en fonction du secteur d'activité |
| bETA_CodeRegion | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_CodeRegion** (true) ou non (false) |
| etA_CodeRegion | string | Permet d'indiquer le code région pour la taxe versement transport standard (5 caractères) |
| bETA_DadsInactive | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_DadsInactive** (true) ou non (false) |
| etA_DadsInactive | boolean | Permet d'indiquer si l'éblissement est inactif pour la DADS (**true**) ou pas (**false**) |
| bETA_DecalageActiviteJournaliere | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_DecalageActiviteJournaliere** (true) ou non (false) |
| etA_DecalageActiviteJournaliere | integer(int32) | Permet de définir le décalage de l'activité journalière. Lorsque **etA_DecoupageActiviteJournaliere** vaut “Mois”, le décalage en semaine est interdit et les valeurs possibles sont : 0 pour pas de décalage, 100 pour décalage d'un mois. Lorsque **ETA_DecoupageActiviteJournaliere** vaut “Semaine”, les valeurs possibles sont : 0 pas de décalage, 1, 2, 3, 4 pour le nombre de semaines. Le décalage peut être aussi d'un mois complet, dans ce cas, renseigner la valeur 100. |
| bETA_DecoupageActiviteJournaliere | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_DecoupageActiviteJournaliere** (true) ou non (false) |
| etA_DecoupageActiviteJournaliere | integer(int32) | Permet de configurer le découpage de l'activité journalière : \| Type de découpage \| Valeur correspondante \| \| --- \| --- \| \| Semaine \| 0 \| \| Mois \| 1 \| |
| Type de découpage | Valeur correspondante |
| Semaine | 0 |
| Mois | 1 |
| bETA_DureeHebdo | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_DureeHebdo** (true) ou non (false) |
| etA_DureeHebdo | number(double) | Durée hebdomadaire du travail |
| bETA_EmployeurCivilite | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_EmployeurCivilite** (true) ou non (false) |
| etA_EmployeurCivilite | integer(int32) | Civilité de l'employeur signataire : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| bETA_EmployeurNom | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_EmployeurNom** (true) ou non (false) |
| etA_EmployeurNom | string | Nom de l'employeur signataire |
| bETA_EmployeurPrenom | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_EmployeurPrenom** (true) ou non (false) |
| etA_EmployeurPrenom | string | Prénom de l'employeur signataire |
| bETA_EmployeurQualite | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_EmployeurQualite** (true) ou non (false) |
| etA_EmployeurQualite | integer(int32) | Qualité de l'employeur signataire : \| Qualité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Chef d'entreprise \| 10 \| \| Gérant \| 20 \| \| Directeur \| 30 \| \| Chef du personnel \| 40 \| \| Comptable \| 50 \| \| Administrateur judiciaire \| 60 \| \| Mandataire liquidateur \| 70 \| \| Autre \| 90 \| |
| Qualité | Valeur correspondante |
| Vide | 0 |
| Chef d'entreprise | 10 |
| Gérant | 20 |
| Directeur | 30 |
| Chef du personnel | 40 |
| Comptable | 50 |
| Administrateur judiciaire | 60 |
| Mandataire liquidateur | 70 |
| Autre | 90 |
| bETA_EmployeurQualiteAutre | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_EmployeurQualiteAutre** (true) ou non (false) |
| etA_EmployeurQualiteAutre | string | Qualité de l'employeur signataire. N'est utile que lorsque etA_EmployeurQualite vaut "Autre" |
| bETA_ExoJEIDateDebut | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_ExoJEIDateDebut** (true) ou non (false) |
| etA_ExoJEIDateDebut | string(date-time) | Permet d'indiquer la date de début d'exonération pour les jeunes entreprises innovantes |
| bETA_ForceDroitCICE | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_ForceDroitCICE** (true) ou non (false) |
| etA_ForceDroitCICE | boolean | Permet d'indiquer s'il faut exclure l'établissement du CICE (**false**) ou non (**true**) |
| bETA_FractionnementCP | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_FractionnementCP** (true) ou non (false) |
| etA_FractionnementCP | boolean | Permet d'indiquer si l'établissement pratiqur (**true**) ou pas (**false**) de fractionnement des congés payés |
| bETA_FractionnementCPMoisCalcSpe | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_FractionnementCPMoisCalcSpe** (true) ou non (false) |
| etA_FractionnementCPMoisCalcSpe | integer(int32) | Permet d'indiquer le mois spécifique pour le calcul (valeur entre 0 et 12 pour désigner le mois, 0 étant l'équivalent à "non-renseigné") |
| bETA_FractionnementCPMoisDebut | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_FractionnementCPMoisDebut** (true) ou non (false) |
| etA_FractionnementCPMoisDebut | integer(int32) | Permet d'indiquer le mois de début de la période de fractionnement (valeur entre 0 et 12 pour désigner le mois, 0 étant l'équivalent à "non-renseigné") |
| bETA_FractionnementCPMoisFin | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_FractionnementCPMoisFin** (true) ou non (false) |
| etA_FractionnementCPMoisFin | integer(int32) | Permet d'indiquer le mois de fin de la période de fractionnement (valeur entre 0 et 12 pour désigner le mois, 0 étant l'équivalent à "non-renseigné") |
| bETA_FSConserverCondAnc | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_FSConserverCondAnc** (true) ou non (false) |
| etA_FSConserverCondAnc | boolean | Permet d'indiquer s'il faut conserver la condition d'ancienneté (**true**) ou pas (**false**) pour les frais de santé |
| bETA_FSMethode | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_FSMethode** (true) ou non (false) |
| etA_FSMethode | integer(int32) | Permet de configurer l'application des frais de santé : \| Mode d'application des frais de santé \| Valeur correspondante \| \| --- \| --- \| \| Application du paramétrage spécifique au dossier \| 1 \| \| Application des frais de santé conventionnels \| 2 \| |
| Mode d'application des frais de santé | Valeur correspondante |
| Application du paramétrage spécifique au dossier | 1 |
| Application des frais de santé conventionnels | 2 |
| bETA_GestionCPExclEnJours | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_GestionCPExclEnJours** (true) ou non (false) |
| etA_GestionCPExclEnJours | boolean | Permet d'indiquer si la gestion des congés payés se fait exclusivement en jours (**true**) ou pas (**false**) |
| bETA_JourDebSemActiviteJournaliere | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_JourDebSemActiviteJournaliere** (true) ou non (false) |
| etA_JourDebSemActiviteJournaliere | integer(int32) | Permet d'indiquer quel à quel jour démarre la semaine d'activité : \| Jour de la semaine \| Valeur correspondante \| \| --- \| --- \| \| Lundi \| 0 \| \| Mardi \| 1 \| \| Mercredi \| 2 \| \| Jeudi \| 3 \| \| Vendredi \| 4 \| \| Samedi \| 5 \| \| Dimanche \| 6 \| |
| Jour de la semaine | Valeur correspondante |
| Lundi | 0 |
| Mardi | 1 |
| Mercredi | 2 |
| Jeudi | 3 |
| Vendredi | 4 |
| Samedi | 5 |
| Dimanche | 6 |
| bETA_JourneeSolidarite | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_JourneeSolidarite** (true) ou non (false) |
| etA_JourneeSolidarite | string | Permet de configurer la journée de solidarité. Ce champ est une chaîne de caractère contenant un seul jour férié, représenté par son code (cf. détail ci-dessous). Par exemple : "PENT" qui correpond au Lundi de Pentecôte. \| Jour férié \| Valeur correspondante \| \| --- \| --- \| \| Jour de l'an - 01/01 \| 0101 \| \| Fête du travail - 01/05 \| 0105 \| \| Victoire 1945 - 08/05 \| 0805 \| \| Fête Nationale - 14/07 \| 1407 \| \| Assomption - 15/08 \| 1508 \| \| Toussaint - 01/11 \| 0111 \| \| Armistice 1918 - 11/11 \| 1111 \| \| Noël - 25/12 \| 2512 \| \| Lendemain de Noël - 26/12 \| 2612 \| \| Ascension \| ASC \| \| Lundi de Pâques \| PAQUE \| \| Lundi de Pentecôte \| PENT \| \| Vendredi Saint \| VENDS \| |
| Jour férié | Valeur correspondante |
| Jour de l'an - 01/01 | 0101 |
| Fête du travail - 01/05 | 0105 |
| Victoire 1945 - 08/05 | 0805 |
| Fête Nationale - 14/07 | 1407 |
| Assomption - 15/08 | 1508 |
| Toussaint - 01/11 | 0111 |
| Armistice 1918 - 11/11 | 1111 |
| Noël - 25/12 | 2512 |
| Lendemain de Noël - 26/12 | 2612 |
| Ascension | ASC |
| Lundi de Pâques | PAQUE |
| Lundi de Pentecôte | PENT |
| Vendredi Saint | VENDS |
| bETA_JoursFeriesTravailles | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_JoursFeriesTravailles** (true) ou non (false) |
| etA_JoursFeriesTravailles | string | Permet d'indiquer quels sont les jours fériés travaillés. Ce champ est une chaîne de caractères structurée avec la liste des jours fériés travaillés représentés par un code (cf. détail ci-dessous) séparés par des '+'. Par exemple : "0111+ASC+" qui correspond aux cases "Toussaint" et "Acsension" cochée dans l'interface. Liste des jours fériés : \| Jour férié \| Valeur correspondante \| \| --- \| --- \| \| Jour de l'an - 01/01 \| 0101 \| \| Fête du travail - 01/05 \| 0105 \| \| Victoire 1945 - 08/05 \| 0805 \| \| Fête Nationale - 14/07 \| 1407 \| \| Assomption - 15/08 \| 1508 \| \| Toussaint - 01/11 \| 0111 \| \| Armistice 1918 - 11/11 \| 1111 \| \| Noël - 25/12 \| 2512 \| \| Lendemain de Noël - 26/12 \| 2612 \| \| Ascension \| ASC \| \| Lundi de Pâques \| PAQUE \| \| Lundi de Pentecôte \| PENT \| \| Vendredi Saint \| VENDS \| |
| Jour férié | Valeur correspondante |
| Jour de l'an - 01/01 | 0101 |
| Fête du travail - 01/05 | 0105 |
| Victoire 1945 - 08/05 | 0805 |
| Fête Nationale - 14/07 | 1407 |
| Assomption - 15/08 | 1508 |
| Toussaint - 01/11 | 0111 |
| Armistice 1918 - 11/11 | 1111 |
| Noël - 25/12 | 2512 |
| Lendemain de Noël - 26/12 | 2612 |
| Ascension | ASC |
| Lundi de Pâques | PAQUE |
| Lundi de Pentecôte | PENT |
| Vendredi Saint | VENDS |
| bETA_MethodeArbitrage | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeArbitrage** (true) ou non (false) |
| etA_MethodeArbitrage | integer(int32) | Permet de configurer l'arbitrage des congés payés : \| Méthode d'arbitrage \| Valeur correspondante \| \| --- \| --- \| \| L'arbitrage des CP se fait à chaque prise \| 0 \| \| L'arbitrage des CP se fait lors de la dernière prise \| 1 \| \| L'arbitrage des CP se fait au mois de clôture des CP \| 2 \| \| L'arbitrage des CP se fait manuellement \| 3 \| |
| Méthode d'arbitrage | Valeur correspondante |
| L'arbitrage des CP se fait à chaque prise | 0 |
| L'arbitrage des CP se fait lors de la dernière prise | 1 |
| L'arbitrage des CP se fait au mois de clôture des CP | 2 |
| L'arbitrage des CP se fait manuellement | 3 |
| bETA_MethodeCalculMaintien | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeCalculMaintien** (true) ou non (false) |
| etA_MethodeCalculMaintien | integer(int32) | Permet de configurer la méthode de calcul du maintien : \| Méthode de calcul du maintien \| Valeur correpsondante \| \| --- \| --- \| \| Sur la base du bulletin courant \| 0 \| \| Sur la base des salaires rétablis des n mois précédents \| 10 \| |
| Méthode de calcul du maintien | Valeur correpsondante |
| Sur la base du bulletin courant | 0 |
| Sur la base des salaires rétablis des n mois précédents | 10 |
| bETA_MethodeCalculMaintienNbM | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeCalculMaintienNbM** (true) ou non (false) |
| etA_MethodeCalculMaintienNbM | integer(int32) | Permet d'indiquer le nombre de mois pour les salaires rétablis (valable si la valeur sélectionnée pour **etA_MethodeCalculMaintien** est 10 |
| bETA_MethodeRetenueCP | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeRetenueCP** (true) ou non (false) |
| etA_MethodeRetenueCP | integer(int32) | Permet de configurer la méthode de retenue des CP : \| Méthode de retenue \| Valeur correspondante \| \| --- \| --- \| \| Retenue des congés payés de fait en jours \| 0 \| \| Retenue des congés payés de fait en heures \| 1 \| \| Retenue des congés payés de fait en jours ouvrables \| 2 \| |
| Méthode de retenue | Valeur correspondante |
| Retenue des congés payés de fait en jours | 0 |
| Retenue des congés payés de fait en heures | 1 |
| Retenue des congés payés de fait en jours ouvrables | 2 |
| bETA_MethodeSuiviAbsences | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeSuiviAbsences** (true) ou non (false) |
| etA_MethodeSuiviAbsences | integer(int32) | Permet de configurer la méthode de suivi des absences : \| Méthode de suivi des absences \| Valeur correspondante \| \| --- \| --- \| \| Suivi des absences en heures \| 0 \| \| Suivi des absences en jours ouvrables \| 1 \| \| Suivi des absences en jours ouvrés \| 2 \| |
| Méthode de suivi des absences | Valeur correspondante |
| Suivi des absences en heures | 0 |
| Suivi des absences en jours ouvrables | 1 |
| Suivi des absences en jours ouvrés | 2 |
| bETA_MethodeSuiviAbsencesDeductionHM | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeSuiviAbsencesDeductionHM** (true) ou non (false) |
| etA_MethodeSuiviAbsencesDeductionHM | integer(int32) | Permet de configurer comment se fait la déduction des heures majorées : \| Déduction des heures \| Valeur correspondante \| \| --- \| --- \| \| Déduction des heures majorées au jour le jour \| 0 \| \| Déduction des heures majorées à la semaine \| 1 \| \| Déduction des heures majorées au mois \| 2 \| |
| Déduction des heures | Valeur correspondante |
| Déduction des heures majorées au jour le jour | 0 |
| Déduction des heures majorées à la semaine | 1 |
| Déduction des heures majorées au mois | 2 |
| bETA_MethodeSuiviAbsencesJC | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeSuiviAbsencesJC** (true) ou non (false) |
| etA_MethodeSuiviAbsencesJC | integer(int32) | Permet de configurer la méthode de traitement des absences en jours calendaires : \| Méthode de suivi des absences \| Valeur correspondante \| \| --- \| --- \| \| Traitement des absences pas en jours non calendaires \| 0 \| \| Traitement des absences en jours calendaires pour les absences générant du maintien \| 1 \| \| Traitement des absences en jours calendaires pour toutes les absences \| 99 \| |
| Méthode de suivi des absences | Valeur correspondante |
| Traitement des absences pas en jours non calendaires | 0 |
| Traitement des absences en jours calendaires pour les absences générant du maintien | 1 |
| Traitement des absences en jours calendaires pour toutes les absences | 99 |
| bETA_MethodeSuiviCP | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeSuiviCP** (true) ou non (false) |
| etA_MethodeSuiviCP | integer(int32) | Permet de configurer la méthode de suivi des congés payés à appliquer : \| Méthode de suivi des CP \| Valeur correspondante \| \| --- \| --- \| \| Le suivi des CP se fait en jours ouvrables \| 0 \| \| Le suivi des CP se fait en jours ouvrés \| 1 \| \| Le suivi des CP se fait en jours calendaires \| 2 \| |
| Méthode de suivi des CP | Valeur correspondante |
| Le suivi des CP se fait en jours ouvrables | 0 |
| Le suivi des CP se fait en jours ouvrés | 1 |
| Le suivi des CP se fait en jours calendaires | 2 |
| bETA_MethodeSuiviCPAcqMois | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MethodeSuiviCPAcqMois** (true) ou non (false) |
| etA_MethodeSuiviCPAcqMois | number(double) | Permet d'indiquer le nombre de CP acquis par mois (1 entier et 4 décimales) |
| bETA_ModeSaisieActiviteJournaliere | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_ModeSaisieActiviteJournaliere** (true) ou non (false) |
| etA_ModeSaisieActiviteJournaliere | integer(int32) | Permet de configurer le mode de saisie de l'activité journalière : \| Mode de saisie \| Valeur correspondante \| \| --- \| --- \| \| Normal (Classique) \| 0 \| \| Plages horaires (Avancé) \| 1 \| |
| Mode de saisie | Valeur correspondante |
| Normal (Classique) | 0 |
| Plages horaires (Avancé) | 1 |
| bETA_MoisAcquisitionDIF | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MoisAcquisitionDIF** (true) ou non (false) |
| etA_MoisAcquisitionDIF | integer(int32) | Obsolète |
| bETA_MoisClotureCP | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MoisClotureCP** (true) ou non (false) |
| etA_MoisClotureCP | integer(int32) | Permet d'indiquer le mois de clôture des CP |
| bETA_MoisClotureFJ | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MoisClotureFJ** (true) ou non (false) |
| etA_MoisClotureFJ | integer(int32) | Permet d'indiquer le mois de clôture des CP pour les forfaits jours |
| bETA_MoisClotureRepos | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MoisClotureRepos** (true) ou non (false) |
| etA_MoisClotureRepos | integer(int32) | Permet d'indiquer le mois de clôture des repos |
| bETA_MoisClotureRTT | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_MoisClotureRTT** (true) ou non (false) |
| etA_MoisClotureRTT | integer(int32) | Permet d'indiquer le mois de clôture des RTT |
| bETA_NomInterne | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_NomInterne** (true) ou non (false) |
| etA_NomInterne | string | Nom interne de l'établissement |
| bETA_NonSoumisCVAE | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_NonSoumisCVAE** (true) ou non (false) |
| etA_NonSoumisCVAE | boolean | Permet d'indiquer si l'établissement est soumis à la CVAE (**false**) ou non (**true**) |
| bETA_PeriodeRegulTauxAT_1 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PeriodeRegulTauxAT_1** (true) ou non (false) |
| etA_PeriodeRegulTauxAT_1 | string(date-time) | Permet d'indiquer le mois d'application pour la configuration des taux AT. Ce champ correspond à la ligne 1 |
| bETA_PeriodeRegulTauxAT_2 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PeriodeRegulTauxAT_2** (true) ou non (false) |
| etA_PeriodeRegulTauxAT_2 | string(date-time) | Permet d'indiquer le mois d'application pour la configuration des taux AT. Ce champ correspond à la ligne 2 |
| bETA_PeriodeRegulTauxAT_3 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PeriodeRegulTauxAT_3** (true) ou non (false) |
| etA_PeriodeRegulTauxAT_3 | string(date-time) | Permet d'indiquer le mois d'application pour la configuration des taux AT. Ce champ correspond à la ligne 3 |
| bETA_PeriodeRegulTauxAT_4 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PeriodeRegulTauxAT_4** (true) ou non (false) |
| etA_PeriodeRegulTauxAT_4 | string(date-time) | Permet d'indiquer le mois d'application pour la configuration des taux AT. Ce champ correspond à la ligne 4 |
| bETA_PeriodeRegulTauxAT_5 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PeriodeRegulTauxAT_5** (true) ou non (false) |
| etA_PeriodeRegulTauxAT_5 | string(date-time) | Permet d'indiquer le mois d'application pour la configuration des taux AT. Ce champ correspond à la ligne 5 |
| bETA_PeriodeRegulTauxAT_6 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PeriodeRegulTauxAT_6** (true) ou non (false) |
| etA_PeriodeRegulTauxAT_6 | string(date-time) | Permet d'indiquer le mois d'application pour la configuration des taux AT. Ce champ correspond à la ligne 6 |
| bETA_PeriodeRegulTauxAT_7 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PeriodeRegulTauxAT_7** (true) ou non (false) |
| etA_PeriodeRegulTauxAT_7 | string(date-time) | Permet d'indiquer le mois d'application pour la configuration des taux AT. Ce champ correspond à la ligne 7 |
| bETA_PersonneAContacterMel | boolean | Indique s'il faut prendre en compte la valeur du champ **A_AcquisitionHeuresDIF** (true) ou non (false) |
| etA_PersonneAContacterMel | string | Adresse e-mail de la personne à contacter |
| bETA_PersonneAContacterNom | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PersonneAContacterNom** (true) ou non (false) |
| etA_PersonneAContacterNom | string | Nom de la personne à contacter |
| bETA_PersonneAContacterPrenom | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PersonneAContacterPrenom** (true) ou non (false) |
| etA_PersonneAContacterPrenom | string | Prénom de la personne à contacter |
| bETA_PersonneAContacterTel | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PersonneAContacterTel** (true) ou non (false) |
| etA_PersonneAContacterTel | string | Numéro de téléphone de la personne à contacter |
| bETA_PrefixeMatriculesSalaries | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_PrefixeMatriculesSalaries** (true) ou non (false) |
| etA_PrefixeMatriculesSalaries | string | Permet de configurer un préfixe pour la génération automatique des matricules des salariés |
| bETA_RTTEnHeures | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_RTTEnHeures** (true) ou non (false) |
| etA_RTTEnHeures | number(double) | Permet d'indiquer la valeur en heures d'un jour de RTT (2 entiers, 2 décimales) |
| bETA_S41_G01_00_018_001 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_018_001** (true) ou non (false) |
| etA_S41_G01_00_018_001 | string | Permet de configurer le code régime de base obligatoire |
| bETA_S41_G01_00_018_006 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_018_006** (true) ou non (false) |
| etA_S41_G01_00_018_006 | string | Permet d'indiquer si le dossier est soumis au régime Alsace-Moselle. Ce champ est une chaîne de 2 caractères qui a pour valeur "01" pour représenter la case cochée, et vide pour représenter la case décochée. |
| bETA_S41_G01_00_025_1 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_025_1** (true) ou non (false) |
| etA_S41_G01_00_025_1 | string | Permet d'indiquer le code Section pour la configuration des taux AT (2 caractères). Ce champ correspond à la ligne 1 |
| bETA_S41_G01_00_025_2 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_025_2** (true) ou non (false) |
| etA_S41_G01_00_025_2 | string | Permet d'indiquer le code Section pour la configuration des taux AT (2 caractères). Ce champ correspond à la ligne 2 |
| bETA_S41_G01_00_025_3 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_025_3** (true) ou non (false) |
| etA_S41_G01_00_025_3 | string | Permet d'indiquer le code Section pour la configuration des taux AT (2 caractères). Ce champ correspond à la ligne 3 |
| bETA_S41_G01_00_025_4 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_025_4** (true) ou non (false) |
| etA_S41_G01_00_025_4 | string | Permet d'indiquer le code Section pour la configuration des taux AT (2 caractères). Ce champ correspond à la ligne 4 |
| bETA_S41_G01_00_025_5 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_025_5** (true) ou non (false) |
| etA_S41_G01_00_025_5 | string | Permet d'indiquer le code Section pour la configuration des taux AT (2 caractères). Ce champ correspond à la ligne 5 |
| bETA_S41_G01_00_025_6 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_025_6** (true) ou non (false) |
| etA_S41_G01_00_025_6 | string | Permet d'indiquer le code Section pour la configuration des taux AT (2 caractères). Ce champ correspond à la ligne 6 |
| bETA_S41_G01_00_025_7 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_025_7** (true) ou non (false) |
| etA_S41_G01_00_025_7 | string | Permet d'indiquer le code Section pour la configuration des taux AT (2 caractères). Ce champ correspond à la ligne 7 |
| bETA_S41_G01_00_026_1 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_026_1** (true) ou non (false) |
| etA_S41_G01_00_026_1 | string | Permet d'indiquer le code risque pour la configuration des taux AT (5 caractères). Ce champ correspond à la ligne 1 |
| bETA_S41_G01_00_026_2 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_026_2** (true) ou non (false) |
| etA_S41_G01_00_026_2 | string | Permet d'indiquer le code risque pour la configuration des taux AT (5 caractères). Ce champ correspond à la ligne 2 |
| bETA_S41_G01_00_026_3 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_026_3** (true) ou non (false) |
| etA_S41_G01_00_026_3 | string | Permet d'indiquer le code risque pour la configuration des taux AT (5 caractères). Ce champ correspond à la ligne 3 |
| bETA_S41_G01_00_026_4 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_026_4** (true) ou non (false) |
| etA_S41_G01_00_026_4 | string | Permet d'indiquer le code risque pour la configuration des taux AT (5 caractères). Ce champ correspond à la ligne 4 |
| bETA_S41_G01_00_026_5 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_026_5** (true) ou non (false) |
| etA_S41_G01_00_026_5 | string | Permet d'indiquer le code risque pour la configuration des taux AT (5 caractères). Ce champ correspond à la ligne 5 |
| bETA_S41_G01_00_026_6 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_026_6** (true) ou non (false) |
| etA_S41_G01_00_026_6 | string | Permet d'indiquer le code risque pour la configuration des taux AT (5 caractères). Ce champ correspond à la ligne 6 |
| bETA_S41_G01_00_026_7 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_026_7** (true) ou non (false) |
| etA_S41_G01_00_026_7 | string | Permet d'indiquer le code risque pour la configuration des taux AT (5 caractères). Ce champ correspond à la ligne 7 |
| bETA_S41_G01_00_027_1 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_027_1** (true) ou non (false) |
| etA_S41_G01_00_027_1 | string | Permet d'indiquer le code Bureau pour la configuration des taux AT (1 caractères). Ce champ correspond à la ligne 1 |
| bETA_S41_G01_00_027_2 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_027_2** (true) ou non (false) |
| etA_S41_G01_00_027_2 | string | Permet d'indiquer le code Bureau pour la configuration des taux AT (1 caractères). Ce champ correspond à la ligne 2 |
| bETA_S41_G01_00_027_3 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_027_3** (true) ou non (false) |
| etA_S41_G01_00_027_3 | string | Permet d'indiquer le code Bureau pour la configuration des taux AT (1 caractères). Ce champ correspond à la ligne 3 |
| bETA_S41_G01_00_027_4 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_027_4** (true) ou non (false) |
| etA_S41_G01_00_027_4 | string | Permet d'indiquer le code Bureau pour la configuration des taux AT (1 caractères). Ce champ correspond à la ligne 4 |
| bETA_S41_G01_00_027_5 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_027_5** (true) ou non (false) |
| etA_S41_G01_00_027_5 | string | Permet d'indiquer le code Bureau pour la configuration des taux AT (1 caractères). Ce champ correspond à la ligne 5 |
| bETA_S41_G01_00_027_6 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_027_6** (true) ou non (false) |
| etA_S41_G01_00_027_6 | string | Permet d'indiquer le code Bureau pour la configuration des taux AT (1 caractères). Ce champ correspond à la ligne 6 |
| bETA_S41_G01_00_027_7 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_027_7** (true) ou non (false) |
| etA_S41_G01_00_027_7 | string | Permet d'indiquer le code Bureau pour la configuration des taux AT (1 caractères). Ce champ correspond à la ligne 7 |
| bETA_S41_G01_00_028_1 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_028_1** (true) ou non (false) |
| etA_S41_G01_00_028_1 | number(double) | Permet d'indiquer le Taux spécifique pour la configuration des taux AT (3 entiers, 2 décimales). Ce champ correspond à la ligne 1 |
| bETA_S41_G01_00_028_2 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_028_2** (true) ou non (false) |
| etA_S41_G01_00_028_2 | number(double) | Permet d'indiquer le Taux spécifique pour la configuration des taux AT (3 entiers, 2 décimales). Ce champ correspond à la ligne 2 |
| bETA_S41_G01_00_028_3 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_028_3** (true) ou non (false) |
| etA_S41_G01_00_028_3 | number(double) | Permet d'indiquer le Taux spécifique pour la configuration des taux AT (3 entiers, 2 décimales). Ce champ correspond à la ligne 3 |
| bETA_S41_G01_00_028_4 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_028_4** (true) ou non (false) |
| etA_S41_G01_00_028_4 | number(double) | Permet d'indiquer le Taux spécifique pour la configuration des taux AT (3 entiers, 2 décimales). Ce champ correspond à la ligne 4 |
| bETA_S41_G01_00_028_5 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_028_5** (true) ou non (false) |
| etA_S41_G01_00_028_5 | number(double) | Permet d'indiquer le Taux spécifique pour la configuration des taux AT (3 entiers, 2 décimales). Ce champ correspond à la ligne 5 |
| bETA_S41_G01_00_028_6 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_028_6** (true) ou non (false) |
| etA_S41_G01_00_028_6 | number(double) | Permet d'indiquer le Taux spécifique pour la configuration des taux AT (3 entiers, 2 décimales). Ce champ correspond à la ligne 6 |
| bETA_S41_G01_00_028_7 | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_S41_G01_00_028_7** (true) ou non (false) |
| etA_S41_G01_00_028_7 | number(double) | Permet d'indiquer le Taux spécifique pour la configuration des taux AT (3 entiers, 2 décimales). Ce champ correspond à la ligne 7 |
| bETA_SaisieManuelleHeuresAbsences | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SaisieManuelleHeuresAbsences** (true) ou non (false) |
| etA_SaisieManuelleHeuresAbsences | boolean | Permet d'indiquer si la saisie des heures d'absences se fait manuellement (**true**) ou pas (**false**) |
| bETA_SoumisTaxeAppr | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SoumisTaxeAppr** (true) ou non (false) |
| etA_SoumisTaxeAppr | boolean | Permet d'indiquer si l'établissement est soumis à la taxe d'apprentissage (**true**) ou pas (**false**) |
| bETA_SoumisTaxeApprAvecMajoration | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SoumisTaxeApprAvecMajoration** (true) ou non (false) |
| etA_SoumisTaxeApprAvecMajoration | boolean | Permet d'indiquer si l'établissement est soumis à la taxe d'apprentissage avec majoration (**true**) ou pas (**false**) |
| bETA_SoumisTaxeSalaires | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SoumisTaxeSalaires** (true) ou non (false) |
| etA_SoumisTaxeSalaires | boolean | Permet d'indiquer si l'établissement est soumis à la taxe sur les salaires (**true**) ou pas (**false**) |
| bETA_SoumisTaxeSalairesPctImp | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SoumisTaxeSalairesPctImp** (true) ou non (false) |
| etA_SoumisTaxeSalairesPctImp | number(double) | Permet d'indiquer le pourcentage (3 entiers, 2 décimales) d'imposition si l'établissement est soumis à la taxe sur les salaires |
| bETA_SousMethodeSuiviAbsences | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SousMethodeSuiviAbsences** (true) ou non (false) |
| etA_SousMethodeSuiviAbsences | integer(int32) | Permet de configurer la méthode de suivi des absences : \| Méthode de suivi des absences \| Valeur correspondante \| \| --- \| --- \| \| Méthode moyenne \| 0 \| \| Méthode réelle \| 1 \| |
| Méthode de suivi des absences | Valeur correspondante |
| Méthode moyenne | 0 |
| Méthode réelle | 1 |
| bETA_SousMethodeSuiviAbsencesFJ | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SousMethodeSuiviAbsencesFJ** (true) ou non (false) |
| etA_SousMethodeSuiviAbsencesFJ | integer(int32) | Permet d'indiquer si pour les forfaits jours, le calcul du salaire journalier se fait annuellement (**1**) ou pas (**0**) |
| bETA_Subrogation | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_Subrogation** (true) ou non (false) |
| etA_Subrogation | boolean | Permet d'indiquer si l'entreprise pratique la subrogation (**true**) ou pas (**false**) |
| bETA_SubrogationVersEtaPrincipal | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_SubrogationVersEtaPrincipal** (true) ou non (false) |
| etA_SubrogationVersEtaPrincipal | boolean | Permet d'indiquer, pour la subrogation, si l'encaissement se fait à l'établissement principal (**true**) ou pas (**false**). N'est disponible que losque plusieurs établissements existent et que la subrogation est active |
| bETA_TassageAbsencesJours | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TassageAbsencesJours** (true) ou non (false) |
| etA_TassageAbsencesJours | integer(int32) | Permet de configurer à partir de combien de jours il faut favoriser en tenant compte de la présence |
| bETA_TauxVersementTrs | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TauxVersementTrs** (true) ou non (false) |
| etA_TauxVersementTrs | number(double) | Permet de configurer le taux versement transport versement |
| bETA_TaxeSalairesAbattement | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TaxeSalairesAbattement** (true) ou non (false) |
| etA_TaxeSalairesAbattement | boolean | Permet d'indiquer s'il y a un abattement pour la taxe sur les salaires (**true**) ou pas (**false**) |
| bETA_TaxeSalairesSurSeuilsAnnuel | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TaxeSalairesSurSeuilsAnnuel** (true) ou non (false) |
| etA_TaxeSalairesSurSeuilsAnnuel | boolean | Permet d'indiquer, pour la taxe sur les salaires, si le calcul est fait sur les seuils et les salaires annuels (**true**) ou pas (**false**) |
| bETA_TitresTrs | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TitresTrs** (true) ou non (false) |
| etA_TitresTrs | boolean | Permet d'indiquer si l'établissement rembourse les titres de transport (**true**) ou pas (**false**) |
| bETA_TResto | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TResto** (true) ou non (false) |
| etA_TResto | boolean | Permet d'indiquer si l'établissement distribue des tickets restaurant (**true**) ou pas (**false**) |
| bETA_TRestoNomVariable | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TRestoNomVariable** (true) ou non (false) |
| etA_TRestoNomVariable | string | Permet de définir le nom de la variable qui fixe le prix unitaire du titre restaurant (10 caractères) |
| bETA_TRestoPartSalariale | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TRestoPartSalariale** (true) ou non (false) |
| etA_TRestoPartSalariale | number(double) | Permet d'indiquer la part salariale sur le prix unitaire du ticket restaurant (3 entiers, 2 décimales) |
| bETA_TypeAcquisitionDIF | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_TypeAcquisitionDIF** (true) ou non (false) |
| etA_TypeAcquisitionDIF | integer(int32) | Obsolète |
| bETA_VTACodeRegion | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_VTACodeRegion** (true) ou non (false) |
| etA_VTACodeRegion | string | Permet d'indiquer le code région pour la taxe versement transport additionnelle (5 caractères) |
| bETA_VTATaux | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_VTATaux** (true) ou non (false) |
| etA_VTATaux | number(double) | Permet d'indiquer le taux pour la taxe versement transport additionnelle (3 entiers, 2 décimales) |
| bETA_VTrsAuto | boolean | Indique s'il faut prendre en compte la valeur du champ **etA_VTrsAuto** (true) ou non (false) |
| etA_VTrsAuto | boolean | Permet d'activer (**true**) ou désactiver (**false**) le versement et le calcul automatique de la taxe versement transport, selon le code INSEE de la commune de l'établissement |
| bINT_BTQC | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_BTQC** (true) ou non (false) |
| inT_BTQC | string | Indicateur de répétition (BIS, TER, QUATER, QUINQUIES...) de l'adresse de l'établissement |
| bINT_Civilite | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_Civilite** (true) ou non (false) |
| inT_Civilite | integer(int32) | Civilité de l'employeur signataire de l'établissement : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| bINT_CodePostal | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_CodePostal** (true) ou non (false) |
| inT_CodePostal | string | Code postal de l'adresse de l'établissement |
| bINT_CodePostalJF | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_CodePostalJF** (true) ou non (false) |
| inT_CodePostalJF | string | Code postal de l'établissement pour les jours fériés pour certains pays. Les champs inT_CodePostalJF et inT_PaysISOJF sont disponibles en fonction du pays de l'établissement |
| bINT_Commune | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_Commune** (true) ou non (false) |
| inT_Commune | string | Commune de l'établissement |
| bINT_CommuneINSEE | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_CommuneINSEE** (true) ou non (false) |
| inT_CommuneINSEE | string | Code INSEE de la commune de l'établissement |
| bINT_ComplementAdresse | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_ComplementAdresse** (true) ou non (false) |
| inT_ComplementAdresse | string | Complément de l'adresse de l'établissement |
| bINT_DateDeces | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_DateDeces** (true) ou non (false) |
| inT_DateDeces | string(date-time) | Si la forme juridique est "Personne Physique", date de décès de la personne physique |
| bINT_DateNaissance | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_DateNaissance** (true) ou non (false) |
| inT_DateNaissance | string(date-time) | Si la forme juridique est "Personne Physique", date de naissance de la personne physique |
| bINT_Enseigne | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_Enseigne** (true) ou non (false) |
| inT_Enseigne | string | Enseigne de l'établissement |
| bINT_Fax | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_Fax** (true) ou non (false) |
| inT_Fax | string | Numéro de fax de l'établissement |
| bINT_FormeJuridique | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_FormeJuridique** (true) ou non (false) |
| inT_FormeJuridique | string | Code de la forme juridique de l'établissement |
| bINT_Mel | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_Mel** (true) ou non (false) |
| inT_Mel | string | Adresse e-mail de l'établissement |
| bINT_NAF | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_NAF** (true) ou non (false) |
| inT_NAF | string | Code NAF de l'établissement |
| bINT_NomPays | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_NomPays** (true) ou non (false) |
| inT_NomPays | string | Nom du pays de l'établissement |
| bINT_NomUsuel | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_NomUsuel** (true) ou non (false) |
| inT_NomUsuel | string | Ne pas utiliser |
| bINT_NomVille | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_NomVille** (true) ou non (false) |
| inT_NomVille | string | Nom de la ville de l'établissement |
| bINT_NomVoie | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_NomVoie** (true) ou non (false) |
| inT_NomVoie | string | Nom de la voie dans l'adresse de l'établissement |
| bINT_NumVoie | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_NumVoie** (true) ou non (false) |
| inT_NumVoie | string | Numéro de la voie dans l'adresse de l'établissement |
| bINT_PaysISO | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_PaysISO** (true) ou non (false) |
| inT_PaysISO | string | Code ISO du paye de l'établissement |
| bINT_PaysISOJF | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_PaysISOJF** (true) ou non (false) |
| inT_PaysISOJF | string | Code ISO du pays de l'établissement pour les jours fériés pour certains pays. Les champs inT_CodePostalJF et inT_PaysISOJF sont disponibles en fonction du pays de l'établissement |
| bINT_Prenom | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_Prenom** (true) ou non (false) |
| inT_Prenom | string | Ne pas utiliser |
| bINT_RaisonSociale | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_RaisonSociale** (true) ou non (false) |
| inT_RaisonSociale | string | Raison sociale de l'établissement |
| bINT_Siret | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_Siret** (true) ou non (false) |
| inT_Siret | string | SIRET de l'établissement |
| bINT_SiteWeb | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_SiteWeb** (true) ou non (false) |
| inT_SiteWeb | string | URL du site web de l'établissement |
| bINT_TelBureau | boolean | Indique s'il faut prendre en compte la valeur du champ **inT_TelBureau** (true) ou non (false) |
| inT_TelBureau | string | Numéro de téléphone de l'établissement |

## Requête

```
{
  "nomInterne": "string",
  "etablissementInfoSup": {
    "bETA_AcquisitionHeuresDIF": true,
    "etA_AcquisitionHeuresDIF": 10.5,
    "bETA_AssimiliesCadresPrevoyanceNonCadre": true,
    "etA_AssimiliesCadresPrevoyanceNonCadre": true,
    "bETA_BulletinEditionDIF": true,
    "etA_BulletinEditionDIF": 0,
    "bETA_CalcAutoIJSSInactif": true,
    "etA_CalcAutoIJSSInactif": true,
    "bETA_CalcAutoMaintienInactif": true,
    "etA_CalcAutoMaintienInactif": true,
    "bETA_CDDPaiMensIndCP": true,
    "etA_CDDPaiMensIndCP": true,
    "bETA_CDDPaiMensIndPrecarite": true,
    "etA_CDDPaiMensIndPrecarite": true,
    "bETA_ChaineFabricationDateLimiteAbsences": true,
    "etA_ChaineFabricationDateLimiteAbsences": "string",
    "bETA_ClotureCPArrondiInactif": true,
    "etA_ClotureCPArrondiInactif": true,
    "bETA_ClotureCPReport": true,
    "etA_ClotureCPReport": true,
    "bETA_ClotureRTTReport": true,
    "etA_ClotureRTTReport": true,
    "bETA_CodeBTAPEMSA": true,
    "etA_CodeBTAPEMSA": "string",
    "bETA_CodeRegion": true,
    "etA_CodeRegion": "string",
    "bETA_DadsInactive": true,
    "etA_DadsInactive": true,
    "bETA_DecalageActiviteJournaliere": true,
    "etA_DecalageActiviteJournaliere": 0,
    "bETA_DecoupageActiviteJournaliere": true,
    "etA_DecoupageActiviteJournaliere": 0,
    "bETA_DureeHebdo": true,
    "etA_DureeHebdo": 10.5,
    "bETA_EmployeurCivilite": true,
    "etA_EmployeurCivilite": 0,
    "bETA_EmployeurNom": true,
    "etA_EmployeurNom": "string",
    "bETA_EmployeurPrenom": true,
    "etA_EmployeurPrenom": "string",
    "bETA_EmployeurQualite": true,
    "etA_EmployeurQualite": 0,
    "bETA_EmployeurQualiteAutre": true,
    "etA_EmployeurQualiteAutre": "string",
    "bETA_ExoJEIDateDebut": true,
    "etA_ExoJEIDateDebut": "2020-10-14T21:46:24",
    "bETA_ForceDroitCICE": true,
    "etA_ForceDroitCICE": true,
    "bETA_FractionnementCP": true,
    "etA_FractionnementCP": true,
    "bETA_FractionnementCPMoisCalcSpe": true,
    "etA_FractionnementCPMoisCalcSpe": 0,
    "bETA_FractionnementCPMoisDebut": true,
    "etA_FractionnementCPMoisDebut": 0,
    "bETA_FractionnementCPMoisFin": true,
    "etA_FractionnementCPMoisFin": 0,
    "bETA_FSConserverCondAnc": true,
    "etA_FSConserverCondAnc": true,
    "bETA_FSMethode": true,
    "etA_FSMethode": 0,
    "bETA_GestionCPExclEnJours": true,
    "etA_GestionCPExclEnJours": true,
    "bETA_JourDebSemActiviteJournaliere": true,
    "etA_JourDebSemActiviteJournaliere": 0,
    "bETA_JourneeSolidarite": true,
    "etA_JourneeSolidarite": "string",
    "bETA_JoursFeriesTravailles": true,
    "etA_JoursFeriesTravailles": "string",
    "bETA_MethodeArbitrage": true,
    "etA_MethodeArbitrage": 0,
    "bETA_MethodeCalculMaintien": true,
    "etA_MethodeCalculMaintien": 0,
    "bETA_MethodeCalculMaintienNbM": true,
    "etA_MethodeCalculMaintienNbM": 0,
    "bETA_MethodeRetenueCP": true,
    "etA_MethodeRetenueCP": 0,
    "bETA_MethodeSuiviAbsences": true,
    "etA_MethodeSuiviAbsences": 0,
    "bETA_MethodeSuiviAbsencesDeductionHM": true,
    "etA_MethodeSuiviAbsencesDeductionHM": 0,
    "bETA_MethodeSuiviAbsencesJC": true,
    "etA_MethodeSuiviAbsencesJC": 0,
    "bETA_MethodeSuiviCP": true,
    "etA_MethodeSuiviCP": 0,
    "bETA_MethodeSuiviCPAcqMois": true,
    "etA_MethodeSuiviCPAcqMois": 10.5,
    "bETA_ModeSaisieActiviteJournaliere": true,
    "etA_ModeSaisieActiviteJournaliere": 0,
    "bETA_MoisAcquisitionDIF": true,
    "etA_MoisAcquisitionDIF": 0,
    "bETA_MoisClotureCP": true,
    "etA_MoisClotureCP": 0,
    "bETA_MoisClotureFJ": true,
    "etA_MoisClotureFJ": 0,
    "bETA_MoisClotureRepos": true,
    "etA_MoisClotureRepos": 0,
    "bETA_MoisClotureRTT": true,
    "etA_MoisClotureRTT": 0,
    "bETA_NomInterne": true,
    "etA_NomInterne": "string",
    "bETA_NonSoumisCVAE": true,
    "etA_NonSoumisCVAE": true,
    "bETA_PeriodeRegulTauxAT_1": true,
    "etA_PeriodeRegulTauxAT_1": "2020-10-14T21:46:24",
    "bETA_PeriodeRegulTauxAT_2": true,
    "etA_PeriodeRegulTauxAT_2": "2020-10-14T21:46:24",
    "bETA_PeriodeRegulTauxAT_3": true,
    "etA_PeriodeRegulTauxAT_3": "2020-10-14T21:46:24",
    "bETA_PeriodeRegulTauxAT_4": true,
    "etA_PeriodeRegulTauxAT_4": "2020-10-14T21:46:24",
    "bETA_PeriodeRegulTauxAT_5": true,
    "etA_PeriodeRegulTauxAT_5": "2020-10-14T21:46:24",
    "bETA_PeriodeRegulTauxAT_6": true,
    "etA_PeriodeRegulTauxAT_6": "2020-10-14T21:46:24",
    "bETA_PeriodeRegulTauxAT_7": true,
    "etA_PeriodeRegulTauxAT_7": "2020-10-14T21:46:24",
    "bETA_PersonneAContacterMel": true,
    "etA_PersonneAContacterMel": "string",
    "bETA_PersonneAContacterNom": true,
    "etA_PersonneAContacterNom": "string",
    "bETA_PersonneAContacterPrenom": true,
    "etA_PersonneAContacterPrenom": "string",
    "bETA_PersonneAContacterTel": true,
    "etA_PersonneAContacterTel": "string",
    "bETA_PrefixeMatriculesSalaries": true,
    "etA_PrefixeMatriculesSalaries": "string",
    "bETA_RTTEnHeures": true,
    "etA_RTTEnHeures": 10.5,
    "bETA_S41_G01_00_018_001": true,
    "etA_S41_G01_00_018_001": "string",
    "bETA_S41_G01_00_018_006": true,
    "etA_S41_G01_00_018_006": "string",
    "bETA_S41_G01_00_025_1": true,
    "etA_S41_G01_00_025_1": "string",
    "bETA_S41_G01_00_025_2": true,
    "etA_S41_G01_00_025_2": "string",
    "bETA_S41_G01_00_025_3": true,
    "etA_S41_G01_00_025_3": "string",
    "bETA_S41_G01_00_025_4": true,
    "etA_S41_G01_00_025_4": "string",
    "bETA_S41_G01_00_025_5": true,
    "etA_S41_G01_00_025_5": "string",
    "bETA_S41_G01_00_025_6": true,
    "etA_S41_G01_00_025_6": "string",
    "bETA_S41_G01_00_025_7": true,
    "etA_S41_G01_00_025_7": "string",
    "bETA_S41_G01_00_026_1": true,
    "etA_S41_G01_00_026_1": "string",
    "bETA_S41_G01_00_026_2": true,
    "etA_S41_G01_00_026_2": "string",
    "bETA_S41_G01_00_026_3": true,
    "etA_S41_G01_00_026_3": "string",
    "bETA_S41_G01_00_026_4": true,
    "etA_S41_G01_00_026_4": "string",
    "bETA_S41_G01_00_026_5": true,
    "etA_S41_G01_00_026_5": "string",
    "bETA_S41_G01_00_026_6": true,
    "etA_S41_G01_00_026_6": "string",
    "bETA_S41_G01_00_026_7": true,
    "etA_S41_G01_00_026_7": "string",
    "bETA_S41_G01_00_027_1": true,
    "etA_S41_G01_00_027_1": "string",
    "bETA_S41_G01_00_027_2": true,
    "etA_S41_G01_00_027_2": "string",
    "bETA_S41_G01_00_027_3": true,
    "etA_S41_G01_00_027_3": "string",
    "bETA_S41_G01_00_027_4": true,
    "etA_S41_G01_00_027_4": "string",
    "bETA_S41_G01_00_027_5": true,
    "etA_S41_G01_00_027_5": "string",
    "bETA_S41_G01_00_027_6": true,
    "etA_S41_G01_00_027_6": "string",
    "bETA_S41_G01_00_027_7": true,
    "etA_S41_G01_00_027_7": "string",
    "bETA_S41_G01_00_028_1": true,
    "etA_S41_G01_00_028_1": 10.5,
    "bETA_S41_G01_00_028_2": true,
    "etA_S41_G01_00_028_2": 10.5,
    "bETA_S41_G01_00_028_3": true,
    "etA_S41_G01_00_028_3": 10.5,
    "bETA_S41_G01_00_028_4": true,
    "etA_S41_G01_00_028_4": 10.5,
    "bETA_S41_G01_00_028_5": true,
    "etA_S41_G01_00_028_5": 10.5,
    "bETA_S41_G01_00_028_6": true,
    "etA_S41_G01_00_028_6": 10.5,
    "bETA_S41_G01_00_028_7": true,
    "etA_S41_G01_00_028_7": 10.5,
    "bETA_SaisieManuelleHeuresAbsences": true,
    "etA_SaisieManuelleHeuresAbsences": true,
    "bETA_SoumisTaxeAppr": true,
    "etA_SoumisTaxeAppr": true,
    "bETA_SoumisTaxeApprAvecMajoration": true,
    "etA_SoumisTaxeApprAvecMajoration": true,
    "bETA_SoumisTaxeSalaires": true,
    "etA_SoumisTaxeSalaires": true,
    "bETA_SoumisTaxeSalairesPctImp": true,
    "etA_SoumisTaxeSalairesPctImp": 10.5,
    "bETA_SousMethodeSuiviAbsences": true,
    "etA_SousMethodeSuiviAbsences": 0,
    "bETA_SousMethodeSuiviAbsencesFJ": true,
    "etA_SousMethodeSuiviAbsencesFJ": 0,
    "bETA_Subrogation": true,
    "etA_Subrogation": true,
    "bETA_SubrogationVersEtaPrincipal": true,
    "etA_SubrogationVersEtaPrincipal": true,
    "bETA_TassageAbsencesJours": true,
    "etA_TassageAbsencesJours": 0,
    "bETA_TauxVersementTrs": true,
    "etA_TauxVersementTrs": 10.5,
    "bETA_TaxeSalairesAbattement": true,
    "etA_TaxeSalairesAbattement": true,
    "bETA_TaxeSalairesSurSeuilsAnnuel": true,
    "etA_TaxeSalairesSurSeuilsAnnuel": true,
    "bETA_TitresTrs": true,
    "etA_TitresTrs": true,
    "bETA_TResto": true,
    "etA_TResto": true,
    "bETA_TRestoNomVariable": true,
    "etA_TRestoNomVariable": "string",
    "bETA_TRestoPartSalariale": true,
    "etA_TRestoPartSalariale": 10.5,
    "bETA_TypeAcquisitionDIF": true,
    "etA_TypeAcquisitionDIF": 0,
    "bETA_VTACodeRegion": true,
    "etA_VTACodeRegion": "string",
    "bETA_VTATaux": true,
    "etA_VTATaux": 10.5,
    "bETA_VTrsAuto": true,
    "etA_VTrsAuto": true,
    "bINT_BTQC": true,
    "inT_BTQC": "string",
    "bINT_Civilite": true,
    "inT_Civilite": 0,
    "bINT_CodePostal": true,
    "inT_CodePostal": "string",
    "bINT_CodePostalJF": true,
    "inT_CodePostalJF": "string",
    "bINT_Commune": true,
    "inT_Commune": "string",
    "bINT_CommuneINSEE": true,
    "inT_CommuneINSEE": "string",
    "bINT_ComplementAdresse": true,
    "inT_ComplementAdresse": "string",
    "bINT_DateDeces": true,
    "inT_DateDeces": "2020-10-14T21:46:24",
    "bINT_DateNaissance": true,
    "inT_DateNaissance": "2020-10-14T21:46:24",
    "bINT_Enseigne": true,
    "inT_Enseigne": "string",
    "bINT_Fax": true,
    "inT_Fax": "string",
    "bINT_FormeJuridique": true,
    "inT_FormeJuridique": "string",
    "bINT_Mel": true,
    "inT_Mel": "string",
    "bINT_NAF": true,
    "inT_NAF": "string",
    "bINT_NomPays": true,
    "inT_NomPays": "string",
    "bINT_NomUsuel": true,
    "inT_NomUsuel": "string",
    "bINT_NomVille": true,
    "inT_NomVille": "string",
    "bINT_NomVoie": true,
    "inT_NomVoie": "string",
    "bINT_NumVoie": true,
    "inT_NumVoie": "string",
    "bINT_PaysISO": true,
    "inT_PaysISO": "string",
    "bINT_PaysISOJF": true,
    "inT_PaysISOJF": "string",
    "bINT_Prenom": true,
    "inT_Prenom": "string",
    "bINT_RaisonSociale": true,
    "inT_RaisonSociale": "string",
    "bINT_Siret": true,
    "inT_Siret": "string",
    "bINT_SiteWeb": true,
    "inT_SiteWeb": "string",
    "bINT_TelBureau": true,
    "inT_TelBureau": "string"
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
