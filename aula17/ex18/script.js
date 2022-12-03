var num = document.getElementById('txtn')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        alert('Adicione Valores antes de finalizar!')
    } else {
        var tot = valores.length
        var maior = valores[0] // Ele fez isso pq ao adicionar o 1º número, esse número será o maior e menor do array
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`
    }
}



























    /*
function adicionar() {
    var num = document.getElementById('txtn')
    var lista = document.getElementById('flista')
    var n = Number(num.value)
    var res = document.getElementById('res')
    var valores = []
    if (num.value.length == 0 || n == 0 || n > 100) {
        alert('Por favor, digite um número válido entre 0 à 100')
    } else {
        if (valores.indexOf(n) == -1) {
        var item = document.createElement('option')
        lista.appendChild(item)
        item.innerHTML = `Valor ${n} adicionado`
        valores.push(n)
        } else {
            alert('Esse valor já foi adicionado')
        }
    }
}

function finalizar() {
    res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados`
}
*a*/