// const obj2 = {

//     savybe1: 'zaluma',

//     savybe2: 'geltonuma',

//     savybe3: 42,

//     savybe4: [1, 5, 6],

//     metodas1: function() {

//         console.log(this.savybe2)

//     },

//     metodas2: function() {

//         console.log(this.savybe3)

//     },

//     metodas3: function() {

//         console.log(this.savybe1)

//     }

// };

// for ( const metodas in obj2) {
//     if (typeof obj2[metodas] == 'function' ){
// console.log(obj2[metodas]());
//     }
//     //  else {
//     // //     console.log(obj2[metodas]);
//     // // }


// }

// const kalkuliatorius = {
//     sudetis: function suma(a, b) {
//         this.rezultatas =  a + b;
//         this.istorija.push(this.rezultatas);
//         return this;

//     },
//     skirtumas: function skirtumas(a, b) {
//         this.rezultatas =  a - b;
//         this.istorija.push(this.rezultatas);
//         return this;
//     },
//     rezultatas: null,
//     istorija: [],
//     valytuvas: function valytuvas(){
//         this.istorija = [];

//     },
// };

// kalkuliatorius.sudetis(2,3).skirtumas(10,5).rezultatas;
// kalkuliatorius.valytuvas();


// console.log('rez',kalkuliatorius.istorija);
// console.log(this);

const obj = {
    Name: '',
    setName: function (a) {
        this.Name = a;

    },
    koksVardas: function () {
        console.log(this.Name);
    }

}

obj.setName('Tomas');

// const vardas = document.querySelector('#butt');
// console.log(vardas);
// vardas.addEventListener('click', () => {
//     obj.koksVardas;
// })


//------------------Klasiu paskaita-----------------------
const vardinis = {
    name: null,
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        console.log(this);
    }
}



vardinis.setName('Anatolija');

// const duok = vardinis.getName.bind(vardinis);



const z2 = {
    vardas: null,
    setName: function (vardas) {
        this.vardas = vardas;
    },
    getName: function () {
        console.log(this.vardas);
    }
};

class Zmogus {

    constructor() {
        this.vardas = null;
        // this.getName = this.getName.bind(this);
    }

    setName(vardas) {
        this.vardas = vardas;
    }

    getName = () => {
        console.log(this.vardas);
    }

}

const z1 = new Zmogus();

z1.setName('Anatolija');
z2.setName('Anatolija');

// console.log(z1, z2);

// const duok = z2.getName.bind(z2);
// const c = 'La la ';
// document.querySelector('button').
//     addEventListener('click', z1.getName);

// document.querySelector('button').
//     addEventListener('click', duok);

//----- uzdavinai su klasemis------------

class animal {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;

        console.log(this.specie);
        this.createAnimalRandom();
        this.createAnimalElement();
        this.animalHtml();


    }

    createAnimalElement() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
    }
    animalHtml() {
        const horn = this.hasHorn ? 'Turi' : 'Neturi'
        const html = `
<h1>${this.specie}</h1>
<p>Uodegos ilgis ${this.tailLong} cm</p>
<span> Spalva: ${this.color}</span>
<h3>Turi ragus? ${horn}</h3>
<button data-id="${this.id}"> Delete</button>
`;
        this.div.innerHTML = html;
    };

    createAnimalRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }

};


const arr = [];
arr.push(new animal('Zebras', 36, 'black-white', false));
arr.push(new animal('Bebras', 15, 'brown', false));
arr.push(new animal('Lape', 20, 'pink', false));
arr.push(new animal('Suo', 23, 'black-white', false));



const specie = document.querySelector('#specie');

document.querySelector('button').addEventListener('click', () => {

    arr.push(new animal(specie.value, tailLong.value, color.value, hasHorn.value));

})


console.log(arr);
