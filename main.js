$(document).ready(function () {
    console.log("ready!");

    $.validator.addMethod("customemail",
        function (value, element) {
            return /^\w+([-+.']\w+)@\w+([-.]\w+)\.\w+([-.]\w+)*$/.test(value);
        },
        "Ingresá una dirección de email"
    );

    $("#main_form").validate({

        rules: {
            "nombre": {
                required: true
            },
            "email": {
                required: {
                    depends: function () {
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                customemail: true
            },
            "sexo": {
                required: true
            },
            "comentarios": {
                required: true
            }
        },
        messages: {

            "nombre": "Enter a valid name",
            "email": "Enter a valid E-Mail",
            "sexo": "Select an option",
            "comentarios": "Enter a valid text"

        }
    })

    const loadLeads = () => {
        $.ajax({
            url: 'https://prog-3-leads-api-rest.vercel.app/leads',
            type: 'GET',
            success: function (response) {
                $('#listado').html('');
                console.log(response)
                response.forEach(element =>{
                    $('#listado').append('<li>' + element.nombre + ' - ' + element.sexo + ' - ' + element.comentarios +'</li>')
                });
            }
        })
    }
    loadLeads();
    
    const alumnos = [
        { nombre: 'Sofia Bonavena', edad: 23 },
        { nombre: 'Micaela Fernandez', edad: 22 },
        { nombre:  'Giuliano Giovanola', edad: 20 },
        { nombre: 'Lautaro Hudson', edad: 19 },
        { nombre: 'Alejandro Nieco', edad: 22 },
        { nombre: 'Micaela Orfali', edad: 24 },
        { nombre: 'Pedro Balza', edad: 26 },
        { nombre: 'Leandro Amaro', edad: 35 },
        { nombre: 'Alva Ramírez', edad: 27 },
        { nombre: 'Diego Salischiker', edad: 29 },
        ]
        
    // 1. Obtener un array de strings con solo nombres de cada alumno usando .map()
    
    const cadaAlumno = alumnos.map(cadanombre => {
        return cadanombre.nombre; // Al principio habia puesto $(nombre) y no me funcionaba
    })
    console.log("Cada alumno es" , cadaAlumno)

    // 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()
 
    const alumnosMayoresDe25 = alumnos.filter ((mayores) => {
        return mayores.edad > 25
    })
    console.log("Los alumnos mayores a 25 son" , alumnosMayoresDe25)

    // 3. Obtener un entero con la edad total de todos los alumnos usando .reduce()  

    const edades = [23, 22, 20, 19, 22, 24, 26, 35, 27, 29] // No se si esta bien ya que escribi los numeros "a mano"
    const edadtotal = edades.reduce( (a,b) => a + b )
    console.log("La edad total de los alumnos es" , edadtotal)  

    // 4. Obtener en una constante la edad de "Micaela Orfali" usando .find

    const elAlumno = alumnos.find((alumno)=>{
        return alumno.nombre === 'Micaela Orfali'
    })

    console.log("La edad de Micaela es", elAlumno)

    // 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
    // No entendi muy bien la consigna

    const { nombre, edad } = alumnos
    console.log(`Primer alumno es ${nombre}`) // Me dice undefined.

    // 6. Obtener un array con aquellos alumnos que empiezan con la letra "L", usando .filter()
    //https://lenguajejs.com/javascript/caracteristicas/array-functions/

    const arr = ["Sofia Bonavena", "Micaela Fernandez", "Giuliano Giovanola", "Lautaro Hudson", "Alejandro Nieco", "Micaela Orfali", "Pedro Balza", "Leandro Amaro", "Alva Ramírez", "Diego Salischiker"];
    const nuevoArr = arr.filter((e) => e[0] == "L");

    console.log("Los alumnos con letra L son" , nuevoArr)

    // 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la
    // misma por el total de alumnos

    console.log("La edad promedio es" , edadtotal / edades.length);


});
