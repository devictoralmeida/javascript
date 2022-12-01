// USANDO ESTRUTURA DE REPETIÇÃO DO
function gerar() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var n = Number(num.value)
    if (num.value.length == 0) {
        alert('Por favor, preencha um número acima!')
    } else {
        var c = 1
        tab.innerHTML = ''
        do {
            var item = document.createElement('option')
            tab.appendChild(item)
            item.innerHTML = `${n} x ${c} = ${n * c}`
            c++
        } while (c <= 10)
    }
}

/*

USANDO ESTRUTURA DE REPETIÇÃO FOR

function gerar () {
    var num = document.getElementById('txtn')
    var tab = document.getElementById ('seltab')
    var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert ('Por favor, preencha um número acima!')
    } else {
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            tab.appendChild(item)
            item.innerHTML = `${n} x ${c} = ${n * c}`
        }
    }    
}

*/

/*

USANDO ESTRUTURA DE REPETIÇÃO WHILE

function gerar () {
    var num = document.getElementById ('txtn')
    var tab = document.getElementById ('seltab')
    var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item =  document.createElement ('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/
