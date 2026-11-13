---
title: "Gestion des comptes API"
slug: "gestion-des-comptes-api"
updated: 2024-03-26T17:42:31Z
published: 2024-03-26T17:42:31Z
canonical: "silae-api.document360.io/gestion-des-comptes-api"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Gestion des comptes API

Depuis la page d'accueil, le menu **Mes comptes API** permet de visualiser la liste des comptes API auquels on a accès et de gérer ces comptes API ainsi que les configurations d'accès API.

La liste des comptes API permet de visualiser certaines informations des comptes API, comme les noms des comptes, le statut du compte et les dates d'expiration des ClientSecrets.

![Portail_API-ComptesAPI](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Portail_API-ComptesAPI.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A11Z&se=2026-11-13T20%3A15%3A11Z&sr=c&sp=r&sig=LIwXF%2BHWPH%2B5te88S1dtu2MdvKDMuFzNl27kdcWSn1Y%3D)

Sur chaque ligne de compte API, un menu situé à droite propose des actions selon l'état du compte :

- Modifier :
  - Ajouter votre référence commande qui sera reprise sur votre facturation
  - bouton Activer le compte / Désactiver le compte
- Activer / Désactiver :
  - Désactiver un compte API : toutes les configurations d'accès API associées seront automatiquement désactivées.
  - Activer à nouveau un compte API : il sera nécessaire d'activer manuellement les configurations d'accès API rattachées.
- Supprimer le compte API

## Les trois onglets de la gestion des comptes API

  

          
          

📌 **À noter :**

Dans les paragraphes suivants nous considérons que l'application qui exploite les APIs est l'application d'un éditeur pour simplifier les explications. Le principe est exactement le même s'il s'agit de l'application d'un partenaire Silae.

  
 

### Informations générales

Cette section présente les informations relatives au compte API et aux utilisateurs de la société ayant accès à ce compte. Il permet d'**activer ou de désactiver le compte** via une coche sur la ligne indiquant le ***statut*** du compte.

S'il s'agit d'un compte API Partenaire (modèle 1A ou 1B, ou compte de test), un bloc hébergement présente les informations du domaine auquel est rattaché le compte API.

Si l'utilisateur a les droits de gestion de la société, un bloc supplémentaire apparaît avec la liste des utilisateurs rattachés à la société et permet d'autoriser/interdire l'accès au compte API pour chaque utilisateur.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%281%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A11Z&se=2026-11-13T20%3A15%3A11Z&sr=c&sp=r&sig=LIwXF%2BHWPH%2B5te88S1dtu2MdvKDMuFzNl27kdcWSn1Y%3D)

  

          
          

📚 Pour plus de détails sur la nomenclature, un ***[glossaire](/api-rest/docs/glossaire)*** est à votre disposition.

  

### Configurations d'accès API

  

Une fois la configuration d'accès réalisée sur le logiciel Silae, la liste des informations liées aux configurations d'accès apparaît sur le portail API dans cet onglet ***Configurations d'accès API***.

Chaque configuration peut se voir attribuer l'un des **quatre statuts** suivants :

- **Activé :** L'activation est réalisée dans le *portail API* par l'*éditeur*.
- **Désactivé :** La désactivation est réalisée dans le *portail API* par l'*éditeur*.
- **Erreur :** Ce statut indique une erreur de configuration survenue lors d'un appel.
- **Bloqué :** Le bloquage et le débloquage sont réalisés par le *gestionnaire de paie* via le *logiciel Silae*.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%286%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A11Z&se=2026-11-13T20%3A15%3A11Z&sr=c&sp=r&sig=LIwXF%2BHWPH%2B5te88S1dtu2MdvKDMuFzNl27kdcWSn1Y%3D)

Le **symbole "⋮"**, situé à droite des titres de colonnes, permet d'appliquer des **filtres** *(par date, par ID, etc)* pour retrouver plus rapidement une configuration. Le symbole "⋮" situé en bout de chaque ligne, permet d'ouvrir un menu déroulant qui propose d'**éditer** ou de **désactiver une configuration**. Il offre également de regénérer les clés primaires et secondaires depuis ce volet.

          Subscription Key

          

Ces 2 clés, principale et secondaire, ont un fonctionnement identique et une des 2 clés doit être passée dans le header **Ocp-Apim-Subscription-Key** de toutes les requêtes.

Cliquer sur ***éditer*** pour accéder à la liste complète des dossiers :

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%287%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A11Z&se=2026-11-13T20%3A15%3A11Z&sr=c&sp=r&sig=LIwXF%2BHWPH%2B5te88S1dtu2MdvKDMuFzNl27kdcWSn1Y%3D)

  

### Gestion des ClientSecrets

  

Cet onglet permet de visualiser le nom du compte ainsi que le client ID. La date d'expiration des ClientSecrets principal et secondaire est également renseignée. Les ClientSecrets principal et secondaire peuvent être régénérés depuis ce même écran. Lorsqu'un ClientSecret est regénéré, le précédent devient obsolète.

  

          
          

📌 **À noter :**

Le ClientSecret ne s'affiche qu'une seule fois lors de sa génération. Il est ensuite impossible de le récupérer. Veillez à le copier et à le conserver avant de fermer la fenêtre. Si le ClientSecret est perdu, un nouveau doit être généré. Sa durée de validité correspond à une année glissante.

  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%283%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A11Z&se=2026-11-13T20%3A15%3A11Z&sr=c&sp=r&sig=LIwXF%2BHWPH%2B5te88S1dtu2MdvKDMuFzNl27kdcWSn1Y%3D)

  

          
          

📚 Un ClientSecret valide est nécessaire pour s'authentifier et exploiter les API Silae. Pour connaître les détails du processus d'authentification, vous pouvez consulter la fiche ***[Authentification](/api-rest/docs/authentification)***.

➜ ***Quelle est l'utilité du ClientSecret secondaire ?***

Il n'existe pas de différence technique entre le ClientSecret principal et le secondaire. Une fois généré, un ClientSecret est exploité dans l'application de l'éditeur lors de l'authentification. À l'approche de la date d'expiration du ClientSecret principal, il est recommandé de générer un ClientSecret secondaire. En effet, lorsqu'un ClientSecret arrive à expiration, l'application ne peut plus se connecter. Pouvoir remplacer dans l'application le ClientSecret principal par le ClientSecret secondaire (ou vice-versa) permet de fluidifier la transition en évitant une interruption de service.

➜ ***Pourquoi les ClientSecret disposent-ils d'une date d'expiration ?***

L'expiration est une garantie de sécurité pour pallier une éventuelle compromission du ClientSecret du côté de l'application de l'éditeur. La date d'expiration permet de s'assurer que l'accès retrouve régulièrement un niveau de sécurité optimal.
