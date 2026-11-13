---
title: "FAQ - Générale"
slug: "faq-1"
updated: 2026-10-05T08:17:48Z
published: 2026-10-05T08:17:48Z
canonical: "silae-api.document360.io/faq-1"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# FAQ - Générale

## Les éditeurs partenaires API mySilae Paie

### Quels sont les éditeurs qui sont partenaires API mySilae Paie ?

- CEGID
- INQOM
- PENNYLANE
- TEOGEST
- TIIME

*- Liste au 11/09/2026 -*

Il est à préciser que les éditeurs listés, qui bénéficient bien d’un accord contractuel avec Silae relatif à l’API REST mySilae Paie, sont seuls responsables du développement et du bon fonctionnement dudit connecteur API avec les offres de Silae. Silae décline ainsi toute responsabilité relative au développement et au bon fonctionnement du connecteur API avec les offres de Silae.

### Comment donner les accès API à un éditeur partenaire API mySilae Paie ?

Il suffit de définir une configuration API depuis mySilae Paie et de prévenir votre client concerné.

Les opérations à réaliser dans mySilae Paie sont :

1. Accéder à la fonction **Paramétrage Paie > Options > Configuration API**
2. Créer une configuration API
3. Sélectionner dans la liste, le compte API de l'éditeur concerné  

![Image](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image(430).png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)
4. Affecter l'utilisateur mySilae Paie  

L’utilisateur Silae désigné doit pouvoir accéder au(x) dossier(s) de paie concerné(s) et posséder les droits sur les fonctionnalités Silae paie pour l'usage des fonctions API correspondantes (exemple : fiche contact avec droit d'accès à la fonctionnalité écritures comptables pour une connexion avec un éditeur de comptabilité partenaire API Silae).

