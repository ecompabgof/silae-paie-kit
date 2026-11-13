---
title: "API d'administration"
slug: "api-usage-interne-paie"
updated: 2026-11-13T17:14:16Z
published: 2026-11-13T17:14:16Z
canonical: "silae-api.document360.io/api-usage-interne-paie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# API - Usage interne Paie (Modèle 1A)

## Administration - Analyses

- AnalyseActiviteStatutAccesOptions
- AnalyseProductionPaie
- AnalyseProductionPaieAsynchrone
- StatutAnalyseProductionPaieAsynchrone
- AnalyseProductionPaieBulletinsOriginaux
- AnalyseProductionPaieBulletinsOriginauxAsynchrone
- StatutAnalyseProductionPaieBulletinsOriginauxAsynchrone
- AnalyseProductionPaieDetail
- AnalyseProductionPaieEffectifs
- AnalyseProductionPaieEffectifsAsynchrone
- StatutAnalyseProductionPaieEffectifsAsynchrone
- AnalyseProductionPaieEntreesSorties
- AnalyseProductionPaieEntreesSortiesAsynchrone
- StatutAnalyseProductionPaieEntreesSortiesAsynchrone
- AnalyseProductionPaieUtilisateurs
- AnalyseProductionPaieUtilisateursV2
- AnalyseProductionPaieUtilisateursV2Asynchrone
- StatutAnalyseProductionPaieUtilisateursV2Asynchrone
- BureautiquePaieNombreDocumentsCrees
- ListeModulesActifs
- ListeModulesMySilae

  

## Administration Configuration Dossier

- ActivationDSN
- AffecterCleDossier
- AjouteCompteRenduEdi
- AjouteCompteRenduEdi94
- AjoutSousCategorieAxeAnalytique
- CreationDossierPaie
- CreationDossierParImportFichierDSN
- CreationEmetteurDSN
- CreationOrganisme
- CreationUtilisateurClientPaie
- EtatDeclarations
- GererCycleDePaie
- GererEtatDossierPaie
- GererEtatRobotDePaie
- ImportFichierDSN
- ImportXmlParametrageOrganismeDSN
- InitialisationAncienNumeroContratDSN
- LectureContactEmetteurDSN
- CreationOrganisme
- ListeOrganismes
- ListeUtilisateursDossierPaie
- ListeUtilisateursDossierPaieV2

  

## Administration Domaine Silae

- AdministrationCollaborateurEnregistrement
- AdministrationCollaborateurLecture
- AdministrationCollaborateurLectureParIdentifiant
- LectureCompteCollaborateur
- CreationCompteCollaborateur
- LectureCompteCollaborateurModeles
- CreationCompteCollaborateurDepuisModele
- AffectationDossierPaie
- AffectationDossierPaieLecture
- ModificationDroitsFonctionnelsProductionPaie
- ListeAgences
- LectureFicheAgence
- ListeDossiersAgence
- AnalyseConfigurationAccesApi
- ListeComptesApi
- CreationConfigurationAccesApi

  

## Connexion

- ValideCleDossier

  

## Cycle Paie Compta

- EditionControleCICE
- EditionControleCICEAsynchrone
- StatutEditionControleCICEAsynchrone
- EditionEtatDesPaiements
- EditionEtatDesPaiementsAsynchrone
- StatutEditionEtatDesPaiementsAsynchrone
- EditionJournalDePaie
- EditionJournalDePaieAsynchrone
- StatutEditionJournalDePaieAsynchrone
- EditionRecapDePaie
- EditionRecapDePaieAsynchrone
- StatutEditionRecapDePaieAsynchrone
- EditionSoldeDeRepos
- EditionSoldeDeReposAsynchrone
- StatutEditionSoldeDeReposAsynchrone
- EditionTableauDesCharges
- EditionTableauDesChargesAsynchrone
- StatutEditionTableauDesChargesAsynchrone
- SoldeRepos
- SoldeReposAsynchrone
- StatutSoldeReposAsynchrone

  

## Cycle Paie - Post Paie

