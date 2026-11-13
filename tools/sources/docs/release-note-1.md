---
title: "Release Note"
slug: "release-note-1"
updated: 2026-10-27T06:44:30Z
published: 2026-10-27T06:44:30Z
canonical: "silae-api.document360.io/release-note-1"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Release Note

## Collection Postman

[Collection Postman (Périmètre Modèle 1B)](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Silae_Paie_Rest_API_2026-10-26_Partenaires.postman_collection.json?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A14Z&se=2026-11-13T20%3A13%3A14Z&sr=c&sp=r&sig=6oZ%2FKrn1GL%2BU3GJUbLAFCoGlS4ms8YWytn6IAYEF%2F30%3D)

## OpenAPI

[OpenAPI](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Silae_Paie_Rest_API_2026-09-28_Partenaires.json?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A14Z&se=2026-11-13T20%3A13%3A14Z&sr=c&sp=r&sig=6oZ%2FKrn1GL%2BU3GJUbLAFCoGlS4ms8YWytn6IAYEF%2F30%3D)

## Mise à jour du 27 octobre 2026

- Modifications :
  - CreationCompteCollaborateur, LectureCompteCollaborateur, CreationCompteCollaborateurDepuisModele, AppliquerModeleCollaborateur : ajout du paramètre activation pour chaque écran d'informations (splashscreen) : Alerte, Evolutions produit et Marketing

## Pré release du 20 octobre 2026

Nous avons le plaisir de vous informer qu'une version pré release des fonctions API suivantes est désormais disponible depuis vos environnements de tests respectifs :

- SalarieAjouterAbsenceV2 et SalarieModifierAbsenceV2 : ajout du paramètre ***absencesDemiJournee*** qui permet de préciser pour une demi-journée d'absence si elle a lieu le matin ou l'après-midi.

Cette version anticipée vous permet de tester les dernières évolutions avant le lancement officiel, d'identifier d’éventuels ajustements à prévoir et valider les nouvelles fonctionnalités en conditions réelles.

**Le déploiement officiel (environnements de production) est prévu à partir du 10 novembre 2026.**

## Mise à jour du 13 octobre 2026 (Pré release du 15/09/2026)

- Modifications :
  - LectureAxesAnalytiques, LectureAxesAnalytiquesSalaries, AjoutSousCategorieAxeAnalytique : ajout du paramètre ***libelleSousCategorie*** pour gérer le libellé de la sous catégorie analytique

## Mise à jour du 29 septembre 2026

- Ajouts :
  - LectureTauxATEtablissement : Permet de récupérer les informations liées aux différents taux AT définis au niveau de l'établissement d'un dossier de paie

## Mise à jour du 15 septembre 2026

- Modifications :
  - ModificationDroitsFonctionnelsProductionPaie : ajout des options Fonctionnalités droit simplifié (AccordsEntreprises, AvenantsCCN, EditionsHistoriques, Images, ModelesBureautiques) dans le Paramétrage simplifié de paie par dossier

## Mise à jour du 21 juillet 2026

- Ajouts :
  - EditionRecapDePaieDetailleParPeriode, EditionRecapDePaieDetailleParPeriodeAsynchrone et StatutEditionRecapDePaieDetailleParPeriodeAsynchrone : Permet de générer et récupérer l'édition Récapitulatif de paie détaillé par période.
  - EditionRecapDePaieDetailleAvecAnalytique, EditionRecapDePaieDetailleAvecAnalytiqueAsynchrone, StatutEditionRecapDePaieDetailleAvecAnalytiqueAsynchrone : Permet de générer et récupérer l'édition Récapitulatif de paie avec répartition analytique
- Modifications :
  - EditionDetailDesCotisations, EditionDetailDesCotisationsAsynchrone, StatutEditionDetailDesCotisationsAsynchrone : ajout  des paramètres axe analytique, grouper par Organisme, grouper en ignorant les codes Ducs, grouper par (mois, trimestre), détail par nature de cotisation
  - SalarieAbsencesV2, SalarieAjouterAbsenceV2 et SalarieModifierAbsenceV2 : ajout du paramètre n° de fraction afin de gérer le Congé Supplémentaire de Naissance (code 280)

## Mise à jour du 16 juin 2026

- Ajouts :
  - AnalyseActiviteStatutAccesOptions : Permet d'indiquer le statut des différents services, options et accès définis sur chaque dossier
- Modifications :
  - ListeDossiers, ListeDossiersAgence, CreationDossierPaie : ajout de la Référence de facturation, du Numéro interne et des options : Dossier interne et Mise à disposition demandée
  - CreationUtilisateurClientPaie et ListeUtilisateursDossierPaieV2 : ajout de la Référence de facturation

## Mise à jour du 9 juin 2026

- Ajouts :
  - HistoriqueDesConnexions : Permet d'obtenir l'historique des connexions au domaine
- Modifications :
  - ControlerBulletinsPeriode : ajout des paramètres optionnels matricule et identifiant emploi du salarié
  - LectureInformationsPaie et MiseAJourFicheSociete : ajout des paramètres Greffe d'immatriculation (RCS) et Montant du capital social

## Mise à jour du 2 juin 2026

- Ajouts :
  - AnalyseProductionPaieUtilisateursV3 : permet de récupérer le nombre de bulletins contrôlés, le nombre d'entrées total en fonction du type de contrat et le nombre de sorties en fonction du type de contrat et du type de licenciement
