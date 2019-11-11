 $(document).ready(function(){
    $("button").click(function(){
        var texto="";

        texto +=$("#caja").width() + "px" + "<br>";
        texto +=$("#caja").height() + "px" ;


        $("#detalles").html(texto);
    });
 });

/*-----------------------------------------------------------------------------------*/

 $(document).ready(function(){
    $("#boton").click(function(){
      var x= "El valor del atributo type es: "+ $("input").attr("type"); 
         $("#info").html(x);
    });
 });

 /*-----------------------------------------------------------------------------------*/

 $(document).ready(function(){
   $("#botonID").click(function(){
     var x= "El valor del atributo id es: "+ $("input").attr("id"); 
        $("#info").html(x);
   });
});

/*-----------------------------------------------------------------------------------*/


$(document).ready(function(){
   $("button").click(function(){
      $("input[type=text]").attr("id","codigo");  //cambia el id por "codigo"
   });
});

/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){
   $("#botonColor").click(function(){
      $("p").attr("id",function(p){
         return "p" + (p+1);
      });
   });
});

/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){
   $("#botonAdd").click(function(){
      $("p:first").css("color","red");
   });
});

$(document).ready(function(){
   $("#botonAdd").click(function(){
      $("p:last").css("color","blue");
   });
});


/*Creando una clase en css*/
$(document).ready(function(){
   $("#addClass").click(function(){
      $("p").addClass("nuevaClase");

   });
});


/*Con iteración explicita*/
$(document).ready(function(){
   $("#addClassI").click(function(){
      $("p").addClass(function(index){ /*se pasa una función que en ella pasa un parametro llamado indx*/
         return "miclase" +(index+1)
      })

   })
});

/*---------------------------------------*/

$(document).ready(function(){
   $("#remover").click(function(){
      $("p").removeClass();
   });
});




$(document).ready(function(){
   $("#add").click(function(){
     $("#cajas").addClass("miclases");
   });

   $("#remove").click(function(){
      $("#cajas").removeClass("miclases");
   });
});




/*---------------------------------------*/


$(document).ready(function(){
   $("#botonAtributo").click(function(){
      $("p").removeAttr("id");
   });

   $("#botonAtributo2").click(function(){
      $("p").removeAttr("class");
   });

   $("#botonAtributo3").click(function(){
      $("p").removeAttr("id class");
   });

});

$(document).ready(function(){
   $("#p11").dblclick(function(){
      $(this).hide();
    });

   $("#p22").dblclick(function(){
     alert("Hola");
   });

   $("#p33").dblclick(function(){
      $(this).hide(3000).show(1000);
    });

 });

 /*keydown*/

 $(document).ready(function(){
   $("input").keydown(function(){
      $(this).css("background-color","pink")
   });

   $("input[type=text]").keydown(function(){
      $(this).css("background-color","yellow")
   });
 });