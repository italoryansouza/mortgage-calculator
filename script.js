let vmontante = document.querySelector('#montante')
let vtime = document.querySelector('#time')
let vtaxa = document.querySelector('#taxa')

let botaocalcular = document.querySelector('#calcular')

let divcom = document.querySelector('.complete')
let divnocom = document.querySelector('.nocomplete')

let divmon = document.querySelector('#valormontante')
let divju = document.querySelector('#valorjuros')

let limparlink = document.querySelector('#clear')

function calcular() {

    if (vmontante.value == false || vtime.value == false || vtaxa.value == false) {

        if (vmontante.value == false) {
            let borda = document.querySelector('#campomont')

            borda.style.borderColor = 'red';

        } else {
            let borda = document.querySelector('#campomont')

            borda.style.borderColor = 'rgba(30, 61, 109, 0.801)';
        }

        if (vtime.value == false) {
            let borda = document.querySelector('#campotime')

            borda.style.borderColor = 'red';
        } else {
            let borda = document.querySelector('#campotime')

            borda.style.borderColor = 'rgba(30, 61, 109, 0.801)';
        }

        if (vtaxa.value == false) {
            let borda = document.querySelector('#campotaxa')

            borda.style.borderColor = 'red';

        } else {
            let borda = document.querySelector('#campotaxa')

            borda.style.borderColor = 'rgba(30, 61, 109, 0.801)';
        }

        window.alert("Há um campo mal preenchido! Escreva corretamente para efetuar o cálculo.")

    } else {

        let borda = document.querySelectorAll('.ipcontainer')

        borda[0].style.borderColor = 'rgba(30, 61, 109, 0.801)';
        borda[1].style.borderColor = 'rgba(30, 61, 109, 0.801)';
        borda[2].style.borderColor = 'rgba(30, 61, 109, 0.801)';

        divnocom.style.display = 'none';
        divcom.style.display = 'flex';

        let juros = Number(vmontante.value) * Number(vtime.value) * (Number(vtaxa.value) / 100)

        let montante = (juros + Number(vmontante.value))

        divmon.innerHTML = `R$${montante}`
        divju.innerHTML = `R$${juros}`
    }
}

function limpar(){
    vmontante.value = ""
    vtaxa.value = ""
    vtime.value = ""
}

botaocalcular.addEventListener("click", calcular)
limparlink.addEventListener("click", limpar)