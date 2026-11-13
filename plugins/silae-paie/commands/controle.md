---
description: Contrôler la paie d'un dossier Silae après calcul (écarts avec le mois précédent, anomalies)
argument-hint: "<dossier> [période AAAA-MM]"
---
Applique le skill `silae-controle-paie` sur : $ARGUMENTS

Si aucune période n'est donnée, utilise la période en cours du dossier. Pour plus de 30 salariés, délègue l'analyse à l'agent `controleur-paie`. Restitue le tableau des points à vérifier trié par gravité, puis propose le mail de questions au client.
