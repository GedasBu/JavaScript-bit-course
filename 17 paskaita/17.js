// const ul = document.querySelector('ul');

// document.querySelector('button').addEventListener('click', () => {

//     fetch('https://in3.dev/vinted/api/brands/all')

//         .then(response => response.json())

//         .then(data => {

//             console.log(data);

//             data.forEach(brand => {

//                 //1. Sukuriam elementą

//                 const li = document.createElement("li");



//                 //2. Sukuriam text nodą

//                 const brandText = document.createTextNode(brand.title);



//                 //3. Text nodą įdedame į elementą

//                 li.appendChild(brandText);



//                 //4. Surandam html'e tėvinį tagą į kurį dėsim elementą

//                 //Turim ul



//                 //5. Į tėvą įdedame sukurtą elementą

//                 ul.appendChild(li);

//             });

//         });



// })

// //-----------------------------------------------------------
// <!-- const ul = document.querySelector('ul');

// document.querySelector('button').addEventListener('click', () => {

//     fetch('https://in3.dev/vinted/api/brands/all')

//         .then(response => response.json())

//         .then(data => {

//             console.log(data);

//             data.forEach(brand => {



//                 const html = `

//                 <i>${brand.id}</i>

//                 <b>${brand.title}</b>

//                 `;



//                 const li = document.createElement("li");



//                 li.innerHTML = html;



//                 ul.appendChild(li);

//             });

//         });



// }); -->

// <!-- const ul = document.querySelector('ul');

// document.querySelector('button').addEventListener('click', () => {

//     fetch('https://in3.dev/vinted/api/brands/all')

//         .then(response => response.json())

//         .then(data => {

//             console.log(data);

//             data.forEach(brand => {



//                 const html = `

//                 <i>${brand.id}</i>

//                 <b>${brand.title}</b>

//                 `;



//                 const li = document.createElement("li");



//                 li.innerHTML = html;



//                 ul.appendChild(li);

//             });

//         });



// }); -->

//paveiksliukai su fetch;
const ul = document.querySelector('ul');

// document.querySelector('button').addEventListener('click', () => {

fetch('https://picsum.photos/v2/list')

    .then(response => response.json())

    .then(data => {

        console.log(data);

        data.forEach(books => {     
            const html = `
                <u>Autorius: ${books.author} </u><br>
               <a href=${books.download_url}> <img src=https://picsum.photos/id/${books.id}/200/300><a>;               

                `;
            const li = document.createElement("li");
            li.innerHTML = html;
            ul.appendChild(li);

        });

    });



// });
