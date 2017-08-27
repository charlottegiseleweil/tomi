

function main(){

  console.log('im loaded');

    $("#jetaime").click( function()
           {
             swal({
              text:"Je t'aime",
              confirmButtonText: "D'accord"
              });
           }
    );

    $("#macklemore").click( function()
           {
             swal(text:"Je t'aime",
              confirmButtonText: "D'accord");
           }
    );



    $("#chat").click( function()
           {
             swal(text:"T'es un chat",
             confirmButtonText: "Encore",
             showCancelButton: true,
             cancelButtonText: "D'accord",
             confirmButtonColor: '#7h5r4d3',
             cancelButtonColor: '#d33',
             ).then(function () {
                swal(
                'Toujours un chat',
                'success'
                );
           }
    );

    $("#soccupe").click( function()
           {
             swal(text:"Si Charlilie est malade",
             confirmButtonText: "Je s'occupe",
             showCancelButton: true,
             cancelButtonText: "Je s'occupe pas",
             confirmButtonColor: '#ff99ff',
             cancelButtonColor: '#6600ff',
             ).then(function () {
                swal(
                "T'es un chat !",
                'success'
                );
           }
    );

    $("#soccupe2").click( function()
           {
             swal(text:"Si Charlilie est triste",
             confirmButtonText: "Je s'occupe",
             showCancelButton: true,
             cancelButtonText: "Je s'occupe pas",
             confirmButtonColor: '#cc9900',
             cancelButtonColor: '#3333cc',
             ).then(function () {
                swal(
                "T'es un trop fort chéri",
                'success'
                );
           }
    );


    $("#kdo").click( function()
           {
             swal({
                title: "LSD",
                text: "LSD : Lunettes Supersoniques Delambiance \n Et on dirait que tu as une petite boucle d'oreille aussi avec le tshirt du guy behind",
                imageUrl: 'https://unsplash.it/400/200', //TOCHANGE TO img/red.jpg
                imageWidth: 400,
                imageHeight: 200,
                animation: false
            });
           }
    );

    $("#burning").click( function()
           {
             swal({
                title: "The people I'm camping with",
                text: 'Camp SPF 2016',
                imageUrl: 'https://unsplash.it/400/200', //TOCHANGE TO img/Camp-Photo-2016.jpg
                imageWidth: 400,
                imageHeight: 200,
                animation: false
            });
           }
    );

    $("#tree").click( function()
           {
             swal({
                title: "Kippa!",
                text: 'Weird angle photo aussi',
                imageUrl: 'https://unsplash.it/400/200', //TOCHANGE TO img/kippa.jpg
                imageWidth: 400,
                imageHeight: 200,
                animation: false
            });
           }
    );


    $("#coeur").click( function()
           {
             swal(text:"Je t'aime",
              confirmButtonText: "D'accord");
           }
    );


  };
