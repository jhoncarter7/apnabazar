
import { errorHandler } from "./error";
import jwt from "jsonwebtoken";

export default function userVerify(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unathorized"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));
    req.user = user;
    next();
  });
}
