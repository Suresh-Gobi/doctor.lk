const ac = require('../Utils/roles');

const grantAccess = (action, resource) => {
  return async (req, res, next) => {
    try {
      const permission = ac.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(403).json({
          error: "You don't have enough permission to perform this action"
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { grantAccess };
