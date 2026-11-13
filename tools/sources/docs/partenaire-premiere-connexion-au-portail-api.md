---
title: "Première connexion au portail API"
slug: "partenaire-premiere-connexion-au-portail-api"
updated: 2026-08-13T08:06:16Z
published: 2026-08-13T08:06:16Z
canonical: "silae-api.document360.io/partenaire-premiere-connexion-au-portail-api"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Première connexion au portail API

## Introduction

La procédure qui suit s'adresser aux partenaires qui accèdent pour la première fois à leur portail API et et à leur environnement de test.

**Ce guide a pour objectif de vous transmettre les bonnes pratiques et les bons réflexes, sans nécessiter d’expertise technique particulière.**

<font color="FF0000"> Il est important d'attendre la <a href="https://silae-api.document360.io/docs/guide-de-demarrage#r%C3%A9ception-des-messages" rel="noopener">Réception de tous les messages</a> pour mettre en route les accès API REST.</font>

Elle se découpe en 3 parties :

1. Le portail API : Son accès, son contenu
2. La préparation de l'environnement de test et la mise en route des accès API REST
3. La mise en route des accès API REST sur environnement de production

Objectif : Obtenir les 3 données obligatoires pour le bon fonctionnement des API REST Silae :

- Le Client ID
- Le Client Secret
- La Clé de configuration d'accès API

## Le portail API

### L'accès

Suite à la réception du message d'accès au Portail API, il est nécessaire de suivre les étapes suivantes :

1. Cliquer sur le lien **Accéder au portail API** contenu dans le mail reçu.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2840%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

*Message d'erreur lors du premier accès* ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28231%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

*Le message suivant apparaît :" <font color="FF0000">A user with the specified credential could not be found.</font>", cela signifie que **votre lien d'invitation a expiré**.* *Il est nécessaire de solliciter notre équipe Support API avec la saisie du formulaire Assistance (thème API) disponible depuis Silae Paie ou par l'envoi d'un message à l’adresse suivante : support.api@silae.fr pour obtenir un nouveau message d'accès au Portail API.*

1. Renseigner nom, prénom et le mot de passe souhaité.
2. Se connecter au Portail API ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2856%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

<font color="#C00000"> A ajouter aux favoris du navigateur.</font>

Tutoriels en images :

- Premier accès : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/01.API_REST_InvitationAcc%C3%A8sPortail.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)
- Lien Portail API et accès page accueil : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/02.API_REST_ConnexionPortail&amp;PageAccueil.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

### Le contenu

#### Ma société

La fiche Société propose 3 onglets :

- Les ***Informations générales*** qui permet de modifier l'email du contact technique API renseigné selon la donnée indiquée dans le formulaire.
- La ***Liste des utilisateurs*** qui ont accès au portail API.  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2857%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)  

De nouveaux utilisateurs peuvent être ajoutés pour leur donner accès au portail API. L'option *Droit de gestion* donne accès à la fiche Société
- La ***Liste des comptes API*** mis en place (même fonction que **Mes comptes API**).  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28176%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

#### Mes comptes API

Selon le ou les formulaires remplis et validés, plusieurs comptes API REST sont mis à disposition.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28196%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

<font color="#00B0F0">Comptes API pour usage interne du partenaire (modèle 1A/1B) </font> <font color="#00B050"> Comptes API pour usage client du partenaire (modèle 2)</font>

<font color="FF0000">
<b><i>Les comptes API avec le préfixe "TEST" sont rattachés à l'environnement de test.
</i></b></font>

<font color="FF0000"><b><i>Les autres comptes API sont associés à l'environnement de production.</i></b><br> </font>

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/04.API_REST_MaFicheSoci%C3%A9t%C3%A9MesComptesAPI.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

#### Documentation API Silae

Ce point d'entrée permet d'accéder directement à la documentation consultée actuellement.

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/05.API_REST_Acc%C3%A8sDocumentation.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

## L'environnement de test

<font color="FF0000">Si la demande d'un environnent de test n'a pas été effectuée, cette étape n'est pas nécessaire.<br> Accéder directement à la mise en place de : </font> [L'environnement de production](https://silae-api.document360.io/docs/partenaire-premiere-connexion-au-portail-api#lenvironnement-de-production)

### L'accès

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2867%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

Depuis le message reçu, suivre la procédure d'initialisation du mot de passe indiqué dans son contenu pour obtenir son accès.

### La préparation et l'utilisation

1. Exporter le ou les dossiers de paie à utiliser pour effectuer les tests API REST depuis l'environnement de production
2. Accéder à l'environnement de test  

Domaine Silae accessible de la même manière qu'un domaine de production, mais en utilisant l'url envoyée dans le mail reçu "Accès à votre espace collaborateur Silae"
3. Importer ces mêmes dossiers dans l'environnement de test (utiliser le mot de passe renseigné dans le mail reçu)

Base de connaissances My Silae Paie : [Exporter / Importer des dossiers de paie sur le logiciel](https://support.silae.fr/hc/fr/articles/16539353381650-Exporter-Importer-des-dossiers-de-paie-sur-le-logiciel)

### Les accès API REST

La procédure qui suit reste identique quel que soit le compte API de TEST à activer :

- Compte API pour usage interne Modèle 1A et/ou 1B (ex : TEST - CABINET FRANCE)
- Compte API pour l'usage du client Modèle 2 (ex: TEST - CABINET FRANCE - CLIENT SARL)

<font color="FF0000">Les étapes suivantes doivent donc être répétées pour chaque compte API défini.</font>

#### Le Client ID et le Client Secret

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2871%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) <font color="#00B0F0">Le Compte API de Test apparait avec un statut "Attente d’activation"</font>

1. Modifier le compte API de Test

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28162%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

1. Le **Client ID** ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28167%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) Copier / coller le Client ID. <font color="#C00000">A conserver précieusement pour l’authentification</font>
2. Activer le compte API ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28169%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)
3. Le **Client Secret** Accéder à l'onglet ***Gestion des ClientSecret*** ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2850%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

