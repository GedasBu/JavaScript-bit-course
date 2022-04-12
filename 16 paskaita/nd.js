const uzd8 = [];
// 1 uzduotis
// const x = document.createElement('Input');
// x.setAttribute("type", "text");
// x.setAttribute("value", "Tekstasss");
// document.body.appendChild(x);
// const b = document.createElement('Input');
// b.setAttribute("type", "button");
// b.setAttribute("value", "Spausk");
// document.body.appendChild(b);
// b.addEventListener('click', () =>{
//     console.log(x.value);//?????
// });
//2 uzduotis
const sel = document.querySelector('#listas');
const sel2 = document.querySelector('h1');
sel.addEventListener('change', () => {
    console.log(sel.value);
    sel2.innerText = (sel.value); // 6 uzduotis
    uzd8.push(sel.value);//8 uzduotis

})


//3 uzduotis
const radio = document.querySelectorAll('[name = fav]');

radio.forEach(el => {
    el.addEventListener('change', () => {
        const skr = document.createElement('h3');//7 uzduotis
        document.body.appendChild(skr);//7 uzduotis
        console.log(el.value);
        skr.innerText = (el.value);//7 uzduotis
        uzd8.push(el.value)

    })
})

//4 uzduotis
//checkboxObject.checked = true|false reikia su if daryt
const chck = document.querySelector('#vak');
let ii = '';
chck.addEventListener('change', () => {

    if (chck.checked) {

        ii = 'Paspausta';
        uzd8.push(ii); //8 uzduotis
        console.log(ii);
    } else {
        ii = 'Nepaspausta';


        uzd8.push(ii)//8 uzduotis
        console.log(ii)
    }

});

//5 uzduotis
const uzd5 = [];
const para = document.querySelectorAll('.para');
// console.log(para);
para.forEach(eli => {
    eli.addEventListener('change', () => {
        para.forEach(eli1 => {
            if (eli1.checked) {

                console.log(eli1.value);
                uzd5.push(eli1.value); // 8 uzduotis
            }
        })

    })

})


//6 uzduotis
// sprendimas antroje uzduotyje
//7 uzduotis sprendimas 3 uzduotyje;
//8 uzduotis
uzd8.push(uzd5);


// 9 uzduotis

console.log('9 uzduotis');
const go = document.querySelector('#go');
go.addEventListener('click', (a) => {
    uzd8.forEach(el => {
        let daugH3 = document.createElement('h3');
        let daugH3tekstas = document.createTextNode(el);
        daugH3.appendChild(daugH3tekstas);
        document.body.appendChild(daugH3);

    });

})



//10 uzduotis 
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {

    uzd8.forEach(el => {
        uzd8.shift();
    })
});
//11 uzduotis 


const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    const visiH3 = document.querySelectorAll('h3');
    // console.log('11 uzduotis ') ;   
    // console.log(visiH3);   

    visiH3.forEach(el => {
        let a = document.querySelector('h3');
        console.log(a);
        document.body.removeChild(a);
    })
});

//12 uzduotis
const goJson = document.querySelector('#goJson');
let obj = {};

goJson.addEventListener('click', () => {
    obj.a = uzd8;
    console.log('objektas', obj);
    const json = JSON.stringify(obj);
    console.log('json stringas', json);
    const jsonParse = JSON.parse(json);
    console.log('objektas is Json', jsonParse);


    for (const prop in jsonParse) {
        console.log(jsonParse[prop]);

        jsonParse[prop].forEach (el => {
            let daugH3 = document.createElement('h3');
            let daugH3tekstas = document.createTextNode(el);
            daugH3.appendChild(daugH3tekstas);
            document.body.appendChild(daugH3);
            

        });
    };
});