- Modifications :
  - CreationCompteCollaborateur, LectureCompteCollaborateur, CreationCompteCollaborateurDepuisModele et AppliquerModeleCollaborateur : ajout des paramètres droit d'accès sur la console de gestion des contacts et de la bibliothèque de profils

## Mise à jour du 12 mai 2026

- Modifications :
  - SalarieAjouterElementVariable et SalarieAjouterElementVariableSurEmploi : ajout d'un paramètre optionnel qui permet de contrôler l'existence du code élément variable
  - CreationSalarieEmplois  et CreationSalarieEmploisAsynchrone  : ajout d'un paramètre (motifCDDExclusions) qui permet de gérer l'option ***Ne pas appliquer le circuit dérogatoire de fin de CDDU***

## Mise à jour du 31 mars 2026

- Ajouts :
  - LectureInformationsSalarie : Permet d'obtenir les informations principales de la fiche Salarié et du dernier emploi occupé en cours ou archivé.

## Mise à jour du 10 mars 2026

- Modifications :
  - CreationCompteCollaborateur, LectureCompteCollaborateur, CreationCompteCollaborateurDepuisModele et AppliquerModeleCollaborateur :  ajout des paramètres droit d'accès sur Export de dossier, Import de dossier, Import dossier démo
  - CreationSalarieEmplois et CreationSalarieEmploisAsynchrone : ajout du paramètre ***Bénéficiaire final*** au niveau du bloc RIB
  - RecupererImage : permet de récupérer désormais l'Attestation Employeur (AER FCTU, AER CDDU-D...) pour les intermittents du spectacle (passage AEM en DSN avec France Travail)

## Mise à jour du 24 février 2026

- Modifications :
  - Endpoints SalarieRecupererRecuDPAE : Ajout du paramètre ***emploiArchive***  qui permet de récupérer la DPAE lorsque le salarié ne possède pas d'emploi en cours (prend en compte les emplois archivés)

## Mise à jour du 10 février 2026

- Ajouts :
  - LectureTeletravailFicheSalarie : Permet de récupérer les informations liées au télétravail d'un salarié
  - ModificationTeletravailFicheSalarie : Permet de modifier les informations liées au télétravail d'un salarié

## Mise à jour du 3 février 2026 (Pré release du 13/01/2026)

- Modifications :
  - Endpoints SalarieAjouterElementVariable et SalarieAjouterElementVariableSurEmploi : Contrôle avec message d'erreur dans le cas où un ajout d'élément variable est effectué sur un salarié dont le bulletin a été calculé.

## Mise à jour du 20 janvier 2026

- Ajouts :
  - AnalyseProductionPaieDocumentsSignes, AnalyseProductionPaieDocumentsSignesAsynchrone, StatutAnalyseProductionPaieDocumentsSignesAsynchrone: Permet de récupérer le total des documents à signer par dossier et par mois sur une période donnée
  - AnalyseProductionPaieRevenus, AnalyseProductionPaieRevenusAsynchrone, StatutAnalyseProductionPaieRevenusAsynchrone : Permet de récupérer les revenus de chaque salarié à partir d'un millésime donné

## Mise à jour du 13 janvier 2026

- Modifications :
  - ListeUtilisateursDossierPaieV2 et CreationUtilisateurClientPaie : ajout du paramètre ***typeContact*** qui permet de gérer le type de contact : Contact standard, Contact dédié API, Contact dédié My Silae Entreprise

## Mise à jour du 16 décembre 2025

- Modifications :
  - LectureCompteCollaborateur, CreationCompteCollaborateur, CreationCompteCollaborateurDepuisModele, AppliquerModeleCollaborateur : ajout de paramètres de droits d'accès sur pilotage projet, éditions historiques, historique des modifications d'un dossier de paie,  tâches planifiées, synthèse et Paramétrage cycle de paie
  - CreationSalarieEmploi (pré release du 25/11/2025) : contrôle sur le paramètre *nomInterneEtablissement* afin d'empêcher la création de l'emploi lorsque il n'est pas renseigné dans un dossier de paie multi-établissement

## Mise à jour du 9 décembre 2025

- Modifications :
  - SalarieAbsencesV2 : ajout du paramètre ***absencesDemiJournee*** dans le résultat de la requête pour préciser si l'absence d'une demi-journée a lieu le matin ou l'après midi
  - AnalyseProductionPaieDetail : ajout du paramètre ***typePeriode*** (Période de paie ou Période calendaire)

## Mise à jour du 25 novembre 2025

- Modifications :
  - CreationCompteCollaborateur (Pré release du 04/11/2025) : ajustement des valeurs applicables à certains droits (paramètres : paieRelationClientFicheSocieteEtatDossier, paieRelationClientGestionPortailCP, paieRelationClientContact, paieRelationClientTachesARealiser, paieRelationClientCycleDePaie, paieRelationClientAutomatisationDesDeclarations, paieRelationClientEditionsGroupees)
  - SpectacleSalarieAcquisitionAffectations et ExtraSalarieAcquisitionVacations : ajout d'un paramètre (affectationBulletin / vacationBulletin) qui permet de sélectionner les affectations/vacations avec ou sans bulletins calculés

## Mise à jour du 21 octobre 2025

