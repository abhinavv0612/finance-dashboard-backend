export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.headers["x-user-role"];

    if (!userRole) {
      return res.status(401).json({
        error: "No role provided",
      });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        error: "Access denied",
      });
    }

    next();
  };
};