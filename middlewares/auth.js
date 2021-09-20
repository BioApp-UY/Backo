const {admin} = require('../services/fireadmin');


const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
  next();
};


 const checkAuth = (req, res, next) => {
 getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin
        .auth()
        .verifyIdToken(authToken);
      req.authId = userInfo.uid;
      res.locals.user = userInfo
      return next();
    } catch (e) {
      console.log(e)
      return res
        .status(401)
        .json({ error: true,
              mensaje: "USUARIO_NO_AUTENTICADO"});
    }
  });
};




module.exports = { checkAuth: checkAuth }