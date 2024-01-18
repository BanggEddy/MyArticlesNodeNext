import connectToDatabase from "../../src/database/db";
import User from "../../src/database/models/User";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();

      const { email, password, role } = req.body;

      // Utilise bcrypt pour hacher le mot de passe avant de l'enregistrer dans la base de données
      const hashedPassword = await bcrypt.hash(password, 10);

      // Création d'un nouvel utilisateur avec le mot de passe haché
      const newUser = new User({
        email,
        password: hashedPassword,
        role,
      });

      // Enregistrement de l'utilisateur dans la base de données
      await newUser.save();

      console.log("Utilisateur ajouté avec succès:", newUser);

      res.status(200).json({ message: "Utilisateur ajouté avec succès" });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", error);
      res
        .status(500)
        .json({ error: "Erreur serveur lors de l'ajout de l'utilisateur" });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
