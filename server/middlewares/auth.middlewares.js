const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split("")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // contains userId
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
