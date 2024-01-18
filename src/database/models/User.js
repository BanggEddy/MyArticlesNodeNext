import mongoose from "mongoose";

const modelName = "User";

let User;

try {
  User = mongoose.model(modelName);
} catch (e) {
  const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  });

  User = mongoose.model(modelName, userSchema);
}

export default User;
