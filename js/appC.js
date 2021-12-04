document.addEventListener("DOMContentLoaded",()=>{

    const $tiempoTranscurrido = document.querySelector("#tiempoTranscurrido"),
    $btnIniciar = document.querySelector("#btnIniciar"),
    $btnPausar = document.querySelector("#btnPausar"),
    $btnDetener = document.querySelector("#btnDetener");

    let idInterval,
    tiempoInicio = null;
    let diferenciaTemporal = 0;

    const agregarCeroSiEsNecesario = valor =>{
        if(valor < 10){
            return "0" + valor;
        }else{
            return "" + valor;
        }
    }

    const milisegundosAMinutosYSegundos = (milisegundos) =>{
        const minutos = parseInt(milisegundos / 1000 / 60);
        milisegundos -= minutos * 60 * 1000;
        segundos = (milisegundos / 1000);
        return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(1))}`;
    };

    const iniciar = ()=>{
        const  ahora =  new Date();
        tiempoInicio = new Date(ahora.getTime()- diferenciaTemporal);
        clearInterval(idInterval);
        idInterval =  setInterval(refrescarTiempo,100);

    };

    const pausar = ()=>{
        diferenciaTemporal = new Date()-tiempoInicio.getTime();
        clearInterval(idInterval);
    };

    const refrescarTiempo = ()=>{
        const ahora = new Date();
        const diferencia = ahora.getTime() - tiempoInicio.getTime();
        $tiempoTranscurrido.textContent = milisegundosAMinutosYSegundos(diferencia);
    };

    const detener = ()=>{
        if(!confirm("Detener")){
            return;
        }
        clearInterval(idInterval);
        init();
        diferenciaTemporal = 0;
    };

    const init = ()=>{
        $tiempoTranscurrido.textContent = "00:00.0";

    };
    init();

    $btnIniciar.onclick = iniciar;
    $btnPausar.onclick = pausar;
    $btnDetener.onclick = detener;

})