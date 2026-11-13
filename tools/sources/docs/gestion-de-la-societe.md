---
title: "Gestion de la société"
slug: "gestion-de-la-societe"
updated: 2024-10-10T16:31:25Z
published: 2024-10-10T16:31:25Z
canonical: "silae-api.document360.io/gestion-de-la-societe"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Gestion de la société

L'écran de gestion de la société n'est accessible qu'aux utilisateurs auxquels on a accordé ce droit. Les utilisateurs principaux de chaque société ont accès à la gestion de la société dès la création de leur compte utilisateur.

## Informations générales

Cette section permet de connaître le nom de la société (non modifiable), ainsi que l'email du contact technique (modifiable). Rappel :cette adresse mail correspond au destinataire des communications liées aux API.

![Portail_API-Societe](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Portail_API-Societe.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A07Z&se=2026-11-13T20%3A15%3A07Z&sr=c&sp=r&sig=oc7O66%2FA%2FNCUjnKweJtkwYr42s4EQr2iVNbhbnj5NQE%3D)

## Gestion des utilisateurs

Cette section permet de gérer les utilisateurs rattachés à la société. Dans cette partie de l'écran, on retrouve la liste des utilisateurs rattachés à la société avec leurs informations (nom, prénom, adresse e-mail), le statut du compte utilisateur et s'il a le droit ou non d'accéder à la gestion de la société. On retrouve également en dessous de chaque utilisateur la liste des comptes API rattachés à la société avec l'information permettant de savoir si l'utilisateur en question a accès ou non à chaque compte API.

![Portail_API-SocieteUsers](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Portail_API-SocieteUsers.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A07Z&se=2026-11-13T20%3A15%3A07Z&sr=c&sp=r&sig=oc7O66%2FA%2FNCUjnKweJtkwYr42s4EQr2iVNbhbnj5NQE%3D)

Pour chaque utilisateur, le compte peut être supprimé (1), le droit d'accès à la gestion de la société peut être modifié (2), une invitation à utiliser le portail API peut être envoyée (3) et un ou plusieurs comptes API peuvent être associés. Enfin le bouton Ajouter (4) permet de créer un nouvel utilisateur rattaché à la société, en renseignant simplement l'adresse e-mail de l'utilisateur à créer.

![Portail_API-SocieteUsers2](https://cdn.document360.io/1e4e518a-c4e9-489d-bc9a-7ae743d5395f/Images/Documentation/Portail_API-SocieteUsers2.png?sv=2026-02-06&spr=https&st=2026-11-13T19%3A15%3A07Z&se=2026-11-13T20%3A15%3A07Z&sr=c&sp=r&sig=oc7O66%2FA%2FNCUjnKweJtkwYr42s4EQr2iVNbhbnj5NQE%3D)

### Droit de gestion

Le fait de cocher cette option sur un utilisateur lui donne l'accès à la fiche société. Ce qui signifie que ce même utilisateur peut :

- Ajouter, supprimer des utilisateurs sur le portail API
- Affecter ou désaffecter des comptes API sur un utilisateur à partir de la liste affichée

Il est donc important de ne pas cocher cette option sur les différents utilisateurs déclarés si vous souhaitez conserver ce privilège.

Exemple : Vous souhaitez donne l'accès à votre client pour générer ses propres accès, voici les opérations à effectuer :

1. Ajouter l'email utilisateur de votre client
2. Le Droit de gestion doit rester désactivé
3. Cocher les comptes API qui le concerne
