Sugar.extend();

$(document).ready( function(){


    var img = "https://picsum.photos/1600/1900?image=";


    $("#image-1").attr("src", img + Number.random(0,1000) );
    $("#image-2").attr("src", img + Number.random(0,1000) );

    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    $.get( "https://api.datamuse.com/sug?s=" + alphabet[ Number.random(0,26) ] )
        .then( (data) => {
            console.log(data);

            var d = data.sample();
            $("#wordText").html( d.word );

        });



            $.post( "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en" )
                .then( (data) => {

                    $("#quoteText").html( data.quoteText );

                });

})
