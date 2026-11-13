---
title: "Configuration API"
slug: "configuration-api"
updated: 2026-10-23T15:06:47Z
published: 2026-10-23T15:06:47Z
canonical: "silae-api.document360.io/configuration-api"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuration API

<font face="Nirmala UI">
<br>
<h2>Introduction</h2>
<p>Pour pouvoir exploiter les API mySilae Paie, il est obligatoire de posséder les autorisations d'accès afin de pouvoir interagir avec les données de la paie.</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(425).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="Image"></p>
<p>Pour cela, une configuration API doit être mise en place pour donner un accès API sur le ou les dossiers de paie concernés.</p>
<h2>Les prérequis</h2>
<h3>L'accès à la fonction Configuration API</h3>
<p>L'utilisateur doit être autorisé à accéder à la fonction <strong>Configuration API</strong> pour lui permettre de gérer les différentes configurations API nécessaires.</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28376%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>
<p>Pour accéder à cette fonction, cet utilisateur doit posséder l'autorisation à paramétrer, si nécessaire, depuis l'administration des collaborateurs :</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28343%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>

<u>**A noter**</u> : ce droit doit être affecté à des comptes collaborateurs qui ont un accès sur tous les dossiers de paie du domaine.
<h3>Les composants principaux d'une configuration API</h3>
<p>Pour définir une configuration API, nous avons besoin de :</p>
<ul>
<li>Un <strong>compte API</strong> <u>actif</u> sur le portail (cf. <a href="https://silae-api.document360.io/docs/gestion-des-comptes-api" rel="noopener">Gestion des comptes API</a>)</li>
<li>Un <strong>utilisateur mySilae Paie</strong> qui correspond à une fiche Collaborateur ou une fiche Contact.</li>
</ul>
<h2>La gestion des configurations API</h2>
<p>La fonction <strong>Paramétrage paie &gt; Options &gt; Configuration API</strong> permet d'accéder à la liste des configurations d'accès API.</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(425).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="Image"></p>
<p>Elle permet de :</p>
<ul>
<li>Afficher toutes les configurations API octroyés dans le domaine (cadre vert)</li>
<li>consulter et modifier (créer) les paramètres d'une configuration API sélectionnée (cadre bleu)</li>
<li>Consulter et modifier (créer) la liste des dossiers de paie actifs sur la configuration API choisie (cadre violet)</li>
</ul>
<h3>Composition d'une configuration API</h3>
<p>L'action <strong>Créer une configuration API</strong> (menu de droite) permet de définir une configuration API</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(426).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="Image"></p>
<h3>Les paramètres d'une configuration API</h3>
<table>
<thead>
<tr>
<th>Champs</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Compte API</td>
<td>Le compte API pour lequel est octroyé l'accès à sélectionner dans la liste proposée<br> <font color="FF0000"> Si le compte API attendu n'apparait pas, cela signifie qu'il n'a pas été activé depuis le portail API</font></td>
</tr>
<tr>
<td>Utilisateur mySilae Paie</td>
<td>L'utilisateur mySilae Paie auquel est rattaché l'accès API</td>
</tr>
<tr>
<td>Type d'accès</td>
<td>Option qui permet de définir le périmètre de la configuration API <br> - <strong>Accès à tous les dossiers du domaine</strong> : tous les dossiers seront sélectionnés y compris ceux ajoutés au domaine à posteriori.<br> - <strong>Accès à un ou plusieurs dossiers</strong> : à partir de la liste des dossiers de paie du domaine, une sélection de dossiers peut être réalisée.</td>
</tr>
<tr>
<td>Libellé</td>
<td>Une description libre qui permet d'annoter la configuration API</td>
</tr>
<tr>
<td>ID unique de configuration d'accès API</td>
<td>ID qui permet d'identifier la configuration d'accès API (attribué lors de la sauvegarde d'une nouvelle configuration API)</td>
</tr>
</tbody>
</table>
<h3>Le type d'accès selon le modèle API</h3>
<p>Le <strong>Type d'accès</strong> doit être sélectionné en fonction du modèle API (modèle 1A, 1B, 2) auquel est rattaché le compte.<br>
Le paramétrage standard est :</p>
<table>
<thead>
<tr>
<th>Modèle API</th>
<th>Exemple de nom de compte API</th>
<th>Type d'accès</th>
</tr>
</thead>
<tbody>
<tr>
<td>Modèle 1A</td>
<td>SILAE-PARTENAIRE - 1A</td>
<td>Accès à tous les dossiers du domaine ou Accès à un ou plusieurs dossiers</td>
</tr>
<tr>
<td>Modèle 1B</td>
<td>SILAE-PARTENAIRE - 1B</td>
<td>Accès à un ou plusieurs dossiers</td>
</tr>
<tr>
<td>Modèle 2</td>
<td>SILAE-PARTENAIRE - CLIENT RS1</td>
<td>Accès à un ou plusieurs dossiers</td>
</tr>
<tr>
<td>Modèle 2</td>
<td>SILAE-PARTENAIRE - CLIENT RS2</td>
<td>Accès à un ou plusieurs dossiers</td>
</tr>
</tbody>
</table>
<h3>L'Utilisateur mySilae Paie</h3>
<p><strong>La sélection d'un Utilisateur mySilae Paie est un choix important et obligatoire.</strong> (<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(427).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="Image" width="25" height="25">)<br>
Les droits d'accès associés à cet Utilisateur mySilae Paie permettent d'exploiter pleinement ou de limiter l'usage des fonctions API associées à votre modèle API.</p>

<u>Exemples de cas de blocage</u> :
<ul>
<li>Un Utilisateur mySilae Paie qui ne possède pas le droit de modifier une fiche Salarié, un message d'erreur sera renvoyé sur l'exécution de la fonction API qui tente de modifier la fiche salarié.</li>
<li>Un Utilisateur mySilae Paie qui n'a pas accès au dossier de paie, aucune fonction API ne pourra s'exécuter.</li>
</ul>
<p><strong>Il est donc important de s'assurer que la fiche collaborateur ou la fiche Contact sélectionnée en tant qu'Utilisateur mySilae Paie possède les droits suffisants.</strong></p>

<u>Aide depuis base de connaissances mySilae Paie</u> :
<ul>
<li><a href="https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T" rel="noopener">Créer et gérer un collaborateur</a></li>
<li><a href="https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients" rel="noopener">Droits d'accès clients</a></li>
<li><a href="https://support.silae.fr/hc/fr/articles/16539362157714-Cr%C3%A9er-un-droit-d-acc%C3%A8s-client-au-niveau-dossier" rel="noopener">Créer un contact au niveau dossier</a> (<strong>Note importante</strong> : Préciser que la fiche Contact est de type <em><strong>Contact dédié API</strong></em>)</li>
</ul>
<h3>La sélection des dossiers de paie</h3>
<p>La sélection des dossiers de paie est active selon le type d'accès choisi</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28355%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>
<table>
<thead>
<tr>
<th>Type d'accès</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Accès à tous les dossiers du domaine</td>
<td>Aucune action <br><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28356%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> <br></td>
</tr>
<tr>
<td>Accès à un ou plusieurs dossiers</td>
<td>le bouton<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28354%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> permet d'effectuer la sélection</td>
</tr>
</tbody>
</table>
<h3>La liste des dossiers</h3>
<p>Tous les dossiers de paie apparaissent dans la liste<br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28358%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>
<p>La colonne <strong>Statut</strong><br>
Elle indique l'état du dossier dans la configuration API</p>
<table>
<thead>
<tr>
<th>Statut</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Actif</td>
<td>Le dossier de paie est pris en compte dans la configuration API</td>
</tr>
<tr>
<td>Inactif</td>
<td>Le dossier de paie n'est pas pris en compte dans la configuration API</td>
</tr>
</tbody>
</table>

<br> La colonne **Dossier obsolète**
<p>Elle permet d'indiquer si le dossier a été déclaré inactif en production (fiche Société)</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28226%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png" height="69"></p>

<font color="FF0000"><u>A noter</u> : Un dossier de paie actif dans une configuration d'accès API qui a été déclaré obsolète par la suite (inactif en production depuis la fiche Société), est automatiquement exclu de la liste..</font>
<p>Le bouton <strong>Filtrer</strong><br>
Afin de faciliter la sélection, le bouton <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28357%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> permet de filtrer la liste des dossiers de paie selon les colonnes proposées.</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28351%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>

<u>Remarque</u> : la colonne **Dossier obsolète** peut être utilisée comme filtre pour exclure les dossiers inactifs de la liste depuis le bouton    ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28228%29.png){height="20" width=""}
<p>La sélection peut s'effectuer de manière globale par l'option <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28131%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> ou individuel par la boite à coche <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28133%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>
<p><strong>Activation / désactivation des dossiers</strong><br>
Les dossiers concernés ainsi cochés, leur statut change par les actions suivantes :</p>
<ul>
<li>Activer le(s) dossiers(s) à la sélection permet de rendre actif des dossiers inactifs à la configuration API</li>
<li>Désactiver le(s) dossiers(s) à la sélection permet de rendre inactif des dossiers actifs à la configuration API</li>
</ul>
<p>Le bouton <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28366%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> permet de sauvegarder les dossiers sélectionnés actifs sur la configuration API concernée.</p>
<h3>La sauvegarde d'une configuration API</h3>
<p>La sauvegarde de la configuration API fait apparaitre le message suivant :</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28321%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png" width="500" height="250"></p>

