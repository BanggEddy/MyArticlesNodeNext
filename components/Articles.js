import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = () => {
      // Vérifie si l'utilisateur est considéré comme connecté
      const userLoggedIn = Cookies.get("userLoggedIn");

      // Récupére les cookies
      const rememberMePressed = Cookies.get("rememberMePressed");

      console.log("userLoggedIn:", userLoggedIn);
      console.log("rememberMePressed:", rememberMePressed);

      if (!userLoggedIn && !rememberMePressed) {
        // Redirige vers la page de connexion si l'utilisateur n'est pas connecté et "Se souvenir de moi" n'est pas activé
        router.push("/login");
      }
      if (!userLoggedIn || !rememberMePressed) {
        console.log("Accès à /login autorisé");
        return;
      }
    };

    // Vérifie l'état de connexion de l'utilisateur lors du montage du composant
    checkUserLoggedIn();

    // Fonction de récupération des articles
    const fetchData = async () => {
      try {
        // Appel à l'API pour récupérer les articles
        const response = await fetch();
        //En raison de sécurité je peux pas mettre l'URL parce qu'il y a la clé

        const data = await response.json();

        console.log("Données récupérées :", data);

        // Vérification que data.results est défini
        if (data.results && data.results.length > 0) {
          // Utilisation de flatMap pour extraire la liste des articles directement
          const articlesList = data.results.flatMap(
            (result) => result.data.articles
          );

          setArticles(articlesList);
        } else {
          console.error("Aucun résultat trouvé dans les données.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchData();
  }, [router]);

  console.log("Articles à afficher :", articles);

  const handleLogOff = () => {
    Cookies.remove("userLoggedIn");
    Cookies.remove("rememberMePressed");

    localStorage.removeItem("rememberMePressed");

    router.push("/login");
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-danger" onClick={handleLogOff}>
        Log Off
      </button>
      <div className="row mt-4">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <img
                src={article.article.image}
                alt={article.article.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">{article.article.title}</h2>
                <p className="card-text">{article.article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export du composant Articles
export default Articles;
