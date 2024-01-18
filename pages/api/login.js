import connectToDatabase from "../../src/database/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();

      const { email, password } = req.body;

      const User = require("../../src/database/models/User").default;

      // Recherchez l'utilisateur par email
      const user = await User.findOne({ email });

      if (user) {
        // Vérifiez le mot de passe haché
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // Connexion réussie
          res.status(200).json({ success: true });
        } else {
          // Mot de passe incorrect
          res.status(401).json({ success: false });
        }
      } else {
        // Utilisateur non trouvé
        res.status(401).json({ success: false });
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
