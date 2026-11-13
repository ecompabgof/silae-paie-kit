---
description: Vérifier la connexion à l'API Silae et afficher la configuration du kit
---
Appelle `silae_statut` avec `tester_connexion: true`. Si la connexion fonctionne, appelle `ListeDossiers` via `silae_appeler` et affiche le nombre de dossiers accessibles et les 10 premiers (numéro, raison sociale). Présente ensuite en clair : environnement, mode d'accès, modèle de contrat, dossier par défaut, dossier de sortie. Si quelque chose manque ou échoue, applique le skill `silae-connexion` pour expliquer comment corriger.