- ControlerBulletinsPeriode
- EditionCoutsSalariaux
- EditionCoutsSalariauxAsynchrone
- StatutEditionCoutsSalariauxAsynchrone
- EditionDetailDesCotisations
- EditionDetailDesCotisationsAsynchrone
- StatutEditionDetailDesCotisationsAsynchrone
- RecupererDeclarations
- RecupererDeclarationsAsynchrone
- StatutRecupererDeclarationsAsynchrone
- GenerationFichierTR

  

## Écritures comptables

- EcrituresComptables
- EcrituresComptables2
- EcrituresComptables3
- EcrituresComptables4
- EcrituresComptablesAsynchrone
- StatutEcrituresComptablesAsynchrone
- EcrituresComptables4Asynchrone
- StatutEcrituresComptables4Asynchrone
- RecupererFichiersEcrituresComptables
- RecupererFichiersEcrituresComptablesAsynchrone
- StatutRecupererFichiersEcrituresComptablesAsynchrone
- EcrituresComptablesPaiementSalairesLotsVirement
- EcrituresComptablesPaiementSalaires
- EcrituresComptablesPaiementAcomptes

  

## Exploitation données calculées

- SalarieBulletinEntete
- SalarieBulletinLignes
- SalarieBulletinLignesSelonFiltres
- SalarieBulletinDetails
- SalarieBulletinCumuls
- SalariesStockVar
- SalarieBulletinStatutEtatAvancement
- SalarieBulletinsIndices

  

## Exploitation données calculées DSN

- AcquisitionContenuPartielDSN
- ListeDSNMensuelles
- RechercheDeclarationEvenementielle
- ListeDSNEvenementielles

  

## Exploitation données globales

- LectureInformationsPaie
- SalarieRecupererPeriodeDernierBulletinCalcule
- EditionHistorique
- EditionHistoriqueAsynchrone
- StatutEditionHistoriqueAsynchrone
- HistoriqueDesModifications
- HistoriqueDesConnexions

  

## Lecture données dossier, société, salarié & emploi

- AcquisitionQuestionnaireContratComplementaire
- DossierRecupererPeriodeEnCours
- ExistenceMatricule
- LectureAxesAnalytiques
- LectureAxesAnalytiquesSalaries
- LectureCCNSociete
- LectureEffectifEtablissement
- LectureEffectifSociete
- LectureEffortConstruction
- LectureFNAL
- LectureGrilleHoraireFicheSalarie
- LectureHandicap
- LectureInformationBancaireSociete
- LectureInformationsSalarie
- LecturePersonnesLiees
- LectureSaisieArret
- LectureSalarieProtege
- LectureReponsesQuestionnaireFicheSalarie
- LectureTaxeTransport
- LectureTaxeApprentissageSociete
- LectureTaxeApprentissageEtablissement
- LectureTeletravailFicheSalarie
- ListeDossiers
- ListeEtablissementsDossierPaie
- ListeInformationsDossiersPaie
- ListeMatriculesDupliques
- ListeMatriculesDupliquesDansDomaine
- ListeNumerosDossiers
- ListeSalarieEmplois
- ListeSalarieEmploisExternes
- ListeSalaries
- ListeSalariesExternes
- ListeVariablesASaisir
- MatriculeSalarie
- SalarieAbsences
- SalarieAbsencesV2
- SalarieActiviteJournaliere
- SalarieRecupererDUE
- SalarieRecupererRecuDPAE
- SalarieSalaireDeBase
- SalariesBulletins
- SalariesBulletinsAsynchrone
- StatutSalariesBulletinsAsynchrone
- SalarieSyntheseCarriere
- SalarieSyntheseCarriereAsynchrone
- StatutSalarieSyntheseCarriereAsynchrone

  

## Paiements

- RecupererFichiersVirement
- RecupererFichiersVirementHorsBulletin

  

## Récupération Bulletin PDF

- RecupererDuplicatasBulletins
- RecupererDuplicatasBulletinsAsynchrone
- StatutRecupererDuplicatasBulletinsAsynchrone
- RecupererImageAsynchrone
- StatutRecupererImageAsynchrone
- RecupererImage

  

## Single Sign-On

- SiteGenereMotDePasseAlternatif

  

## Veille juridique

- RechercheCCN
- RechercheCCNParCode
