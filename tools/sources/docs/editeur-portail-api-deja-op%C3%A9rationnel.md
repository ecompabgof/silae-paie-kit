---
title: "Portail API déjà opérationnel"
slug: "editeur-portail-api-deja-opérationnel"
updated: 2026-08-13T08:08:09Z
published: 2026-08-13T08:08:09Z
canonical: "silae-api.document360.io/editeur-portail-api-deja-opérationnel"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Portail API déjà opérationnel

## Introduction

La procédure qui suit s'adresser aux éditeurs partenaires API SIlae qui possèdent déjà son portail API et son environnement de test.

*Si cela n'est pas le cas, veuillez suivre la procédure : [Première connexion au portail API](https://silae-api.document360.io/docs/premi%C3%A8re-connexion-au-portail-api-1)*

Objectif : Le Client ID et le Client Secret ont été obtenu lors de la première connexion au portail API. Il reste à récupérer la nouvelle Clé de configuration d'accès API

**Ce guide a pour objectif de vous transmettre les bonnes pratiques et les bons réflexes, sans nécessiter d’expertise technique particulière.**

## L'environnement de test

<font color="FF0000">Cette étape est facultative si le connecteur API REST a déjà été éprouvé et validé : <a href="https://silae-api.document360.io/docs/portail-api-d%C3%A9j%C3%A0-op%C3%A9rationnel#lenvironnement-de-production" rel="noopener">L'environnement de production</a></font>.

### L'accès

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28197%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D) ... Depuis le message reçu, suivre la procédure d'initialisation du mot de passe indiqué dans son contenu pour obtenir son accès.

### La préparation et l'utilisation

1. Réclamer le ou les dossiers de paie Silae auprès du client sur lesquels vont être éprouvés et validés les développements API REST (le partenaire Silae devra exporter le ou les dossiers de paie du client depuis son l'environnement de production)
2. Accéder à l'environnement de test  

Domaine Silae Paie accessible de la même manière qu'un domaine de production, mais en utilisant l'url envoyée dans le mail reçu "Accès à votre espace collaborateur Silae"
3. Importer ces mêmes dossiers dans l'environnement de test (utiliser le mot de passe renseigné dans le mail reçu)

Base de connaissance Silae Paie : [Exporter / Importer des dossiers de paie sur le logiciel](https://support.silae.fr/hc/fr/articles/16539353381650-Exporter-Importer-des-dossiers-de-paie-sur-le-logiciel)

### Les accès API REST

#### Le Client ID et le Client Secret

<font color="FF0000">Le <strong>Client ID</strong> et le <strong>Client Secret</strong> ont été définis et copiés lors de la première connexion au portail API. Par conséquent aucune opération n'est à réaliser.</font>

#### La configuration d'accès API

L'opération s'effectue depuis l'environnement de test.

1. Accéder à l'environnement de test
2. Utiliser la fonction **Paramétrage Paie > bouton API**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28393%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

- Sélectionner le compte API de Test
- Désigner l’utilisateur Silae avec les droits d'accès nécessaires pour l'usage des fonctions API  

**Utiliser le bouton ![Image](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(427).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D) pour obtenir de l'aide**  

Base de connaissance Silae Paie : [Créer et gérer un collaborateur](https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T), [Droits d'accès clients](https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients), [Définir les droits d'accès du contact client](https://support.silae.fr/hc/fr/articles/16541448182930-D%C3%A9finir-les-droits-d-acc%C3%A8s-du-contact-client)
- Choisir de l'accès aux dossiers de paie
  - Accès à tous les dossiers du domaine
  - Accès à un ou plusieurs dossiers : la sélection s'effectue par le bouton  ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28180%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

La sauvegarde de la configuration API fait apparaitre le message suivant : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28175%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

<font color="#C00000">Dans le cadre de l'usage de l'environnement de test, aucune facturation ne sera générée.</font>

#### La clé princiaple ou secondaire de configuration d'accès API

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

1.Accéder au **portail API**

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28207%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

1. Accéder à l'onglet ***Configuration d'accès API***  

La configuration API définie précédemment apparait dans la liste  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28208%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D) situé à droite de la configuration API de test désignée  
 pour :
- 
  - Activer la configuration d'accès API
  - Générer la clé principale ou secondaire (**Subscription Key** - Pas de différence entre la clé principale et secondaire). <font color="#C00000">A conserver précieusement pour l'accès aux dossiers.</font>

NB : Pour être certain d'avoir choisi la configuration API concernée, l'Id de configuration d'accès API indiqué dans le compte API sur le portail doit correspondre à l'ID unique de configuration renseigné dans My Silae.

Ne pas confondre :

- La clé de configuration d'accès API qui permet de donner accès aux données des dossiers de paie via API REST
- L'ID unique de configuration qui correspond à l'identifiant attribué lors sa création dans My Silae Paie que l'on retrouve dans le compte API concerné au niveau du portail

### La mise en route des tests

1. Exploiter le **Client ID** et le **Client Secret** copiés pour s'authentifier (obtenir l'access_token avec la fonction API : Token Creation Prod)
2. Utiliser la **Clé de la configuration d'accès API** (Subscription Key) copiée pour obtenir les droits d'accès aux données des dossiers de paie désignés
3. Eprouver et valider les développements API REST

## L'environnement de production

Les développements API REST ont été testés et validés. La connexion peut être établie sur l'environnement de production

### Les accès API REST

#### Le Client ID et le Client Secret

<font color="FF0000">Le <strong>Client ID</strong> et le <strong>Client Secret</strong> ont été définis et copiés lors de la première connexion au portail API. Par conséquent aucune opération n'est à réaliser.</font>

<font color="FF0000">Si ce n'est pas le cas, effectuer la procédure qui suit.</font>

#### Le Client ID et le Client Secret

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28211%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

<font color="#7030A0">Le Compte API de Production apparait avec un statut "Attente d’activation"</font>

1. Modifier le compte API de Production

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D) situé à droite du compte API de test désigné
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28212%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

