---
title: "Portail API déjà opérationnel"
slug: "partenaire-portail-api-deja-operationnel"
updated: 2026-08-13T08:06:44Z
published: 2026-08-13T08:06:44Z
canonical: "silae-api.document360.io/partenaire-portail-api-deja-operationnel"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Portail API déjà opérationnel

## Introduction

La procédure qui suit s'adresser aux partenaires qui possèdent déjà un portail API et un environnement de test.

**Ce guide a pour objectif de vous transmettre les bonnes pratiques et les bons réflexes, sans nécessiter d’expertise technique particulière.**

<font color="FF0000"> Il est important d'attendre de recevoir le message précisant que les comptes API ont été définis sur le portail API évoqué dans le chapitre Introduction - <a href="https://silae-api.document360.io/docs/guide-de-demarrage#envoi-du-message-comptes-api-pr%C3%AAts" rel="noopener">Envoi du message : comptes API prêts</a> pour mettre en route les accès API REST.</font>

Objectif : Obtenir les 3 données obligatoires pour le bon fonctionnement des API REST Silae :

- Le Client ID
- Le Client Secret
- La Clé de configuration d'accès API

**Une nouvelle demande d'ouverture de comptes API a été formulée et les accès API REST doivent être mis en place.**

## L'environnement de test

<font color="FF0000">Cette étape est non obligatoire si le connecteur API REST a déjà été éprouvé et validé.<br> Accéder directement à la mise en place de : <a href="https://silae-api.document360.io/docs/portail-api-d%C3%A9j%C3%A0-op%C3%A9rationnel#lenvironnement-de-production" rel="noopener">L'environnement de production</a></font>.

### La préparation et l'utilisation

1. Exporter le ou les dossiers de paie à utiliser pour effectuer les tests API REST depuis l'environnement de production
2. Accéder à l'environnement de test  

Domaine Silae accessible de la même manière qu'un domaine de production, mais en utilisant l'url envoyée dans le mail reçu "Accès à votre espace collaborateur Silae"
3. Importer ces mêmes dossiers dans l'environnement de test (utiliser le mot de passe renseigné dans le mail reçu)

Base de connaissances My Silae Paie : [Exporter / Importer des dossiers de paie sur le logiciel](https://support.silae.fr/hc/fr/articles/16539353381650-Exporter-Importer-des-dossiers-de-paie-sur-le-logiciel)

### Les accès API REST

#### Le Client ID et le Client Secret

<font color="FF0000">Les opérations qui suivent, sont à réaliser uniquement s'il s'agit d'un nouveau compte API (non effectué lors de la première connexion au portail API) sur lequel le <strong>Client ID</strong> et le <strong>Client Secret</strong> doivent être récupérés (ex: CABINET FRANCE - CLIENT X pour une nouvelle demande d'ouverture de comptes API Modèle 2).</font>

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2871%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) <font color="#00B0F0">Le Compte API de Test concerné apparait avec un statut "Attente d’activation".<br> </font>

1. Modifier le compte API de Test

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28162%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

1. Le **Client ID**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28167%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)  

Copier / coller le Client ID. <font color="#C00000">A conserver précieusement pour l’authentification</font>
2. Activer le compte API  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28169%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

4.Le **Client Secret** Accéder à l'onglet ***Gestion des ClientSecret*** ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2850%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

Cliquer sur le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28172%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2891%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) Copier / coller le Client Secret généré. <font color="#C00000">A conserver précieusement pour l’authentification.</font>

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/06.ActivationCompteTestAPIClientIDClientSecret.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

#### La configuration d'accès API

L'opération s'effectue depuis l'environnement de test.

1. Accéder à l'environnement de test
2. Utiliser la fonction **Paramétrage Paie > bouton Options > Configuration API**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28379%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

- Sélectionner le compte API de Test qui vient d'être activé.
- Désigner l’utilisateur Silae avec les droits d'accès nécessaires pour l'usage des fonctions API  

**Utiliser le bouton ![Image](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(427).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) pour obtenir de l'aide**  

