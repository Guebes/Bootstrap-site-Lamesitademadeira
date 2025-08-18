$(document).ready(function () {

    $('#input-telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#id-formulario').validate({


        rules:{


            telefone:{

                required: true,
                minlength: 14  
            }
        }
    })

})
