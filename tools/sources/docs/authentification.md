---
title: "Authentification et appel endpoint"
slug: "authentification"
updated: 2026-10-05T07:53:04Z
published: 2026-10-05T07:53:04Z
canonical: "silae-api.document360.io/authentification"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Authentification et appel endpoint

<font face="Nirmala UI">
<br>
<p>Le système d'authentification des API REST mySilae Paie se base sur le standard OAuth2 (client-credential).<br>
La séquence de connexion se déroule de cette manière :<br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Authentification%20Prod.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A23Z&se=2026-11-13T20%3A14%3A23Z&sr=c&sp=r&sig=4n0w32RpWC6Mtx9oFezm1MwbPqrWzMXCKovLMbmuB4E%3D" alt="Authentification Prod"></p>
<h3>1. Requête d'authentification</h3>
<p>Envoi de la requête d'authentification via l'url <strong>https://payroll-api-auth.silae.fr/oauth2/v2.0/token</strong>.<br>
Les paramètres suivants doivents être passés dans une requête de type POST au format "url encoded" (Content-Type : "application/x-www-form-urlencoded" dans les headers de la requête) :</p>
<table>
<thead>
<tr>
<th>Clé</th>
<th>Valeur</th>
</tr>
</thead>
<tbody>
<tr>
<td>grant_type</td>
<td><strong>client_credentials</strong></td>
</tr>
<tr>
<td>client_id</td>
<td>ClientID de votre compte API. Cette information est disponible dans l'écran d'informations générales du <a href="https://silae-api.document360.io/api-rest/docs/presentation-du-portail-api#info_generales" rel="noopener">Portail API</a></td>
</tr>
<tr>
<td>client_secret</td>
<td>ClientSecret correspondant au ClientID. Cette information peut être récupérée lors de la génération du ClientSecret via le <a href="https://silae-api.document360.io/api-rest/docs/presentation-du-portail-api#client_secret" rel="noopener">Portail API</a></td>
</tr>
<tr>
<td>scope</td>
<td><strong>https://silaecloudb2c.onmicrosoft.com/36658aca-9556-41b7-9e48-77e90b006f34/.default</strong></td>
</tr>
</tbody>
</table>
<p>Le corps du message HTTP envoyé est une "query string". Les paires nom/valeur sont séparées par l'esperluette (&amp;) et les noms sont séparés des valeurs par le symbole égal (=). Exemple :</p>
<pre><code>grant_type=client_credentials&amp;client_id=votre-client-id&amp;client_secret=votre-client-secret&amp;scope=le-scope-de-l-authentification
</code></pre>
<p>Les caractères non alphanumériques contenus dans les valeurs doivent être remplacés par "%HH", un pourcentage et deux chiffres hexadécimaux représentant le code ASCII du caractère. Vous pouvez vous référer à la recommandation du <a href="https://www.w3.org/TR/html401/interact/forms.html#didx-applicationx-www-form-urlencoded" target="_blank" rel="noopener">w3c</a> pour plus de précisions.</p>
<h3>2. Réponse - Authentification</h3>
<p>Si l'authentification est réussie, la réponse contiendra un <strong>access_token</strong> qui sera indispensable pour utiliser les APIs.</p>
<p>Lors de la création de l'access token, la réponse renvoyée contient les éléments suivants :</p>
<p><img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Reponse-creation-token.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A23Z&se=2026-11-13T20%3A14%3A23Z&sr=c&sp=r&sig=4n0w32RpWC6Mtx9oFezm1MwbPqrWzMXCKovLMbmuB4E%3D" alt="Réponse lors de la création d'un token"></p>
<ul>
<li>not_before : la date de début de validité exprimée en <a href="https://en.wikipedia.org/wiki/Unix_time" rel="noopener">Unix time</a></li>
<li>expires_in : la durée de vie exprimée en seconde</li>
<li>expires_on : la date d'expiration exprimée en <a href="https://en.wikipedia.org/wiki/Unix_time" rel="noopener">Unix time</a></li>
</ul>
<p>Ce token est d'une <strong>validité de 60 minutes</strong> et peut être utilisé et réutilisé pour tous les appels réalisés durant cette période. Pour des raisons de performance, <strong>il convient de rationaliser au maximum vos demandes de jeton</strong>, l'idéal étant d'attendre que votre token expire (ou soit sur le point d'expirer) pour en demander un nouveau.</p>
<section class="warningBox"><div class="title">Rate limiting sur l'authentification</div>
<div class="content">
<p>Les demandes intempestives de token (ex : une demande de jeton par appel API) peuvent avoir des conséquences sur les performances des API, voire de l'application My Silae dans son ensemble.</p>
<p>Pour prévenir les mauvaises pratiques et garantir un service optimal pour tous, une limite d’authentification à <strong>60 tokens / minute</strong> a été mise en place à partir du mardi 10/12/2024 (le 05/11/2024 sur les environnements de test).</p>
</div>
</section>
<p>Si l'authentification échoue, un message d'erreur est renvoyé avec 2 paramètres (<strong>error</strong> et <strong>error_description</strong>) détaillant l'erreur rencontrée.<br>
Exemples d'erreurs :</p>
<table>
<thead>
<tr>
<th>error</th>
<th>error_description</th>
<th>Source de l'erreur</th>
</tr>
</thead>
<tbody>
<tr>
<td>unsupported_grant_type</td>
<td>...The supplied grant_type [client_credential] is not supported...</td>
<td>le paramètre <strong>grant_type</strong> doit valoir <strong>client_credentials</strong> pour que l'authentification fonctionne</td>
</tr>
<tr>
<td>invalid_client</td>
<td>...The client id 'XXXXXXX' specified in the request is not registered...</td>
<td>Le paramètre <strong>client_id</strong> ne correspond pas à un compte API existant</td>
</tr>
<tr>
<td>invalid_client</td>
<td>...The specified client_secret does not match the expected value for this client....</td>
<td>Le paramètre <strong>client_secret</strong> ne correspond pas au paramètre <strong>client_id</strong> renseigné</td>
</tr>
<tr>
<td>invalid_grant</td>
<td>...The service has encountered an internal error. Please reauthenticate and try again......</td>
<td>Le paramètre <strong>scope</strong> peut être mal renseigné. Assurez-vous de bien saisir la valeur indiquée dans le paragraphe <strong>1. Requête d'authentification</strong>. <br> Ce message peut également correspondre à un Client Secret qui a expirée. Dans ce cas, il est nécessaire de le regénérer (cf. <a href="https://silae-api.document360.io/docs/faq-1#mon-client-secret-expire-dans-quelques-jours-que-doisje-faire" rel="noopener">FAQ - Mon Client Secret expire dans quelques jours, que dois-je faire ?</a></td>
</tr>
</tbody>
</table>
<h3>3. Appel endpoint API REST</h3>
<p>L'utilisation des API REST mySilae Paie se fait ensuite de la même manière pour tous les appels, en appelant l'url <strong>https://payroll-api.silae.fr/payroll</strong> et en passant les headers HTTP suivants :</p>
<table>
<thead>
<tr>
<th>Clé</th>
<th>Valeur</th>
<th>Commentaire</th>
</tr>
</thead>
<tbody>
<tr>
<td>Authorization</td>
<td>Valeur de l'<strong>access_token</strong> reçu en réponse à l'authentification précédée de 'Bearer '</td>
<td>Authorization de type <strong>Bearer</strong>.</td>
</tr>
<tr>
<td>Ocp-Apim-Subscription-Key</td>
<td>Clé de la configuration d'accès API</td>
<td>Cette information peut être récupérée lors de la génération de la clé liée à la configuration d'accès API correspondante via le <a href="https://silae-api.document360.io/api-rest/docs/presentation-du-portail-api#conf_acces" rel="noopener">Portail API</a></td>
</tr>
<tr>
<td>dossiers</td>
<td>Numéro du dossier</td>
<td>Ce header doit contenir obligatoirement la balise <strong>dossiers</strong> (numéro du dossier) concerné par la requête. Elle peut être : <br>- Non renseignée  car la requête ne sollicite pas un numéro de dossier particulier (ex: la fonction API : ListeDossiers) <br>- Renseigné avec le N° de dossier concerné ou par une variable déclarée dans l'environnement qui contiendra le N° de dossier concerné (cf. Collection Postman mis à disposition dans cette documentation)</td>
</tr>
</tbody>
</table>
<section class="errorBox"><div class="title">Note sur la subscription key (clé principale - secondaire)</div>
<div class="content">
<p>C'est à partir de la subscription key que sont gérées les autorisations. Cela signifie que c'est via le paramètre Ocp-Apim-Subscription-Key que l'on indique quelle configuration d'accès API est utilisée, et donc à quel(s) dossier(s) on va pouvoir accéder.</p>
</div>
</section>
<p>Les subscription-key (Ocp-Apim-Subscription-Key) sont générées dans le portail API, à partir du menu d'action à droite de la configuration d'accès API concernée :<br>
<img src="https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%286%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A23Z&se=2026-11-13T20%3A14%3A23Z&sr=c&sp=r&sig=4n0w32RpWC6Mtx9oFezm1MwbPqrWzMXCKovLMbmuB4E%3D" alt="image.png"></p>
<p>Les <a href="https://silae-api.document360.io/docs/configuration-dacces-api" rel="noopener">configurations d'accès API</a> sont créées par le partenaire directement depuis Silae.</p>
<h3>4. Réponse</h3>
<p>Réponse à la requête envoyée, suite au traitement.<br>
Quelque soit la fonction API exploitée, le résultat peut échouer en raison d'un mauvais identifiant :</p>
<table>
<thead>
<tr>
<th>error</th>
<th>error_description</th>
<th>Source de l'erreur</th>
</tr>
</thead>
<tbody>
<tr>
<td>"invalidSubscriptionIdClientIdPair"</td>
<td>"Aucun abonnement n'existe avec l'id fourni xxx5xxx0-xx79-1234-x478-x41x1x629x5x et le clientId contenu dans le token ou l'abonnement n'est pas actif."</td>
<td>La clé de l'Id configuration API renseignée n'est pas correcte ou ne correspond pas au Client Id : vérifier que la clé de configuration API correspond à l'Id de configuration API rattaché au Client Id concerné et relancer l'appel du jeton (token)</td>
</tr>
</tbody>
</table>
<section class="errorBox"><div class="title">Note sur la plage horaire des appels</div>
<div class="content">
<p>Nos plateformes sont actualisées tous les jours entre 1h et 5h. il est vivement conseillé de ne pas générer d'appel sur ce créneau horaire au risque de rencontrer des erreurs.</p>
</div>
</section>

</font>