<font color="#C00000">Il est important de bien sélectionner le type d'accès et les dossiers de paie pour ne pas être facturé sur des données qui ne sont pas concernées par un usage API.</font>
<p>Paramétrage standard :</p>
<ul>
<li>Un compte API de production modèle 1A (ex : SILAE-PARTENAIRE - 1A) est inclus dans l'offre mySilae Paie : aucune facturation ne sera générée.</li>
<li>Un compte API de production modèle 1B (ex : SILAE-PARTENAIRE - 1B) ou modèle 2 (ex : SILAE-PARTENAIRE - CLIENT RS1) : une facturation sera générée en fonction des dossiers sélectionnés.</li>
<li>Un compte API de production modèle 4 : une facturation sera générée à l'éditeur en fonction des dossiers sélectionnés.</li>
</ul>
<section class="warningBox"><div class="title">Important</div>
<div class="content">
<p>À la création, une configuration d'accès API est <strong>Autorisée</strong> et <strong>Désactivée</strong>. Pour pouvoir l'utiliser, il est nécessaire de l'activer depuis le portail API (cf. détail dans la section dédiée au <a href="https://silae-api.document360.io/api-rest/docs/presentation-du-portail-api" rel="noopener">Portail API</a>)</p>
<p>La modification de dossiers de paie définis dans une configuration API nécessite quelques minutes de traitement (environ 10 mn) pour que la liste définitive soit prise en compte lors des appels API.</p>
</div>
</section>
<h3>Les autres fonctions et actions</h3>
<h4>A partir de la liste des configurations API</h4>
<p>Le bouton <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28370%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> permet d'épurer la liste des configurations API selon les colonnes proposées.<br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28369%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png" height="350"></p>
<p>Plusieurs filtres peuvent être combinés :<br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28371%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>
<p>Le filtre <strong>Libellé</strong> permet de rechercher toutes les configuration API selon le contenu du libellé attribué librement.</p>
<p>Le filtre <strong>Dossiers</strong> permet de lister toutes les configurations API qui possèdent le dossier de paie recherché :</p>
<table>
<thead>
<tr>
<th>Opérande</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Contient</td>
<td>Liste de toutes les configurations API dont le dossier de paie recherché est actif</td>
</tr>
<tr>
<td>Correspond exactement à</td>
<td>Liste de toutes les configurations API qui possèdent uniquement le dossier de paie recherché est actif</td>
</tr>
</tbody>
</table>
<h4>A partir d'une configuration API</h4>
<p>Les boutons <strong>Bloquer</strong> et <strong>Autoriser</strong></p>
<table>
<thead>
<tr>
<th>Bouton</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28362%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></td>
<td>permet de bloquer l'accès API temporairement, sans le supprimer</td>
</tr>
<tr>
<td><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28365%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></td>
<td>permet de débloquer l’accès API. Le statut devient Inactif. <br> <em><strong>Il sera nécessaire de l’activer au niveau du portail API</strong></em></td>
</tr>
</tbody>
</table>

