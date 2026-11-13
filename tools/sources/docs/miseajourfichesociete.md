---
title: "MiseAJourFicheSociete"
slug: "miseajourfichesociete"
updated: 2026-06-09T06:56:40Z
published: 2026-06-09T06:56:40Z
canonical: "silae-api.document360.io/miseajourfichesociete"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# MiseAJourFicheSociete

## Fonction API

```
/v1/FicheSociete/MiseAJourFicheSociete
```

## Verbe HTTP

Post

## Description

Permet de mettre à jour les informations de la partie société de la fiche société

## Groupe de fonctions API

MODIF02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| societeInfoSup | SocieteInfoSup | Élément structuré contenant les informations à mettre à jour sur la société (cf. détail ci-dessous) |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SocieteInfoSup

| Paramètre | Type | Description |
| --- | --- | --- |
| bCLI_AffilieCCP | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_AffilieCCP** (true) ou non (false) |
| clI_AffilieCCP | boolean | Permet d'indiquer si la société est affiliée à une caisse de congés payés |
| bCLI_BaseCalculAnciennete | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_BaseCalculAnciennete** (true) ou non (false) |
| clI_BaseCalculAnciennete | integer(int32) | Permet d'indiquer sur quelle base se fera le calcul de l'ancienneté : \| Base de calcul de l'ancienneté \| Valeur correspondante \| \| --- \| --- \| \| Le calcul de l'ancienneté se base sur le salaire minimum conventionnel \| 0 \| \| Le calcul de l'ancienneté se base sur le salaire de base \| 1 \| |
| Base de calcul de l'ancienneté | Valeur correspondante |
| Le calcul de l'ancienneté se base sur le salaire minimum conventionnel | 0 |
| Le calcul de l'ancienneté se base sur le salaire de base | 1 |
| bCLI_CalcAutoESInactif | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_CalcAutoESInactif** (true) ou non (false) |
| clI_CalcAutoESInactif | boolean | Permet d'activer (**false**) ou de désactiver (**true**) le calcul automatique des entrées/sorties |
| bCLI_CalcAutoIJSSInactif | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_CalcAutoIJSSInactif** (true) ou non (false) |
| clI_CalcAutoIJSSInactif | boolean | Permet d'indiquer si l'entreprise avance les IJSS (**false**) ou non (**true**) |
| bCLI_CalcAutoMaintienInactif | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_CalcAutoMaintienInactif** (true) ou non (false) |
| clI_CalcAutoMaintienInactif | boolean | Permet d'indiquer si le calcul automatique du maintien de salaire est activé (**false**) ou désactivé (**true**) |
| bCLI_CalcAutoRegulInactif | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_CalcAutoRegulInactif** (true) ou non (false) |
| clI_CalcAutoRegulInactif | boolean | Permet d'indiquer si le calcul automatique des régularisations est activé (**false**) ou désactivé (**true**) |
| bCLI_ChaineFabricationDateLimiteAbsences | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_ChaineFabricationDateLimiteAbsences** (true) ou non (false) |
| clI_ChaineFabricationDateLimiteAbsences | string | Permet de configurer la date limite de prise en compte des absences (cf. fiche "Décaler ou limiter le traitement des absences" de la base de connaissance Silae) |
| bCLI_ConfSalActive | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_ConfSalActive** (true) ou non (false) |
| clI_ConfSalActive | boolean | Permet d'activer (**true**) ou pas (**false**) la prise en compte du niveau de confidentialité pour les salariés |
| bCLI_DFPTepa | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_DFPTepa** (true) ou non (false) |
| clI_DFPTepa | boolean | Permet d'activer (**true**) ou non (**false**) la déduction forfaitaire patronale TEPA |
| bCLI_DFPTepaDebut | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_DFPTepaDebut** (true) ou non (false) |
| clI_DFPTepaDebut | string(date-time) | Permet d'indiquer l'année de début de neutralisation |
| bCLI_DtDebChangePaieDecalee | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_DtDebChangePaieDecalee** (true) ou non (false) |
| clI_DtDebChangePaieDecalee | string(date-time) | Permet d'indiquer le mois de changement de situation concernant le décalage de paie de la société |
| bCLI_DtDebExerciceComptable | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_DtDebExerciceComptable** (true) ou non (false) |
| clI_DtDebExerciceComptable | string(date-time) | Permet d'indiquer la date de début de l'exercice comptable |
| bCLI_DtFinExerciceComptable | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_DtFinExerciceComptable** (true) ou non (false) |
| clI_DtFinExerciceComptable | string(date-time) | Permet d'indiquer la date de fin de l'exercice comptable |
| bCLI_EmployeurCivilite | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_EmployeurCivilite** (true) ou non (false) |
| clI_EmployeurCivilite | integer(int32) | Civilité de l'employeur : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| bCLI_EmployeurNom | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_EmployeurNom** (true) ou non (false) |
| clI_EmployeurNom | string | Nom de l'employeur |
| bCLI_EmployeurPrenom | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_EmployeurPrenom** (true) ou non (false) |
| clI_EmployeurPrenom | string | Prénom de l'employeur |
| bCLI_EmployeurQualite | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_EmployeurQualite** (true) ou non (false) |
| clI_EmployeurQualite | integer(int32) | Qualité de l'employeur : \| Qualité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Chef d'entreprise \| 10 \| \| Gérant \| 20 \| \| Directeur \| 30 \| \| Chef du personnel \| 40 \| \| Comptable \| 50 \| \| Administrateur judiciaire \| 60 \| \| Mandataire liquidateur \| 70 \| \| Autre \| 90 \| |
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
| bCLI_EmployeurQualiteAutre | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_EmployeurQualiteAutre** (true) ou non (false) |
| clI_EmployeurQualiteAutre | string | Permet d'indiquer la qualité de l'employeur. N'est utile que lorsque CLI_EmployeurQualite vaut "Autre" |
| bCLI_EtatDossierPaie | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_EtatDossierPaie** (true) ou non (false) |
| clI_EtatDossierPaie | integer(int32) | Permet d'indiquer l'état du dossier de paie : \| État du dossier \| Valeur correspondante \| \| --- \| --- \| \| Dossier inactif \| 0 \| \| Dossier en montage \| 1 \| \| Dossier en production \| 2 \| |
| État du dossier | Valeur correspondante |
| Dossier inactif | 0 |
| Dossier en montage | 1 |
| Dossier en production | 2 |
| bCLI_FormaProfTranche | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_FormaProfTranche** (true) ou non (false) |
| clI_FormaProfTranche | integer(int32) | Permet d'indiquer la taille de l'entreprise pour la participation à la formation professionnelle : \| Taille d'entreprise \| Valeur correspondante \| \| --- \| --- \| \| moins de 11 salariés \| 0 \| \| de 11 à moins de 20 salariés \| 1 \| \| de 21 à moins de 50 salariés \| 2 \| \| de 51 à moins de 300 salariés \| 3 \| \| 300 salariés et plus \| 4 \| |
| Taille d'entreprise | Valeur correspondante |
| moins de 11 salariés | 0 |
| de 11 à moins de 20 salariés | 1 |
| de 21 à moins de 50 salariés | 2 |
| de 51 à moins de 300 salariés | 3 |
| 300 salariés et plus | 4 |
| bCLI_FormaProfTrancheAnnee | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_FormaProfTrancheAnnee** (true) ou non (false) |
| clI_FormaProfTrancheAnnee | string(date-time) | Permet d'indiquer l'année initiale si la première tranche est sélectionnée |
| bCLI_FormaProfTrancheAnnee2 | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_FormaProfTrancheAnnee2** (true) ou non (false) |
| clI_FormaProfTrancheAnnee2 | string(date-time) | Permet d'indiquer l'année initiale si la deuxième tranche est sélectionnée |
| bCLI_FormaProfTrancheAnnee3 | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_FormaProfTrancheAnnee3** (true) ou non (false) |
| clI_FormaProfTrancheAnnee3 | string(date-time) | Permet d'indiquer l'année initiale si la troisième tranche est sélectionnée |
| bCLI_FormaProfTrancheAnnee4 | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_FormaProfTrancheAnnee4** (true) ou non (false) |
| clI_FormaProfTrancheAnnee4 | string(date-time) | Permet d'indiquer l'année initiale si la quatrième tranche est sélectionnée |
| bCLI_GestionCPExclEnJours | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_GestionCPExclEnJours** (true) ou non (false) |
| clI_GestionCPExclEnJours | boolean | Permet d'indiquer si la gestion des congés payés se fait exclusivement en jours (**true**) ou pas (**false**) |
| bCLI_JourVersementSalaires | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_JourVersementSalaires** (true) ou non (false) |
| clI_JourVersementSalaires | integer(int32) | Permet d'indiquer le jour de versement des salaires pour les paies décalées |
| bCLI_ListesTriSalaries | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_ListesTriSalaries** (true) ou non (false) |
| clI_ListesTriSalaries | integer(int32) | Permet de configurer le mode de tri par défaut des salariés : \| Type de tri \| Valeur correspondante \| \| --- \| --- \| \| Par nom et prénom \| 0 \| \| Par matricule \| 1 \| |
| Type de tri | Valeur correspondante |
| Par nom et prénom | 0 |
| Par matricule | 1 |
| bCLI_MatriculeAuto | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MatriculeAuto** (true) ou non (false) |
| clI_MatriculeAuto | boolean | Permet d'activer la génération automatique du matricule du salarié |
| bCLI_MatriculeLongueur | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MatriculeLongueur** (true) ou non (false) |
| clI_MatriculeLongueur | integer(int32) | Permet de configurer la longueur du matricule des salariés |
| bCLI_MethodeArbitrage | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeArbitrage** (true) ou non (false) |
| clI_MethodeArbitrage | integer(int32) | Permet de configurer la méthode d'arbitrage des congés payés : \| Méthode d'arbitrage \| Valeur correspondante \| \| --- \| --- \| \| L'arbitrage des CP se fait à chaque prise \| 0 \| \| L'arbitrage des CP se fait lors de la dernière prise \| 1 \| \| L'arbitrage des CP se fait au mois de clôture des CP \| 2 \| \| L'arbitrage des CP se fait manuellement \| 3 \| |
| Méthode d'arbitrage | Valeur correspondante |
| L'arbitrage des CP se fait à chaque prise | 0 |
| L'arbitrage des CP se fait lors de la dernière prise | 1 |
| L'arbitrage des CP se fait au mois de clôture des CP | 2 |
| L'arbitrage des CP se fait manuellement | 3 |
| bCLI_MethodeCalculMaintien | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeCalculMaintien** (true) ou non (false) |
| clI_MethodeCalculMaintien | integer(int32) | Permet de configurer la méthode de maintien de salaire : \| Méthode de calcul du maintien \| Valeur correspondante \| \| --- \| --- \| \| Sur la base du bulletin courant \| 0 \| \| Sur la base des salaires rétablis des n mois précédents \| 10 \| |
| Méthode de calcul du maintien | Valeur correspondante |
| Sur la base du bulletin courant | 0 |
| Sur la base des salaires rétablis des n mois précédents | 10 |
| bCLI_MethodeCalculMaintienNbM | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeCalculMaintien** (true) ou non (false) |
| clI_MethodeCalculMaintienNbM | integer(int32) | Permet d'indiquer le nombre de mois précédents à prendre en compte si la méthode de calcul du maintien de salaire se fait sur la base des salaires rétablis |
| bCLI_MethodeRetenueCP | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeRetenueCP** (true) ou non (false) |
| clI_MethodeRetenueCP | integer(int32) | Permet de configurer la méthode de retenue des congés payés à appliquer (l'option en jours ouvrables est disponible si la société est affiliée à une caisse de CP) : \| Méthode de retenue \| Valeur correspondante \| \| --- \| --- \| \| Retenue des congés payés de fait en jours \| 0 \| \| Retenue des congés payés de fait en heures \| 1 \| \| Retenue des congés payés de fait en jours ouvrables \| 2 \| |
| Méthode de retenue | Valeur correspondante |
| Retenue des congés payés de fait en jours | 0 |
| Retenue des congés payés de fait en heures | 1 |
| Retenue des congés payés de fait en jours ouvrables | 2 |
| bCLI_MethodesSuiviAbsencesDansEta | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodesSuiviAbsencesDansEta** (true) ou non (false) |
| clI_MethodesSuiviAbsencesDansEta | boolean | Permet d'indiquer si les méthodes de suivi des absences sont gérées dans chaque établissement (**true**) ou au niveau de la société (**false**) |
| bCLI_MethodeSuiviAbsences | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeSuiviAbsences** (true) ou non (false) |
| clI_MethodeSuiviAbsences | integer(int32) | Permet de configurer la méthode de suivi des absences : \| Méthode de suivi des absences \| Valeur correspondante \| \| --- \| --- \| \| Méthode moyenne \| 0 \| \| Méthode réelle \| 1 \| |
| Méthode de suivi des absences | Valeur correspondante |
| Méthode moyenne | 0 |
| Méthode réelle | 1 |
| bCLI_MethodeSuiviAbsencesDeductionHM | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeSuiviAbsencesDeductionHM** (true) ou non (false) |
| clI_MethodeSuiviAbsencesDeductionHM | integer(int32) | Permet de configurer comment se fait la déduction des heures majorées : \| Déduction des heures \| Valeur correspondante \| \| --- \| --- \| \| Déduction des heures majorées au jour le jour \| 0 \| \| Déduction des heures majorées à la semaine \| 1 \| \| Déduction des heures majorées au mois \| 2 \| |
| Déduction des heures | Valeur correspondante |
| Déduction des heures majorées au jour le jour | 0 |
| Déduction des heures majorées à la semaine | 1 |
| Déduction des heures majorées au mois | 2 |
| bCLI_MethodeSuiviAbsencesJC | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeSuiviAbsencesJC** (true) ou non (false) |
| clI_MethodeSuiviAbsencesJC | integer(int32) | Permet de configurer la méthode de traitement des absences en jours calendaires : \| Méthode de suivi des absences \| Valeur correspondante \| \| --- \| --- \| \| Traitement des absences pas en jours non calendaires \| 0 \| \| Traitement des absences en jours calendaires pour les absences générant du maintien \| 1 \| \| Traitement des absences en jours calendaires pour toutes les absences \| 99 \| |
| Méthode de suivi des absences | Valeur correspondante |
| Traitement des absences pas en jours non calendaires | 0 |
| Traitement des absences en jours calendaires pour les absences générant du maintien | 1 |
| Traitement des absences en jours calendaires pour toutes les absences | 99 |
| bCLI_MethodeSuiviCP | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeSuiviCP** (true) ou non (false) |
| clI_MethodeSuiviCP | integer(int32) | Permet de configurer la méthode de suivi des congés payés à appliquer : \| Méthode de suivi des CP \| Valeur correspondante \| \| --- \| --- \| \| Le suivi des CP se fait en jours ouvrables \| 0 \| \| Le suivi des CP se fait en jours ouvrés \| 1 \| \| Le suivi des CP se fait en jours calendaires \| 2 \| |
| Méthode de suivi des CP | Valeur correspondante |
| Le suivi des CP se fait en jours ouvrables | 0 |
| Le suivi des CP se fait en jours ouvrés | 1 |
| Le suivi des CP se fait en jours calendaires | 2 |
| bCLI_MethodeSuiviCPAcqMois | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MethodeSuiviCPAcqMois** (true) ou non (false) |
| clI_MethodeSuiviCPAcqMois | number(double) | Permet d'indiquer le nombre de CP acquis par mois (1 entier et 4 décimales) |
| bCLI_ModuleCTCDActif | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_ModuleCTCDActif** (true) ou non (false) |
| clI_ModuleCTCDActif | boolean | Permet d'activer (**true**) ou désactiver (**false**) le moduel CTCD |
| bCLI_MontagePaiePeriodeDebut | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_MontagePaiePeriodeDebut** (true) ou non (false) |
| clI_MontagePaiePeriodeDebut | string(date-time) | Permet d'indiquer le mois de démarrage du dossier |
| bCLI_PaieDecalee | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_PaieDecalee** (true) ou non (false) |
| clI_PaieDecalee | boolean | Permet d'indiquer si la paie de la société est décalée (**true**) ou non (**false**) |
| bCLI_PersonneAContacterMel | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_PersonneAContacterMel** (true) ou non (false) |
| clI_PersonneAContacterMel | string | Adresse e-mail de la personne à contacter |
| bCLI_PersonneAContacterNom | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_PersonneAContacterNom** (true) ou non (false) |
| clI_PersonneAContacterNom | string | Nom de la personne à contacter |
| bCLI_PersonneAContacterPrenom | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_PersonneAContacterPrenom** (true) ou non (false) |
| clI_PersonneAContacterPrenom | string | Prénom de la personne à contacter |
| bCLI_PersonneAContacterTel | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_PersonneAContacterTel** (true) ou non (false) |
| clI_PersonneAContacterTel | string | Numéro de téléphone de la personne à contacter |
| bCLI_ReductionFillon19 | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_ReductionFillon19** (true) ou non (false) |
| clI_ReductionFillon19 | boolean | Obsolète |
| bCLI_ReductionFillon19Debut | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_ReductionFillon19Debut** (true) ou non (false) |
| clI_ReductionFillon19Debut | string(date-time) | Obsolète |
| bCLI_SepaModeComptabilisation | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_SepaModeComptabilisation** (true) ou non (false) |
| clI_SepaModeComptabilisation | integer(int32) | Mode de comptabilisation SEPA : \| Mode de comptabilisation des opérations \| Valeur correspondante \| \| --- \| --- \| \| Par défaut \| 0 \| \| Comptabilisation par lot \| 1 \| \| Comptabilisation unitaire \| 2 \| |
| Mode de comptabilisation des opérations | Valeur correspondante |
| Par défaut | 0 |
| Comptabilisation par lot | 1 |
| Comptabilisation unitaire | 2 |
| bCLI_SortieAppliJourVersementSalaires | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_SortieAppliJourVersementSalaires** (true) ou non (false) |
| clI_SortieAppliJourVersementSalaires | boolean | Permet d'indiquer si en cas de sortie du salarié le jour de versement des salaires reste inchangé (**true**) ou non (**false**) |
| bCLI_SortieAppliModeReglementNormal | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_SortieAppliModeReglementNormal** (true) ou non (false) |
| clI_SortieAppliModeReglementNormal | boolean | Permet d'indiquer si en cas de sortie du salarié le versement du salaire se fait par chèque (**false**) ou non (**true**) |
| bCLI_SousMethodeSuiviAbsences | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_SousMethodeSuiviAbsences** (true) ou non (false) |
| clI_SousMethodeSuiviAbsences | integer(int32) | Permet de configurer la méthode de suivi des absences : \| Méthode de suivi des absences \| Valeur correspondante \| \| --- \| --- \| \| Méthode moyenne \| 0 \| \| Méthode réelle \| 1 \| |
| Méthode de suivi des absences | Valeur correspondante |
| Méthode moyenne | 0 |
| Méthode réelle | 1 |
| bCLI_SousMethodeSuiviAbsencesFJ | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_SousMethodeSuiviAbsencesFJ** (true) ou non (false) |
| clI_SousMethodeSuiviAbsencesFJ | integer(int32) | Permet d'indiquer si pour les forfaits jours, le calcul du salaire journalier se fait annuellement (**1**) ou pas (**0**) |
| bCLI_Subrogation | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_Subrogation** ( (true) ou non (false) |
| clI_Subrogation | boolean | Permet d'indiquer si l'entreprise pratique la subrogation (**true**) ou pas (**false**) |
| bCLI_SubrogationVersEtaPrincipal | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_SubrogationVersEtaPrincipal** (true) ou non (false) |
| clI_SubrogationVersEtaPrincipal | boolean | Permet d'indiquer, pour la subrogation, si l'encaissement se fait à l'établissement principal (**true**) ou pas (**false**). N'est disponible que losque plusieurs établissements existent et que la subrogation est active |
| bCLI_TassageAbsencesJours | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_TassageAbsencesJours** (true) ou non (false) |
| clI_TassageAbsencesJours | integer(int32) | Permet de configurer à partir de combien de jours il faut favoriser en tenant compte de la présence |
| bCLI_TaxeApprentissagePayeeCCP | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_TaxeApprentissagePayeeCCP** (true) ou non (false) |
| clI_TaxeApprentissagePayeeCCP | boolean | Permet d'indiquer si la taxe d'apprentissage est payée à la caisse de congés payés (**true**) ou non (**false**) |
| bCLI_TaxeCotPPrev | boolean | Indique s'il faut prendre en compte la valeur du champ **clI_TaxeCotPPrev** (true) ou non (false) |
| clI_TaxeCotPPrev | boolean | Permet d'indiquer s'il y a le forfait social sur les cotisations patronales de prévoyance (**true**) ou non (**false**) |
| INT_GreffeImmatriculationRcs | string | Permet d'indiquer l'immatriculation au RCS du Greffe |
| bINT_GreffeImmatriculationRcs | string | Indique s'il faut prendre en compte la valeur du champ **INT_GreffeImmatriculationRcs** (true) ou non (false) |
| INT_CapitalSocial | Double | Permet d'indiquer le capital social |
| bINT_CapitalSocial | Double | Indique s'il faut prendre en compte la valeur du champ **INT_CapitalSocial** (true) ou non (false) |

## Requête

```
{
  "societeInfoSup": {
    "bCLI_AffilieCCP": true,
    "clI_AffilieCCP": true,
    "bCLI_BaseCalculAnciennete": true,
    "clI_BaseCalculAnciennete": 0,
    "bCLI_CalcAutoESInactif": true,
    "clI_CalcAutoESInactif": true,
    "bCLI_CalcAutoIJSSInactif": true,
    "clI_CalcAutoIJSSInactif": true,
    "bCLI_CalcAutoMaintienInactif": true,
    "clI_CalcAutoMaintienInactif": true,
    "bCLI_CalcAutoRegulInactif": true,
    "clI_CalcAutoRegulInactif": true,
    "bCLI_ChaineFabricationDateLimiteAbsences": true,
    "clI_ChaineFabricationDateLimiteAbsences": "string",
    "bCLI_ConfSalActive": true,
    "clI_ConfSalActive": true,
    "bCLI_DFPTepa": true,
    "clI_DFPTepa": true,
    "bCLI_DFPTepaDebut": true,
    "clI_DFPTepaDebut": "2020-10-14T21:46:24",
    "bCLI_DtDebChangePaieDecalee": true,
    "clI_DtDebChangePaieDecalee": "2020-10-14T21:46:24",
    "bCLI_DtDebExerciceComptable": true,
    "clI_DtDebExerciceComptable": "2020-10-14T21:46:24",
    "bCLI_DtFinExerciceComptable": true,
    "clI_DtFinExerciceComptable": "2020-10-14T21:46:24",
    "bCLI_EmployeurCivilite": true,
    "clI_EmployeurCivilite": 0,
    "bCLI_EmployeurNom": true,
    "clI_EmployeurNom": "string",
    "bCLI_EmployeurPrenom": true,
    "clI_EmployeurPrenom": "string",
    "bCLI_EmployeurQualite": true,
    "clI_EmployeurQualite": 0,
    "bCLI_EmployeurQualiteAutre": true,
    "clI_EmployeurQualiteAutre": "string",
    "bCLI_EtatDossierPaie": true,
    "clI_EtatDossierPaie": 0,
    "bCLI_FormaProfTranche": true,
    "clI_FormaProfTranche": 0,
    "bCLI_FormaProfTrancheAnnee": true,
    "clI_FormaProfTrancheAnnee": "2020-10-14T21:46:24",
    "bCLI_FormaProfTrancheAnnee2": true,
    "clI_FormaProfTrancheAnnee2": "2020-10-14T21:46:24",
    "bCLI_FormaProfTrancheAnnee3": true,
    "clI_FormaProfTrancheAnnee3": "2020-10-14T21:46:24",
    "bCLI_FormaProfTrancheAnnee4": true,
    "clI_FormaProfTrancheAnnee4": "2020-10-14T21:46:24",
    "bCLI_GestionCPExclEnJours": true,
    "clI_GestionCPExclEnJours": true,
    "bCLI_JourVersementSalaires": true,
    "clI_JourVersementSalaires": 0,
    "bCLI_ListesTriSalaries": true,
    "clI_ListesTriSalaries": 0,
    "bCLI_MatriculeAuto": true,
    "clI_MatriculeAuto": true,
    "bCLI_MatriculeLongueur": true,
    "clI_MatriculeLongueur": 0,
    "bCLI_MethodeArbitrage": true,
    "clI_MethodeArbitrage": 0,
    "bCLI_MethodeCalculMaintien": true,
    "clI_MethodeCalculMaintien": 0,
    "bCLI_MethodeCalculMaintienNbM": true,
    "clI_MethodeCalculMaintienNbM": 0,
    "bCLI_MethodeRetenueCP": true,
    "clI_MethodeRetenueCP": 0,
    "bCLI_MethodesSuiviAbsencesDansEta": true,
    "clI_MethodesSuiviAbsencesDansEta": true,
    "bCLI_MethodeSuiviAbsences": true,
    "clI_MethodeSuiviAbsences": 0,
    "bCLI_MethodeSuiviAbsencesDeductionHM": true,
    "clI_MethodeSuiviAbsencesDeductionHM": 0,
    "bCLI_MethodeSuiviAbsencesJC": true,
    "clI_MethodeSuiviAbsencesJC": 0,
    "bCLI_MethodeSuiviCP": true,
    "clI_MethodeSuiviCP": 0,
    "bCLI_MethodeSuiviCPAcqMois": true,
    "clI_MethodeSuiviCPAcqMois": 10.5,
    "bCLI_ModuleCTCDActif": true,
    "clI_ModuleCTCDActif": true,
    "bCLI_MontagePaiePeriodeDebut": true,
    "clI_MontagePaiePeriodeDebut": "2020-10-14T21:46:24",
    "bCLI_PaieDecalee": true,
    "clI_PaieDecalee": true,
    "bCLI_PersonneAContacterMel": true,
    "clI_PersonneAContacterMel": "string",
    "bCLI_PersonneAContacterNom": true,
    "clI_PersonneAContacterNom": "string",
    "bCLI_PersonneAContacterPrenom": true,
    "clI_PersonneAContacterPrenom": "string",
    "bCLI_PersonneAContacterTel": true,
    "clI_PersonneAContacterTel": "string",
    "bCLI_ReductionFillon19": true,
    "clI_ReductionFillon19": true,
    "bCLI_ReductionFillon19Debut": true,
    "clI_ReductionFillon19Debut": "2020-10-14T21:46:24",
    "bCLI_SepaModeComptabilisation": true,
    "clI_SepaModeComptabilisation": 0,
    "bCLI_SortieAppliJourVersementSalaires": true,
    "clI_SortieAppliJourVersementSalaires": true,
    "bCLI_SortieAppliModeReglementNormal": true,
    "clI_SortieAppliModeReglementNormal": true,
    "bCLI_SousMethodeSuiviAbsences": true,
    "clI_SousMethodeSuiviAbsences": 0,
    "bCLI_SousMethodeSuiviAbsencesFJ": true,
    "clI_SousMethodeSuiviAbsencesFJ": 0,
    "bCLI_Subrogation": true,
    "clI_Subrogation": true,
    "bCLI_SubrogationVersEtaPrincipal": true,
    "clI_SubrogationVersEtaPrincipal": true,
    "bCLI_TassageAbsencesJours": true,
    "clI_TassageAbsencesJours": 0,
    "bCLI_TaxeApprentissagePayeeCCP": true,
    "clI_TaxeApprentissagePayeeCCP": true,
    "bCLI_TaxeCotPPrev": true,
    "clI_TaxeCotPPrev": true,
    "INT_GreffeImmatriculationRcs" : "String",
    "bINT_GreffeImmatriculationRcs": true,
    "INT_CapitalSocial": 10.5,
    "bINT_CapitalSocial": true
  },
  "numeroDossier": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
