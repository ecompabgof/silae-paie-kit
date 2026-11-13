---
title: "CreationSalarieEmploisAsynchrone"
slug: "creationsalarieemploisasynchrone"
updated: 2026-08-13T13:32:00Z
published: 2026-08-13T13:32:00Z
canonical: "silae-api.document360.io/creationsalarieemploisasynchrone"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CreationSalarieEmploisAsynchrone

## Fonction API

```
/v1/SalarieEmplois/CreationSalarieEmploisAsynchronesoumis
```

## Verbe HTTP

Post

## Description

Cette fonction est identique à [CreationSalarieEmplois](https://silae-api.document360.io/api-rest/docs/creationsalarieemplois), à la différence que le traitement est asynchrone. Cela signifie que cette fonction lance le traitement et génère un identifiant de la tâche utile pour interroger le statut et obtenir le résultat grâce à la fonction associée [StatutCreationSalarieEmploiAsynchrone](https://silae-api.document360.io/api-rest/docs/statutanalyseproductionpaieasynchrone)

---

**Points d'attention** *Il est conseillé d'exécuter au préalable la fonction **ListeSalarieEmplois** afin de connaître les identifiants emploi en cours*.

#### Principe du salarié modèle et de l'identifiant emploi modèle

Lorsque le paramètre ***MatriculeSalarieModele*** est renseigné, les informations de ce salarié vont être utilisées pour créer le nouveau salarié (ou modifier si le salarié existe déjà). Si le paramètre ***CopieIntegraleSalarieModele*** est à **false**, les informations personnelles ne seront pas récupérées. En revanche, tous les paramètres qui vont être définis dans cette requête vont être utilisées à la place des valeurs du salarié modèle pour créer/modifier le salarié.

Lorsque le paramètre ***identifiantEmploiModele*** est renseigné, les informations de cet emploi du salarié vont être utilisées pour créer un nouvel emploi sur ce même salarié.

---

**Points d'attention** Les paramètres ***MatriculeSalarieModele*** et ***identifiantEmploiModele*** ne peuvent être utilisés simultanément : - Soit un nouveau salarié est créé depuis un salarié modèle (MatriculeSalarieModele) - Soit un nouvel emploi est créé depuis un autre emploi du salarié choisi (identifiantEmploiModele)

## Groupe de fonctions API

MODIF01

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| salarieEmplois | SalarieEmplois | Élément structuré contenant les informations du salarié à créer ou modifier et de ses emplois |
| numeroDossier | string | Numéro du dossier concerné par la requête |

### SalarieEmplois

| Paramètre | Type | Description |
| --- | --- | --- |
| matriculeSalarie | string | Matricule du salarié. C'est la clé qui permet d'identifier un salarié. Il convient de s'assurer de l'unicité du matricule. En cas de création, il est possible de ne pas renseigner le matricule pour en générer un automatiquement (il est nécessaire que cette fonctionnalité soit activée au niveau de la fiche société). Obligatoire pour la modification |
| numeroSecuriteSociale | string | Numéro de sécurité sociale du salarié avec la clé (15 caractères obligatoires et la clé doit être correcte) |
| matriculeSalarieModele | string | Permet d'indiquer un matricule salarié qui servira de modèle pour le nouveau salarié à créer (ou à modifier s'il existe déjà). Toutes les informations du salarié modèle sont récupérées uniquement si le booléen (bXxxxXxxx) du paramètre correspondant dans la requête est à **false** ***Le paramètre identifiantEmploiModele ne doit pas être renseigné*** |
| numeroDossierSalarieModele | string | Numéro du dossier dans lequel rechercher le salarié modèle, s'il n'est pas dans le dossier cible |
| copieIntegraleSalarieModele | boolean | Permet de récupérer la totalité des informations du salarié modèle |
| calculerElementsNaissance | boolean | Si la valeur du paramètre est **true** et que le numéro de sécurité sociale est renseigné, Silae va en déduire automatiquement la civilité et le lieu/pays de naissance |
| calculerCommune | boolean | Si la valeur du paramètre est **true**, et que le code postal est renseigné, Silae va en déduire automatiquement le nom de la ville, les informations liées à la commune et les informations liées au pays |
| matriculeInterne | string | Matricule interne |
| bMatriculeInterne | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **MatriculeInterne** (**true**) ou pas (**false**) |
| nomNaissance | string | Nom de naissance (**valeur obligatoire**) |
| bNomNaissance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NomNaissance** (**true**) ou pas (**false**) |
| nomMarital | string | Nom marital |
| bNomMarital | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NomMarital** (**true**) ou pas (**false**) |
| nomUsuel | string | Nom Usuel ***S'il n'est pas renseigné, par défaut ce sera le nom marital et à défaut le nom de naissance*** |
| bNomUsuel | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NomUsuel** (**true**) ou pas (**false**) |
| prenom | string | Prénom |
| bPrenom | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Prenom** (**true**) ou pas (**false**) |
| civilite | integer(int32) | Civilité : \| Civilité \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Monsieur \| 1 \| \| Madame \| 2 \| \| Mademoiselle \| 3 \| |
| Civilité | Valeur correspondante |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |
| bCivilite | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Civilité** (**true**) ou pas (**false**) |
| situationFamiliale | integer(int32) | Situation familiale du salarié : \| Situation familiale \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Célibataire \| 10 \| \| Vie maritale \| 20 \| \| Pacsé(e) \| 30 \| \| Marié(e) \| 40 \| \| Séparé(e) \| 50 \| \| Divorcé(e) \| 60 \| \| Veuf(ve) \| 70 \| |
| Situation familiale | Valeur correspondante |
| Vide | 0 |
| Célibataire | 10 |
| Vie maritale | 20 |
| Pacsé(e) | 30 |
| Marié(e) | 40 |
| Séparé(e) | 50 |
| Divorcé(e) | 60 |
| Veuf(ve) | 70 |
| bSituationFamiliale | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **SituationFamiliale** (**true**) ou pas (**false**) |
| dateNaissance | string(date) | Date de naissance ***La date doit respecter ce format : AAAA-MM-JJ*** |
| bDateNaissance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DateNaissance** (**true**) ou pas (**false**) |
| departementNaissance | string | Département de naissance |
| bDepartementNaissance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DepartementNaissance** (**true**) ou pas (**false**) |
| communeNaissance | string | Commune de naissance |
| bCommuneNaissance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CommuneNaissance** (**true**) ou pas (**false**) |
| codePaysNaissance | string | Code pays de naissance |
| bCodePaysNaissance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodePaysNaissance** (**true**) ou pas (**false**) |
| paysNaissance | string | Pays de naissance |
| bPaysNaissance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **PaysNaissance** (**true**) ou pas (**false**) |
| codePaysNationalite | string | Code pays correspondant à la nationalité |
| bCodePaysNationalite | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodePaysNationalite** (**true**) ou pas (**false**) |
| paysNationalite | string | Pays correspondant à la nationalité |
| bPaysNationalite | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **PaysNationalite** (**true**) ou pas (**false**) |
| titreSejourType | integer(int32) | Titre de séjour : \| Titre de séjour \| Valeur correspondante \| \| --- \| --- \| \| Aucun \| 0 \| \| Carte de résident \| 1 \| \| Carte de séjour temporaire - "salarié" \| 2 \| \| Carte de séjour pluriannuelle - "salarié" \| 3 \| \| Certificat de résidence Algérien \| 4 \| \| Récépissé de demande de carte de séjour \| 5 \| \| Carte de séjour pluriannuelle - "Passeport Talent" \| 6 \| \| Visa de long séjour (type D) \| 7 \| \| Visa de long séjour valant titre de séjour (VLS-TS) étudiant ou carte de séjour étudiant \| 8 \| \| Carte de séjour pluriannuelle - "Travailleur saisonnier" \| 9 \| \| Carte de séjour pluriannuelle - "Salarié détaché ICT" \| 10 \| \| Carte de membre de la famille d'un citoyen de l'union/EEE/Suisse \| 11 \| \| Autorisation provisoire de séjour (APS) \| 12 \| \| Carte de séjour - "étudiant - programme de mobilité" \| 13 \| \| Carte de séjour - Recherche d'emploi/création d'entreprise \| 14 \| \| Carte de séjour "vie privée et familiale" \| 15 \| \| Carte de séjour "entrepreneur / profession libérale" \| 16 \| \| Carte de séjour "passeport talent (famille)" \| 17 \| \| Carte de séjour "travailleur saisonnier" \| 18 \| \| Carte de séjour "visiteur" \| 19 \| \| Carte de séjour "retraité" \| 20 \| |
| Titre de séjour | Valeur correspondante |
| Aucun | 0 |
| Carte de résident | 1 |
| Carte de séjour temporaire - "salarié" | 2 |
| Carte de séjour pluriannuelle - "salarié" | 3 |
| Certificat de résidence Algérien | 4 |
| Récépissé de demande de carte de séjour | 5 |
| Carte de séjour pluriannuelle - "Passeport Talent" | 6 |
| Visa de long séjour (type D) | 7 |
| Visa de long séjour valant titre de séjour (VLS-TS) étudiant ou carte de séjour étudiant | 8 |
| Carte de séjour pluriannuelle - "Travailleur saisonnier" | 9 |
| Carte de séjour pluriannuelle - "Salarié détaché ICT" | 10 |
| Carte de membre de la famille d'un citoyen de l'union/EEE/Suisse | 11 |
| Autorisation provisoire de séjour (APS) | 12 |
| Carte de séjour - "étudiant - programme de mobilité" | 13 |
| Carte de séjour - Recherche d'emploi/création d'entreprise | 14 |
| Carte de séjour "vie privée et familiale" | 15 |
| Carte de séjour "entrepreneur / profession libérale" | 16 |
| Carte de séjour "passeport talent (famille)" | 17 |
| Carte de séjour "travailleur saisonnier" | 18 |
| Carte de séjour "visiteur" | 19 |
| Carte de séjour "retraité" | 20 |
| bTitreSejourType | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TitreSejourType** (**true**) ou pas (**false**) |
| titreSejourNumeroOrdre | string | Numéro d'ordre |
| bTitreSejourNumeroOrdre | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TitreSejourNumeroOrdre** (**true**) ou pas (**false**) |
| titreSejourDebut | string(date) | Date de début de validité ***La date doit respecter ce format : AAAA-MM-JJ*** |
| bTitreSejourDebut | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TitreSejourDebut** (**true**) ou pas (**false**) |
| titreSejourFin | string(date) | Date de fin de validité |
| bTitreSejourFin | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TitreSejourFin** (**true**) ou pas (**false**) |
| numVoie | string | Numéro de la voie |
| bNumVoie | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NumVoie** (**true**) ou pas (**false**) |
| btqc | string | Indicateur de répétition (BIS, TER, QUATER, QUINQUIES...) |
| bBTQC | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **BTQC** (**true**) ou pas (**false**) |
| nomVoie | string | Nom de la voie |
| bNomVoie | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NomVoie** (**true**) ou pas (**false**) |
| complement | string | Complément d'adresse |
| bComplement | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Complement** (**true**) ou pas (**false**) |
| codePostal | string | Code postal |
| bCodePostal | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodePostal** (**true**) ou pas (**false**) |
| nomVille | string | Nom de la ville |
| bNomVille | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NomVille** (**true**) ou pas (**false**) |
| codeOfficielCommune | string | Code INSEE de la commune |
| bCodeOfficielCommune | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeOfficielCommune** (**true**) ou pas (**false**) |
| commune | string | Nom de la commune |
| bCommune | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Commune** (**true**) ou pas (**false**) |
| codePays | string | Code ISO du pays |
| bCodePays | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodePays** (**true**) ou pas (**false**) |
| pays | string | Nom du pays |
| bPays | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Pays** (**true**) ou pas (**false**) |
| domicilieFiscalementHorsFrance | boolean | Permet d'undiquer si le salarié est domicilié fiscalement en France (**false**) ou pas (**true**) |
| bDomicilieFiscalementHorsFrance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DomicilieFiscalementHorsFrance** (**true**) ou pas (**false**) |
| telDomicile | string | Numéro de téléphone du domicile |
| bTelDomicile | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TelDomicile** (**true**) ou pas (**false**) |
| telPortable | string | Numéro de téléphone portable |
| bTelPortable | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TelPortable** (**true**) ou pas (**false**) |
| eMail | string | Adresse e-mail |
| bEMail | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **EMail** (**true**) ou pas (**false**) |
| rib | string | RIB du compte du salarié |
| bRib | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Rib** (**true**) ou pas (**false**) |
| iBan | string | IBAN du compte du salarié |
| bIBan | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **IBan** (**true**) ou pas (**false**) |
| bic | string | Clé BIC du compte du salarié |
| bBic | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Bic** (**true**) ou pas (**false**) |
| affectation1 | string | Affectation correpondant à l'axe analytique numéro 1 |
| bAffectation1 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Affectation1** (**true**) ou pas (**false**) |
| affectation2 | string | Affectation correpondant à l'axe analytique numéro 2 |
| bAffectation2 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Affectation2** (**true**) ou pas (**false**) |
| affectation3 | string | Affectation correpondant à l'axe analytique numéro 3 |
| bAffectation3 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Affectation3** (**true**) ou pas (**false**) |
| affectation4 | string | Affectation correpondant à l'axe analytique numéro 4 |
| bAffectation4 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Affectation4** (**true**) ou pas (**false**) |
| affectation5 | string | Affectation correpondant à l'axe analytique numéro 5 |
| bAffectation5 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Affectation5** (**true**) ou pas (**false**) |
| affectation6 | string | Affectation correpondant à l'axe analytique numéro 6 |
| bAffectation6 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Affectation6** (**true**) ou pas (**false**) |
| affectation7 | string | Affectation correpondant à l'axe analytique numéro 7 |
| bAffectation7 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Affectation7** (**true**) ou pas (**false**) |
| emplois | Emploi[] | Liste d'éléments structurés contenant les informations de chaque emploi (au sens Silae) du salarié (cf. détail ci-dessous) |
| anneeNaissance | integer(int32) | Année de naissance si date de naissance non renseignée |
| bAnneeNaissance | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **AnneeNaissance** (**true**) ou pas (**false**) |
| eMailPro | string | Adresse email professionnelle |
| bEMailPro | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **EMailPro** (**true**) ou pas (**false**) |
| personneAContacterUrgenceNom | string | Nom de la personne à contacter en cas d'urgence |
| bPersonneAContacterUrgenceNom | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **personneAContacterUrgenceNom** (**true**) ou pas (**false**) |
| personneAContacterUrgencePrenom | string | Prénom de la personne à contacter en cas d'urgence |
| bPersonneAContacterUrgencePrenom | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **bPersonneAContacterUrgencePrenom** (**true**) ou pas (**false**) |
| personneAContacterUrgenceTel | string | Téléphone de la personne à contacter en cas d'urgence |
| bPersonneAContacterUrgenceTel | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **personneAContacterUrgenceTel** (**true**) ou pas (**false**) |
| personneAContacterUrgenceMel | string | Email de la personne à contacter en cas d'urgence |
| bPersonneAContacterUrgenceMel | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **personneAContacterUrgenceMel** (**true**) ou pas (**false**) |
| ribPourVirements | boolean | RIB à utiliser pour les virements (oui: true, non : false) |
| bRibPourVirements | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ribPourVirements** (**true**) ou pas (**false**) |
| ribVersementPlafond | number(double) | Montant plafond à verser sur le RIB |
| bRibVersementPlafond | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ribVersementPlafond** (**true**) ou pas (**false**) |
| paiementEspeces | boolean | Paiement en espèces (oui: true, non : false) |
| bPaiementEspeces | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **paiementEspeces** (**true**) ou pas (**false**) |
| dureePeriodeEssai1 | integer(int32) | Durée 1ère période d'essai en nombre de jours |
| bDureePeriodeEssai1 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **dureePeriodeEssai1** (**true**) ou pas (**false**) |
| dureePeriodeEssai2 | integer(int32) | Durée 2ème période d'essai en nombre de jours |
| bDureePeriodeEssai2 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **dureePeriodeEssai2** (**true**) ou pas (**false**) |
| nbPersACharge | integer(int32) | Nombre de personnes à charge |
| bNbPersACharge | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **nbPersACharge** (**true**) ou pas (**false**) |
| rib2 | string | RIB 2 du compte du salarié |
| bRib2 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Rib2** (**true**) ou pas (**false**) |
| iBan2 | string | IBAN 2 du compte du salarié |
| bIBan2 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **IBan2** (**true**) ou pas (**false**) |
| bic2 | string | Clé BIC 2 du compte du salarié |
| bBic2 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Bic2** (**true**) ou pas (**false**) |
| rib2PourVirements | boolean | RIB 2 à utiliser pour les virements (oui: true, non : false) |
| bRib2PourVirements | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **rib2PourVirements** (**true**) ou pas (**false**) |
| rib2VersementPlafond | number(double) | Montant plafond à verser sur le RIB 2 |
| bRib2VersementPlafond | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **rib2VersementPlafond** (**true**) ou pas (**false**) |
| rib3 | string | RIB 3 du compte du salarié |
| bRib3 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Rib3** (**true**) ou pas (**false**) |
| iBan3 | string | IBAN 3 du compte du salarié |
| bIBan3 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **IBan3** (**true**) ou pas (**false**) |
| bic3 | string | Clé BIC 3 du compte du salarié |
| bBic3 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Bic3** (**true**) ou pas (**false**) |
| rib3PourVirements | boolean | RIB 3 à utiliser pour les virements (oui: true, non : false) |
| bRib3PourVirements | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **rib3PourVirements** (**true**) ou pas (**false**) |
| rib3VersementPlafond | number(double) | Montant plafond à verser sur le RIB 3 |
| bRib3VersementPlafond | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **rib3VersementPlafond** (**true**) ou pas (**false**) |
| sexe | integer(int32) | \| Sexe de la personne \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Homme \| 10 \| \| Femme \| 20 \| |
| Sexe de la personne | Valeur correspondante |
| Vide | 0 |
| Homme | 10 |
| Femme | 20 |
| bSexe | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **sexe** (**true**) ou pas (**false**) |
| beneficiaireFinal | string) | Permet d'indiquer le bénéficiaire final |
| bBeneficiaireFinal | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **beneficiairefinal** (**true**) ou pas (**false**) |

### Emploi