- Ajouts :
  - HistoriqueDesModifications : Permet d'obtenir l'historique des modifications apportées sur les dossiers de paie.
- Portail API - Liste des comptes API
  - Ajout de la colonne ***Nom de logiciel***
  - Ajout d'un bouton **Exporter** pour extraire la liste des comptes API selon les filtres appliqués à l'écran

## Mise à jour du 7 octobre 2025

- Modifications :
  - SalarieBulletinDetails : ajout du paramètre indicePeriode pour permettre de sélectionner le bulletin généré sur la période demandée (Paramètre optionnel, par défaut le 1er bulletin généré - cf. fonction API SalarieBulletinsIndices)

## Mise à jour du 30 septembre 2025

- Ajouts :
  - SalarieBulletinsIndices : Permet de récupérer l'indice et le libellé de chaque bulletin généré sur une période
- Modifications :
  - SalarieBulletinEntete, SalarieBulletinLignes, SalarieBulletinLignesSelonFiltres : ajout du paramètre indicePeriode pour permettre de sélectionner le bulletin généré sur la période demandée (Paramètre optionnel, par défaut le 1er bulletin généré)
  - ListeSalaries : ajout des adresses mails professionnelle et personnelle en résultat

## Mise à jour du 23 septembre 2025

- Ajouts :
  - LectureGrilleHoraireFicheSalarie : Permet de lire la grille horaire d'un salarié
- Modifications :
  - AnalyseProductionPaie et AnalyseProductionPaieAsynchrone (+ StatutAnalyseProductionPaieAsynchrone) : ajout du paramètre Type de période (Période de paie ou Période calendaire) et du nombre de documents de sortie sur le coffre fort en résultat.
  - AnalyseProductionPaieBulletinsCoffresForts et AnalyseProductionPaieBulletinsCoffresFortsAsynchrone (+StatutAnalyseProductionPaieBulletinsCoffresFortsAsynchrone) : ajout du nombre de documents de sortie sur le coffre fort en résultat
  - ExistenceMatricule : ajout des paramètres NIR, Nom de naissance, Nom usuel, adresses email pro et perso
  - LecturePersonnesLiees et ModificationPersonnesLiees : ajout du paramètre Civilité
  - CreationSalarieEmplois et CreationSalarieEmploisAsynchrone (+ CreationSalarieEmploisAsynchrone) : ajout du paramètre Sexe

## Mise à jour du 16 septembre 2025

- Ajouts :
  - AnalyseProductionPaieUtilisateursV2 et AnalyseProductionPaieUtilisateursV2Asynchrone (+ StatutAnalyseProductionPaieUtilisateursV2Asynchrone) : Identique à la fonction AnalyseProductionPaieUtilisateurs, permet de récupérer également le nombre d'entrées et de sorties liées au bulletins contrôlé par l'utilisateur
- Modifications :
  - Fiche Salarié - Emploi : Bloc **Taxe versement transport** renommée **Versement mobilité** (VMRR - Versement Mobilité Régional et Rural) avec ajout de champs : SEM_TaxeVMRRInactif, SEM_TaxeVMRRCodeRegion et SEM_TaxeVMRRTaux

## Mise à jour du 9 septembre 2025

- Ajouts :
  - AnalyseProductionPaieBulletinsCoffresForts et AnalyseProductionPaieBulletinsCoffresFortsAsynchrone (+ StatutAnalyseProductionPaieBulletinsCoffresFortsAsynchrone) : Permet de récupérer le nombre de bulletins déposés sur le coffre fort, avec une ventilation par période de paie (Période de paie ou Période calendaire)
  - SalarieAbsencesV2, SalarieAjouterAbsenceV2, SalarieModifierAbsenceV2 : identiques respectivement aux fonctions API SalarieAbsences, SalarieAjouterAbsence, SalarieModifierAbsence, elles permettent de gérer les nouvelles options : type d'arrêt, arrêt sur jour partiellement travaillé… [Gestion des arrêts de travail pour Maladie Non Professionnelle (MNP)](https://support.silae.fr/hc/fr/articles/25243852601490-Gestion-des-arr%C3%AAts-de-travail-pour-Maladie-Non-Professionnelle-MNP)
- Modifications :
  - RecupererImage et RecupererImageAsynchrone (+ StatutRecupererImageAsynchrone) : Dans le cas où l'AER (nature image 2 ou 5) n'a pas encore été éditée, son état passera au statut édité avec enregistrement de la date d'édition (qui est remise à jour en cas de nouvelle récupération - modification du 02/09/25)

## Mise à jour du 18 aout 2025

- Modifications :
  - CreationSalarieEmplois et CreationSalarieEmploisAsynchrone : contrôle sur le nom interne établissement en modification de fiche Salarié

## Mise à jour du 12 aout 2025

- Modifications :
  - CreationSalarieEmplois et CreationSalarieEmploisAsynchrone - ajout des paramètres suivants :
    - rib2, iBan2, bic2, rib2PourVirements, rib2VersementPlafond
    - rib3, iBan3, bic3, rib3PourVirements, rib3VersementPlafond

## Mise à jour du 5 aout 2025

