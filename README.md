# 🎨 DominanteColor

> Petit exercice JavaScript interactif visant à déterminer la couleur dominante d’un bloc cliquable, et rediriger automatiquement vers la page Wikipédia correspondante.

## 📸 Aperçu du projet

https://github.com/user-attachments/assets/57ce8a01-5cdf-4696-be8f-61fcb93182f5


## 🧠 Objectif pédagogique

Ce projet a pour but de :

- manipuler le **DOM** en JavaScript ;
- lire les **styles CSS** appliqués à des éléments HTML ;
- extraire et comparer des **valeurs RGB** ;
- déclencher une **redirection vers Wikipédia** en fonction d'une logique métier simple.

## 🚀 Fonctionnement

1. L’utilisateur clique sur une `div` colorée.
2. Le script détecte automatiquement la **couleur dominante** (rouge, vert ou bleu) en analysant la couleur de fond de la `div`.
3. Une redirection s’effectue vers la page Wikipédia correspondant à cette couleur :
   - 🔴 [https://en.wikipedia.org/wiki/red](https://fr.wikipedia.org/wiki/red)
   - 🟢 [https://en.wikipedia.org/wiki/green](https://fr.wikipedia.org/wiki/green)
   - 🔵 [https://en.wikipedia.org/wiki/blue](https://fr.wikipedia.org/wiki/blue)

## 🗂 Structure du projet

```
DominanteColor/
├── Correction/
      ├── index.html
      ├── style.css
      └── main.js
├── index.html        # Structure de la page
├── style.css         # Mise en page et couleurs des blocs
├── main.js         # Logique JavaScript du projet
└── README.md         # Fichier de documentation (celui-ci)
```

## 📦 Installation et test

Aucun serveur nécessaire. Il suffit de :

1. Télécharger ou cloner le projet :

```bash
git clone https://github.com/MathGg1234/DominanteColor.git
```

2. Ouvrir le fichier `index.html` dans un navigateur moderne (Chrome, Firefox, etc).

## 🛠 Technologies utilisées

- HTML5
- CSS3
- JavaScript Vanilla (pur, sans framework)

## ✏️ Auteur

Développé par [@MathGg1234](https://github.com/MathGg1234) 🇫🇷  
Projet réalisé à titre d’exercice pédagogique.

## 📄 Licence

Ce projet est libre de droit pour un usage éducatif et personnel.