Base de connaissance mySilae Paie : [Créer et gérer un collaborateur](https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T), [Droits d'accès clients](https://support.silae.fr/hc/fr/sections/16163549508370-Droits-d-acc%C3%A8s-clients), [Définir les droits d'accès du contact client](https://support.silae.fr/hc/fr/articles/16541448182930-D%C3%A9finir-les-droits-d-acc%C3%A8s-du-contact-client) 5. Cliquer sur le bouton **[Configuration de la liste des dossiers]** pour faire apparaître tous les dossiers de paie

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28259%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

- Le bouton **Filtrer** permet de filtrer la liste des dossiers selon les colonnes proposées.
- La sélection peut s'effectuer de manière globale par ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28131%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D) ou individuel par ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28133%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

**La colonne *Dossier obsolète*** Elle permet d'indiquer si le dossier a été déclaré inactif en production (fiche Société) ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28226%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

Remarque : Cette même colonne peut être utilisée comme filtre pour exclure les dossiers inactifs de la liste depuis le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28228%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

<font color="FF0000"> Un dossier de paie actif dans une configuration d'accès API qui a été déclaré obsolète par la suite (inactif en production depuis la fiche Société), est automatiquement exclu de la liste des dossiers au niveau du portail API.</font>

**La colonne *Statut*** Les actions située dans le menu de droite permettent d'**Activer le(s) dossiers(s) à la sélection** ou **Désactiver le(s) dossiers(s) à la sélection** :

- Un dossier qui possède le statut **Actif** est un dossier qui est pris en compte dans la configuration d'accès API
- Un dossier qui possède le statut **Inactif** est un dossier qui n'est pas pris en compte dans la configuration d'accès API

1. Activer la sélection et Sauvegarder la sélection
2. Enregistrer la configuration d'accès API par l'action Sauver  

La sauvegarde de la configuration API  fait apparaitre le message suivant :  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28322%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

<font color="#C00000">Il est important de bien sélectionner l'accès sur les dossiers de paie concernés pour ne pas générer des frais de facturation.</font> 7. Id unique de configuration Enfin pour finaliser la connexion, il suffit de communiquer à votre client, l'**Id unique de configuration** correspondant pour que son éditeur partenaire APi Silae puisse activer et générer la clé depuis son portail API et mettre en route la connexion.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28389%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

Pour copier l'Id unique de configuration, utiliser le bouton ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28390%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

## Démarrage

### Que se passe-t-il une fois que j'ai fait ma demande de compte API ?

Une fois la partie contractuelle réglée et votre demande de compte API faite, Silae va créer pour vous :

- Un environnement de test mySilae Paie. Tous les détails dans [cet article](https://silae-api.document360.io/docs/lenvionnement-de-test).
- Un compte pour accéder à cet environnement de test (informations adresser par mail pour vous y connecter).
- Un compte utilisateur pour accéder au portail API (mail d'invitation pour y accéder)
- Un compte API de Test visible depuis le [portail API](https://silae-api.document360.io/docs/gestion-des-comptes-api)
- Un compte API de Production depuis le [portail API](https://silae-api.document360.io/docs/gestion-des-comptes-api)

### Je n'ai pas reçu tous les éléments mentionnés ci-dessus, est-ce normal ?

Il est possible que tous les éléments ne soient pas créés au même moment car gérés par des équipes différentes. Le délai de mise à disposition de l'ensemble des éléments est de 2 à 3 semaines minimum.

### Je ne vois pas mes comptes API dans l'écran de la fonction Configuration API de My Silae Paie, que dois-je faire ?

Une fois les comptes API créés, vous êtes totalement autonome pour les exploiter.

#### Vous êtes Partenaire Silae

Afin que votre **compte API de test** apparaisse depuis la fonction Configuration API de votre environnement de test My Silae Paie, .il doit être activé depuis votre portail API. Afin que votre ou vos **comptes API de production** apparaisse depuis la fonction Configuration API de votre environnement de production My Silae Paie, il doit être activé depuis votre portail API.

#### Vous etes éditeur partenaire API mySilae Paie

Afin que votre **compte API de test** apparaisse depuis la fonction Configuration API de votre environnement de test My Silae Paie, .il doit être activé depuis votre portail API. Afin que votre ou votre **compte API de production** apparaisse depuis la fonction Configuration API dans tous les dmaines My Silae Paie, .il doit être activé depuis votre portail API.

Actions à réaliser depuis votre portail API : ![FAQ_CompteAPI](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/FAQ_CompteAPI1.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D) ![FAQ_CompteAPI](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/FAQ_CompteAPI.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

### Je suis utilisateur du portail API avec le droit de gestion et des comptes apparaissent en grisé avec aucun accès, pourquoi ?

Lorsque vous êtes connecté en tant qu’utilisateur Portail API avec le droit de gestion (accès à la fiche Société), des comptes API apparaissent en grisé et ne peuvent être cochés.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28248%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

Cela signifie que vous ne possédez pas les accès et que ces comptes sont la propriété d’un autre utilisateur portail API.

Avec le droit de gestion, vous pouvez connaître le ou les utilisateurs portail API qui possèdent les accès.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28249%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

Si vous souhaitez posséder les accès, il est nécessaire que l’un des utilisateurs portail API, propriétaire des comptes API concernés, vous affecte à nouveau ces mêmes comptes API.

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28250%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

L’opération effectuée par l'un des utilisateurs portail API qui possède les accès, lorsque vous vous reconnectez, les comptes API concernés sont de nouveau accessibles :

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28251%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

## Gestion des accès API

### Comment se fait-il que je ne vois pas l'écran de configuration API ?

Cette écran n'est accessible que pour les utilisateurs qui possèdent le droit correspondant. L'accès peut être configuré depuis l'interface d'administration des collaborateurs. Base de connaissance My Silae Paie : [Créer et gérer un collaborateur](https://support.silae.fr/hc/fr/articles/16539987651474-Cr%C3%A9er-et-g%C3%A9rer-un-collaborateur#h_01HMY3W12V0RQRGVTV903Y652T)

### J'ai configuré un accès API pour un éditeur partenaire API mySilae Paie sur un de mes dossiers, est-ce que je dois lui fournir les informations de connexion du compte Silae défini dans la configuration d'accès API ?

Il n'est plus nécessaire de communiquer les informations de connexion du compte Silae. Il suffit de prévenir votre client que les accès sont autorisés et qu'il en informe son éditeur partenaire API Silae. La configuration API ainsi paramétrée depuis My Silae Paie apparaitra automatiquement dans le portail API de l'éditeur concerné.

### Les modifications faites par l'éditeur impactent mon dossier de paie, comment puis-je suspendre l'accès sans le supprimer complètement ?

L'accès API de l'éditeur peut être bloqué à partir de la fonction configuration API depuis votre mySilae Paie. Il vous suffit de sélectionner la configuration d'accès API à bloquer et de cliquer sur le bouton "Bloquer l'accès API". Dès lors, l'accès API est bloqué et désactivé. Ce qui signifie que l'éditeur ne pourra plus effectuer aucun traitement API. Pour débloquer l'accès API, il vous suffit de sélectionner la configuration d'accès API bloquée et de cliquer sur "Autoriser l'accès API". L'accès sera débloqué mais restera désactivé. L'éditeur aura alors alors la possibilité d'activer à nouveau l'accès API depuis son Portail API pour pouvoir de nouveau interagir avec le(s) dossier(s) concerné(s).

### Où puis-je avoir une vision globale des accès API ouverts sur mes dossiers ?

Depuis mySilae Paie, si votre compte utilisateur possède les droits nécessaires, la fonction **Configuration API** vous permet de visualiser l'ensemble des configurations d'accès API avec notamment leur statut respectif.

### Où puis-je avoir une vision globale des accès API qui ont été ouverts pour mon propre compte API ?

Depuis le Portail API, il suffit de sélectionner le compte API concerné et l'onglet Configuration d'accès API vous permet de visualiser l'ensemble des configuration API définis sur ce même compte.

### Mon Client Secret expire dans quelques jours, que dois-je faire ?

À l'approche de la date d’expiration, des messages d'avertissement sont générés à différents niveaux : lors des appels API, par mails et sur le portail API : [Gestion des ClientSecret et clés de configuration d'accès](https://silae-api.document360.io/docs/gestion-des-clientsecret-et-cles-de-configuration-dacces)

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28345%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

*N. B. : Un lien vers cet article est proposé sur le message d'avertissement*

**Le Client Secret a une durée de validité d'1 an à compter de la génération.**

L'expiration est une garantie de sécurité pour palier une éventuelle compromission du Client Secret du côté de l'application de l'éditeur. La date d'expiration permet de s'assurer que l'accès retrouve régulièrement un niveau de sécurité optimal.

<font color="FF0000">Lorsqu'un Client Secret arrive à expiration, l'application ne peut plus se connecter.</font>

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28336%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

2 Client Secrets, un principal et un secondaire qui possèdent chacun une date d’expiration. Les 2 ont la même fonction et s'utilisent exactement de la même manière.

Pourquoi 2 clients Secrets ? C'est pour permettre la transition au niveau de votre application. <font color="FF0000">Il est donc nécessaire de générer le prochain Client Secret avant que le précédent n'expire pour assurer la continuité.</font>

Pour cela il suffit de :

1. Accéder au portail API
2. Sélectionner le compte API concerné d'après la notification reçue
3. Choisir l’onglet ***Gestion des ClientSecrets***
4. Cliquer sur le bouton correspondant au Client Secret à générer  

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28337%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

***Choisir de regénérer le client Secret dont la date d'expiration n'est pas encore définie ou possède la date d'expiration la plus ancienne***

Exemple 1 : Date d'expiration du ClientSecret Principal = 02/05/2025 Date d'expiration du ClientSecret Secondaire = Non définie Regénérer le ClientSecret Secondaires

Exemple 2 : Date d'expiration du ClientSecret Principal = 02/05/2024 Date d'expiration du ClientSecret Secondaire = 01/05/2025 Regénérer le ClientSecret Principal 5. Copier le Client Secret généré (temporairement dans un bloc note par exemple) ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28338%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

6. Mettre en place le nouveau ClientSecret dans la solution interconnecté à My Silae Pour prendre en compte ce nouveau Client Secret qui permet de poursuivre la connexion API, il est nécessaire de modifier le paramétrage de votre ou vos outils métiers interconnectés à My Silae.

Dans le cas où le renouellement d'un ClientSecret concerne un de vos clients (Compte API modèle 2), il suffit de lui communiquer la nouvelle valeur générée afin qu'il puisse mettre à jour sa ou ses solutions métiers interconnectées à My Silae. Pour assurer une totale confidentialité (Client Secret équivalent à un mot de passe), il est vivement conseillé de transmettre cette donnée de manière cryptée avec notamment des outils en accès libre comme [privenote](https://privnote.com/).

De manière générale, un écran de paramétrage dans le logiciel interconnecté à My Silae est proposé et permet de mettre à jour le ClientSecret (copier/coller depuis le bloc note par exemple).

Exemple d'écran de paramétrage : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28401%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A15Z&se=2026-11-13T20%3A15%3A15Z&sr=c&sp=r&sig=tSORBgsnHPindCpmeuIFbhrJzdhF4WlzsZ3cntpwzlc%3D)

***NB : Si besoin, solliciter l'éditeur/l'intégrateur pour connaître la fonction de paramétrage correspondante.***

## Gestion des certificats

### Pourquoi Silae utilise un certificat DigiCert avec le certificat racine DigiCert Global Root G2 ? Est-ce que cela peut poser problème ?

Silae utilise un certificat SSL/TLS délivré par **DigiCert**, l’un des leaders mondiaux en matière de sécurité numérique. DigiCert est reconnu pour sa fiabilité par les grandes entreprises, les gouvernements et les services critiques à travers le monde. Le certificat utilisé repose sur la chaîne de certification **DigiCert Global Root G2**, largement distribuée et **préinstallée dans les systèmes de confiance** des navigateurs, systèmes d’exploitation et appareils récents.

### En quoi est-ce fiable ?

- **DigiCert est une autorité de certification (CA) reconnue mondialement**, membre de l’organisme de standardisation **CA/Browser Forum**, garantissant les meilleures pratiques de sécurité.
- Vous pouvez vérifier à tout moment la validité du certificat utilisé par Silae via des outils de confiance indépendants, comme :
  - [SSL Labs - SSL Test (Qualys)](https://www.ssllabs.com/ssltest/)
  - [SSL Checker - SSLShopper](https://www.sslshopper.com/ssl-checker.html)
  - [DigiCert CertCentral Checker](https://www.digicert.com/help/)
- Ces outils confirment que le certificat est valide, correctement configuré, et émis par une autorité reconnue.

### Est-ce que cela peut poser problème pour les utilisateurs ?

**Dans la très grande majorité des cas : non.**

Le certificat racine DigiCert Global Root G2 est intégré par défaut dans :

- Windows, macOS, Linux (principales distributions),
- Navigateurs Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.,
- Ainsi que de nombreuses applications professionnelles.

Les connexions aux services de Silae sont donc **automatiquement reconnues comme sécurisées**, sans aucune intervention de votre part.

### Que faire si une alerte de sécurité ou un message d’erreur apparaît ?

Dans de rares cas (machines anciennes, non mises à jour, environnements verrouillés), le certificat racine peut ne pas être reconnu. Voici les étapes à suivre :

1. **Mettez à jour votre système d’exploitation et votre navigateur** pour intégrer les derniers certificats racines.
2. **Téléchargez manuellement le certificat racine DigiCert Global Root G2** depuis le . site officiel : [Télécharger sur DigiCert](https://www.digicert.com/kb/digicert-root-certificates.htm)
3. **Ajoutez-le manuellement au magasin de certificats de votre système** :

- **Windows** : clic droit sur le fichier .crt, "Installer le certificat", puis sélectionnez "Magasin de certificats racines de confiance".
- **macOS** : ouvrez le **Trousseau d’accès**, importez le certificat dans la section **Système**, et définissez-le comme toujours approuvé.
