Sugar.extend();

$(document).ready( function(){


    var img = "https://picsum.photos/1600/1900?random";

    //
    // $("#image-1")
    //     .attr("href", "https://picsum.photos/1600/1900?random" )
    //     .css( {backgroundImage: "url('https://picsum.photos/1600/1900?random')"});

    $("#image-2")
        .attr("href", "http://lorempixel.com/1600/1900/" )
        .css( {backgroundImage: "url('http://lorempixel.com/1600/1900/')"});





    var picsumUrl = "https://picsum.photos/list"

    var setImage = function( target, id )
    {
        var bigUrl = "https://picsum.photos/1600/1900?image=" + id;
        var smallUrl = "https://picsum.photos/800/950?image=" + id;

        $( target )
                .attr("href", bigUrl )
                .css( {backgroundImage: "url('"+smallUrl+"')"})
                .fadeIn();
    }

    var ids = ["#image-1", "#image-2"];

    $.get( picsumUrl )
        .then( data => {
            ids.forEach( id => setImage( id, data.sample().id ) );
        })


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
            if( html != "" )
                html += " &middot; ";

            html += d.word;

            $("#wordText").html( html );
        });
}
