const rateLimit = require('express-rate-limit')

const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 15, // limit each IP to 15 requests per windowMs
    handler: function (req, res, /*next*/) {
        return res.status(429).json({
          error: true,
          mensaje: 'Has realizado demasiadas solicitudes. Vuelve a intentarlo más tarde.'
        })
    }
})

module.exports = apiRequestLimiter