const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const mygt1 = document.querySelector('#mgt1');
const mygt2 = document.querySelector('#mgt2');
const mygt3 = document.querySelector('#mgt3');


mygt1.addEventListener('click', () => {
    console.log(input1.value);
    console.log(input1.value.length + input2.value.length);

})
mygt2.addEventListener('click', () => {
    console.log(input1.value);
    input1.value = '';
    input2.value = '';

})
mygt3.addEventListener('click', () => {
    let a = [];

    a.push(input1.value, input2.value);
    console.log(a);


});

fetch('https://in3.dev/knygos/')

    .then(response => response.json())

    .then(data => {
        console.log('Knygos',data);

        const a = data.map((a) =>{
            return a.price;
        });
        // console.log('kainos',a);

        // data.forEach(element => {
        //     a.push(element.price);
        // }
        // );
       
        let minKaina = 0;
        minKaina = (a.indexOf(Math.min(...a)));        
        let knygosId = data[minKaina].id; 


        // kategorijos

        fetch('https://in3.dev/knygos/types/')

            .then(response => response.json())

            .then(data1 => {

                console.log('Kategorijos', data1);            
                console.log ('Kategorija',data1[knygosId-1].title);
                console.log(data[knygosId].title)
console.log(Math.min(...a));
            });



    });

