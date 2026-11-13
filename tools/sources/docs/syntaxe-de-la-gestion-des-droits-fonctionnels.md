---
title: "Syntaxe de la gestion des droits fonctionnels"
slug: "syntaxe-de-la-gestion-des-droits-fonctionnels"
updated: 2022-10-09T10:50:02Z
published: 2022-10-09T10:50:02Z
canonical: "silae-api.document360.io/syntaxe-de-la-gestion-des-droits-fonctionnels"
---

> ## Documentation Index
> Fetch the complete documentation index at: https://silae-api.document360.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Syntaxe de la gestion des droits fonctionnels

## Droits fonctionnels

La gestion des droits fonctionnels se gère via une "requête" qui permet de définir le filtre qui va être appliqué. Cette requête doit respecter une certaine syntaxe.

## Syntaxe de la requête

#### Exemple pour illustrer la description

<font color="#0000FF" data-tomark-pass="">CODEAGENCE</font><font color="#006400" data-tomark-pass="">=</font>"AIX" <font color="#FF0000" data-tomark-pass="">ET</font> <font color="#006400" data-tomark-pass="">(<font data-tomark-pass=""><font color="#0000FF" data-tomark-pass="">CODE_POSTAL</font> <font color="#006400" data-tomark-pass="">COMMENCEPAR</font> <font color="black" data-tomark-pass="">"13"</font> <font color="#FF0000" data-tomark-pass="">OU</font> <font color="#0000FF" data-tomark-pass="">CLI_RG1</font> <font color="#006400" data-tomark-pass="">=</font> <font color="black" data-tomark-pass="">"LPO"</font><font color="#006400" data-tomark-pass="">)</font><br> <br data-tomark-pass=""></font></font>

<font color="#006400" data-tomark-pass=""><font data-tomark-pass="">
<h4><font color="black" data-tomark-pass="">Code couleur</font></h4><font color="black" data-tomark-pass="">
<ul>
<li><font color="#0000FF" data-tomark-pass=""><strong>Bleu</strong> : Champ qui correpond aux variables existantes (cf.liste ci-dessous)</font></li>
<li><font color="#006400" data-tomark-pass=""><strong>Vert</strong> : Comparateurs</font></li>
<li><font color="#FF0000" data-tomark-pass=""><strong>Rouge</strong> : Opérateur logique</font></li>
<li><font color="black" data-tomark-pass=""><strong>Noir</strong> : Valeurs de comparaison</font></li>
</ul>
<h4>Champs/Variables disponibles</h4>
<ul>
<li>NODOSS (Numéro de dossier - string)</li>
<li>CODEAGENCE (Code Agence - string)</li>
<li>GROUPE (Groupe - string)</li>
<li>DATE_ENTREE (Date d'entrée - date)</li>
<li>DATE_SORTIE (Date de sortie - date)</li>
<li>CODE_NAF (Code NAF - string)</li>
<li>CODE_POSTAL (Code postal - string)</li>
<li>DOSSIERS_INACTIFS (Dossier inactif - booléen)</li>
<li>DOSSIERS_EN_MONTAGE (Dossier en montage - booléen)</li>
<li>DOSSIERS_EN_PRODUCTION (Dossier en production - booléen)</li>
<li>CLI_RG1, CLI_RG2,...CLI_RG9 (Affectations telles que configurées dans le domaine, par exemple : Expert Comptable, Chef de mission, ...)</li>
</ul>
<h4>Comparateurs supportés</h4>
<ul>
<li>&gt; : Supérieur</li>
<li>&lt; : Inférieur</li>
<li>&gt;= : Supérieur ou égal</li>
<li>&lt;= : Inférieur ou égal</li>
<li>= : Égal</li>
<li>&lt;&gt; : Différent</li>
<li>CONTIENT : Contient les caractères</li>
<li>!CONTIENT : Ne contient pas</li>
<li>COMMENCEPAR : Commence par les caractères</li>
<li>!COMMENCEPAR : Ne commence pas par les caractères</li>
</ul>
<h4>Opérateurs logiques supportés</h4>
<p>Les opérateurs supportés sont <strong>ET</strong>, <strong>OU</strong> et les parenthèses. Les priorités sont gérées de manière classique : la priorité la plus haute est aux parenthèses, puis à l'opérateur <strong>ET</strong>.</p>
<h4>Format des valeurs de comparaison</h4>
<p>La majorité des champs sont des chaînes de caractères, mais il existe aussi des variables de type Date et booléen :</p>
<ul>
<li>Chaîne de caractères : Doivent être entourée de guillemets</li>
<li>Date : doit être au format JJMMAAAA</li>
<li>Booléen : doit valoir VRAI ou FAUX</li>
</ul>
</font></font></font>
