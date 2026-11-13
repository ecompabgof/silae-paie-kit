---
title: "Fiche Salarié - Emploi"
slug: "fiche-salarie-emploi"
updated: 2026-01-21T09:34:41Z
published: 2026-01-21T09:34:41Z
canonical: "silae-api.document360.io/fiche-salarie-emploi"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Fiche Salarié - Emploi

Cette fiche permet de lister les noms des champs relatifs aux emplois de la fiche salarié ainsi que les informations associées. De nombreux champs de cet écran sont affichés de manière conditionnelle, les captures montrent des cas particuliers faisant apparaître ces champs. Ils ne sont pas présents/à renseigner dans tous les cas de figure.

## Emploi - Informations générales

![Fiche_Emploi_1](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_1.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_EmploiNonPrincipal | boolean | Indique si l'emploi est l'emploi principal (**false** - case cochée) ou non (**true** - case décochée). Disponible uniquement si le salarié a plusieurs emplois |
| SEM_HorsESFrequentes | boolean |  |
| SEM_S41_G01_00_012_001 | string[2] | [Code contrat de travail](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#code-contrat-de-travail) |
| SEM_CDDMotif | string[2] | [Motif du CDD](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#motif-du-cdd) |
| SEM_MotifCDDRemplacement | string[60] | Motif du remplacement. Disponible uniquement si SEM_CDDMotif vaut 02 - CDD pour remplacement d'un salarié absent |
| SEM_CDDPaiMensIndPrecarite | boolean |  |
| SEM_CDDDureeInitiale | int | Correspond au champ de date de fin prévisionnelle du contrat. L'information est stockée sous forme de durée en mois et jours. Ce champ correspond au nombre de mois |
| SEM_CDDDureeInitialeJours | int | Correspond au champ de date de fin prévisionnelle du contrat. L'information est stockée sous forme de durée en mois et jours. Ce champ correspond au nombre de jours |
| SEM_TypeContratParticulier | byte | [Type de contrat](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#type-de-contrat) |
| SEM_TypeContratParticulierAutre | string[50] | Disponible si le type de contrat (SEM_TypeContratParticulier) vaut 250 - Autre |
| SEM_EmpCasPart | string[20] | [Emploi cas particulier](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#emploi-cas-particulier) |

![Fiche_Emploi_1.1](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_1.1.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_MajorationBacPro | boolean | Booléen utile uniquement si le type de contrat particulier (SEM_TypeContratParticulier) vaut **Professionnalisation** |

![Fiche_Emploi_2](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_2.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D) Les champs suivant sont utiles uniquement si le type de contrat particulier est **CEE - Contrat d'Engagement Educatif**

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_ContratPartPrecision | boolean | Correspond au champ **Fonction** : \| Fonction \| Valeur correspondante \| \| --- \| --- \| \| Animateur au pair \| 0 \| \| Animateur rémunéré ou assistant sanitaire \| 10 \| \| Directeur adjoint ou économe \| 20 \| \| Directeur \| 30 \| |
| Fonction | Valeur correspondante |
| Animateur au pair | 0 |
| Animateur rémunéré ou assistant sanitaire | 10 |
| Directeur adjoint ou économe | 20 |
| Directeur | 30 |
| SEM_ContratPartSalaireJ | double | Montant du salaire journalier (7 entiers et 4 décimales) |
| SEM_ContratPartSalaireJEstNet | boolean |  |
| SEM_ContratPartBFSaisie | boolean | Indique si la base forfaitaire est calculée d'après une saisie et non d'après les dates |

![Fiche_Emploi_3](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_3.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_DtDebContrat | DateTime | Date de début de contrat |
| SEM_ContratPartDtSignature | DateTime | Date de signature du contrat |
| SEM_DtDeb | DateTime | Date de début d'emploi |
| SEM_DtDebEA | DateTime | Correspond à la case à cocher **Pas de bulletin le premier mois**. L'équivalent de cette case cochée est **SEM_DtDebEA** qui vaut le 1er du mois suivant la date de début d'emploi (SEM_DtDeb) |
| SEM_DtDebContrat | DateTime | Date de début du contrat |
| SEM_S41_G01_00_002_001 | string[3] | [Motif du début d'emploi](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#motif-du-d%C3%A9but-demploi) |
| SEM_DtFinPeriodeProbatoire | DateTime | Date de fin de période probatoire |
| SEM_DtFin | DateTime | Date de fin d'emploi. Il n'y a pas de champ pour la durée en mois. Il ne s'agit que d'une aide à la saisie dans l'interface Silae |
| SEM_DtFinPreavis | DateTime | Date de fin de préavis |
| SEM_S41_G01_00_004_001 | string[3] | [Motif du fin d'emploi](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#motif-de-fin-demploi) |
| SEM_MotifRuptureContrat | string[3] | [Motif de la rupture](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#motif-de-la-rupture) |
| SEM_DocsFinContratInactifs | boolean | Correspond au champ **Ne pas éditer les documents de fin de contrat** |
| SEM_ClauseNonConcurrence | boolean | Correspond au champ **Contrat avec une clause de non concurrence** |
| SEM_FinContratMaintenirAffPrev | boolean | Correspond au champ **Maintenir l'affiliation au contrat de prévoyance** |
| SEM_ClauseNonConcurrenceLevee | boolean | Correspond au champ **Clause de non concurrence levée** |
| SEM_MotifCDDExclusions | boolean | Correspond au champ **Ne pas appliquer le circuit dérogatoire de fin de CDDU** |

## Définition de l'emploi

![Fiche_Emploi_4](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_4(1).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_CodeCCN | string[10] | Code convention collective (B065 dans l'exemple). Attention doit correspondre à une des conventions collectives renseignées au niveau de la société |
| SEM_CLM_Code | string[20] | Code classification métier |
| SEM_DtDebAncGrade | DateTime | Date de début d'ancienneté dans le grade |
| SEM_CodeCCT | string[4] | Code territoire (valable uniquement pour la CCN : M110 - Métallurgie) |
| SEM_S41_G01_00_010 | string[120] | Nature de l'emploi. Champ libre |
| SEM_S41_G01_00_013 | string[2] | Code caractéristique de l'activité. \| Code caractéristique de l'activité \| Valeur correspondante \| \| --- \| --- \| \| Intermittent \| 04 \| \| A domicile \| 05 \| \| Saisonnier \| 06 \| \| Vacataire \| 07 \| \| Occasionnel \| 08 \| \| Temps non complet (réservé secteur public) \| 09 \| \| Forfait jour \| 10 \| \| Salarié non concerné \| 90 \| Si le code caractéristique est égal à 10, la case "Salarié au forfait jour" se coche automatiquement, et le champ **SEM_TypeSalaireDeBase** doit être renseigné à 0 (zéro - mensuel) |
| Code caractéristique de l'activité | Valeur correspondante |
| Intermittent | 04 |
| A domicile | 05 |
| Saisonnier | 06 |
| Vacataire | 07 |
| Occasionnel | 08 |
| Temps non complet (réservé secteur public) | 09 |
| Forfait jour | 10 |
| Salarié non concerné | 90 |
| SEM_S41_G01_00_014 | string[2] | Code statut professionnel |
| SEM_S41_G01_00_015_001 | string[2] | Code statut catégoriel Convention Collective |
| SEM_S41_G01_00_015_002 | string[2] | Code statut catégoriel AGIRC-ARRCO |
| SEM_S41_G01_00_015_002_FORCE | string[2] | Code statut régime protection sociale |
| SEM_S41_G01_01_001 | string[10] | Autres régimes de retraite |

Les 4 champs suivants évoluent en fonction de la convention collective et la classification métier. Dans l'exemple ci-dessus, seuls 2 des champs sont présents à l'écran.

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_Coeff1 | string[15] | Correspond au champ **Position** dans l'exemple |
| SEM_Coeff2 | string[15] | Correspond au champ **Coefficient** dans l'exemple |
| SEM_Coeff3 | string[15] | Ce champ n'est pas présent pour la classification métier de l'exemple |
| SEM_Coeff4 | string[15] | Ce champ n'est pas présent pour la classification métier de l'exemple |

Selon le code statut professionnel sélectionné, des champs supplémentaires peuvent apparaître : ![Fiche_Emploi_5](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_5.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_OptionTauxReduitsSS | boolean | Option pour les taux réduits de Sécurité Sociale |
| SEM_OptionBasesNonAbatRetComp | boolean | Option pour les bases non abattues de retraite complémentaire |
| SEM_OptionBasesNonAbatPrev | boolean | Option pour les bases non abattues de prévoyance |

![Fiche_Emploi_6](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_6.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_S41_G01_00_011_001 | string[4] | Code PCS-ESE |
| SEM_ComplementPcsEse | string[6] | [Complément PCS-ESE](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#compl%C3%A9ment-pcsese) |
| SEM_CodeCPNDUC | string[3] | [Code CPN](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#code-cpn) |
| SEM_S40_G28_05_029_005 | string[2] | [Code Catégorie de salarié](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#code-cat%C3%A9gorie-de-salari%C3%A9) |
| SEM_S56_G01_00_021 | string[4] | [Code Emploi Bâtiment](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#code-emploi-b%C3%A2timent) |

## Accord d'entreprise

![Fiche_Emploi_7](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_7.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_CodeACE | string[10] | Code de l'accord d'entreprise. |
| SEM_CodeCME | string[20] | Code classification métier dans l'accord. |

## Rémunération

![Fiche_Emploi_8](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_8.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_SalaireDeBase | string[128] |  |
| SEM_TypeSalaireDeBase | byte | [Type de salaire](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#type-de-salaire) |
| SEM_SalaireNetGaranti | double | 7 entiers et 2 décimales |
| SEM_MentionSalaireDeBase | string[55] | Libellé de la ligne salaire de base |
| SEM_MasquerNombreHeures | boolean |  |
| SEM_MasquerTauxHoraire | boolean |  |
| SEM_BulCom1 | string[55] | Commentaire sur les bulletins (ligne 1) |
| SEM_BulCom2 | string[55] | Commentaire sur les bulletins (ligne 2) |
| SEM_BulCom3 | string[55] | Commentaire sur les bulletins (ligne 3) |
| SEM_BulletinsMoisBits | int | Périodicité mensuelle des bulletins. Ce champ représente binairement les mois où les bulletins doivent être édités. La valeur **0** correspond à une périodicité mensuelle (équivalent à la case **Périodicité mensuelle des bulletins** cochée. Sinon, les valeurs possibles sont issues des sommes des puissances de 2 : 2^0 = janvier 2^1 = février 2^2 = mars ... 2^11 = décembre Par exemple, la valeur pour une édition des bulletins sur janiver, février et mars donne 2^0 + 2^1 + 2^2 = 1+2+4 = 7 |

## Horaires

![Fiche_Emploi_9](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_9.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_GestionModulationHeures | boolean | Edition des heures réellement effectuées |
| SEM_NonSoumisHEta | boolean | Indique si le salarié est soumis aux horaires par défaut de l'établissement : - **false** : l'option est cochée - **true** : l'option est décochée |
| SEM_CotisRetraiteTpsPlein | boolean | Cotisations retraite à temps plein. Ce champ est disponible sous conditions (pas affiché dans l'exemple) |
| SEM_SaisieManuelleHeuresAbsences | boolean | Saisie manuelle des heures d'absences |
| SEM_HTLun | int | Heures travaillées |
| SEM_HTMar | int | Heures travaillées |
| SEM_HTMer | int | Heures travaillées |
| SEM_HTJeu | int | Heures travaillées |
| SEM_HTVen | int | Heures travaillées |
| SEM_HTSam | int | Heures travaillées |
| SEM_HTDim | int | Heures travaillées |
| SEM_TotHT | int | Heures travaillées total |
| SEM_HTNLun | int | Heures travaillées de nuit |
| SEM_HTNMar | int | Heures travaillées de nuit |
| SEM_HTNMer | int | Heures travaillées de nuit |
| SEM_HTNJeu | int | Heures travaillées de nuit |
| SEM_HTNVen | int | Heures travaillées de nuit |
| SEM_HTNSam | int | Heures travaillées de nuit |
| SEM_HTNDim | int | Heures travaillées de nuit |
| SEM_TotHTN | int | Heures travaillées de nuit total |
| SEM_HNLun | int | Heures normales |
| SEM_HNMar | int | Heures normales |
| SEM_HNMer | int | Heures normales |
| SEM_HNJeu | int | Heures normales |
| SEM_HNVen | int | Heures normales |
| SEM_HNSam | int | Heures normales |
| SEM_HNDim | int | Heures normales |
| SEM_TotHN | int | Heures normales total |
| SEM_HMLun | int | Heures majorées |
| SEM_HMMar | int | Heures majorées |
| SEM_HMMer | int | Heures majorées |
| SEM_HMJeu | int | Heures majorées |
| SEM_HMVen | int | Heures majorées |
| SEM_HMSam | int | Heures majorées |
| SEM_HMDim | int | Heures majorées |
| SEM_TotHM | int | Heures majorées total |
| SEM_HL1Lun | int | Heures libres 1 |
| SEM_HL1Mar | int | Heures libres 1 |
| SEM_HL1Mer | int | Heures libres 1 |
| SEM_HL1Jeu | int | Heures libres 1 |
| SEM_HL1Ven | int | Heures libres 1 |
| SEM_HL1Sam | int | Heures libres 1 |
| SEM_HL1Dim | int | Heures libres 1 |
| SEM_TotHL1 | int | Heures libres 1 total |
| SEM_HL2Lun | int | Heures libres 2 |
| SEM_HL2Mar | int | Heures libres 2 |
| SEM_HL2Mer | int | Heures libres 2 |
| SEM_HL2Jeu | int | Heures libres 2 |
| SEM_HL2Ven | int | Heures libres 2 |
| SEM_HL2Sam | int | Heures libres 2 |
| SEM_HL2Dim | int | Heures libres 2 |
| SEM_TotHL2 | int | Heures libres 2 total |
| SEM_HL3Lun | int | Heures libres 3 |
| SEM_HL3Mar | int | Heures libres 3 |
| SEM_HL3Mer | int | Heures libres 3 |
| SEM_HL3Jeu | int | Heures libres 3 |
| SEM_HL3Ven | int | Heures libres 3 |
| SEM_HL3Sam | int | Heures libres 3 |
| SEM_HL3Dim | int | Heures libres 3 |
| SEM_TotHL3 | int | Heures libres 3 total |
| SEM_TotHLun | int | Total heures |
| SEM_TotHMar | int | Total heures |
| SEM_TotHMer | int | Total heures |
| SEM_TotHJeu | int | Total heures |
| SEM_TotHVen | int | Total heures |
| SEM_TotHSam | int | Total heures |
| SEM_TotHDim | int | Total heures |
| SEM_TotH | int | Total heures total |
| SEM_HoraireMensuel | double | Heures normales mensuelles |
| SEM_HoraireMensuelHeuresMajorees | double | Heures majorées mensuelles |
| SEM_PctHeuresMajorees | double | Pourcentage des heures majorées |
| SEM_HLibreHoraireMensuel1 | int | Heures libre 1 mensuelles |
| SEM_HLibreHoraireMensuel2 | int | Heures libre 2 mensuelles |
| SEM_HLibreHoraireMensuel3 | int | Heures libre 3 mensuelles |
| SEM_HLibreCV1 | int | CV Heures libres 1 mensuelles |
| SEM_HLibreCV2 | int | CV Heures libres 2 mensuelles |
| SEM_HLibreCV3 | int | CV Heures libres 3 mensuelles |
| SEM_HLibreCT1 | int | CT Heures libres 1 mensuelles |
| SEM_HLibreCT2 | int | CT Heures libres 2 mensuelles |
| SEM_HLibreCT3 | int | CT Heures libres 3 mensuelles |
| SEM_MNH | int | Total heures normales hebdomadaires |
| SEM_MMH | int | Total heures majorées hebdomadaires |
| SEM_ML1H | int | Total heures libres 1 hebdomadaires |
| SEM_ML2H | int | Total heures libres 2 hebdomadaires |
| SEM_ML3H | int | Total heures libres 3 hebdomadaires |
| SEM_TotalHeures | int | Total heures mensuelles |
| SEM_MTH | int | Total des heures hebdomadaires |

Si le salarié est au forfait jour, le bloc ci-dessous apparaît : ![Fiche_Emploi_10](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_10.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_FJNbJAn | double | 3 entiers, 2 décimales |
| SEM_FJNbJAnContientJS | boolean |  |
| SEM_HTLun | double | Vaut 8.0 si c'est un jour travaillé (case correspondante cochée, 0.0 si ce n'est pas le cas) |
| SEM_HTMar | double | Vaut 8.0 si c'est un jour travaillé (case correspondante cochée, 0.0 si ce n'est pas le cas) |
| SEM_HTMer | double | Vaut 8.0 si c'est un jour travaillé (case correspondante cochée, 0.0 si ce n'est pas le cas) |
| SEM_HTJeu | double | Vaut 8.0 si c'est un jour travaillé (case correspondante cochée, 0.0 si ce n'est pas le cas) |
| SEM_HTVen | double | Vaut 8.0 si c'est un jour travaillé (case correspondante cochée, 0.0 si ce n'est pas le cas) |
| SEM_HTSam | double | Vaut 8.0 si c'est un jour travaillé (case correspondante cochée, 0.0 si ce n'est pas le cas) |
| SEM_HTDim | double | Vaut 8.0 si c'est un jour travaillé (case correspondante cochée, 0.0 si ce n'est pas le cas) |
| SEM_CotisRetraiteTpsPlein | boolean |  |

### Activité Journalière

![Fiche_Emploi_11](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_11.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_SaisieActiviteJournaliere | boolean | Indique s'il faut tenir compte (**true**) ou non (**false**) de la configuration de l'activité journalière |
| SEM_GestionAJSpecifique | boolean | Indique si le paramétrage de l'activité journalière est différent de celui de l'établissement (**true**) ou non (**false**) |
| SEM_ModeSaisieActiviteJournaliere | byte | Permet de définir le mode de saisie de l'activité journalière: \| Mode de saisie \| Valeur correspondante \| \| --- \| --- \| \| Normal (Classique) \| 0 \| \| Plages horaires (Avancé) \| 1 \| |
| Mode de saisie | Valeur correspondante |
| Normal (Classique) | 0 |
| Plages horaires (Avancé) | 1 |
| SEM_DecoupageActiviteJournaliere | byte | Permet d'indiquer si le calcul des heures supplémentaires se fait par semaine ou par mois : [Découpage activité journalière](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#d%C3%A9coupage-activit%C3%A9-journali%C3%A8re) |
| SEM_DecalageActiviteJournaliere | int | Permet de définir le décalage de l'activité journalière : Lorsque SEM_DecoupageActiviteJournaliere vaut “Mois”, le décalage en semaine est interdit et les valeurs possibles sont : 0 pour pas de décalage, 100 pour décalage d'un mois. Lorsque SEM_DecoupageActiviteJournaliere vaut “Semaine”, les valeurs possibles sont : 0 pas de décalage, 1, 2, 3, 4 pour le nombre de semaines. |
| Le décalage peut être aussi d'un mois complet, dans ce cas, renseigner la valeur 100. |  |  |
| SEM_JourDebSemActiviteJournaliere | byte | [Jour de la semaine](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#jour-de-la-semaine) |
| SEM_JourneeSolidarite | string[5] | [Journée de solidarité](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#journ%C3%A9e-de-solidarit%C3%A9) |

### Absences

![Fiche_Emploi_12](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_12.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_MethodeSuiviAbsencesSpecifique | boolean | Indique si les absences sont gérées de manière spécifique (**true**) ou non (**false**) |
| SEM_MethodeSuiviAbsencesJC | byte | [Traitement des absences](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#traitement-des-absences) |
| SEM_MethodeSuiviAbsences | byte | [Méthode de suivi des absences](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#m%C3%A9thode-de-suivi-des-absences) |
| SEM_SousMethodeSuiviAbsences | byte | [Sous-méthode de suivi des absences](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#sousm%C3%A9thode-de-suivi-des-absences) |
| SEM_SousMethodeSuiviAbsenceFJ | byte | Type byte qui est ensuite transformé en booléen. Il prend donc les valeur **0** (pour faux) et **1** (pour vrai) |
| SEM_MethodeSuiviAbsencesDeductionHM | byte | [Déduction des heures majorées](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#d%C3%A9duction-des-heures-major%C3%A9es) |
| SEM_ChaineFabricationDateLimiteAbsence | string[6] | Le détail des valeurs à saisir est disponible dans [l'article correspondant](https://silae.document360.io/docs/decaler-ou-limiter-le-traitement-des-absences) de la base de connaissance Silae |
| SEM_MethodeCalculMaintien | byte | [Méthode de calcul du maintien](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#m%C3%A9thode-de-calcul-du-maintien) |
| SEM_MethodeCalculMaintienNbM | int | Nombre de mois |

### Congés payés

![Fiche_Emploi_13](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_13.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_CPAcqMois | double | Nombre de CP acquis par mois si spécifique (2 entiers, 4 décimales) |
| SEM_MoisClotureCP | int | numéro du mois, de 1 à 12, 0 correspond à "non-renseigné" |
| SEM_GererCompteursCPSurCCP | boolean | Indique s'il faut tenir les compteurs de congés payés (**true**) ou pas (**false**). Disponible uniquement si la société est affiliée à une caisse de congés payés |
| SEM_AffilieCCPInactif | boolean | Indique s'il faut exclure de la caisse de congés payés (**true**) ou pas (**false**). Disponible uniquement si la société est affiliée à une caisse de congés payés |
| SEM_GestionCPInactif | boolean | Indique s'il faut exclure de la gestion de congés payés (**true**) ou pas (**false**) |
| SEM_PaiementMensCP | boolean | Indique si le paiement automatique des congés payés tous les mois est activé (**true**) ou pas (**false**) |
| SEM_DeductionCPInactive | boolean | Indique s'il faut déduire les absences congés payés (**false**) ou pas (**true**) |
| SEM_ModeCalculBaseCPSurCCP | unsignedByte | [Mode de calcul des bases de retraite complémentaire & prévoyance](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#m%C3%A9thode-de-calcul-des-bases-de-retraite-compl%C3%A9mentaire-et-pr%C3%A9voyance) |
| SEM_GestionCPSpecifique | boolean | Indique si les congés payés sont gérés par des méthodes spécifiques (**true**) ou pas (**false**) |
| SEM_MethodeRetenueCP | byte | [Méthode de retenue](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#m%C3%A9thode-de-retenue) |
| SEM_GestionCPExclEnJours | boolean |  |
| SEM_MethodeArbitrage | byte | [Méthode d'arbitrage](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#m%C3%A9thode-darbitrage) |

### RTT

![Fiche_Emploi_14](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_14.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_RTTTypeAcq | byte | [Type d'acquisition des RTT](https://silae-api.document360.io/docs/fiche-salarie#type-dacquisition-des-rtt) |
| SEM_RTTAcq01 | double | Nombre de RTT sur le mois de janvier (1 entier, 2 décimales) |
| SEM_RTTAcq02 | double | Nombre de RTT sur le mois de février (1 entier, 2 décimales) |
| SEM_RTTAcq03 | double | Nombre de RTT sur le mois de mars (1 entier, 2 décimales) |
| SEM_RTTAcq04 | double | Nombre de RTT sur le mois de avril (1 entier, 2 décimales) |
| SEM_RTTAcq05 | double | Nombre de RTT sur le mois de mai (1 entier, 2 décimales) |
| SEM_RTTAcq06 | double | Nombre de RTT sur le mois de juin (1 entier, 2 décimales) |
| SEM_RTTAcq07 | double | Nombre de RTT sur le mois de juillet (1 entier, 2 décimales) |
| SEM_RTTAcq08 | double | Nombre de RTT sur le mois de août (1 entier, 2 décimales) |
| SEM_RTTAcq09 | double | Nombre de RTT sur le mois de septembre (1 entier, 2 décimales) |
| SEM_RTTAcq10 | double | Nombre de RTT sur le mois de octobre (1 entier, 2 décimales) |
| SEM_RTTAcq11 | double | Nombre de RTT sur le mois de novembre (1 entier, 2 décimales) |
| SEM_RTTAcq12 | double | Nombre de RTT sur le mois de décembre (1 entier, 2 décimales) |
| SEM_RTTAcqAn | double | Nombre de RTT annuel (2 entiers, 2 décimales) |

### Avance sur frais

![Fiche_Emploi_15](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_15.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_MontantAvanceFraisARecuperer | double | 7 entiers, 2 décimales |

### Avantages en nature

![Fiche_Emploi_16](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_16.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_AvnVLibelle | string[30] | Libellé de l'avantage : Voiture |
| SEM_AvnVMontant | double | Montant de l'avantage (7 entiers, 2 décimales) : Voiture |
| SEM_AvnLLibelle | string[30] | Libellé de l'avantage : Logement |
| SEM_AvnLMontant | double | Montant de l'avantage (7 entiers, 2 décimales) : Logement |
| SEM_AvnILibelle | string[30] | Libellé de l'avantage : NTIC |
| SEM_AvnIMontant | double | Montant de l'avantage (7 entiers, 2 décimales) : NTIC |
| SEM_AvnNLibelle | string[30] | Libellé de l'avantage : Nourriture |
| SEM_AvnNMontant | double | Montant de l'avantage (7 entiers, 2 décimales) : Nourriture |
| SEM_AvnALibelle | string[30] | Libellé de l'avantage : Autre |
| SEM_AvnAMontant | double | Montant de l'avantage (7 entiers, 2 décimales) : Autre |
| SEM_AvnL2Libelle | string[30] | Libellé pour le calcul automatique des avantages en nature de type logmeent |
| SEM_AvnL2NbPieces | int | Nombre de pièces (Partie entière) |
| SEM_AvnL2NbPiecesDec | int | Nombre de pièces (Partie décimale) |
| SEM_AvnL2Occ2Conj | boolean | Indique si le logement est occupé par deux conjoints travaillant dans la même entreprise |
| SEM_AvnLMontantSal | double | Montant de la participation mensuelle du salarié (4 entiers, 2 décimales) |
| SEM_AvnLMontantSalNonPreleveSurBul | boolean | Indique si le montant de la participation mensuelle du salarié est prélevée sur le bulletin (**false**) ou non (**true**) |
| SEM_AvnLParNecessite | boolean | Application de l’abattement pour sujétions |

### Indemnités kilométriques

![Fiche_Emploi_17](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_17.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_IKActives | boolean | Permet d'activer le calcul des indemnités kilométriques |
| SEM_IKMethodeCalcul | byte | [Méthode de calcul](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#m%C3%A9thode-de-calcul) |
| SEM_IKTypeVehicule | byte | [Type de véhicule](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#type-de-v%C3%A9hicule) |
| SEM_IKTrancheKm | byte | [Tranche](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#tranche-ik) |
| SEM_IKPrixKm | double | Prix du kilomètre (2 entiers, 4 décimales) |
| SEM_IKVehiculeElectrique | boolean | Véhicule électrique |
| SEM_IKRegul12 | boolean | Régularisation automatique |

### Prélèvements fixes sur salaire

![Fiche_Emploi_18](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_18.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_PrelFixe1Libelle | string[45] | Libellé - ligne 1 |
| SEM_PrelFixe1DtDeb | string[45] | Période début - ligne 1 |
| SEM_PrelFixe1DtFin | string[45] | Période fin -ligne 1 |
| SEM_PrelFixe1Montant | double | Montant (7 entiers, 2 décimales) - ligne 1 |
| SEM_PrelFixe2Libelle | string[45] | Libellé - ligne 2 |
| SEM_PrelFixe2DtDeb | string[45] | Période début - ligne 2 |
| SEM_PrelFixe2DtFin | string[45] | Période fin -ligne 2 |
| SEM_PrelFixe2Montant | double | Montant (7 entiers, 2 décimales) - ligne 2 |
| SEM_PrelFixe3Libelle | string[45] | Libellé - ligne 3 |
| SEM_PrelFixe3DtDeb | string[45] | Période début - ligne 3 |
| SEM_PrelFixe3DtFin | string[45] | Période fin -ligne 3 |
| SEM_PrelFixe3Montant | double | Montant (7 entiers, 2 décimales) - ligne 3 |

### Tickets Restaurant

![Fiche_Emploi_19](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_19.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_TResto | byte | [Tickets restaurant](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#tickets-restaurant) |

### Titres de transport

![Fiche_Emploi_20](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_20.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_TitreTrsCode | string[20] | [Titre de transport](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#titre-de-transport) |
| SEM_TitreTrsPctRemb | double | Pourcentage de remboursement (4 entiers, 2 décimales) |
| SEM_TitresTrsMontant | double | Montant des autres titres de transport (4 entiers, 2 décimales) |
| SEM_TitresTrsMontantPctRemb | double | Pourcentage de remboursement des autres titres de transport (4 entiers, 2 décimales) |

## Paramètres de paie

### Paramètres généraux

![Fiche_Emploi_21](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_21.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_PlansPrimes | string[128] |  |
| SEM_PlansPrimesUtilisateur | string[128] |  |
| SEM_PlansPrimesFinal | string[128] |  |
| SEM_PlansCotisations | string[128] |  |
| SEM_ConfObliHeures | boolean |  |
| SEM_CalcAutoESInactif | boolean |  |
| SEM_S41_G01_00_025 | string[2] | Code section accident du travail, doit être défini dans la fiche société |
| SEM_PctProratPlafonds | double | 3 entiers, 2 décimales |
| SEM_PctProratFraisSante | double | 3 entiers, 2 décimales |
| SEM_CodeSecteurDFS | string | Code secteur d'activité ouvrant droit au bénéfice de la DFS ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28148%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D) |
| SEM_PctAbat | double | 3 entiers, 2 décimales ***Ne pas renseigner si le champ précédent Code secteur activité est valorisé*** |
| SEM_PctAbatLissage | boolean | Lissage annuel |
| SEM_S41_G01_00_018_001 | string[3] | [Code régime de base obligatoire](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#code-r%C3%A9gime-de-base-obligatoire) |
| SEM_S41_G01_00_018_003 | string[3] | [Code régime obligatoire risque AT](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#code-r%C3%A9gime-obligatoire-risque-at) |
| SEM_S41_G01_00_018_004 | string[3] | [Code régime obligatoire risque vieillesse](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#code-r%C3%A9gime-obligatoire-risque-vieillesse) |
| SEM_S41_G01_00_018_006 | string[2] | Indique s'il faut appliquer le régime local Alsace-Moselle (**01**) ou non (**vide**) |
| SEM_SoumisCotisChomage | boolean |  |
| SEM_NonSoumisTEPA | boolean | Exclure de la déduction forfaitaire patronale sur heures supplémentaires |
| SEM_GestionAppoint | boolean |  |
| SEM_AlMosCommisCom | boolean | Disponible uniquement si **SEM_S41_G01_00_018_006** vaut **01** |

### Plafond Sécurité Sociale

![Fiche_Emploi_22](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_22.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_GestionPSS | byte | [Plafond de la sécurité sociale](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#plafond-de-la-s%C3%A9curit%C3%A9-sociale) |
| SEM_CalculSpecifiquePSS | boolean |  |
| SEM_CalculSpecifiquePSSPct | double | 3 entiers, 2 décimales |

### Versement mobilité

![Fiche_Emploi_23](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_23.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_TaxeTrsInactif | boolean | Indique s'il faut exclure le salarié de la taxe versement transport (**true**) ou pas (**false**) |
| SEM_TaxeTrsCodeRegion | string[5] | Code région - Standard ([Liste en Annexes](https://silae-api.document360.io/api-rest/docs/codes-r%C3%A9gion-standard-taxe-versement-transport)) |
| SEM_CodeRegionTX | double | Taux standard - Standard (3 entiers, 2 décimales) |
| SEM_TaxeTrsTaux | double | Taux spécifique - Standard (3 entiers, 2 décimales) |
| SEM_TaxeTrsCommuneINSEE | string[5] | Code INSEE de la commune du lieu de travail |
| SEM_TaxeTrsCommune | string[5] | Nom de la commune du lieu de travail |
| SEM_VTACodeRegion | string[5] | Code région - Additionnelle ([Liste en Annexes](https://silae-api.document360.io/api-rest/docs/codes-r%C3%A9gion-additionnelle-taxe-versement-transport)) |
| SEM_VTACodeRegionTX | double | Taux standard - Additionnelle (3 entiers, 2 décimales) |
| SEM_VTATaux | double | Taux spécifique - Additionnelle (3 entiers, 2 décimales) |
| SEM_TaxeVMRRInactif | boolean | Indique s'il faut exclure le salarié de la VMRR (**true**) ou pas (**false**) |
| SEM_TaxeVMRRCodeRegion | string[5] | Code région VMRR ([Liste en Annexes](https://silae-api.document360.io/api-rest/docs/codes-r%C3%A9gional-et-rural-taxe-vers-transport)) |
| SEM_TaxeVMRRTaux | double | Taux spécifique - Additionnelle VMRR (3 entiers, 2 décimales) |

### Taxe sur les salaires

![Fiche_Emploi_24](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_24.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_SoumisTaxeSalairesInactif | boolean | Exclure de la taxe sur les salaires (lié au paramétrage de l'établissement) |
| SEM_SoumisTaxeSalairesPctImp | double | 3 entiers, 2 décimales |

### Nature de l'activité

![Fiche_Emploi_25](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_25.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_ArtisanInscritRepMetier | boolean |  |

### CICE

![Fiche_Emploi_26](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_26.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_CICEAppli | byte | [CICE](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#cice) |
| SEM_CICEPct | double | 3 entiers, 2 décimales |

### Chèque Santé

![Fiche_Emploi_27](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_27.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_BeneficiaireChequeSante | boolean |  |

## Informations sur contrat particulier

Le bloc suivant apparaît lorsque le contrat sélectionné fait partie des contrats d'apprentissage suivants :

- 04 : Contrat d'apprentissage entreprises artisanales ou de 10 salariés au plus (loi de 1979)
- 05 : Contrat d'apprentissage entreprises non artisanales de plus de 10 salariés (loi de 1987)

![Fiche_Emploi_28](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_28.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_ContratPartDtSignature | DateTime |  |
| SEM_ContratPartDtDebExo | DateTime |  |
| SEM_EtudePeriode1 | DateTime |  |
| SEM_EtudePeriode2 | DateTime |  |
| SEM_EtudePeriode3 | DateTime |  |
| SEM_EtudePeriode4 | DateTime |  |
| SEM_EtudePeriode5 | DateTime |  |
| SEM_EtudePeriode6 | DateTime |  |
| SEM_EtudePeriode7 | DateTime |  |
| SEM_EtudePeriode8 | DateTime |  |
| SEM_EtudePeriode9 | DateTime |  |
| SEM_EtudePeriode10 | DateTime |  |
| SEM_ApprentiMajoration15 | boolean | Lié aux booléen suivants. La valeur **false** indique qu'il est possible de choisir la valeur pour chacun des booléens suivants. La valeur **true** implique que tous les booléens suivants doivent être à **true** |
| SEM_ApprentiMajoration1501 | boolean |  |
| SEM_ApprentiMajoration1502 | boolean |  |
| SEM_ApprentiMajoration1503 | boolean |  |
| SEM_ApprentiMajoration1504 | boolean |  |
| SEM_ApprentiMajoration1505 | boolean |  |
| SEM_ApprentiMajoration1506 | boolean |  |
| SEM_ApprentiMajoration1507 | boolean |  |
| SEM_ApprentiMajoration1508 | boolean |  |
| SEM_ApprentiMajoration1509 | boolean |  |
| SEM_ApprentiMajoration1510 | boolean |  |
| SEM_ContratPartDtFinExo | DateTime |  |
| SEM_ApprentiPCentMini | double | 3 entiers, 2 décimales |
| SEM_DemandeAideApprentiFaite | boolean |  |

Le bloc suivant apparaît lorsque le contrat sélectionné fait partie des contrats d'accompagnement suivants :

- 25 : CUI-Contrat d’Accompagnement dans l’Emploi (CDD)
- 26 : CUI-Contrat d’Accompagnement dans l’Emploi (CDI)

![Fiche_Emploi_29](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_ContratPartDtDebExo | DateTime |  |
| SEM_ContratPartDtFinExo | DateTime |  |
| SEM_ContratPartCoeffExo | double | 3 entiers, 2 décimales |
| SEM_ContratPartDureeHebdo | double | 3 entiers, 2 décimales |
| SEM_ContratPartCollectiviteTerritoriale | boolean |  |

## Exonérations de cotisations

![Fiche_Emploi_30](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_Emploi_30.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A39%3A59Z&se=2026-11-13T20%3A39%3A59Z&sr=c&sp=r&sig=7aEJPz4Hr81wv%2BLA%2BPX%2BYexTkzF8JEK5zEfG3qFhYv0%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| SEM_CodeExo1 | string[2] | [Ligne 1] [Type d'exonération](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#type-dexon%C3%A9ration) |
| SEM_DtDebExo1 | DateTime | [Ligne 1] |
| SEM_DtFinExo1 | DateTime | [Ligne 1] |
| SEM_Exo39Taux1 | double | [Ligne 1] Le taux est à fournir lorsque **SEM_CodeExo1** vaut **39 - Entreprise innovante** |
| SEM_Exo17Precision1 | byte | [Ligne 1] Précision à founir en fonction du type d'exonération : Si **SEM_CodeExo1** vaut **17 - Créateur d'entreprise** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-cr%C3%A9ateur-dentreprise) Si **SEM_CodeExo1** vaut **19 - Embauche du 1er au 50ème salarié (zrr/zru)** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-embauche-1-%C3%A0-50) Si **SEM_CodeExo1** vaut **40 - Exonération de cotisations patronales de sécurité sociale applicable dans les dom** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-cotisation-patronales) |
| SEM_CodeExo2 | string[2] | [Ligne 2] [Type d'exonération](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#type-dexon%C3%A9ration) |
| SEM_DtDebExo2 | DateTime | [Ligne 2] |
| SEM_DtFinExo2 | DateTime | [Ligne 2] |
| SEM_Exo39Taux2 | double | [Ligne 2] Le taux est à fournir lorsque **SEM_CodeExo1** vaut **39 - Entreprise innovante** |
| SEM_Exo17Precision2 | byte | [Ligne 2] Précision à founir en fonction du type d'exonération : Si **SEM_CodeExo1** vaut **17 - Créateur d'entreprise** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-cr%C3%A9ateur-dentreprise) Si **SEM_CodeExo1** vaut **19 - Embauche du 1er au 50ème salarié (zrr/zru)** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-embauche-1-%C3%A0-50) Si **SEM_CodeExo1** vaut **40 - Exonération de cotisations patronales de sécurité sociale applicable dans les dom** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-cotisation-patronales) |
| SEM_CodeExo3 | string[2] | [Ligne 3] [Type d'exonération](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#type-dexon%C3%A9ration) |
| SEM_DtDebExo3 | DateTime | [Ligne 3] |
| SEM_DtFinExo3 | DateTime | [Ligne 3] |
| SEM_Exo39Taux3 | double | [Ligne 3] Le taux est à fournir lorsque **SEM_CodeExo1** vaut **39 - Entreprise innovante** |
| SEM_Exo17Precision3 | byte | [Ligne 3] Précision à founir en fonction du type d'exonération : Si **SEM_CodeExo1** vaut **17 - Créateur d'entreprise** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-cr%C3%A9ateur-dentreprise) Si **SEM_CodeExo1** vaut **19 - Embauche du 1er au 50ème salarié (zrr/zru)** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-embauche-1-%C3%A0-50) Si **SEM_CodeExo1** vaut **40 - Exonération de cotisations patronales de sécurité sociale applicable dans les dom** : [Précision](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#pr%C3%A9cision-type-dexon%C3%A9ration-cotisation-patronales) |

## Questionnaire conventionnel

La gestion du questionnaire conventionnel se fait via les API dédiées aux questionnaires conventionnels.

- [LectureReponsesQuestionnaireConventionnelSalarie](https://silae-api.document360.io/api-rest/docs/lecturereponsesquestionnaireconventionnelsalarie)
- [LectureReponsesQuestionnaireConventionnelSalarie](https://silae-api.document360.io/api-rest/docs/ecriturereponsesquestionnaireconventionnelsalarie)
