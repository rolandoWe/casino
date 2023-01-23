var images = [
    // "imagenes/banana.png",
    //  "imagenes/fresa.png",
    "imagenes/corona.png",
    "imagenes/bonus.png",
    //    "imagenes/sandia.png",
    "imagenes/siete.png",
    //  "imagenes/cuatro.png",
    //  "imagenes/casino.jpg",
    "imagenes/jungla.png",
    //  "imagenes/ruleta.png",
    "imagenes/uvasCasino.png"];
let monto = 100
let monto2 = 0

let saldo = document.querySelector('.saldo')
let recompensa = document.querySelector(".recomp")
let ganaste = document.querySelector(".inp_gana")


function iniciar() {
    var imageDivs = document.querySelectorAll("div[id^='image']");
    for (var i = 0; i < imageDivs.length; i++) {
        var randomIndex = Math.floor(Math.random() * images.length);
        imageDivs[i].innerHTML = "<img src='" + images[randomIndex] + "'>";
    }
}
iniciar()


// Jugar
function jugar() {
    saldo.value = monto;
    var imageDivs = document.querySelectorAll("div[id^='image']");
    for (var i = 0; i < imageDivs.length; i++) {
        var randomIndex = Math.floor(Math.random() * images.length);
        imageDivs[i].innerHTML = "<img src='" + images[randomIndex] + "'>";
    }
    setTimeout(function () {
        getImageSource()
    }, 7000)
    rodar()
}
// jugar()

function getImageSource() {
    // Obtener el div con la clase específica
    var div1 = document.getElementsByClassName("im1")[0];
    var div2 = document.getElementsByClassName("im2")[0];
    var div3 = document.getElementsByClassName("im3")[0];

    // Obtener la imagen dentro del div
    var img1 = div1.getElementsByTagName("img")[0];
    var img2 = div2.getElementsByTagName("img")[0];
    var img3 = div3.getElementsByTagName("img")[0];

    // Obtener el valor del atributo "src" de la imagen
    var src1 = img1.getAttribute("src");
    var src2 = img2.getAttribute("src");
    var src3 = img3.getAttribute("src");
    // console.log(src1)
    // console.log(src2)
    // console.log(src3)
    evaluarBonus(src1, src2, src3)

}

function rodar() {
    let rul1 = document.querySelector('.rule1')
    let rul2 = document.querySelector('.rule2')
    let rul3 = document.querySelector('.rule3')
    if (rul1.className == 'rule rule1 jugar') {
        rul1.classList.remove('jugar')
        setTimeout(function () {
            rul1.classList.add('jugar')
        }, 100)
    } else {
        setTimeout(function () {
            rul1.classList.add('jugar')
        }, 100)
    }
    if (rul2.className == 'rule rule2 jugar') {
        rul2.classList.remove('jugar')
        setTimeout(function () {
            rul2.classList.add('jugar')
        }, 2000)
    } else {
        setTimeout(function () {
            rul2.classList.add('jugar')
        }, 2000)
    }
    if (rul3.className == 'rule rule3 jugar') {
        rul3.classList.remove('jugar')
        setTimeout(function () {
            rul3.classList.add('jugar')
        }, 4000)
    } else {
        setTimeout(function () {
            rul3.classList.add('jugar')
        }, 4000)
    }
}