Articles d'aide My Silae Paie sur :
  - [Créer et gérer un collaborateur](https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T)
  - [Droits d'accès clients](https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients)
  - [Définir les droits d'accès du contact client](https://support.silae.fr/hc/fr/articles/16539362157714-Cr%C3%A9er-un-droit-d-acc%C3%A8s-client-au-niveau-dossier) (**Note importante** : Préciser que la fiche Contact est de type ***Contact dédié API***)
- Choisir le type d'accès aux dossiers de paie
  - Accès à tous les dossiers du domaine
  - Accès à un ou plusieurs dossiers : sélectionner le ou les dossiers de paie par le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28378%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)
  - Renseigner le libellé souhaité à la configuration API

La sauvegarde de la configuration API fait apparaitre le message suivant : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28317%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

<font color="#C00000">Dans le cadre de l'usage de l'environnement de test, aucune facturation ne sera générée.</font>

#### La clé principale ou secondaire de configuration d'accès API

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

1.Accéder au **portail API**

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28162%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

1. Accéder à l'onglet ***Configuration d'accès API***  

La configuration API définie précédemment apparait dans la liste  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28405%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) situé à droite du compte API de test désigné  
 pour :
- 
  - Activer la configuration d'accès API
  - Générer la clé principale ou secondaire (**Subscription Key** - Pas de différence entre la clé principale et secondaire). <font color="#C00000">A conserver précieusement pour l'accès aux dossiers.</font>

Pour être certain d'avoir choisi la configuration API concernée, l'Id de configuration d'accès API indiqué dans le compte API sur le portail doit correspondre à l'ID unique de configuration renseigné dans My Silae.

Ne pas confondre :

- L'**ID unique de configuration n'est pas un identifiant de connexion API**. Il correspond à la référence attribuée à la configuration API lors sa création dans My Silae Paie que l'on retrouve dans le compte API concerné au niveau du portail.
- La **Clé de configuration d'accès API est le 3ème identifiant API de connexion** qui permet de donner accès aux données des dossiers de paie via API REST

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/08.API_REST_ActivationConfigAPItest_Cl%C3%A9Principale.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

### La mise en route des tests

1. Exploiter le **Client ID** et le **Client Secret** copiés pour s'authentifier (obtenir l'access_token avec la fonction API : Token Creation Prod)
2. Utiliser la **Clé de la configuration d'accès API** (Subscription Key) copiée pour obtenir les droits d'accès aux données des dossiers de paie désignés
3. Eprouver et valider les développements API REST

<font color="#C00000">Dans le cas où les développements doivent être éprouvés et validés par le prestataire/éditeur du client, le Partenaire Silae doit transmettre ces éléments indispensables : le <strong>Client ID</strong>, <strong>Client Secret</strong> et la <strong>Clé de la configuration d'accès API</strong> (ex: TEST - CABINET FRANCE - CLIENT SARL)</font>

## L'environnement de production

Les développements API REST ont été testés et validés. La solution d'interconnexion avec Silae Paie peut être mis en place.

### Les accès API REST

<font color="FF0000">Les opérations qui suivent, sont à réaliser uniquement s'il s'agit d'un nouveau compte API (non effectué lors de la première connexion au portail API) sur lequel le <strong>Client ID</strong> et le <strong>Client Secret</strong> doivent être récupérés (ex: CABINET FRANCE - CLIENT X pour une nouvelle demande d'ouverture de comptes API Modèle 2).</font>

#### Le Client ID et le Client Secret

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28182%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)l

<font color="#00B0F0">Le Compte API de Production apparait avec un statut "Attente d’activation".<br> Si le compte API est déjà activé, il est inutile d'effectuer les étapes suivantes. Le Client ID et le Client Secret est déjà en votre possession.</font>

1. Modifier le compte API de Production

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28183%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

1. Le **Client ID**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28184%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

Copier / coller le Client ID. <font color="#C00000">A conserver précieusement pour l’authentification.</font> 3. Activer le compte API ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28185%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

4.Le **Client Secret** Accéder à l'onglet ***Gestion des ClientSecret*** ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28186%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

Cliquer sur le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28172%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28187%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

