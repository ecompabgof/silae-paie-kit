---
title: "FAQ - Utilisation des fonction API"
slug: "faq-utilisation-des-fonction-api"
updated: 2026-04-08T16:11:09Z
published: 2026-04-08T16:11:09Z
canonical: "silae-api.document360.io/faq-utilisation-des-fonction-api"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# FAQ - Utilisation des fonction API

## Exécution d'une fonction API

### Lorsque j'exécute une fonction API (exemple : ListeDossiers), j'obtiens en résultat le code erreur 1001

Ce type d'erreur correspond à un problème de communication.

Cela peut provenir de différents cas de figure :

- Les valeurs inscrites dans la partie Header de votre fonction API sont incorrectes. Exemple : la variable **Content-type** doit contenir uniquement la valeur **application/json** ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2826%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A24Z&se=2026-11-13T20%3A15%3A24Z&sr=c&sp=r&sig=jOyG%2BwUbGJfy8Z9Q1Vt185tpFeAIZOR1pL5qiGdLxvY%3D)
- Un body qui est vide (Aucun paramètre dans votre fonction API) ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%2824%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A24Z&se=2026-11-13T20%3A15%3A24Z&sr=c&sp=r&sig=jOyG%2BwUbGJfy8Z9Q1Vt185tpFeAIZOR1pL5qiGdLxvY%3D)

Pour éviter de rencontrer ce type d'erreur notamment lors de la phase de tests, nous vous conseillons vivement de récupérer notre collection Postman mise à disposition depuis notre *[Release Note - Collection Postman](https://silae-api.document360.io/api-rest/docs/release-note-1)*. Il suffit de renseigner le Client ID, Le Client Secret, Un dossier de paie par défaut et une Subscription Key et les fonctions API sont opérationnelles.

### Lorsque j'exécute une fonction API, j'obtiens en résultat le code erreur 1011 "La valeur de la liste de dossiers est nulle ou vide"

Ce type d'erreur se présente lorsque le numéro de dossier n'est pas renseigné dans le "Header" au niveau de la balise "dossiers" de la fonction API utilisée.

Exemple avec la fonction API **DossierRecupererPeriodeEnCours**

![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28398%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A24Z&se=2026-11-13T20%3A15%3A24Z&sr=c&sp=r&sig=jOyG%2BwUbGJfy8Z9Q1Vt185tpFeAIZOR1pL5qiGdLxvY%3D)

Aucune fonction API ne peut être exécutée correctement si cette balise n'est pas renseignée.

2 solutions :

- Soit renseigner le numéro de dossier ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28400%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A24Z&se=2026-11-13T20%3A15%3A24Z&sr=c&sp=r&sig=jOyG%2BwUbGJfy8Z9Q1Vt185tpFeAIZOR1pL5qiGdLxvY%3D)
- Soit utiliser une variable qui contiendra le numéro de dossier concerné (usage d'un environnement - cf. Collection Postman mise à disposition) ![image.png](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/image%28399%29.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A24Z&se=2026-11-13T20%3A15%3A24Z&sr=c&sp=r&sig=jOyG%2BwUbGJfy8Z9Q1Vt185tpFeAIZOR1pL5qiGdLxvY%3D)

Cette erreur peut également se présenter lorsque le numéro de dossier n'est pas renseigné dans la configuration API.

Exemple avec la fonction API **ListeSalarieEmplois**

Résultat de la requête { "errors": [ { "code": "1011", "message": "la valeur de la liste de dossiers est nulle ou vide", "metadata": null } ], "recoverable": true, "source": "Api" } Dans ce cas, le numéro de dossier indiqué dans la requête ne fait pas partie de la liste des dossiers de paie définie dans la configuration API. Vérifier la configuration API et ajouter le numéro de dossier concerné. Un délai de quelques minutes pour la prise en compte est à respecter et un nouveau jeton (token) doit être généré.

### Lorsque j'exécute une fonction API, j'obtiens en résultat le code erreur 1011 ou 1016

Ce type d'erreur se présente lorsque le numéro de dossier possède un caractère "espace" en début ou enfin de la chaine de caractères, mais également lorsqu'il est composé de caractères accentués (exemple : le caractère "É").

Selon l'outil exploité pour gérer la fonction API :

- Le caractère espace est supprimé automatiquement dans la chaîne d'appel
- Le caractère accentué est mal interprété.

Dans ce cas, il est nécessaire de modifier le numéro de dossier afin de :

- supprimer le caractère "espace" ou le remplacer par un autre caractère comme "_" (underscore)
- remplacer le ou les caractères accentués par son équivalent sans accent

Conseil : dans le cas où le numéro de dossier est utilisé dans une connexion (valeur fixe), veillez à corriger son contenu pour maintenir son fonctionnement.

### Les paramètres PeriodeDebut / PeriodeFin et DateDebut / DateFin

Lorsqu'une fonction API propose comme paramètre ***PeriodeDebut*** et ***PeriodeFin***, elles correspondent à la période de paie demandée (Important : seul le mois et l'année sont pris en compte pour la recherche).

Exemple de requête avec le endpoint **SalarieAbsence** "requeteSalarieAbsences": { "matriculeSalarie": "xxxxx", "periodeDebut": "2025-04-01T21:46:24", "periodeFin": "2025-05-01T21:46:24",

Résultat : Seules les absences qui apparaissent sur le bulletin de paie du mois d'avril sont prises en compte. Une absence au 30/04 qui a été enregistrée sur le bulletin de mai, ne sera pas présente dans le résultat.

Lorsque une fonction API propose comme paramètre ***DateDebut*** et ***DateFin***, elles correspondent aux dates au sens le plus stricte. Tous les éléments des dates sont pris en compte.

Exemple de requête avec le endpoint **ListeDSNEvenementielles ** { "dateDebut":"2024-01-01", "dateFin":"2024-12-31",

Résultat : Toutes les DSN évènementielles générées entre le 1er janvier et le 31 décembre 2024 sont prises en compte.

### Lorsque j'exécute une fonction API, j'obtiens en résultat le message "...SubscriptionKeyInvalid, Access denied due to invalid subscription key..."

Lors de l'usage d'une fonction API, le message suivant peut apparaître :

*"code": "401", "message": "backend, authorization, SubscriptionKeyInvalid, Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription."*

Ce type d'erreur peut correspondre à plusieurs cas de figure :

- La clé principale ou secondaire de la configuration API est incorrecte.   
- Soit elle doit être mise à jour dans les scripts API car celle utilisée est obsolète   
 - Soit il faut regénérer cette clé depuis le portail API et la mettre à jour dans les scripts API.
- La configuration API a été supprimée depuis My silae. Dans ce cas, il est nécessaire de la redéfinir, de l'activer et de générer la clé principale ou secondaire depuis le portail API.
