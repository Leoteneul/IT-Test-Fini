Ce projet est réalisé avec React et SASS,
j'ai pu intégrer le front en me raprochant au maximum de la maquette convenu.

Les calls API sont réalisés avec axios, j'ai eu quelque soucis pour venir mappé correctement les langues de certains pays car je n'arrivais pas assez rapidement à récupérer les valeurs du paramètre 'languages' et a pouvoir les afficher correctement dans mon item.

J'ai d'abord essayer avec la fonction JSON.stringify(languages) maintenant celle ci me donner également les clés j'ai perdu assez de temps sur cette fonctionnalité.


Je pense que par la suite trier les pays par ces languages n'aurait pas poser de soucis, en récupérant la valeur dans l'input text et a un call api axios '/lang/{lang} puis display facilement et uniquement les pays demandés.