<br>
<p>L'icone <strong>Dossier Obsolète</strong><br>
Depuis la liste des dossiers de paie affectés à la configuration API, l’icône <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28372%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> propose par un double clic de supprimer le dossier obsolète de la liste<br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28373%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"></p>
<h4>A partir du menu Actions (menu de droite)</h4>
<table>
<thead>
<tr>
<th>Action</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Actualiser</td>
<td>Elle permet d’actualiser la liste des configurations API</td>
</tr>
<tr>
<td>Sauvegarder</td>
<td>Elle permet d’enregistrer la configuration API en cours de création ou de modification</td>
</tr>
<tr>
<td>Annuler</td>
<td>Elle permet d’annuler l'opération en cours</td>
</tr>
<tr>
<td>Supprimer la configuration</td>
<td>Elle permet de supprimer la configuration d'accès API sélectionnée</td>
</tr>
<tr>
<td>Légende</td>
<td>Elle permet d’obtenir une note explicative sur les différentes fonctions et options</td>
</tr>
<tr>
<td>Créer une configuration</td>
<td>Elle permet de définir une nouvelle configuration API</td>
</tr>
<tr>
<td>Ouvrir dans un tableur</td>
<td>elle permet d'exporter et d'ouvrir dans un tableur la liste des configurations d'accès API en fonction du ou des filtres appliqués</td>
</tr>
<tr>
<td>Exporter toutes les configurations API</td>
<td>Elle permet d'exporter la liste des dossiers par Id unique de configuration au statut <em><strong>Activé</strong></em> et un <em><strong>Accès à un ou plusieurs dossiers du domaine</strong></em></td>
</tr>
<tr>
<td>Importer des configurations API</td>
<td>Elle permet d'importer des configurations d'accès API depuis un fichier au format Excel ou CSV<br> <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28374%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> <br> <u>Niveau accès</u> : <br>- 1 : Accès à un ou plusieurs dossiers <br>- 2 : Accès à tous les dossiers du domaine</td>
</tr>
<tr>
<td>Importer les dossiers de configurations API</td>
<td>Elle permet d'importer et ajouter des dossiers de paie à une ou plusieurs configurations d'accès API<br> <img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28375%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A18Z&se=2026-11-13T20%3A14%3A18Z&sr=c&sp=r&sig=U%2FOQJ5RnCdlhDqGPcsxzWrY7WY3zP7kiViEUvD8lswU%3D" alt="image.png"> <br><em>Une configuration API qui possède déjà des dossiers associés, ces derniers sont conservés et les nouveaux dossiers présents dans le fichier d'import viendront s'ajouter.</em></td>
</tr>
</tbody>
</table>

</font>