Copier / coller le Client Secret généré. <font color="#C00000">A conserver précieusement pour l’authentification.</font>

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/09.ActivationCompteProdAPIClientIDClientSecret.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

#### La configuration d'accès API

L'opération s'effectue depuis l'environnement de production.

1. Accéder à l'environnement de production
2. Utiliser la fonction **Paramétrage Paie > bouton Options > Configuration API**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28380%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

- Sélectionner le compte API de Production qui vient d'être activé dans la liste
- Désigner l’utilisateur Silae avec les droits d'accès nécessaires pour l'usage des fonctions API  

**Utiliser le bouton ![Image](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(427).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) pour obtenir de l'aide**  

Articles d'aide My Silae Paie sur :
  - [Créer et gérer un collaborateur](https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T)
  - [Droits d'accès clients](https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients)
  - [Définir les droits d'accès du contact client](https://support.silae.fr/hc/fr/articles/16539362157714-Cr%C3%A9er-un-droit-d-acc%C3%A8s-client-au-niveau-dossier) (**Note importante** : Préciser que la fiche Contact est de type ***Contact dédié API***)
- Choisir le type d'accès aux dossiers de paie
  - Accès à tous les dossiers du domaine
  - Accès à un ou plusieurs dossiers : sélectionner le ou les dossiers de paie par le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28378%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)
  - Renseigner le libellé souhaité à la configuration API

La sauvegarde de la configuration API fait apparaitre le message suivant : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28318%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

<font color="#C00000">Il est important de bien sélectionner l'accès pour ne pas être facturé sur des dossiers de paie qui ne sont pas concernés par un usage API REST.</font>

- <font color="#C00000">Un compte API de production modèle 1B (ex : CABINET FRANCE - 1B) ou modèle 2 (ex: CABINET FRANCE - CLIENT SARL) : une facturation sera générée en fonction du choix effectué sur les dossiers de paie.</font>

#### La clé principale ou secondaire de configuration d'accès API

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

1.Accéder au **portail API**

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28190%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

1. Accéder à l'onglet ***Configuration d'accès API***  

La configuration API définie précédemment apparait dans la liste  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28409%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D) situé à droite du compte API de test désigné  
 pour :
  - Activer la configuration d'accès API
  - Générer la clé principale ou secondaire (**Subscription Key** - Pas de différence entre la clé principale et secondaire). <font color="#C00000">A conserver précieusement pour l'accès aux dossiers.</font>

Pour être certain d'avoir choisi la configuration API concernée, l'Id de configuration d'accès API indiqué dans le compte API sur le portail doit correspondre à l'ID unique de configuration renseigné dans My Silae.

Ne pas confondre :

- L'**ID unique de configuration n'est pas un identifiant de connexion API**. Il correspond à la référence attribuée à la configuration API lors sa création dans My Silae Paie que l'on retrouve dans le compte API concerné au niveau du portail.
- La **Clé de configuration d'accès API est le 3ème identifiant API de connexion** qui permet de donner accès aux données des dossiers de paie via API REST

Tutoriel en images : [Video](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/10.API_REST_ConfigurationAPIprod_SilaePaie.mp4?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A44Z&se=2026-11-13T20%3A13%3A44Z&sr=c&sp=r&sig=jBszv9JpcIDeILlse9HsF%2F6UcbBZWY5OVLRsZSQDtVw%3D)

### La mise en route des API REST

1. Exploiter le **Client ID** et le **Client Secret** copiés pour s'authentifier (obtenir l'access_token avec la fonction API : Token Creation Prod)
2. Utiliser la **Clé de la configuration d'accès API** (Subscription Key) copiée pour obtenir les droits d'accès aux données des dossiers de paie désignés.

<font color="#C00000">Dans le cas où les développements doivent être éprouvés et validés par le prestataire/éditeur du client, le Partenaire Silae doit transmettre ces éléments indispensables : le <strong>Client ID</strong>, <strong>Client Secret</strong> et la <strong>Clé de la configuration d'accès API</strong> (ex: TEST - CABINET FRANCE - CLIENT SARL)</font>
