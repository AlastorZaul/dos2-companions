# DOS2 Companions

Guides de build et outils pour **Divinity: Original Sin 2**, en français.

Site en ligne : https://alastorzaul.github.io/dos2-companions/

## Contenu

### Pour bien commencer
- **Débutant** : points essentiels pour la création et les premières heures.
- **Classes** : archétypes de départ, selon RPGSoluce.
- **Personnages** : les six protagonistes prédéfinis.
- **Loup solitaire** : règles et conseils du mode.

### Builds
- **Pyro Battlemage** : magie, Intelligence et Pyrokinésie.
- **Battlemage physique** : Force, Guerre et armes à deux mains.
- **Clerc (Ecclésiastique)** : soutien hybride, Hydrosophie, Nécromancie et Guerre.
- **Builds maison** : combinaisons inventées par nous, à partir des talents raciaux. Non testées.

### Référence
- **Races** : talents raciaux et builds recommandés.
- **Talents** : liste complète, avec recherche.
- **Compétences** : les écoles de compétences, avec niveaux, coûts et effets.
- **Mots-clés** : race, personnalité, réputation et arènes.
- **Surfaces et états** : feu, glace, poison, et les altérations.
- **Lexique** : termes français et anglais.
- **Équipement** : runes, recettes d'armes et d'armures, objets uniques et quête des reliques (partiel).
- **Objets uniques** : liste par acte, avec obtention et effet.
- **Consommables** : potions, poisons et nourriture, avec recettes.
- **Marchands et artisanat** : fonctionnement des marchands, de l'artisanat et des runes.
- **Arène** : modes, paramètres et personnages du combat multijoueur.
- **Vérification des builds** : corrections faites et points restant à vérifier.

### Outils
- **Calculateur de points** : points disponibles par niveau, avec vérification de la répartition.
- **Bouton Thème** : bascule entre clair et sombre. Le choix est mémorisé dans le navigateur.

## Structure du dépôt

```
index.html          Accueil
style.css           Style commun à toutes les pages
theme.js            Bouton clair / sombre
*.html              Une page par sujet
.github/workflows/  Déploiement automatique sur GitHub Pages
```

Chaque page reprend la même barre de navigation. Quand tu ajoutes une page, pense à l'ajouter dans la barre de navigation de toutes les autres, et dans la liste de l'accueil.

## Déploiement

Le site est déployé automatiquement par GitHub Actions à chaque push sur `main` (voir `.github/workflows/pages.yml`). Si le déploiement est en attente, il faut l'approuver dans l'onglet **Actions** du dépôt.

## Sources et limites

Les données viennent de :
- **RPGSoluce** (version PS4) : talents, compétences, surfaces, altérations, personnages, classes, races, débutant, mots-clés.
- **Wiki Fandom et Fextralife** : Battlemage, Pyrokinésie, Clerc, Humain.
- **Guides communautaires** (GamePur, GamesRadar+, Steam) : builds et points par niveau.

Limites à garder en tête :
- Les guides sont pensés pour le mode **Classique**. Les chiffres d'ennemis viennent du wiki Fextralife, et les sources ne s'accordent pas toutes sur les détails de la difficulté.
- Plusieurs sources datent de 2017-2018 et sont antérieures à la Definitive Edition.
- Les données de RPGSoluce viennent de la version PS4. Certaines valeurs peuvent différer sur PC.
- Les tableaux de progression par niveau sont des plans de base, pas des valeurs vérifiées en jeu.
- Les builds maison ne sont pas testés.

Chaque page indique ses sources en bas.

## Avertissement

Guide communautaire non officiel. Aucun lien avec Larian Studios. Divinity: Original Sin 2 est une marque de Larian Studios.
