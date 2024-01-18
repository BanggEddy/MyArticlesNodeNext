import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSignUp = async () => {
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

      // Ajoutez le rôle "user" par défault
      await axios.post("/api/signup", { email, password, role: "user" });

      console.log("Utilisateur ajouté avec succès!");

      // Rediriger vers la page de connexion
      window.location.href = "/login";
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", error);
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <label className="label">Email:</label>
      <input
        className="input-field"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label className="label">Password:</label>
      <input
        className="input-field"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /> <br />
      <button className="button signupButton" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignIn;
