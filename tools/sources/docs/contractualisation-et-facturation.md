---
title: "Contractualisation et facturation"
slug: "contractualisation-et-facturation"
updated: 2026-10-05T08:06:44Z
published: 2026-10-05T08:06:44Z
canonical: "silae-api.document360.io/contractualisation-et-facturation"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Contractualisation et facturation

## Offres API

Pour adresser les différents cas d'utilisation des API REST mySilae Paie, plusieurs modèles d'offre existent.

Tous ces modèles partagent les fonctionnalités suivantes :

- Utilisation des infrastructures et outils Microsoft Azure
- Accès au Portail API mySilae Paie
- Mise à disposition d'un environnement de test
- Nouvelle documentation

### Partenaire - Usage interne Paie (Modèle 1A)

Ce modèle est destiné et réservé aux Partenaires Silae (Experts comptables, faiseurs de paie, revendeurs, ...). Le partenaire disposera d'un compte API de test, cantonné au domaine de test, et d'un compte API de production cantonné à un seul domaine de production.

Ce modèle donne accès au périmètre [API - Usage interne Paie](https://silae-api.document360.io/api-rest/docs/api-usage-interne-paie)

### Partenaire - Usage interne RH (Modèle 1B)

Ce modèle est destiné et réservé aux Partenaires Silae (Experts comptables, faiseurs de paie, revendeurs, ...). Le partenaire disposera d'un compte API de test, cantonné au domaine de test, et d'un compte API de production cantonné à un seul domaine de production.

Ce modèle donne accès au périmètre [API - Usage interne RH](https://silae-api.document360.io/api-rest/docs/api-usage-interne-rh)

Facturation

Dans ce modèle c'est le Partenaire, qui exploite l'API pour son usage interne, qui sera facturé

### Partenaire-Client Final - Mise à disposition compte API (Modèle 2)

Ce modèle est destiné et réservé aux Partenaires Silae (Experts comptables, faiseurs de paie, revendeurs, ...) qui souhaitent permettre à un de leurs clients d'interconnecter mySilae Paie avec ses outils internes ou avec un éditeur non-référencé (n'ayant pas contractualisé avec Silae).

Ce modèle donne accès au périmètre [API - Mise à disposition](https://silae-api.document360.io/api-rest/docs/api-mise-a-disposition-modele-2)

Facturation

Dans ce modèle c'est le Partenaire, qui met à disposition un compte API pour son client final, qui sera facturé.

### Éditeur - Écritures comptables (Modèle 4)

Ce modèle est destiné aux éditeurs qui souhaitent interconnecter leur logiciel avec mySilae Paie pour ne récupérer que les écritures comptables et certains états.

Ce modèle donne accès au périmètre [API - Usage Éditeur - écritures comptables](https://silae-api.document360.io/api-rest/docs/api-ecritures-comptables)

Facturation

Dans ce modèle c'est l'éditeur qui sera facturé.

## Contractualisation

### Vous êtes un Partenaire Silae

Pour pouvoir bénéficier des API REST mySilae Pie, il vous faut signer le contrat de distribution Silae contenant l'annexe de mise à disposition d'un accès API (Annexe 7). La signature du contrat contenant cette annexe vous ouvre la possibilité de demander un compte API pour votre usage interne (Modèle 1A ou 1B) ou pour l'un de vos clients (Modèle 2).

Si vous avez déjà signé le contrat de distribution mais sans l'annexe 7, il est nécessaire de signer l'avenant API équivalent à cette annexe.

Ensuite, pour obtenir un compte API, rapprochez-vous de votre contact commercial pour obtenir le formulaire de demandes d'ouverture de comptes API.

Les éléments suivants seront réclamés :

#### Pour les modèles 1A ou 1B :

- Le **nom de votre société** telle qu'elle est connue chez Silae
- L'url de votre **sous-domaine** (url personnalisée que vous utilisez pour accéder à l'application Silae, au format https://xxxxx.silae.fr)
- Le **nom de votre compte API** tel qu'il apparaîtra dans Silae (Par défaut nous prendrons le nom de votre domaine)
- **L'adresse e-mail** qui sera le **login de l'utilisateur principal** qui recevra l'invitation pour accéder au portail API (Cette adresse sera aussi utilisée pour l'utilisateur principal de votre domaine de test Azure s'il n'existe pas déjà)
- **L'adresse e-mail du contact technique API** qui sera destinataire des communications liées aux API
- Le type de compte que vous souhaitez (Modèle 1A, Modèle 1B ou les 2)

#### Pour le modèle 2 :

- Le **nom de votre client final**
- L'url de votre **sous-domaine** (url personnalisée que vous utilisez pour accéder à l'application Silae, au format https://xxxxx.silae.fr)
- **L'adresse e-mail d'une personne chez votre client** qui sera le **login de l'utilisateur principal** et qui recevra l'invitation pour accéder au portail API (Cette adresse sera aussi utilisée pour l'utilisateur principal de votre domaine de test Azure s'il n'existe pas déjà)
- **L'adresse e-mail du contact technique API** qui sera destinataire des communications liées aux API
- **L'adresse e-mail** de l'utilisateur qui sera **l'utilisateur principal du domaine de test Silae** de votre client
- Le type de compte que vous souhaitez => Modèle 2

### Vous n'êtes pas un Partenaire Silae

Vous souhaitez devenir Partenaire Silae, vous n'avez pas de contact commercial Silae, vous pouvez nous contacter en utilisant le [formulaire de contact sur notre site internet](https://www2.silae.fr/contact).

### Vous êtes un Editeur de logiciel de comptabilité

Pour pouvoir bénéficier des API REST Silae, il vous faut signer le contrat API REST Éditeur - Écritures comptables (Modèle 4). Pour recevoir ce contrat, vous pouvez nous contacter par [mail](mailto:api.alliances@silae.fr).

Dès réception, un exemplaire de contrat API REST vous sera adressé. Il faudra nous le retourner signé pour vous envoyer le formulaire de demande d'ouverture de comptes API.

Les éléments suivants seront réclamés :

- Le **nom de votre solution**, qui apparaîtra dans la liste des éditeurs dans mySilae Paie
- **L'adresse e-mail** qui sera le **login de l'utilisateur principal** et qui recevra l'invitation pour accéder au portail API (Cette adresse sera aussi utilisée pour l'utilisateur principal de votre domaine de test Silae)
- **L'adresse e-mail du contact technique API** qui sera destinataire des communications liées aux API

## Facturation

### Comment se passe la facturation ?

Les modalités de facturation sont décrites dans l'annexe API du contrat de distribution, si vous êtes un Partenaire, ou dans votre contrat API si vous êtes un éditeur.

### Comment fonctionne la facturation à l'usage ?

#### Pour un partenaire Silae

Seules les configurations d'accès API qui ont été actives dans le mois seront facturées. À partir du moment où une configuration d'accès API a été activée, on la considère active pour le mois en cours, qu'elle ait été activée tout le mois, ou non. Ensuite, le calcul du montant se base sur le nombre de bulletins présents dans tous les dossiers où une configuration d'accès est active pour le mois en cours.

#### Pour un éditeur partenaire API mySilae Paie

À partir du moment où une configuration d'accès API a été activée et que des appels API ont été générés sur le mois, le ou les dossiers de paie concernés seront pris en compte pour le calcul du montant.
