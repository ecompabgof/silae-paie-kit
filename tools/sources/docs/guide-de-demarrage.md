---
title: "Guide de démarrage API"
slug: "guide-de-demarrage"
updated: 2026-09-18T17:31:06Z
published: 2026-09-18T17:31:26Z
canonical: "silae-api.document360.io/guide-de-demarrage"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Guide de démarrage API

## Introduction

Bienvenue dans le guide de démarrage API REST qui a pour but de fournir le mode opératoire pour la mise en route des **API mySilae Paie**.

**Conditions :**

 

- **Le formulaire d'ouverture de comptes API REST a été complété et renvoyé.**

### Notices Formulaire

Des modes d'emploi sont à disposition pour remplir correctement le formulaire selon le modèle demandé :

- Modèle 1A et/ou 1B à usage interne du partenaire : [Notice Formulaire Modèle 1A et/ou 1B](https://silae-api.document360.io/docs/notices-formulaires#notice-formulaire-mod%C3%A8le-1a-etou-1b)
- Modèle 2 pour l'usage du client du partenaire : [Notice Formulaire Modèle 2](https://silae-api.document360.io/docs/notices-formulaires#notice-formulaire-mod%C3%A8le-2)
- Modèle 4 pour l'éditeur de comptabilité Partenaire API mySilae Paie : [Notice Formulaire Modèle 4](https://silae-api.document360.io/docs/notices-formulaires#notice-formulaire-mod%C3%A8le-4)

### Mise en route des accès API REST

2 situations peuvent se présenter pour la mise en route des accès API REST :

- Première connexion au portail API et à l'environnement de test
- L'accès au portail API et à l'environnement de test sont déjà opérationnels

Quel que soit la situation, la mise en route des accès API REST nécessite d'obtenir les **3 éléments indispensables** suivants :

1. Le **Client ID**
2. Le **Client Secret**
3. La **Clé de configuration d'accès API**

Le **Client ID** et le **Client Secret** permet de s'authentifier auprès du serveur d'authentification API mySilae Paie : [Authentification](https://silae-api.document360.io/docs/authentification)

La **Clé de configuration d'accès API** permet d'utiliser les fonctions API REST pour accéder aux données de mySilae Paie en fonction du périmètre fonctionnel du modèle : [Configuration d'accès API](https://silae-api.document360.io/docs/configuration-dacces-api#composition-dune-configuration-dacc%C3%A8s-api)

#### Ces 3 éléments correspondent à vos identifiants API mySilae Paie

## Première connexion au portail API

### Préparation

Dès la réception du **premier formulaire**, les équipes Silae procèdent à la préparation des éléments utiles pour la mise en route des API REST (un délai de quelques semaines est nécessaire pour une première demande) :

1. Mise en place du Portail API avec sa fiche Société et ses comptes API
2. Agencement d'un [Environnement de test](https://silae-api.document360.io/api-rest/docs/lenvionnement-de-test)

### Réception des messages

Lorsque les équipes Silae ont finalisé la mise en place du Portail API et de l'environnement, 3 messages sont envoyés. <font color="FF0000"><br> Il est important d'attendre de recevoir tous les messages pour mettre en route les accès API REST.<br> </font>

#### Accès à l'environnement de test

Dès que l'environnement de test est prêt, un message est envoyé à l'adresse Email Utilisateur de l'environnement de test renseigné dans le formulaire.

Exemple de message reçu :

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2867%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A35Z&se=2026-11-13T20%3A13%3A35Z&sr=c&sp=r&sig=Lsz51dRlWJw2bhqw8Z8X5Xnp%2BSrSZbS8G0f3sJ3dJb4%3D)

Il suffit de suivre la procédure.

#### Accès au portail API

Dès que le portail API est prêt, un message est envoyé à l'adresse Email Utilisateur du portail API signalé dans le formulaire.

Exemple de message reçu :

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2840%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A35Z&se=2026-11-13T20%3A13%3A35Z&sr=c&sp=r&sig=Lsz51dRlWJw2bhqw8Z8X5Xnp%2BSrSZbS8G0f3sJ3dJb4%3D)

Il suffit de suivre la procédure.

#### Récapitulatif des éléments mis à disposition

Dès que tous les composants ont été mis en place, un message récapitulatif avec toutes les informations utiles est envoyé à l'adresse Email du demandeur déclaré dans le formulaire.

Exemple de message reçu :

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28118%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A35Z&se=2026-11-13T20%3A13%3A35Z&sr=c&sp=r&sig=Lsz51dRlWJw2bhqw8Z8X5Xnp%2BSrSZbS8G0f3sJ3dJb4%3D)

Ce message précise : - L’URL de l'environnement de test mis à disposition - Le mot de passe à utiliser pour importer le ou les dossiers de paie - Les liens vers notre documentation et guide de démarrage

## Portail API déjà opérationnel

Le portail API et l'environnement de test sont déjà actifs et une nouvelle demande d'ouverture de comptes API REST a été formulée.

### Préparation

A la réception du nouveau formulaire, les équipes Silae procèdent à l'ajout des comptes API REST au portail API.

### Envoi du message : comptes API prêts

Dès que les éléments sont prêts, un message est envoyé à l'adresse Email Utilisateur du portail API signalé dans le formulaire. Son contenu diffère selon la demande d'ouverture de comptes API.

Exemple de messages reçus : :

Demande d'ouverture de comptes API modèle 1A et 1B (usage interne) "Pour donner suite à votre demande d'ouverture de compte API REST, les comptes API suivants ont ajoutés sur votre portail API :

- TEST - *NOM du PARTENAIRE*
- *NOM du PARTENAIRE* - *1A*
- *NOM du PARTENAIRE* - *1B*

Demande d'ouverture de comptes API modèle 2 (usage client du partenaire) "Pour donner suite à votre demande d'ouverture de compte API REST, les comptes API suivants ont ajoutés sur votre portail API :

- TEST - *NOM du PARTENAIRE* - *NOM DU CLIENT*
- *NOM du PARTENAIRE* - *NOM DU CLIENT*

## Mise en route des accès API REST

Selon votre profil et votre situation, choisir le mode opératoire correspondant :

| Profils | Mode opératoire - 1ère connexion | Mode opératoire - Portail API déjà opérationnel |
| --- | --- | --- |
| Vous êtes Partenaire API mySilae Paie | [Première connexion au portail API](https://silae-api.document360.io/docs/premi%C3%A8re-connexion-au-portail-api) | [Portail API déjà opérationnel](https://silae-api.document360.io/docs/portail-api-d%C3%A9j%C3%A0-op%C3%A9rationnel) |
| Vous êtes Editeur partenaire API mySilae Paie | [Première connexion au portail API](https://silae-api.document360.io/docs/premi%C3%A8re-connexion-au-portail-api-1) | [Portail API déjà opérationnel](https://silae-api.document360.io/docs/portail-api-d%C3%A9j%C3%A0-op%C3%A9rationnel-1) |

## Connexion avec une solution éditeur partenaire API mySilae Paie

Besoin de connecter mySilae Paie à une solution éditeur partenaire API mySilae Paie : [Quels sont les éditeurs qui sont partenaires API mySilae Paie ?](https://silae-api.document360.io/docs/faq-1#quels-sont-les-%C3%A9diteurs-qui-sont-partenaires-api-silae), il suffit de suivre la procédure : [Comment donner les accès API à un éditeur partenaire API mySilae Paie ?](https://silae-api.document360.io/docs/faq-1#comment-donner-les-acc%C3%A8s-api-%C3%A0-un-%C3%A9diteur-partenaire-api-silae)