- Modifications :
  - CreationSalarieEmplois et CreationSalarieEmploisAsynchrone - ajout des paramètres suivants :
    - PersonneAContacterUrgenceNom, PersonneAContacterUrgencePrenom, PersonneAContacterUrgenceTel, PersonneAContacterUrgenceMel
    - RibPourVirements, RibVersementPlafond, PaiementEspece
    - DureePeriodeEssai1, DureePeriodeEssai2, NbPersACharge
    - Code statut régime protection sociale, EmploiNonPrincipal, ContratPartDtSignature,MotifRuptureContrat, DocsFinContratInactifs, NonSoumisHEta, FJNbJAn, RTTTypeAcq, AvnLMontantSal

## Mise à jour du 29 juillet 2025

- Modifications :
  - LecturePersonnesLiees et ModificationPersonnesLiees : ajout des champs Date de début et de fin de rattachement à l’ouvrant droit, Code organisme d’affiliation à l’assurance maladie, Régime local Alsace Moselle
  - Ajout du format XLSX (Excel) dans les fonctions API - Etats de paie suivantes :
    - EditionRecapDePaie | EditionRecapDePaieAsynchrone
    - EditionRecapDePaieDetailleParSalarie | EditionRecapDePaieDetailleParSalarieAsynchrone
    - EditionEtatDesPaiements | EditionEtatDesPaiementsAsynchrone
    - EditionJournalDePaie | EditionJournalDePaieAsynchrone
    - EditionSoldeDeRepos | EditionSoldeDeReposAsynchrone
    - EditionTableauDesCharges | EditionTableauDesChargesAsynchrone
    - EditionCoutsSalariaux | EditionCoutsSalariauxAsynchrone
    - EditionDetailDesCotisations | EditionDetailDesCotisationsAsynchrone

## Mise à jour du 1 juillet 2025

- Modifications :
  - Ecran de paramétrage des configurations d'accès API ([Configuration API](https://silae-api.document360.io/docs/configuration-api)) :
    - Ajout filtres ***Groupe*** et ***Type d'accès*** au niveau de la liste des configurations API
    - Ajout colonnes ***Type d'accès*** et ***Liste dossiers*** sur Export tableur

## Mise à jour du 20 mai 2025

- Ajouts :
  - AnalyseProductionPaieBulletinsOriginaux, AnalyseProductionPaieBulletinsOriginauxAsynchrone et StatutAnalyseProductionPaieBulletinsOriginauxAsynchrone : Permet de récupérer le nombre de bulletins originaux produits par période de paie

## Mise à jour du 6 mai 2025

- Ajouts :
  - EditionHistoriqueChiffre, EditionHistoriqueChiffreAsynchrone et StatutEditionHistoriqueChiffreAsynchrone : Permet de générer et récupérer une édition historique configurée dans le dossier de paie de manière chiffré

## Mise à jour du 29 avril 2025

- Modifications :
  - Nouvelle interface pour la mise en place des configurations d'accès API : [Configuration API](https://silae-api.document360.io/docs/configuration-api)

## Mise à jour du 22 avril 2025

- Modifications :
  - ListeDossiersAgence : Ajout de l'option ***Mise à disposition demandée*** dans le résultat de la requête

## Mise à jour du 8 avril 2025

- Modifications :
  - SalarieAjouterAbsence et SalarieModifierAbsence : Ajout de l'option ***Absence complète avec effet sur le PSS*** dans les paramètres

## Mise à jour du 1 avril 2025

- Modifications :
  - SalarieAjouterAcompte : Ajout du libellé de l'acompte (facultatif)

## Mise à jour du 25 mars 2025

- Modifications :
  - CreationSalarieEmplois : Ajout du paramètre email professionnel

## Mise à jour du 18 mars 2025

- Ajouts :
  - EcrituresComptablesPaiementSalairesLotsVirement : Permet d'obtenir la liste des numéros de lot de virement de paiement des salaires sur une période donnée
- Modifications :
  - ListeDSNEvenementielles : Ajout des paramètres Date de début et de fin de dépôt DSN évènementielles
  - EcrituresComptablesPaiementSalaires : ajout du paramètre N° de lot de virement et du code journal dans les écritures comptables de paiement des salaires
  - EcrituresComptablesPaiementAcomptes : ajout d'une rupture par date d'acompte et du code journal dans les écritures comptables de paiement des acomptes
  - EcrituresComptables4 et StatutEcrituresComptables4Asynchrone : ajout du code journal dans les écritures comptables d'OD de paie

## Mise à jour du 4 mars 2025

- Ajouts :
  - ListeDSNEvenementielles : Permet d'obtenir la liste des DSN évènementielles par salarié concerné sur une période donnée
- Modifications :
  - CreationUtilisateurClientPaie : Contrôles de l'identifiant à la création d'un contact.
    - A la création, l'identifiant doit être au format email et sa valeur identique à l'e-mail
    - A la modification, l'e-mail peut être changé. L'identifiant n'est plus modifiable

## Mise à jour du 25 février 2025

- Modifications :
  - LectureCompteCollaborateur, CreationCompteCollaborateur, AppliquerModeleCollaborateur, CreationCompteCollaborateurDepuisModele :  mise en conformité des droits collaborateur proposés depuis l’interface My Silae

## Mise à jour du 18 février 2025

- Ajouts :
  - AnalyseProductionPaieEffectifs, AnalyseProductionPaieEffectifsAsynchrone et StatutAnalyseProductionPaieEffectifsAsynchrone : Permet d'obtenir l'effectif moyen sur une période donnée
