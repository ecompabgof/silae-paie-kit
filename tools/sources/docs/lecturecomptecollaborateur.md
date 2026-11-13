---
title: "LectureCompteCollaborateur"
slug: "lecturecomptecollaborateur"
updated: 2026-10-27T06:44:30Z
published: 2026-10-27T06:44:30Z
canonical: "silae-api.document360.io/lecturecomptecollaborateur"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# LectureCompteCollaborateur

## Fonction API

```
/v1/AdminCollaborateurs/LectureCompteCollaborateur
```

## Verbe HTTP

Post

## Description

Permet la lecture des informations complètes d'un compte Collaborateur, à partir de son identifiant ou de son code Collaborateur.

## Groupe de fonctions API

ADMIN02

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| idUtilisateur | string | Identifiant (login) utilisé pour aller chercher le collaborateur (optionnel) |
| codeCollaborateur | string | Code collaborateur utilisé pour aller chercher le collaborateur (optionnel) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiant | string | Identifiant (login) du collaborateur |
| codeCollaborateur | string | Code collaborateur |
| accesDroitsFonctionnels | string | Liste des codes collaborateurs sur lesquels le collaborateur courant à le droit de mise à jour des droits fonctionnels (séparés par des ';') si le mode d'accès droits fonctionnels est de type 'Custom' |
| accesDroitsFonctionnelsMode | string | Mode : \| Code \| Description \| \| --- \| --- \| \| Custom \| Droits fonctionnels pour certains collaborateurs définis dans la propriété précédente **AccesDroitsFonctionnels** \| \| None \| Aucun droit fonctionnel pour les collaborateurs \| \| All \| Droits fonctionnels pour tous les collaborateurs \| |
| Code | Description |
| Custom | Droits fonctionnels pour certains collaborateurs définis dans la propriété précédente **AccesDroitsFonctionnels** |
| None | Aucun droit fonctionnel pour les collaborateurs |
| All | Droits fonctionnels pour tous les collaborateurs |
| civilite | integer(int32) | Civilité : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| nomNaissance | string | Nom de naissance |
| nomMarital | string | Nom marital |
| nomUsuel | string | Nom usuel |
| prenom | string | Prénom |
| droitsLimitesEnPaie | boolean | Indique si l'utilisateur a des droits limités en paie (**true**) ou non (**false**) |
| email | string | Adresse e-mail |
| telephonePortable | string | Téléphone portable |
| telephoneBureau | string | Téléphone bureau |
| telephoneDomicile | string | Téléphone domicile |
| dateDebutValidite | string(date) | Date de début de validité du compte |
| dateFinValidite | string(date) | Date à partir de laquelle le compte sera (ou a été) désactivé |
| roles | CompteCollaborateurRoles | Élément structuré contenant les informations sur les rôles du collaborateur (cf. détail ci-dessous) |
| requeteAccesDossiers | string | Requête de limitation d'accès aux dossiers. Le détail de l'utilisation de ce filtre est disponible via la [fiche dédiée](https://silae-api.document360.io/api-rest/docs/syntaxe-de-la-gestion-des-droits-fonctionnels) |
| niveauConfidentialite | integer(int32) | Niveau de confidentialité du collaborateur, qui indique la limite du niveau de confidentialité des informations auxquelles il peut avoir accès |
| droits | CompteCollaborateurDroits | Élément structuré contenant les informations sur les droits du collaborateur (cf. détail ci-dessous) |
| codeAgence | string | Code de l'agence à laquelle est rattaché le collaborateur |
| horairesAcces | CompteCollaborateurHorairesAcces | Élément structuré contenant les informations sur les horaires d'accès du collaborateur (cf. détail ci-dessous) |
| affectations | integer[] | Liste des affectations du collaborateur sous forme d'index (Par exemple, pour les affectations par défaut d'un cabinet d'expert comptable : 1,3 =Expert Comptable et Collaborateur comptable ) |
| domaineInterventionEmetteurDads | string | Domaine d'intervention émission DADS : \| Code \| Description \| \| --- \| --- \| \| 01 \| Administratif \| \| 02 \| Informatique \| \| 03 \| Autre \| |
| Code | Description |
| 01 | Administratif |
| 02 | Informatique |
| 03 | Autre |
| splashscreensAlerte | boolean | Active l'écran d'information de type Alerte à l'ouverture de mySIlae Paie - true : oui - false : non |
| splashscreensProduit | boolean | Active l'écran d'information de type Evolutions produit à l'ouverture de mySIlae Paie - true : oui - false : non |
| splashscreensMarketing | boolean | Active l'écran d'information de type Marketing à l'ouverture de mySIlae Paie - true : oui - false : non |

### CompteCollaborateurRoles

| Paramètre | Type | Description |
| --- | --- | --- |
| dataProtectionOfficier | boolean | Indique si le rôle ***DPO (DPD en français)*** est affecté (**true**) ou non (**false**) au collaborateur |
| dirigeant | boolean | Indique si le rôle ***Dirigeant*** est affecté (**true**) ou non (**false**) au collaborateur |
| referentPoleSocial | boolean | Indique si le rôle ***Référent Pôle Social*** est affecté (**true**) ou non (**false**) au collaborateur |
| responsableCommercial | boolean | Indique si le rôle ***Reponsable commercial*** est affecté (**true**) ou non (**false**) au collaborateur |
| responsableFacturation | boolean | Indique si le rôle ***Responsable Facturation*** est affecté (**true**) ou non (**false**) au collaborateur |
| responsableFormation | boolean | Indique si le rôle ***Responsable Formation*** est affecté (**true**) ou non (**false**) au collaborateur |
| responsableInformatique | boolean | Indique si le rôle ***Responsable Informatique affecté*** est affecté (**true**) ou non (**false**) au collaborateur |
| responsableJuridique | boolean | Indique si le rôle ***Responsable Juridique affecté*** est affecté (**true**) ou non (**false**) au collaborateur |

### CompteCollaborateurDroits

| Paramètre | Type | Description |
| --- | --- | --- |
| administration | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Administration*** (**true**) ou non (**false**) |
| administrationCollaborateur | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Admin Collab*** (**true**) ou non (**false**) |
| analyseActivitePaie | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Analyse Activité*** (**true**) ou non (**false**) |
| droitsUtilisateur | CompteCollaborateurDroitsUtilisateur | Élément structuré contenant les informations des droits du compte Collaborateur (cf. détail ci-dessous) |
| gestionInterne | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Gestion Interne*** (**true**) ou non (**false**) |
| gestionInterneSimplifiee | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Gestion Interne*** avec des restrictions (**true**) ou non (**false**) |
| outils | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Outils*** (**true**) ou non (**false**) |
| parametragePaie | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Paramétrage Paie*** (**true**) |
| production | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Production*** (**true**) ou non (**false**) |
| robotPaie | boolean | Indique si le compte Collaborateur a accès à l'onglet ***Robot de Paie*** (**true**) ou non (**false**) |
| pilotageProjet | boolean | Droit sur onglet **Pilotage Projet**, valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| centreNotifications | boolean | Droit sur onglet **Centre de notifications**, valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |

### CompteCollaborateurHorairesAcces

| Paramètre | Type | Description |
| --- | --- | --- |
| accesJours | CompteCollaborateurHoraireAccesParJour[] | Liste d'éléments structurés contenant les informations sur les horaires d'accès du collaborateur jour par jour (cf. détail ci-dessous) |
| accesJoursFeries | string | \| Code \| Description \| \| --- \| --- \| \| SUIVRE_LA_REGLE_D_HERITAGE \| L'accès les jours dépend de la société \| \| Autorise \| Accès autorisé les jours féries \| \| Interdit \| Accès interdit les jours féries \| |
| Code | Description |
| SUIVRE_LA_REGLE_D_HERITAGE | L'accès les jours dépend de la société |
| Autorise | Accès autorisé les jours féries |
| Interdit | Accès interdit les jours féries |

### CompteCollaborateurDroitsUtilisateur

| Paramètre | Type | Description |
| --- | --- | --- |
| paieRelationClientGestionPortailCP | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Gestion Portail Salarié*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalités \| \| LectureSeule \| Accès en lecture seule \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalités |
| LectureSeule | Accès en lecture seule |
| Interdit | Accès bloqué |
| paieRelationClientContact | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Contacts*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalités \| \| LectureSeule \| Accès en lecture seule \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalités |
| LectureSeule | Accès en lecture seule |
| Interdit | Accès bloqué |
| paieRelationClientTachesARealiser | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Tâches à réaliser*. Valeurs possibles : \| **Valeur** \| **Correspondance** \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| LectureSeule \| Accès en lecture seule \| |
| **Valeur** | **Correspondance** |
| Autorise | Accès complet aux fonctionnalité |
| LectureSeule | Accès en lecture seule |
| paieParametrageMtPartMtPartApplicablesAuDossier | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Montants particuliers > Montants particuliers applicables au dossier*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalités \| \| LectureSeule \| Accès en lecture seule \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalités |
| LectureSeule | Accès en lecture seule |
| Interdit | Accès bloqué |
| paieCotisationsTauxApplicablesAuDossier | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Cotisations > Taux applicables au dossier*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalités \| \| LectureSeule \| Accès en lecture seule \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalités |
| LectureSeule | Accès en lecture seule |
| Interdit | Accès bloqué |
| paieRelationClientCycleDePaie | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Cycle de paie*. Valeurs possibles : \| **Valeur** \| **Correspondance** \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| LectureSeule \| Accès en lecture seule \| |
| **Valeur** | **Correspondance** |
| Autorise | Accès complet aux fonctionnalité |
| LectureSeule | Accès en lecture seule |
| paieRelationClientAutomatisationDesDeclarations | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Automatisation des déclarations*. Valeurs possibles : \| **Valeur** \| **Correspondance** \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| LectureSeule \| Accès en lecture seule \| |
| **Valeur** | **Correspondance** |
| Autorise | Accès complet aux fonctionnalité |
| LectureSeule | Accès en lecture seule |
| paieRelationClientEditionsGroupees | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Éditions groupées*. Valeurs possibles : \| **Valeur** \| **Correspondance** \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| LectureSeule \| Accès en lecture seule \| |
| **Valeur** | **Correspondance** |
| Autorise | Accès complet aux fonctionnalité |
| LectureSeule | Accès en lecture seule |
| paieRelationClientFicheSocieteEtatDossier | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Etat du dossier*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalités \| \| LectureSeule \| Accès en lecture seule \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalités |
| LectureSeule | Accès en lecture seule |
| Interdit | Accès bloqué |
| paieParametrageLiaisonComptable | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Liaison comptable*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalités \| \| LectureSeule \| Accès en lecture seule \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalités |
| LectureSeule | Accès en lecture seule |
| Interdit | Accès bloqué |
| paieRelationClientArchivageDossier | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Archivage du dossier*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalités \| \| LectureSeule \| Accès en lecture seule \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalités |
| LectureSeule | Accès en lecture seule |
| Interdit | Accès bloqué |
| paieParametrageCotisationsComplementLibelles | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Cotisations > Complément Libellés*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageCotisationsTaux | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Cotisations > Taux*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageCotisationsTauxAT | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Cotisations > Taux AT*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametragePrimesProfils | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Primes > Profils*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paiePrimesCaracteristiques | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Primes > Caractéristiques* (menu accessible uniquement dans le cas des accès simplifiés aux dossiers, paramétrable dans les droits fonctionnels). Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageHeuresHeures | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Heures > Heures*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageHeuresComplementLibelles | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Heures > Complément Libellés*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageMtPartMtPart | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Montants particuliers > Montants particuliers*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageVariablesASaisir | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Variables à saisir*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageContratsComplementaires | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Contrats compélmentaires*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageMethodes | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Méthodes*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieGestionImputationsAnalytiques | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Gestion > Imputations analytiques*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageImportExportParams | string | Dans l'onglet d'un **Dossier de Paie**, Accès au menus d'import/export dans les différents écrans du menu *Paramétrage *. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageEditionsHistoriques | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Editions historiques > Paramétrage des éditions historiques*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageEditionsHistoriquesNoCode | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Editions historiques > Paramétrage utilisateur des éditions historiques*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieParametrageEditionsHistoriquesNoCodeHistorisation | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Paramétrage > Editions historiques > Paramétrage utilisateur des éditions historiques > Afficher l'historique des actions*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| paieGestionAnalytiqueEnPourcentage | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Gestion > Analytique en pourcentage*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteSpecificites | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Spécificités*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteProductionCollaborateur | string | Dans l'onglet **Analyse de l'activité**, droit sur le menu *Production > Analyse de l'activité par collaborateur*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteProductionUtilisateur | string | Dans l'onglet **Analyse de l'activité**, droit sur le menu *Production > Analyse de l'activité par identifiant utilisateur*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteProduction | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Production*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteBulletins | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Bulletins*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteDossiers | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Dossiers*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteRelationClient | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Relation Client*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteDADSU | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *DADS-Ucificités*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteDSN | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *DSN*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteInfosClients | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Infos clients*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteListeOrganismesDSN | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Organismes DSN*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| analyseActiviteRecherches | string | Dans l'onglet **Analyse de l'activité**, droit sur le bloc *Recherches*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| generalAccesFormulaireAssistance | string | Dans l'écran principal de Silae, droit sur le bouton *Formulaire Assistance*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneParametrages | string | Dans l'onglet **Gestion Interne**, droit sur le bloc *Paramétrages*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneParametragesClients | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Paramétrages > Clients*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneParametragesClientsMenuSupprimer | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Paramétrages > Clients > Supprimer (pour supprimer un dossier)*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneParametragesClientsConfigurationAPIFichiersVirement | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Paramétrages > Clients > Configuration API*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneParametragesAgences | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Paramétrages > Agences*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneParametragesParamClesAcces | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Paramétrages > Paramétrage des clés d'accès aux dossiers*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneParametragesAffectationCollaborateurs | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Paramétrages > Affectation rapide des collaborateurs*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneAnalyseProduction | string | Dans l'onglet **Gestion Interne**, droit sur le bloc *Analyse production*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneAnalyseProductionSynthetique | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Analyse production > Synthétique*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneAnalyseProductionDetaille | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Analyse production > Détaillée*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneAnalyseProductionN4DS | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Analyse production > N4DS*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneInfosClients | string | Dans l'onglet **Gestion Interne**, droit sur le bloc *Infos clients*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneInfosClientsInfosClients | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Infos clients > Infos clients*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneInfosClientsInfosBancaires | string | Dans l'onglet **Gestion Interne**, droit sur le menu *Infos clients > Infos bancaires*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| parametragePaieConfigurationAPI | string | Dans l'onglet **Paramétrage paie**, droit sur le menu *Configuration API*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| parametragePaieGenerationFichiersVirements | string | Dans l'onglet **Paramétrage paie**, droit sur le menu *Génération des fichiers de virements*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| administrationConnexionAuthentificationExterne | string | Dans l'onglet **Administration**, droit sur le menu *Connexion > Authent externe*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| administrationConnexionPersonnalisationEcranConnexion | string | Dans l'onglet **Administration**, droit sur le menu *Connexion > Personnalisation*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| administrationParametrages | string | Dans l'onglet **Administration**, droit sur le menu *Paramétrages*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| administrationParametragesParametresAvances | string | Dans l'onglet **Administration**, droit sur le menu *Paramétrages avancés*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| administrationPilotageActivite | string | Dans l'onglet **Administration**, droit sur le menu *Pilotage de l'activité*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| administrationPilotageActiviteHistoriqueConnexions | string | Dans l'onglet **Administration**, droit sur le menu *Pilotage de l'activité > Historique des connexions*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| administrationPilotageActiviteHistoriqueModifications | string | Dans l'onglet **Administration**, droit sur le menu *Pilotage de l'activité > Historique des modifications*. Valeurs possibles : {{snippet.API_correspondances_valeurdroitscollaborateurs2etats} |
| administrationConfigurationExport | string | Dans l'onglet **Administration**, droit sur le menu *Conf. Exports*. Valeurs possibles : {{snippet.API_correspondances_valeurdroitscollaborateurs2etats} |
| silaeHubLienSilaeHub | string | Dans l'onglet production, droit sur le lien vers le SilaeHub |
| productionSuiviFPOC | string | Dans l'onglet production, droit vers l'écran de suivi des FPOC |
| productionSuiviFPOCTelechargerPlus | string | Dans l'écran suivi des FPOC, droit vers l'outil de téléchargement |
| productionSuiviFPOCAfficherNonRattachees | string | Dans l'écran suivi des FPOC, droit pour afficher les FPOC non rattachées |
| dossierPaieOutilsSuppressionDesDonnees | string | Dans l'onglet **Outils**, droit la suppression des données |
| dossierPaieDsnRegularisationManuelle | string | Dans l'onglet **PAS - DSN**, droit sur la DSN - Régularisations manuelles |
| gestionInterneParametragesClientsConfigurationAPIAccesAPIDossier | string | Dans l'onglet **Gestion interne**, droit sur Configuration API |
| gestionInterneParametragesClientsSuppressionDeDossiers | string | Dans l'onglet **Gestion Interne**, droit sur la fonction Suppression de dossiers |
| outilsPaieExportV2ExportNonChiffre | string | Dans l'onglet **Outils**, droit à l'option Export non chiffré |
| administrationConnexion | string | Dans l'onglet **Administration**, droit au menu Connexion |
| administrationParametragesAuthentificationExterneDossier | string | Dans l'onglet **Administration**, droit à la configuration de l'authentification externe |
| administrationPilotageActiviteBlocageAppelant | string | Dans l'onglet **Administration**, droit à la fonctionnalité Blocage Appelant |
| administrationPilotageActiviteComptesBloques | string | Dans l'onglet **Administration**, droit à la fonctionnalité Comptes bloqués |
| utilisationApi | string | Dans l'onglet **Admin. collaborateurs**, droit à l'utilisation API |
| utilisationApiGenerationMotDePasseAlternatif | string | Dans l'onglet **Admin. collaborateurs**, droit à la génération de mot de passe alternatif |
| dossierPaieSuiviModifications | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Contrôle et sécurité (Historique des modifications)*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| pilotageProjetGestionModeles | string | Dans l'onglet d'un **Pilotage Projet**, droit sur *Gérer les modèles*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| relationClientTachesPlanifiees | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Tâches planifiées*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| relationClientSyntheseCycleDePaie | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Synthèse Cycle de paie*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| relationClientParametrageCycleDePaie | string | Dans l'onglet d'un **Dossier de Paie**, droit sur le menu *Relation Client > Paramétrage cycle de paie*. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| outilsPaieExportDeDossier | string | Dans l'onglet **Outils**, droit à l'option Export de dossier. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| outilsPaieImportDeDossier | string | Dans l'onglet **Outils**, droit à l'option Import de dossier. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| outilsPaieImportDeDossierDemo | string | Dans l'onglet **Outils**, droit à l'option Import de dossier démo. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneConsoleDeGestionDesContacts | string | Dans l'onglet **Gestion interne**, droit d'accès à la fonction **Contacts**. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |
| gestionInterneConsoleDeGestionDesContactsBibliothequeDeProfil | string | Dans l'onglet **Gestion interne**, droit d'accès à l'option Bibliothèque des modèles de la fonction **Contacts**. Valeurs possibles : \| Valeur \| Correspondance \| \| --- \| --- \| \| Autorise \| Accès complet aux fonctionnalité \| \| Interdit \| Accès bloqué \| |
| Valeur | Correspondance |
| Autorise | Accès complet aux fonctionnalité |
| Interdit | Accès bloqué |

### CompteCollaborateurHoraireAccesParJour

| Paramètre | Type | Description |
| --- | --- | --- |
| jourSemaine | string | Jour de la semaine en toutes lettres (Lundi, Mardi...) |
| horaires | string | Chaîne de caractères décrivant les horaires (ex '08h00 - 12h00 14h00 - 18h00' ou 'Interdit' ) |

## Requête

```
{
  "idUtilisateur": "string",
  "codeCollaborateur": "string"
}
```

## Réponse

```
{
  "identifiant": "string",
  "codeCollaborateur": "string",
  "accesDroitsFonctionnels": "string",
  "accesDroitsFonctionnelsMode": "string",
  "civilite": 0,
  "nomNaissance": "string",
  "nomMarital": "string",
  "nomUsuel": "string",
  "prenom": "string",
  "droitsLimitesEnPaie": true,
  "email": "string",
  "telephonePortable": "string",
  "telephoneBureau": "string",
  "telephoneDomicile": "string",
  "dateDebutValidite": "2020-10-14",
  "dateFinValidite": "2020-10-14",
  "roles": {
    "dataProtectionOfficier": true,
    "dirigeant": true,
    "referentPoleSocial": true,
    "responsableCommercial": true,
    "responsableFacturation": true,
    "responsableFormation": true,
    "responsableInformatique": true,
    "responsableJuridique": true
  },
  "requeteAccesDossiers": "string",
  "niveauConfidentialite": 0,
  "droits": {
    "administration": true,
    "administrationCollaborateur": true,
    "analyseActivitePaie": true,
    "droitsUtilisateur": {
      "paieRelationClientGestionPortailCP": "string",
      "paieRelationClientContact": "string",
      "paieRelationClientTachesARealiser": "string",
      "paieParametrageMtPartMtPartApplicablesAuDossier": "string",
      "paieCotisationsTauxApplicablesAuDossier": "string",
      "paieRelationClientCycleDePaie": "string",
      "paieRelationClientAutomatisationDesDeclarations": "string",
      "paieRelationClientEditionsGroupees": "string",
      "paieRelationClientFicheSocieteEtatDossier": "string",
      "paieParametrageLiaisonComptable": "string",
      "paieRelationClientArchivageDossier": "string",
      "paieParametrageCotisationsComplementLibelles": "string",
      "paieParametrageCotisationsTaux": "string",
      "paieParametrageCotisationsTauxAT": "string",
      "paieParametragePrimesProfils": "string",
      "paiePrimesCaracteristiques": "string",
      "paieParametrageHeuresHeures": "string",
      "paieParametrageHeuresComplementLibelles": "string",
      "paieParametrageMtPartMtPart": "string",
      "paieParametrageVariablesASaisir": "string",
      "paieParametrageContratsComplementaires": "string",
      "paieParametrageMethodes": "string",
      "paieGestionImputationsAnalytiques": "string",
      "paieParametrageImportExportParams": "string",
      "paieParametrageEditionsHistoriques": "string",
      "paieParametrageEditionsHistoriquesNoCode": "string",
      "paieParametrageEditionsHistoriquesNoCodeHistorisation": "string",
      "paieGestionAnalytiqueEnPourcentage": "string",
      "analyseActiviteSpecificites": "string",
      "analyseActiviteProductionCollaborateur": "string",
      "analyseActiviteProductionUtilisateur": "string",
      "analyseActiviteProduction": "string",
      "analyseActiviteBulletins": "string",
      "analyseActiviteDossiers": "string",
      "analyseActiviteRelationClient": "string",
      "analyseActiviteDADSU": "string",
      "analyseActiviteDSN": "string",
      "analyseActiviteInfosClients": "string",
      "analyseActiviteListeOrganismesDSN": "string",
      "analyseActiviteRecherches": "string",
      "generalAccesFormulaireAssistance": "string",
      "gestionInterneParametrages": "string",
      "gestionInterneParametragesClients": "string",
      "gestionInterneParametragesClientsMenuSupprimer": "string",
      "gestionInterneParametragesClientsConfigurationAPIFichiersVirement": "string",
      "gestionInterneParametragesAgences": "string",
      "gestionInterneParametragesParamClesAcces": "string",
      "gestionInterneParametragesAffectationCollaborateurs": "string",
      "gestionInterneAnalyseProduction": "string",
      "gestionInterneAnalyseProductionSynthetique": "string",
      "gestionInterneAnalyseProductionDetaille": "string",
      "gestionInterneAnalyseProductionN4DS": "string",
      "gestionInterneInfosClients": "string",
      "gestionInterneInfosClientsInfosClients": "string",
      "gestionInterneInfosClientsInfosBancaires": "string",
      "parametragePaieConfigurationAPI": "string",
      "parametragePaieGenerationFichiersVirements": "string",
      "administrationConnexionAuthentificationExterne": "string",
      "administrationConnexionPersonnalisationEcranConnexion": "string",
      "administrationParametrages": "string",
      "administrationParametragesParametresAvances": "string",
      "administrationPilotageActivite": "string",
      "administrationPilotageActiviteHistoriqueConnexions": "string",
      "administrationPilotageActiviteHistoriqueModifications": "string",
      "administrationConfigurationExport": "string",
      "silaeHubLienSilaeHub": "string",
      "productionSuiviFPOC": "string",
      "productionSuiviFPOCTelechargerPlus": "string",
      "productionSuiviFPOCAfficherNonRattachees": "string",
      "dossierPaieOutilsSuppressionDesDonnees": "string",
      "dossierPaieDsnRegularisationManuelle": "string",
      "gestionInterneParametragesClientsConfigurationAPIAccesAPIDossier": "string",
      "gestionInterneParametragesClientsSuppressionDeDossiers": "string",
      "outilsPaieExportV2ExportNonChiffre": "string",
      "administrationConnexion": "string",
      "administrationParametragesAuthentificationExterneDossier": "string",
      "administrationPilotageActiviteBlocageAppelant": "string",
      "administrationPilotageActiviteComptesBloques": "string",
      "utilisationApi": "string",
      "utilisationApiGenerationMotDePasseAlternatif": "string",
      "dossierPaieSuiviModifications": "string",
      "pilotageProjetGestionModeles": "string",
      "relationClientTachesPlanifiees": "string",
      "relationClientSyntheseCycleDePaie": "string",
      "relationClientParametrageCycleDePaie": "string",
      "outilsPaieExportDeDossier": "string",
      "outilsPaieImportDeDossier": "string",
      "outilsPaieImportDeDossierDemo": "string",
      "gestionInterneConsoleDeGestionDesContacts": "string",
      "gestionInterneConsoleDeGestionDesContactsBibliothequeDeProfil": "string"
    },
    "gestionInterne": true,
    "gestionInterneSimplifiee": true,
    "outils": true,
    "parametragePaie": true,
    "production": true,
    "robotPaie": true,
    "pilotageProjet": true,
    "centreNotifications": true
  },
  "codeAgence": "string",
  "horairesAcces": {
    "accesJours": [
      {
        "jourSemaine": "string",
        "horaires": "string"
      },
      {
        "jourSemaine": "string",
        "horaires": "string"
      }
    ],
    "accesJoursFeries": "string"
  },
  "affectations": [
    0,
    0
  ],
  "domaineInterventionEmetteurDads": "string",
  "preferences": {
    "splashscreensAlerte": true,
    "splashscreensProduit": true,
    "splashscreensMarketing": true
    }  
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
