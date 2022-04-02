const express = require('express')
const router = express.Router()
const departamentsJSON = require('../../json/departaments.json')

/* REQUEST HTTP API RESTFUL */

/* Endpoint: http://localhost:4000/api/v1/departaments */
router.get('/', (req, res) => {
  res.json(departamentsJSON)
})

/* 0. Consultar los departamentos que tienen un nombre con más de 8 caracteres */
/* Endpoint: http://localhost:4000/api/v1/departaments/name/punto0 */
router.get('/name/punto0', (req, res) => {
  const departamentsName = departamentsJSON.filter(
    (departament) => { return departament['departamento'].length > "8"; }
  )
  res.json(departamentsName);
});

/* 1. Mostrar departamentos cuyo código dane es mayor a 15 y menor a 20 */
/* Endpoint: http://localhost:4000/api/v1/departaments/codigo/punto1 */
router.get('/codigo/punto1', (req, res) => {
  const departamentsName = departamentsJSON.filter(
    (departament) => { return parseInt(departament['c_digo_dane_del_departamento']) > 15 &&
                              parseInt(departament['c_digo_dane_del_departamento']) < 20; }
  )
  res.json(departamentsName);
});

/* 2. Dependiendo del código (codigo_dane) del departamento que el usuario ingrese como parametro en la URI,
cargar todos los municipios de ese departamento */
/* Endpoint: http://localhost:4000/api/v1/departaments/[departamento_codigo] */

router.get('/:departamentId', (req, res) => {
  const {departamentId} = req.params
  const departaments_municipalities = departamentsJSON.filter(
    (departament) => departament['c_digo_dane_del_departamento'] === departamentId
  )
  res.json(departaments_municipalities)
});

/* 3. El usuario ingresa como parametro opcional el municipio que desea consultar de
lo contrario por defecto se cargan los municipios de caldas */
/* Endpoint: http://localhost:4000/api/v1/departaments/punto3/municipio */
/* Endpoint: http://localhost:4000/api/v1/departaments/punto3/municipio?municipioId=5001 */
router.get('/punto3/municipio', (req, res) => {

  const {municipioId} = req.query;

  if (municipioId){
    const municipio = departamentsJSON.filter(
      (departament) => { return departament['c_digo_dane_del_municipio'] === municipioId; }
    )
    res.json(municipio)
  }
  else{
    const municipiosCaldas = departamentsJSON.filter(
      (departament) => departament['departamento'] === "Caldas"
          );
      res.json(municipiosCaldas)
  }
});



/*4.Mostrar todos los departamentos cuyo nombre inicia por la letra C */
/* Endpoint: http://localhost:4000/api/v1/departaments/name/punto4 */
router.get('/name/punto4', (req, res) => {
  const departamentsName = departamentsJSON.filter(
    (departament) => { return departament['departamento'].charAt(0) === "C"; }
  )
  res.json(departamentsName);
});



module.exports = router