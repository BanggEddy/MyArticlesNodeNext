import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignin = () => {
    router.push("/signin");
  };
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const userLoggedIn = Cookies.get("userLoggedIn");

      const rememberMePressed =
        localStorage.getItem("rememberMePressed") === "true";

      if (userLoggedIn || rememberMePressed) {
        console.log("Redirection vers /articles");
        router.push("/articles");
      }
    };

    // Check user login status on component mount
    checkUserLoggedIn();
  }, [router]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  const handleLogin = async () => {
    try {
      if (!validateEmail(email)) {
        alert("Format de l'email invalide");
        return;
      }

      if (!validatePassword(password)) {
        alert(
          "Le mot de passe ne respecte pas les critères requis. Il doit contenir au moins 1 lettre minuscule, 1 lettre majuscule, 1 chiffre et 1 caractère spécial."
        );
        return;
      }

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Connexion réussie!");

        // Utilisation de js-cookie pour définir le cookie
        Cookies.set("userLoggedIn", true, { expires: 1 }); // Expire après 1 jours

        // Redirige toujours vers la page des articles après une connexion réussie
        router.push("/articles");
      } else {
        alert(
          "Échec de la connexion. Vérifiez vos informations d'identification."
        );
        console.log(
          "Échec de la connexion. Vérifiez vos informations d'identification."
        );
      }
    } catch (error) {
      console.error("Erreur lors de la tentative de connexion:", error);
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>

      <label className="label">Email:</label>
      <input
        className="input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label className="label">Password:</label>
      <input
        className="input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="button" onClick={handleLogin}>
        Login
      </button>
      <button className="button signupButton" onClick={handleSignin}>
        Signup
      </button>
    </div>
  );
};

export default Login;
