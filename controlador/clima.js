const axios = require('axios');

const apiKey = 'af9a93d235750db57625b94fbd2fcc3b';

const getClima = async(ciudad) => {
    try {
        const ciudadURI = encodeURI(ciudad);
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}`)
        return respuesta.data.main.temp; 
    } catch(error){
        console.log(error.data);
    }
    
}

module.exports = {
    getClima
};