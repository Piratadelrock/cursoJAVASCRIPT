'use strict';

$(document).ready(function(){
    
    /*
    ***********29.1 EVENTO CLICK*********
    */ 
    // obtenemos el id con # y le mandamos callback

    $('#btnmostrar').click(function()
    {
        // inyectar texto al parrafo
        $('#texto').show(1500);
        $('#texto').html('Acabas de pulsar el boton');
        

    });
    $('#btnocultar').click(function(){
        // ocultar texto con duracion ms
        $('#texto').hide(1500);
    });
    
    /*
        ***********EVENTO HOVER*********
    */ 
    //INYECTAR LO QUE QUEREMOS QUE MUESTRE
    
    $('#btnhover').html('PASA EL RATON');
    // SE PASA LA PRIMER FUNCION CUANDO PASAMOS EL RATON, LA SEGUNDA CUANDO LO SACAMOS

    $('#btnhover').hover(function(){
        $('#btnhover').html('SACA EL RATON');
        $('#textohover').show(500);
    },
    function(){
        $('#btnhover').html('PASA EL RATON');
        $('#textohover').hide(500);
    });

    /*
        ***********29.3 ADDCLASS Y REMOVECLASS*********
    */ 
    $('.parrafo').hover(function(){
        // este this es igual que $('.parrafo') haciendo referencia al elemento padre
        $(this).addClass('borde');
    },function(){
        $(this).removeClass('borde');
    });

    /*
        ***********29.4 EFECTO SLIDE*********
    */ 
    // 
    $('#slide').click(function(){
        // (duration, easing,complete)
        $('#txtslide').slideToggle(1000,'swing',function (){
            console.log('TERMINADO');
        });
    })
});