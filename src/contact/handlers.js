import { User } from "../models_methods/userMethods.js";

export const createNewUser = async (req, res) => {
  const user = await new User().createNewUser(
    req.body.name,
    req.body.email,
    req.body.phoneNumber,
    req.body.topic,
    req.body.message
  );

  if (user) {
    return res.status(200).json({ message: "User created successfully" });
  }

  return res.status(400).json({ message: "user creation un-successful" });
};