1. Le **Client ID**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28213%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

Copier / coller le Client ID. <font color="#C00000">A conserver précieusement pour l’authentification.</font> 3. Activer le compte API ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28214%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

4.Le **Client Secret** Accéder à l'onglet ***Gestion des ClientSecret*** ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28215%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

Cliquer sur le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28172%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28216%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

Copier / coller le Client Secret généré. <font color="#C00000">A conserver précieusement pour l’authentification.</font>

#### La configuration d'accès API

<font color="#C00000">Les opérations qui suivent doivent être exécutées par le partenaire pour le compte du client qui souhaite mettre en place la connexion via les API REST avec la solution de l'éditeur.</font>

<font color="#00B0F0">
<ol>
<li>Accéder à l'environnement de production<br>
<br></li>
<li>Utiliser la fonction <strong>Paramétrage Paie &gt; bouton API</strong><br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28395%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D" alt="image.png"></li>
</ol>
<ul>
<li>Sélectionner le compte API <strong>Editeur Partenaire API SIlae</strong> concerné par l'accès API REST</li>
<li>Désigner l’utilisateur Silae avec les droits d'accès nécessaires pour l'usage des fonctions API<br>
<strong>Utiliser le bouton <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(427).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D" alt="Image" width="25" height="25"> pour obtenir de l'aide</strong><br>
Base de connaissance Silae Paie : <a href="https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T" rel="noopener">Créer et gérer un collaborateur</a>, <a href="https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients" rel="noopener">Droits d'accès clients</a>, <a href="https://support.silae.fr/hc/fr/articles/16541448182930-D%C3%A9finir-les-droits-d-acc%C3%A8s-du-contact-client" rel="noopener">Définir les droits d'accès du contact client</a></li>
<li>Choisir <strong>Accès à un ou plusieurs dossiers</strong> : la sélection s'effectue par le bouton  <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28180%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D" alt="image.png" height="21"></li>
</ul>
<p>La sauvegarde de la configuration API  fait apparaitre le message suivant :<br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28175%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D" alt="image.png" width="500" height="250"></p>
</font>

<font color="#00B0F0"><font color="#C00000">Il est important de bien sélectionner le ou les dossiers de paie du client concerné par l'accès API REST.<br> La configuration API ainsi mis en place, le partenaire doit prévenir son client afin que l'éditeur puisse finaliser les opérations.</font><br> </font>

#### La clé principale ou secondaire de configuration d'accès API

L'opération s'effectue depuis **Mes Comptes** de la page d'accueil du portail API.

1.Accéder au **portail API**

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D) situé à droite de la configuration API  désignée
- Sélectionner la fonction **Modifier**  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28218%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

1. Accéder à l'onglet ***Configuration d'accès API***  

La configuration API définie par le partenaire apparait dans la liste  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28219%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D)

- Utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28165%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A13%3A53Z&se=2026-11-13T20%3A13%3A53Z&sr=c&sp=r&sig=AlpCbOhEYBOEOkzaJEq4sGb4pyhRv0%2BgkCa5rBlvA3E%3D) situé à droite de la configuration API désignée  
 pour :
- 
  - Activer la configuration d'accès API
  - Générer la clé principale ou secondaire (**Subscription Key** - Pas de différence entre la clé principale et secondaire). <font color="#C00000">A conserver précieusement pour l'accès aux dossiers.</font>

NB : il est important de sélectionner la configuration API dont l'id correspond à l'identifiant qui a été communiqué par le partenaire.

Ne pas confondre :

- La clé de configuration d'accès API qui permet de donner accès aux données des dossiers de paie via API REST
- L'ID unique de configuration qui correspond à l'identifiant attribué lors sa création dans My Silae Paie que l'on retrouve dans le compte API concerné au niveau du portail

### La mise en route des API REST

1. Exploiter le **Client ID** et le **Client Secret** copiés pour s'authentifier (obtenir l'access_token avec la fonction API : Token Creation Prod)
2. Utiliser la **Clé de la configuration d'accès API** (Subscription Key) copiée pour obtenir les droits d'accès aux données des dossiers de paie désignés.
