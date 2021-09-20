exports.getMe = (_, res) => {
var user = res.locals.user

  return res.json({
  usuario: {
    id: user.user_id,
    nombre: user.name,
    pic: user.picture,
    email: user.email,
    metadata: {
      localidad: "RÍO BRANCO"
    },
    datos: {
      puntos: 0,
      suspendido: false
    },
    cupones: [],
    
    
    user
  }
});  
}