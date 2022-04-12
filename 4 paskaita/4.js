function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
let egzaminoRezultas = rand(1, 10);
console.log(egzaminoRezultas);

if (egzaminoRezultas >= 4) {
    console.log('Egzaminas islaikytas');
} else {
    console.log('Egzaminas neislaikytas');
}

(egzaminoRezultas >= 4) ? console.log('Egzaminas islaikytas') : console.log('Egzaminas neislaikytas');



let ekspermentoRezultas = rand(1, 4);
console.log(ekspermentoRezultas);
if (ekspermentoRezultas == 1 || ekspermentoRezultas == 4) {
    console.log('Ekspermanetas pavyko');
}
else {
    console.log('Ekspermanetas nepavyko');
}
console.log((ekspermentoRezultas == 1 || ekspermentoRezultas == 4) ? 'Ekspermanetas pavyko' : 'Ekspermanetas nepavyko');

let dalyvis1 = rand(1, 4);

let dalyvis2 = rand(1, 4);

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju
console.log('Dalyvis1  ', dalyvis1);
console.log('Dalyvis2  ', dalyvis2);

console.log((dalyvis1 + dalyvis2 > 6 || dalyvis2 == dalyvis1) ? 'Laimejo' : 'Pralaimejo');

console.log('----------------------------------------------');
// let message;
// let login = prompt('Kas jus?')

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     alert('Greetings');
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

// (login == 'Employee') ?
//     message = 'Hello' : (login == 'Director') ?
//         alert('Greetings2') : (login == '') ?
//             message = 'No login' : message = '';

// console.log('----------------------------------------------');
// let login = prompt('Login: ');
// let password;
// if (login == 'Admin') {
//     password = prompt('Password: ');
//     if (password == 'slaptazodis') {
//         alert('Sveiki!');
//     }
//     else if ((password === '' || password === null)) {
//         alert('Atsaukta!')
//     } else {
//         alert('Netinkamas slaptazodis!')
//     }
// } else if (login == '' || login == null) {
//     alert('Canceled');
// } else {
// //     alert('Taves nepazystu')
// }

console.log('----------------------------------------------');

for (let i = 0; i < 3; console.log(i++));