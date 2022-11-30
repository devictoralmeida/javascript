function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = "Contando: "
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem Decrescente
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
    res.innerHTML += `\u{1F3C1}`
    }
}







/*
var res = document.getElementById('res')
    var fim = Number(f.value)
    var passo = Number(pas.value)
    var inicio = Number(ini.value)
} for (var inicio; inicio <= fim; inicio + passo) {
*/