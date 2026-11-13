---
description: Lister les dossiers de paie Silae accessibles, avec filtre facultatif
argument-hint: "[filtre sur le nom ou le numéro]"
---
Appelle `ListeDossiers` via `silae_appeler`. Filtre sur « $ARGUMENTS » si un filtre est donné (nom, numéro, SIRET ou groupe, sans tenir compte des accents ni de la casse). Affiche un tableau : numéro, raison sociale, SIRET, groupe, état. Termine par le nombre total.
