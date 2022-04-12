// function testas() {
//     console.log('Laba diena');
// };

// for (let i = 1; i <= 20; i++) {
//     testas();
// };

// function skaicius(i){
//     console.log(`Ciklo numeris ${i}`);
// };

// for (let i = 0; i <= 20; i++) {
//     skaicius(i);
// };

// function skaicius(sk) {
//     if (sk % 2 == 1) {
//         return ('Nelyginis')
//     }
// }
// for (let i = 0; i <= 20; i++) {
//     if (skaicius(i) == 'Nelyginis') {
//         console.log(i);
//     };
// };

// function kiekARaidziu(string,raide) {
//     let a = 0;
//     for (i = 0; i < string.length; i++) {
//         if (string[i].toLowerCase() == raide) {
//             a++;
//         };
//     };
//     return a;
// };

// console.log (kiekARaidziu('Papūga','p'));
// console.log (kiekARaidziu('Vilkas','k'));
// console.log (kiekARaidziu('Zuikis','i'));

function reverseWord(word){
  a = '';  
  for(let i = word.length-1;i>=0; i--){
   a += word[i];
   

}
return a;
};
console.log(reverseWord('sula'));
