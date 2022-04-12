// const masyvas = ['vienas', 'žalias', 'ir', 'trys', 'raudoni'];
// for (const var1 in masyvas) {
//     console.log(masyvas[var1]);
// }
// masyvas.forEach((a, i) => console.log(a, i));

function suma(a, b) {
    let apb = a + b;
    return apb;
}
function skirtumas(a, b) {
    let csd = a - b;
    return csd;
}


function skaiciuoti(v,a,b) {
        if (v === '+') {
        return suma(a,b);
    } else if (v === '-') {
        return skirtumas(a,b) };
    
}
const m = ['V', 'U', 'A', 'A', 'R', 'A', 'B'];
const t = [];
m.forEach(e => {
    if (e == 'A') {
        t.push('Z');
    } else (t.push(e));
});
console.log(t)