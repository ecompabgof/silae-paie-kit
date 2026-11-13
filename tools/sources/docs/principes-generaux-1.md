---
title: "Principes généraux"
slug: "principes-generaux-1"
updated: 2026-10-05T07:26:02Z
published: 2026-10-05T07:26:02Z
canonical: "silae-api.document360.io/principes-generaux-1"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Principes généraux

<font face="Nirmala UI">
L'utilisation des API REST mySilae Paie repose sur quelques principes généraux. Cette fiche décrit ces principes.
<br>
<h3>Glossaire</h3>
<p>Cette documentation qui permet d'exploiter les API REST mySilae Paie, contient un certain nombre de termes spécifiques employés régulièrement. Pour faciliter la compréhension et éviter les confusions, chaque terme et sa signification sont décrits dans le <a href="https://silae-api.document360.io/api-rest/docs/glossaire" rel="noopener">glossaire</a>.</p>
<h3>Principes de connexion</h3>
<p>Pour pouvoir utiliser les API REST mySilae Paie, il est nécessaire d'avoir :</p>
<ul>
<li>Un compte API</li>
<li>Un accès API aux dossiers Silae sur lesquels on veut travailler (ou <a href="https://silae-api.document360.io/api-rest/docs/configuration-dacces-api" rel="noopener">Configuration d'accès API</a>)</li>
</ul>
<p><strong>Le compte API servira à s'authentifier auprès du service d'authentification Silae afin de pouvoir utiliser les APIs REST.</strong></p>
<section class="infoBox"><div class="title">Compte API</div>
<div class="content">
<p>L'utilisation du compte API pour l'authentification est décrite dans la fiche <a href="https://silae-api.document360.io/api-rest/docs/authentification" rel="noopener">Authentification</a>.</p>
<p>Les informations pour obtenir un compte API sont décrites dans la fiche <a href="https://silae-api.document360.io/api-rest/docs/contractualisation-et-facturation" rel="noopener">Contractualisation et facturation</a>.</p>
<p><strong>Important : Le compte API d'un partenaire Silae (Expert comptable, revendeur, ...) est rattaché au Domaine de ce même partenaire (Un seul compte API par domaine).</strong></p>
</div>
</section>
<p><strong>L'accès API à un dossier permettra de valider les autorisations d'accéder aux données du dossier.</strong></p>
<section class="infoBox"><div class="title">Accès API</div>
<div class="content">
<p>Les accès API sont configurés par le partenaire Silae (Gestionnaire de paie dans le cabinet d'expert comptable par exemple) directement depuis l'application Silae, comme indiqué dans la fiche <a href="https://silae-api.document360.io/api-rest/docs/configuration-dacces-api" rel="noopener">Configuration d'accès API</a>.<br>
L'utilisation des informations de l'accès API est décrite dans la fiche <a href="https://silae-api.document360.io/api-rest/docs/authentification" rel="noopener">Authentification</a>.</p>
</div>
</section>
<h3>URL utiles à noter</h3>
<ul>
<li>URL d'authentification : https://payroll-api-auth.silae.fr/oauth2/v2.0/token</li>
<li>URL cible pour les appels API : https://payroll-api.silae.fr/payroll (Cette url sera la cible de tous les appels aux endpoints API REST)</li>
<li>URL de connexion au portail API : <a href="https://api-portal.silae.fr" rel="noopener">https://api-portal.silae.fr</a></li>
</ul>
<h3>Dates et périodes</h3>
<p>Les paramètres dates ou périodes sont de manière générale au format AAAA-MM-JJT00:00:00.00Z avec :<br>
- AAAA = Année<br>
- MM = Mois<br>
- JJ = Jour</p>
<p>Lorsqu'une fonction API propose comme paramètre <em><strong>PeriodeDebut</strong></em> et <em><strong>PeriodeFin</strong></em>, elles correspondent à la période de paie demandée.<br>
Important : seul le mois (MM) et l'année (AAAA) sont pris en compte pour la recherche</p>
<p>Lorsque une fonction API présente comme paramètre <em><strong>DateDebut</strong></em> et <em><strong>DateFin</strong></em>, elles correspondent aux dates au sens le plus stricte. Tous les éléments des dates sont pris en compte.</p>
<h3>Caractères autorisés</h3>
<p>Les valeurs doivent contenir des caractères qui respectent le jeu de caractères ANSI (Windows1252)</p>
<h3>Mise à jour conditionnelle</h3>
<p>Dans de nombreuses fonctions, les champs sont "doublés" d'un booléen permettant d'indiquer si la valeur du champ correspondant doit être prise en compte (<strong>true</strong>) ou non (<strong>false</strong>). Ces booléens ont le même nom que le champ auquel ils font référence, précédé d'un 'b'. Par exemple : "bPrenom" fait référence au champ "Prenom".</p>
<h3>Fonctionnement des emplois et utilisation des identifiants</h3>
<p>Dans Silae, chaque modification de la fiche salarié qui a un impact sur la paie génère un nouvel "emploi" (ou "emploi actif" ou "emploi en cours") avec un nouvel "identifiant emploi". L'emploi précédent devient alors un "emploi archivé".<br>
Ces différents emplois au sens Silae ne reflètent pas forcément de vrais changements d'emplois.<br>
Par exemple, un changement de salaire va générer dans Silae un nouvel emploi alors qu'il n'y a pas eu de changement de contrat pour le salarié.<br>
Pour qu'au niveau des API il soit possible de faire la différence entre les changements d'emplois au sens Silae et les vrais changements d'emploi (type sortie/entrée du salarié), il existe la notion d'identifiant emploi externe. Dans l'utilisation des APIs c'est toujours cet "identifiant emploi externe" qui est présent.<br>
Ainsi, pour un salarié qui garde le même emploi avec divers changements (comme des augmentations par exemple), l'identifiant emploi externe sera toujours le même, alors même qu'il y aura eu plusieurs emplois archivés dans Silae.</p>
<h3>Les fonctions API en mode asynchrone</h3>
<p>Le principe du mode asynchrone consiste à enregistrer la demande émise par la fonction API sans attendre immédiatement le résultat.<br>
Ce mode de fonctionnement est très approprié lorsque la requête doit traiter un volume de données assez conséquent. Il permet ainsi d'éviter un échec lié à l'expiration de la requête réseau entre le client et le serveur.</p>
<p>Cette méthode asynchrone garantit donc la bonne exécution et réception du résultat.</p>
<p>Parmi toutes les fonctions API, certaines d’entre elles ont été sélectionnées pour être également proposées en mode asynchrone. Quelques exemples :</p>
<table>
<thead>
<tr>
<th>API asynchrone</th>
<th>API asynchrone Statut</th>
</tr>
</thead>
<tbody>
<tr>
<td>AnalyseProductionPaieAsynchrone</td>
<td>StatutAnalyseProductionPaieAsynchrone</td>
</tr>
<tr>
<td>CreationSalarieEmploisAsynchrone</td>
<td>StatutCreationSalarieEmploisAsynchrone</td>
</tr>
<tr>
<td>EditionHistoriqueAsynchrone</td>
<td>StatutEditionHistoriqueAsynchrone</td>
</tr>
<tr>
<td>SalariesBulletinsAsynchrone</td>
<td>StatutSalariesBulletinsAsynchrone</td>
</tr>
<tr>
<td>SoldeReposAsynchrone</td>
<td>StatutSoldeReposAsynchrone</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>
<p>Chaque fonction API en mode asynchrone est accompagnée d’une seconde requête qui permet de vérifier le statut de la demande à intervalle régulier. L'état peut indiquer que le traitement est toujours en cours ou alors contenir tout simplement le résultat attendu (mode pull).</p>
<p>En résumé, il est indispensable d'exploiter le <strong>couple de fonctions API</strong> pour obtenir une réponse. Elles doivent être exécutées dans un ordre précis :</p>
<ol>
<li>
<p>Lancer la fonction Asynchrone pour déclencher la demande et obtenir l'<strong>identifiant de la tâche</strong> (ex: SalariesBulletinsAsynchrone),</p>
</li>
<li>
<p>Exécuter la fonction de Statut correspondante avec en paramètre ce même <strong>identifiant de tâche</strong> pour obtenir le résultat (StatutSalariesBulletinsAsynchrone).</p>
</li>
</ol>

</font>
