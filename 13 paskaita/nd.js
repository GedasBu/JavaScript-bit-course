// 1a uzduotis
// let newH1 = document.querySelector("h1");
// newH1.style.color = 'green';

document.querySelector("h1").style.color = 'green';

//1b uzduotis

document.querySelector("i").classList.add('small');


//1c uzduotis
document.querySelector("h1").classList.remove('main');

//1d uzduotis
document.querySelector("h1+h2").classList.add('first');
document.querySelector("h1+h2").classList.remove('main');

//1e uzduotis
document.querySelector("h2 > span").style.fontSize = '10px';
document.querySelector("h2 > span").style.color = 'grey';

//2a uzduotis
console.log(document.querySelectorAll('h2').length);

//2b uzduotis
console.log(document.querySelectorAll('h2:not(.first)').length);

//2c uzduotis
let skyblue = document.querySelectorAll("h2")
for (let i = 0; i < skyblue.length; i++) {
    skyblue[i].style.color = "skyblue";
}
//2d uzduotis
let divai = document.querySelectorAll("div.prices > h2");
divai.forEach(i => i.classList.add('price-tag'));

// for (const  i  of divai){
//     i.classList.add('price-tag');
// }

//2e uzduotis
let underl = document.querySelectorAll(".new")
for (let i = 0; i < underl.length; i++) {
    underl[i].style.textDecoration = "underline";
}

//2f uzduotis
console.log(document.querySelectorAll('ul').length);


//2g uzduotis
let ul = document.querySelectorAll('ul');
for (const i of ul) {
    i.style.border = '1px solid';
    i.style.padding = '15px 5px';
};
//2h uzduotis
console.log(document.querySelectorAll('ul .new').length);
//2i uzduotis
const ats = {};
document.querySelectorAll('ul').forEach(ul => {
    ats[ul.id] = ul.querySelectorAll('.new').length;
});
console.log('zirafos:', document.querySelectorAll('#zirafos >.new').length);
console.log('plesrunai:', document.querySelectorAll('#plesrunai >.new').length);
console.log('gyvates:', document.querySelectorAll('#gyvates >.new').length);
console.log('zoliaedziai:', document.querySelectorAll('#zoliaedziai >.new').length);

//3a uzduotis

const buttonH1 = document.querySelector('#h1-color');

buttonH1.addEventListener('click', () => {

    document.querySelector("h1").style.color = 'darkgreen';

})

//3b uzduotis
const itag = document.querySelector('i');

itag.addEventListener('click', a => {

    document.querySelector("i").style.fontWeight = 'bold';

})

//3c uzduotis 
const prices = document.querySelector('.prices');
let paspaudimai = 0;

prices.addEventListener('click', (b) => {
    paspaudimai++;
    if (paspaudimai % 2 == 0) {
        document.querySelector(".prices").style.background = 'white';
    } else {
        document.querySelector(".prices").style.background = 'grey';
    }
    b.stopPropagation;

})

//3d uzduotis
const idContacts = document.querySelector('#contacts');
idContacts.addEventListener('click', c => {
    document.querySelector('#contacts').style.color = 'orange';
    c.stopPropagation();

})

//3e uzduotis
const bigger = document.querySelector('u');
bigger.addEventListener('click', d => {
    document.querySelector('#contacts').style.fontSize = '20px';

})

//3f uzduotis
const X = document.querySelector('b');

// const contactx = document.querySelector('#contacts');
X.addEventListener('click', f => {

    document.querySelector('#contacts').style.color = null;

    f.stopPropagation();

});
//3g uzduotis
const buttonH2 = document.querySelector('#h1-color-back');

buttonH2.addEventListener('click', q => {

    document.querySelector("h1").style.color = null;

})
//4a uzduotis
const newAnimal = document.querySelectorAll('.new');
newAnimal.forEach(el => {
    el.addEventListener('dblclick', () => {

        el.style.color = 'red';
    });
});


//4b uzduotis
let animal = document.querySelectorAll('li:not(.like-button)');
console.log(animal);
animal.forEach(eli => {
    eli.addEventListener('click', () => {
        eli.style.fontSize = ('130%');
    })
})

//4c uzduotis
let like = document.querySelectorAll('.like-button');
console.log(like);
like.forEach((lik, i) => {
    lik.addEventListener('click', () => {
        document.querySelectorAll("ul")[i].classList.add('like');
    })
});

//5a uzduotis 
let newH2 = document.createElement("h2");
let tekstas = document.createTextNode("Senjorams kaina 5.99!");
newH2.appendChild(tekstas);
let kainos = document.querySelector('div.prices');
kainos.appendChild(newH2);
newH2.style.color = 'Blue';
newH2.classList.add('new');
let senjorai = document.querySelector('div.prices> h2:last-child');
console.log(senjorai);
senjorai.addEventListener('click', (k) => {
    senjorai.style.color = 'green';
    k.stopPropagation();
})



//5c uzduotis

// document.querySelectorAll('ul').forEach((ul) => {

//     let newLi = document.createElement("li");

//     let nepatinka = document.createTextNode("NEPATINKA");

//     newLi.appendChild(nepatinka);

//     ul.appendChild(newLi);

//     ul.insertBefore(newLi, ul.querySelector('.like-button').nextSibling);

//     newLi.addEventListener('click', () => {

//         ul.classList.remove('like');

//     })



// });

document.querySelectorAll('ul').forEach((ul) => {
    let newLi = document.createElement('li');
    let textLi = document.createTextNode('NEPATINKA');
    newLi.appendChild(textLi);
    ul.appendChild(newLi); //ka reiskia?
    ul.insertBefore(newLi, ul.querySelector('.like-button').nextSibling);
    newLi.addEventListener('click', () => {

        ul.classList.remove('like');

    })
});


let newFieldSet = document.createElement('fieldset');
let tagId = document.querySelector('#contacts');
document.body.insertBefore(newFieldSet, tagId);
let html = `
<legend>HEADER 3</legend>
        <button id="h3-color-back">Pabraukti H1 tagą</button>
        <button id="h3-font-back">Nepabraukti H1 tagąį</button>  
`;
newFieldSet.innerHTML = html;

const buttonH3 = document.querySelector('#h3-color-back');
buttonH3.addEventListener('click',(gd) => {
    document.querySelector('h1').style.textDecoration = 'underline';
gd.stopPropagation();
})
const buttonH32 = document.querySelector('#h3-font-back');
buttonH32.addEventListener('click',(gd) => {
    document.querySelector('h1').style.textDecoration = null;
gd.stopPropagation();
})

