// Aqui evaluamos las imagenes y sus posiciones para dar bonus
function agregarBonus(recompensa) {
    let gane = new Audio('imagenes/tragaperras-tragamonedas 1.mp3');

    const sonido = setInterval(() => {
        gane.play()
       }, 100);

    const intervalId = setInterval(() => {
        if (recompensa.value > 0) {
            recompensa.value -= 5;
            saldo.value = monto += 5;
            ganaste.value = monto2 += 5

        } else {
            clearInterval(intervalId);
            clearInterval(sonido);

        }
    }, 100);



}
function evaluarBonus(src1, src2, src3) {
    if (src1 == 'imagenes/uvasCasino.png' && src2 == 'imagenes/bonus.png' &&
        src3 == 'imagenes/uvasCasino.png') {
        recompensa.value = 50
        agregarBonus(recompensa)

        ganando()

    }
    if (src1 == 'imagenes/bonus.png' && src2 == 'imagenes/siete.png' &&
        src3 == 'imagenes/bonus.png') {
        // monto=monto+5;
        // saldo.value=monto
        recompensa.value = 5
        agregarBonus(recompensa)

        // console.log('casino')
        // slowAdd(monto,nuevoMonto)

        ganando()
    }
    if (src1 == 'imagenes/siete.png' && src2 == 'imagenes/jungla.png' &&
        src3 == 'imagenes/siete.png') {
        // monto=monto+5;
        // saldo.value=monto
        recompensa.value = 5
        agregarBonus(recompensa)


        ganando()
    }
    if (src1 == 'imagenes/jungla.png' && src2 == 'imagenes/bonus.png' &&
        src3 == 'imagenes/jungla.png') {
        // monto=monto+10;
        // saldo.value=monto
        recompensa.value = 10

        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/siete.png' && src2 == 'imagenes/siete.png' &&
        src3 == 'imagenes/siete.png') {
        // monto=monto+20;
        // saldo.value=monto
        recompensa.value = 20
        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/uvasCasino.png' && src2 == 'imagenes/uvasCasino.png' &&
        src3 == 'imagenes/uvasCasino.png') {
        // monto=monto+20;
        // saldo.value=monto
        recompensa.value = 20
        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/jungla.png' && src2 == 'imagenes/jungla.png' &&
        src3 == 'imagenes/jungla.png') {
        // monto=monto+50;
        // saldo.value=monto
        recompensa.value = 50
        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/bonus.png' && src2 == 'imagenes/bonus.png' &&
        src3 == 'imagenes/bonus.png') {
        // monto=monto+500;
        // saldo.value=monto
        recompensa.value = 500
        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/bonus.png' && src2 == 'imagenes/jungla.png' &&
        src3 == 'imagenes/bonus.png') {
        // monto=monto+200;
        // saldo.value=monto
        recompensa.value = 200
        agregarBonus(recompensa)
        ganando()
    }
    if (src1 == 'imagenes/jungla.png' && src2 == 'imagenes/uvasCasino.png' &&
        src3 == 'imagenes/jungla.png') {
        // monto=monto+200;
        // saldo.value=monto
        recompensa.value = 200
        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/bonus.png' && src2 == 'imagenes/uvasCasino.png' &&
        src3 == 'imagenes/bonus.png') {
        // monto=monto+100;
        // saldo.value=monto
        recompensa.value = '+' + 100
        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/bonus.png' && src2 == 'imagenes/corona.png' &&
        src3 == 'imagenes/bonus.png') {
        // monto=monto+1000;
        // saldo.value=monto
        recompensa.value = 1000
        agregarBonus(recompensa)

        ganando()
    }
    if (src1 == 'imagenes/corona.png' && src2 == 'imagenes/corona.png' &&
        src3 == 'imagenes/corona.png') {
        // monto=monto+1000;
        // saldo.value=monto
        recompensa.value = 2000
        agregarBonus(recompensa)

        ganando()
    }
}

function playAudio() {
    document.querySelector('.dolar').classList.remove('animarDolar')
    // document.querySelector('.dolar').classList.add('animarDolar')
    document.querySelector('.im1').classList.remove('animarIm')
    document.querySelector('.im2').classList.remove('animarIm')
    document.querySelector('.im3').classList.remove('animarIm')
    document.querySelector('.extra').classList.remove('animarIm')

    var audio = new Audio("imagenes/blackjack_1.mp3");
    audio.play();
    var audio2 = new Audio("imagenes/tragaperras-tragamonedas 5.mp3");
    audio2.play();
    setTimeout(function () {
        audio2.pause()

    }, 6000)
}
function ganando() {
    document.querySelector('.dolar').classList.add('animarDolar')
    document.querySelector('.im1').classList.add('animarIm')
    document.querySelector('.im2').classList.add('animarIm')
    document.querySelector('.im3').classList.add('animarIm')
    // document.querySelector('.extra').classList.add('animarIm')
}
// 
document.querySelector('.no').addEventListener('click', function () {
    document.querySelector('.mensaje').classList.remove('ver_mensaje')
})
document.querySelector('.si').addEventListener('click', function () {
    window.location = 'index.html'
})
document.querySelector('.inf1').addEventListener('click', function () {
    document.querySelector('.indic').classList.add('ver_indic')

})
document.querySelector('.inf2').addEventListener('click', function () {
    document.querySelector('.indic2').classList.add('ver_indic')

})
document.querySelector('.x_indic1').addEventListener('click', function () {
    document.querySelector('.indic').classList.remove('ver_indic')

})
document.querySelector('.x_indic2').addEventListener('click', function () {
    console.log('indic')
    document.querySelector('.indic2').classList.remove('ver_indic')

})


function animarLetras() {
    let letras = document.querySelectorAll('.letras')

    for (let i = 0; i < letras.length; i++) {
        let seg = [i] / 100 + 5
        letras[i].style.animation = 'ani ' + seg + 's infinite'
    }
}
animarLetras()



document.getElementById("showImages").addEventListener("click", function () {
    // monto=monto
    // saldo.value=monto+5;
    // console.log(monto)
    recompensa.value = 0
    monto2 = 0;
    ganaste.value = ''
    let s = monto -= 5;
    // console.log(s)

    saldo.value = s
    if (saldo.value >= 0) {
        // saldo.value=0
        playAudio()
        jugar()
    } else {
        saldo.value = 0;
        document.querySelector('.mensaje').classList.add('ver_mensaje')
    }
});
