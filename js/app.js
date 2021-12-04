    setInterval(()=>{
        let time = new Date(),
        hours = document.querySelector('#hours');


        let hour = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

        if(hour<10) hour = '0' + hour;
        if(minutes<10) minutes = '0' + minutes;
        if(seconds<10) seconds = '0' + seconds;


        hours.innerHTML = `${hour}:${minutes}:${seconds}`;
    },100);

    var btn= document.getElementById('btnluz'),
    white= document.getElementById('white'),
    contador = 0;

    function cambio(){
        if(contador == 0){
            white.classList.add('blanco');
            contador=1;
        }else{
            white.classList.remove('blanco');
            contador=0;
        }
    }
    btn.addEventListener('click',cambio,true)