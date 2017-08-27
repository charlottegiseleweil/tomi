

function main(){


    $("#jetaime").click( function()
           {
             swal({
              text:"Je t'aime",
              confirmButtonText: "D'accord"
              });
           }
    );

    $("#daystill").click( function()
           {
             swal({title:"Je te retrouve dans combien de temps?",
              text:'Coche la petite case pour le savoir!',
              confirmButtonText: 'Pouce en haut'
              });
           }
    );

    $("#tree").click( function()
           {
             swal({
                title: "Kippa!",
                text: 'Weird angle photo aussi',
                confirmButtonText: "On est beaux",
                imageUrl: 'img/kippa.jpg', 
                animation: false
            });
           }
    );

    $("#burning").click( function()
           {
             swal({
                title: "The people I'm camping with",
                text: 'Camp SPF 2016',
                confirmButtonText: "Toutvabienilsontl'aircool",
                imageUrl: 'img/Camp-Photo-2016.jpg', 
                animation: false
            });
           }
    );

   $("#kdo").click( function()
           {
             swal({
                title: "LSD",
                confirmButtonText: "Cool",
                text: "LSD : Lunettes Supersoniques Delambiance \n Et on dirait que tu as une petite boucle d'oreille aussi avec le tshirt du guy behind",
                imageUrl: 'img/red.jpg', 
                animation: false
            });
           }
    );

    $("#coeur").click( function()
           {
             swal({text:"Je t'aime mon coeur",
              confirmButtonText: "D'accord",
              showCancelButton: true,
              cancelButtonText: "Moi aussi",
              confirmButtonColor: '#cc7900',
              cancelButtonColor: '#13f73c'});
           }
    );

    $("#chat").click( function()
           {
              swal({
            title: "T'es un chat",
            showCancelButton: true,
            cancelButtonText: "D'accord",
            confirmButtonText: "Encore",
            confirmButtonColor: '#7h5r4d3',
            cancelButtonColor: '#9p5r8d3',
                }).then(function () {
              swal(
                'Toujours un chat',
                'Super !',
                'success'
                )
              })
            }
          );


    $("#soccupe").click( function()
           {
             swal({
              text:"Si Charlilie est malade",
              confirmButtonText: "Je s'occupe",
              showCancelButton: true,
              cancelButtonText: "Je s'occupe pas",
              confirmButtonColor: '#ff99ff',
              cancelButtonColor: '#6600ff',
             }).then(function () {
                swal(
                "T'es un chat !"
                )
           })
        });


     $("#soccupe2").click( function()
           {
             swal({
              text:"Si Charlilie est triste",
              confirmButtonText: "Je s'occupe",
              showCancelButton: true,
              cancelButtonText: "Je s'occupe pas",
              confirmButtonColor: '#cc9900',
              cancelButtonColor: '#3333cc',
             }).then(function () {
                swal(
                "T'es un trop fort chéri !"
                )
           })
        });


  };
