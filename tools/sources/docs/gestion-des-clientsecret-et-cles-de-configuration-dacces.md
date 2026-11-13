---
title: "Gestion des ClientSecret et clés de configuration d'accès"
slug: "gestion-des-clientsecret-et-cles-de-configuration-dacces"
updated: 2026-10-05T07:53:38Z
published: 2026-10-05T07:53:38Z
canonical: "silae-api.document360.io/gestion-des-clientsecret-et-cles-de-configuration-dacces"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Gestion des ClientSecret et clés de configuration d'accès

Pour la gestion des authentifications et autorisations, les API mySilae Paie utilisent des ClientSecret, des clés de configuration d'accès API et des access_token. Cette fiche apporte quelques précisions sur ces aspects.

## ClientSecret

Les ClientSecret ont une durée d'expiration d'un an à compter de la génération du ClientSecret.

À l'approche de la date d'expiration, des messages d'avertissement sont générés au niveau des appels API, par envoi de mails et sur le portail API.

### Header supplémentaire sur les appels API

Pendant les 31 jours qui précèdent la date d'expiration d'un ClientSecret, **un header supplémentaire est renvoyé lors des réponses aux appels sur les endpoints des API REST**. Ce header quand il est présent permet de savoir qu'on approche de sa date d'expiration, et indique à quelle date le header expirera.

Les 2 headers sont les suivants :

- Pour le ClientSecret principal : X-PrimaryKeyExpirationWarning
- Pour le ClientSecret secondaire : X-SecondaryKeyExpirationWarning  

Le format de la date renvoyée via ces headers est : "JJ/MM/YYYY HH:MM:SS XX" où XX peut être AM ou PM.

Exemple avec Postman : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28139%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A27Z&se=2026-11-13T20%3A14%3A27Z&sr=c&sp=r&sig=u3%2FWKDI0LdhEMNg0eF9qlm6sRGwohZs3%2FR3bSIfdDPU%3D)

### Réception de notification

Une notification sera envoyée par mail 31 jours avant la date d'expiration, puis 7 jours et enfin 1 jour avant que le Client Secret principal ou secondaire n'expire. ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28311%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A27Z&se=2026-11-13T20%3A14%3A27Z&sr=c&sp=r&sig=u3%2FWKDI0LdhEMNg0eF9qlm6sRGwohZs3%2FR3bSIfdDPU%3D)

Ce message sera adressé à l'utilisateur ou aux utilisateurs du compte API ainsi qu'au contact technique rattaché (compte API modèle 2).

### Message sur le Portail API

À l'approche de la date d'expiration, un message s'affichera également à côté de la date d'expiration dans les informations générales du portail API :

- Un message d'avertissement s'affichera en orange à 60 jours de la date d'expiration
- Un message d'alerte s'affichera en rouge si la date d'expiration est dépassée

Exemple : ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28140%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A14%3A27Z&se=2026-11-13T20%3A14%3A27Z&sr=c&sp=r&sig=u3%2FWKDI0LdhEMNg0eF9qlm6sRGwohZs3%2FR3bSIfdDPU%3D)

### Renouvellement du Client Secret

[Mon Client Secret expire dans quelques jours, que dois-je faire ?](https://silae-api.document360.io/docs/faq-1#mon-client-secret-expire-dans-quelques-jours-que-doisje-faire)

## Clés de configuration d'accès API (Subscription-key)

Les clés de configuration d'accès (également appelées subscription-key) n'expirent pas, il n'est pas nécessaire de les regénérer régulièrement. Il est néanmoins possible de le faire pour des questions de sécurité.

## Access_token

Pour pouvoir exploiter les API il est nécessaire d'utiliser un access_token reçu en retour de la requête d'authentification. Cet access_token a une durée de validité de 60 minutes. Au delà de ces 60 minutes l'access_token ne sera plus valide.
