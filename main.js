$(document).ready(function () {

    $('#input-telefone').mask('(00) 00000-0000');

    $('#id-formulario').validate({

        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },

        messages: {
            nome: 'Forneça o seu nome',
            email: {
                required: 'Forneça o seu e-mail',
                email: 'Digite um e-mail válido'
            },
            mensagem: 'Escreva sua mensagem'
        },

        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!');

            // Limpar os campos
            $('#input-nome').val('');
            $('#input-email').val('');
            $('#input-telefone').val('');
            $('#input-mensagem').val('');
        },

    });
});
