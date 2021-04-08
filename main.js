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
    
});
