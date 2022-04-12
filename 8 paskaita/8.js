// Kad console.log spausdintų visus skaičius, kurie nesidalina iš 3 (su continue)

// Kad spausdinimas nutrūktų kai i yra daugiau nei 40 (su break)




// for (let i = 1; i <= 111; i++) {
//     if (i == 40) {
//         break;
//     };
//     if (i % 3 == 0){
//         continue;
//     };       

//     console.log(i);


// }

// let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';
// console.log(zuikis.length);
// for (let i = 0; i<40; i++){
// console.log(zuikis[i]);

// }


// let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';
// for (let i = 0; i<40; i++){
// if (zuikis[i] == ' '){
// continue;    
// }

// console.log(zuikis[i]);

// }

// let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';
// let a = 0;
// for (let i = 0; i<40; i++){
// if (zuikis[i] == 'a'){
//   a++;
// }
// }
// console.log(a);

// let text = 'zirafa';

// for(i = 0;i<text.length; i++){
//     console.log(text.slice(i));
// }

let text = 'zirafa';

for(i = text.length;i>=0; i--){
    console.log(text.slice(i));
}