- Modifications :
  - LectureAxesAnalytiques et LectureAxesAnalytiquesSalaries :  Permet de gérer jusqu'à 15 axes analytiques
  - SalarieBulletinLignes, SalarieBulletinDetails et SalarieBulletinLignesSelonFiltres : ajout des données colonnes bulletin dans le résultat de la requête (Marque 1, Marque 2, Périodes…)
  - SalarieBulletinCumuls : ajout du plafond SS et Nombre heures ou jours travaillés dans le résultat de la requête

## Mise à jour du 4 février 2025

- Modifications :
  - EditionSoldeDeRepos et EditionSoldeDeReposAsynchrone :  ajout d'une option qui permet de sélectionner l'axe analytique sur l'édition Solde repos avec répartition analytique

## Mise à jour du 28 janvier 2025

- Ajouts :
  - AppliquerModeleCollaborateur : Permet d'appliquer un modèle Collaborateur à un collaborateur existant
- Modifications :
  - EditionSoldeDeRepos et EditionSoldeDeReposAsynchrone :  Les 6 types d'édition Solde de repos sont désormais disponibles

## Mise à jour du 21 janvier 2025

- Modifications :
  - ListeSalarieEmplois :  ajout de 2 motifs d'erreurs liés au matriculeSalarie
    - Si le matricule n'existe pas sur le dossier alors on renvoie désormais une erreur 400 de type "Aucun salarié ne correspond au matricule" (auparavant, on renvoyait un code 200 avec une liste vide).
    - Si plusieurs salariés portent le même matricule sur le dossier alors on renvoie désormais une erreur 400 de type "Plusieurs salariés correspondent au matricule" (auparavant, on renvoyait un code 200 avec une liste vide)
  - EditionSoldeDeRepos et EditionSoldeDeReposAsynchrone :  ajout d'une option qui permet d'obtenir une édition Classique (valeur : 1), une édition Jours CP (valeur : 2) ou une édition Détaillée du solde de repos (valeur par défaut : 3)
  - RecupererImage :  ajout d'une nature d'image "Attestation pôle emploi AER avec signataire" (valeur : 5)

## Mise à jour du 14 janvier 2025

- Ajouts :
  - EcrituresComptablesPaiementAcomptes : Permet de récupérer les lignes d'écritures comptables relatives au paiement des acomptes
  - EcrituresComptablesPaiementSalaires : Permet de récupérer les lignes d'écritures comptables relatives au paiement des salaires
  - ModificationAxesAnalytiquesSalarie : Permet de modifier l'axe analytique d'un salarié en se référant directement au titre de la catégorie d'affectation.
