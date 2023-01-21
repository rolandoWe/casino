
function dato(){
    let datos=new Date();
    let hora=datos.getHours()
    let minuto=datos.getMinutes()
    let dia=datos.getDay()
    let diaFecha=datos.getDate()
    let mes=datos.getMonth()
    let anio=datos.getFullYear()
    let am;
    if(hora==12){
        am='MD'
    }else if(hora>12){
        am='PM';
    }else if(hora==0){
    am='MN';
   }else{
        am='AM';
    };
    hora=hora>12? hora-12:hora;
    hora=hora==0?hora=12:hora
    minuto=minuto<10?'0'+minuto:minuto;

    let diaSemana=['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    diaHoy=diaSemana[dia];

    let meses=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    mesAct=meses[mes]

    document.querySelector('.am').innerHTML=am;
    document.querySelector('.mes_anio').innerHTML=mesAct+' '+ anio;
    document.querySelector('.dia').innerHTML=diaHoy+' '+ diaFecha;

    document.querySelector('.hora').innerHTML=hora+''+'<span class="puntos">:</span>'+''+minuto
}
setInterval(function(){
    dato()

},1000)

function punt(){
    document.querySelector('.puntos').classList.toggle('cli')
}
setInterval(function(){
    punt()

},2000)

document.querySelector('.inspi').addEventListener('click',function(){
    document.querySelector('.caja_demo').classList.toggle('ver_demo')
})
document.querySelector('.cerrar_demo').addEventListener('click',function(){
    document.querySelector('.caja_demo').classList.toggle('ver_demo')
})
