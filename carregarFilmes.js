$(document).ready(function() {
    $('.button').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) {},
        onClose: function(el) {},
    });

    $.ajax({
        url: 'https://netflixroulette.net/api/api.php?director=Quentin%20Tarantino',
        crossDomain: true,
        success: function(result) {


            console.log(result); //Exibe os dados do Webservice em Json
            //Result é um array (vetor) [] com vários filmes

            //for (int i = 0; i < result.length; i++) {
            //    elemento = result[i];
            //}

            result.forEach(function(elemento) {
                //Para cada filme retornado do Webservice
                //Monta o HTML

                //Transforma o html em texto e coloca dentro da variárivel

                //PS: Alterar nomes dos campos elemento
                let htmlTexto = '<div class="row">' +
                    '<div class="col s12 teste">' +
                    '<div class="imagem left red">' +
                    '<img src="' + elemento.poster + '"/>' +
                    '</div>' +
                    '<div class="texto left">' +
                    '<div class="titulo">' + elemento.show_title + '</div>' +
                    '<div class="descricao">' + elemento.summary + '+</div></div>' +
                    '<a href="https://www.netflix.com/title/' + elemento.show_id + '">' +
                    '<div class="seta left"><i class="material-icons">chevron_right</i></div>' +
                    '</a></div></div>';

                //Injeto o HTML criado na página Web
                $("#lista").append(htmlTexto);

            }, this);






        }
    });


});