| Paramètre | Type | Description |
| --- | --- | --- |
| identifiantEmploi | integer(int32) | Identifiant de l'emploi. - Mettre la valeur 0 (zéro) pour créer un nouvel emploi - Indiquer le N° identifiant emploi pour le modifier (utiliser la fonction API **ListeSalarieEmplois** pour connaître les différents N° d'identifiant emploi) |
| identifiantEmploiModele | integer(int32) | Identifiant de l'emploi du salarié qui va permettre de créer un nouvel emploi pour ce même salarié. ***Le paramètre matriculeSalarieModele ne doit pas être renseignés*** |
| envoiDUEEdi | boolean | Permet de déclencher l'envoi d'une DUE en EDI pour cet emploi. En cas d'envoi d'une DUE en EDI, l'heure d'embauche sera celle du paramètre **DateDebut** |
| envoiDUEEdiSansCreerEmploi | boolean | Pas utilisé |
| nomInterneEtablissement | string | Nom interne de l'établissement auquel est rattaché l'emploi. Peut être laissé vide si la société est mono établissement |
| dateDebut | string(date) | Date de début de l'emploi ***La date doit respecter ce format : AAAA-MM-JJ*** |
| dateDebutContrat | string(date) | Date de début de contrat *Elle doit être inférieure ou égale à la Date de début d'emploi. Si ce n'est pas le cas, message d'erreur et fiche Salarié créée sans emploi* ***La date doit respecter ce format : AAAA-MM-JJ*** |
| dateFin | string(date) | Date de fin de l'emploi ***La date doit respecter ce format : AAAA-MM-JJ*** |
| codeConventionCollective | string | Code de la convention collective à laquelle correspond l'emploi |
| bCodeConventionCollective | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeConventionCollective** (**true**) ou pas (**false**) |
| codeClassificationMetier | string | Code classification métier. *Les champs (ex : Statut professionnel, Nature de l'emploi, Code CPN, Niveau, Position, Coefficient…) liés à la classification métier choisie sont mis à jour automatiquement. Si ces champs sont renseignés dans les paramètres de l'appel, ce sont ces valeurs qui seront prises en compte* |
| bCodeClassificationMetier | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeClassificationMetier** (**true**) ou pas (**false**) |
| intituleEmploi | string | Nature de l'emploi |
| bIntituleEmploi | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **IntituleEmploi** (**true**) ou pas (**false**) |
| codeContratTravail | string | Code contrat de travail : \| Contrat de travail \| Valeur correspondante \| \| --- \| --- \| \| Contrat à durée indéterminée \| 01 \| \| Contrat à durée déterminée \| 02 \| \| Contrat de travail temporaire (mission) \| 03 \| \| Contrat d'apprentissage entreprises artisanales ou de moins de 11 salariés (loi de 1979) \| 04 \| \| Contrat d'apprentissage entreprises non artisanales d'au moins 11 salariés (loi de 1987) \| 05 \| \| Contrat à durée indéterminée intérimaire \| 09 \| \| Contrat à durée déterminée de droit public \| 10 \| \| Contrat à durée indéterminée de droit public \| 11 \| \| CUI-Contrat d'Accompagnement dans l'Emploi (CDD) \| 25 \| \| CUI-Contrat d'Accompagnement dans l'Emploi (CDI) \| 26 \| \| Contrat à durée déterminée à objet défini \| 27 \| \| Contrat à durée déterminée pour les seniors \| 28 \| \| Convention de stage \| 29 \| \| Convention volontaire associatif \| 30 \| \| Contrat de tuteur de cessionnaire d'entreprise \| 31 \| \| Contrat d'appui à la création d'entreprise \| 32 \| \| Convention de stage 6 mois (agriculture) \| 33 \| \| Convention relative à la mise en œuvre d'une Période de Mise en Situation en Milieu Professionnel \| 34 \| \| Nomination dans la fonction publique \| 50 \| \| Contrat d'engagement détenu \| 53 \| \| Bénéficiaire d'une rémunération versée par un tiers \| 66 \| \| Mandat d'élu \| 81 \| \| Engagement de service civique (moins de 26 mois) \| 88 \| \| Volontariat de service civique \| 89 \| \| Sans contrat de travail ou conventionnement \| 90 \| \| Contrat d'Insertion dans la Vie Sociale (CIVIS) \| 91 \| \| Convention avec association d'étudiants à caractère pédagogique \| 92 \| \| Bénéficiaire de revenus de remplacement (RG) \| 93 \| \| Bénéficiaire de revenus de remplacement (RS) \| 94 \| |
| Contrat de travail | Valeur correspondante |
| Contrat à durée indéterminée | 01 |
| Contrat à durée déterminée | 02 |
| Contrat de travail temporaire (mission) | 03 |
| Contrat d'apprentissage entreprises artisanales ou de moins de 11 salariés (loi de 1979) | 04 |
| Contrat d'apprentissage entreprises non artisanales d'au moins 11 salariés (loi de 1987) | 05 |
| Contrat à durée indéterminée intérimaire | 09 |
| Contrat à durée déterminée de droit public | 10 |
| Contrat à durée indéterminée de droit public | 11 |
| CUI-Contrat d'Accompagnement dans l'Emploi (CDD) | 25 |
| CUI-Contrat d'Accompagnement dans l'Emploi (CDI) | 26 |
| Contrat à durée déterminée à objet défini | 27 |
| Contrat à durée déterminée pour les seniors | 28 |
| Convention de stage | 29 |
| Convention volontaire associatif | 30 |
| Contrat de tuteur de cessionnaire d'entreprise | 31 |
| Contrat d'appui à la création d'entreprise | 32 |
| Convention de stage 6 mois (agriculture) | 33 |
| Convention relative à la mise en œuvre d'une Période de Mise en Situation en Milieu Professionnel | 34 |
| Nomination dans la fonction publique | 50 |
| Contrat d'engagement détenu | 53 |
| Bénéficiaire d'une rémunération versée par un tiers | 66 |
| Mandat d'élu | 81 |
| Engagement de service civique (moins de 26 mois) | 88 |
| Volontariat de service civique | 89 |
| Sans contrat de travail ou conventionnement | 90 |
| Contrat d'Insertion dans la Vie Sociale (CIVIS) | 91 |
| Convention avec association d'étudiants à caractère pédagogique | 92 |
| Bénéficiaire de revenus de remplacement (RG) | 93 |
| Bénéficiaire de revenus de remplacement (RS) | 94 |
| bCodeContratTravail | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeContratTravail** (**true**) ou pas (**false**) |
| motifCDD | string | Motif du CDD : \| Motif du CDD \| Valeur correspondante \| \| --- \| --- \| \| CDD pour surcroît d'activité \| 01 \| \| CDD pour remplacement d'un salarié absent \| 02 \| \| CDD d'usage \| 03 \| \| CDD saisonnier \| 04 \| \| CDD saisonnier "contrat vendanges" \| 05 \| \| CDD d'insertion \| 06 \| \| CDD salarié agricole âgé \| 07 \| \| Autres CDD \| 08 \| \| CIDD (animation commerciale) \| 09 \| \| CDD "adultes relais" \| 10 \| \| CDD sportif \| 11 \| |
| Motif du CDD | Valeur correspondante |
| CDD pour surcroît d'activité | 01 |
| CDD pour remplacement d'un salarié absent | 02 |
| CDD d'usage | 03 |
| CDD saisonnier | 04 |
| CDD saisonnier "contrat vendanges" | 05 |
| CDD d'insertion | 06 |
| CDD salarié agricole âgé | 07 |
| Autres CDD | 08 |
| CIDD (animation commerciale) | 09 |
| CDD "adultes relais" | 10 |
| CDD sportif | 11 |
| bMotifCDD | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **MotifCDD** (**true**) ou pas (**false**) |
| dureeInitialeCDD | integer(int32) | Durée initiale du CDD en mois (utilisé que si le code contrat de travail est 02 ou 03 - cf. correspondance dans la description du paramètre **CodeContratTravail**) |
| bDureeInitialeCDD | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DureeInitialeCDD** (**true**) ou pas (**false**) |
| motifDebutEmploi | string | Motif début d'emploi : \| Motif de début d'emploi \| Valeur correspondante \| \| --- \| --- \| \| Embauche, début d'activité, recrutement direct ou sur concours (fonction publique), début de détachement, début de vie culturelle (cultes) \| 001 \| \| Reprise d'activité suite à suspension du contrat de travail \| 003 \| \| Congé sans solde supérieur ou égal à 30 jours consécutif \| 005 \| \| Congé demi-solde \| 041 \| \| Service national volontaire (y compris volontaires du service civique) \| 057 \| \| Paiement des congés payés \| 061 \| \| Congé parental d'éducation \| 069 \| \| Embauche d'un retraité reprenant une activité \| 089 \| \| Salarié quittant ou ayant quitté l'entreprise (sommes versées dont indemnités de non concurrence pour l'Agirc-Arrco ou rappels Ircantec) \| 095 \| \| Continuité d'activité en début de période \| 097 \| \| Congé de solidarité familiale \| 111 \| \| Congé de présence parentale \| 113 \| \| Début de période IEG pensions (réservé aux échanges inter-organismes) \| 119 \| \| Congé sabbatique, disponibilité, congé sans traitement de l'agent public stagiaire, fonctionnaire hors cadre \| 121 \| \| Début de période RATP (réservé échanges inter-organismes) \| 131 \| \| Évènement prévoyance (réservé aux déclarations évènementielles prévoyance) \| 139 \| \| Retour de détachement \| 451 \| \| Changement de situation administrative du salarié ou de l'assuré \| 901 \| \| Début de période d'apprentissage dans le cadre d'un CDI \| 903 \| |
| Motif de début d'emploi | Valeur correspondante |
| Embauche, début d'activité, recrutement direct ou sur concours (fonction publique), début de détachement, début de vie culturelle (cultes) | 001 |
| Reprise d'activité suite à suspension du contrat de travail | 003 |
| Congé sans solde supérieur ou égal à 30 jours consécutif | 005 |
| Congé demi-solde | 041 |
| Service national volontaire (y compris volontaires du service civique) | 057 |
| Paiement des congés payés | 061 |
| Congé parental d'éducation | 069 |
| Embauche d'un retraité reprenant une activité | 089 |
| Salarié quittant ou ayant quitté l'entreprise (sommes versées dont indemnités de non concurrence pour l'Agirc-Arrco ou rappels Ircantec) | 095 |
| Continuité d'activité en début de période | 097 |
| Congé de solidarité familiale | 111 |
| Congé de présence parentale | 113 |
| Début de période IEG pensions (réservé aux échanges inter-organismes) | 119 |
| Congé sabbatique, disponibilité, congé sans traitement de l'agent public stagiaire, fonctionnaire hors cadre | 121 |
| Début de période RATP (réservé échanges inter-organismes) | 131 |
| Évènement prévoyance (réservé aux déclarations évènementielles prévoyance) | 139 |
| Retour de détachement | 451 |
| Changement de situation administrative du salarié ou de l'assuré | 901 |
| Début de période d'apprentissage dans le cadre d'un CDI | 903 |
| bMotifDebutEmploi | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **MotifDebutEmploi** (**true**) ou pas (**false**) |
| motifFinEmploi | string | Motif fin d'emploi : \| Motif de fin d'emploi \| Valeur correspondante \| \| --- \| --- \| \| Suspension du contrat de travail \| 004 \| \| Congé sans solde supérieur ou égal à 30 jours consécutifs \| 006 \| \| Fin de contrat de travail, fin d'activité, fin de détachement, perte de la qualité cultuelle (cultes) \| 008 \| \| Démission \| 010 \| \| Licenciement \| 012 \| \| Convention de conversion \| 014 \| \| Décès, disparition \| 018 \| \| Congé demi-solde \| 042 \| \| Service national volontaire (y compris volontaires du service civique) \| 058 \| \| Paiement des congés payés \| 062 \| \| Congé parental d'éducation \| 070 \| \| Créateur d'entreprise \| 074 \| \| Sortie d'activité d'un retraité cumulant retraite et activité \| 090 \| \| Salarié quittant ou ayant quitté l'entreprise (sommes versées dont sommes isolées Agirc-Arcco ou rappels Ircantec). \| 096 \| \| Continuité d'activité en fin de période \| 098 \| \| Congé de solidarité familiale \| 112 \| \| Congé de présence parentale \| 114 \| \| Fin de période pré retraite IEG (réservé échanges inter organismes) \| 120 \| \| Congé sabbatique, disponibilité, congé sans traitement de l'agent public stagiaire, fonctionnaire hors cadres \| 122 \| \| Fin de période RATP (réservé échanges inter organisme) \| 132 \| \| Départ volontaire à la retraite \| 134 \| \| Mise à la retraite d'office à l'initiative de l'employeur \| 136 \| \| Rupture conventionnelle du contrat de travail \| 138 \| \| Événements prévoyance (réservé aux déclarations prévoyance événementielles) \| 140 \| \| Rupture amiable dans le cadre d'un congé de mobilité \| 142 \| \| Rupture conventionnelle collective \| 148 \| \| Départ en détachement \| 452 \| \| Changement de situation administrative du salarié ou de l'assuré \| 902 \| \| Fin de période d'apprentissage dans le cadre d'un CDI \| 904 \| \| Rupture dans le cadre d'un accord de performance \| 906 \| \| Licenciement du collaborateur parlementaire \| 908 \| |
| Motif de fin d'emploi | Valeur correspondante |
| Suspension du contrat de travail | 004 |
| Congé sans solde supérieur ou égal à 30 jours consécutifs | 006 |
| Fin de contrat de travail, fin d'activité, fin de détachement, perte de la qualité cultuelle (cultes) | 008 |
| Démission | 010 |
| Licenciement | 012 |
| Convention de conversion | 014 |
| Décès, disparition | 018 |
| Congé demi-solde | 042 |
| Service national volontaire (y compris volontaires du service civique) | 058 |
| Paiement des congés payés | 062 |
| Congé parental d'éducation | 070 |
| Créateur d'entreprise | 074 |
| Sortie d'activité d'un retraité cumulant retraite et activité | 090 |
| Salarié quittant ou ayant quitté l'entreprise (sommes versées dont sommes isolées Agirc-Arcco ou rappels Ircantec). | 096 |
| Continuité d'activité en fin de période | 098 |
| Congé de solidarité familiale | 112 |
| Congé de présence parentale | 114 |
| Fin de période pré retraite IEG (réservé échanges inter organismes) | 120 |
| Congé sabbatique, disponibilité, congé sans traitement de l'agent public stagiaire, fonctionnaire hors cadres | 122 |
| Fin de période RATP (réservé échanges inter organisme) | 132 |
| Départ volontaire à la retraite | 134 |
| Mise à la retraite d'office à l'initiative de l'employeur | 136 |
| Rupture conventionnelle du contrat de travail | 138 |
| Événements prévoyance (réservé aux déclarations prévoyance événementielles) | 140 |
| Rupture amiable dans le cadre d'un congé de mobilité | 142 |
| Rupture conventionnelle collective | 148 |
| Départ en détachement | 452 |
| Changement de situation administrative du salarié ou de l'assuré | 902 |
| Fin de période d'apprentissage dans le cadre d'un CDI | 904 |
| Rupture dans le cadre d'un accord de performance | 906 |
| Licenciement du collaborateur parlementaire | 908 |
| bMotifFinEmploi | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **MotifFinEmploi** (**true**) ou pas (**false**) |
| codeCaracteristiqueActivite | string | Code caractéristique de l'activité : \| Code caractéristique de l'activité \| Valeur correspondante \| \| --- \| --- \| \| Intermittent \| 04 \| \| A domicile \| 05 \| \| Saisonnier \| 06 \| \| Vacataire \| 07 \| \| Occasionnel \| 08 \| \| Temps non complet (réservé secteur public) \| 09 \| \| Forfait jour \| 10 \| \| Salarié non concerné \| 90 \| |
| Code caractéristique de l'activité | Valeur correspondante |
| Intermittent | 04 |
| A domicile | 05 |
| Saisonnier | 06 |
| Vacataire | 07 |
| Occasionnel | 08 |
| Temps non complet (réservé secteur public) | 09 |
| Forfait jour | 10 |
| Salarié non concerné | 90 |
| bCodeCaracteristiqueActivite | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeCaracteristiqueActivite** (**true**) ou pas (**false**) |
| codeStatutProfessionnel | string | Code statut Professionnel : \| Statut professionnel \| Valeur correspondante \| \| --- \| --- \| \| Ouvrier \| 01 \| \| Employé \| 02 \| \| Technicien \| 03 \| \| Agent de maîtrise \| 04 \| \| Artiste \| 05 \| \| Représentant exclusif \| 06 \| \| Représentant multicarte \| 07 \| \| Enseignant loi guermeur \| 08 \| \| Stagiaire rémunéré \| 09 \| \| Stagiaire non rémunéré \| 10 \| \| Stagiaire rémunéré diplômé d'état \| 11 \| \| Cadre supérieur \| 12 \| \| Cadre dirigeant \| 13 \| \| Journaliste pigiste \| 14 \| \| Journaliste stagiaire \| 15 \| \| Journaliste titulaire \| 16 \| \| Clergé \| 18 \| \| Associé salarié \| 19 \| \| Gérant minoritaire \| 20 \| \| Gérant égalitaire \| 21 \| \| Président directeur général \| 22 \| \| Directeur général \| 23 \| \| Président \| 24 \| \| Directeur général \| 25 \| \| Emploi statutaire CCI \| 26 \| \| Emploi non statutaire chambre de commerce et de l'industrie \| 27 \| \| Employé d'immeuble \| 28 \| \| Cadre \| 29 \| \| Réalisateur \| 30 \| \| ETAM \| 31 \| \| Parlementaire européen \| 34 \| \| Volontariat associatif \| 36 \| \| Cadet de golf \| 37 \| \| Tuteur du cessionnaire d'entreprise \| 38 \| \| Bénéficiaire d'un contrat d'appui à la création d'entreprise (cape) \| 39 \| \| Élu communal \| 40 \| \| Élu du conseil général \| 41 \| \| Élu du conseil régional \| 42 \| \| Élu des epci, cdg \| 43 \| \| Présidents et vice-présidents d'un conseil d'administration de sdis \| 44 \| \| Élu des syndicats mixtes \| 45 \| \| Autre personnel médical \| 51 \| \| Praticien hospitalier \| 52 \| \| Interne \| 53 \| \| Étudiant hospitalier \| 54 \| \| Praticien hospitalier sans activité libérale \| 56 \| \| Praticien hospitalier universitaire \| 57 \| \| Pharmacien \| 58 \| \| Médecin sans statut hospitalier \| 59 \| \| Agent titulaire des établissements industriels de l'état \| 60 \| \| Agent non titulaire des établissements industriels de l'état \| 61 \| \| Stagiaire des établissements industriels de l'état \| 62 \| \| Agent titulaire de la fonction publique territoriale \| 63 \| \| Agent non titulaire de la fonction publique territoriale \| 64 \| \| Stagiaire de la fonction publique territoriale \| 65 \| \| Agent titulaire de la fonction publique hospitalière \| 66 \| \| Agent non titulaire de la fonction publique hospitalière \| 67 \| \| Stagiaire de la fonction publique hospitalière \| 68 \| \| Agent titulaire de l'état \| 69 \| \| Agent non titulaire de l'état \| 70 \| \| Stagiaire de l'état \| 71 \| \| Agent titulaire de la fonction publique européenne \| 72 \| \| Agent non titulaire de la fonction publique européenne \| 73 \| \| Stagiaire de la fonction publique européenne \| 74 \| \| Documentalistes des établissements privés de l'éducation nationale \| 75 \| \| Agent sous statut public titulaire détaché-militaire \| 76 \| \| Agent titulaire détaché fonction publique d'Etat \| 77 \| \| Agent sous statut public, militaire détaché pour exercer un mandat électif \| 78 \| \| Agent sous statut public, fonctionnaire ou magistrat détaché pour exercer un mandat électif \| 79 \| \| Agent sncf du cadre permanent non cadre supérieur résidant en France \| 81 \| \| Agent sncf du cadre permanent non cadre supérieur résidant à l'étranger \| 82 \| \| Agent sncf du cadre permanent cadre supérieur résidant en France \| 83 \| \| Agent sncf du cadre permanent cadre supérieur résidant à l'étranger \| 84 \| \| Agent contractuel sncf cadre supérieur résidant en France \| 85 \| \| Agent contractuel sncf cadre supérieur résidant à l'étranger \| 86 \| \| Autres (réserve sncf). \| 87 \| \| Autre mandataire social \| 88 \| \| Autres stagiaires (formation continue) \| 89 \| \| Pas de statut professionnel \| 90 \| |
| Statut professionnel | Valeur correspondante |
| Ouvrier | 01 |
| Employé | 02 |
| Technicien | 03 |
| Agent de maîtrise | 04 |
| Artiste | 05 |
| Représentant exclusif | 06 |
| Représentant multicarte | 07 |
| Enseignant loi guermeur | 08 |
| Stagiaire rémunéré | 09 |
| Stagiaire non rémunéré | 10 |
| Stagiaire rémunéré diplômé d'état | 11 |
| Cadre supérieur | 12 |
| Cadre dirigeant | 13 |
| Journaliste pigiste | 14 |
| Journaliste stagiaire | 15 |
| Journaliste titulaire | 16 |
| Clergé | 18 |
| Associé salarié | 19 |
| Gérant minoritaire | 20 |
| Gérant égalitaire | 21 |
| Président directeur général | 22 |
| Directeur général | 23 |
| Président | 24 |
| Directeur général | 25 |
| Emploi statutaire CCI | 26 |
| Emploi non statutaire chambre de commerce et de l'industrie | 27 |
| Employé d'immeuble | 28 |
| Cadre | 29 |
| Réalisateur | 30 |
| ETAM | 31 |
| Parlementaire européen | 34 |
| Volontariat associatif | 36 |
| Cadet de golf | 37 |
| Tuteur du cessionnaire d'entreprise | 38 |
| Bénéficiaire d'un contrat d'appui à la création d'entreprise (cape) | 39 |
| Élu communal | 40 |
| Élu du conseil général | 41 |
| Élu du conseil régional | 42 |
| Élu des epci, cdg | 43 |
| Présidents et vice-présidents d'un conseil d'administration de sdis | 44 |
| Élu des syndicats mixtes | 45 |
| Autre personnel médical | 51 |
| Praticien hospitalier | 52 |
| Interne | 53 |
| Étudiant hospitalier | 54 |
| Praticien hospitalier sans activité libérale | 56 |
| Praticien hospitalier universitaire | 57 |
| Pharmacien | 58 |
| Médecin sans statut hospitalier | 59 |
| Agent titulaire des établissements industriels de l'état | 60 |
| Agent non titulaire des établissements industriels de l'état | 61 |
| Stagiaire des établissements industriels de l'état | 62 |
| Agent titulaire de la fonction publique territoriale | 63 |
| Agent non titulaire de la fonction publique territoriale | 64 |
| Stagiaire de la fonction publique territoriale | 65 |
| Agent titulaire de la fonction publique hospitalière | 66 |
| Agent non titulaire de la fonction publique hospitalière | 67 |
| Stagiaire de la fonction publique hospitalière | 68 |
| Agent titulaire de l'état | 69 |
| Agent non titulaire de l'état | 70 |
| Stagiaire de l'état | 71 |
| Agent titulaire de la fonction publique européenne | 72 |
| Agent non titulaire de la fonction publique européenne | 73 |
| Stagiaire de la fonction publique européenne | 74 |
| Documentalistes des établissements privés de l'éducation nationale | 75 |
| Agent sous statut public titulaire détaché-militaire | 76 |
| Agent titulaire détaché fonction publique d'Etat | 77 |
| Agent sous statut public, militaire détaché pour exercer un mandat électif | 78 |
| Agent sous statut public, fonctionnaire ou magistrat détaché pour exercer un mandat électif | 79 |
| Agent sncf du cadre permanent non cadre supérieur résidant en France | 81 |
| Agent sncf du cadre permanent non cadre supérieur résidant à l'étranger | 82 |
| Agent sncf du cadre permanent cadre supérieur résidant en France | 83 |
| Agent sncf du cadre permanent cadre supérieur résidant à l'étranger | 84 |
| Agent contractuel sncf cadre supérieur résidant en France | 85 |
| Agent contractuel sncf cadre supérieur résidant à l'étranger | 86 |
| Autres (réserve sncf). | 87 |
| Autre mandataire social | 88 |
| Autres stagiaires (formation continue) | 89 |
| Pas de statut professionnel | 90 |
| bCodeStatutProfessionnel | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeStatutProfessionnel** (**true**) ou pas (**false**) |
| codeStatutCategoriel | string | Code statut catégoriel CC : \| Statut Catégoriel \| Valeur correspondante \| \| --- \| --- \| \| Cadre \| 01 \| \| Non cadre \| 02 \| \| Personnel non assimilé cadre au droit commun (réservé SNCF) \| 03 \| \| Personnel assimilé cadre au droit commun (réservé SNCF) \| 04 \| \| Sans statut catégoriel \| 90 \| |
| Statut Catégoriel | Valeur correspondante |
| Cadre | 01 |
| Non cadre | 02 |
| Personnel non assimilé cadre au droit commun (réservé SNCF) | 03 |
| Personnel assimilé cadre au droit commun (réservé SNCF) | 04 |
| Sans statut catégoriel | 90 |
| bCodeStatutCategoriel | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeStatutCategoriel** (**true**) ou pas (**false**) |
| codeStatutCategorielAgircArrco | string | Code statut catégoriel AGIRC-ARRCO : \| Statut Catégoriel \| Valeur correspondante \| \| --- \| --- \| \| Cadre et assimilé (article 4 et 4 bis) \| 01 \| \| Autre bénéficiaire AGIRC (article 36) \| 02 \| \| Non cadre \| 04 \| |
| Statut Catégoriel | Valeur correspondante |
| Cadre et assimilé (article 4 et 4 bis) | 01 |
| Autre bénéficiaire AGIRC (article 36) | 02 |
| Non cadre | 04 |
| bCodeStatutCategorielAgircArrco | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeStatutCategorielAgircArrco** (**true**) ou pas (**false**) |
| coefficient1 | string | Correspond au Coefficient1 tel que configuré dans la convention collective (Position pour la convention SYNTEC par exemple) |
| bCoefficient1 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Coefficient1** (**true**) ou pas (**false**) |
| coefficient2 | string | Correspond au Coefficient2 tel que configuré dans la convention collective (Coefficient pour la convention SYNTEC par exemple) |
| bCoefficient2 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Coefficient2** (**true**) ou pas (**false**) |
| coefficient3 | string | Correspond au Coefficient3 tel que configuré dans la convention collective (Non présent pour la convention SYNTEC par exemple) |
| bCoefficient3 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Coefficient3** (**true**) ou pas (**false**) |
| coefficient4 | string | Correspond au Coefficient4 tel que configuré dans la convention collective (Non présent pour la convention SYNTEC par exemple) |
| bCoefficient4 | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **Coefficient4** (**true**) ou pas (**false**) |
| codeCSP | string | Code Socio Professionnel, désormais appelé code PCS-ESE |
| bCodeCSP | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeCSP** (**true**) ou pas (**false**) |
| codeCPNDUC | string | Code CPN : \| Libellé code CPN \| Valeur correspondante \| \| --- \| --- \| \| Régime général et régime minier \| 200 \| \| Agents contractuels de l'Etat \| 210 \| \| Cadres art. 4/4bis VRP \| 215 \| \| Ensemble des cadres \| 220 \| \| Cadres et assimilés cadres (Article 4&4 bis CCN 14/03/47) \| 221 \| \| Bénéficiaires extension article 36, annex. 1 CCN 14/03/47 \| 222 \| \| bénéficiaires Ext.art.36 ann.1 CCN 14/03/47 ex lRCACIM \| 223 \| \| Cadres supérieurs, cotisants sur la tranche C des salaires \| 224 \| \| Cadres non bénéficiaires de la CCN du 14 mars 1947 \| 229 \| \| Voyageurs Représentants placiers art. 4 CCN 14/03/47 \| 230 \| \| Voyageurs Représentants Placiers non art. 4 CCN 14/03/47 \| 239 \| \| Ensemble des non cadres \| 240 \| \| Employés Techniciens et Agents de Maîtrise \| 241 \| \| Employés mensuels \| 242 \| \| Ouvriers mensuels \| 243 \| \| Ouvriers payés à l'heure \| 244 \| \| Mineurs \| 245 \| \| Travailleurs à domicile \| 246 \| \| Saisonniers \| 247 \| \| Gens de maison \| 248 \| \| Artistes, clergé, etc... \| 249 \| \| Enseignants visés par la loi Guermeur \| 250 \| \| Enseignants cadres visés par la Loi Guermeur \| 251 \| \| Enseignants non cadres visés par la Loi Guermeur \| 252 \| \| Apprentis \| 260 \| \| Apprenti>10 \| 261 \| \| Stagiaire \| 270 \| \| Journaliste stagiaire \| 271 \| \| Non cadre intérimaire \| 272 \| \| Journaliste titulaire \| 280 \| \| Pigiste \| 281 \| \| Cadre intérimaire \| 282 \| \| Autres salariés cadres du Régime général \| 298 \| \| Autres salariés non cadres du Régime général \| 299 \| \| Régime agricole (non cadres) \| 300 \| \| Cadre multi-employeur \| 301 \| \| Cadres relevant du régime agricole \| 311 \| \| Non cadres relevant du régime agricole \| 330 \| \| Non cadres agricoles sauf saisonniers du régime agricole \| 331 \| \| Non cadres permanents relevant du régime agricole \| 332 \| \| Non cadres saisonniers relevant du régime agricole \| 333 \| \| Non cadre occasionnel \| 334 \| \| Divers non cadres du régime agricole \| 339 \| \| Régime non agricole (non salariés) \| 400 \| \| Artisans \| 410 \| \| Industriels & commerçants \| 430 \| \| Professions libérales \| 450 \| \| Agriculteurs (non salariés) \| 500 \| \| Non affiliés aux assurances sociales \| 900 \| \| Multi catégories \| 999 \| |
| Libellé code CPN | Valeur correspondante |
| Régime général et régime minier | 200 |
| Agents contractuels de l'Etat | 210 |
| Cadres art. 4/4bis VRP | 215 |
| Ensemble des cadres | 220 |
| Cadres et assimilés cadres (Article 4&4 bis CCN 14/03/47) | 221 |
| Bénéficiaires extension article 36, annex. 1 CCN 14/03/47 | 222 |
| bénéficiaires Ext.art.36 ann.1 CCN 14/03/47 ex lRCACIM | 223 |
| Cadres supérieurs, cotisants sur la tranche C des salaires | 224 |
| Cadres non bénéficiaires de la CCN du 14 mars 1947 | 229 |
| Voyageurs Représentants placiers art. 4 CCN 14/03/47 | 230 |
| Voyageurs Représentants Placiers non art. 4 CCN 14/03/47 | 239 |
| Ensemble des non cadres | 240 |
| Employés Techniciens et Agents de Maîtrise | 241 |
| Employés mensuels | 242 |
| Ouvriers mensuels | 243 |
| Ouvriers payés à l'heure | 244 |
| Mineurs | 245 |
| Travailleurs à domicile | 246 |
| Saisonniers | 247 |
| Gens de maison | 248 |
| Artistes, clergé, etc... | 249 |
| Enseignants visés par la loi Guermeur | 250 |
| Enseignants cadres visés par la Loi Guermeur | 251 |
| Enseignants non cadres visés par la Loi Guermeur | 252 |
| Apprentis | 260 |
| Apprenti>10 | 261 |
| Stagiaire | 270 |
| Journaliste stagiaire | 271 |
| Non cadre intérimaire | 272 |
| Journaliste titulaire | 280 |
| Pigiste | 281 |
| Cadre intérimaire | 282 |
| Autres salariés cadres du Régime général | 298 |
| Autres salariés non cadres du Régime général | 299 |
| Régime agricole (non cadres) | 300 |
| Cadre multi-employeur | 301 |
| Cadres relevant du régime agricole | 311 |
| Non cadres relevant du régime agricole | 330 |
| Non cadres agricoles sauf saisonniers du régime agricole | 331 |
| Non cadres permanents relevant du régime agricole | 332 |
| Non cadres saisonniers relevant du régime agricole | 333 |
| Non cadre occasionnel | 334 |
| Divers non cadres du régime agricole | 339 |
| Régime non agricole (non salariés) | 400 |
| Artisans | 410 |
| Industriels & commerçants | 430 |
| Professions libérales | 450 |
| Agriculteurs (non salariés) | 500 |
| Non affiliés aux assurances sociales | 900 |
| Multi catégories | 999 |
| bCodeCPNDUC | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeCPNDUC** (**true**) ou pas (**false**) |
| spectacleCodeEmploi | string | Permet de déterminer le code emploi spectacle |
| bSpectacleCodeEmploi | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **SpectacleCodeEmploi** (**true**) ou pas (**false**) |
| spectacleNumeroConges | string | Numéro Congé spectacle |
| bSpectacleNumeroConges | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **SpectacleNumeroConges** (**true**) ou pas (**false**) |
| pctAbattement | number(double) | Pourcentage d'abattement ***Ne pas renseigner si champ précédent valorisé*** |
| bPctAbattement | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **PctAbattement** (**true**) ou pas (**false**) |
| salaireDeBaseEstHoraire | boolean | indique si la valeur reseignée pour le salaire de base correspond à un salarie mensuel(**false**) ou un salaire horaire (**true**) |
| bSalaireDeBaseEstHoraire | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **SalaireDeBaseEstHoraire** (**true**) ou pas (**false**) |
| salaireDeBase | string | Montant du salaire de base |
| bSalaireDeBase | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **SalaireDeBase** (**true**) ou pas (**false**) |
| salaireNetGaranti | number(double) | Salaire net garanti |
| bSalaireNetGaranti | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **SalaireNetGaranti** (**true**) ou pas (**false**) |
| nbHeuresTravaillees | number[] | Permet de définir le nombre d'heures travaillées. Tableau de 7 éléments, chaque élément représentant la valeur des heures travaillées pour un jour de la semaine (indice 0 = Lundi) |
| nbHeuresDeNuitTravaillees | number[] | Permet de définir le nombre d'heures travaillées. Tableau de 7 éléments, chaque élément représentant la valeur des heures travaillées pour un jour de la semaine (indice 0 = Lundi). Attention, ces heures sont incluses dans les heures travaillées |
| bNbHeuresTravaillees | boolean | Permet d'indiquer s'il faut prendre en compte la valeur des paramètres **bNbHeuresTravaillees** et **NbHeuresDeNuitTravaillees** (**true**) ou pas (**false**) |
| nbHeuresMensuellesNormales | number(double) | Permet de définir le nombre d'heures mensuelles normales |
| bNbHeuresMensuellesNormales | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NbHeuresMensuellesNormales** (**true**) ou pas (**false**) |
| nbHeuresMensuellesMajorees | number(double) | Permet de définir le nombre d'heures mensuelles majorées |
| bNbHeuresMensuellesMajorees | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **NbHeuresMensuellesMajorees** (**true**) ou pas (**false**) |
| pctHeuresMensuellesMajorees | number(double) | Permet de définir le pourcentage de majoration des heures majorées |
| bPctHeuresMensuellesMajorees | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **PctHeuresMensuellesMajorees** (**true**) ou pas (**false**) |
| nbHeuresMensuellesLibres | number[] | Permet de définir le nombre d'heures mensuelles libres. Tableau de 3 éléments en fonction des heures libres à définir |
| codesHeuresMensuellesLibres | string[] | Permet de définir quelles heures seront désignées par les heures libres. Tableau de 3 éléments qui correspondent au niveau de l'indice aux éléments définis via le paramètre **NbHeuresMensuellesLibres**. Les codes heures sont définies dans Silae |
| bHeuresMensuellesLibres | boolean | Permet d'indiquer s'il faut prendre en compte la liste de paramètres **NbHeuresMensuellesLibres** (**true**) ou pas (**false**) |
| confirmationObligatoireDesHeures | boolean | Permet d'indiquer si la confirmation des heures est obligatoire (**true**) ou pas (**false**). Correspond au paramètre défini dans le bloc Paramètres de Paie de la fiche salarié |
| bConfirmationObligatoireDesHeures | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ConfirmationObligatoireDesHeures** (**true**) ou pas (**false**) |
| activerCalculKilometrique | boolean | Permet d'indiquer s'il faut activer (**true**) ou pas (**false**) le calcul des indemnités kilométriques |
| bActiverCalculKilometrique | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ActiverCalculKilometrique** (**true**) ou pas (**false**) |
| typeDeVehicule | integer(int32) | Permet de définir le type de véhicule : \| Type de Véhicule \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Automobile 3CV \| 3 \| \| Automobile 4CV \| 4 \| \| Automobile 5CV \| 5 \| \| Automobile 6CV \| 6 \| \| Automobile 7CV \| 7 \| \| Automobile 8CV \| 8 \| \| Automobile 9CV \| 9 \| \| Automobile 10CV \| 10 \| \| Automobile 11CV \| 11 \| \| Automobile 12CV \| 12 \| \| Automobile 13CV et plus \| 13 \| \| Moto 50CC et moins \| 101 \| \| Moto entre 50CC et 125CC \| 102 \| \| Moto entre 3CV et 5CV \| 103 \| \| Moto 6CV et plus \| 104 \| |
| Type de Véhicule | Valeur correspondante |
| Vide | 0 |
| Automobile 3CV | 3 |
| Automobile 4CV | 4 |
| Automobile 5CV | 5 |
| Automobile 6CV | 6 |
| Automobile 7CV | 7 |
| Automobile 8CV | 8 |
| Automobile 9CV | 9 |
| Automobile 10CV | 10 |
| Automobile 11CV | 11 |
| Automobile 12CV | 12 |
| Automobile 13CV et plus | 13 |
| Moto 50CC et moins | 101 |
| Moto entre 50CC et 125CC | 102 |
| Moto entre 3CV et 5CV | 103 |
| Moto 6CV et plus | 104 |
| bTypeDeVehicule | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TypeDeVehicule** (**true**) ou pas (**false**) |
| trancheKilometrique | integer(int32) | Permet d'indiquer la tranche kilométrique : \| Tranche Kilométrique \| Valeur correspondante \| \| --- \| --- \| \| Vide \| 0 \| \| Jusqu'à 5000 Km \| 1 \| \| De 5000 Km à 20000 Km \| 2 \| \| Au delà de 20000 Km \| 3 \| |
| Tranche Kilométrique | Valeur correspondante |
| Vide | 0 |
| Jusqu'à 5000 Km | 1 |
| De 5000 Km à 20000 Km | 2 |
| Au delà de 20000 Km | 3 |
| bTrancheKilometrique | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TrancheKilometrique** (**true**) ou pas (**false**) |
| prixDuKilometre | number(double) | Permet de définir le prix du kilomètre |
| bPrixDuKilometre | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **PrixDuKilometre** (**true**) ou pas (**false**) |
| activerActiviteJournaliere | boolean | Permet d'activer (**true**) ou non (**false**) la saisie de l'activité journalière |
| bActiverActiviteJournaliere | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ActiverActiviteJournaliere** (**true**) ou pas (**false**) |
| decoupageActiviteJournaliere | integer(int32) | Permet d'indiquer si le calcul des heures supplémentaires se fait par semaine ou par mois : \| Type de découpage \| Valeur correspondante \| \| --- \| --- \| \| Semaine \| 0 \| \| Mois \| 1 \| |
| Type de découpage | Valeur correspondante |
| Semaine | 0 |
| Mois | 1 |
| bDecoupageActiviteJournaliere | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DecoupageActiviteJournaliere** (**true**) ou pas (**false**) |
| modeSaisieActiviteJournaliere | integer(int32) | Permet de définir le mode de saisie de l'activité journalière: \| Mode de saisie \| Valeur correspondante \| \| --- \| --- \| \| Normal (Classique) \| 0 \| \| Plages horaires (Avancé) \| 1 \| |
| Mode de saisie | Valeur correspondante |
| Normal (Classique) | 0 |
| Plages horaires (Avancé) | 1 |
| bModeSaisieActiviteJournaliere | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ModeSaisieActiviteJournaliere** (**true**) ou pas (**false**) |
| exonerationCode | string | Permet de définir une exonération (et une seule) : \| Type d'exonération \| Valeur correspondante \| \| --- \| --- \| \| Apprentis (loi de 1979) \| 01 \| \| Apprentis (loi de 1987) \| 02 \| \| Apprentis Secteur public (loi de 1992) \| 03 \| \| Contrat emploi solidarité \| 11 \| \| Contrat d'accès à l'emploi (Outre Mer) \| 16 \| \| Créateur d'entreprise \| 17 \| \| 'Embauche du 1er au 50ème salarié (zrr/zru) \| 19 \| \| 'Associations intermédiaires \| 23 \| \| 'Structures agréées au titre de l'aide sociale \| 24 \| \| 'Entreprises et associations d'aide à domicile \| 26 \| \| Zones franches urbaines (zfu) \| 27 \| \| Zones de restructuration de la défense \| 28 \| \| Réduction des cotisations patronales dite 'réduction fillon' \| 33 \| \| Contrat d'accompagnement dans l'emploi \| 34 \| \| Contrat d'avenir \| 37 \| \| Contrat de professionnalisation \| 38 \| \| Entreprise innovante \| 39 \| \| Exonération de cotisations patronales LODEOM \| 40 \| \| Exonération de cotisations patronales LOPOM \| 42 \| \| Contrat pacte \| 51 \| \| Organismes d'intérêt général en zrr \| 52 \| \| Bassin d'emploi à redynamiser \| 53 \| \| Contrats aidés atelier/chantier d'insertion \| 55 \| \| Contrats aidés atelier/chantier d'insertion (secteur non marchand "PUBLIC") \| 56 \| \| Exonération totale CSG/CRDS sur revenus de remplacement (condition de ressources) \| 60 \| |
| Type d'exonération | Valeur correspondante |
| Apprentis (loi de 1979) | 01 |
| Apprentis (loi de 1987) | 02 |
| Apprentis Secteur public (loi de 1992) | 03 |
| Contrat emploi solidarité | 11 |
| Contrat d'accès à l'emploi (Outre Mer) | 16 |
| Créateur d'entreprise | 17 |
| 'Embauche du 1er au 50ème salarié (zrr/zru) | 19 |
| 'Associations intermédiaires | 23 |
| 'Structures agréées au titre de l'aide sociale | 24 |
| 'Entreprises et associations d'aide à domicile | 26 |
| Zones franches urbaines (zfu) | 27 |
| Zones de restructuration de la défense | 28 |
| Réduction des cotisations patronales dite 'réduction fillon' | 33 |
| Contrat d'accompagnement dans l'emploi | 34 |
| Contrat d'avenir | 37 |
| Contrat de professionnalisation | 38 |
| Entreprise innovante | 39 |
| Exonération de cotisations patronales LODEOM | 40 |
| Exonération de cotisations patronales LOPOM | 42 |
| Contrat pacte | 51 |
| Organismes d'intérêt général en zrr | 52 |
| Bassin d'emploi à redynamiser | 53 |
| Contrats aidés atelier/chantier d'insertion | 55 |
| Contrats aidés atelier/chantier d'insertion (secteur non marchand "PUBLIC") | 56 |
| Exonération totale CSG/CRDS sur revenus de remplacement (condition de ressources) | 60 |
| bExonerationCode | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ExonerationCode** (**true**) ou pas (**false**) |
| exonerationDebut | string(date) | Date de début de l'exonération de cotisation ***La date doit respecter ce format : AAAA-MM-JJ*** |
| bExonerationDebut | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ExonerationDebut** (**true**) ou pas (**false**) |
| exonerationFin | string(date) | Date de fin de l'exonération de cotisation ***La date doit respecter ce format : AAAA-MM-JJ*** |
| bExonerationFin | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ExonerationFin** (**true**) ou pas (**false**) |
| exonerationTaux | number(double) | Taux de l'exonération pour les exonérations qui nécessitent la saisie d'un taux |
| bExonerationTaux | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **ExonerationTaux** (**true**) ou pas (**false**) |
| titreTransportCode | string | Permet d'indiquer le titre de transport utilisé : \| Titre de transport \| Valeur correspondante \| \| --- \| --- \| \| Forfait mensuel Chronoplus Tout Public \| AGLOBASQUE1 \| \| Forfait mensuel Txik-Txak 28-65 ans \| AGLOBASQUE10 \| \| Forfait mensuel Txik-Txak 28-65 ans Solidaire \| AGLOBASQUE10.1 \| \| Forfait mensuel Txik-Txak 28-65 ans Solidaire + \| AGLOBASQUE10.2 \| \| Forfait annuel Txik-Txak 28-65 ans \| AGLOBASQUE11 \| \| Forfait annuel Txik-Txak 28-65 ans Solidaire \| AGLOBASQUE11.1 \| \| Forfait annuel Txik-Txak 28-65 ans Solidaire + \| AGLOBASQUE11.2 \| \| Forfait mensuel Txik-Txak + 65 ans \| AGLOBASQUE12 \| \| Forfait mensuel Txik-Txak + 65 ans Solidaire \| AGLOBASQUE12.1 \| \| Forfait mensuel Txik-Txak + 65 ans Solidaire + \| AGLOBASQUE12.2 \| \| Forfait annuel Txik-Txak + 65 ans \| AGLOBASQUE13 \| \| Forfait annuel Txik-Txak + 65 ans Solidaire \| AGLOBASQUE13.1 \| \| Forfait annuel Txik-Txak + 65 ans Solidaire + \| AGLOBASQUE13.2 \| \| Forfait mensuel Chronoplus Tout Public Eté (Juillet/Août) \| AGLOBASQUE2 \| \| Forfait annuel Chronoplus Tout Public \| AGLOBASQUE3 \| \| Forfait mensuel Chronoplus Jeune \| AGLOBASQUE4 \| \| Forfait annuel Chronoplus Jeune \| AGLOBASQUE5 \| \| Forfait mensuel Chronoplus Sénior \| AGLOBASQUE6 \| \| Forfait annuel Chronoplus Sénior \| AGLOBASQUE7 \| \| Forfait mensuel Txik-Txak - 28 ans \| AGLOBASQUE8 \| \| Forfait mensuel Txik-Txak - 28 ans Solidaire \| AGLOBASQUE8.1 \| \| Forfait mensuel Txik-Txak - 28 ans Solidaire + \| AGLOBASQUE8.2 \| \| Forfait annuel Txik-Txak - 28 ans \| AGLOBASQUE9 \| \| Forfait annuel Txik-Txak - 28 ans Solidaire et Solidaire + \| AGLOBASQUE9.1 \| \| Forfait annuel Jeune Plus (Etudiants - 26 ans) \| AIX1 \| \| Forfait annuel (voyageurs réguliers) \| AIX2 \| \| Forfait mensuel (voyageurs réguliers) \| AIX3 \| \| Forfait annuel Pass Intégral Aix-Marseille-Provence \| AIXMARSEILLE1 \| \| Forfait mensuel Pass Intégral Aix-Marseille-Provence \| AIXMARSEILLE1.1 \| \| Forfait mensuel Irigo 6-25 ans \| ANGERS1 \| \| Forfait annuel Irigo 6-25 ans 1 enfant \| ANGERS1.1 \| \| Forfait annuel Irigo 6-25 ans Hors Angers Loire Métropole \| ANGERS1.2 \| \| Forfait annuel Irigo 6-25 ans 2 enfants \| ANGERS1.3 \| \| Forfait annuel Irigo 6-25 ans 3 enfants et + \| ANGERS1.4 \| \| Forfait mensuel Irigo 26 ans et + \| ANGERS2 \| \| Forfait annuel Irigo 26 ans et + \| ANGERS2.1 \| \| Forfait mensuel Irigo Solidaire/CMU + 18 ans \| ANGERS3 \| \| Forfait annuel Irigo Solidaire/CMU + 18 ans \| ANGERS3.1 \| \| Forfait mensuel tarif réduit tout public \| ANGERS4 \| \| Forfait annuel tarif réduit tout public \| ANGERS4.1 \| \| Forfait annuel tarif réduit handicap \| ANGERS4.2 \| \| Forfait mensuel Irigo 26 ans et + prélèvement automatique \| ANGERS5 \| \| Forfait mensuel tarif réduit prélèvement automatique \| ANGERS6 \| \| Forfait mensuel - 18 ans \| ANGOULEME01 \| \| Forfait mensuel - 18 ans Tarif réduit \| ANGOULEME02 \| \| Forfait mensuel 18/25 ans \| ANGOULEME03 \| \| Forfait mensuel 26 ans et + \| ANGOULEME04 \| \| Forfait annuel 10 mois - 18 ans \| ANGOULEME10 \| \| Forfait annuel 10 mois - 18 ans Tarif réduit \| ANGOULEME11 \| \| Forfait annuel 10 mois 18/25 ans \| ANGOULEME12 \| \| Forfait annuel 10 mois PA - 18 ans \| ANGOULEME13 \| \| Forfait annuel 10 mois PA - 18 ans Tarif réduit \| ANGOULEME14 \| \| Forfait annuel 10 mois PA 18/25 ans \| ANGOULEME15 \| \| Forfait annuel 12 mois - 18 ans \| ANGOULEME20 \| \| Forfait annuel 12 mois - 18 ans Tarif réduit \| ANGOULEME21 \| \| Forfait annuel 12 mois 18/25 ans \| ANGOULEME22 \| \| Forfait annuel 12 mois 26 ans et + \| ANGOULEME23 \| \| Forfait annuel 12 mois PA - 18 ans \| ANGOULEME24 \| \| Forfait annuel 12 mois PA - 18 ans Tarif réduit \| ANGOULEME25 \| \| Forfait annuel 12 mois PA 18/25 ans \| ANGOULEME26 \| \| Forfait annuel 12 mois PA 26 ans et + \| ANGOULEME27 \| \| Abonnement Adulte mensuel \| ANNECY01 \| \| Abonnement Adulte annuel \| ANNECY02 \| \| Abonnement Liberté Domicile-Travail annuel \| ANNECY03 \| \| Abonnement Jeune mensuel - 26 ans \| ANNECY04 \| \| Abonnement Jeune annuel - 26 ans \| ANNECY05 \| \| Abonnement Jeune trimestriel - 26 ans \| ANNECY06 \| \| Abonnement Sénior mensuel \| ANNECY07 \| \| Abonnement Sénior annuel \| ANNECY08 \| \| Abonnement annuel Sénior Solidiare + 65 ans \| ANNECY09 \| \| Abonnement Adulte mensuel Solidaire \| ANNECY10 \| \| Abonnement Jeune annuel Solidaire \| ANNECY11 \| \| Abonnement Adulte annuel Solidaire \| ANNECY12 \| \| Forfait mensuel ATOUT Bus \| ATOUT1.1 \| \| Forfait annuel ATOUT Bus \| ATOUT1.2 \| \| Forfait mensuel ORIZO Pass Jeune -26 ans \| AVIGNON1.1 \| \| Forfait mensuel ORIZO Pass Liberté \| AVIGNON1.2 \| \| Forfait mensuel ORIZO Pass Sénior 65 ans et + \| AVIGNON1.3 \| \| Forfait annuel ORIZO Pass Jeune - 26 ans \| AVIGNON1.4 \| \| Forfait annuel ORIZO Pass Liberté \| AVIGNON1.5 \| \| Forfait annuel ORIZO Pass Sénior 65 ans et + \| AVIGNON1.6 \| \| Forfait mensuel ZOU Jeunes - 26 ans en formation - Zone 1 \| AVIGNON1.7 \| \| Forfait mensuel ZOU Tout public - Zone 1 \| AVIGNON1.8 \| \| Forfait annuel ZOU Jeunes - 26 ans en formation - Zone 1 \| AVIGNON9.1 \| \| Forfait annuel ZOU Tout public - Zone 1 \| AVIGNON9.2 \| \| Forfait mensuel ZOU Jeunes - 26 ans en formation - Zone 2 \| AVIGNON9.3 \| \| Forfait mensuel ZOU Tout public - Zone 2 \| AVIGNON9.4 \| \| Forfait annuel ZOU jeunes - 26 ans en formation - Zone 2 \| AVIGNON9.5 \| \| Forfait annuel ZOU Tout public - Zone 2 \| AVIGNON9.6 \| \| Forfait mensuel lignes GINKO Pass 4/17 (1er enfant) \| BESANC1 \| \| Forfait mensuel lignes GINKO Pass 15/25 ans \| BESANC10 \| \| Forfait annuel lignes GINKO Pass 15/25 ans \| BESANC11 \| \| Forfait mensuel lignes GINKO Pass PMR \| BESANC12 \| \| Forfait annuel lignes GINKO Pass PMR \| BESANC13 \| \| Forfait annuel lignes GINKO Pass Entreprise \| BESANC14 \| \| Forfait mensuel lignes GINKO Pass CSS \| BESANC15 \| \| Forfait annuel lignes Ginko VéloCité Pass Essentiel \| BESANC16 \| \| Forfait annuel lignes Ginko VéloCité Pass Confort \| BESANC17 \| \| Forfait annuel lignes Pass Ginko VéloParks \| BESANC18 \| \| Forfait mensuel lignes Pass Ginko VéloParks \| BESANC19 \| \| Forfait mensuel lignes GINKO Pass 4/17 (à partir du 2ème enfant) \| BESANC2 \| \| Forfait annuel lignes GINKO Pass 4/17 (1er enfant) \| BESANC3 \| \| Forfait annuel lignes GINKO Pass 4/17 (à partir du 2ème enfant) \| BESANC4 \| \| Forfait mensuel lignes GINKO Pass 18/25 \| BESANC5 \| \| Forfait annuel lignes GINKO Pass 18/25 \| BESANC6 \| \| Forfait mensuel lignes GINKO Pass Sésame \| BESANC7 \| \| Forfait annuel lignes GINKO Pass Sésame \| BESANC8 \| \| Forfait mensuel lignes GINKO Pass 18/25 tarif réduit \| BESANC9 \| \| Forfait annuel lignes GINKO Pass 18/25 tarif réduit \| BESANC91 \| \| Forfait mensuel lignes GINKO + 65 ans \| BESANC92 \| \| Forfait annuel lignes GINKO + 65 ans \| BESANC93 \| \| Forfait mensuel Pass Jeune pour 1 mois \| BORDEAUX1 \| \| Forfait mensuel Pass Jeune -30% \| BORDEAUX1.1 \| \| Forfait mensuel Pass Jeune -50% \| BORDEAUX1.2 \| \| Forfait mensuel Pass Jeune Annuel \| BORDEAUX2 \| \| Forfait mensuel Pass Jeune Annuel -30% \| BORDEAUX2.1 \| \| Forfait mensuel Pass Jeune Annuel -50% \| BORDEAUX2.2 \| \| Forfait mensuel Le Pass pour 1 mois \| BORDEAUX3 \| \| Forfait mensuel Le Pass -30% \| BORDEAUX3.1 \| \| Forfait mensuel Le Pass -50% \| BORDEAUX3.2 \| \| Forfait mensuel Le Pass Annuel \| BORDEAUX4 \| \| Forfait mensuel Le Pass Annuel -30% \| BORDEAUX4.1 \| \| Forfait mensuel Le Pass Annuel -50% \| BORDEAUX4.2 \| \| Forfait mensuel Pass Senior pour 1 mois \| BORDEAUX5 \| \| Forfait mensuel Pass Senior -30% \| BORDEAUX5.1 \| \| Forfait mensuel Pass Senior -50% \| BORDEAUX5.2 \| \| Forfait mensuel Pass Senior Annuel \| BORDEAUX6 \| \| Forfait mensuel Pass Senior Annuel -30% \| BORDEAUX6.1 \| \| Forfait mensuel Pass Senior Annuel -50% \| BORDEAUX6.2 \| \| Forfait mensuel TBM +10 abonnés \| BORDEAUX7 \| \| Forfait mensuel TBM +500 abonnés \| BORDEAUX8 \| \| Forfait mensuel TBM + Trains \| BORDEAUX9 \| \| Abonnement mensuel Mobigo \| BOURG01 \| \| Forfait mensuel Bibus Fréquence \| BREST1 \| \| Forfait mensuel Bibus Fréquence - 26 ans \| BREST2 \| \| Forfait mensuel Bibus Rytmo \| BREST3 \| \| Forfait mensuel Bibus Tempo \| BREST4 \| \| Forfait mensuel Bibus Tango \| BREST5 \| \| Forfait mensuel Bibus Rytmo - 26 ans \| BREST6 \| \| Forfait mensuel Bibus Tempo - 26 ans \| BREST7 \| \| Forfait mensuel Bibus Tango - 26 ans \| BREST8 \| \| Forfait annuel TWISTO 11-17 ans \| CAEN01 \| \| Forfait annuel TWISTO Scolaire \| CAEN02 \| \| Forfait annuel TWISTO 18-25 ans \| CAEN03 \| \| Forfait mensuel TWISTO 18-25 ans \| CAEN04 \| \| Forfait annuel TWISTO 26-64 ans \| CAEN05 \| \| Forfait mensuel TWISTO 26-64 ans \| CAEN06 \| \| Forfait annuel TWISTO Réduit \| CAEN07 \| \| Forfait mensuel TWISTO Réduit \| CAEN08 \| \| Forfait mensuel TWISTO Solidaire \| CAEN09 \| \| Forfait mensuel TWISTO 65 ans et + \| CAEN16 \| \| Forfait annuel TWISTO 65 ans et + \| CAEN17 \| \| Forfait mensuel TWISTO 11-17 ans \| CAEN18 \| \| Forfait mensuel Pass Liberté 31 jours (ex Croisette) \| CANNES1 \| \| Forfait mensuel Carte Azur \| CANNES2 \| \| Forfait annuel Pass Liberté \| CANNES3 \| \| Forfait mensuel Pass Jeune 31 jours \| CANNES4 \| \| Forfait annuel Pass Jeune \| CANNES5 \| \| Forfait annuel Pass Scolaire \| CANNES6 \| \| Forfait mensuel Chalons en Champagne SITAC tout public \| CHALONS01 \| \| Forfait annuel Chalons en Champagne SITAC tout public \| CHALONS02 \| \| Forfait mensuel Chalons en Champagne SITAC - 26 ans \| CHALONS03 \| \| Forfait annuel Chalons en Champagne SITAC - 26 ans \| CHALONS04 \| \| Forfait mensuel Chalons en Champagne SITAC + 65 ans \| CHALONS05 \| \| Forfait annuel Chalons en Champagne SITAC + 65 ans \| CHALONS06 \| \| Forfait mensuel Chalons en Champagne SITAC bénéficiaires CSS \| CHALONS07 \| \| Forfait annuel 28-64 ans \| CHARTRES1 \| \| Forfait annuel 65 ans et plus \| CHARTRES2 \| \| Forfait annuel moins de 28 ans \| CHARTRES3 \| \| Forfait mensuel 28-64 ans \| CHARTRES4 \| \| Forfait mensuel 65 ans et plus \| CHARTRES5 \| \| Forfait mensuel moins de 28 ans \| CHARTRES6 \| \| Forfait mensuel Tout Public \| CLERMONT1.1 \| \| Forfait mensuel - 26 ans \| CLERMONT1.2 \| \| Forfait mensuel PDM \| CLERMONT1.3 \| \| Forfait mensuel Solidaire -60 % \| CLERMONT1.4 \| \| Forfait mensuel Solidaire -80 % \| CLERMONT1.5 \| \| Forfait mensuel Solidaire -92 % \| CLERMONT1.6 \| \| Forfait annuel Tout Public \| CLERMONT2.1 \| \| Forfait annuel - 26 ans \| CLERMONT2.2 \| \| Forfait annuel PDM \| CLERMONT2.3 \| \| Combiné TER + T2C mensuel Jeune (- de 26 ans) \| CLERMONT3.1 \| \| Combiné TER + T2C mensuel \| CLERMONT3.2 \| \| Corse Zone 1 \| CORSEZ1 \| \| Corse Zone 2 \| CORSEZ2 \| \| Corse Zone 3 \| CORSEZ3 \| \| Forfait mensuel QF 550-450 pour les 26ans et + \| COTENTIN01 \| \| Forfait mensuel QF 650-550 pour les 26ans et + \| COTENTIN01.1 \| \| Forfait mensuel QF +650 pour les 26ans et + \| COTENTIN01.2 \| \| Forfait mensuel QF 550-450 pour les - De 26ans \| COTENTIN02 \| \| Forfait mensuel QF 650-550 pour les - De 26ans \| COTENTIN02.1 \| \| Forfait mensuel QF +650 pour les - De 26ans \| COTENTIN02.2 \| \| Forfait annuel QF 550-450 pour les 26ans et + \| COTENTIN03 \| \| Forfait annuel QF 650-550 pour les 26ans et + \| COTENTIN03.1 \| \| Forfait annuel QF 650+ pour les 26ans et + \| COTENTIN03.2 \| \| Forfait annuel QF 550-450 pour les - De 26ans \| COTENTIN04 \| \| Forfait annuel QF 650-550 pour les - De 26ans \| COTENTIN04.1 \| \| Forfait annuel QF 650+ pour les - De 26ans \| COTENTIN04.2 \| \| Forfait mensuel Tan Mensuel \| DEUXSEV1 \| \| Forfait mensuel Intermodale TAN + RDS \| DEUXSEV2 \| \| Forfait mensuel Tan Scolaire \| DEUXSEV3 \| \| Forfait mensuel Tan Etudiant \| DEUXSEV4 \| \| Forfait mensuel TanLib Vélo \| DEUXSEV5 \| \| Forfait annuel TanLib Vélo \| DEUXSEV6 \| \| Forfait mensuel TanLib Vélo étudiant \| DEUXSEV7 \| \| Forfait annuel TanLib Vélo étudiant \| DEUXSEV8 \| \| Forfait mensuel PASS 18/25 \| DIJON1 \| \| Forfait annuel PASS 18/25 12 mois \| DIJON2 \| \| Forfait mensuel PASS 26 et + \| DIJON3 \| \| Forfait annuel PASS 26 et + \| DIJON4 \| \| Forfait annuel PASS Pro \| DIJON5 \| \| Forfait mensuel DISTRIPASS Junior \| DISTRI1.1 \| \| Forfait annuel DISTRIPASS Junior \| DISTRI1.2 \| \| Forfait mensuel DISTRIPASS Adulte \| DISTRI2.1 \| \| Forfait annuel DISTRIPASS Adulte \| DISTRI2.2 \| \| Forfait mensuel DISTRIPASS Senior \| DISTRI3.1 \| \| Forfait annuel DISTRIPASS Senior \| DISTRI3.2 \| \| Forfait mensuel \| EVREUX1 \| \| Forfait mensuel CMU \| EVREUX2 \| \| Forfait annuel \| EVREUX3 \| \| Forfait annuel Solidaire Tr1 \| EVREUX4 \| \| Forfait annuel Solidaire Tr2 \| EVREUX5 \| \| Forfait annuel Solidaire Tr3 \| EVREUX6 \| \| Forfait annuel M'Pro (Salariés) \| GRENOBLE1 \| \| Forfait annuel Pastel B Mréso \| GRENOBLE10 \| \| Forfait mensuel Pastel C Mréso \| GRENOBLE11 \| \| Forfait annuel Pastel C Mréso \| GRENOBLE12 \| \| Forfait mensuel Pastel D Mréso \| GRENOBLE13 \| \| Forfait annuel Pastel D Mréso \| GRENOBLE14 \| \| Forfait mensuel Pastel A intra Grésivaudan Mréso \| GRENOBLE15 \| \| Forfait annuel Pastel A intra Grésivaudan Mréso \| GRENOBLE16 \| \| Forfait mensuel Pastel B intra Grésivaudan Mréso \| GRENOBLE17 \| \| Forfait annuel Pastel B intra Grésivaudan Mréso \| GRENOBLE18 \| \| Forfait mensuel Pastel C intra Grésivaudan Mréso \| GRENOBLE19 \| \| Forfait annuel Tout Public : 18 à 64 ans \| GRENOBLE2 \| \| Forfait annuel Pastel C intra Grésivaudan Mréso \| GRENOBLE20 \| \| Forfait annuel Pastel D intra Grésivaudan Mréso \| GRENOBLE22 \| \| Forfait mensuel Pastel D intra Grésivaudan Mréso \| GRENOBLE23 \| \| Forfait annuel Tout Public : 18 à 25 ans \| GRENOBLE3 \| \| Forfait mensuel Tout Public : 18 à 64 ans \| GRENOBLE4 \| \| Forfait mensuel Tout Public : 18 à 25 ans \| GRENOBLE5 \| \| Forfait annuel PDE (Salariés) \| GRENOBLE6 \| \| Forfait mensuel Pastel A Mréso \| GRENOBLE7 \| \| Forfait annuel Pastel A Mréso \| GRENOBLE8 \| \| Forfait mensuel Pastel B Mréso \| GRENOBLE9 \| \| Forfait mensuel LIGNES URBAINES RCT illimité (Cayenne) \| GUYANE1 \| \| Forfait mensuel LIGNES URBAINES RCT illimité -25 ans (Cayenne) \| GUYANE2 \| \| Forfait mensuel pour tous Lia \| HAVRE1 \| \| Forfait mensuel pour tous + Lia \| HAVRE2 \| \| Forfait mensuel -20 ans/étudiant Lia \| HAVRE3 \| \| Forfait mensuel 1/2 tarif Lia \| HAVRE4 \| \| Forfait mensuel Solidaire Lia \| HAVRE5 \| \| Forfait annuel pour tous/mois Lia \| HAVRE6 \| \| Forfait annuel -20 ans/étudiant /mois Lia \| HAVRE7 \| \| Forfait annuel 1/2 tarif/mois Lia \| HAVRE8 \| \| Forfait 'IMAGINE R' Zones 1 - 2 \| IMAGINER.1.2 \| \| Forfait 'IMAGINE R' Zones 1 - 3 \| IMAGINER.1.3 \| \| Forfait 'IMAGINE R' Zones 1 - 4 \| IMAGINER.1.4 \| \| Forfait 'IMAGINE R' Zones 1 - 5 \| IMAGINER.1.5 \| \| Forfait 'IMAGINE R' Zones 2 - 3 \| IMAGINER.2.3 \| \| Forfait 'IMAGINE R' Zones 2 - 4 \| IMAGINER.2.4 \| \| Forfait 'IMAGINE R' Zones 2 - 5 \| IMAGINER.2.5 \| \| Forfait 'IMAGINE R' Zones 3 - 4 \| IMAGINER.3.4 \| \| Forfait 'IMAGINE R' Zones 3 - 5 \| IMAGINER.3.5 \| \| Forfait 'IMAGINE R' Zones 4 - 5 \| IMAGINER.4.5 \| \| Forfait 'IMAGINE R' Toutes Zones \| IMAGINER.4TZ \| \| Forfait IMAGINE R' Toutes Zones avec Frais de Dossier \| IMAGINER.4TZFD \| \| Forfait 'IMAGINE R' Etudiant zones 1 - 5 toutes zones \| IMAGINER.ETUD \| \| Forfait 'IMAGINE R' MENSUEL Toutes Zones \| IMAGMOIS.4TZ \| \| Forfait annuel NAVIGO Zones 1 - 2 \| INTEGRAL.1.2 \| \| Forfait annuel NAVIGO Zones 1 - 3 \| INTEGRAL.1.3 \| \| Forfait annuel NAVIGO Zones 1 - 4 \| INTEGRAL.1.4 \| \| Forfait annuel NAVIGO Zones 1 - 5 \| INTEGRAL.1.5 \| \| Forfait annuel NAVIGO Zones 2 - 3 \| INTEGRAL.2.3 \| \| Forfait annuel NAVIGO Zones 2 - 4 \| INTEGRAL.2.4 \| \| Forfait annuel NAVIGO Zones 2 - 5 \| INTEGRAL.2.5 \| \| Forfait annuel NAVIGO Zones 3 - 4 \| INTEGRAL.3.4 \| \| Forfait annuel NAVIGO Zones 3 - 5 \| INTEGRAL.3.5 \| \| Forfait annuel NAVIGO Zones 4 - 5 \| INTEGRAL.4.5 \| \| Forfait annuel NAVIGO Toutes Zones \| INTEGRAL.TZ \| \| Forfait 30 Jours LeCar Aix-Marseille Jeune \| LECARAIXMARSEILLE1 \| \| Forfait annuel LeCar Aix-Marseille Jeune \| LECARAIXMARSEILLE2 \| \| Forfait mensuel 4/25 ans & 65 ans et plus \| LILLE1 \| \| Forfait mensuel 4/25 ans & 65 ans et plus - quotient familial 3 \| LILLE10 \| \| Forfait annuel 4/25 ans & 65 ans et plus - quotient familial 3 \| LILLE11 \| \| Forfait mensuel 65 ans et plus CSS/AME \| LILLE12 \| \| Forfait mensuel 65 ans et plus QF0 \| LILLE13 \| \| Forfait mensuel 26/64 ans - quotient familial 1 \| LILLE14 \| \| Forfait annuel 26/64 ans - quotient familial 1 \| LILLE15 \| \| Forfait mensuel 26/64 ans - quotient familial 2 \| LILLE16 \| \| Forfait annuel 26/64 ans - quotient familial 2 \| LILLE17 \| \| Forfait mensuel 26/64 ans - quotient familial 3 \| LILLE18 \| \| Forfait annuel 26/64 ans - quotient familial 3 \| LILLE19 \| \| Forfait mensuel 26/64 ans \| LILLE2 \| \| Forfait mensuel 26/64 ans CSS/AME \| LILLE20 \| \| Forfait mensuel Permanent 26/64 ans \| LILLE3 \| \| Forfait mensuel Permanent 4/25 ans & 65 ans et plus \| LILLE4 \| \| Forfait mensuel 4/25 ans CSS/AME \| LILLE5 \| \| Forfait mensuel 4/25 ans & 65 ans et plus - quotient familial 1 \| LILLE6 \| \| Forfait annuel 4/25 ans & 65 ans et plus - quotient familial 1 \| LILLE7 \| \| Forfait mensuel 4/25 ans & 65 ans et plus - quotient familial 2 \| LILLE8 \| \| Forfait annuel 4/25 ans & 65 ans et plus - quotient familial 2 \| LILLE9 \| \| Forfait annuel TCL - 18 ans 1 enf transp \| LIMOGES01 \| \| Forfait annuel TCL - 18 ans 2 enf transp \| LIMOGES02 \| \| Forfait annuel TCL - 18 ans 3 enf et + transp \| LIMOGES03 \| \| Forfait mensuel TCL - 18 ans 1 enf transp \| LIMOGES04 \| \| Forfait mensuel TCL - 18 ans 2 enf transp \| LIMOGES05 \| \| Forfait mensuel TCL - 18 ans 3 enf et + transp \| LIMOGES06 \| \| Forfait annuel TCL - 26 ans \| LIMOGES10 \| \| Forfait mensuel TCL - 26 ans \| LIMOGES11 \| \| Forfait annuel TCL 26 ans et + \| LIMOGES20 \| \| Forfait mensuel TCL 26 ans et + \| LIMOGES21 \| \| Forfait annuel TCL Sésame \| LIMOGES30 \| \| Forfait annuel TCL 60 ans et + \| LIMOGES40 \| \| Forfait mensuel TCL 60 ans et + \| LIMOGES41 \| \| Forfait mensuel TCL Tarif Préférentiel \| LIMOGES50 \| \| Abonnement annuel de 16 à 25 ans \| LORIENTANNU16A25ANS \| \| Abonnement annuel plus de 25 ans \| LORIENTANNUEL+25ANS \| \| Abonnement annuel plus de 65 ans \| LORIENTANNUEL+65ANS \| \| Abonnement annuel moins de 16 ans \| LORIENTANNUEL-16ANS \| \| Abonnement annuel multipass \| LORIENTANNUMULTIPAS \| \| Abonnement mensuel plus de 25 ans \| LORIENTMENSU+25 \| \| Abonnement mensuel plus de 65 ans \| LORIENTMENSU+65 \| \| Abonnement mensuel moins de 16 ans \| LORIENTMENSU-16 \| \| Abonnement mensuel 16 à 25 ans \| LORIENTMENSU16A25 \| \| Forfait annuel Vélo'V 1 An \| LYON0 \| \| Forfait annuel Vélo'V PLUS 1An \| LYON0.1 \| \| Forfait annuel Vélo'V 1 An Jeunes \| LYON00 \| \| Forfait annuel Campus \| LYON01 \| \| Forfait mensuel City Pass \| LYON1 \| \| Forfait mensuel Pass Partout S \| LYON10 \| \| Forfait mensuel Combiné TER+TCL+TAG \| LYON11 \| \| Forfait mensuel Isère Pass 2 zones \| LYON12 \| \| Forfait mensuel Isère Pass 3 zones \| LYON13 \| \| Forfait mensuel Rhône Pass Campus \| LYON14 \| \| Forfait mensuel Isère Pass Campus 2 zones \| LYON15 \| \| Forfait mensuel Isère Pass Campus 3 zones \| LYON16 \| \| Forfait mensuel Combiné TER+TCL+TAG Campus \| LYON17 \| \| Forfait mensuel T-Libr Etudiants TER+TCL \| LYON18 \| \| Forfait mensuel TER+TCL+LVA/RUBAN \| LYON19 \| \| Forfait mensuel Pass Partout \| LYON2 \| \| Forfait mensuel Pass 2 Partout - TCL \| LYON20 \| \| Forfait mensuel City Pass Cigogne \| LYON21 \| \| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) Zones 1 et 2 \| LYON22 \| \| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) 2 zones voisines (sauf zone 1) \| LYON22.1 \| \| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) Toutes zones (sauf zone 1) \| LYON22.2 \| \| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) Toutes Zones \| LYON22.3 \| \| Forfait mensuel TCL 11/17 ans Zones 1 et 2 \| LYON23 \| \| Forfait mensuel TCL 11/17 ans 2 zones voisines (sauf Zone 1) \| LYON23.1 \| \| Forfait mensuel TCL 11/17 ans Toutes zones sauf Zone 1 \| LYON23.2 \| \| Forfait mensuel TCL 11/17 ans Toutes Zones \| LYON23.3 \| \| Forfait annuel TCL 11/17 ans Zones 1 et 2 \| LYON24 \| \| Forfait annuel TCL 11/17 ans 2 zones voisines (sauf zone 1) \| LYON24.1 \| \| Forfait annuel TCL 11/17 ans Toutes Zones sauf Zone 1 \| LYON24.2 \| \| Forfait annuel TCL 11/17 ans Toutes Zones \| LYON24.3 \| \| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) Zones 1 et 2 \| LYON25 \| \| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) 2 zones voisines (sauf Zone 1) \| LYON25.1 \| \| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) Toutes Zones sauf Zone 1 \| LYON25.2 \| \| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) Toutes Zones \| LYON25.3 \| \| Forfait mensuel TCL 18/25 ans Zones 1 et 2 \| LYON26 \| \| Forfait mensuel TCL 18/25 ans 2 zones voisines (sauf Zone 1) \| LYON26.1 \| \| Forfait mensuel TCL 18/25 ans Toutes Zones sauf Zone 1 \| LYON26.2 \| \| Forfait mensuel TCL 18/25 ans Toutes Zones \| LYON26.3 \| \| Forfait annuel TCL 18/25 ans Zones 1 et 2 \| LYON27 \| \| Forfait annuel TCL 18/25 ans 2 zones voisines (sauf Zone 1) \| LYON27.1 \| \| Forfait annuel TCL 18/25 ans Toutes Zones sauf Zone 1 \| LYON27.2 \| \| Forfait annuel TCL 18/25 ans Toutes Zones \| LYON27.3 \| \| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) Zones 1 et 2 \| LYON28 \| \| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) 2 zones voisines (sauf Zone 1) \| LYON28.1 \| \| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) Toutes Zones sauf Zone 1 \| LYON28.2 \| \| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) Toutes Zones \| LYON28.3 \| \| Forfait mensuel TCL 26/64 ans Zones 1 et 2 \| LYON29 \| \| Forfait mensuel TCL 26/64 ans 2 zones voisines (sauf Zone 1) \| LYON29.1 \| \| Forfait mensuel TCL 26/64 ans Toutes Zones sauf Zone 1 \| LYON29.2 \| \| Forfait mensuel TCL 26/64 ans Toutes Zones \| LYON29.3 \| \| Forfait mensuel City Pass Jeunes \| LYON3 \| \| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) Zones 1 et 2 \| LYON30 \| \| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) 2 zones voisines (sauf Zone 1) \| LYON30.1 \| \| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) Toutes Zones sauf Zone 1 \| LYON30.2 \| \| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) Toutes Zones \| LYON30.3 \| \| Forfait mensuel TCL Etudiants 26/27 ans Zones 1 et 2 \| LYON31 \| \| Forfait mensuel TCL Etudiants 26/27 ans 2 zones voisines (sauf Zone 1) \| LYON31.1 \| \| Forfait mensuel TCL Etudiants 26/27 ans Toutes Zones sauf Zone 1 \| LYON31.2 \| \| Forfait mensuel TCL Etudiants 26/27 ans Toutes Zones \| LYON31.3 \| \| Forfait annuel TCL Etudiants 26/27 ans Zones 1 et 2 \| LYON32 \| \| Forfait annuel TCL Etudiants 26/27 ans 2 zones voisines (sauf Zone 1) \| LYON32.1 \| \| Forfait annuel TCL Etudiants 26/27 ans Toutes Zones sauf Zone 1 \| LYON32.2 \| \| Forfait annuel TCL Etudiants 26/27 ans Toutes Zones \| LYON32.3 \| \| Forfait mensuel illimité TCL Retraités (1 mois offert) Zones 1 et 2 \| LYON33 \| \| Forfait mensuel illimité TCL Retraités (1 mois offert) 2 zones voisines (sauf Zone 1) \| LYON33.1 \| \| Forfait mensuel illimité TCL Retraités (1 mois offert) Toutes Zones sauf Zone 1 \| LYON33.2 \| \| Forfait mensuel illimité TCL Retraités (1 mois offert) Toutes Zones \| LYON33.3 \| \| Forfait mensuel TCL Retraités Zones 1 et 2 \| LYON34 \| \| Forfait mensuel TCL Retraités 2 zones voisines (sauf Zone 1) \| LYON34.1 \| \| Forfait mensuel TCL Retraités Toutes Zones sauf Zone 1 \| LYON34.2 \| \| Forfait mensuel TCL Retraités Toutes Zones \| LYON34.3 \| \| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) Zones 1 et 2 \| LYON35 \| \| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) 2 zones voisines (sauf Zone 1) \| LYON35.1 \| \| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) Toutes Zones sauf Zone 1 \| LYON35.2 \| \| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) Toutes Zones \| LYON35.3 \| \| Forfait mensuel TCL 65 ans et + Zones 1 et 2 \| LYON36 \| \| Forfait mensuel TCL 65 ans et + 2 zones voisines (sauf Zone 1) \| LYON36.1 \| \| Forfait mensuel TCL 65 ans et + Toutes Zones sauf Zone 1 \| LYON36.2 \| \| Forfait mensuel TCL 65 ans et + Toutes Zones \| LYON36.3 \| \| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) Zones 1 et 2 \| LYON37 \| \| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) 2 zones voisines (sauf Zone 1) \| LYON37.1 \| \| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) Toutes Zones sauf Zone 1 \| LYON37.2 \| \| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) Toutes Zones \| LYON37.3 \| \| Forfait mensuel TCL Familles nombreuses Zones 1 et 2 \| LYON38 \| \| Forfait mensuel TCL Familles nombreuses 2 zones voisines (sauf Zone 1) \| LYON38.1 \| \| Forfait mensuel TCL Familles nombreuses Toutes Zones sauf Zone 1 \| LYON38.2 \| \| Forfait mensuel TCL Familles nombreuses Toutes Zones \| LYON38.3 \| \| Forfait mensuel Vélo'V PLUS \| LYON39 \| \| Forfait mensuel T-Libr TER+TCL \| LYON4 \| \| Forfait mensuel illimité TCL Solidaire 1 (1 mois offert) \| LYON40 \| \| Forfait mensuel illimité TCL Solidaire 1 (2 mois offerts) \| LYON41 \| \| Forfait mensuel TCL Solidaire 1 \| LYON42 \| \| Forfait annuel TCL Solidaire 1 \| LYON43 \| \| Forfait mensuel illimité TCL Solidaire 2 (1 mois offert) \| LYON44 \| \| Forfait mensuel TCL Solidaire 2 \| LYON45 \| \| Forfait mensuel illimité TCL+Cars du Rhône+Libellule tarif réduit (2 mois offerts) \| LYON46 \| \| Forfait mensuel TCL+Cars du Rhône+Libellule tarif réduit \| LYON47 \| \| Forfait annuel TCL+Cars du Rhône+Libellule tarif réduit \| LYON48 \| \| Forfait mensuel Rhône Pass (Cars du Rhône + TCL) \| LYON5 \| \| Forfait mensuel Rhône Primo (Cars du Rhône) \| LYON51 \| \| Forfait mensuel illimité TCL+Cars du Rhône+Libellule 26/65 ans (2 mois offerts) \| LYON52 \| \| Forfait mensuel TCL+Cars du Rhône+Libellule 26/65 ans \| LYON53 \| \| Forfait annuel TCL+Cars du Rhône+Libellule 26/65 ans \| LYON54 \| \| Forfait mensuel TCL+Cars du Rhône+Libellule Familles nombreuses (2 mois offerts) \| LYON55 \| \| Forfait mensuel TCL+Cars du Rhône+Libellule Familles nombreuses \| LYON56 \| \| Forfait annuel TCL+Cars du Rhône+Libellule Familles nombreuses \| LYON57 \| \| Forfait mensuel Combiné TCL+TER \| LYON58 \| \| Forfait mensuel Etudiants TER+TCL+LVA/RUBAN \| LYON59 \| \| Forfait mensuel City Pass Age d'Or \| LYON6 \| \| Forfait mensuel Etudiants TCL+TER+STAS \| LYON61 \| \| Forfait mensuel TCL+TER+STAS \| LYON62 \| \| Forfait mensuel Etudiants TCL+TER+LVA+RUBAN \| LYON63 \| \| Forfait mensuel TCL+TER+LVA+RUBAN \| LYON64 \| \| Forfait mensuel Etudiants TCL+TER+STAS+LVA+RUBAN \| LYON65 \| \| Forfait mensuel TCL+TER+STAS+LVA+RUBAN \| LYON66 \| \| Forfait mensuel T-Libr TER+TCL - 26 ans \| LYON67 \| \| Forfait mensuel Combiné TER+TCL+TAG - 26 ans \| LYON68 \| \| Forfait mensuel TER+TCL+LVA - 26 ans \| LYON69 \| \| Forfait mensuel Campus \| LYON7 \| \| Forfait mensuel TCL+TER+STAS - 26 ans \| LYON71 \| \| Forfait mensuel TCL+TER+LVA+RUBAN -26 ans \| LYON72 \| \| Forfait mensuel TCL+TER+STAS+LVA+RUBAN - 26 ans \| LYON73 \| \| Forfait mensuel TCL+TER+LVA - 26 ans \| LYON74 \| \| Forfait mensuel TCL+TER+RUBAN - 26 ans \| LYON75 \| \| Forfait mensuel TCL+TER+COTIERE \| LYON76 \| \| Forfait mensuel TCL+TER+COTIERE -26 ans \| LYON77 \| \| Forfait mensuel illimité TCL+Cars du Rhône+Libellule 65 ans et + et retraités 60 ans et + \| LYON78 \| \| Forfait annuel illimité TCL+Cars du Rhône+Libellule 65 ans et + et retraités 60 ans et + \| LYON79 \| \| Forfait mensuel Pass Partout Jeunes \| LYON8 \| \| Forfait mensuel Cigogne \| LYON9 \| \| Forfait annuel Moovéa Setram illico Scolaires \| MANS1 \| \| Forfait 30 jours Moovéa Setram Illico Scolaires \| MANS11 \| \| Forfait annuel Moovéa Setram illico Etudiants \| MANS2 \| \| Forfait 30 jours Moovéa Setram Illico Etudiants \| MANS21 \| \| Forfait annuel Moovéa Setram illico Salariés \| MANS3 \| \| Forfait 30 jours Moovéa Setram Illico Salariés \| MANS31 \| \| Forfait annuel Moovéa Setram illico tout public \| MANS4 \| \| Forfait 30 jours Moovéa Setram Illico Tout Public \| MANS41 \| \| Forfait annuel Moovéa Setram illico Seniors \| MANS5 \| \| Forfait 30 jours Moovéa Setram Illico Seniors \| MANS51 \| \| Forfait annuel Moovéa Azur 1 Handicapés \| MANS6 \| \| Forfait mensuel 11-25 ans Setram \| MANS7 \| \| Forfait annuel 11-25 ans Setram \| MANS71 \| \| Forfait mensuel Vélo classique habitants/Salariés Le Mans métropole \| MANS8 \| \| Forfait annuel Vélo classique habitants/Salariés Le Mans métropole \| MANS81 \| \| Forfait mensuel Vélo classique Setram \| MANS82 \| \| Forfait annuel Vélo classique Setram \| MANS83 \| \| Forfait mensuel Vélo électrique salarié hors habitant Le Mans \| MANS84 \| \| Forfait annuel Vélo électrique salarié hors habitant Le Mans \| MANS85 \| \| Forfait mensuel Vélo électrique Setram \| MANS86 \| \| Forfait annuel Vélo électrique Setram \| MANS87 \| \| Forfait mensuel Vélo électrique habitants Le Mans \| MANS88 \| \| Forfait annuel Vélo électrique habitants Le Mans \| MANS89 \| \| Forfait Trimestriel Vélo électrique habitants Le Mans \| MANS90 \| \| Forfait Trimestriel Vélo électrique salarié hors habitants Le Mans \| MANS91 \| \| Forfait Trimestriel Vélo électrique Setram \| MANS92 \| \| Forfait annuel Pass Métropôle Aix-Marseille-Provence Etudiant/Sénior/Solidaire \| METROPOLEAMP1 \| \| Forfait annuel Pass Métropôle Aix-Marseille-Provence Tout public \| METROPOLEAMP1.1 \| \| Forfait mensuel Pass Métropôle Aix-Marseille-Provence Etudiant/Sénior \| METROPOLEAMP2 \| \| Forfait mensuel Pass Métropôle Aix-Marseille-Provence Tout public \| METROPOLEAMP2.1 \| \| Forfait mensuel Pass Métropôle Aix-Marseille-Provence Solidaire \| METROPOLEAMP2.2 \| \| Forfait mensuel 18-26 ans \| METZ1 \| \| Forfait mensuel Vermeil 65 ans et + Permanent \| METZ10 \| \| Forfait mensuel Vermeil 65 ans et + \| METZ11 \| \| Forfait mensuel 27-64 ans liberté mensuel \| METZ2 \| \| Forfait mensuel 27-64 ans liberté permanent \| METZ3 \| \| Forfait annuel 18-26 ans \| METZ4 \| \| Forfait mensuel 18-26 ans permanent \| METZ5 \| \| Forfait mensuel 18-26 ans boursier \| METZ6 \| \| Forfait annuel 18-26 ans boursier \| METZ7 \| \| Forfait mensuel accompagnants personne à mobilité réduite \| METZ8 \| \| Forfait mensuel réduit bénéficiaires CSS et AME \| METZ9 \| \| Forfait mensuel YAKA de 4 à 26 ans (Agglomération Montargoise) \| MONTARGIS01 \| \| Forfait annuel YAKA de 4 à 26 ans (Agglomération Montargoise) \| MONTARGIS02 \| \| Forfait mensuel ACTIVA de 27 à 64 ans ou hors Agglomération Montargoise \| MONTARGIS03 \| \| Forfait annuel ACTIVA de 27 à 64 ans ou hors Agglomération Montargoise \| MONTARGIS04 \| \| Forfait annuel SERENYS + 65 ans (Agglomération Montargoise) \| MONTARGIS05 \| \| Forfait mensuel SERENITY + 65 ans (Agglomération Montargoise) \| MONTARGIS06 \| \| Forfait annuel SERENITY + 65 ans (Agglomération Montargoise) \| MONTARGIS07 \| \| Forfait mensuel Evolity Fréquence (Tout public) \| MONTBELIARD01 \| \| Forfait mensuel Evolity Senior (60 ans et +) \| MONTBELIARD02 \| \| Forfait mensuel Evolity Boursier (- de 26 ans) \| MONTBELIARD03 \| \| Forfait mensuel Evolity Jeune (- de 26 ans) \| MONTBELIARD04 \| \| Forfait annuel Evolity (18 - 26 ans) \| MONTBELIARD05 \| \| Forfait mensuel Evolity Social \| MONTBELIARD06 \| \| Forfait annuel Evolity Accès \| MONTBELIARD07 \| \| Forfait mensuel Location vélo standard/pliant tarif plein \| MONTM01 \| \| Forfait mensuel Location vélo standard/pliant tarif réduit \| MONTM02 \| \| Forfait mensuel Location vélo à assistance électrique tarif plein \| MONTM03 \| \| Forfait mensuel Location vélo à assistance électrique tarif réduit \| MONTM04 \| \| Forfait mensuel Location vélo cargo tarif plein \| MONTM05 \| \| Forfait mensuel Location vélo cargo tarif réduit \| MONTM06 \| \| Forfait annuel Location vélo standard/pliant tarif plein \| MONTM07 \| \| Forfait annuel Location vélo standard/pliant tarif réduit \| MONTM08 \| \| Forfait mensuel EMMA pour tous \| MONTPELLIER1 \| \| Forfait mensuel EMMA pour tous résident Métropole \| MONTPELLIER11 \| \| Forfait mensuel EMMA PDE \| MONTPELLIER2 \| \| Forfait mensuel EMMA PDE résident Métropole \| MONTPELLIER21 \| \| Forfait mensuel MULTIMODAL \| MONTPELLIER3 \| \| Forfait mensuel EMMA jeunes \| MONTPELLIER4 \| \| Forfait mensuel EMMA jeunes résident Métropole \| MONTPELLIER41 \| \| Forfait mensuel 31 jours pour tous \| MONTPELLIER5 \| \| Forfait mensuel 31 jours pour tous résident Métropole \| MONTPELLIER51 \| \| Forfait annuel EMMA jeunes \| MONTPELLIER6 \| \| Forfait annuel EMMA jeunes résident Métropole \| MONTPELLIER61 \| \| Forfait annuel EMMA pour tous \| MONTPELLIER7 \| \| Forfait annuel EMMA pour tous résident Métropole \| MONTPELLIER71 \| \| Forfait annuel EMMA PDE \| MONTPELLIER8 \| \| Forfait annuel EMMA PDE résident Métropole \| MONTPELLIER81 \| \| Forfait mensuel 31 jours jeunes \| MONTPELLIER9 \| \| Forfait mensuel 31 jours jeunes résident Métropole \| MONTPELLIER91 \| \| Forfait mensuel Soléa - 26 ans \| MULHOUSE01 \| \| Forfait mensuel Soléa 26 - 64 ans \| MULHOUSE02 \| \| Forfait mensuel Soléa + 65 ans \| MULHOUSE03 \| \| Forfait mensual Soléa Joker \| MULHOUSE04 \| \| Forfait annuel Soléa - 26 ans \| MULHOUSE05 \| \| Forfait annuel Soléa 26 - 64 ans \| MULHOUSE06 \| \| Forfait annuel Soléa + 65 ans \| MULHOUSE07 \| \| Forfait mensuel STAN (Abonnement 31 jours) -26 ans ou étudiants \| NANCY1 \| \| Forfait mensuel STAN (Abonnement 31 jours) +26 ans \| NANCY2 \| \| Forfait mensuel STAN (Abonnement 31 jours) +65 ans \| NANCY3 \| \| Forfait mensuel STAN (Abonnement 31 jours) CMU \| NANCY4 \| \| Forfait mensuel STAN (Abonnement illimité) -26 ans ou étudiants \| NANCY5 \| \| Forfait mensuel STAN (Abonnement illimité) étudiant boursier \| NANCY6 \| \| Forfait mensuel STAN (Abonnement illimité) +26 ans \| NANCY7 \| \| Forfait mensuel STAN (Abonnement illimité) +65 ans \| NANCY8 \| \| Forfait mensuel STAN (Abonnement illimité) salarié \| NANCY9 \| \| Forfait mensuel KEOLIS MixCités Grand Public \| NANCYK1 \| \| Forfait mensuel KEOLIS MixCités - 26 ans \| NANCYK2 \| \| Forfait mensuel KEOLIS MixCités Solidarité \| NANCYK3 \| \| Forfait mensuel KEOLIS MixCités Flex + 26 ans \| NANCYK4 \| \| Forfait mensuel KEOLIS MixCités Flex - 26 ans \| NANCYK5 \| \| Forfait mensuel KEOLIS MixCités Flex - 26 ans Boursier \| NANCYK6 \| \| Forfait mensuel KEOLIS MixCités Flex Salariés \| NANCYK7 \| \| Forfait mensuel KEOLIS MixCités Flex Entreprises \| NANCYK8 \| \| Forfait mensuel Tan + de 60 ans \| NANTES0 \| \| Forfait mensuel Tan + de 26 ans \| NANTES1 \| \| Abonnement MonBicloo classique 3 mois \| NANTES10 \| \| Abonnement MonBicloo classique 9 mois \| NANTES11 \| \| Abonnement MonBicloo classique 1 an \| NANTES12 \| \| Abonnement MonBicloo classique 1 an Pack Mobilité \| NANTES13 \| \| Abonnement pour 1 mois - 18 ans \| NANTES14 \| \| Abonnement pour 1 mois - 26 ans \| NANTES15 \| \| Abonnement pour 1 mois + 26 ans \| NANTES16 \| \| Abonnement pour 1 mois + 60 ans \| NANTES17 \| \| Forfait mensuel Tan - de 26 ans \| NANTES2 \| \| Forfait mensuel Tan - de 18 ans \| NANTES3 \| \| Forfait annuel Formule illimitée Tan + de 26 ans \| NANTES4 \| \| Forfait annuel Formule illimitée Tan - de 26 ans \| NANTES5 \| \| Forfait annuel Formule illimitée Tan - de 18 ans \| NANTES6 \| \| Forfait mensuel Nantes 5 Zones SNCF \| NANTES7 \| \| Forfait annuel Formule illimitée Tan + de 60 ans \| NANTES8 \| \| Abonnement MonBicloo classique 1 mois \| NANTES9 \| \| Forfait annuel ALEOP Simple - de 25 ans \| NANTESALEOP1 \| \| Forfait annuel ALEOP Combiné - de 25 ans \| NANTESALEOP2 \| \| Forfait annuel ALEOP + de 26 ans \| NANTESALEOP3 \| \| Forfait mensuel ALEOP + de 26 ans \| NANTESALEOP4 \| \| Forfait annuel ALEOP - de 26 ans \| NANTESALEOP5 \| \| Forfait mensuel ALEOP - de 26 ans \| NANTESALEOP6 \| \| Forfait mensuel NAVIGO AME Zones 2 - 3 \| NAVIGO06.2.3 \| \| Forfait mensuel NAVIGO AME Zones 3 - 4 \| NAVIGO06.3.4 \| \| Forfait mensuel NAVIGO AME Zones 4 - 5 \| NAVIGO06.4.5 \| \| Forfait mensuel NAVIGO AME Toutes Zones \| NAVIGO06.TZ \| \| Forfait semaine NAVIGO Zones 2 - 3 \| NAVIGO07.2.3 \| \| Forfait semaine NAVIGO Zones 3 - 4 \| NAVIGO07.3.4 \| \| Forfait semaine NAVIGO Zones 4 - 5 \| NAVIGO07.4.5 \| \| Forfait semaine NAVIGO Toutes Zones \| NAVIGO07.TZ \| \| Forfait mensuel NAVIGO Zones 1 - 2 \| NAVIGO1.2 \| \| Forfait mensuel NAVIGO Zones 1 - 3 \| NAVIGO1.3 \| \| Forfait mensuel NAVIGO Zones 1 - 4 \| NAVIGO1.4 \| \| Forfait mensuel NAVIGO Zones 1 - 5 \| NAVIGO1.5 \| \| Forfait mensuel NAVIGO Zones 2 - 3 \| NAVIGO2.3 \| \| Forfait mensuel NAVIGO Zones 2 - 4 \| NAVIGO2.4 \| \| Forfait mensuel NAVIGO Zones 2 - 5 \| NAVIGO2.5 \| \| Forfait mensuel NAVIGO Zones 3 - 4 \| NAVIGO3.4 \| \| Forfait mensuel NAVIGO Zones 3 - 5 \| NAVIGO3.5 \| \| Forfait mensuel NAVIGO Zones 4 - 5 \| NAVIGO4.5 \| \| Forfait mensuel NAVIGO Toutes Zones \| NAVIGO4.TZ \| \| Forfait mensuel NAVIGO Solidarité Zones 1 - 2 \| NAVIGO5.1.2 \| \| Forfait mensuel NAVIGO Solidarité Zones 1 - 3 \| NAVIGO5.1.3 \| \| Forfait mensuel NAVIGO Solidarité Zones 1 - 4 \| NAVIGO5.1.4 \| \| Forfait mensuel NAVIGO Solidarité Zones 1 - 5 \| NAVIGO5.1.5 \| \| Forfait mensuel NAVIGO Solidarité Zones 2 - 3 \| NAVIGO5.2.3 \| \| Forfait mensuel NAVIGO Solidarité Zones 2 - 4 \| NAVIGO5.2.4 \| \| Forfait mensuel NAVIGO Solidarité Zones 2 - 5 \| NAVIGO5.2.5 \| \| Forfait mensuel NAVIGO Solidarité Zones 3 - 4 \| NAVIGO5.3.4 \| \| Forfait mensuel NAVIGO Solidarité Zones 3 - 5 \| NAVIGO5.3.5 \| \| Forfait mensuel NAVIGO Solidarité Zones 4 - 5 \| NAVIGO5.4.5 \| \| Forfait mensuel NAVIGO Solidarité Toutes Zones \| NAVIGO5.TZ \| \| Forfait mensuel NAVIGO Sénior Toutes Zones \| NAVIGO6.TZ \| \| Forfait annuel Skipper \| NAZAIRE01 \| \| Forfait annuel Campus \| NAZAIRE02 \| \| Forfait annuel Multipass \| NAZAIRE03 \| \| Forfait annuel Pass Entreprise \| NAZAIRE04 \| \| Forfait mensuel Skipper \| NAZAIRE11 \| \| Forfait mensuel Campus \| NAZAIRE12 \| \| Forfait mensuel Multipass \| NAZAIRE13 \| \| Forfait mensuel 18-25 ans \| NAZAIRE14 \| \| Forfait annuel 18-25 ans \| NAZAIRE15 \| \| Forfait mensuel 26-59 ans \| NAZAIRE16 \| \| Forfait annuel 26-59 ans \| NAZAIRE17 \| \| Forfait mensuel 60 ans et + \| NAZAIRE18 \| \| Forfait annuel 60ans et + \| NAZAIRE19 \| \| Forfait annuel Ligne d'Azur Etudiant \| NICE1 \| \| Forfait annuel Ligne d'Azur 26-64 ans \| NICE10 \| \| Forfait annuel Ligne d'Azur 65 ans & + \| NICE11 \| \| Forfait annuel Pass SudAzur Zone 4 \| NICE12 \| \| Forfait annuel Ligne d'Azur Salarié \| NICE2 \| \| Forfait annuel Ligne d'Azur Social \| NICE3 \| \| Forfait mensuel Ligne d'Azur Etudiant \| NICE4 \| \| Forfait mensuel Ligne d'Azur Salarié \| NICE5 \| \| Forfait mensuel Ligne d'Azur Social \| NICE6 \| \| Forfait annuel Carte Azur \| NICE7 \| \| Forfait mensuel Carte Azur \| NICE8 \| \| Forfait mensuel Ligne d'Azur 26-64 ans \| NICE9 \| \| Forfait mensuel Ligne d'Azur 65 ans & + \| NICE90 \| \| Forfait mensuel Pass SudAzur Zone 4 \| NICE91 \| \| Forfait mensuel ligne d'Azur -26 formule illimité \| NICE92 \| \| Forfait annuel Pass Salarié TANGO \| NIMES1 \| \| Forfait mensuel Pass Liberté TANGO \| NIMES2 \| \| Forfait annuel Pass Liberté TANGO \| NIMES3 \| \| Forfait mensuel Pass BANG TANGO \| NIMES4 \| \| Forfait annuel Pass BANG TANGO \| NIMES5 \| \| Forfait mensuel Pass ONDEA (Adultes + 26ans) \| ONDEA1 \| \| Forfait mensuel OndéSynchro – 26 ans \| ONDEA10 \| \| Forfait mensuel Ondésynchro + 26 ans \| ONDEA11 \| \| Forfait annuel Pass ONDEA étudiant \| ONDEA12 \| \| Forfait annuel OndéSynchro - 26 ans ou + 65 ans \| ONDEA13 \| \| Forfait annuel OndéSynchro + 26 ans – 64 ans \| ONDEA14 \| \| Forfait mensuel Pass ONDEA (Jeunes - 26ans) \| ONDEA2 \| \| Forfait mensuel Titre solidaire \| ONDEA3 \| \| Forfait annuel Pass ONDEA (Adultes + 26ans) \| ONDEA4 \| \| Forfait annuel Pass Senior \| ONDEA5 \| \| Forfait annuel Pass Mobilité \| ONDEA6 \| \| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 4 \| ONDEA7 \| \| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 1 \| ONDEA7.1 \| \| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 2 \| ONDEA7.2 \| \| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 3 \| ONDEA7.3 \| \| Forfait mensuel Pass ONDEA abonnés TER + 26 ans \| ONDEA8 \| \| Forfait mensuel Pass ONDEA abonnés TER - 26 ans \| ONDEA9 \| \| Forfait mensuel TAO Tout Public \| ORLEANS1 \| \| Forfait annuel TAO Quotient Familial 1 \| ORLEANS10 \| \| Forfait mensuel TAO Quotient Familial 2 \| ORLEANS11 \| \| Forfait annuel TAO Quotient Familial 2 \| ORLEANS12 \| \| Forfait annuel TAO Tout Public \| ORLEANS2 \| \| Forfait mensuel TAO Jeune \| ORLEANS3 \| \| Forfait annuel TAO Jeune \| ORLEANS4 \| \| Forfait mensuel TAO Jeune - Etudiant/Apprenti \| ORLEANS5 \| \| Forfait annuel TAO Jeune - Etudiant/Apprenti \| ORLEANS6 \| \| Forfait mensuel TAO Solidaire \| ORLEANS7 \| \| Forfait annuel TAO Solidaire \| ORLEANS8 \| \| Forfait mensuel TAO Quotient Familial 1 \| ORLEANS9 \| \| Forfait mensuel -26 ans \| PAU1.1 \| \| Forfait mensuel 26/64 ans \| PAU1.2 \| \| Forfait mensuel Seniors \| PAU1.3 \| \| Forfait mensuel P.U.M.a \| PAU1.4 \| \| Forfait mensuel Parking \| PAU1.5 \| \| Forfait annuel -26 ans \| PAU2.1 \| \| Forfait annuel 26/64 ans \| PAU2.2 \| \| Forfait annuel Seniors \| PAU2.3 \| \| Forfait annuel P.U.M.a \| PAU2.4 \| \| Forfait annuel Parking \| PAU2.5 \| \| Forfait mensuel VPass Vitalis -18 ans \| POIT1.1 \| \| Forfait annuel VPass Vitalis -18 ans \| POIT1.2 \| \| Forfait mensuel VPass Vitalis 18-27 ans \| POIT2.1 \| \| Forfait annuel VPass Vitalis 18-27 ans \| POIT2.2 \| \| Forfait mensuel VPass Vitalis 28 et plus \| POIT3.1 \| \| Forfait annuel VPass Vitalis 28 et plus \| POIT3.2 \| \| Forfait mensuel VPass Vitalis 65 ans & plus \| POIT4.1 \| \| Forfait annuel VPass Vitalis 65 ans & plus \| POIT4.2 \| \| Forfait mensuel VPass Vitalis Multimodaux \| POIT5.1 \| \| Forfait annuel VPass Vitalis Multimodaux \| POIT5.2 \| \| Forfait mensuel Numérique 18-27ans \| POIT6.1 \| \| Forfait mensuel Numérique 28ans et + \| POIT6.2 \| \| Forfait mensuel Numérique TER/CAR \| POIT6.3 \| \| Forfait annuel Vitalis QF1 28 et plus \| POIT7.1 \| \| Forfait annuel Vitalis QF2 28 et plus \| POIT7.2 \| \| Forfait annuel Vitalis QF3 28 et plus \| POIT7.3 \| \| Forfait annuel Vitalis QF4 28 et plus \| POIT7.4 \| \| Forfait annuel Vitalis QF5 28 et plus \| POIT7.5 \| \| Forfait annuel QUB \| QUIMPER1 \| \| Forfait mensuel QUB \| QUIMPER2 \| \| Forfait mensuel Senior QUB \| QUIMPER3 \| \| Forfait mensuel Jeune -26 ans QUB \| QUIMPER4 \| \| Forfait annuel Sénior QUB \| QUIMPER5 \| \| Forfait annuel Jeune -26 ans QUB \| QUIMPER6 \| \| Forfait mensuel CITURA étudiants \| REIMS1 \| \| Forfait annuel CITURA étudiants \| REIMS1.1 \| \| Forfait mensuel CITURA -18 ans \| REIMS2 \| \| Forfait annuel CITURA -18 ans JUNIOR+ \| REIMS2.1 \| \| Forfait mensuel CITURA 18-65 ans \| REIMS3 \| \| Forfait annuel CITURA 18-65 ans \| REIMS3.1 \| \| Forfait mensuel CITURA +65 ans \| REIMS4 \| \| Forfait annuel CITURA +65 ans \| REIMS4.1 \| \| Forfait mensuel Rennes < 18 ans \| RENNES1 \| \| Forfait annuel Rennes < 18 ans \| RENNES1.1 \| \| Forfait mensuel Rennes 18 à 26 ans \| RENNES2 \| \| Forfait annuel Rennes 18 à 26 ans \| RENNES2.1 \| \| Forfait mensuel Rennes 27 à 64 ans \| RENNES3 \| \| Forfait annuel Rennes 27 à 64 ans \| RENNES3.1 \| \| Forfait mensuel Rennes 65 à 74 ans \| RENNES4 \| \| Forfait annuel Rennes 65 à 74 ans \| RENNES4.1 \| \| Forfait mensuel Rennes >= 75 ans \| RENNES5 \| \| Forfait annuel Rennes >= 75 ans \| RENNES5.1 \| \| Forfait annuel PASS mobilité 18-26 ans \| RENNES6 \| \| Forfait annuel PASS mobilité 27-64 ans \| RENNES7 \| \| Forfait annuel PASS mobilité 65-74 ans \| RENNES8 \| \| Forfait mensuel CAR JAUNE tout public \| REUNION01 \| \| Forfait mensuel CAR JAUNE -26 ans \| REUNION02 \| \| Forfait annuel CAR JAUNE -26 ans \| REUNION03 \| \| Forfait mensuel Réuni'Pass tout public \| REUNION04 \| \| Forfait annuel Réuni'Pass tout public \| REUNION05 \| \| Forfait annuel Réuni'Pass étudiant \| REUNION06 \| \| Forfait annuel Tout public \| ROANNE01 \| \| Forfait annuel Jeunes - 26 ans \| ROANNE02 \| \| Forfait annuel Scolaire \| ROANNE03 \| \| Forfait annuel Sesam 1 \| ROANNE04 \| \| Forfait annuel Sesam 2 \| ROANNE05 \| \| Forfait annuel Sesam 3 \| ROANNE06 \| \| Forfait mensuel Tout public \| ROANNE1 \| \| Forfait mensuel Jeunes - 26 ans \| ROANNE2 \| \| Forfait mensuel Scolaire \| ROANNE3 \| \| Forfait mensuel Sesam 1 \| ROANNE4 \| \| Forfait mensuel Sesam 2 \| ROANNE5 \| \| Forfait mensuel Sesam 3 \| ROANNE6 \| \| Forfait mensuel Yélo Liberté \| ROCHELLE01 \| \| Forfait mensuel Yélo jeune \| ROCHELLE02 \| \| Forfait annuel Yélo domicile-travail \| ROCHELLE03 \| \| Forfait annuel Yélo Jeune - 26 ans \| ROCHELLE04 \| \| Forfait mensuel Yélo Location vélo classique \| ROCHELLE05 \| \| Forfait mensuel Yélo Location vélo classique jeune - 26 ans \| ROCHELLE06 \| \| Forfait mensuel Yélo Location vélo à assistance électrique \| ROCHELLE07 \| \| Forfait annuel Location vélo classique \| ROCHELLE08 \| \| Forfait annuel Yélo location vélo classique jeune - 26 ans \| ROCHELLE09 \| \| Forfait mensuel Sésame 31 jours Astuce \| ROUEN1 \| \| Vélos de ville à assistance électrique e-cardan de 1 à 3 mois \| ROUEN10 \| \| Vélos de ville à assistance électrique e-cardan 4ème mois \| ROUEN11 \| \| Vélos de ville à assistance éléctrique vitality de 1 à 3 mois \| ROUEN12 \| \| Vélos de ville à assitance électrique vitality 4ème mois \| ROUEN13 \| \| Vélos pliants premium de 1 à 3 mois \| ROUEN14 \| \| Vélos plients premium 4ème mois \| ROUEN15 \| \| Vélos cargos/rallongés mécanique de 1 à 3 mois \| ROUEN16 \| \| Vélos cargos/rallongés mécanique 4ème mois \| ROUEN17 \| \| Vélos cargos/rallongés à assitance éléctrique de 1 à 3 mois \| ROUEN18 \| \| Vélos cargos/rallongés à assistance électrique 4ème mois \| ROUEN19 \| \| Forfait mensuel Sésame 31 jours Astuce Elbeuf \| ROUEN2 \| \| Vélos de ville à assistance électrique e-cardan - étudiant \| ROUEN20 \| \| Vélos de ville à assistance électrique vitality - étudiant \| ROUEN21 \| \| Vélos de ville pliants premium - étudiant \| ROUEN22 \| \| Vélos cargos/rallongés mécanique - étudiant \| ROUEN23 \| \| Vélos cargos/rallongés à assitance électrique - étudiant \| ROUEN24 \| \| Forfait mensuel Sésame 365 jours Astuce \| ROUEN3 \| \| Forfait mensuel Sésame 365 jours Astuce Elbeuf \| ROUEN4 \| \| Forfait mensuel Jeunes 365 jours - de 18 ans \| ROUEN5 \| \| Forfait mensuel Demi-Tarif 31 jours Astuce \| ROUEN6 \| \| Forfait mensuel Demi-Tarif 31 jours Astuce Elbeuf \| ROUEN7 \| \| Forfait mensuel Demi-Tarif 365 jours Astuce \| ROUEN8 \| \| Forfait mensuel Demi-Tarif 365 jours Astuce Elbeuf \| ROUEN9 \| \| Forfait mensuel Impulsyon pour tous \| RSYON1.1 \| \| Forfait mensuel Impulsyon pour tous 2ème adulte \| RSYON1.2 \| \| Forfait annuel Elit Impulsyon pour tous \| RSYON1.3 \| \| Forfait annuel Elit Impulsyon pour tous 2ème adulte \| RSYON1.4 \| \| Forfait mensuel Impulsyon -26 ans \| RSYON2.1 \| \| Forfait mensuel Impulsyon -26 ans 2ème enfant \| RSYON2.2 \| \| Forfait mensuel Impulsyon -26 ans 3ème enfant & plus \| RSYON2.3 \| \| Forfait annuel Elit Impulsyon -26 ans \| RSYON2.4 \| \| Forfait annuel Elit Impulsyon -26 ans 2ème enfant \| RSYON2.5 \| \| Forfait annuel Elit Impulsyon -26 ans 3ème enfant & plus \| RSYON2.6 \| \| Forfait mensuel Impulsyon 65 ans & plus \| RSYON3.1 \| \| Forfait annuel Impulsyon 65 ans & plus \| RSYON3.2 \| \| Forfait annuel Pass XL \| RTM-2.1 \| \| Forfait annuel Pass XL Jeunes (- 26 ans) \| RTM-2.2 \| \| Forfait annuel Pass XL Solidarité (CMUC) \| RTM-2.3 \| \| Forfait annuel Pass XL Solidarité (Jeune) \| RTM-2.4 \| \| Pass Annuel Métropole Etudiant \| RTM-2.5 \| \| Forfait mensuel Pass XL 30 jours \| RTM-3.1 \| \| Forfait mensuel Pass XL 30 jours Jeunes (- 26 ans) \| RTM-3.2 \| \| Forfait mensuel Pass XL 30 jours Solidarité \| RTM-3.3 \| \| Pass mensuel Permanent Métropole Etudiant \| RTM-4.1 \| \| Forfait Pass Permanent Métropole Sénior \| RTM-4.2 \| \| Forfait Pass Permanent Sénior \| RTM-4.3 \| \| Forfait Pass Annuel Métropole Sénior \| RTM-4.4 \| \| Forfait Pass Annuel Sénior \| RTM-4.5 \| \| Forfait Pass 30 jours Métropole Sénior \| RTM-4.6 \| \| Forfait Pass 30 jours Sénior \| RTM-4.7 \| \| Forfait mensuel RTM Pass XL Permanent \| RTM-GO \| \| Forfait mensuel RTM Go moins de 18 ans \| RTM-GO-18 \| \| Forfait mensuel RTM Pass XL Permanent Jeunes (- 26 ans) \| RTM-GO-26 \| \| Abonnement tout public mensuel \| SAUMUR1 \| \| Abonnement tout public annuel \| SAUMUR1.1 \| \| Abonnement solidaire mensuel \| SAUMUR2 \| \| Abonnement solidaire annuel \| SAUMUR2.1 \| \| Abonnement +65 ans et - 26 ans mensuel \| SAUMUR3 \| \| Abonnement +65 ans et - 26 ans annuel \| SAUMUR3.1 \| \| Abonnement multimodal - 26 ans mensuel \| SAUMUR4 \| \| Abonnement multimodal - 26 ans annuel \| SAUMUR4.1 \| \| Abonnement multimodal 26 ans et + mensuel \| SAUMUR5 \| \| Abonnement multimodal 26 ans et + annuel \| SAUMUR5.1 \| \| Forfait mensuel STAS Tout public \| STETIENNE1 \| \| Forfait mensuel STAS -26 ans \| STETIENNE2 \| \| Forfait mensuel STAS Elève Etudiant \| STETIENNE3 \| \| Forfait annuel STAS Tout public Comptant \| STETIENNE4 \| \| Forfait annuel STAS Senior \| STETIENNE5 \| \| Forfait annuel STAS -26 ans \| STETIENNE6 \| \| Forfait annuel STAS Eleve Etudiant \| STETIENNE7 \| \| Forfait annuel STAS Tout public Prélèvement \| STETIENNE8 \| \| Forfait mensuel STAS Senior \| STETIENNE9 \| \| Forfait mensuel 4 - 17 ans \| STRASBOURG1.1 \| \| Forfait mensuel 18 - 25 ans \| STRASBOURG1.2 \| \| Forfait mensuel 26 - 64 ans \| STRASBOURG1.3 \| \| Forfait mensuel 65 ans et + \| STRASBOURG1.4 \| \| Forfait mensuel Impersonnel \| STRASBOURG1.5 \| \| Forfait mensuel P+R Rotonde \| STRASBOURG1.6 \| \| Forfait mensuel PMR \| STRASBOURG1.7 \| \| Forfait annuel 4 - 17 ans \| STRASBOURG2.1 \| \| Forfait annuel 18 - 25 ans \| STRASBOURG2.2 \| \| Forfait annuel 26 - 64 ans \| STRASBOURG2.3 \| \| Forfait annuel 65 ans et + \| STRASBOURG2.4 \| \| Forfait annuel Impersonnel \| STRASBOURG2.5 \| \| Forfait annuel P+R Rotonde \| STRASBOURG2.6 \| \| Forfait annuel PMR \| STRASBOURG2.7 \| \| Forfait mensuel Europass \| STRASBOURG3 \| \| Forfait mensuel Europass Mini \| STRASBOURG3.1 \| \| Forfait annuel Pass Mobilité Liberté 19 - 25 ans \| STRASBOURG4.1 \| \| Forfait annuel Pass Mobilité Liberté 26 - 64 ans \| STRASBOURG4.2 \| \| Forfait annuel Pass Mobilité Liberté + 65 ans \| STRASBOURG4.3 \| \| Forfait annuel Pass Mobilité Premium 19 - 25 ans \| STRASBOURG4.4 \| \| Forfait annuel Pass Mobilité Premium 26 - 64 ans \| STRASBOURG4.5 \| \| Forfait annuel Pass Mobilité Premium + 65 ans \| STRASBOURG4.6 \| \| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF>795€ \| STRASBOURG5.1 \| \| Forfait mensuel tarif solidaire (26/64 ans) QF>795€ \| STRASBOURG5.2 \| \| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF>= 583€ \| STRASBOURG5.3 \| \| Forfait mensuel tarif solidaire (26/64 ans) QF>= 583€ \| STRASBOURG5.4 \| \| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF>= 371€ \| STRASBOURG5.5 \| \| Forfait mensuel tarif solidaire (26/64 ans) QF>= 371€ \| STRASBOURG5.6 \| \| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF < 370€ \| STRASBOURG5.7 \| \| Forfait mensuel tarif solidaire (26/64 ans) QF < 370€ \| STRASBOURG5.8 \| \| Abonnement mensuel Mistral \| TOULON01 \| \| Abonnement mensuel Mistral - 26 ans \| TOULON02 \| \| Abonnement annuel Mistral \| TOULON03 \| \| Abonnement annuel Mistral - 26 ans \| TOULON04 \| \| Forfait mensuel Carte Pastel pour 31 jours \| TOULOUSE1 \| \| Forfait mensuel Carte Pastel Activéo (annuel) \| TOULOUSE2 \| \| Forfait mensuel Carte Pastel - de 26 ans Etudiant \| TOULOUSE3 \| \| Forfait mensuel Carte Pastel + pour 31 jours \| TOULOUSE4 \| \| Forfait mensuel Carte Pastel - de 26 ans \| TOULOUSE5 \| \| Forfait annuel Carte Pastel - de 26 ans \| TOULOUSE6 \| \| Forfait annuel Carte Pastel - de 26 ans Etudiant \| TOULOUSE7 \| \| Forfait mensuel Combi 31 jours \| TOULOUSE8 \| \| Forfait annuel Aéroport mensualisé \| TOULOUSE9 \| \| Forfait mensuel Aéroport pour 31 jours \| TOULOUSE10 \| \| Forfait mensuel Tours Filbleu 11-18 ans \| TOURS1 \| \| Forfait mensuel Tours Filbleu Scolaire Famille nombreuse \| TOURS2 \| \| Forfait mensuel Tours Filbleu Scolaire ASR \| TOURS3 \| \| Forfait mensuel Tours Filbleu Scolaire ASM \| TOURS4 \| \| Forfait mensuel Tours Filbleu 19-25 ans \| TOURS5 \| \| Forfait mensuel Tours Filbleu 26-64 ans \| TOURS6 \| \| Forfait mensuel Tours Filbleu + 65 ans \| TOURS7 \| \| Forfait mensuel Tours Rémi Zen Jeune \| TOURS8 \| \| Forfait annuel TRACE Jeunes de 5-25ans \| TRACE1.1 \| \| Forfait mensuel TRACE Jeunes de 5-25ans \| TRACE1.2 \| \| Forfait annuel TRACE Pour tous 26-65ans \| TRACE2.1 \| \| Forfait mensuel TRACE Pour tous 26-65ans \| TRACE2.2 \| \| Forfait annuel TRACE Solidaire \| TRACE3.1 \| \| Forfait mensuel TRACE Solidaire \| TRACE3.2 \| \| Abonnement jeune 30 jours \| TROYES01 \| \| Abonnement jeune 12 mois \| TROYES02 \| \| Abonnement adulte 30 jours \| TROYES03 \| \| Abonnement adulte 12 mois \| TROYES04 \| \| Forfait mensuel UNIPASS Tout public \| UNIPASS01 \| \| Forfait mensuel UNIPASS - 27 ans \| UNIPASS02 \| \| Forfait annuel UNIPASS Tout public \| UNIPASS03 \| \| Forfait annuel UNIPASS - 27 ans \| UNIPASS04 \| \| Abonnement mensuel Citéa -26 ans \| VALENCE01 \| \| Abonnement annuel Citéa -26ans \| VALENCE02 \| \| Abonnement mensuel Citéa tout public \| VALENCE03 \| \| Abonnement annuel Citéa tout public \| VALENCE04 \| \| Forfait mensuel Pour tous 26/64 ans \| VANNES1 \| \| Forfait annuel Pour tous 26/64 ans \| VANNES2 \| \| Forfait mensuel -26 ans \| VANNES3 \| \| Forfait annuel -26 ans \| VANNES4 \| \| Forfait mensuel 65ans + \| VANNES5 \| \| Forfait annuel 65ans + \| VANNES6 \| \| Forfait mensuel Pass'Var Zone 1 \| VAR1.1 \| \| Forfait mensuel Pass'Lib Zone 2 \| VAR1.2 \| \| Forfait mensuel Pass'3 D Zone 3 \| VAR1.3 \| \| Forfait mensuel Pass'Etudes Zone 4 \| VAR1.4 \| \| Forfait annuel Pass'Var Zone 1 \| VAR2.1 \| \| Forfait annuel Pass'Lib Zone 2 \| VAR2.2 \| \| Forfait annuel Pass'3 D Zone 3 \| VAR2.3 \| \| Forfait annuel Pass'Etudes Zone 4 \| VAR2.4 \| \| Forfait annuel Pass'Jeune Zone 4 (hors TAD) \| VAR2.5 \| \| Forfait mensuel V-PLUS (vélib' mécanique) \| VELIB1 \| \| Forfait mensuel V-PLUS Jeune (vélib' mécanique) \| VELIB2 \| \| Forfait mensuel V-PLUS Senior (vélib' mécanique) \| VELIB3 \| \| Forfait mensuel V-PLUS Solidaire (vélib' mécanique) \| VELIB4 \| \| Forfait mensuel V-MAX (vélib' électrique) \| VELIB5 \| \| Forfait mensuel V-MAX Jeune (vélib' électrique) \| VELIB6 \| \| Forfait mensuel V-MAX Senior (vélib' électrique) \| VELIB7 \| \| Forfait mensuel V-MAX Solidaire (vélib' électrique) \| VELIB8 \| \| Forfait mensuel VELIGO normal \| VELIGO1 \| \| Forfait mensuel VELIGO réduit \| VELIGO2 \| \| Forfait mensuel VELIGO abonné Véligo Stationnement \| VELIGO3 \| \| Forfait mensuel VELIGO Biporteur,Triporteur et Rallongé Normal \| VELIGO4 \| \| Forfait mensuel VELIGO Biporteur,Triporteur et Rallongé Réduit \| VELIGO5 \| \| Forfait mensuel ZOU Annuel Marseille-Aix \| ZOUSNCF1 \| \| Forfait mensuel ZOU Mensuel Marseille-Aix \| ZOUSNCF1.1 \| \| Forfait annuel ZOU Pass étudiant Région Sud \| ZOUSUD1.1 \| \| Forfait mensuel ZOU Région Sud \| ZOUSUD1.2 \| \| Forfait annuel ZOU Région Sud \| ZOUSUD1.3 \| \| Forfait mensuel ZOU TER/CAR13 Mensuel Marseille-Aix \| ZOUTERCAR1 \| |
| Titre de transport | Valeur correspondante |
| Forfait mensuel Chronoplus Tout Public | AGLOBASQUE1 |
| Forfait mensuel Txik-Txak 28-65 ans | AGLOBASQUE10 |
| Forfait mensuel Txik-Txak 28-65 ans Solidaire | AGLOBASQUE10.1 |
| Forfait mensuel Txik-Txak 28-65 ans Solidaire + | AGLOBASQUE10.2 |
| Forfait annuel Txik-Txak 28-65 ans | AGLOBASQUE11 |
| Forfait annuel Txik-Txak 28-65 ans Solidaire | AGLOBASQUE11.1 |
| Forfait annuel Txik-Txak 28-65 ans Solidaire + | AGLOBASQUE11.2 |
| Forfait mensuel Txik-Txak + 65 ans | AGLOBASQUE12 |
| Forfait mensuel Txik-Txak + 65 ans Solidaire | AGLOBASQUE12.1 |
| Forfait mensuel Txik-Txak + 65 ans Solidaire + | AGLOBASQUE12.2 |
| Forfait annuel Txik-Txak + 65 ans | AGLOBASQUE13 |
| Forfait annuel Txik-Txak + 65 ans Solidaire | AGLOBASQUE13.1 |
| Forfait annuel Txik-Txak + 65 ans Solidaire + | AGLOBASQUE13.2 |
| Forfait mensuel Chronoplus Tout Public Eté (Juillet/Août) | AGLOBASQUE2 |
| Forfait annuel Chronoplus Tout Public | AGLOBASQUE3 |
| Forfait mensuel Chronoplus Jeune | AGLOBASQUE4 |
| Forfait annuel Chronoplus Jeune | AGLOBASQUE5 |
| Forfait mensuel Chronoplus Sénior | AGLOBASQUE6 |
| Forfait annuel Chronoplus Sénior | AGLOBASQUE7 |
| Forfait mensuel Txik-Txak - 28 ans | AGLOBASQUE8 |
| Forfait mensuel Txik-Txak - 28 ans Solidaire | AGLOBASQUE8.1 |
| Forfait mensuel Txik-Txak - 28 ans Solidaire + | AGLOBASQUE8.2 |
| Forfait annuel Txik-Txak - 28 ans | AGLOBASQUE9 |
| Forfait annuel Txik-Txak - 28 ans Solidaire et Solidaire + | AGLOBASQUE9.1 |
| Forfait annuel Jeune Plus (Etudiants - 26 ans) | AIX1 |
| Forfait annuel (voyageurs réguliers) | AIX2 |
| Forfait mensuel (voyageurs réguliers) | AIX3 |
| Forfait annuel Pass Intégral Aix-Marseille-Provence | AIXMARSEILLE1 |
| Forfait mensuel Pass Intégral Aix-Marseille-Provence | AIXMARSEILLE1.1 |
| Forfait mensuel Irigo 6-25 ans | ANGERS1 |
| Forfait annuel Irigo 6-25 ans 1 enfant | ANGERS1.1 |
| Forfait annuel Irigo 6-25 ans Hors Angers Loire Métropole | ANGERS1.2 |
| Forfait annuel Irigo 6-25 ans 2 enfants | ANGERS1.3 |
| Forfait annuel Irigo 6-25 ans 3 enfants et + | ANGERS1.4 |
| Forfait mensuel Irigo 26 ans et + | ANGERS2 |
| Forfait annuel Irigo 26 ans et + | ANGERS2.1 |
| Forfait mensuel Irigo Solidaire/CMU + 18 ans | ANGERS3 |
| Forfait annuel Irigo Solidaire/CMU + 18 ans | ANGERS3.1 |
| Forfait mensuel tarif réduit tout public | ANGERS4 |
| Forfait annuel tarif réduit tout public | ANGERS4.1 |
| Forfait annuel tarif réduit handicap | ANGERS4.2 |
| Forfait mensuel Irigo 26 ans et + prélèvement automatique | ANGERS5 |
| Forfait mensuel tarif réduit prélèvement automatique | ANGERS6 |
| Forfait mensuel - 18 ans | ANGOULEME01 |
| Forfait mensuel - 18 ans Tarif réduit | ANGOULEME02 |
| Forfait mensuel 18/25 ans | ANGOULEME03 |
| Forfait mensuel 26 ans et + | ANGOULEME04 |
| Forfait annuel 10 mois - 18 ans | ANGOULEME10 |
| Forfait annuel 10 mois - 18 ans Tarif réduit | ANGOULEME11 |
| Forfait annuel 10 mois 18/25 ans | ANGOULEME12 |
| Forfait annuel 10 mois PA - 18 ans | ANGOULEME13 |
| Forfait annuel 10 mois PA - 18 ans Tarif réduit | ANGOULEME14 |
| Forfait annuel 10 mois PA 18/25 ans | ANGOULEME15 |
| Forfait annuel 12 mois - 18 ans | ANGOULEME20 |
| Forfait annuel 12 mois - 18 ans Tarif réduit | ANGOULEME21 |
| Forfait annuel 12 mois 18/25 ans | ANGOULEME22 |
| Forfait annuel 12 mois 26 ans et + | ANGOULEME23 |
| Forfait annuel 12 mois PA - 18 ans | ANGOULEME24 |
| Forfait annuel 12 mois PA - 18 ans Tarif réduit | ANGOULEME25 |
| Forfait annuel 12 mois PA 18/25 ans | ANGOULEME26 |
| Forfait annuel 12 mois PA 26 ans et + | ANGOULEME27 |
| Abonnement Adulte mensuel | ANNECY01 |
| Abonnement Adulte annuel | ANNECY02 |
| Abonnement Liberté Domicile-Travail annuel | ANNECY03 |
| Abonnement Jeune mensuel - 26 ans | ANNECY04 |
| Abonnement Jeune annuel - 26 ans | ANNECY05 |
| Abonnement Jeune trimestriel - 26 ans | ANNECY06 |
| Abonnement Sénior mensuel | ANNECY07 |
| Abonnement Sénior annuel | ANNECY08 |
| Abonnement annuel Sénior Solidiare + 65 ans | ANNECY09 |
| Abonnement Adulte mensuel Solidaire | ANNECY10 |
| Abonnement Jeune annuel Solidaire | ANNECY11 |
| Abonnement Adulte annuel Solidaire | ANNECY12 |
| Forfait mensuel ATOUT Bus | ATOUT1.1 |
| Forfait annuel ATOUT Bus | ATOUT1.2 |
| Forfait mensuel ORIZO Pass Jeune -26 ans | AVIGNON1.1 |
| Forfait mensuel ORIZO Pass Liberté | AVIGNON1.2 |
| Forfait mensuel ORIZO Pass Sénior 65 ans et + | AVIGNON1.3 |
| Forfait annuel ORIZO Pass Jeune - 26 ans | AVIGNON1.4 |
| Forfait annuel ORIZO Pass Liberté | AVIGNON1.5 |
| Forfait annuel ORIZO Pass Sénior 65 ans et + | AVIGNON1.6 |
| Forfait mensuel ZOU Jeunes - 26 ans en formation - Zone 1 | AVIGNON1.7 |
| Forfait mensuel ZOU Tout public - Zone 1 | AVIGNON1.8 |
| Forfait annuel ZOU Jeunes - 26 ans en formation - Zone 1 | AVIGNON9.1 |
| Forfait annuel ZOU Tout public - Zone 1 | AVIGNON9.2 |
| Forfait mensuel ZOU Jeunes - 26 ans en formation - Zone 2 | AVIGNON9.3 |
| Forfait mensuel ZOU Tout public - Zone 2 | AVIGNON9.4 |
| Forfait annuel ZOU jeunes - 26 ans en formation - Zone 2 | AVIGNON9.5 |
| Forfait annuel ZOU Tout public - Zone 2 | AVIGNON9.6 |
| Forfait mensuel lignes GINKO Pass 4/17 (1er enfant) | BESANC1 |
| Forfait mensuel lignes GINKO Pass 15/25 ans | BESANC10 |
| Forfait annuel lignes GINKO Pass 15/25 ans | BESANC11 |
| Forfait mensuel lignes GINKO Pass PMR | BESANC12 |
| Forfait annuel lignes GINKO Pass PMR | BESANC13 |
| Forfait annuel lignes GINKO Pass Entreprise | BESANC14 |
| Forfait mensuel lignes GINKO Pass CSS | BESANC15 |
| Forfait annuel lignes Ginko VéloCité Pass Essentiel | BESANC16 |
| Forfait annuel lignes Ginko VéloCité Pass Confort | BESANC17 |
| Forfait annuel lignes Pass Ginko VéloParks | BESANC18 |
| Forfait mensuel lignes Pass Ginko VéloParks | BESANC19 |
| Forfait mensuel lignes GINKO Pass 4/17 (à partir du 2ème enfant) | BESANC2 |
| Forfait annuel lignes GINKO Pass 4/17 (1er enfant) | BESANC3 |
| Forfait annuel lignes GINKO Pass 4/17 (à partir du 2ème enfant) | BESANC4 |
| Forfait mensuel lignes GINKO Pass 18/25 | BESANC5 |
| Forfait annuel lignes GINKO Pass 18/25 | BESANC6 |
| Forfait mensuel lignes GINKO Pass Sésame | BESANC7 |
| Forfait annuel lignes GINKO Pass Sésame | BESANC8 |
| Forfait mensuel lignes GINKO Pass 18/25 tarif réduit | BESANC9 |
| Forfait annuel lignes GINKO Pass 18/25 tarif réduit | BESANC91 |
| Forfait mensuel lignes GINKO + 65 ans | BESANC92 |
| Forfait annuel lignes GINKO + 65 ans | BESANC93 |
| Forfait mensuel Pass Jeune pour 1 mois | BORDEAUX1 |
| Forfait mensuel Pass Jeune -30% | BORDEAUX1.1 |
| Forfait mensuel Pass Jeune -50% | BORDEAUX1.2 |
| Forfait mensuel Pass Jeune Annuel | BORDEAUX2 |
| Forfait mensuel Pass Jeune Annuel -30% | BORDEAUX2.1 |
| Forfait mensuel Pass Jeune Annuel -50% | BORDEAUX2.2 |
| Forfait mensuel Le Pass pour 1 mois | BORDEAUX3 |
| Forfait mensuel Le Pass -30% | BORDEAUX3.1 |
| Forfait mensuel Le Pass -50% | BORDEAUX3.2 |
| Forfait mensuel Le Pass Annuel | BORDEAUX4 |
| Forfait mensuel Le Pass Annuel -30% | BORDEAUX4.1 |
| Forfait mensuel Le Pass Annuel -50% | BORDEAUX4.2 |
| Forfait mensuel Pass Senior pour 1 mois | BORDEAUX5 |
| Forfait mensuel Pass Senior -30% | BORDEAUX5.1 |
| Forfait mensuel Pass Senior -50% | BORDEAUX5.2 |
| Forfait mensuel Pass Senior Annuel | BORDEAUX6 |
| Forfait mensuel Pass Senior Annuel -30% | BORDEAUX6.1 |
| Forfait mensuel Pass Senior Annuel -50% | BORDEAUX6.2 |
| Forfait mensuel TBM +10 abonnés | BORDEAUX7 |
| Forfait mensuel TBM +500 abonnés | BORDEAUX8 |
| Forfait mensuel TBM + Trains | BORDEAUX9 |
| Abonnement mensuel Mobigo | BOURG01 |
| Forfait mensuel Bibus Fréquence | BREST1 |
| Forfait mensuel Bibus Fréquence - 26 ans | BREST2 |
| Forfait mensuel Bibus Rytmo | BREST3 |
| Forfait mensuel Bibus Tempo | BREST4 |
| Forfait mensuel Bibus Tango | BREST5 |
| Forfait mensuel Bibus Rytmo - 26 ans | BREST6 |
| Forfait mensuel Bibus Tempo - 26 ans | BREST7 |
| Forfait mensuel Bibus Tango - 26 ans | BREST8 |
| Forfait annuel TWISTO 11-17 ans | CAEN01 |
| Forfait annuel TWISTO Scolaire | CAEN02 |
| Forfait annuel TWISTO 18-25 ans | CAEN03 |
| Forfait mensuel TWISTO 18-25 ans | CAEN04 |
| Forfait annuel TWISTO 26-64 ans | CAEN05 |
| Forfait mensuel TWISTO 26-64 ans | CAEN06 |
| Forfait annuel TWISTO Réduit | CAEN07 |
| Forfait mensuel TWISTO Réduit | CAEN08 |
| Forfait mensuel TWISTO Solidaire | CAEN09 |
| Forfait mensuel TWISTO 65 ans et + | CAEN16 |
| Forfait annuel TWISTO 65 ans et + | CAEN17 |
| Forfait mensuel TWISTO 11-17 ans | CAEN18 |
| Forfait mensuel Pass Liberté 31 jours (ex Croisette) | CANNES1 |
| Forfait mensuel Carte Azur | CANNES2 |
| Forfait annuel Pass Liberté | CANNES3 |
| Forfait mensuel Pass Jeune 31 jours | CANNES4 |
| Forfait annuel Pass Jeune | CANNES5 |
| Forfait annuel Pass Scolaire | CANNES6 |
| Forfait mensuel Chalons en Champagne SITAC tout public | CHALONS01 |
| Forfait annuel Chalons en Champagne SITAC tout public | CHALONS02 |
| Forfait mensuel Chalons en Champagne SITAC - 26 ans | CHALONS03 |
| Forfait annuel Chalons en Champagne SITAC - 26 ans | CHALONS04 |
| Forfait mensuel Chalons en Champagne SITAC + 65 ans | CHALONS05 |
| Forfait annuel Chalons en Champagne SITAC + 65 ans | CHALONS06 |
| Forfait mensuel Chalons en Champagne SITAC bénéficiaires CSS | CHALONS07 |
| Forfait annuel 28-64 ans | CHARTRES1 |
| Forfait annuel 65 ans et plus | CHARTRES2 |
| Forfait annuel moins de 28 ans | CHARTRES3 |
| Forfait mensuel 28-64 ans | CHARTRES4 |
| Forfait mensuel 65 ans et plus | CHARTRES5 |
| Forfait mensuel moins de 28 ans | CHARTRES6 |
| Forfait mensuel Tout Public | CLERMONT1.1 |
| Forfait mensuel - 26 ans | CLERMONT1.2 |
| Forfait mensuel PDM | CLERMONT1.3 |
| Forfait mensuel Solidaire -60 % | CLERMONT1.4 |
| Forfait mensuel Solidaire -80 % | CLERMONT1.5 |
| Forfait mensuel Solidaire -92 % | CLERMONT1.6 |
| Forfait annuel Tout Public | CLERMONT2.1 |
| Forfait annuel - 26 ans | CLERMONT2.2 |
| Forfait annuel PDM | CLERMONT2.3 |
| Combiné TER + T2C mensuel Jeune (- de 26 ans) | CLERMONT3.1 |
| Combiné TER + T2C mensuel | CLERMONT3.2 |
| Corse Zone 1 | CORSEZ1 |
| Corse Zone 2 | CORSEZ2 |
| Corse Zone 3 | CORSEZ3 |
| Forfait mensuel QF 550-450 pour les 26ans et + | COTENTIN01 |
| Forfait mensuel QF 650-550 pour les 26ans et + | COTENTIN01.1 |
| Forfait mensuel QF +650 pour les 26ans et + | COTENTIN01.2 |
| Forfait mensuel QF 550-450 pour les - De 26ans | COTENTIN02 |
| Forfait mensuel QF 650-550 pour les - De 26ans | COTENTIN02.1 |
| Forfait mensuel QF +650 pour les - De 26ans | COTENTIN02.2 |
| Forfait annuel QF 550-450 pour les 26ans et + | COTENTIN03 |
| Forfait annuel QF 650-550 pour les 26ans et + | COTENTIN03.1 |
| Forfait annuel QF 650+ pour les 26ans et + | COTENTIN03.2 |
| Forfait annuel QF 550-450 pour les - De 26ans | COTENTIN04 |
| Forfait annuel QF 650-550 pour les - De 26ans | COTENTIN04.1 |
| Forfait annuel QF 650+ pour les - De 26ans | COTENTIN04.2 |
| Forfait mensuel Tan Mensuel | DEUXSEV1 |
| Forfait mensuel Intermodale TAN + RDS | DEUXSEV2 |
| Forfait mensuel Tan Scolaire | DEUXSEV3 |
| Forfait mensuel Tan Etudiant | DEUXSEV4 |
| Forfait mensuel TanLib Vélo | DEUXSEV5 |
| Forfait annuel TanLib Vélo | DEUXSEV6 |
| Forfait mensuel TanLib Vélo étudiant | DEUXSEV7 |
| Forfait annuel TanLib Vélo étudiant | DEUXSEV8 |
| Forfait mensuel PASS 18/25 | DIJON1 |
| Forfait annuel PASS 18/25 12 mois | DIJON2 |
| Forfait mensuel PASS 26 et + | DIJON3 |
| Forfait annuel PASS 26 et + | DIJON4 |
| Forfait annuel PASS Pro | DIJON5 |
| Forfait mensuel DISTRIPASS Junior | DISTRI1.1 |
| Forfait annuel DISTRIPASS Junior | DISTRI1.2 |
| Forfait mensuel DISTRIPASS Adulte | DISTRI2.1 |
| Forfait annuel DISTRIPASS Adulte | DISTRI2.2 |
| Forfait mensuel DISTRIPASS Senior | DISTRI3.1 |
| Forfait annuel DISTRIPASS Senior | DISTRI3.2 |
| Forfait mensuel | EVREUX1 |
| Forfait mensuel CMU | EVREUX2 |
| Forfait annuel | EVREUX3 |
| Forfait annuel Solidaire Tr1 | EVREUX4 |
| Forfait annuel Solidaire Tr2 | EVREUX5 |
| Forfait annuel Solidaire Tr3 | EVREUX6 |
| Forfait annuel M'Pro (Salariés) | GRENOBLE1 |
| Forfait annuel Pastel B Mréso | GRENOBLE10 |
| Forfait mensuel Pastel C Mréso | GRENOBLE11 |
| Forfait annuel Pastel C Mréso | GRENOBLE12 |
| Forfait mensuel Pastel D Mréso | GRENOBLE13 |
| Forfait annuel Pastel D Mréso | GRENOBLE14 |
| Forfait mensuel Pastel A intra Grésivaudan Mréso | GRENOBLE15 |
| Forfait annuel Pastel A intra Grésivaudan Mréso | GRENOBLE16 |
| Forfait mensuel Pastel B intra Grésivaudan Mréso | GRENOBLE17 |
| Forfait annuel Pastel B intra Grésivaudan Mréso | GRENOBLE18 |
| Forfait mensuel Pastel C intra Grésivaudan Mréso | GRENOBLE19 |
| Forfait annuel Tout Public : 18 à 64 ans | GRENOBLE2 |
| Forfait annuel Pastel C intra Grésivaudan Mréso | GRENOBLE20 |
| Forfait annuel Pastel D intra Grésivaudan Mréso | GRENOBLE22 |
| Forfait mensuel Pastel D intra Grésivaudan Mréso | GRENOBLE23 |
| Forfait annuel Tout Public : 18 à 25 ans | GRENOBLE3 |
| Forfait mensuel Tout Public : 18 à 64 ans | GRENOBLE4 |
| Forfait mensuel Tout Public : 18 à 25 ans | GRENOBLE5 |
| Forfait annuel PDE (Salariés) | GRENOBLE6 |
| Forfait mensuel Pastel A Mréso | GRENOBLE7 |
| Forfait annuel Pastel A Mréso | GRENOBLE8 |
| Forfait mensuel Pastel B Mréso | GRENOBLE9 |
| Forfait mensuel LIGNES URBAINES RCT illimité (Cayenne) | GUYANE1 |
| Forfait mensuel LIGNES URBAINES RCT illimité -25 ans (Cayenne) | GUYANE2 |
| Forfait mensuel pour tous Lia | HAVRE1 |
| Forfait mensuel pour tous + Lia | HAVRE2 |
| Forfait mensuel -20 ans/étudiant Lia | HAVRE3 |
| Forfait mensuel 1/2 tarif Lia | HAVRE4 |
| Forfait mensuel Solidaire Lia | HAVRE5 |
| Forfait annuel pour tous/mois Lia | HAVRE6 |
| Forfait annuel -20 ans/étudiant /mois Lia | HAVRE7 |
| Forfait annuel 1/2 tarif/mois Lia | HAVRE8 |
| Forfait 'IMAGINE R' Zones 1 - 2 | IMAGINER.1.2 |
| Forfait 'IMAGINE R' Zones 1 - 3 | IMAGINER.1.3 |
| Forfait 'IMAGINE R' Zones 1 - 4 | IMAGINER.1.4 |
| Forfait 'IMAGINE R' Zones 1 - 5 | IMAGINER.1.5 |
| Forfait 'IMAGINE R' Zones 2 - 3 | IMAGINER.2.3 |
| Forfait 'IMAGINE R' Zones 2 - 4 | IMAGINER.2.4 |
| Forfait 'IMAGINE R' Zones 2 - 5 | IMAGINER.2.5 |
| Forfait 'IMAGINE R' Zones 3 - 4 | IMAGINER.3.4 |
| Forfait 'IMAGINE R' Zones 3 - 5 | IMAGINER.3.5 |
| Forfait 'IMAGINE R' Zones 4 - 5 | IMAGINER.4.5 |
| Forfait 'IMAGINE R' Toutes Zones | IMAGINER.4TZ |
| Forfait IMAGINE R' Toutes Zones avec Frais de Dossier | IMAGINER.4TZFD |
| Forfait 'IMAGINE R' Etudiant zones 1 - 5 toutes zones | IMAGINER.ETUD |
| Forfait 'IMAGINE R' MENSUEL Toutes Zones | IMAGMOIS.4TZ |
| Forfait annuel NAVIGO Zones 1 - 2 | INTEGRAL.1.2 |
| Forfait annuel NAVIGO Zones 1 - 3 | INTEGRAL.1.3 |
| Forfait annuel NAVIGO Zones 1 - 4 | INTEGRAL.1.4 |
| Forfait annuel NAVIGO Zones 1 - 5 | INTEGRAL.1.5 |
| Forfait annuel NAVIGO Zones 2 - 3 | INTEGRAL.2.3 |
| Forfait annuel NAVIGO Zones 2 - 4 | INTEGRAL.2.4 |
| Forfait annuel NAVIGO Zones 2 - 5 | INTEGRAL.2.5 |
| Forfait annuel NAVIGO Zones 3 - 4 | INTEGRAL.3.4 |
| Forfait annuel NAVIGO Zones 3 - 5 | INTEGRAL.3.5 |
| Forfait annuel NAVIGO Zones 4 - 5 | INTEGRAL.4.5 |
| Forfait annuel NAVIGO Toutes Zones | INTEGRAL.TZ |
| Forfait 30 Jours LeCar Aix-Marseille Jeune | LECARAIXMARSEILLE1 |
| Forfait annuel LeCar Aix-Marseille Jeune | LECARAIXMARSEILLE2 |
| Forfait mensuel 4/25 ans & 65 ans et plus | LILLE1 |
| Forfait mensuel 4/25 ans & 65 ans et plus - quotient familial 3 | LILLE10 |
| Forfait annuel 4/25 ans & 65 ans et plus - quotient familial 3 | LILLE11 |
| Forfait mensuel 65 ans et plus CSS/AME | LILLE12 |
| Forfait mensuel 65 ans et plus QF0 | LILLE13 |
| Forfait mensuel 26/64 ans - quotient familial 1 | LILLE14 |
| Forfait annuel 26/64 ans - quotient familial 1 | LILLE15 |
| Forfait mensuel 26/64 ans - quotient familial 2 | LILLE16 |
| Forfait annuel 26/64 ans - quotient familial 2 | LILLE17 |
| Forfait mensuel 26/64 ans - quotient familial 3 | LILLE18 |
| Forfait annuel 26/64 ans - quotient familial 3 | LILLE19 |
| Forfait mensuel 26/64 ans | LILLE2 |
| Forfait mensuel 26/64 ans CSS/AME | LILLE20 |
| Forfait mensuel Permanent 26/64 ans | LILLE3 |
| Forfait mensuel Permanent 4/25 ans & 65 ans et plus | LILLE4 |
| Forfait mensuel 4/25 ans CSS/AME | LILLE5 |
| Forfait mensuel 4/25 ans & 65 ans et plus - quotient familial 1 | LILLE6 |
| Forfait annuel 4/25 ans & 65 ans et plus - quotient familial 1 | LILLE7 |
| Forfait mensuel 4/25 ans & 65 ans et plus - quotient familial 2 | LILLE8 |
| Forfait annuel 4/25 ans & 65 ans et plus - quotient familial 2 | LILLE9 |
| Forfait annuel TCL - 18 ans 1 enf transp | LIMOGES01 |
| Forfait annuel TCL - 18 ans 2 enf transp | LIMOGES02 |
| Forfait annuel TCL - 18 ans 3 enf et + transp | LIMOGES03 |
| Forfait mensuel TCL - 18 ans 1 enf transp | LIMOGES04 |
| Forfait mensuel TCL - 18 ans 2 enf transp | LIMOGES05 |
| Forfait mensuel TCL - 18 ans 3 enf et + transp | LIMOGES06 |
| Forfait annuel TCL - 26 ans | LIMOGES10 |
| Forfait mensuel TCL - 26 ans | LIMOGES11 |
| Forfait annuel TCL 26 ans et + | LIMOGES20 |
| Forfait mensuel TCL 26 ans et + | LIMOGES21 |
| Forfait annuel TCL Sésame | LIMOGES30 |
| Forfait annuel TCL 60 ans et + | LIMOGES40 |
| Forfait mensuel TCL 60 ans et + | LIMOGES41 |
| Forfait mensuel TCL Tarif Préférentiel | LIMOGES50 |
| Abonnement annuel de 16 à 25 ans | LORIENTANNU16A25ANS |
| Abonnement annuel plus de 25 ans | LORIENTANNUEL+25ANS |
| Abonnement annuel plus de 65 ans | LORIENTANNUEL+65ANS |
| Abonnement annuel moins de 16 ans | LORIENTANNUEL-16ANS |
| Abonnement annuel multipass | LORIENTANNUMULTIPAS |
| Abonnement mensuel plus de 25 ans | LORIENTMENSU+25 |
| Abonnement mensuel plus de 65 ans | LORIENTMENSU+65 |
| Abonnement mensuel moins de 16 ans | LORIENTMENSU-16 |
| Abonnement mensuel 16 à 25 ans | LORIENTMENSU16A25 |
| Forfait annuel Vélo'V 1 An | LYON0 |
| Forfait annuel Vélo'V PLUS 1An | LYON0.1 |
| Forfait annuel Vélo'V 1 An Jeunes | LYON00 |
| Forfait annuel Campus | LYON01 |
| Forfait mensuel City Pass | LYON1 |
| Forfait mensuel Pass Partout S | LYON10 |
| Forfait mensuel Combiné TER+TCL+TAG | LYON11 |
| Forfait mensuel Isère Pass 2 zones | LYON12 |
| Forfait mensuel Isère Pass 3 zones | LYON13 |
| Forfait mensuel Rhône Pass Campus | LYON14 |
| Forfait mensuel Isère Pass Campus 2 zones | LYON15 |
| Forfait mensuel Isère Pass Campus 3 zones | LYON16 |
| Forfait mensuel Combiné TER+TCL+TAG Campus | LYON17 |
| Forfait mensuel T-Libr Etudiants TER+TCL | LYON18 |
| Forfait mensuel TER+TCL+LVA/RUBAN | LYON19 |
| Forfait mensuel Pass Partout | LYON2 |
| Forfait mensuel Pass 2 Partout - TCL | LYON20 |
| Forfait mensuel City Pass Cigogne | LYON21 |
| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) Zones 1 et 2 | LYON22 |
| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) 2 zones voisines (sauf zone 1) | LYON22.1 |
| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) Toutes zones (sauf zone 1) | LYON22.2 |
| Forfait mensuel illimité TCL 11/17 ans (2 mois offerts) Toutes Zones | LYON22.3 |
| Forfait mensuel TCL 11/17 ans Zones 1 et 2 | LYON23 |
| Forfait mensuel TCL 11/17 ans 2 zones voisines (sauf Zone 1) | LYON23.1 |
| Forfait mensuel TCL 11/17 ans Toutes zones sauf Zone 1 | LYON23.2 |
| Forfait mensuel TCL 11/17 ans Toutes Zones | LYON23.3 |
| Forfait annuel TCL 11/17 ans Zones 1 et 2 | LYON24 |
| Forfait annuel TCL 11/17 ans 2 zones voisines (sauf zone 1) | LYON24.1 |
| Forfait annuel TCL 11/17 ans Toutes Zones sauf Zone 1 | LYON24.2 |
| Forfait annuel TCL 11/17 ans Toutes Zones | LYON24.3 |
| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) Zones 1 et 2 | LYON25 |
| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) 2 zones voisines (sauf Zone 1) | LYON25.1 |
| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) Toutes Zones sauf Zone 1 | LYON25.2 |
| Forfait mensuel illimité TCL 18/25 ans (2 mois offerts) Toutes Zones | LYON25.3 |
| Forfait mensuel TCL 18/25 ans Zones 1 et 2 | LYON26 |
| Forfait mensuel TCL 18/25 ans 2 zones voisines (sauf Zone 1) | LYON26.1 |
| Forfait mensuel TCL 18/25 ans Toutes Zones sauf Zone 1 | LYON26.2 |
| Forfait mensuel TCL 18/25 ans Toutes Zones | LYON26.3 |
| Forfait annuel TCL 18/25 ans Zones 1 et 2 | LYON27 |
| Forfait annuel TCL 18/25 ans 2 zones voisines (sauf Zone 1) | LYON27.1 |
| Forfait annuel TCL 18/25 ans Toutes Zones sauf Zone 1 | LYON27.2 |
| Forfait annuel TCL 18/25 ans Toutes Zones | LYON27.3 |
| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) Zones 1 et 2 | LYON28 |
| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) 2 zones voisines (sauf Zone 1) | LYON28.1 |
| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) Toutes Zones sauf Zone 1 | LYON28.2 |
| Forfait mensuel illimité TCL 26/64 ans (1 mois offert) Toutes Zones | LYON28.3 |
| Forfait mensuel TCL 26/64 ans Zones 1 et 2 | LYON29 |
| Forfait mensuel TCL 26/64 ans 2 zones voisines (sauf Zone 1) | LYON29.1 |
| Forfait mensuel TCL 26/64 ans Toutes Zones sauf Zone 1 | LYON29.2 |
| Forfait mensuel TCL 26/64 ans Toutes Zones | LYON29.3 |
| Forfait mensuel City Pass Jeunes | LYON3 |
| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) Zones 1 et 2 | LYON30 |
| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) 2 zones voisines (sauf Zone 1) | LYON30.1 |
| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) Toutes Zones sauf Zone 1 | LYON30.2 |
| Forfait mensuel TCL PA Etudiants 26/27 ans (2 mois offerts) Toutes Zones | LYON30.3 |
| Forfait mensuel TCL Etudiants 26/27 ans Zones 1 et 2 | LYON31 |
| Forfait mensuel TCL Etudiants 26/27 ans 2 zones voisines (sauf Zone 1) | LYON31.1 |
| Forfait mensuel TCL Etudiants 26/27 ans Toutes Zones sauf Zone 1 | LYON31.2 |
| Forfait mensuel TCL Etudiants 26/27 ans Toutes Zones | LYON31.3 |
| Forfait annuel TCL Etudiants 26/27 ans Zones 1 et 2 | LYON32 |
| Forfait annuel TCL Etudiants 26/27 ans 2 zones voisines (sauf Zone 1) | LYON32.1 |
| Forfait annuel TCL Etudiants 26/27 ans Toutes Zones sauf Zone 1 | LYON32.2 |
| Forfait annuel TCL Etudiants 26/27 ans Toutes Zones | LYON32.3 |
| Forfait mensuel illimité TCL Retraités (1 mois offert) Zones 1 et 2 | LYON33 |
| Forfait mensuel illimité TCL Retraités (1 mois offert) 2 zones voisines (sauf Zone 1) | LYON33.1 |
| Forfait mensuel illimité TCL Retraités (1 mois offert) Toutes Zones sauf Zone 1 | LYON33.2 |
| Forfait mensuel illimité TCL Retraités (1 mois offert) Toutes Zones | LYON33.3 |
| Forfait mensuel TCL Retraités Zones 1 et 2 | LYON34 |
| Forfait mensuel TCL Retraités 2 zones voisines (sauf Zone 1) | LYON34.1 |
| Forfait mensuel TCL Retraités Toutes Zones sauf Zone 1 | LYON34.2 |
| Forfait mensuel TCL Retraités Toutes Zones | LYON34.3 |
| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) Zones 1 et 2 | LYON35 |
| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) 2 zones voisines (sauf Zone 1) | LYON35.1 |
| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) Toutes Zones sauf Zone 1 | LYON35.2 |
| Forfait mensuel illimité TCL 65 ans et + (1 mois offert) Toutes Zones | LYON35.3 |
| Forfait mensuel TCL 65 ans et + Zones 1 et 2 | LYON36 |
| Forfait mensuel TCL 65 ans et + 2 zones voisines (sauf Zone 1) | LYON36.1 |
| Forfait mensuel TCL 65 ans et + Toutes Zones sauf Zone 1 | LYON36.2 |
| Forfait mensuel TCL 65 ans et + Toutes Zones | LYON36.3 |
| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) Zones 1 et 2 | LYON37 |
| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) 2 zones voisines (sauf Zone 1) | LYON37.1 |
| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) Toutes Zones sauf Zone 1 | LYON37.2 |
| Forfait mensuel illimité TCL Familles nombreuses (1 mois offert) Toutes Zones | LYON37.3 |
| Forfait mensuel TCL Familles nombreuses Zones 1 et 2 | LYON38 |
| Forfait mensuel TCL Familles nombreuses 2 zones voisines (sauf Zone 1) | LYON38.1 |
| Forfait mensuel TCL Familles nombreuses Toutes Zones sauf Zone 1 | LYON38.2 |
| Forfait mensuel TCL Familles nombreuses Toutes Zones | LYON38.3 |
| Forfait mensuel Vélo'V PLUS | LYON39 |
| Forfait mensuel T-Libr TER+TCL | LYON4 |
| Forfait mensuel illimité TCL Solidaire 1 (1 mois offert) | LYON40 |
| Forfait mensuel illimité TCL Solidaire 1 (2 mois offerts) | LYON41 |
| Forfait mensuel TCL Solidaire 1 | LYON42 |
| Forfait annuel TCL Solidaire 1 | LYON43 |
| Forfait mensuel illimité TCL Solidaire 2 (1 mois offert) | LYON44 |
| Forfait mensuel TCL Solidaire 2 | LYON45 |
| Forfait mensuel illimité TCL+Cars du Rhône+Libellule tarif réduit (2 mois offerts) | LYON46 |
| Forfait mensuel TCL+Cars du Rhône+Libellule tarif réduit | LYON47 |
| Forfait annuel TCL+Cars du Rhône+Libellule tarif réduit | LYON48 |
| Forfait mensuel Rhône Pass (Cars du Rhône + TCL) | LYON5 |
| Forfait mensuel Rhône Primo (Cars du Rhône) | LYON51 |
| Forfait mensuel illimité TCL+Cars du Rhône+Libellule 26/65 ans (2 mois offerts) | LYON52 |
| Forfait mensuel TCL+Cars du Rhône+Libellule 26/65 ans | LYON53 |
| Forfait annuel TCL+Cars du Rhône+Libellule 26/65 ans | LYON54 |
| Forfait mensuel TCL+Cars du Rhône+Libellule Familles nombreuses (2 mois offerts) | LYON55 |
| Forfait mensuel TCL+Cars du Rhône+Libellule Familles nombreuses | LYON56 |
| Forfait annuel TCL+Cars du Rhône+Libellule Familles nombreuses | LYON57 |
| Forfait mensuel Combiné TCL+TER | LYON58 |
| Forfait mensuel Etudiants TER+TCL+LVA/RUBAN | LYON59 |
| Forfait mensuel City Pass Age d'Or | LYON6 |
| Forfait mensuel Etudiants TCL+TER+STAS | LYON61 |
| Forfait mensuel TCL+TER+STAS | LYON62 |
| Forfait mensuel Etudiants TCL+TER+LVA+RUBAN | LYON63 |
| Forfait mensuel TCL+TER+LVA+RUBAN | LYON64 |
| Forfait mensuel Etudiants TCL+TER+STAS+LVA+RUBAN | LYON65 |
| Forfait mensuel TCL+TER+STAS+LVA+RUBAN | LYON66 |
| Forfait mensuel T-Libr TER+TCL - 26 ans | LYON67 |
| Forfait mensuel Combiné TER+TCL+TAG - 26 ans | LYON68 |
| Forfait mensuel TER+TCL+LVA - 26 ans | LYON69 |
| Forfait mensuel Campus | LYON7 |
| Forfait mensuel TCL+TER+STAS - 26 ans | LYON71 |
| Forfait mensuel TCL+TER+LVA+RUBAN -26 ans | LYON72 |
| Forfait mensuel TCL+TER+STAS+LVA+RUBAN - 26 ans | LYON73 |
| Forfait mensuel TCL+TER+LVA - 26 ans | LYON74 |
| Forfait mensuel TCL+TER+RUBAN - 26 ans | LYON75 |
| Forfait mensuel TCL+TER+COTIERE | LYON76 |
| Forfait mensuel TCL+TER+COTIERE -26 ans | LYON77 |
| Forfait mensuel illimité TCL+Cars du Rhône+Libellule 65 ans et + et retraités 60 ans et + | LYON78 |
| Forfait annuel illimité TCL+Cars du Rhône+Libellule 65 ans et + et retraités 60 ans et + | LYON79 |
| Forfait mensuel Pass Partout Jeunes | LYON8 |
| Forfait mensuel Cigogne | LYON9 |
| Forfait annuel Moovéa Setram illico Scolaires | MANS1 |
| Forfait 30 jours Moovéa Setram Illico Scolaires | MANS11 |
| Forfait annuel Moovéa Setram illico Etudiants | MANS2 |
| Forfait 30 jours Moovéa Setram Illico Etudiants | MANS21 |
| Forfait annuel Moovéa Setram illico Salariés | MANS3 |
| Forfait 30 jours Moovéa Setram Illico Salariés | MANS31 |
| Forfait annuel Moovéa Setram illico tout public | MANS4 |
| Forfait 30 jours Moovéa Setram Illico Tout Public | MANS41 |
| Forfait annuel Moovéa Setram illico Seniors | MANS5 |
| Forfait 30 jours Moovéa Setram Illico Seniors | MANS51 |
| Forfait annuel Moovéa Azur 1 Handicapés | MANS6 |
| Forfait mensuel 11-25 ans Setram | MANS7 |
| Forfait annuel 11-25 ans Setram | MANS71 |
| Forfait mensuel Vélo classique habitants/Salariés Le Mans métropole | MANS8 |
| Forfait annuel Vélo classique habitants/Salariés Le Mans métropole | MANS81 |
| Forfait mensuel Vélo classique Setram | MANS82 |
| Forfait annuel Vélo classique Setram | MANS83 |
| Forfait mensuel Vélo électrique salarié hors habitant Le Mans | MANS84 |
| Forfait annuel Vélo électrique salarié hors habitant Le Mans | MANS85 |
| Forfait mensuel Vélo électrique Setram | MANS86 |
| Forfait annuel Vélo électrique Setram | MANS87 |
| Forfait mensuel Vélo électrique habitants Le Mans | MANS88 |
| Forfait annuel Vélo électrique habitants Le Mans | MANS89 |
| Forfait Trimestriel Vélo électrique habitants Le Mans | MANS90 |
| Forfait Trimestriel Vélo électrique salarié hors habitants Le Mans | MANS91 |
| Forfait Trimestriel Vélo électrique Setram | MANS92 |
| Forfait annuel Pass Métropôle Aix-Marseille-Provence Etudiant/Sénior/Solidaire | METROPOLEAMP1 |
| Forfait annuel Pass Métropôle Aix-Marseille-Provence Tout public | METROPOLEAMP1.1 |
| Forfait mensuel Pass Métropôle Aix-Marseille-Provence Etudiant/Sénior | METROPOLEAMP2 |
| Forfait mensuel Pass Métropôle Aix-Marseille-Provence Tout public | METROPOLEAMP2.1 |
| Forfait mensuel Pass Métropôle Aix-Marseille-Provence Solidaire | METROPOLEAMP2.2 |
| Forfait mensuel 18-26 ans | METZ1 |
| Forfait mensuel Vermeil 65 ans et + Permanent | METZ10 |
| Forfait mensuel Vermeil 65 ans et + | METZ11 |
| Forfait mensuel 27-64 ans liberté mensuel | METZ2 |
| Forfait mensuel 27-64 ans liberté permanent | METZ3 |
| Forfait annuel 18-26 ans | METZ4 |
| Forfait mensuel 18-26 ans permanent | METZ5 |
| Forfait mensuel 18-26 ans boursier | METZ6 |
| Forfait annuel 18-26 ans boursier | METZ7 |
| Forfait mensuel accompagnants personne à mobilité réduite | METZ8 |
| Forfait mensuel réduit bénéficiaires CSS et AME | METZ9 |
| Forfait mensuel YAKA de 4 à 26 ans (Agglomération Montargoise) | MONTARGIS01 |
| Forfait annuel YAKA de 4 à 26 ans (Agglomération Montargoise) | MONTARGIS02 |
| Forfait mensuel ACTIVA de 27 à 64 ans ou hors Agglomération Montargoise | MONTARGIS03 |
| Forfait annuel ACTIVA de 27 à 64 ans ou hors Agglomération Montargoise | MONTARGIS04 |
| Forfait annuel SERENYS + 65 ans (Agglomération Montargoise) | MONTARGIS05 |
| Forfait mensuel SERENITY + 65 ans (Agglomération Montargoise) | MONTARGIS06 |
| Forfait annuel SERENITY + 65 ans (Agglomération Montargoise) | MONTARGIS07 |
| Forfait mensuel Evolity Fréquence (Tout public) | MONTBELIARD01 |
| Forfait mensuel Evolity Senior (60 ans et +) | MONTBELIARD02 |
| Forfait mensuel Evolity Boursier (- de 26 ans) | MONTBELIARD03 |
| Forfait mensuel Evolity Jeune (- de 26 ans) | MONTBELIARD04 |
| Forfait annuel Evolity (18 - 26 ans) | MONTBELIARD05 |
| Forfait mensuel Evolity Social | MONTBELIARD06 |
| Forfait annuel Evolity Accès | MONTBELIARD07 |
| Forfait mensuel Location vélo standard/pliant tarif plein | MONTM01 |
| Forfait mensuel Location vélo standard/pliant tarif réduit | MONTM02 |
| Forfait mensuel Location vélo à assistance électrique tarif plein | MONTM03 |
| Forfait mensuel Location vélo à assistance électrique tarif réduit | MONTM04 |
| Forfait mensuel Location vélo cargo tarif plein | MONTM05 |
| Forfait mensuel Location vélo cargo tarif réduit | MONTM06 |
| Forfait annuel Location vélo standard/pliant tarif plein | MONTM07 |
| Forfait annuel Location vélo standard/pliant tarif réduit | MONTM08 |
| Forfait mensuel EMMA pour tous | MONTPELLIER1 |
| Forfait mensuel EMMA pour tous résident Métropole | MONTPELLIER11 |
| Forfait mensuel EMMA PDE | MONTPELLIER2 |
| Forfait mensuel EMMA PDE résident Métropole | MONTPELLIER21 |
| Forfait mensuel MULTIMODAL | MONTPELLIER3 |
| Forfait mensuel EMMA jeunes | MONTPELLIER4 |
| Forfait mensuel EMMA jeunes résident Métropole | MONTPELLIER41 |
| Forfait mensuel 31 jours pour tous | MONTPELLIER5 |
| Forfait mensuel 31 jours pour tous résident Métropole | MONTPELLIER51 |
| Forfait annuel EMMA jeunes | MONTPELLIER6 |
| Forfait annuel EMMA jeunes résident Métropole | MONTPELLIER61 |
| Forfait annuel EMMA pour tous | MONTPELLIER7 |
| Forfait annuel EMMA pour tous résident Métropole | MONTPELLIER71 |
| Forfait annuel EMMA PDE | MONTPELLIER8 |
| Forfait annuel EMMA PDE résident Métropole | MONTPELLIER81 |
| Forfait mensuel 31 jours jeunes | MONTPELLIER9 |
| Forfait mensuel 31 jours jeunes résident Métropole | MONTPELLIER91 |
| Forfait mensuel Soléa - 26 ans | MULHOUSE01 |
| Forfait mensuel Soléa 26 - 64 ans | MULHOUSE02 |
| Forfait mensuel Soléa + 65 ans | MULHOUSE03 |
| Forfait mensual Soléa Joker | MULHOUSE04 |
| Forfait annuel Soléa - 26 ans | MULHOUSE05 |
| Forfait annuel Soléa 26 - 64 ans | MULHOUSE06 |
| Forfait annuel Soléa + 65 ans | MULHOUSE07 |
| Forfait mensuel STAN (Abonnement 31 jours) -26 ans ou étudiants | NANCY1 |
| Forfait mensuel STAN (Abonnement 31 jours) +26 ans | NANCY2 |
| Forfait mensuel STAN (Abonnement 31 jours) +65 ans | NANCY3 |
| Forfait mensuel STAN (Abonnement 31 jours) CMU | NANCY4 |
| Forfait mensuel STAN (Abonnement illimité) -26 ans ou étudiants | NANCY5 |
| Forfait mensuel STAN (Abonnement illimité) étudiant boursier | NANCY6 |
| Forfait mensuel STAN (Abonnement illimité) +26 ans | NANCY7 |
| Forfait mensuel STAN (Abonnement illimité) +65 ans | NANCY8 |
| Forfait mensuel STAN (Abonnement illimité) salarié | NANCY9 |
| Forfait mensuel KEOLIS MixCités Grand Public | NANCYK1 |
| Forfait mensuel KEOLIS MixCités - 26 ans | NANCYK2 |
| Forfait mensuel KEOLIS MixCités Solidarité | NANCYK3 |
| Forfait mensuel KEOLIS MixCités Flex + 26 ans | NANCYK4 |
| Forfait mensuel KEOLIS MixCités Flex - 26 ans | NANCYK5 |
| Forfait mensuel KEOLIS MixCités Flex - 26 ans Boursier | NANCYK6 |
| Forfait mensuel KEOLIS MixCités Flex Salariés | NANCYK7 |
| Forfait mensuel KEOLIS MixCités Flex Entreprises | NANCYK8 |
| Forfait mensuel Tan + de 60 ans | NANTES0 |
| Forfait mensuel Tan + de 26 ans | NANTES1 |
| Abonnement MonBicloo classique 3 mois | NANTES10 |
| Abonnement MonBicloo classique 9 mois | NANTES11 |
| Abonnement MonBicloo classique 1 an | NANTES12 |
| Abonnement MonBicloo classique 1 an Pack Mobilité | NANTES13 |
| Abonnement pour 1 mois - 18 ans | NANTES14 |
| Abonnement pour 1 mois - 26 ans | NANTES15 |
| Abonnement pour 1 mois + 26 ans | NANTES16 |
| Abonnement pour 1 mois + 60 ans | NANTES17 |
| Forfait mensuel Tan - de 26 ans | NANTES2 |
| Forfait mensuel Tan - de 18 ans | NANTES3 |
| Forfait annuel Formule illimitée Tan + de 26 ans | NANTES4 |
| Forfait annuel Formule illimitée Tan - de 26 ans | NANTES5 |
| Forfait annuel Formule illimitée Tan - de 18 ans | NANTES6 |
| Forfait mensuel Nantes 5 Zones SNCF | NANTES7 |
| Forfait annuel Formule illimitée Tan + de 60 ans | NANTES8 |
| Abonnement MonBicloo classique 1 mois | NANTES9 |
| Forfait annuel ALEOP Simple - de 25 ans | NANTESALEOP1 |
| Forfait annuel ALEOP Combiné - de 25 ans | NANTESALEOP2 |
| Forfait annuel ALEOP + de 26 ans | NANTESALEOP3 |
| Forfait mensuel ALEOP + de 26 ans | NANTESALEOP4 |
| Forfait annuel ALEOP - de 26 ans | NANTESALEOP5 |
| Forfait mensuel ALEOP - de 26 ans | NANTESALEOP6 |
| Forfait mensuel NAVIGO AME Zones 2 - 3 | NAVIGO06.2.3 |
| Forfait mensuel NAVIGO AME Zones 3 - 4 | NAVIGO06.3.4 |
| Forfait mensuel NAVIGO AME Zones 4 - 5 | NAVIGO06.4.5 |
| Forfait mensuel NAVIGO AME Toutes Zones | NAVIGO06.TZ |
| Forfait semaine NAVIGO Zones 2 - 3 | NAVIGO07.2.3 |
| Forfait semaine NAVIGO Zones 3 - 4 | NAVIGO07.3.4 |
| Forfait semaine NAVIGO Zones 4 - 5 | NAVIGO07.4.5 |
| Forfait semaine NAVIGO Toutes Zones | NAVIGO07.TZ |
| Forfait mensuel NAVIGO Zones 1 - 2 | NAVIGO1.2 |
| Forfait mensuel NAVIGO Zones 1 - 3 | NAVIGO1.3 |
| Forfait mensuel NAVIGO Zones 1 - 4 | NAVIGO1.4 |
| Forfait mensuel NAVIGO Zones 1 - 5 | NAVIGO1.5 |
| Forfait mensuel NAVIGO Zones 2 - 3 | NAVIGO2.3 |
| Forfait mensuel NAVIGO Zones 2 - 4 | NAVIGO2.4 |
| Forfait mensuel NAVIGO Zones 2 - 5 | NAVIGO2.5 |
| Forfait mensuel NAVIGO Zones 3 - 4 | NAVIGO3.4 |
| Forfait mensuel NAVIGO Zones 3 - 5 | NAVIGO3.5 |
| Forfait mensuel NAVIGO Zones 4 - 5 | NAVIGO4.5 |
| Forfait mensuel NAVIGO Toutes Zones | NAVIGO4.TZ |
| Forfait mensuel NAVIGO Solidarité Zones 1 - 2 | NAVIGO5.1.2 |
| Forfait mensuel NAVIGO Solidarité Zones 1 - 3 | NAVIGO5.1.3 |
| Forfait mensuel NAVIGO Solidarité Zones 1 - 4 | NAVIGO5.1.4 |
| Forfait mensuel NAVIGO Solidarité Zones 1 - 5 | NAVIGO5.1.5 |
| Forfait mensuel NAVIGO Solidarité Zones 2 - 3 | NAVIGO5.2.3 |
| Forfait mensuel NAVIGO Solidarité Zones 2 - 4 | NAVIGO5.2.4 |
| Forfait mensuel NAVIGO Solidarité Zones 2 - 5 | NAVIGO5.2.5 |
| Forfait mensuel NAVIGO Solidarité Zones 3 - 4 | NAVIGO5.3.4 |
| Forfait mensuel NAVIGO Solidarité Zones 3 - 5 | NAVIGO5.3.5 |
| Forfait mensuel NAVIGO Solidarité Zones 4 - 5 | NAVIGO5.4.5 |
| Forfait mensuel NAVIGO Solidarité Toutes Zones | NAVIGO5.TZ |
| Forfait mensuel NAVIGO Sénior Toutes Zones | NAVIGO6.TZ |
| Forfait annuel Skipper | NAZAIRE01 |
| Forfait annuel Campus | NAZAIRE02 |
| Forfait annuel Multipass | NAZAIRE03 |
| Forfait annuel Pass Entreprise | NAZAIRE04 |
| Forfait mensuel Skipper | NAZAIRE11 |
| Forfait mensuel Campus | NAZAIRE12 |
| Forfait mensuel Multipass | NAZAIRE13 |
| Forfait mensuel 18-25 ans | NAZAIRE14 |
| Forfait annuel 18-25 ans | NAZAIRE15 |
| Forfait mensuel 26-59 ans | NAZAIRE16 |
| Forfait annuel 26-59 ans | NAZAIRE17 |
| Forfait mensuel 60 ans et + | NAZAIRE18 |
| Forfait annuel 60ans et + | NAZAIRE19 |
| Forfait annuel Ligne d'Azur Etudiant | NICE1 |
| Forfait annuel Ligne d'Azur 26-64 ans | NICE10 |
| Forfait annuel Ligne d'Azur 65 ans & + | NICE11 |
| Forfait annuel Pass SudAzur Zone 4 | NICE12 |
| Forfait annuel Ligne d'Azur Salarié | NICE2 |
| Forfait annuel Ligne d'Azur Social | NICE3 |
| Forfait mensuel Ligne d'Azur Etudiant | NICE4 |
| Forfait mensuel Ligne d'Azur Salarié | NICE5 |
| Forfait mensuel Ligne d'Azur Social | NICE6 |
| Forfait annuel Carte Azur | NICE7 |
| Forfait mensuel Carte Azur | NICE8 |
| Forfait mensuel Ligne d'Azur 26-64 ans | NICE9 |
| Forfait mensuel Ligne d'Azur 65 ans & + | NICE90 |
| Forfait mensuel Pass SudAzur Zone 4 | NICE91 |
| Forfait mensuel ligne d'Azur -26 formule illimité | NICE92 |
| Forfait annuel Pass Salarié TANGO | NIMES1 |
| Forfait mensuel Pass Liberté TANGO | NIMES2 |
| Forfait annuel Pass Liberté TANGO | NIMES3 |
| Forfait mensuel Pass BANG TANGO | NIMES4 |
| Forfait annuel Pass BANG TANGO | NIMES5 |
| Forfait mensuel Pass ONDEA (Adultes + 26ans) | ONDEA1 |
| Forfait mensuel OndéSynchro – 26 ans | ONDEA10 |
| Forfait mensuel Ondésynchro + 26 ans | ONDEA11 |
| Forfait annuel Pass ONDEA étudiant | ONDEA12 |
| Forfait annuel OndéSynchro - 26 ans ou + 65 ans | ONDEA13 |
| Forfait annuel OndéSynchro + 26 ans – 64 ans | ONDEA14 |
| Forfait mensuel Pass ONDEA (Jeunes - 26ans) | ONDEA2 |
| Forfait mensuel Titre solidaire | ONDEA3 |
| Forfait annuel Pass ONDEA (Adultes + 26ans) | ONDEA4 |
| Forfait annuel Pass Senior | ONDEA5 |
| Forfait annuel Pass Mobilité | ONDEA6 |
| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 4 | ONDEA7 |
| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 1 | ONDEA7.1 |
| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 2 | ONDEA7.2 |
| Forfait annuel Pass ONDEA (Jeunes - 26 ans) Quotient Familial 3 | ONDEA7.3 |
| Forfait mensuel Pass ONDEA abonnés TER + 26 ans | ONDEA8 |
| Forfait mensuel Pass ONDEA abonnés TER - 26 ans | ONDEA9 |
| Forfait mensuel TAO Tout Public | ORLEANS1 |
| Forfait annuel TAO Quotient Familial 1 | ORLEANS10 |
| Forfait mensuel TAO Quotient Familial 2 | ORLEANS11 |
| Forfait annuel TAO Quotient Familial 2 | ORLEANS12 |
| Forfait annuel TAO Tout Public | ORLEANS2 |
| Forfait mensuel TAO Jeune | ORLEANS3 |
| Forfait annuel TAO Jeune | ORLEANS4 |
| Forfait mensuel TAO Jeune - Etudiant/Apprenti | ORLEANS5 |
| Forfait annuel TAO Jeune - Etudiant/Apprenti | ORLEANS6 |
| Forfait mensuel TAO Solidaire | ORLEANS7 |
| Forfait annuel TAO Solidaire | ORLEANS8 |
| Forfait mensuel TAO Quotient Familial 1 | ORLEANS9 |
| Forfait mensuel -26 ans | PAU1.1 |
| Forfait mensuel 26/64 ans | PAU1.2 |
| Forfait mensuel Seniors | PAU1.3 |
| Forfait mensuel P.U.M.a | PAU1.4 |
| Forfait mensuel Parking | PAU1.5 |
| Forfait annuel -26 ans | PAU2.1 |
| Forfait annuel 26/64 ans | PAU2.2 |
| Forfait annuel Seniors | PAU2.3 |
| Forfait annuel P.U.M.a | PAU2.4 |
| Forfait annuel Parking | PAU2.5 |
| Forfait mensuel VPass Vitalis -18 ans | POIT1.1 |
| Forfait annuel VPass Vitalis -18 ans | POIT1.2 |
| Forfait mensuel VPass Vitalis 18-27 ans | POIT2.1 |
| Forfait annuel VPass Vitalis 18-27 ans | POIT2.2 |
| Forfait mensuel VPass Vitalis 28 et plus | POIT3.1 |
| Forfait annuel VPass Vitalis 28 et plus | POIT3.2 |
| Forfait mensuel VPass Vitalis 65 ans & plus | POIT4.1 |
| Forfait annuel VPass Vitalis 65 ans & plus | POIT4.2 |
| Forfait mensuel VPass Vitalis Multimodaux | POIT5.1 |
| Forfait annuel VPass Vitalis Multimodaux | POIT5.2 |
| Forfait mensuel Numérique 18-27ans | POIT6.1 |
| Forfait mensuel Numérique 28ans et + | POIT6.2 |
| Forfait mensuel Numérique TER/CAR | POIT6.3 |
| Forfait annuel Vitalis QF1 28 et plus | POIT7.1 |
| Forfait annuel Vitalis QF2 28 et plus | POIT7.2 |
| Forfait annuel Vitalis QF3 28 et plus | POIT7.3 |
| Forfait annuel Vitalis QF4 28 et plus | POIT7.4 |
| Forfait annuel Vitalis QF5 28 et plus | POIT7.5 |
| Forfait annuel QUB | QUIMPER1 |
| Forfait mensuel QUB | QUIMPER2 |
| Forfait mensuel Senior QUB | QUIMPER3 |
| Forfait mensuel Jeune -26 ans QUB | QUIMPER4 |
| Forfait annuel Sénior QUB | QUIMPER5 |
| Forfait annuel Jeune -26 ans QUB | QUIMPER6 |
| Forfait mensuel CITURA étudiants | REIMS1 |
| Forfait annuel CITURA étudiants | REIMS1.1 |
| Forfait mensuel CITURA -18 ans | REIMS2 |
| Forfait annuel CITURA -18 ans JUNIOR+ | REIMS2.1 |
| Forfait mensuel CITURA 18-65 ans | REIMS3 |
| Forfait annuel CITURA 18-65 ans | REIMS3.1 |
| Forfait mensuel CITURA +65 ans | REIMS4 |
| Forfait annuel CITURA +65 ans | REIMS4.1 |
| Forfait mensuel Rennes < 18 ans | RENNES1 |
| Forfait annuel Rennes < 18 ans | RENNES1.1 |
| Forfait mensuel Rennes 18 à 26 ans | RENNES2 |
| Forfait annuel Rennes 18 à 26 ans | RENNES2.1 |
| Forfait mensuel Rennes 27 à 64 ans | RENNES3 |
| Forfait annuel Rennes 27 à 64 ans | RENNES3.1 |
| Forfait mensuel Rennes 65 à 74 ans | RENNES4 |
| Forfait annuel Rennes 65 à 74 ans | RENNES4.1 |
| Forfait mensuel Rennes >= 75 ans | RENNES5 |
| Forfait annuel Rennes >= 75 ans | RENNES5.1 |
| Forfait annuel PASS mobilité 18-26 ans | RENNES6 |
| Forfait annuel PASS mobilité 27-64 ans | RENNES7 |
| Forfait annuel PASS mobilité 65-74 ans | RENNES8 |
| Forfait mensuel CAR JAUNE tout public | REUNION01 |
| Forfait mensuel CAR JAUNE -26 ans | REUNION02 |
| Forfait annuel CAR JAUNE -26 ans | REUNION03 |
| Forfait mensuel Réuni'Pass tout public | REUNION04 |
| Forfait annuel Réuni'Pass tout public | REUNION05 |
| Forfait annuel Réuni'Pass étudiant | REUNION06 |
| Forfait annuel Tout public | ROANNE01 |
| Forfait annuel Jeunes - 26 ans | ROANNE02 |
| Forfait annuel Scolaire | ROANNE03 |
| Forfait annuel Sesam 1 | ROANNE04 |
| Forfait annuel Sesam 2 | ROANNE05 |
| Forfait annuel Sesam 3 | ROANNE06 |
| Forfait mensuel Tout public | ROANNE1 |
| Forfait mensuel Jeunes - 26 ans | ROANNE2 |
| Forfait mensuel Scolaire | ROANNE3 |
| Forfait mensuel Sesam 1 | ROANNE4 |
| Forfait mensuel Sesam 2 | ROANNE5 |
| Forfait mensuel Sesam 3 | ROANNE6 |
| Forfait mensuel Yélo Liberté | ROCHELLE01 |
| Forfait mensuel Yélo jeune | ROCHELLE02 |
| Forfait annuel Yélo domicile-travail | ROCHELLE03 |
| Forfait annuel Yélo Jeune - 26 ans | ROCHELLE04 |
| Forfait mensuel Yélo Location vélo classique | ROCHELLE05 |
| Forfait mensuel Yélo Location vélo classique jeune - 26 ans | ROCHELLE06 |
| Forfait mensuel Yélo Location vélo à assistance électrique | ROCHELLE07 |
| Forfait annuel Location vélo classique | ROCHELLE08 |
| Forfait annuel Yélo location vélo classique jeune - 26 ans | ROCHELLE09 |
| Forfait mensuel Sésame 31 jours Astuce | ROUEN1 |
| Vélos de ville à assistance électrique e-cardan de 1 à 3 mois | ROUEN10 |
| Vélos de ville à assistance électrique e-cardan 4ème mois | ROUEN11 |
| Vélos de ville à assistance éléctrique vitality de 1 à 3 mois | ROUEN12 |
| Vélos de ville à assitance électrique vitality 4ème mois | ROUEN13 |
| Vélos pliants premium de 1 à 3 mois | ROUEN14 |
| Vélos plients premium 4ème mois | ROUEN15 |
| Vélos cargos/rallongés mécanique de 1 à 3 mois | ROUEN16 |
| Vélos cargos/rallongés mécanique 4ème mois | ROUEN17 |
| Vélos cargos/rallongés à assitance éléctrique de 1 à 3 mois | ROUEN18 |
| Vélos cargos/rallongés à assistance électrique 4ème mois | ROUEN19 |
| Forfait mensuel Sésame 31 jours Astuce Elbeuf | ROUEN2 |
| Vélos de ville à assistance électrique e-cardan - étudiant | ROUEN20 |
| Vélos de ville à assistance électrique vitality - étudiant | ROUEN21 |
| Vélos de ville pliants premium - étudiant | ROUEN22 |
| Vélos cargos/rallongés mécanique - étudiant | ROUEN23 |
| Vélos cargos/rallongés à assitance électrique - étudiant | ROUEN24 |
| Forfait mensuel Sésame 365 jours Astuce | ROUEN3 |
| Forfait mensuel Sésame 365 jours Astuce Elbeuf | ROUEN4 |
| Forfait mensuel Jeunes 365 jours - de 18 ans | ROUEN5 |
| Forfait mensuel Demi-Tarif 31 jours Astuce | ROUEN6 |
| Forfait mensuel Demi-Tarif 31 jours Astuce Elbeuf | ROUEN7 |
| Forfait mensuel Demi-Tarif 365 jours Astuce | ROUEN8 |
| Forfait mensuel Demi-Tarif 365 jours Astuce Elbeuf | ROUEN9 |
| Forfait mensuel Impulsyon pour tous | RSYON1.1 |
| Forfait mensuel Impulsyon pour tous 2ème adulte | RSYON1.2 |
| Forfait annuel Elit Impulsyon pour tous | RSYON1.3 |
| Forfait annuel Elit Impulsyon pour tous 2ème adulte | RSYON1.4 |
| Forfait mensuel Impulsyon -26 ans | RSYON2.1 |
| Forfait mensuel Impulsyon -26 ans 2ème enfant | RSYON2.2 |
| Forfait mensuel Impulsyon -26 ans 3ème enfant & plus | RSYON2.3 |
| Forfait annuel Elit Impulsyon -26 ans | RSYON2.4 |
| Forfait annuel Elit Impulsyon -26 ans 2ème enfant | RSYON2.5 |
| Forfait annuel Elit Impulsyon -26 ans 3ème enfant & plus | RSYON2.6 |
| Forfait mensuel Impulsyon 65 ans & plus | RSYON3.1 |
| Forfait annuel Impulsyon 65 ans & plus | RSYON3.2 |
| Forfait annuel Pass XL | RTM-2.1 |
| Forfait annuel Pass XL Jeunes (- 26 ans) | RTM-2.2 |
| Forfait annuel Pass XL Solidarité (CMUC) | RTM-2.3 |
| Forfait annuel Pass XL Solidarité (Jeune) | RTM-2.4 |
| Pass Annuel Métropole Etudiant | RTM-2.5 |
| Forfait mensuel Pass XL 30 jours | RTM-3.1 |
| Forfait mensuel Pass XL 30 jours Jeunes (- 26 ans) | RTM-3.2 |
| Forfait mensuel Pass XL 30 jours Solidarité | RTM-3.3 |
| Pass mensuel Permanent Métropole Etudiant | RTM-4.1 |
| Forfait Pass Permanent Métropole Sénior | RTM-4.2 |
| Forfait Pass Permanent Sénior | RTM-4.3 |
| Forfait Pass Annuel Métropole Sénior | RTM-4.4 |
| Forfait Pass Annuel Sénior | RTM-4.5 |
| Forfait Pass 30 jours Métropole Sénior | RTM-4.6 |
| Forfait Pass 30 jours Sénior | RTM-4.7 |
| Forfait mensuel RTM Pass XL Permanent | RTM-GO |
| Forfait mensuel RTM Go moins de 18 ans | RTM-GO-18 |
| Forfait mensuel RTM Pass XL Permanent Jeunes (- 26 ans) | RTM-GO-26 |
| Abonnement tout public mensuel | SAUMUR1 |
| Abonnement tout public annuel | SAUMUR1.1 |
| Abonnement solidaire mensuel | SAUMUR2 |
| Abonnement solidaire annuel | SAUMUR2.1 |
| Abonnement +65 ans et - 26 ans mensuel | SAUMUR3 |
| Abonnement +65 ans et - 26 ans annuel | SAUMUR3.1 |
| Abonnement multimodal - 26 ans mensuel | SAUMUR4 |
| Abonnement multimodal - 26 ans annuel | SAUMUR4.1 |
| Abonnement multimodal 26 ans et + mensuel | SAUMUR5 |
| Abonnement multimodal 26 ans et + annuel | SAUMUR5.1 |
| Forfait mensuel STAS Tout public | STETIENNE1 |
| Forfait mensuel STAS -26 ans | STETIENNE2 |
| Forfait mensuel STAS Elève Etudiant | STETIENNE3 |
| Forfait annuel STAS Tout public Comptant | STETIENNE4 |
| Forfait annuel STAS Senior | STETIENNE5 |
| Forfait annuel STAS -26 ans | STETIENNE6 |
| Forfait annuel STAS Eleve Etudiant | STETIENNE7 |
| Forfait annuel STAS Tout public Prélèvement | STETIENNE8 |
| Forfait mensuel STAS Senior | STETIENNE9 |
| Forfait mensuel 4 - 17 ans | STRASBOURG1.1 |
| Forfait mensuel 18 - 25 ans | STRASBOURG1.2 |
| Forfait mensuel 26 - 64 ans | STRASBOURG1.3 |
| Forfait mensuel 65 ans et + | STRASBOURG1.4 |
| Forfait mensuel Impersonnel | STRASBOURG1.5 |
| Forfait mensuel P+R Rotonde | STRASBOURG1.6 |
| Forfait mensuel PMR | STRASBOURG1.7 |
| Forfait annuel 4 - 17 ans | STRASBOURG2.1 |
| Forfait annuel 18 - 25 ans | STRASBOURG2.2 |
| Forfait annuel 26 - 64 ans | STRASBOURG2.3 |
| Forfait annuel 65 ans et + | STRASBOURG2.4 |
| Forfait annuel Impersonnel | STRASBOURG2.5 |
| Forfait annuel P+R Rotonde | STRASBOURG2.6 |
| Forfait annuel PMR | STRASBOURG2.7 |
| Forfait mensuel Europass | STRASBOURG3 |
| Forfait mensuel Europass Mini | STRASBOURG3.1 |
| Forfait annuel Pass Mobilité Liberté 19 - 25 ans | STRASBOURG4.1 |
| Forfait annuel Pass Mobilité Liberté 26 - 64 ans | STRASBOURG4.2 |
| Forfait annuel Pass Mobilité Liberté + 65 ans | STRASBOURG4.3 |
| Forfait annuel Pass Mobilité Premium 19 - 25 ans | STRASBOURG4.4 |
| Forfait annuel Pass Mobilité Premium 26 - 64 ans | STRASBOURG4.5 |
| Forfait annuel Pass Mobilité Premium + 65 ans | STRASBOURG4.6 |
| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF>795€ | STRASBOURG5.1 |
| Forfait mensuel tarif solidaire (26/64 ans) QF>795€ | STRASBOURG5.2 |
| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF>= 583€ | STRASBOURG5.3 |
| Forfait mensuel tarif solidaire (26/64 ans) QF>= 583€ | STRASBOURG5.4 |
| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF>= 371€ | STRASBOURG5.5 |
| Forfait mensuel tarif solidaire (26/64 ans) QF>= 371€ | STRASBOURG5.6 |
| Forfait mensuel tarif solidaire (4/17+18/25+65 ans) QF < 370€ | STRASBOURG5.7 |
| Forfait mensuel tarif solidaire (26/64 ans) QF < 370€ | STRASBOURG5.8 |
| Abonnement mensuel Mistral | TOULON01 |
| Abonnement mensuel Mistral - 26 ans | TOULON02 |
| Abonnement annuel Mistral | TOULON03 |
| Abonnement annuel Mistral - 26 ans | TOULON04 |
| Forfait mensuel Carte Pastel pour 31 jours | TOULOUSE1 |
| Forfait mensuel Carte Pastel Activéo (annuel) | TOULOUSE2 |
| Forfait mensuel Carte Pastel - de 26 ans Etudiant | TOULOUSE3 |
| Forfait mensuel Carte Pastel + pour 31 jours | TOULOUSE4 |
| Forfait mensuel Carte Pastel - de 26 ans | TOULOUSE5 |
| Forfait annuel Carte Pastel - de 26 ans | TOULOUSE6 |
| Forfait annuel Carte Pastel - de 26 ans Etudiant | TOULOUSE7 |
| Forfait mensuel Combi 31 jours | TOULOUSE8 |
| Forfait annuel Aéroport mensualisé | TOULOUSE9 |
| Forfait mensuel Aéroport pour 31 jours | TOULOUSE10 |
| Forfait mensuel Tours Filbleu 11-18 ans | TOURS1 |
| Forfait mensuel Tours Filbleu Scolaire Famille nombreuse | TOURS2 |
| Forfait mensuel Tours Filbleu Scolaire ASR | TOURS3 |
| Forfait mensuel Tours Filbleu Scolaire ASM | TOURS4 |
| Forfait mensuel Tours Filbleu 19-25 ans | TOURS5 |
| Forfait mensuel Tours Filbleu 26-64 ans | TOURS6 |
| Forfait mensuel Tours Filbleu + 65 ans | TOURS7 |
| Forfait mensuel Tours Rémi Zen Jeune | TOURS8 |
| Forfait annuel TRACE Jeunes de 5-25ans | TRACE1.1 |
| Forfait mensuel TRACE Jeunes de 5-25ans | TRACE1.2 |
| Forfait annuel TRACE Pour tous 26-65ans | TRACE2.1 |
| Forfait mensuel TRACE Pour tous 26-65ans | TRACE2.2 |
| Forfait annuel TRACE Solidaire | TRACE3.1 |
| Forfait mensuel TRACE Solidaire | TRACE3.2 |
| Abonnement jeune 30 jours | TROYES01 |
| Abonnement jeune 12 mois | TROYES02 |
| Abonnement adulte 30 jours | TROYES03 |
| Abonnement adulte 12 mois | TROYES04 |
| Forfait mensuel UNIPASS Tout public | UNIPASS01 |
| Forfait mensuel UNIPASS - 27 ans | UNIPASS02 |
| Forfait annuel UNIPASS Tout public | UNIPASS03 |
| Forfait annuel UNIPASS - 27 ans | UNIPASS04 |
| Abonnement mensuel Citéa -26 ans | VALENCE01 |
| Abonnement annuel Citéa -26ans | VALENCE02 |
| Abonnement mensuel Citéa tout public | VALENCE03 |
| Abonnement annuel Citéa tout public | VALENCE04 |
| Forfait mensuel Pour tous 26/64 ans | VANNES1 |
| Forfait annuel Pour tous 26/64 ans | VANNES2 |
| Forfait mensuel -26 ans | VANNES3 |
| Forfait annuel -26 ans | VANNES4 |
| Forfait mensuel 65ans + | VANNES5 |
| Forfait annuel 65ans + | VANNES6 |
| Forfait mensuel Pass'Var Zone 1 | VAR1.1 |
| Forfait mensuel Pass'Lib Zone 2 | VAR1.2 |
| Forfait mensuel Pass'3 D Zone 3 | VAR1.3 |
| Forfait mensuel Pass'Etudes Zone 4 | VAR1.4 |
| Forfait annuel Pass'Var Zone 1 | VAR2.1 |
| Forfait annuel Pass'Lib Zone 2 | VAR2.2 |
| Forfait annuel Pass'3 D Zone 3 | VAR2.3 |
| Forfait annuel Pass'Etudes Zone 4 | VAR2.4 |
| Forfait annuel Pass'Jeune Zone 4 (hors TAD) | VAR2.5 |
| Forfait mensuel V-PLUS (vélib' mécanique) | VELIB1 |
| Forfait mensuel V-PLUS Jeune (vélib' mécanique) | VELIB2 |
| Forfait mensuel V-PLUS Senior (vélib' mécanique) | VELIB3 |
| Forfait mensuel V-PLUS Solidaire (vélib' mécanique) | VELIB4 |
| Forfait mensuel V-MAX (vélib' électrique) | VELIB5 |
| Forfait mensuel V-MAX Jeune (vélib' électrique) | VELIB6 |
| Forfait mensuel V-MAX Senior (vélib' électrique) | VELIB7 |
| Forfait mensuel V-MAX Solidaire (vélib' électrique) | VELIB8 |
| Forfait mensuel VELIGO normal | VELIGO1 |
| Forfait mensuel VELIGO réduit | VELIGO2 |
| Forfait mensuel VELIGO abonné Véligo Stationnement | VELIGO3 |
| Forfait mensuel VELIGO Biporteur,Triporteur et Rallongé Normal | VELIGO4 |
| Forfait mensuel VELIGO Biporteur,Triporteur et Rallongé Réduit | VELIGO5 |
| Forfait mensuel ZOU Annuel Marseille-Aix | ZOUSNCF1 |
| Forfait mensuel ZOU Mensuel Marseille-Aix | ZOUSNCF1.1 |
| Forfait annuel ZOU Pass étudiant Région Sud | ZOUSUD1.1 |
| Forfait mensuel ZOU Région Sud | ZOUSUD1.2 |
| Forfait annuel ZOU Région Sud | ZOUSUD1.3 |
| Forfait mensuel ZOU TER/CAR13 Mensuel Marseille-Aix | ZOUTERCAR1 |
| bTitreTransportCode | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TitreTransportCode** (**true**) ou pas (**false**) |
| titreTransportRemboursement | number(double) | Pourcentage de remboursement |
| bTitreTransportRemboursement | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TitreTransportRemboursement** (**true**) ou pas (**false**) |
| autreTitreTransportMontant | number(double) | Montant des autres titres de transport |
| bAutreTitreTransportMontant | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **AutreTitreTransportMontant** (**true**) ou pas (**false**) |
| autreTitreTransportRemboursement | number(double) | Pourcentage de remboursement des autres titres de transport |
| bAutreTitreTransportRemboursement | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **AutreTitreTransportRemboursement** (**true**) ou pas (**false**) |
| ticketRestaurant | integer(int32) | Permet d'indiquer le mode de gestion des titres restaurant : \| Mode de gestion \| Valeur correspondante \| \| --- \| --- \| \| Pas de ticket restaurant \| 0 \| \| Nombre de tickets restaurant automatique \| 1 \| \| Nombre de tickets restaurant saisi \| 2 \| \| Nombre de tickets restaurant saisi, repris du mois \| 3 \| |
| Mode de gestion | Valeur correspondante |
| Pas de ticket restaurant | 0 |
| Nombre de tickets restaurant automatique | 1 |
| Nombre de tickets restaurant saisi | 2 |
| Nombre de tickets restaurant saisi, repris du mois | 3 |
| bTicketRestaurant | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **TicketRestaurant** (**true**) ou pas (**false**) |
| codeTerritoire | string | Code territoire de la convention collective d'origine avant fusion |
| bCodeTerritoire | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **codeTerritoire** (**true**) ou pas (**false**) |
| codeSecteurDFS | string | Code secteur d'activité ouvrant droit au bénéfice de la DFS. ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28149%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A19%3A15Z&se=2026-11-13T20%3A19%3A15Z&sr=c&sp=r&sig=vASrfuYnQGkcNq6exQ1AFwzK02SlYdaYLN6wlHARkx4%3D) ***Si le code renseigné ne fait pas partie de la liste, sa valeur n'est pas prise en compte*** |
| bCodeSecteurDFS | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **codeSecteurDFS** (**true**) ou pas (**false**) |
| pctAbattementLissage | boolean | Lissage annuel |
| bPctAbattementLissage | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **pctAbattementLissage** (**true**) ou pas (**false**) |
| codeStatutRegimeProtectionSociale | string | Code statut régime protection sociale : \| Statut Régime Protection Sociale \| Valeur correspondante \| \| --- \| --- \| \| Cadre et assimilé (article 2.1 et 2.2) \| 01 \| \| Non cadre \| 04 \| |
| Statut Régime Protection Sociale | Valeur correspondante |
| Cadre et assimilé (article 2.1 et 2.2) | 01 |
| Non cadre | 04 |
| bCodeStatutRegimeProtectionSociale | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **CodeStatutRegimePortectionSociale** (**true**) ou pas (**false**) |
| emploiNonPrincipal | boolean | L'emploi est un emploi principal (Oui : false, Non : true) |
| bEmploiNonPrincipal | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **emploiNonPrincipal** (**true**) ou pas (**false**) |
| contratPartDtSignature | string(date) | Date de signature du contrat |
| bContratPartDtSignature | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **contratPartDtSignature** (**true**) ou pas (**false**) |
| fjNbJAn | number(double) | Dans le cadre d'un forfait jour, le nombre de jours ***Le Code caractéristique de l'activité de l'emploi doit être renseigné avec la valeur 10 (Forfait jour) pour permettre de valoriser ce paramètre*** |
| bFJNbJAn | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **fjNbJAn** (**true**) ou pas (**false**) |
| nonSoumisHEta | boolean | Le salarié est soumis aux horaires par défaut de l'établissement : - false : l'option est cochée - true : l'option est décochée |
| bNonSoumisHEta | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **nonSoumisHEta** (**true**) ou pas (**false**) |
| motifRuptureContrat | string | Motif de rupture de contrat : \| Motif de la rupture \| Valeur correspondante \| \| --- \| --- \| \| Licenciement suite à liquidation judiciaire ou à redressement judiciaire \| 11 \| \| Licenciement suite à fermeture définitive de l'établissement \| 12 \| \| Licenciement pour motif économique \| 14 \| \| Licenciement pour fin de chantier \| 15 \| \| Licenciement pour autre motif \| 20 \| \| Autre fin de contrat pour motif économique \| 25 \| \| Rupture pour motif économique dans le cadre d'un contrat de sécurisation professionnelle CSP \| 26 \| \| Fin de contrat à durée déterminée ou fin d'accueil occasionnel \| 31 \| \| Fin de mission d'intérim \| 32 \| \| Rupture anticipée d'un CDD en cas d'inaptitude physique constatée par le médecin du travail \| 33 \| \| Fin de période d'essai à l'initiative de l'employeur \| 34 \| \| Fin de période d'essai à l'initiative du salarié \| 35 \| \| Rupture anticipée d'un CDD ou d'un contrat d'apprentissage à l'initiative de l'employeur \| 36 \| \| Rupture anticipée d'un CDD ou d'un contrat d'apprentissage à l'initiative du salarié \| 37 \| \| Mise à la retraite par l'employeur \| 38 \| \| Départ à la retraite à l'initiative du salarié \| 39 \| \| Rupture conventionnelle \| 43 \| \| Démission suite à cession ou cessation du journal ou périodique, ou clause de conscience (réservé aux \| 57 \| \| Prise d'acte de la rupture de contrat de travail \| 58 \| \| Démission \| 59 \| \| Décès de l'employeur \| 65 \| \| Décès du salarié \| 66 \| \| Fin de contrat d'apprentissage \| 81 \| \| Résiliation judiciaire du contrat de travail \| 82 \| \| Rupture de contrat pour force majeure ou fait du prince \| 83 \| \| Rupture d'un commun accord du CDD ou du contrat d'apprentissage \| 84 \| \| Fin de mandat \| 85 \| \| Licenciement convention CATS \| 86 \| \| Licenciement pour faute grave \| 87 \| \| Licenciement pour faute lourde \| 88 \| \| Licenciement pour force majeure \| 89 \| \| Licenciement pour inaptitude physique d'origine non professionnelle \| 91 \| \| Licenciement pour inaptitude physique d'origine professionnelle \| 92 \| \| Licenciement suite à décision d'une autorité administrative \| 93 \| \| Rupture anticipée du contrat de travail pour arrêt de tournage \| 94 \| \| Rupture anticipée du contrat de travail pour faute grave \| 95 \| \| Rupture anticipée du contrat de travail pour faute lourde \| 96 \| \| Rupture anticipée suite à fermeture de l'établissement \| 97 \| \| Retrait d'enfant \| 98 \| |
| Motif de la rupture | Valeur correspondante |
| Licenciement suite à liquidation judiciaire ou à redressement judiciaire | 11 |
| Licenciement suite à fermeture définitive de l'établissement | 12 |
| Licenciement pour motif économique | 14 |
| Licenciement pour fin de chantier | 15 |
| Licenciement pour autre motif | 20 |
| Autre fin de contrat pour motif économique | 25 |
| Rupture pour motif économique dans le cadre d'un contrat de sécurisation professionnelle CSP | 26 |
| Fin de contrat à durée déterminée ou fin d'accueil occasionnel | 31 |
| Fin de mission d'intérim | 32 |
| Rupture anticipée d'un CDD en cas d'inaptitude physique constatée par le médecin du travail | 33 |
| Fin de période d'essai à l'initiative de l'employeur | 34 |
| Fin de période d'essai à l'initiative du salarié | 35 |
| Rupture anticipée d'un CDD ou d'un contrat d'apprentissage à l'initiative de l'employeur | 36 |
| Rupture anticipée d'un CDD ou d'un contrat d'apprentissage à l'initiative du salarié | 37 |
| Mise à la retraite par l'employeur | 38 |
| Départ à la retraite à l'initiative du salarié | 39 |
| Rupture conventionnelle | 43 |
| Démission suite à cession ou cessation du journal ou périodique, ou clause de conscience (réservé aux | 57 |
| Prise d'acte de la rupture de contrat de travail | 58 |
| Démission | 59 |
| Décès de l'employeur | 65 |
| Décès du salarié | 66 |
| Fin de contrat d'apprentissage | 81 |
| Résiliation judiciaire du contrat de travail | 82 |
| Rupture de contrat pour force majeure ou fait du prince | 83 |
| Rupture d'un commun accord du CDD ou du contrat d'apprentissage | 84 |
| Fin de mandat | 85 |
| Licenciement convention CATS | 86 |
| Licenciement pour faute grave | 87 |
| Licenciement pour faute lourde | 88 |
| Licenciement pour force majeure | 89 |
| Licenciement pour inaptitude physique d'origine non professionnelle | 91 |
| Licenciement pour inaptitude physique d'origine professionnelle | 92 |
| Licenciement suite à décision d'une autorité administrative | 93 |
| Rupture anticipée du contrat de travail pour arrêt de tournage | 94 |
| Rupture anticipée du contrat de travail pour faute grave | 95 |
| Rupture anticipée du contrat de travail pour faute lourde | 96 |
| Rupture anticipée suite à fermeture de l'établissement | 97 |
| Retrait d'enfant | 98 |
| bMotifRuptureContrat | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **motifRuptureContrat** (**true**) ou pas (**false**) |
| docsFinContratInactifs | boolean | Ne pas éditer les documents de fin de contrat ( oui: true, non : false) |
| bDocsFinContratInactifs | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **DocsFinContratInactifs** (**true**) ou pas (**false**) |
| rttTypeAcq | integer(int32) | Les RTT sont acquis : -Tous les mois : 0 - Par anticipation : 1 |
| bRTTTypeAcq | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **rttTypeAcq** (**true**) ou pas (**false**) |
| avnLMontantSal | number(double) | Montant de la participation mensuelle du salarié sur avantage en nature |
| bAvnLMontantSal | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **avnLMontantSal** (**true**) ou pas (**false**) |
| motifCDDExclusions | boolean | Permet d'indiquer de ne pas appliquer le circuit dérogatoire de fin de CDDUMontant. ***La méthode 220 doit être active et un motif de fin d’emploi doit être renseigné*** |
| bMotifCDDExclusions | boolean | Permet d'indiquer s'il faut prendre en compte la valeur du paramètre **motifCDDExclusions** (**true**) ou pas (**false**) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| guidTache | string | A compléter |

## Requête

```
{
  "salarieEmplois": {
    "matriculeSalarie": "string",
    "numeroSecuriteSociale": "string",
    "matriculeSalarieModele": "string",
    "numeroDossierSalarieModele": "string",
    "copieIntegraleSalarieModele": true,
    "calculerElementsNaissance": true,
    "calculerCommune": true,
    "matriculeInterne": "string",
    "bMatriculeInterne": true,
    "nomNaissance": "string",
    "bNomNaissance": true,
    "nomMarital": "string",
    "bNomMarital": true,
    "nomUsuel": "string",
    "bNomUsuel": true,
    "prenom": "string",
    "bPrenom": true,
    "civilite": 0,
    "bCivilite": true,
    "situationFamiliale": 0,
    "bSituationFamiliale": true,
    "dateNaissance": "2020-10-14",
    "bDateNaissance": true,
    "departementNaissance": "string",
    "bDepartementNaissance": true,
    "communeNaissance": "string",
    "bCommuneNaissance": true,
    "codePaysNaissance": "string",
    "bCodePaysNaissance": true,
    "paysNaissance": "string",
    "bPaysNaissance": true,
    "codePaysNationalite": "string",
    "bCodePaysNationalite": true,
    "paysNationalite": "string",
    "bPaysNationalite": true,
    "titreSejourType": 0,
    "bTitreSejourType": true,
    "titreSejourNumeroOrdre": "string",
    "bTitreSejourNumeroOrdre": true,
    "titreSejourDebut": "2020-10-14",
    "bTitreSejourDebut": true,
    "titreSejourFin": "2020-10-14",
    "bTitreSejourFin": true,
    "numVoie": "string",
    "bNumVoie": true,
    "btqc": "string",
    "bBTQC": true,
    "nomVoie": "string",
    "bNomVoie": true,
    "complement": "string",
    "bComplement": true,
    "codePostal": "string",
    "bCodePostal": true,
    "nomVille": "string",
    "bNomVille": true,
    "codeOfficielCommune": "string",
    "bCodeOfficielCommune": true,
    "commune": "string",
    "bCommune": true,
    "codePays": "string",
    "bCodePays": true,
    "pays": "string",
    "bPays": true,
    "domicilieFiscalementHorsFrance": true,
    "bDomicilieFiscalementHorsFrance": true,
    "telDomicile": "string",
    "bTelDomicile": true,
    "telPortable": "string",
    "bTelPortable": true,
    "eMail": "string",
    "bEMail": true,
    "rib": "string",
    "bRib": true,
    "iBan": "string",
    "bIBan": true,
    "bic": "string",
    "bBic": true,
    "affectation1": "string",
    "bAffectation1": true,
    "affectation2": "string",
    "bAffectation2": true,
    "affectation3": "string",
    "bAffectation3": true,
    "affectation4": "string",
    "bAffectation4": true,
    "affectation5": "string",
    "bAffectation5": true,
    "affectation6": "string",
    "bAffectation6": true,
    "affectation7": "string",
    "bAffectation7": true,
    "emplois": [
      {
        "identifiantEmploi": 0,
        "identifiantEmploiModele": 0,
        "envoiDUEEdi": true,
        "envoiDUEEdiSansCreerEmploi": true,
        "nomInterneEtablissement": "string",
        "dateDebut": "2020-10-14",
        "dateDebutContrat": "2020-10-14",
        "dateFin": "2020-10-14",
        "codeConventionCollective": "string",
        "bCodeConventionCollective": true,
        "codeClassificationMetier": "string",
        "bCodeClassificationMetier": true,
        "intituleEmploi": "string",
        "bIntituleEmploi": true,
        "codeContratTravail": "string",
        "bCodeContratTravail": true,
        "motifCDD": "string",
        "bMotifCDD": true,
        "dureeInitialeCDD": 0,
        "bDureeInitialeCDD": true,
        "motifDebutEmploi": "string",
        "bMotifDebutEmploi": true,
        "motifFinEmploi": "string",
        "bMotifFinEmploi": true,
        "codeCaracteristiqueActivite": "string",
        "bCodeCaracteristiqueActivite": true,
        "codeStatutProfessionnel": "string",
        "bCodeStatutProfessionnel": true,
        "codeStatutCategoriel": "string",
        "bCodeStatutCategoriel": true,
        "codeStatutCategorielAgircArrco": "string",
        "bCodeStatutCategorielAgircArrco": true,
        "coefficient1": "string",
        "bCoefficient1": true,
        "coefficient2": "string",
        "bCoefficient2": true,
        "coefficient3": "string",
        "bCoefficient3": true,
        "coefficient4": "string",
        "bCoefficient4": true,
        "codeCSP": "string",
        "bCodeCSP": true,
        "codeCPNDUC": "string",
        "bCodeCPNDUC": true,
        "spectacleCodeEmploi": "string",
        "bSpectacleCodeEmploi": true,
        "spectacleNumeroConges": "string",
        "bSpectacleNumeroConges": true,
        "pctAbattement": 10.5,
        "bPctAbattement": true,
        "salaireDeBaseEstHoraire": true,
        "bSalaireDeBaseEstHoraire": true,
        "salaireDeBase": "string",
        "bSalaireDeBase": true,
        "salaireNetGaranti": 10.5,
        "bSalaireNetGaranti": true,
        "nbHeuresTravaillees": [
          10.5,
          10.5
        ],
        "nbHeuresDeNuitTravaillees": [
          10.5,
          10.5
        ],
        "bNbHeuresTravaillees": true,
        "nbHeuresMensuellesNormales": 10.5,
        "bNbHeuresMensuellesNormales": true,
        "nbHeuresMensuellesMajorees": 10.5,
        "bNbHeuresMensuellesMajorees": true,
        "pctHeuresMensuellesMajorees": 10.5,
        "bPctHeuresMensuellesMajorees": true,
        "nbHeuresMensuellesLibres": [
          10.5,
          10.5
        ],
        "codesHeuresMensuellesLibres": [
          "string",
          "string"
        ],
        "bHeuresMensuellesLibres": true,
        "confirmationObligatoireDesHeures": true,
        "bConfirmationObligatoireDesHeures": true,
        "activerCalculKilometrique": true,
        "bActiverCalculKilometrique": true,
        "typeDeVehicule": 0,
        "bTypeDeVehicule": true,
        "trancheKilometrique": 0,
        "bTrancheKilometrique": true,
        "prixDuKilometre": 10.5,
        "bPrixDuKilometre": true,
        "activerActiviteJournaliere": true,
        "bActiverActiviteJournaliere": true,
        "decoupageActiviteJournaliere": 0,
        "bDecoupageActiviteJournaliere": true,
        "modeSaisieActiviteJournaliere": 0,
        "bModeSaisieActiviteJournaliere": true,
        "exonerationCode": "string",
        "bExonerationCode": true,
        "exonerationDebut": "2020-10-14",
        "bExonerationDebut": true,
        "exonerationFin": "2020-10-14",
        "bExonerationFin": true,
        "exonerationTaux": 10.5,
        "bExonerationTaux": true,
        "titreTransportCode": "string",
        "bTitreTransportCode": true,
        "titreTransportRemboursement": 10.5,
        "bTitreTransportRemboursement": true,
        "autreTitreTransportMontant": 10.5,
        "bAutreTitreTransportMontant": true,
        "autreTitreTransportRemboursement": 10.5,
        "bAutreTitreTransportRemboursement": true,
        "ticketRestaurant": 0,
        "bTicketRestaurant": true,
        "codeTerritoire": "string",
        "bCodeTerritoire": true,
        "codeSecteurDFS": "string",
        "bCodeSecteurDFS": true,
        "pctAbattementLissage": true,
        "bPctAbattementLissage": true,
        "codeStatutRegimeProtectionSociale": "string",
        "bCodeStatutRegimeProtectionSociale": true,
        "emploiNonPrincipal": true,
        "bEmploiNonPrincipal": true,
        "contratPartDtSignature": "2020-10-14",
        "bContratPartDtSignature": true,
        "fjNbJAn": 10.5,
        "bFJNbJAn": true,
        "nonSoumisHEta": true,
        "bNonSoumisHEta": true,
        "motifRuptureContrat": "string",
        "bMotifRuptureContrat": true,
        "docsFinContratInactifs": true,
        "bDocsFinContratInactifs": true,
        "rttTypeAcq": 0,
        "bRTTTypeAcq": true,
        "avnLMontantSal": 10.5,
        "bAvnLMontantSal": true,
        "motifCDDExclusions": true,
        "bMotifCDDExclusions": true
      },
      {
        "identifiantEmploi": 0,
        "identifiantEmploiModele": 0,
        "envoiDUEEdi": true,
        "envoiDUEEdiSansCreerEmploi": true,
        "nomInterneEtablissement": "string",
        "dateDebut": "2020-10-14",
        "dateDebutContrat": "2020-10-14",
        "dateFin": "2020-10-14",
        "codeConventionCollective": "string",
        "bCodeConventionCollective": true,
        "codeClassificationMetier": "string",
        "bCodeClassificationMetier": true,
        "intituleEmploi": "string",
        "bIntituleEmploi": true,
        "codeContratTravail": "string",
        "bCodeContratTravail": true,
        "motifCDD": "string",
        "bMotifCDD": true,
        "dureeInitialeCDD": 0,
        "bDureeInitialeCDD": true,
        "motifDebutEmploi": "string",
        "bMotifDebutEmploi": true,
        "motifFinEmploi": "string",
        "bMotifFinEmploi": true,
        "codeCaracteristiqueActivite": "string",
        "bCodeCaracteristiqueActivite": true,
        "codeStatutProfessionnel": "string",
        "bCodeStatutProfessionnel": true,
        "codeStatutCategoriel": "string",
        "bCodeStatutCategoriel": true,
        "codeStatutCategorielAgircArrco": "string",
        "bCodeStatutCategorielAgircArrco": true,
        "coefficient1": "string",
        "bCoefficient1": true,
        "coefficient2": "string",
        "bCoefficient2": true,
        "coefficient3": "string",
        "bCoefficient3": true,
        "coefficient4": "string",
        "bCoefficient4": true,
        "codeCSP": "string",
        "bCodeCSP": true,
        "codeCPNDUC": "string",
        "bCodeCPNDUC": true,
        "spectacleCodeEmploi": "string",
        "bSpectacleCodeEmploi": true,
        "spectacleNumeroConges": "string",
        "bSpectacleNumeroConges": true,
        "pctAbattement": 10.5,
        "bPctAbattement": true,
        "salaireDeBaseEstHoraire": true,
        "bSalaireDeBaseEstHoraire": true,
        "salaireDeBase": "string",
        "bSalaireDeBase": true,
        "salaireNetGaranti": 10.5,
        "bSalaireNetGaranti": true,
        "nbHeuresTravaillees": [
          10.5,
          10.5
        ],
        "nbHeuresDeNuitTravaillees": [
          10.5,
          10.5
        ],
        "bNbHeuresTravaillees": true,
        "nbHeuresMensuellesNormales": 10.5,
        "bNbHeuresMensuellesNormales": true,
        "nbHeuresMensuellesMajorees": 10.5,
        "bNbHeuresMensuellesMajorees": true,
        "pctHeuresMensuellesMajorees": 10.5,
        "bPctHeuresMensuellesMajorees": true,
        "nbHeuresMensuellesLibres": [
          10.5,
          10.5
        ],
        "codesHeuresMensuellesLibres": [
          "string",
          "string"
        ],
        "bHeuresMensuellesLibres": true,
        "confirmationObligatoireDesHeures": true,
        "bConfirmationObligatoireDesHeures": true,
        "activerCalculKilometrique": true,
        "bActiverCalculKilometrique": true,
        "typeDeVehicule": 0,
        "bTypeDeVehicule": true,
        "trancheKilometrique": 0,
        "bTrancheKilometrique": true,
        "prixDuKilometre": 10.5,
        "bPrixDuKilometre": true,
        "activerActiviteJournaliere": true,
        "bActiverActiviteJournaliere": true,
        "decoupageActiviteJournaliere": 0,
        "bDecoupageActiviteJournaliere": true,
        "modeSaisieActiviteJournaliere": 0,
        "bModeSaisieActiviteJournaliere": true,
        "exonerationCode": "string",
        "bExonerationCode": true,
        "exonerationDebut": "2020-10-14",
        "bExonerationDebut": true,
        "exonerationFin": "2020-10-14",
        "bExonerationFin": true,
        "exonerationTaux": 10.5,
        "bExonerationTaux": true,
        "titreTransportCode": "string",
        "bTitreTransportCode": true,
        "titreTransportRemboursement": 10.5,
        "bTitreTransportRemboursement": true,
        "autreTitreTransportMontant": 10.5,
        "bAutreTitreTransportMontant": true,
        "autreTitreTransportRemboursement": 10.5,
        "bAutreTitreTransportRemboursement": true,
        "ticketRestaurant": 0,
        "bTicketRestaurant": true,
        "codeTerritoire": "string",
        "bCodeTerritoire": true,
        "codeSecteurDFS": "string",
        "bCodeSecteurDFS": true,
        "pctAbattementLissage": true,
        "bPctAbattementLissage": true,
        "codeStatutRegimeProtectionSociale": "string",
        "bCodeStatutRegimeProtectionSociale": true,
        "emploiNonPrincipal": true,
        "bEmploiNonPrincipal": true,
        "contratPartDtSignature": "2020-10-14",
        "bContratPartDtSignature": true,
        "fjNbJAn": 10.5,
        "bFJNbJAn": true,
        "nonSoumisHEta": true,
        "bNonSoumisHEta": true,
        "motifRuptureContrat": "string",
        "bMotifRuptureContrat": true,
        "docsFinContratInactifs": true,
        "bDocsFinContratInactifs": true,
        "rttTypeAcq": 0,
        "bRTTTypeAcq": true,
        "avnLMontantSal": 10.5,
        "bAvnLMontantSal": true,
        "motifCDDExclusions": true,
        "bMotifCDDExclusions": true
      }
    ],
    "anneeNaissance": 0,
    "bAnneeNaissance": true,
    "eMailPro": "string",
    "bEMailPro": true,
    "personneAContacterUrgenceNom": "string",
    "bPersonneAContacterUrgenceNom": true,
    "personneAContacterUrgencePrenom": "string",
    "bPersonneAContacterUrgencePrenom": true,
    "personneAContacterUrgenceTel": "string",
    "bPersonneAContacterUrgenceTel": true,
    "personneAContacterUrgenceMel": "string",
    "bPersonneAContacterUrgenceMel": true,
    "ribPourVirements": true,
    "bRibPourVirements": true,
    "ribVersementPlafond": 10.5,
    "bRibVersementPlafond": true,
    "paiementEspeces": true,
    "bPaiementEspeces": true,
    "dureePeriodeEssai1": 0,
    "bDureePeriodeEssai1": true,
    "dureePeriodeEssai2": 0,
    "bDureePeriodeEssai2": true,
    "nbPersACharge": 0,
    "bNbPersACharge": true,
    "rib2": "string",
    "bRib2": true,
    "iBan2": "string",
    "bIBan2": true,
    "bic2": "string",
    "bBic2": true,
    "rib2PourVirements": true,
    "bRib2PourVirements": true,
    "rib2VersementPlafond": 10.5,
    "bRib2VersementPlafond": true,
    "rib3": "string",
    "bRib3": true,
    "iBan3": "string",
    "bIBan3": true,
    "bic3": "string",
    "bBic3": true,
    "rib3PourVirements": true,
    "bRib3PourVirements": true,
    "rib3VersementPlafond": 10.5,
    "bRib3VersementPlafond": true,
    "sexe": 0,
    "bSexe": true,
    "beneficiaireFinal": 0,
    "bBeneficiaireFinal": true
  },
  "numeroDossier": "string"
}
```

## Réponse

```
{
  "guidTache": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
