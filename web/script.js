const formulario = document.getElementById('alta');
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); //evita que se recargue la pag cuando enviamos el formulario

    //tomo los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let salario = document.getElementById('salario').value;

    //creo un objeto con los valores del formulario
    let datos = {
        nombreEmpleado : nombre,
        salarioEmpleado : salario
    }

    //Convierto el objeto en Json
    let datosJson = JSON.stringify(datos);
    // console.log(datosJson)

    //Mandar el Json al backend y guardarlos
    fetch('http://localhost:3000/admin', {
        method : 'post',
        body: datosJson
    })
})

// Mostrar emmpleados directamente cuando acceso a index.html
function mostrarEmpleados(data){
    let datosEmpleados = '<table border="1"><tr><th>EMPLEADO</th><th>SALARIO</th><th>EDITAR</th><th>ELIMINAR</th></tr>'
    // console.log(data[0].Name)
    for(let i=0; i<data.length; i++){
        datosEmpleados += `<tr><td>${data[i].Name}</td><td>${data[i].Salary}</td><td><button class="editar">editar</button></td><td><button class="borrar">borrar</button></td></tr>`
    }
    datosEmpleados += '</table>'
    document.querySelector('#empleados').innerHTML=datosEmpleados
}


const getEmplados = async() => {
    try{
        await fetch('http://localhost:3000/admin', {
            method : 'get',
        })
        .then(res => res.json())
        // .then(data => console.log(data[0].nombreEmpleado))
        .then(data => mostrarEmpleados(data))
        }catch(error){
            console.log(error)
        } 
}

getEmplados()

// Actualizar empleados con el btn editar, envio id, consulto a la db los valores originales y los presento en un formulario para editar, envio e formulario con patch


