import db from "./db";
import jwt from "jsonwebtoken";

const authenticate = async (email, password) => {
  const user = await db.login(email, password);
  if (!user) {
    return { user: null, token: null };
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "", {
    expiresIn: "5m",
  });
  return { user: user.toObject(), token };
};

export default authenticate;
