const jwt = require("jwt-simple");
const moment = require("moment");
const SECRET_KEY = "pon-tu-propia-clave-2022";

/* Función para crear el token de acceso*/
exports.createAccessWithToken = (user) => {
    /*  En esta parte se trabaja de forma segura, la identidad de un
        determinado usuario con una serie de claims o privilegios.
        Estos privilegios estan codificados en objetos de tipo JSON,
        que se incrustan dentro del payload o cuerpo de un mensaje 
        firmado digitalmente. */

    const payload = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        /* la fecha de expiracion del token sera 12 horas despues */
        expiration_date: moment().add(12, "hours").unix(),
    };
    return jwt.encode(payload, SECRET_KEY);
};
exports.createRefreshToken = (user) => {

    const payload = {
        id: user._id,
        expiration_date: moment().add(30, "days").unix(),
    };
    return jwt.encode(payload, SECRET_KEY);
};

/* Funcion que descodifica cualquiera de los dos tokens */
exports.decodedToken = (token)=>{
    return jwt.decode(token, SECRET_KEY, true)
}