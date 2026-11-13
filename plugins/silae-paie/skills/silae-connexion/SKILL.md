---
name: silae-connexion
description: Obtenir et brancher un accès à l'API Silae Paie - contrat (annexe 7), choix du modèle 1A, 1B ou 2, formulaire d'ouverture, portail API, Client ID, Client Secret, clé de configuration d'accès, environnement de test, configuration d'accès sur les dossiers, renouvellement du secret, erreurs d'authentification. À utiliser pour « comment avoir l'API Silae », « configurer le plugin Silae », « erreur 401 », « 1011 », « subscription key invalide », « mon secret expire ».
---

# Brancher l'API Silae

## 1. Côté contrat (cabinet partenaire Silae)
1. Le contrat de distribution Silae doit contenir l'annexe 7 (accès API). Sinon, signer l'avenant API avec le commercial Silae.
2. Choisir le modèle :
   1. **1A** usage interne paie : lecture, éditions, écritures comptables, pilotage.
   2. **1B** usage interne RH : 1A plus saisies, salariés, DPAE. Nécessaire pour que Claude saisisse des variables.
   3. **2** : compte mis à disposition d'un client du cabinet.
3. Remplir le formulaire d'ouverture (nom de la société chez Silae, URL du domaine `https://xxxxx.silae.fr`, e-mail de l'utilisateur principal du portail API, e-mail du contact technique, modèles voulus). Notice : https://silae-api.document360.io/docs/notices-formulaires
4. Délai annoncé : quelques semaines, 2 à 3 minimum pour une première demande. Trois e-mails arrivent : environnement de test, portail API, récapitulatif.
5. Facturation : à l'usage, sur les bulletins des dossiers dont la configuration d'accès est active dans le mois. Activer dossier par dossier pour maîtriser le coût.

## 2. Récupérer les trois identifiants
Sur https://api-portal.silae.fr :
1. **Client ID** : informations générales du compte API.
2. **Client Secret** : onglet de gestion des ClientSecrets, bouton de génération. Le copier tout de suite, il n'est plus affiché ensuite. Validité un an.
3. **Clé de configuration d'accès** (subscription key) : d'abord créer la configuration dans mySilae (étape 3), puis l'activer dans le portail et générer sa clé principale.

## 3. Créer la configuration d'accès dans mySilae
1. Paramétrage paie, Options, Configuration API (droit réservé à un collaborateur qui voit tous les dossiers).
2. Créer une configuration : compte API (1A, 1B ou 2), utilisateur mySilae rattaché, type d'accès (tous les dossiers pour le 1A, sélection de dossiers pour 1B et 2), libellé.
3. Choisir les dossiers puis enregistrer.
4. L'utilisateur mySilae rattaché fixe les droits réels : l'API ne peut faire que ce que cet utilisateur peut faire. Créer de préférence un collaborateur ou un contact « dédié API » aux droits limités au besoin.

## 4. Brancher le plugin
1. `/plugin`, choisir silae-paie, ouvrir ses réglages, renseigner Client ID, Client Secret, clé de configuration, dossier par défaut, environnement, mode d'accès. Les deux secrets sont stockés dans le trousseau du système, pas dans les fichiers.
2. Commencer en mode `lecture` et sur l'environnement de test.
3. Vérifier : `silae_statut` avec `tester_connexion: true`, puis `ListeDossiers`.
4. Pour le CLI hors Claude Code : fichier `~/.silae.env` (droits 600) avec `SILAE_CLIENT_ID`, `SILAE_CLIENT_SECRET`, `SILAE_SUBSCRIPTION_KEY`, `SILAE_DOSSIER_DEFAUT`, `SILAE_MODE`.

## 5. Environnement de test
Silae fournit un domaine de test et un compte API de test. Importer une copie d'un vrai dossier : onglet Outils, Import d'un dossier de paie, confirmer en tapant OUI (mot de passe d'import dans l'e-mail récapitulatif). Créer une configuration d'accès sur ce dossier avec le compte API de test. Tester toutes les saisies ici avant la production.

## 6. Dépannage
| Symptôme | Cause et solution |
|---|---|
| `invalid_client` | Client ID inconnu ou Client Secret qui ne correspond pas |
| `invalid_grant` | Scope erroné ou Client Secret expiré : en générer un nouveau dans le portail |
| 401 `SubscriptionKeyInvalid` | Clé de configuration fausse, régénérée ou configuration supprimée dans mySilae |
| `invalidSubscriptionIdClientIdPair` | La clé appartient à une configuration d'un autre compte API |
| 1001 | En-têtes ou corps vide |
| 1011 | Dossier absent de la configuration d'accès : l'ajouter, attendre quelques minutes |
| 1016 | Numéro de dossier avec espace ou accent |
| Erreur de droits sur une fonction | L'utilisateur mySilae rattaché n'a pas le droit correspondant, ou le modèle ne couvre pas la fonction |
| Erreurs la nuit | Maintenance Silae de 1 h à 5 h |

Renouvellement : 31, 7 et 1 jour avant l'expiration du Client Secret, Silae envoie un e-mail et ajoute un en-tête d'avertissement. Générer le secret secondaire avant l'expiration du principal, puis mettre à jour le réglage du plugin.