Cliquer sur le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28172%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2891%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) Copier / coller le Client Secret généré. <font color="#C00000">A conserver précieusement pour l’authentification.</font>

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/06.ActivationCompteTestAPIClientIDClientSecret.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

#### La configuration d'accès API

L'opération s'effectue depuis l'environnement de test.

1. Accéder à l'environnement de test
2. Utiliser la fonction **Paramétrage Paie > bouton Options > Configuration API**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28379%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

- Sélectionner le compte API de Test qui vient d'être activé.
- Désigner l’utilisateur Silae avec les droits d'accès nécessaires pour l'usage des fonctions API. **Utiliser le bouton ![Image](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(427).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) pour obtenir de l'aide**  

Aide depuis base de connaissances My Silae Paie :
  - [Créer et gérer un collaborateur](https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T)
  - [Droits d'accès clients](https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients)
  - [Définir les droits d'accès du contact client](https://support.silae.fr/hc/fr/articles/16539362157714-Cr%C3%A9er-un-droit-d-acc%C3%A8s-client-au-niveau-dossier) (**Note importante** : Préciser que la fiche Contact est de type ***Contact dédié API***)
- Choisir le type d'accès aux dossiers de paie
  - Accès à tous les dossiers du domaine
  - Accès à un ou plusieurs dossiers : sélectionner le ou les dossiers de paie par le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28378%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)
  - Renseigner le libellé souhaité à la configuration API

La sauvegarde de la configuration API fait apparaitre le message suivant : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28316%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

<font color="#C00000">Dans le cadre de l'usage de l'environnement de test, aucune facturation ne sera générée.</font>

#### La clé principale ou secondaire de configuration d'accès API

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

1.Accéder au **portail API**

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28162%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

1. Accéder à l'onglet ***Configuration d'accès API***  

La configuration API définie précédemment apparait dans la liste  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28405%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) situé à droite du compte API de test désigné  
 pour :
  - Activer la configuration d'accès API
  - Générer la clé principale ou secondaire (**Subscription Key** - Pas de différence entre la clé principale et secondaire). <font color="#C00000">A conserver précieusement pour l'accès aux dossiers.</font>

Pour être certain d'avoir choisi la configuration API concernée, l'Id de configuration d'accès API indiqué dans le compte API sur le portail doit correspondre à l'ID unique de configuration renseigné dans My Silae. Ne pas confondre :

- L'**ID unique de configuration n'est pas un identifiant de connexion API**. Il correspond à la référence attribuée à la configuration API lors sa création dans My Silae Paie que l'on retrouve dans le compte API concerné au niveau du portail.
- La **Clé de configuration d'accès API est le 3ème identifiant API de connexion** qui permet de donner accès aux données des dossiers de paie via API REST

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/08.API_REST_ActivationConfigAPItest_Cl%C3%A9Principale.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

### La mise en route des tests

1. Exploiter le **Client ID** et le **Client Secret** copiés pour s'authentifier (obtenir l'access_token avec la fonction API : Token Creation Prod)
2. Utiliser la **Clé de la configuration d'accès API** (Subscription Key) copiée pour obtenir les droits d'accès aux données des dossiers de paie désignés
3. Eprouver et valider les développements API REST

<font color="#C00000">Dans le cas où les développements doivent être éprouvés et validés par le prestataire/éditeur du client, son Partenaire Silae doit lui communiquer ces éléments indispensables : le <strong>Client ID</strong>, <strong>Client Secret</strong> et la <strong>Clé de la configuration d'accès API</strong> (ex: TEST - CABINET FRANCE - CLIENT SARL)</font>

## L'environnement de production

Les développements API REST ont été testés et validés. La solution d'interconnexion avec Silae Paie peut être mis en place. La procédure qui suit est identique à celle utilisée pour l'environnement de test.

### Les accès API REST

La procédure qui suit reste identique quel que soit le compte API de PRODUCTION à activer :

