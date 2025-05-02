const permit = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user;
    if (user && allowedRoles.includes(user.role)) {
      next();
    } else {
      return res.status(403).json({ error: "Forbidden: insufficient rights" });
    }
  };
};

module.exports = permit;
