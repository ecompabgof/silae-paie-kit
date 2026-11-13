---
title: "Fiche Personnel externe - Informations générales"
slug: "fiche-personnel-externe-informations-generales"
updated: 2025-08-12T06:01:05Z
published: 2025-08-12T06:01:05Z
canonical: "silae-api.document360.io/fiche-personnel-externe-informations-generales"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Fiche Personnel externe - Informations générales

Cette fiche permet de lister les noms des champs de la fiche personnel externe ainsi que les informations associées.

## Identification du personnel externe

![Fiche_PersonnelExterne_1](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_PersonnelExterne_1.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A03Z&se=2026-11-13T20%3A40%3A03Z&sr=c&sp=r&sig=%2FH1Rmi7yg%2BHNICavEWxzEcQFhst4PlJpcgYtJxRZxBI%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_Civilite | byte | [Civilité](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#civilit%C3%A9) |
| INT_NomNaissance | string[50] | Nom de naissance |
| INT_NomMarital | string[50] | Nom marital |
| INT_NomUsuel | string[50] | Nom usuel |
| INT_Prenom | string[40] | Prénom |
| INT_NumeroSS | string[15] | NIR complet (13 caractères et la clé) |

### Naissance

![Fiche_PersonnelExterne_2](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_PersonnelExterne_2.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A03Z&se=2026-11-13T20%3A40%3A03Z&sr=c&sp=r&sig=%2FH1Rmi7yg%2BHNICavEWxzEcQFhst4PlJpcgYtJxRZxBI%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_DateNaissance | DateTime | Date de naissance |
| INT_DepartementNaissance | string[2] | Département de naissance |
| INT_CommuneNaissance | string[32] | Commune de naissance |
| INT_PaysNaissanceISO | string[2] | Code ISO du pays de naissance |
| INT_PaysNaissance | string[38] | Nom du pays de naissance |

### Pays de nationalité

![Fiche_PersonnelExterne_3](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_PersonnelExterne_3.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A03Z&se=2026-11-13T20%3A40%3A03Z&sr=c&sp=r&sig=%2FH1Rmi7yg%2BHNICavEWxzEcQFhst4PlJpcgYtJxRZxBI%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_PaysNationaliteISO | string[2] | Code ISO du pays de nationalité |
| INT_PaysNationalite | string[38] | Nom du pays de nationalité |

## Coordonnées

![Fiche_PersonnelExterne_4](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_PersonnelExterne_4.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A03Z&se=2026-11-13T20%3A40%3A03Z&sr=c&sp=r&sig=%2FH1Rmi7yg%2BHNICavEWxzEcQFhst4PlJpcgYtJxRZxBI%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_NumVoie | string[4] | N° de voie |
| INT_BTQC | string[10] | Indicateur de répétition (BIS, TER, QUATER, QUINQUIES...) |
| INT_NomVoie | string[32] | Nom de la voie |
| INT_ComplementAdresse | string[38] | Complément d'adresse |
| INT_CodePostal | string[5] | Code postal |
| INT_NomVille | string[32] | Ville |
| INT_CommuneINSEE | string[5] | Code INSEE commune |
| INT_Commune | string[32] | Nom de la commune |
| INT_PaysISO | string[2] | Code ISO du pays |
| INT_NomPays | string[38] | Nom du pays |
| INT_TelDomicile | string[20] | N° Téléphone domicile |
| INT_TelPortable | string[20] | N° Téléphone mobile |
| INT_MelPerso | string[60] | Adresse mail personnelle |
| INT_MelPro | string[60] | Adresse mail professionnelle |

## Informations supplémentaires

### Tenue

![Fiche_PersonnelExterne_5](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_PersonnelExterne_5.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A03Z&se=2026-11-13T20%3A40%3A03Z&sr=c&sp=r&sig=%2FH1Rmi7yg%2BHNICavEWxzEcQFhst4PlJpcgYtJxRZxBI%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_Pointure | string[10] | Taille Pointure |
| INT_TailleHaut | string[10] | Taille haut du corps |
| INT_TaillePantalon | string[10] | Taille bas du corps |
| INT_TourDeTete | string[10] | Taille tour de tête |
| INT_TourDeCou | string[10] | Taille tour de cou |

### Travailleur étranger - Titre séjour

![Fiche_PersonnelExterne_6](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_PersonnelExterne_6.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A03Z&se=2026-11-13T20%3A40%3A03Z&sr=c&sp=r&sig=%2FH1Rmi7yg%2BHNICavEWxzEcQFhst4PlJpcgYtJxRZxBI%3D)

| Nom du champ | Type | Informations complémentaires |
| --- | --- | --- |
| INT_TitreSejourType | byte | [Titre de séjour](https://silae-api.document360.io/api-rest/docs/fiche-salarie/#titre-de-s%C3%A9jour) |
| INT_TitreSejourNumOrdre | string[20] | N° titre de séjour |
| INT_TitreSejourDebut | DateTime | Date de début validité titre de séjour |
| INT_TitreSejourFin | DateTime | Date de fin validité titre de séjour |

### Travailleur handicapé

![Fiche_PersonnelExterne_7](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Fiche_PersonnelExterne_7.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A40%3A03Z&se=2026-11-13T20%3A40%3A03Z&sr=c&sp=r&sig=%2FH1Rmi7yg%2BHNICavEWxzEcQFhst4PlJpcgYtJxRZxBI%3D)

Les informations pour les travailleurs handicapés sont gérées par des fonctions spécifiques : [LectureHandicap](https://silae-api.document360.io/api-rest/docs/lecturehandicap) et [ModificationHandicap](https://silae-api.document360.io/api-rest/docs/modificationhandicap).
