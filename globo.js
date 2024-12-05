window.onload = function () {

    const $cuadro = $("#cuadro");
    const cuadroWidth = $cuadro.width();
    const cuadroHeight = $cuadro.height();

    const globos = [];

    var puntos = 0;

    crearGlobos();

    $('.globoRojo').click(function(){
        puntos = puntos + 1;
        $("#puntos").html(puntos);
        $(this).remove();
    })

    $(".globoAzul").click(function(){
        puntos = puntos + 2;
        $("#puntos").html(puntos);
        $(this).remove();
    })

    $(".globoAmarillo").click(function(){
        puntos = puntos + 3;
        $("#puntos").html(puntos);
        $(this).remove();
    })

    $(".globoVerde").click(function(){
        puntos = puntos + 4;
        $("#puntos").html(puntos);
        $(this).remove();
    })

    $(".globoMorado").click(function(){
        puntos = puntos + 5;
        $("#puntos").html(puntos);
        $(this).remove();
    })

    function crearGlobos(){
        const colores = ["Rojo", "Azul", "Amarillo", "Verde", "Morado"];

        for (let i = 0; i < colores.length; i++) {

            const claseActual = "globo" + colores[i];

            for(let j = 0; j< 4; j++){
                const globo = $("<div></div>").addClass("globo").addClass(claseActual);
                const cuerda = $("<div></div>").addClass("cuerda");
                globo.append(cuerda);
                $('#cuadro').append(globo);
            }
        }
    }


    $('.globo').each(function(){
        

        const $globo = $(this);
        const globoWidth = $globo.width();
        const globoHeight = $globo.height();

        const randomLeft = Math.random() * (cuadroWidth - globoWidth);
        const randomTop = Math.random() * (cuadroHeight - globoHeight);

        const globo = {
            element: $globo,
            left: randomLeft,
            top: randomTop,
            directionX: Math.random() < 0.5 ? 1 : -1,
            directionY: Math.random() < 0.5 ? 1 : -1,
            speed: 5,
            width: globoWidth,
            height: globoHeight
        }

        globos.push(globo);

        $globo.css({
            left: globo.left + "px",
            top: globo.top + "px"
        });


    });

    function moveGlobos(){

        globos.forEach(globo =>{

            globo.left += globo.directionX * globo.speed;
            globo.top += globo.directionY * globo.speed;


            if(globo.left <= 0 || globo.left + globo.width >= cuadroWidth){
                globo.directionX *= -1;
            }

            if(globo.top <= 0 || globo.top + globo.height >= cuadroHeight){
                globo.directionY *= -1;
            }


            globo.element.css({
                left: globo.left + "px",
                top: globo.top + "px"
            })

        })
        
    }

    setInterval(moveGlobos, 30);

}