
class BookShelf {
    bookShelf;

    constructor(...books) {

        this.bookShelf = new Set(books);
        this.createbookShelf();
        this.bookShelf.forEach(book => {

            if (book.qty) {
                this.element.appendChild(book.element);
            }

         book.element.addEventListener('bookchange', (e) => {//klausome evento bookchange
            console.log(e.target.dataset)
            if(e.target.dataset.qty == 0){
                e.target.remove();
            }
        })
        
        });
       

    }
    createbookShelf() {
        this.element = document.createElement('div');
        this.element.id = 'shelf';
        document.querySelector('body').appendChild(this.element);
    }

};


class Book {
    author;
    title;
    pages;
    price;
    qty;
    // static bookshelf = new Set();
    static bookChange = new Event('bookchange');



    constructor(title, pages, color = 'no', price, qty, ...author) { //sukuriamas objektas
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.color = color;
        this.price = price;
        this.qty = qty;
        this.bookHtml(); //konstruktoriuje paleidziame metoda, kuris ideda i html;
        // this.constructor.bookshelf.add(this); // statinis kreipinys objektiniame kontekste.
        this.addCover();
    };


    bookHtml() { //Kuriam naujus html irass

        let authors = '';
        for (const author of this.author) {
            authors += `<h3>${author}</h3>`;
        }

        const html = `

       
        <h2>${this.title}</h2>
        <br>
        `+ authors +
            `
       <br><br>
        <p>Pages <br> 
        ${this.pages}<p> 
        <br<br><br>
        <p>Kaina: ${this.price}</P>
        <b>Kiekis ${this.qty}</b>
        <button>Pirkti</button>
      
                   
        `;

        this.element = document.createElement('div');//turime nusirodyti kazkoki kintamaji, kad galetume panaudoti su innerHTML

        this.element.classList.add('book');
        this.element.innerHTML = html;
        this.addCover();

        this.element.querySelector('button').addEventListener('click', () => {
            this.qty--;
            this.element.dataset.qty = this.qty;
            this.element.querySelector('b').innerText = `Kiekis ${this.qty}`;
            this.element.dispatchEvent(this.constructor.bookChange);//visam dokuemntui perdudoame, kad pasikeite kiekis
        })


    };



    addCover() {

        this.element.classList.add('no-cover');



    };
};
class Pinkbook extends Book {
    addCover() {
        this.element.classList.add('pink-cover');
    };
};
class Greenbook extends Book {
    addCover() {
        this.element.classList.add('green-cover');
    };
};




const book0 = new Pinkbook('Uz lango', 10, 'yellow', 21.1, 2, 'Jonas', 'Bronius');
const book1 = new Book('Saule uz lango', 10, 'no', 13.1, 3, 'Jonas', 'Koo');
const book2 = new Book('Ten kazkur', 59, 'green', 45.2, 1, 'Marius', 'Roo');
const book3 = new Book('Kompiuterija', 77, 'white', 12.8, 1, 'Bronislovas', 'Poo');
const book4 = new Book('Zvalgo mokinys', 159, 'red', 9.5, 1, 'Zvalgas', 'Vilkas');

console.log(book1, book2, book3);//nauja lenetyna su trim knygom;
const bs = new BookShelf(book1, book2, book3);
const bs1 = new BookShelf(book4, book0);