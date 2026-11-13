---
title: "Taxe d'apprentissage - détail des codes utilisés"
slug: "taxe-dapprentissage-detail-des-codes-utilises"
updated: 2023-02-18T11:30:59Z
published: 2023-02-18T11:30:59Z
canonical: "silae-api.document360.io/taxe-dapprentissage-detail-des-codes-utilises"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Taxe d'apprentissage - détail des codes utilisés

Cette fiche permet de lister les codes utilisés dans la lecture et la modification de la taxe d'apprentissage par société/établissement

## Codes de non-assujettissement à la taxe

| Code | Informations complémentaires |
| --- | --- |
| 001 | Non assujetti par choix du régime fiscal (option IR en catégorie BNC) |
| 002 | Collectivités publiques |
| 003 | Etablissements publics de recherche et les établissements publics d'enseignement supérieurs |
| 004 | Personnes morales créées pour la gestion d'un pôle de recherche et d'enseignement supérieur ou d'un réseau thématique de recherche avancée |
| 005 | Fondations reconnues d'utilité public du secteur de la recherche |
| 006 | Sociétés et personnes morales ayant pour objet exclusif l'enseignement |
| 007 | Associations sans but lucratif |
| 008 | Syndicats professionnels |
| 009 | Entreprises sans établissement en France (ESEF) |
| 010 | Sociétés civiles de moyens (SCM) non commerciale |
| 011 | Personnes physiques ou morales assujetties aux BNC ou BA |
| 012 | Les coopératives agricoles |
| 013 | Les coopératives artisanales, transport (y compris fluvial et maritime) et leurs unions |
| 014 | Les groupements d'employeurs dont agricoles |
| 015 | Les sociétés civiles agricoles |
| 016 | Les mutuelles et organismes mutualistes |
| 017 | Les organismes HLM, SA de crédit immobilier (I et au II de l'article L. 422-4 du code de la construction et de l'habitation ) et unions d'économie sociale |
| 018 | Les sociétés coopératives de construction désignées à l'article L. 432-2 du code de la construction et de l'habitation. |
| 019 | Organismes chargés de l'organisation en France d'une compétition sportive internationale en France (Article L6131-1 du code du travail) |

## Codes d'opérateur de compétence

| Libellé | Valeur correspondante |
| --- | --- |
| OPCO2I | 01 |
| AFDAS | 02 |
| ATLAS | 03 |
| UNIFORMATION COHESION SOCIALE | 04 |
| CONSTRUCTYS | 05 |
| OPCO EP | 06 |
| AKTO | 07 |
| L'OPCOMMERCE | 08 |
| OPCO MOBILITES | 09 |
| OCAPIAT | 10 |
| OPCO SANTE | 11 |

## Code d'erreurs sur la modification d'une taxe d'apprentissage

| Code | Libellé |
| --- | --- |
| TA001 | Impossible de créer une taxe d'apprentissage plus d'un an à l'avance |
| TA002 | Impossible de modifier une taxe d'apprentissage vieille de plus de 3 ans |
| TA003 | Impossible de saisir un motif de non assujettissement si soumis à la taxe d'apprentissage |
| TA004 | Si non soumis à la taxe d'apprentissage, le motif de non assujettissement est obligatoire |
| TA005 | Impossible d'avoir une majoration sur la taxe d'apprentissage si non soumis à la taxe d'apprentissage |
| TA006 | Motif de Non Assujettissement inconnu (ou non entré dans la base commune pour l'année demandée) |
| TA007 | Operateur de competence inconnu (ou non entré dans la base commune pour l'année demandée) |
