const {database} = require('../../services/database');
var errorMsg = {error: true, mensaje: "ERROR_BASE_DATOS"}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

//Obtener datos del usuario basado en el UID de Firebase

exports.getUser = (req, res) => {
  var user = res.locals.user;

//Comprobamos si se ha recibido un Identificador, de lo contrario devolver un error
  
  if(isEmpty(user)) {
res.status(401).json({
  error: true,
  mensaje: "USUARIO_NO_VALIDO"
})
}
  else {
    
  }

    };