
    $(function(){
      //Categorías
      $('.filtro-cat a:first').addClass('activo');
      $('#apartamento').addClass('ocultar')
      $('#rancho').addClass('ocultar')
      $('.filtro-cat a').on('click', function(){
        $('.filtro-cat a').removeClass('activo');
        $('#apartamento').addClass('ocultar')
        $('#casa').addClass('ocultar')
        $('#rancho').addClass('ocultar')
        $(this).addClass('activo');
        $('.ocultar').hide();
        let enlace = $(this).attr('href');
        $(enlace).removeClass('ocultar');
        $(enlace).fadeIn(1000);
        return false; 
      });
    });

    // $(function(){
    //   //Filtros
    //   if($('.filtro-cat a:first').addClass('activo')){

    //   }

    //   $('.filtro-cat a:first').addClass('activo');
    //   $('#apartamento').addClass('ocultar')
    //   $('#rancho').addClass('ocultar')
    //   $('.filtro-cat a').on('click', function(){
    //     $('.filtro-cat a').removeClass('activo');
    //     $('#apartamento').addClass('ocultar')
    //     $('#casa').addClass('ocultar')
    //     $('#rancho').addClass('ocultar')
    //     $(this).addClass('activo');
    //     $('.ocultar').hide();
    //     let enlace = $(this).attr('href');
    //     $(enlace).removeClass('ocultar');
    //     $(enlace).fadeIn(1000);
    //     return false; 
    //   });
    // });

    $(document).ready(() => {

      $('#frmDatos').submit(function(evento) { 
          evento.preventDefault();

          let filt = ["Negocio", "Seguridad", "Baños", "Dormitorios", "Estacionamientos"]

          let opcion = new Array
          opcion[1] = $('#Negocio option:selected').val();
          opcion[2] = $('#Seguridad option:selected').val();
          opcion[3] = $('#Baños option:selected').val();
          opcion[4] = $('#Dormitorios option:selected').val();
          opcion[5] = $('#Estacionamientos option:selected').val();

          for( i = 0; i <= opcion.length; i++ ){
            if(opcion[i] !== filt[i]){
              // document.getElementById(opcion[i]).addClass('filtjs')
              console.log(opcion[i])
              console.log(filt[i])
            }
          }
          
          // if (opcion != 0) {
          //     $('#resultado').text(`Su lenguaje de programación favorito es: ${$('select option:selected').text()}`);
          // } else {
          //     $('.error').show();
          // }
        });
    });