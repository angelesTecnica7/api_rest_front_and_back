const express = require('express')
const cors = require('cors')
const connectDB = require('./api/db.js');
require('ejs')

const app = express() //construye una aplicacion utilizando express

//setting
// const port = 3000
app.set('port', 3000)
app.set("view engine", "ejs");
app.set("views", "./views");

//  para recibir los request del front donde la url van a estar codificadas
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

app.use(express.static('web'))
//middleware para ver la ruta y el metodo de la peticion
app.use((req, res, next) => {
    console.log(`Ruta: ${req.url} - Metodo: ${req.method}`)
    next()
})

const agregarEmpleado = async (req, res, next) => {
    console.log(req.body)
    const {nombreEmpleado, salarioEmpleado} = req.body  
try{
    const conexion = await connectDB.getConexion()
    const [rows] = await conexion.query('INSERT INTO employees (Name, Salary) VALUES (?, ?)', [nombreEmpleado, salarioEmpleado])
    console.log('empleado registrado')
    //para recargar la pagina ???
    res.redirect('/admin');   
}catch (error){
    return res.status(500).json({
        message: 'Ocurrio un error'
    })
    }
}


const obtenerEmpleados = async(req, res) => {
    // res.send('Me estan pidiendo los datos de todos los empleados')
    try {
            const conexion = await connectDB.getConexion()
            const [rows] = await conexion.query('SELECT * FROM employees')
             if(rows.length <= 0) return res.send('No hay empleados')
             res.json(rows)
            // res.send(JSON.stringify(rows))
    }catch (error){
             return res.status(500).json({
                 message: 'Ocurrio un error'
             })
            }
    // res.send(JSON.stringify(datosEmpleados))
}

//routers
// Carga la página de inicio
app.get("/", (req, res) => {
    res.render("index", {});
  });

// app.post('/admin', agregarEmpleado)
app.post('/addNewEmployees', agregarEmpleado)
app.get('/admin', obtenerEmpleados)

// app.post('/addNewEmployees', (req, res) => {
//     console.log(req.body)
//     res.send('Aqui voy  a registrar un nuevo empleado')
// })


app.listen(app.get('port'), () =>{
    console.log(`Estoy ejecutandome en http://localhost:${app.get('port')}`)
})

