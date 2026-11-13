---
title: "HistoriqueDesModifications"
slug: "historiquedesmodifications"
updated: 2026-06-08T07:02:31Z
published: 2026-06-08T07:02:31Z
canonical: "silae-api.document360.io/historiquedesmodifications"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# HistoriqueDesModifications

## Fonction API

```
/v1/InfosDossiers/HistoriqueDesModifications
```

## Verbe HTTP

Post

          

## Description

          

Permet d'obtenir l'historique des modifications apportées sur les dossiers de paie.

---

**Points d'attention** Les lignes de modification prises en compte correspondent aux :

- Enregistrements sur lesquels les accès sont autorisés (fonctionnalité **Historique des modifications** et dossiers de paie)
- Enregistrements qui possèdent un N° de dossier de paie associé

*Les enregistrements sont automatiquement triés dans l'ordre décroissant des dates et heures de modification.*

## Groupe de fonctions API

DATA002

## Paramètres de la requête

| Paramètre | Type | Description |
| --- | --- | --- |
| numeroDossier | string | Numéro du dossier concerné par la requête (optionnel) |
| dateDebut | string(date-time) | Date et heure de début des modifications à rechercher (obligatoire) |
| dateFin | string(date-time) | Date et heure de fin des modifications à rechercher (obligatoire) *7 jours maximum (tient compte de l'horaire indiqué)* |
| identifiantUtilisateur | string | Identifiant de l'utilisateur concerné par les modifications (optionnel) |
| modifAPI | boolean | Modification effectuée par API (optionnel) **true** : oui / **false** : non |
| elements | string[] | Eléments concernés par la modification (optionnel) : \| Elément historique des modifications \| Valeur correspondante \| \| --- \| --- \| \| Administration \| Administration \| \| Agence \| Agence \| \| Bulletin \| Bulletin \| \| Collaborateur \| Collaborateur \| \| Contact \| Contact \| \| Demat \| Démat \| \| Domaine \| Domaine \| \| Dossier \| Dossier \| \| Édition historique utilisateur \| EditionHistoriqueNoCode \| \| Emetteur EDI \| EmetteurEDI \| \| Etablissement \| Etablissement \| \| Gestion des documents \| Ged \| \| ModuleMaintienMaladie \| Module Indemnisation des absences \| \| MySilae \| MySilae \| \| Organisme \| Organisme \| \| Salarié \| Salarie \| \| Virement \| Virement \| |
| Elément historique des modifications | Valeur correspondante |
| Administration | Administration |
| Agence | Agence |
| Bulletin | Bulletin |
| Collaborateur | Collaborateur |
| Contact | Contact |
| Demat | Démat |
| Domaine | Domaine |
| Dossier | Dossier |
| Édition historique utilisateur | EditionHistoriqueNoCode |
| Emetteur EDI | EmetteurEDI |
| Etablissement | Etablissement |
| Gestion des documents | Ged |
| ModuleMaintienMaladie | Module Indemnisation des absences |
| MySilae | MySilae |
| Organisme | Organisme |
| Salarié | Salarie |
| Virement | Virement |
| actions | string[] | Actions concernés par la modification (optionnel) : \| Action historique des modifications \| Valeur correspondante \| \| --- \| --- \| \| Activation \| Activation \| \| Activation externe \| Activation externe \| \| Authentification externe \| AuthentificationExterne \| \| Captcha \| Captcha \| \| Changement code \| ChangementCode \| \| Connexion \| Connexion \| \| Connexion salarié via email perso \| ConnexionSalarieViaEmailPerso \| \| Connexion salarié via email pro \| ConnexionSalarieViaEmailPro \| \| Création \| Creation \| \| Création publipostage \| CreationPublipostage \| \| Demande d'activation \| DemandeActivation \| \| Désactivation \| Desactivation \| \| Export \| Export \| \| Génération des accès informatiques \| GenerationAccesInformatiques \| \| Import \| Import \| \| Modification \| Modification \| \| Modification du salaire \| ModificationSalaire \| \| Modification de la CCN \| ModificationCCN \| \| Modification des coordonnées bancaires \| ModificationCoordonneesBancaire \| \| Modificationde la configuration \| ModificationConfiguration \| \| Modification statut \| ModificationStatut \| \| Modification utilisateurs \| ModificationUtilisateurs \| \| Montage \| Montage \| \| Ouverture \| Ouverture \| \| Suppression \| Suppression \| \| Suppression partielle \| SuppressionPartielle \| |
| Action historique des modifications | Valeur correspondante |
| Activation | Activation |
| Activation externe | Activation externe |
| Authentification externe | AuthentificationExterne |
| Captcha | Captcha |
| Changement code | ChangementCode |
| Connexion | Connexion |
| Connexion salarié via email perso | ConnexionSalarieViaEmailPerso |
| Connexion salarié via email pro | ConnexionSalarieViaEmailPro |
| Création | Creation |
| Création publipostage | CreationPublipostage |
| Demande d'activation | DemandeActivation |
| Désactivation | Desactivation |
| Export | Export |
| Génération des accès informatiques | GenerationAccesInformatiques |
| Import | Import |
| Modification | Modification |
| Modification du salaire | ModificationSalaire |
| Modification de la CCN | ModificationCCN |
| Modification des coordonnées bancaires | ModificationCoordonneesBancaire |
| Modificationde la configuration | ModificationConfiguration |
| Modification statut | ModificationStatut |
| Modification utilisateurs | ModificationUtilisateurs |
| Montage | Montage |
| Ouverture | Ouverture |
| Suppression | Suppression |
| Suppression partielle | SuppressionPartielle |
| matriculeSalarie | string | Matricule du salarié concerné par les modifications (optionnel) |

## Paramètres de la réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| modifications | HistoriqueModification[] | Liste d'éléments structurés contenant des informations sur les modifications présentes dans le domaine et accessibles (cf. Détail ci-dessous) |
| warning | string | Le message suivant apparaît lorsque le nombre de modifications dépasse les 5 000 enregistrements : ***"Le résultat contient plus de 5000 enregistrements. En conséquence, le résultat ne contient que les 5000 premiers résultats liés à votre filtre. Modifiez les filtres pour approfondir votre recherche."*** |

### HistoriqueModification

| Paramètre | Type | Description |
| --- | --- | --- |
| date | string(date-time) | Date et heure de la modification |
| identifiantUtilisateur | string | identifiant de l'utilisateur |
| modifAPI | boolean | Modification effectuée par API (**true** : oui / **false** : non) |
| element | string | Elément de la modification |
| action | string | Action de la modification |
| numeroDossier | string | Numéro du dossier |
| matriculeSalarie | string | Numéro du salarié |
| descriptionModification | string | Description de la modification |

## Requête

```
{
  "numeroDossier": "string",
  "dateDebut": "2020-10-14T21:46:24",
  "dateFin": "2020-10-14T21:46:24",
  "identifiantUtilisateur": "string",
  "modifAPI": true,
  "elements": [
    "string",
    "string"
  ],
  "actions": [
    "string",
    "string"
  ],
  "matriculeSalarie": "string"
}
```

## Réponse

```
{
  "modifications": [
    {
      "date": "2020-10-14T21:46:24",
      "identifiantUtilisateur": "string",
      "modifAPI": true,
      "element": "string",
      "action": "string",
      "numeroDossier": "string",
      "matriculeSalarie": "string",
      "descriptionModification": "string"
    },
    {
      "date": "2020-10-14T21:46:24",
      "identifiantUtilisateur": "string",
      "modifAPI": true,
      "element": "string",
      "action": "string",
      "numeroDossier": "string",
      "matriculeSalarie": "string",
      "descriptionModification": "string"
    }
  ],
  "warning": "string"
}
```

## Messages d'erreur

| Erreur | Message | Description |
| --- | --- | --- |
| --- | "Aucun résultat pour les paramètres de recherche" | Aucun enregistrement n'a été trouvé pour les paramètres demandés |
| --- | "La période de recherche ne peut excéder 7 jours glissants" | La période demandée ne doit pas excéder 7 jours (tient compte de l'horaire indiquée sur chaque date de début et de fin) |
| --- | "Element inconnu [xxxxxx]" | La valeur de l'élément xxxxxx à rechercher est invalide |
| --- | "Action inconnue [xxxxxx]" | La valeur de l'action xxxxxx à rechercher est invalide |
