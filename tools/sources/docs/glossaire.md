---
title: "Glossaire"
slug: "glossaire"
updated: 2026-04-08T09:56:05Z
published: 2026-04-08T09:56:05Z
canonical: "silae-api.document360.io/glossaire"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Glossaire

<font face="Nirmala UI">
<p>Dans la documentation permettant d'exploiter les API REST Silae Paie, un certain nombre de termes spécifiques sont employés régulièrement. Pour faciliter la compréhension de ces termes et éviter les confusions, ce glossaire décrit chaque terme et sa signification. <br></p>
<h2>Sommaire</h2>

<a href="/docs/glossaire#compte_portail" rel="noopener">Compte Portail API</a> <br>
<a href="/docs/glossaire#portail_api" rel="noopener">Portail API</a> <br>
<a href="/docs/glossaire#societe" rel="noopener">Société</a> <br>
<a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a> <br>
<a href="/docs/glossaire#client_id" rel="noopener">ClientID</a> <br>
<a href="/docs/glossaire#client_secret" rel="noopener">ClientSecret</a> <br>
<a href="/docs/glossaire#cle_acces" rel="noopener">Clé de configuration d'accès API</a> <br>
<a href="/docs/glossaire#configuration_acces" rel="noopener">Configuration d'accès API</a> <br>
<a href="/docs/glossaire#domaine" rel="noopener">Domaine</a>
<h2>Définitions</h2>
<h4><div id="compte_portail">Compte Portail API</div></h4>
<p>C'est le compte qui permet de se connecter au <a href="/docs/glossaire#portail_api" rel="noopener">Portail API</a>. L'authentification se fait à partir de l'adresse mail donnée à Silae au moment de la contractualisation (login) et le mot de passe renseigné à la création du compte (suite à la réception du mail d'invitation). Ce compte est rattaché à un <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a>, mais il ne permet pas de se connecter aux API.</p>
<h4><div id="portail_api">Portail API</div></h4>
<p>Portail Web qui permet, pour les partenaires ou éditeurs qui possède un <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a>, de le gérer.<br>
Il permet de :</p>
<ul>
<li>Visualiser les informations générales du compte et d'en modifier certaines</li>
<li>Visualiser les <a href="/docs/glossaire#configuration_accès" rel="noopener">Configurations d'accès API</a> octroyées à ce compte API et de les activer/désactiver</li>
<li>Gérer les secrets du <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a> et les <a href="/docs/glossaire#clé_accès" rel="noopener">clés des configurations d'accès API</a>.</li>
</ul>
<h4><div id="societe">Société</div></h4>
<p>Concept qui permet de faire le lien entre plusieurs comptes utilisateurs et plusieurs comptes API. Les comptes utilisateurs et les comptes API sont rattachés à des Sociétés. Dans la gestion de la société il est possible de configurer quels utilisateurs ont accès à quels comptes API.</p>
<h4><div id="compte_api">Compte API</div></h4>
<p>C'est le compte qui permet à votre logiciel de s'authentifier pour pouvoir utiliser les API REST Silae Paie. Ce compte possède notamment un couple <a href="/docs/glossaire#client_id" rel="noopener">ClientID</a>/<a href="/docs/glossaire#client_secret" rel="noopener">ClientSecret</a> qui sont nécessaires à l'authentification.</p>
<h4><div id="client_id">ClientID</div></h4>
<p>Identifiant du <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a>. Nécessaire pour exploiter les API, lors de l'authentification du <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a>.</p>
<h4><div id="client_secret">ClientSecret (principal et secondaire)</div></h4>
<p>Couplé au <a href="/docs/glossaire#client_id" rel="noopener">ClientID</a>, le ClientSecret (équivalent à un mot de passe du <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a>) permet de s'authentifier auprès du serveur d'authentification Silae.<br>
Le compte API possède 2 ClientSecrets, un principal et un secondaire. Les 2 ont la même fonction et s'utilisent exactement de la même manière. Chaque ClientSecret a une date d'expiration, et c'est pour permettre la transition au niveau de votre application qu'il existe un ClientSecret principal et un secondaire.</p>
<section class="infoBox"><div class="title">Exemple d'utilisation</div>
<div class="content">
<ul>
<li>Le ClientSecret principal, utilisé dans mon logiciel SuperCompta arrive à expiration le 30/09/2022. Nous sommes le 20/09/2022.</li>
<li>Je regénère mon ClientSecretSecondaire qui a désormais une date d'expiration au 20/09/2023.</li>
<li>Dans mon application je remplace le ClientSecret principal par le ClientSecret secondaire avant le 30/09/2022, le tout sans avoir d'interruption de service.</li>
<li>Libre à moi ensuite de rester avec le ClientSecret secondaire jusqu'à sa date d'expiration ou de rebasculer sur le ClientSecret principal après l'avoir regénéré.</li>
</ul>
</div>
</section>
<h4><div id="cle_acces">Clé de configuration d'accès API (Principale et secondaire)</div></h4>
<p>Elle permet d'identifier via quelle <a href="/docs/glossaire#configuration_accès" rel="noopener"> Configuration d'accès API</a>, le <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a> souhaite interagir avec les dossiers.<br>
La configuration d'accès API possède 2 clés, une principale et une secondaire. Les 2 ont la même fonction et s'utilisent exactement de la même manière. Il n'y a pas de date d'expiration pour ces clés, et c'est pour permettre la transition au niveau de votre application qu'il existe une clé principale et une secondaire.<br>
Cette clé dont son nom technique est <strong>subscription-key</strong>, doit être utilisée lors des appels aux endpoints via le header <strong>Ocp-Apim-Subscription-Key</strong>.</p>
<h4><div id="configuration_acces">Configuration d'accès API</div></h4>
<p>Une configuration d'accès API correspond à un accès octroyé par un partenaire sur ou plusieurs de ses dossiers.<br>
Cette configuration d'accès possède plusieurs caractéristiques importantes :</p>
<ul>
<li><strong>Compte API</strong> : Le compte API à qui est rattachée la configuration d'accès</li>
<li><strong>Domaine</strong> : Le domaine auquel est rattachée la configuration d'accès</li>
<li><strong>Liste de dossiers</strong> : Liste des dossiers auxquels aura accès le compte API auquel est rattachée le configuration d'accès. Ça peut être 1 dossier, plusieurs dossiers ou tous les dossiers du domaine</li>
<li><strong>Utilisateur Silae</strong> : Compte utilisateur Silae utilisé pour déterminer les droits d'accès aux données des dossiers. Le compte API ne pourra pas faire plus par API que ce que peux faire le compte utilisateur Silae.</li>
<li><strong>Identifiant unique</strong> : Identifiant unique de la configuration d'accès API</li>
</ul>
<p>La mise en place d'un configuration d'accès s'effectue directement depuis Silae.<br>
Une configuration d'accès peut être déclarée active ou inactive depuis le <a href="/docs/glossaire#portail_api" rel="noopener">Portail API</a>.</p>
<h4><div id="domaine">Domaine</div></h4>
<p>Il représente un espace de travail contenant ses Dossiers (dossier de paie d'une entreprise). Chaque partenaire Silae détient un Domaine auquel est rattaché son <a href="/docs/glossaire#compte_api" rel="noopener">Compte API</a> s'il en a un. En revanche les comptes API des éditeurs ne sont pas rattachés à un domaine.</p>

</font>
