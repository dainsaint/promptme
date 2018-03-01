Sugar.extend();

$(document).ready( function(){


    var img = "https://picsum.photos/1600/1900?random";


    $("#image-1").attr("src", "https://picsum.photos/1600/1900?random" );
    $("#image-2").attr("src", "http://lorempixel.com/1600/1900/" );



    appendRandomWord();
    appendRandomWord();
    appendRandomWord();



        // var quoteUrl = "https://api.forismatic.com/api/1.0/"

        var quoteUrl = "https://talaikis.com/api/quotes/random/";

        $.get( quoteUrl )
            .then( (data) => {
                // var d = data.shift();
                $("#quoteText").html( data.quote );
                $("#quoteAuthor").html( data.author);

            });

})


function appendRandomWord()
{
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    $.get( "https://api.datamuse.com/sug?s=" + alphabet[ Number.random(0,26) ] )
        .then( (data) => {

            data.shift();
            var d = data.sample();
            var html = $("#wordText").html();
            html += d.word + " " ;
            $("#wordText").html( html );
        });
}
