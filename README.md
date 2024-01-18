# MyArticleSesame

## Description
MyArticleSesame est une application web développée avec React et Next.js qui permet aux utilisateurs de se connecter, de consulter des articles et de se déconnecter. Les données des articles sont récupérées à partir de l'API Builder.io.

## Fonctionnalités
- Connexion sécurisée avec validation côté client et côté serveur.
- Récupération des articles à partir de l'API Builder.io.
- Permet à l'utilisateur de rester connecté en enregistrant un cookie.
- Déconnexion de l'utilisateur avec suppression du cookie.
- Intégration de conditions de validation pour les champs lors de la connexion et de l'authentification.

## Installation
1. Clonez ce dépôt : `git clone https://github.com/#/MyArticlesNodeNext.git`
2. Accédez au répertoire du projet : `cd MyArticlesNodeNext`
3. Installez les dépendances : `npm install`
4. Utilisez MongoDB Compass pour accéder à la base de données nommée "myarticles". Explorez la collection "users" qui contient les champs suivants : "email", "password", et "role".

## Utilisation
1. Lancez l'application en mode développement : `npm run dev`
2. Accédez à l'application dans votre navigateur : `http://localhost:3000`

## Structure du Projet
- `/pages` : Contient les pages Next.js.
- `/components` : Contient les composants React réutilisables.
- `/api` : Contient les fichiers d'API pour la gestion de l'authentification.

## Dépendances
- React
- Next.js
- js-cookie

## Auteur
[Votre Nom]

## Licence
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