- Compte API pour usage interne modèle 1A et/ou 1B  (ex : CABINET FRANCE - 1A ou CABINET FRANCE - 1B)
- Compte API pour l'usage du client modèle 2 (ex: CABINET FRANCE - CLIENT SARL)

#### Le Client ID et le Client Secret

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28182%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)l

<font color="#00B0F0">Le Compte API de Production apparait avec un statut "Attente d’activation"</font>

1. Modifier le compte API de Production

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28183%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

1. Le **Client ID**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28184%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

Copier / coller le Client ID. <font color="#C00000">A conserver précieusement pour l’authentification.</font> 3. Activer le compte API ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28185%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

4.Le **Client Secret** Accéder à l'onglet ***Gestion des ClientSecret*** ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28186%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

Cliquer sur le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28172%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28187%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

Copier / coller le Client Secret généré. <font color="#C00000">A conserver précieusement pour l’authentification.</font>

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/09.ActivationCompteProdAPIClientIDClientSecret.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

#### La configuration d'accès API

L'opération s'effectue depuis l'environnement de production.

1. Accéder à l'environnement de production
2. Utiliser la fonction **Paramétrage Paie > bouton Options > Configuration API**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28380%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

- Sélectionner le compte API de Production qui vient d'être activé dans la liste
- Désigner l’utilisateur Silae avec les droits d'accès nécessaires pour l'usage des fonctions API  

**Utiliser le bouton ![Image](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(427).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) pour obtenir de l'aide**  

Articles d'aide My Silae Paie sur :
  - [Créer et gérer un collaborateur](https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T)
  - [Droits d'accès clients](https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients)
  - [Définir les droits d'accès du contact client](https://support.silae.fr/hc/fr/articles/16539362157714-Cr%C3%A9er-un-droit-d-acc%C3%A8s-client-au-niveau-dossier) (**Note importante** : Préciser que la fiche Contact est de type ***Contact dédié API***)
- Choisir le type d'accès aux dossiers de paie
  - Accès à tous les dossiers du domaine
  - Accès à un ou plusieurs dossiers : sélectionner le ou les dossiers de paie par le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28378%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)
  - Renseigner le libellé souhaité à la configuration API

La sauvegarde de la configuration API fait apparaitre le message suivant : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28320%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

<font color="#C00000">Il est important de bien sélectionner l'accès pour ne pas être facturé sur des dossiers de paie qui ne sont pas concernés par un usage API REST.</font>

- <font color="#C00000">Un compte API de production modèle 1A (ex : CABINET FRANCE - 1A) est inclus dans l'offre Silae Paie : aucune facturation ne sera générée.</font>
- <font color="#C00000">Un compte API de production modèle 1B (ex : CABINET FRANCE - 1B) ou modèle 2 (ex: CABINET FRANCE - CLIENT SARL) : une facturation sera générée en fonction des dossiers sélectionnés.</font>

#### La clé principale ou secondaire de configuration d'accès API

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

1.Accéder au **portail API**

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28190%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

1. Accéder à l'onglet ***Configuration d'accès API***  

La configuration API définie précédemment apparait dans la liste  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28408%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D) situé à droite du compte API de test désigné  
 pour :
- 
  - Activer la configuration d'accès API
  - Générer la clé principale ou secondaire (**Subscription Key** - Pas de différence entre la clé principale et secondaire). <font color="#C00000">A conserver précieusement pour l'accès aux dossiers.</font>

Pour être certain d'avoir choisi la configuration API concernée, l'Id de configuration d'accès API indiqué dans le compte API sur le portail doit correspondre à l'ID unique de configuration renseigné dans My Silae. Ne pas confondre :

- L'**ID unique de configuration n'est pas un identifiant de connexion API**. Il correspond à la référence attribuée à la configuration API lors sa création dans My Silae Paie que l'on retrouve dans le compte API concerné au niveau du portail.
- La **Clé de configuration d'accès API est le 3ème identifiant API de connexion** qui permet de donner accès aux données des dossiers de paie via API REST

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/11.API_REST_ActivationConfigAPIprod_Cl%C3%A9Principale.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A40Z&se=2026-11-13T20%3A13%3A40Z&sr=c&sp=r&sig=Lfz00pTb33r0rOylDZyeBm8Ivu1KVqS6FqYwwuTZjjg%3D)

### La mise en route des API REST

1. Exploiter le **Client ID** et le **Client Secret** copiés pour s'authentifier (obtenir l'access_token avec la fonction API : Token Creation Prod)
2. Utiliser la **Clé de la configuration d'accès API** (Subscription Key) copiée pour obtenir les droits d'accès aux données des dossiers de paie désignés.

<font color="#C00000">Dans le cas où les développements doivent être éprouvés et validés par le prestataire/éditeur du client, le Partenaire Silae doit communiquer à son client, ces éléments indispensables : le <strong>Client ID</strong>, <strong>Client Secret</strong> et la <strong>Clé de la configuration d'accès API</strong> (ex: TEST - CABINET FRANCE - CLIENT SARL)</font>
