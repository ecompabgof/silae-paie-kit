---
title: "Fiche Salarié - Informations salarié"
slug: "fiche-salarie-informations-salarie"
updated: 2026-03-09T16:55:11Z
published: 2026-03-10T06:48:01Z
canonical: "silae-api.document360.io/fiche-salarie-informations-salarie"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Fiche Salarié - Informations salarié

Cette fiche permet de lister les noms des champs de la fiche salarié ainsi que les informations associées.

## Identification du salarié

![Fiche_Salarie_1](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_1.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_S30_G10_05_001 | string[30] | Correspond au champ Matricule |
| SAL_MatriculeInterne | string[30] |  |
| SAL_DadsInactive | boolean |  |
| SAL_NivConfSal | int | Attention, il y a un décalage de +5 entre la valeur à l'écran et la valeur saisie/enregistrée. Le niveau de confidentialité est compris entre 0 et 9. La valeur saisie ou lue de ce champ est comprise entre -5 et 4 |
| INT_Civilite | byte | [Civilité](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#civilite) |
| INT_NomNaissance | string[50] |  |
| INT_NomMarital | string[50] |  |
| INT_NomUsuel | string[50] |  |
| INT_Prenom | string[40] |  |
| INT_NumeroSS | string[15] | Ce champ contient le NIR complet (13 caractères et la clé) |
| INT_SituationFamiliale | byte | [Situation familiale](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#situation-familiale) |
| SAL_AFFECT_TYPEX | string[30] | Ces champs représentant les affectations aux axes analytiques, il y en a jusqu'à 7 (SAL_AFFECT_TYPE1, SAL_AFFECT_TYPE2, ..., SAL_AFFECT_TYPE7) |

### Naissance

![Fiche_Salarie_2](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28222%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_DateNaissance | DateTime | Date de naissance du salarié si renseigné |
| SAL_AnneeNaissance | Int | Année de naissance du salarié si date de naissance inconnue |
| INT_DepartementNaissance | string[2] |  |
| INT_CommuneNaissance | string[32] |  |
| INT_PaysNaissanceISO | string[2] |  |
| INT_PaysNaissance | string[38] |  |

### Pays de nationalité

![Fiche_Salarie_3](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_3.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_PaysNationaliteISO | string[2] |  |
| INT_PaysNationalite | string[38] |  |

## Coordonnées

![Fiche_Salarie_4](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_4.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_NumVoie | string[4] |  |
| INT_BTQC | string[10] | Indicateur de répétition (BIS, TER, QUATER, QUINQUIES...) |
| INT_NomVoie | string[32] |  |
| INT_ComplementAdresse | string[38] |  |
| INT_CodePostal | string[5] |  |
| INT_NomVille | string[32] |  |
| SAL_Frontalier | boolean |  |
| INT_CommuneINSEE | string[5] |  |
| INT_Commune | string[32] |  |
| INT_PaysISO | string[2] |  |
| INT_NomPays | string[38] |  |
| INT_TelDomicile | string[20] |  |
| INT_TelPortable | string[20] |  |
| INT_TelBureau | string[20] |  |
| INT_TelPortablePro | string[20] |  |
| INT_MelPerso | string[60] |  |
| INT_Mel | string[60] | Correspond à l'adresse mail professionnelle |
| SAL_AutoriseMailProN4DS | boolean | Choix disponible si l'adresse mail professionnelle est valide |

### Personne à contacter en cas d'urgence

![Fiche_Salarie_5](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_5.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_PersonneAContacterUrgenceNom | string[50] |  |
| SAL_PersonneAContacterUrgencePrenom | string[40] |  |
| SAL_PersonneAContacterUrgenceTel | string[20] |  |
| SAL_PersonneAContacterUrgenceMel | string[60] |  |

## Informations bancaires

![Fiche_Salarie_6](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_6.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_RibX | string[23] | Dans le nom du champ, le caractère 'X' doit être remplacé par le numéro de ligne (de 1 à 3) |
| SAL_IbanX | string[34] | Dans le nom du champ, le caractère 'X' doit être remplacé par le numéro de ligne (de 1 à 3) |
| SAL_BicX | string[11] | Dans le nom du champ, le caractère 'X' doit être remplacé par le numéro de ligne (de 1 à 3) |
| SAL_RibXPourVirements | boolean | Dans le nom du champ, le caractère 'X' doit être remplacé par le numéro de ligne (de 1 à 3) |
| SAL_RibXVersementPlafond | double | Dans le nom du champ, le caractère 'X' doit être remplacé par le numéro de ligne (de 1 à 3). La valeur de ce champ est un double avec 5 entiers et 2 décimales |
| SAL_PaiementEspeces | boolean | Précise si paiement en espèces (true : Oui / false : Non) |
| SAL_BeneficiaireFinal | string[70] | Nom du bénéficiaire final |

## Entrée dans l'entreprise

![Fiche_Salarie_7](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_7.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_DateEntree | DateTime | Les 3 champs affichés sur l'écran correspondent à une seule valeur de DateTime |
| SAL_DateAnciennete | DateTime |  |
| SAL_ESFrequentes | boolean |  |
| SAL_ESFrequentesCumDernEnt | boolean | La valeur de champ doit être conditionnée à la valeur du champ SAL_ESFrequentes. Permet d'activer la gestion des cumuls depuis la dernière entrée |

### Niveau d'étude

![Fiche_Salarie_8](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_8.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_ENT_Code | string[40] | [Nature d'étude](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#nature-d%C3%A9tude) |
| SAL_ENV_CODE | string[40] | Niveau d'étude, en fonction de la Nature sélectionnée (cf. détail dans l'article sur le niveau d'étude) |
| SAL_EDP_Code | string[70] | Diplôme, en fonction du Niveau d'étude et de la Nature sélectionnée (cf. détail dans l'[article sur le niveau d'étude](https://silae-api.document360.io/api-rest/docs/niveau-detude)) |
| SAL_EtudesInfosComplementaires | string[60] | Diplôme, en fonction du Niveau d'étude et de la Nature sélectionnée (cf. détail dans l'[article sur le niveau d'étude](https://silae-api.document360.io/api-rest/docs/niveau-detude)) |
| SAL_FormationPlusEleve | string[60] | [Formation la plus élevée](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#formation-la-plus-%C3%A9lev%C3%A9e) |
| SAL_DiplomePrepare | string[60] | [Diplôme préparé](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#dipl%C3%B4me-pr%C3%A9par%C3%A9) |

### Initialisation de l'ancienneté

![Fiche_Salarie_9](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_9.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_DateAncienneteDepartValeur | int | Nombre de mois pour l'ancienneté (Limité à 3 chiffres) |
| SAL_DateAncienneteDepartValeurJ | int | Nombre de jours pour l'ancienneté (Limité à 3 chiffres) |
| SAL_DateAncienneteDepart | DateTime | Date de référence pour le calcul de l'ancienneté |
| SAL_NbMAncienneteProfAvEmb | int | Nombre de mois d'ancienneté dans la profession (Limité à 3 chiffres) |

### Embauche

![Fiche_Salarie_10](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_10.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_SituationAvantEmbauche | string[200] | Valeurs attendues : - Salarié sous contrat à durée indéterminée - Salarié sous contrat à durée déterminée, intérimaire - En stage de formation pour jeune ou pour chômeur de longue durée ou sous contrat de travail de type particulier, hors CES, CEC, emploi jeune (contrat de qualification,...) - Demandeur d'emploi inscrit à l'ANPE - Personne sans emploi - Etudiant, élève, personne au service national - Autre - CES, CEC, emploi jeune - Stagiaire |
| SAL_DureePeriodeEssai1 | byte | Durée de la période d'essai en nombre de jours (la gestion de l'affichage des 3 champs se fait par l'application); Valeur maximale : 255 |
| SAL_DureePeriodeEssai2 | byte | Durée de la prolongation de la période d'essai en nombre de jours (la gestion de l'affichage des 3 champs se fait par l'application). Valeur maximale : 255 |

### Parenté avec le chef d'entreprise

![Fiche_Salarie_11](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_11.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_LienParenteChefEntreprise | byte | [Lien de parenté](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#lien-de-parent%C3%A9) |

### Divers

![Fiche_Salarie_12](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_12.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_CumulsParEta | boolean |  |
| SAL_ClotureCPReport | boolean |  |
| SAL_ClotureRTTReport | boolean |  |

### Tenue

![Fiche_Salarie_13](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_13.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_Pointure | string[10] |  |
| INT_TailleHaut | string[10] |  |
| INT_TaillePantalon | string[10] |  |
| INT_TourDeTete | string[10] |  |
| INT_TourDeCou | string[10] |  |

### Travailleur étranger - Titre séjour

![Fiche_Salarie_14](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_14.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_TitreSejourType | byte | [Titre de séjour](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#titre-de-s%C3%A9jour) |
| INT_TitreSejourNumOrdre | string[20] |  |
| INT_TitreSejourDebut | DateTime |  |
| INT_TitreSejourFin | DateTime |  |

### Section prud'homale

![Fiche_Salarie_15](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_15.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_SectionPrudhomale | string[2] | Le valeur de ce champ est **05** pour la coche activée et vide pour la coche désactivée |

### Médecine du travail

![Fiche_Salarie_16](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_16.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_SurveillanceMedRenforcee | boolean |  |

### Salarié protégé

![Fiche_Salarie_17](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_17.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

Les informations pour les salariés protégés sont gérées par des fonctions API spécifiques : [LectureSalarieProtege](https://silae-api.document360.io/api-rest/docs/lecturesalarieprotege) et [ModificationSalarieProtege](https://silae-api.document360.io/api-rest/docs/modificationsalarieprotege).

### Travailleur handicapé

![Fiche_Salarie_18](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_18.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

Les informations pour les travailleurs handicapés sont gérées par des fonctions spécifiques : [LectureHandicap](https://silae-api.document360.io/api-rest/docs/lecturehandicap) et [ModificationHandicap](https://silae-api.document360.io/api-rest/docs/modificationhandicap).

## Sortie de l'entreprise

![Fiche_Salarie_20](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_20.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_DateSortie | DateTime |  |

## Saisies - arrêts

![Fiche_Salarie_21](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_21.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

Les informations de saisies - arrêts sont gérées par des fonctions spécifiques : LectureSaisieArret et ModificationSaisieArret Il est quand même possible de lire et modifier le nombre de personnes à charge via le champ suivant :

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_NbPersACharge | int |  |

## Conjoint

![Fiche_Salarie_22](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_22.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

Les informations sur les personnes liées sont gérées par des fonctions spécifiques : [LecturePersonnesLiees](https://silae-api.document360.io/api-rest/docs/lecturepersonnesliees) et [ModificationPersonnesLiees](https://silae-api.document360.io/api-rest/docs/modificationpersonnesliees).

## Enfants - Personnes à Charge

![Fiche_Salarie_23](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_23.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

Les informations sur les enfants et personnes à charge sont gérées par des fonctions spécifiques : [LecturePersonnesLiees](https://silae-api.document360.io/api-rest/docs/lecturepersonnesliees) et [ModificationPersonnesLiees](https://silae-api.document360.io/api-rest/docs/modificationpersonnesliees)

## Coffre-fort numérique

![Fiche_Salarie_25](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_25.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_OptionCoffreFort | int | 0: Le salarié accepte d'utiliser son coffre-fort numérique 1 : Le salarié refuse, mais ses bulletins sont déposés sur l'espace de l'employeur (permet l'éditique) 2 : Le salarié refuse, et ss bulletins ne sont pas déposés sur l'espace de l'employeur |

## Don par arrondi

![Fiche_Salarie_24](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_24.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_DonArrondiChoix | byte | [Choix du don par arrondi](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#choix-du-don-par-arrondi) |
| SAL_DonArrondiValeurDonFixe | double | Montant de 6 entiers et 2 décimales |
| SAL_DonArrondiValeurDonCompl | double | Montant de 6 entiers et 2 décimales |

## Questionnaire Salarié

![Fiche_Salarie_19](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Salarie_19.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A55Z&se=2026-11-13T20%3A39%3A55Z&sr=c&sp=r&sig=N3QhJWd6wWzM0Nsh5KsdFmmnAyKiCLrZQSSCDQ2sZXM%3D) *A noter : le questionnaire salarié est configuré au niveau de la fiche société.*

Ces données sont gérées par des fonctions spécifiques : [LectureReponsesQuestionnaireFicheSalarie](https://silae-api.document360.io/api-rest/docs/lecturereponsesquestionnairefichesalarie) et [EcritureReponsesQuestionnaireFicheSalarie](https://silae-api.document360.io/api-rest/docs/ecriturereponsesquestionnairefichesalarie).

Pour information, chaque question est représentée par un Type de saisie et un Indice entre 1 à 40 => il existe un champ pour chacune des combinaisons < Type de saisie >/< Indice > :

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SAL_QSALBoolX | boolean | Pour le champ de type Case à cocher avec l'indice X |
| SAL_QSALIntX | int | Pour le champ de type Entier avec l'indice X |
| SAL_QSALDoubleX | double | Pour le champ de type Montant avec l'indice X |
| SAL_QSALDateX | DateTime | Pour le champ de type Date avec l'indice X |
| SAL_QSALTextX | String | Pour le champ de type Texte avec l'indice X |
