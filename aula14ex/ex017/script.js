function gerar() {
    var num = document.getElementById('txtn')
    var n = Number(num.value)
    var res1 = document.getElementById ('1')
    var res2 = document.getElementById ('2')
    var res3 = document.getElementById ('3')
    var res4 = document.getElementById ('4')
    var res5 = document.getElementById ('5')
    var res6 = document.getElementById ('6')
    var res7 = document.getElementById ('7')
    var res8 = document.getElementById ('8')
    var res9 = document.getElementById ('9')
    var res10= document.getElementById ('10')

    if (num.value.length == 0) {
        window.alert ('Por favor, digite um número!')
    } else {
        res1.innerHTML = `${n} x 1 = ${n * 1}`
        res2.innerHTML = `${n} x 2 = ${n * 2}`
        res3.innerHTML = `${n} x 3 = ${n * 3}`
        res4.innerHTML = `${n} x 4 = ${n * 4}`
        res5.innerHTML = `${n} x 5 = ${n * 5}`
        res6.innerHTML = `${n} x 6 = ${n * 6}`
        res7.innerHTML = `${n} x 7 = ${n * 7}`
        res8.innerHTML = `${n} x 8 = ${n * 8}`
        res9.innerHTML = `${n} x 9 = ${n * 9}`
        res10.innerHTML = `${n} x 10 = ${n * 10}`
    }
}