- Portail API : Des notifications par mail seront envoyées lorsque l'expiration du ClientSecret est imminente. Tous les détails dans : [La gestion des ClientSecret et Clés de configuration d'accès](https://silae-api.document360.io/docs/gestion-des-clientsecret-et-cles-de-configuration-dacces)

## Mise à jour du 17 décembre 2024

- Modifications :
  - ListeDSNMensuelles : ajout de la date d'envoi DSN dans le résultat de la fonction API

## Mise à jour du 10 décembre 2024

- Mise en place d'un rate limiting sur l'authentification API (demande de token / token) :
  - Pour rappel, l'usage des API en mode REST nécessite une authentification préalable via l'URL https://payroll-api-auth.silae.fr/oauth2/v2.0/token, qui donne lieu à la délivrance d'un token.
  - Comme précisé dans la page [Authentification et appel endpoint](/api-rest/docs/authentification), ce token est d'une validité de 60 minutes et peut être utilisé et réutilisé pour tous les appels réalisés durant cette période.
  - Une mauvaise pratique consiste à ne jamais réutiliser un token et donc à se réauthentifier à chaque nouvel API : cette pratique peut avoir des conséquences sur les performances des API.
  - Pour prévenir cette mauvaise pratique et garantir un service optimal pour tous, nous mettons en place une limite d’authentification à 60 token / min sur la production à partir du mardi 10/12/24.
- Modifications :
  - LectureInformationsPaie :  ajout de 2 motifs d'erreurs liés au matriculeSalarie.
    - Si le matricule n'existe pas sur le dossier alors on renvoie désormais une erreur 400 de type "Aucun salarié ne correspond au matricule" (auparavant, on renvoyait un code 200 avec une liste vide).
    - Si plusieurs salariés portent le même matricule sur le dossier alors on renvoie désormais une erreur 400 de type "Plusieurs salariés correspondent au matricule" (auparavant, on renvoyait un code 200 avec une liste vide).

## Mise à jour du 12 novembre 2024

- Modifications :
  - CreationSalarieEmplois et StatutCreationSalarieEmploisAsynchrone : ajout du N° de matricule du salarié dans le résultat de la fonction API
  - SoldeRepos et SoldeReposAsynchrone : ajout du N° de Matricule du salarié dans les paramètres de la requête
  - Ajout du paramètre **format** dans les fonctions API - Etats de paie : Permet de générer l'édition  au format PDF ou EXCEL encodée en base64 :
    - EditionDetailDesCotisations | EditionDetailDesCotisationsAsynchrone
    - EditionEtatDesPaiements | EditionEtatDesPaiementsAsynchrone
    - EditionJournalDePaie | EditionJournalDePaieAsynchrone
    - EditionRecapDePaie | EditionRecapDePaieAsynchrone
    - EditionSoldeDeRepos | EditionSoldeDeReposAsynchrone
    - EditionTableauDesCharges | EditionTableauDesChargesAsynchrone
    - EditionCoutsSalariaux | EditionCoutsSalariauxAsynchrone
    - EditionRecapDePaieDetailleParSalarie | EditionRecapDePaieDetailleParSalarieAsynchrone

## Mise à jour du 5 novembre 2024

- Ajouts :
  - ```
  SalarieBulletinStatutEtatAvancement : Permet de connaître le statut du bulletin de chaque salarié dans l'état d'avancement pour un période donnée
```
- Modifications :
  - ListeDossiers : ajout du numéro interne de la fiche Client (Gestion interne) dans le résultat de la fonction API

## Mise à jour du 16 octobre 2024

- Ajouts :
  - RecupererFichiersEcrituresComptablesAsynchrone et StatutRecupererFichiersEcrituresComptablesAsynchrone : Identique à la fonction API RecupererFichiersEcrituresComptable, elle permet de lancer le traitement en mode asynchrone

## Mise à jour du 1 octobre 2024

- Ajouts :
  - EcrituresComptables4Asynchrone et StatutEcrituresComptables4Asynchrone : Identique à la fonction API EcrituresComptables4, elle permet de lancer le traitement en mode asynchrone

## Mise à jour du 24 septembre 2024

- Ajouts :
  - EcrituresComptables4 : Identique à la fonction API EcrituresComptables3, elle permet de prendre en charge également les options paramétrées dans la fonction **Liaison comptable** de Silae Paie
  - ListeModulesMySilae : Permet de récupérer la liste des dossiers de paie où MySilae est activé avec les modules associés et leurs statuts respectifs
- Modifications :
  - creationcomptecollaborateur, LectureCompteCollaborateur, CreationCompteCollaborateurDepuisModele, LectureCompteCollaborateurModeles : Pris en charge du droit "Autoriser accès aux menus import /export de paramétrages"
  - ModificationPersonnesLiees : contrôle sur la date de décès qui ne peut être inférieure à la date de naissance
  - ListeModulesActifs : Ajout du paramètre CodeAgence (facultatif) et dans le résultat de la requête, la Date de dernière Modification

## Mise à jour du 10 septembre 2024

- Ajouts :
  - CreationCompteCollaborateurDepuisModele : Permet de créer un compte collaborateur à partir d'un modèle déjà enregistré.
  - LectureCompteCollaborateurModeles : Permet de lire les modèles de comptes collaborateurs déjà existants.

## Mise à jour du 3 septembre 2024

- Ajouts :
  - ListeUtilisateursDossierPaieV2 : Permet de lire les informations relatives aux identifiants, noms, prénoms, fonctions, téléphones et emails des utilisateurs.
- Modifications :
  - CreationUtilisateurClientPaie : Ajout de la possibilité d'insérer une fonction et le téléphone.
  - AffectationDossierPaie : Ajout de la possibilité d'affecter une agence à un dossier.
  - AffectationDossierPaieLecture : Ajout de la possibilité de lire l'agence affectée à un dossier.
  - ModificationpersonnesLiee : Ajout de la possibilité de mettre une date de décès et l'information sur le handicap des personnes liées.
  - LecturePersonnesLiees : Ajout de la lecture des champs date de décès et l'information sur le handicap des personnes liées à un salarié.
  - SalariesBulletins : Ajout de la possibilité de filtrer sur l'établissement.

## Mise à jour du 27 août 2024

- Ajouts :
  - EditionRecapDePaieDetailleParSalarie (équivalence en mode asynchrone : EditionRecapDePaieDetailleParSalarieAsynchrone et Statut EditionRecapDePaieDetailleParSalarieAsynchrone) : Permet de générer et récupérer l'édition récapitulatif de paie détaillé par salarié.
  - ModificationCCNEtablissement : Permet de modifier la convention collective liée à l'établissement selon les différentes conventions collectives rattachées à la fiche Société.
  - ListeOrganismes : Permet de récupérer la liste de tous les organismes (Urssaf, Retraite, Prévoyance…) avec toutes les données rattachées depuis un numéro de dossier
  - SalarieActiviteJournaliere : Permet de connaître la grille de l'activité journalière pour un salarié sur une période donnée
- Modifications :
  - ListeDossiers : ajout du Jour Paiement de l'organisme dont le code nature est SSOC et Etat du dossier de paie (Inactif, en montage, en production)

## Mise à jour de juillet 2024

- Modifications :
  - Contrôle du nom de naissance (valeur obligatoire en création de fiche Salarié)
    - CreationSalarieEmploi
    - StatutCreationSalarieEmploiAsynchone / CreationSalarieEmploiAsynchone
  - Ajout de la gestion  des Axes Analytiques 1, 2 et 3 (si existants) pour :
    - ExtraCreationManifestation
    - ExtraSalarieAcquisitionVacations
    - ExtraSalarieAjouterVacations

## Mise à jour de juin 2024

- Modifications :
  - Nouveau format de date acceptée et à respecter : AAAA-MM-JJ pour :
    - CreationSalarieEmploi
    - StatutCreationSalarieEmploiAsynchone / CreationSalarieEmploiAsynchone
    - ModificationChampSalarie
    - ExtraSalarieAjouterVacations
    - ExtraCreationManifestation
  - CreationSalarieEmploi et CreationSalarieEmploiAsynchrone :
    - Ajout Année de naissance
    - Contrôles sur le numéro de sécurité sociale (cf. Messages d'erreur de ces fonctions API)
  - Fiche Salarié - Informations salarié : Ajout Année de naissance.

## Mise à jour de mars 2024

- Modifications :
  - AnalyseProductionPaie et StatutAnalyseProductionPaieAsynchrone : ajout du nombre de bulletins CoffresForts éditiques
  - AnalyseProductionPaieDetail : ajout de l'analyse "NbBulletinsCoffresFortsEditique"

## Mise à jour de février 2024

- Modifications :
  - Prise en compte de la DFS (Déduction Forfaitaire Spécifique) par code secteur d'activité et de l'option Lissage annuel dans les différentes fonctions API concernées : CreationSalarieEmplois, LectureInformationsPaie​... (consulter les articles correspondants)

## Mise à jour de janvier 2024

- Modifications :
  - LectureReponsesQuestionnaireFicheSalarie : Permet de récupérer les réponses au questionnaire Salarié depuis sa fiche, ainsi que les libellés des questions qui lui correspondent.
  - EcritureReponsesQuestionnaireFicheSalarie : Permet de modifier les réponses au questionnaire Salarié sur sa fiche.
  - LectureReponsesQuestionnaireConventionnelSalarie : Permet de lire le questionnaire conventionnel d'un emploi d'un salarié.
  - EcritureReponsesQuestionnaireConventionnelSalarie : Permet de modifier les réponses au questionnaire conventionnel d'un emploi d'un salarié
  - ListeDSNmensuelles : gestion erreur sur Siret
  - Fiche Salarié Emploi : Gestion du Code territoire pour la CCN M110 - Métallurgie
  - SiteGenereMotDePasseAlternatif  : pour exploiter cette fonction API, il est nécessaire d'activer l'option ***Utilisation API > Génération de mot de passe alternatif***  (pour le détail, consulter l'article correspondant)

## Mise à jour de décembre 2023

- Modifications :
  - ValideCleDossier : de nouveaux types d'erreur sont générés (consulter l'article correspondant pour le détail)
  - SalarieSyntheseCarriere et StatutSalarieSyntheseCarriereAsynchrone : Ajout de l'identifiant emploi dans la réponse

## Mise à jour de septembre 2023

- Modifications :
  - CreationSalarieEmploi : ajout de la donnée Date de début de contrat

## Mise à jour de juillet 2023

- Modifications :
  - SalarieBulletinCumuls : ajout de la donnée impot sur le revenu - prélèvement à la source en résultat

## Mise à jour de juin 2023

Périmètre API - Usage Éditeur - Écritures comptables (Modèle 4) : Ajout de fonctions API appartenant au groupe *[Info technique dossier](https://portal.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/document/api-rest/category/34c58fbe-9845-42cf-a122-500fd687d67d)*

- Modifications :
  - AcquisitionQuestionnaireContratComplementaire : Permet de récupérer les questionnaires complémentaires tels que configurés dans un dossier (compléter de champs supplémentaires sur le résultat)
- Ajouts :
  - ListeAgences : Permet de récupérer la liste des agences du domaine.
  - LectureFicheAgence : Permet de récupérer certaines informations de l'agence.
  - ListeDossiersAgence : Permet de récupérer la liste des dossiers affectés à une agence.
  - ListeDossiersDemoSilae : Permet de récupérer la liste des dossiers de démo mis à disposition par Silae pour des démonstrations/présentations.
  - ImportDossierDemoAsynchrone : Permet de lancer l'import d'un dossier de démonstration Silae (sur le même principe que la fonction Outils > Importer un dossier de démonstration)
  - StatutImportDossierDemoAsynchrone : Cette fonction sert à récupérer le résultat de l'appel à la fonction ImportDossierDemoAsynchrone
  - CreationQuestionnaireContratComplementaire : Permet de créer ou modifier un questionnaire de contrat complémentaire pour un dossier.
  - LectureQuestionnaireContratComplementaireSalarie : Permet de lire les réponses d'un salarié à un questionnaire de contrat complémentaire.
  - ModificationQuestionnaireContratComplementaireSalarie : Permet de modifier les réponses aux questions relatives aux contrats complémentaires.

## Mise à jour de mai 2023

- Ajouts :
  - ListeModulesActifs : Permet de lister les modules activés par dossier.
  - ListeComptesApi : Permet de récupérer la liste des comptes API disponibles (actifs) sur le domaine courant.
  - CreationConfigurationAccesApi : Permet de créer ou de modifier une configuration d'accès API
  - GenerationFichierTR : Permet de générer le fichier d'export des tickets restaurant au format spécifié en paramètre (Edenred, sodexo, etc...)
  - SalarieBulletinCumuls : Permet de récupérer le cumul de certains éléments du bulletin pour un salarié sur une période donnée.
  - CreationCompteCollaborateur : Permet de créer et modifier un compte collaborateur sans avoir besoin de l'utilisateur "Administrateur Général de Domaine"
  - LectureCompteCollaborateur : Permet de récupérer les informations d'un compte Collaborateur sans avoir besoin de l'utilisateur "Administrateur Général de Domaine"

## Mise à jour d'avril 2023

- Ajouts :
  - RecupererFichiersEcrituresComptables : Permet de récupérer le ou les fichiers d'écritures comptables tel que paramétré dans l'écran de génération des fichiers séquentiels.
  - LectureContactEmetteurDSN : Permet de récupérer les infos du contact émetteur DSN paramétré sur un numéro de dossier et le numero de siren de la société de rattachement (optionnel).
  - AnalyseConfigurationAccesApi : Permet de récupérer la liste des configurations d'accès API déclarées dans un domaine.
- Modifications :  

Les fonctions API suivantes affichent le résultat en fonction des droits d'accès aux dossiers de l'utilisateur courant :
  - AnalyseProductionPaie
  - AnalyseProductionPaieAsynchrone + StatutAnalyseProductionPaieAsynchrone
  - AnalyseProductionPaieUtilisateurs
  - AnalyseProductionPaieEntreesSorties
  - AnalyseProductionPaieEntreesSortiesAsynchrone + StatutAnalyseProductionPaieEntreesSortiesAsynchrone

## Mise à jour de mars 2023

- **Mise en production de la gestion multi-comptes dans le portail API. Via l'interface, un utilisateur peut désormais gérer plusieurs comptes API, et un même compte API peut être géré par plusieurs utilisateurs.**
- Ajouts :
  - RecupererDuplicatasBulletins : Permet d'obtenir uniquement les duplicatas de bulletins en un seul fichier PDF pour 1 seul salarié d'une société sur plusieurs mois ou plusieurs salariés d'une même société sur 1 seul mois (Combinaison des fonctionnalités SalariesBulletins et RecupererImage)

Cette même fonction est disponible en mode asynchrone :

| Endpoint Asynchrone | Endpoints Asynchrone Statut |
| --- | --- |
| RecupererDuplicatasBulletinsAsynchrone | StatutRecupererDuplicatasBulletinsAsynchrone |

- Mise à disposition de endpoints asynchrones permettant la récupération d'éléments prenant du temps sans risquer de timeout.** :

| Endpoint Asynchrone | Endpoints Asynchrone Statut |
| --- | --- |
| AnalyseProductionPaieAsynchrone | StatutAnalyseProductionPaieAsynchrone |
| AnalyseProductionPaieEntreesSortiesAsynchrone | StatutAnalyseProductionPaieEntreesSortiesAsynchrone |
| CreationSalarieEmploisAsynchrone | StatutCreationSalarieEmploisAsynchrone |
| EcrituresComptablesAsynchrone | StatutEcrituresComptablesAsynchrone |
| EditionJournalDePaieAsynchrone | StatutEditionJournalDePaieAsynchrone |
| EditionTableauDesChargesAsynchrone | StatutEditionTableauDesChargesAsynchrone |
| EditionEtatDesPaiementsAsynchrone | StatutEditionEtatDesPaiementsAsynchrone |
| EditionRecapDePaieAsynchrone | StatutEditionRecapDePaieAsynchrone |
| EditionSoldeDeReposAsynchrone | StatutEditionSoldeDeReposAsynchrone |
| EditionControleCICEAsynchrone | StatutEditionControleCICEAsynchrone |
| EditionDetailDesCotisationsAsynchrone | StatutEditionDetailDesCotisationsAsynchrone |
| EditionCoutsSalariauxAsynchrone | StatutEditionCoutsSalariauxAsynchrone |
| EditionHistoriqueAsynchrone | StatutEditionHistoriqueAsynchrone |
| RecupererDeclarationsAsynchrone | StatutRecupererDeclarationsAsynchrone |
| RecupererDuplicatasBulletinsAsynchrone | StatutRecupererDuplicatasBulletinsAsynchrone |
| RecupererImageAsynchrone | StatutRecupererImageAsynchrone |
| SalarieDUEAsynchrone | StatutSalarieDUEAsynchrone |
| SalarieSyntheseCarriereAsynchrone | StatutRecupererImageAsynchrone |
| SalariesBulletinsAsynchrone | StatutSalariesBulletinsAsynchrone |
| SalariesConfirmerSaisiesAsynchrone | StatutSalariesConfirmerSaisiesAsynchrone |
| SoldeReposAsynchrone | StatutSoldeReposAsynchrone |
| SpectacleSalarieCalculerBulletinAsynchrone | StatutSpectacleSalarieCalculerBulletinAsynchrone |

Tous les détails sur le mode de fonctionnement de ces endpoints asynchrones dans les [Fonctions API en mode asynchrone](https://silae-api.document360.io/api-rest/docs/principes-generaux-1#les-fonctions-api-en-mode-asynchrone)

## Mise à jour de février 2023

- Modifications :
  - SoldeRepos : Ajout des soldes acquis/pris pour les RCR, RCO, RCC et RC.
  - ClassificationMetierComplete : Ajout des informations sur la période de validité dans la réponse
- Ajouts :
  - SalarieBulletinDetails : Permet de récupérer les informations (entête et/ou lignes) du ou des bulletins pour un salarié pour une période de paie donnée
  - RecupererFichiersVirementHorsBulletin
  - RecupererFichiersVirementHorsBulletinChiffres
  - AdministrationCollaborateurLectureParIdentifiant
  - RechercheCCNParCode
