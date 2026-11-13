---
title: "Fiche Société"
slug: "fiche-societe"
updated: 2023-02-18T11:30:26Z
published: 2023-02-18T11:30:26Z
canonical: "silae-api.document360.io/fiche-societe"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Fiche Société

Cette fiche permet de lister les correspondances clé-valeur pour les champs de la fiche société.

## Etat dossier paie

| État du dossier | Valeur correspondante |
| --- | --- |
| Dossier inactif | 0 |
| Dossier en montage | 1 |
| Dossier en production | 2 |

## Civilité

| Civilité | Valeur correspondante |
| --- | --- |
| Vide | 0 |
| Monsieur | 1 |
| Madame | 2 |
| Mademoiselle | 3 |

## Qualité employeur

| Qualité | Valeur correspondante |
| --- | --- |
| Vide | 0 |
| Chef d'entreprise | 10 |
| Gérant | 20 |
| Directeur | 30 |
| Chef du personnel | 40 |
| Comptable | 50 |
| Administrateur judiciaire | 60 |
| Mandataire liquidateur | 70 |
| Autre | 90 |

## Traitement des absences

| Méthode de suivi des absences | Valeur correspondante |
| --- | --- |
| Traitement des absences pas en jours non calendaires | 0 |
| Traitement des absences en jours calendaires pour les absences générant du maintien | 1 |
| Traitement des absences en jours calendaires pour toutes les absences | 99 |

## Méthode de suivi des absences

| Méthode de suivi des absences | Valeur correspondante |
| --- | --- |
| Suivi des absences en heures | 0 |
| Suivi des absences en jours ouvrables | 1 |
| Suivi des absences en jours ouvrés | 2 |

## Sous-méthode de suivi des absences

| Méthode de suivi des absences | Valeur correspondante |
| --- | --- |
| Méthode moyenne | 0 |
| Méthode réelle | 1 |

## Déduction des heures majorées

| Déduction des heures | Valeur correspondante |
| --- | --- |
| Déduction des heures majorées au jour le jour | 0 |
| Déduction des heures majorées à la semaine | 1 |
| Déduction des heures majorées au mois | 2 |

## Méthode de calcul du maintien

| Méthode de calcul du maintien | Valeur correspondante |
| --- | --- |
| Sur la base du bulletin courant | 0 |
| Sur la base des salaires rétablis des n mois précédents | 10 |

## Suivi des congés payés

| Méthode de suivi des CP | Valeur correspondante |
| --- | --- |
| Le suivi des CP se fait en jours ouvrables | 0 |
| Le suivi des CP se fait en jours ouvrés | 1 |
| Le suivi des CP se fait en jours calendaires | 2 |

## Méthode de retenue des CP

| Méthode de retenue | Valeur correspondante |
| --- | --- |
| Retenue des congés payés de fait en jours | 0 |
| Retenue des congés payés de fait en heures | 1 |
| Retenue des congés payés de fait en jours ouvrables | 2 |

## Méthode d'arbitrage

| Méthode d'arbitrage | Valeur correspondante |
| --- | --- |
| L'arbitrage des CP se fait à chaque prise | 0 |
| L'arbitrage des CP se fait lors de la dernière prise | 1 |
| L'arbitrage des CP se fait au mois de clôture des CP | 2 |
| L'arbitrage des CP se fait manuellement | 3 |

## Base de calcul de l'ancienneté

| Base de calcul de l'ancienneté | Valeur correspondante |
| --- | --- |
| Le calcul de l'ancienneté se base sur le salaire minimum conventionnel | 0 |
| Le calcul de l'ancienneté se base sur le salaire de base | 1 |

## Taille d'entreprise

| Taille d'entreprise | Valeur correspondante |
| --- | --- |
| moins de 11 salariés | 0 |
| de 11 à moins de 20 salariés | 1 |
| de 21 à moins de 50 salariés | 2 |
| de 51 à moins de 300 salariés | 3 |
| 300 salariés et plus | 4 |

## Taille d'entreprise forfait social

| Taille d'entreprise | Valeur correspondante |
| --- | --- |
| moins de 50 salariés | 2 |
| de 50 à moins de 250 salariés | 1 |
| 250 salariés et plus | 0 |

## Type de tri des listes de salariés

| Type de tri | Valeur correspondante |
| --- | --- |
| Par nom et prénom | 0 |
| Par matricule | 1 |

## Mode de saisie de l'activité journalière

| Mode de saisie | Valeur correspondante |
| --- | --- |
| Normal (Classique) | 0 |
| Plages horaires (Avancé) | 1 |

## Découpage de l'activité journalière

| Type de découpage | Valeur correspondante |
| --- | --- |
| Semaine | 0 |
| Mois | 1 |

## Jour de la semaine

| Jour de la semaine | Valeur correspondante |
| --- | --- |
| Lundi | 0 |
| Mardi | 1 |
| Mercredi | 2 |
| Jeudi | 3 |
| Vendredi | 4 |
| Samedi | 5 |
| Dimanche | 6 |

## Journée de solidarité

| Jour férié | Valeur correspondante |
| --- | --- |
| Jour de l'an - 01/01 | 0101 |
| Fête du travail - 01/05 | 0105 |
| Victoire 1945 - 08/05 | 0805 |
| Fête Nationale - 14/07 | 1407 |
| Assomption - 15/08 | 1508 |
| Toussaint - 01/11 | 0111 |
| Armistice 1918 - 11/11 | 1111 |
| Noël - 25/12 | 2512 |
| Lendemain de Noël - 26/12 | 2612 |
| Ascension | ASC |
| Lundi de Pâques | PAQUE |
| Lundi de Pentecôte | PENT |
| Vendredi Saint | VENDS |

## Jours fériés

| Jour férié | Valeur correspondante |
| --- | --- |
| Jour de l'an - 01/01 | 0101 |
| Fête du travail - 01/05 | 0105 |
| Victoire 1945 - 08/05 | 0805 |
| Fête Nationale - 14/07 | 1407 |
| Assomption - 15/08 | 1508 |
| Toussaint - 01/11 | 0111 |
| Armistice 1918 - 11/11 | 1111 |
| Noël - 25/12 | 2512 |
| Lendemain de Noël - 26/12 | 2612 |
| Ascension | ASC |
| Lundi de Pâques | PAQUE |
| Lundi de Pentecôte | PENT |
| Vendredi Saint | VENDS |

## Code régime de base obligatoire

| Code régime de base obligatoire | Valeur correspondante |
| --- | --- |
| Régime spécial de la SNCF | 134 |
| Régime spécial de la RATP | 135 |
| Établissement des invalides de la marine (ENIM) | 136 |
| Mineurs ou assimilés (CANMSS) | 137 |
| Militaires de carrière (CNMSS) | 138 |
| Clercs et employés de notaires (CRPCEN) | 140 |
| Chambre de commerce et d'industrie de Paris | 141 |
| Assemblée nationale | 144 |
| Sénat | 145 |
| Port autonome de Bordeaux | 146 |
| Industries électriques et gazières (CAMIEG) | 147 |
| Régimes des Cultes (CAVIMAC) | 149 |
| Régime général (CNAM) | 200 |
| Régime agricole (CCMSA) | 300 |
| Régime spécial Banque de France | 400 |
| Autre régime (réservé Polynésie française, Nouvelle-Calédonie, Principauté de Monaco) | 900 |
| Sans régime obligatoire (cas des élus) | 999 |

## Méthode d'application des frais de santé

| Mode d'application des frais de santé | Valeur correspondante |
| --- | --- |
| Application du paramétrage spécifique au dossier | 1 |
| Application des frais de santé conventionnels | 2 |
