# MyArticle

## Description
MyArticle est une application web développée avec React et Next.js qui permet aux utilisateurs de se connecter, de consulter des articles et de se déconnecter. Les données des articles sont récupérées à partir de l'API Builder.io.

## Fonctionnalités
- Connexion sécurisée avec validation côté client et côté serveur.
- Récupération des articles à partir de l'API Builder.io.
- Permet à l'utilisateur de rester connecté en enregistrant un cookie. (Expérience utilisateur améliorée, Confort d'utilisation, Maintien de la session, Personnalisation de l'expérience)
- Déconnexion de l'utilisateur avec suppression du cookie.
- Intégration de conditions de validation pour les champs lors de la connexion et de l'authentification. (Sécurité, Conformité aux normes(CNIL, RGPD)) 

## Installation
1. Clonez ce dépôt : `git clone https://github.com/#/MyArticlesNodeNext.git`
2. Accédez au répertoire du projet : `cd MyArticlesNodeNext`
3. Installez les dépendances : `npm install`
4. Utilisez MongoDB Compass pour accéder à la base de données nommée "myarticles". Explorez la collection "users" qui contient les champs suivants : "email", "password", et "role". (L'utilisation de rôles dans MongoDB offre plusieurs avantages: Contrôle d'Accès, Principe du Moindre Privilège, Séparation des Responsabilité, Sécurité Globale)

## Utilisation
1. Lancez l'application en mode développement : `npm run dev`
2. Accédez à l'application dans votre navigateur : `http://localhost:3000`

## Structure du Projet
- `/pages` : Contient les pages Next.js.
- `/components` : Contient les composants réutilisables.
- `/api` : Contient les fichiers d'API pour la gestion de l'authentification.

##Libraires:
1. **axios :** Une librairie pour effectuer des requêtes HTTP depuis le navigateur ou Node.js.
2. **next-auth :** Une librairie pour gérer l'authentification dans les applications Next.js avec prise en charge de divers fournisseurs d'authentification.
3. **MongoDB Compass :** Un outil graphique pour explorer et interagir avec les bases de données MongoDB.
4. **bcrypt :** Une librairie de hachage de mot de passe sécurisée pour Node.js.
5. **next/router :** Un module pour la gestion des routes côté client dans les applications Next.js.
6. **next/link :** Un composant de liaison pour la navigation entre les pages dans les applications Next.js.
7. **mongoose :** Une bibliothèque ODM (Object Data Modeling) pour MongoDB et Node.js, facilitant l'interaction avec la base de données.

## Licence
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
