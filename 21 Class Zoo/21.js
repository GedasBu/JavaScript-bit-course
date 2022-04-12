class animal {
    static animals = [];
    static mySet;
    static createAnimal(specie, taiLong, color, hasHorn) {
        this.animals.push(new animal(specie, taiLong, color, hasHorn));
        this.save();

    }

    static renderZoo() {
        this.animals.forEach(animal => {
            animal.render();
        })
        this.filtrSelect();
    }

    static clearZoo() {
        this.animals.forEach(animal => document.querySelector('body').removeChild(animal.div));
        this.clearFilterSelect();

    }

    static buttonCreate() {
        document.querySelector('button').addEventListener('click', () => {
            const specie = document.querySelector('#specie');
            const tailLong = document.querySelector('#tailLong');
            const color = document.querySelector('#color');
            const hasHorn = document.querySelectorAll('[name=hasHorn]');

            let horn;
            hasHorn.forEach(c => {
                if (c.checked) {
                    horn = c.value
                }
            })

            animal.clearZoo();
            animal.createAnimal(specie.value, tailLong.value, color.value, horn);
            animal.renderZoo();
        })
    }
    static deleteAnimal(id) {

        this.animals.forEach((animal, index) => {
            if (animal.id == id) {

                this.clearZoo();
                this.animals.splice(index, 1);
                this.renderZoo();
            }
        })

        this.save();

    }

    static start() {
        this.buttonCreate();
        // animal.createAnimal('Bebras', 15, 'brown', 'no');
        // animal.createAnimal('Bebras', 15, 'brown', 'no');
        // animal.createAnimal('Lape', 20, 'pink', 'no');
        // animal.createAnimal('Suo', 23, 'black-white', 'no');

        this.load();
        animal.renderZoo();
        this.closeModal();
        this.buttonEdit()
        this.buttonHideDeleteModal()
        this.buttonConfirmDelete();
        this.sortButton();
        this.filterButton();
        this.showAllButton();
    };

    static save() {
        const data = [];
        this.animals.forEach(animal => {
            data.push({
                specie: animal.specie,
                tailLong: animal.tailLong,
                color: animal.color,
                hasHorn: animal.hasHorn,
            })
        });
        // console.log(data);
        localStorage.setItem("zooApp", JSON.stringify(data));
        this.makeFilterSet();
    }

    static load() {
        if (null === localStorage.getItem('zooApp')) {

            localStorage.setItem('zooApp', JSON.stringify([]));

        }
        const data1 = JSON.parse(localStorage.getItem("zooApp"));
        console.log(data1);
        data1.forEach(animal => {
            this.createAnimal(animal.specie, animal.tailLong, animal.color, animal.hasHorn);

        });
        this.makeFilterSet();

    }
    static showEditModal(animal) {
        document.body.querySelector('#edit').style.display = null;
        console.log(animal);
        document.body.querySelector('#speciem').value = animal.specie;
        document.body.querySelector('#tailLongm').value = animal.tailLong;
        document.body.querySelector('#colorm').value = animal.color;

        if (animal.hasHorn == 'Yes') {
            document.body.querySelector('#hasHornm').checked = true;
            console.log(animal.hasHorn);
        } else if ((animal.hasHorn == 'No')) {
            // document.body.querySelector('#hasHornm').checked = false;
            document.body.querySelector('#noHornm').checked = true;
        }
        document.querySelector('.btn-primary').dataset.id = animal.id;

    }
    static showDdeleteConfirmModal(id) {
        document.body.querySelector('#delete').style.display = null;
        document.querySelector('.btn-delete').dataset.id = id;


    }

    static buttonHideDeleteModal() {
        document.body.querySelector('.btn-nodelete').addEventListener('click', () => {
            document.body.querySelector('#delete').style.display = 'none';
            delete document.querySelector('.btn-nodelete').dataset.id;
        });

    }

    static buttonConfirmDelete() {
        document.body.querySelector('.btn-delete').addEventListener('click', () => {
            // console.log('delete', );
            const dataSetId = document.querySelector('.btn-delete').dataset.id;
            this.deleteAnimal(dataSetId);
            document.body.querySelector('#delete').style.display = 'none';
            delete document.querySelector('.btn-nodelete').dataset.id;

        })

    }

    static closeModal() {
        document.body.querySelector('.btn-secondary').addEventListener('click', () => {
            document.body.querySelector('#edit').style.display = 'none';
            delete document.querySelector('.btn-primary').dataset.id;
        });


    }


    static buttonEdit() {
        document.body.querySelector('.btn-primary').addEventListener('click', (e) => {

            const specie = document.querySelector('#speciem');
            const tailLong = document.querySelector('#tailLongm');
            const color = document.querySelector('#colorm');
            const hasHorn = document.querySelectorAll('[name=hasHornm]');

            let horn;
            hasHorn.forEach(c => {
                if (c.checked) {
                    horn = c.value
                }

            })
            this.editAnimal(e.target.dataset.id, specie.value, tailLong.value, color.value, horn);
            console.log(e.target.dataset.id, specie.value, tailLong.value, color.value, horn)
        });


    }

    static editAnimal(id, specie, tailLong, color, hasHorn) {

        console.log(id, specie, tailLong, color, hasHorn)
        this.animals.forEach(animal => {

            if (id == animal.id) {

                this.clearZoo();

                animal.specie = specie;

                animal.tailLong = tailLong;

                animal.color = color;

                animal.hasHorn = hasHorn;

                this.renderZoo();

            }

        });
        this.save();
        this.closeModal();

    }
    static sortButton() {
        document.querySelector('#sort_specie').addEventListener('click', () => {
            this.showSorted(document.querySelector('#sort_specie').id);
            // console.log(document.querySelector('#sort_specie').id);

        })
        document.querySelector('#sort_tail_long').addEventListener('click', () => {
            this.showSorted(document.querySelector('#sort_tail_long').id);
            // console.log(document.querySelector('#sort_tail_long').id);

        })
    }

    static showSorted(id) { //sortina pagal rusi ir uodego silgi
        if ('sort_tail_long' == id) {
            if (document.querySelector('#sort_asc').checked) {
                this.animals.sort(function (a, b) {
                    return a.tailLong - b.tailLong;
                })
            } else {
                this.animals.sort(function (b, a) {
                    return a.tailLong - b.tailLong;
                });
            }

        }
        if ('sort_specie' == id) {
            if (document.querySelector('#sort_asc').checked) {
                this.animals.sort(function (a, b) {
                    var specieA = a.specie.toUpperCase(); // ignore upper and lowercase
                    var specieB = b.specie.toUpperCase(); // ignore upper and lowercase
                    if (specieA < specieB) {
                        return -1;
                    }
                    if (specieA > specieB) {
                        return 1;
                    }
                });


            } else {
                this.animals.sort(function (b, a) {
                    var specieA = a.specie.toUpperCase(); // ignore upper and lowercase
                    var specieB = b.specie.toUpperCase(); // ignore upper and lowercase
                    if (specieA < specieB) {
                        return -1;
                    }
                    if (specieA > specieB) {
                        return 1;
                    }
                });
            }

        };

        this.clearZoo();
        this.renderZoo();
    }
    static clearFilterSelect() {

        document.querySelector('#zoo').innerHTML = '';

    }
    static makeFilterSet() {
        this.mySet = new Set();
        this.animals.forEach(animal => {
            this.mySet.add(animal.specie);
            this.mySet = new Set([...this.mySet].sort()); //paverciam SET i MASYVA ir isrusiuojam ir vel priskiriam tam paciam Set'ui;
        })
        console.log(this.mySet);


    }
    static filtrSelect() {
        const select = document.querySelector('#zoo');
        for (const a of this.mySet) {
            const element = document.createElement('option');
            element.innerText = a;
            element.value = a;
            select.appendChild(element);

        }
    }

    static filterButton() {
        document.querySelector('#filter').addEventListener('click', () => {
            this.showFiltered();
        })

    }
    static showFiltered(){
        const an = this.animals.slice();
        this.animals.forEach((animal, index) => {
            if (animal.specie != document.querySelector('#zoo').value) {

                this.clearZoo();  
                this.animals.splice(index, 1);
              this.renderZoo()
            }
            

        })
;
        // this.save();

    }

    static showAllButton(){
        document.querySelector('#show_all').addEventListener('click',() =>{
            this.load();
        })

    }





    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        this.createAnimalRandom();


    }
    render() {

        this.createAnimalElement();
        this.animalHtml();
        this.deleteButton();
        this.editButton();
    }

    createAnimalElement() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
    }

    animalHtml() {

        const html = `
<h1> ${this.specie}</h1>
<p>Tail long ${this.tailLong} cm</p>
<p> Color: ${this.color}</p>
<p>Has horn? ${this.hasHorn}</p>
<button data-id="${this.id}" class="del"> Delete</button>
<button data-id="${this.id}" class="edit"> Edit</button>
`;
        this.div.innerHTML = html;
    };

    createAnimalRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }

    // deleteButton() {
    //     this.div.querySelector('.del').addEventListener('click', () => {
    //         this.constructor.deleteAnimal(this.id);//this.constructor animal klase pasiima.
    //         console.log(this.id)
    //     })

    // }
    deleteButton() {
        this.div.querySelector('.del').addEventListener('click', () => {
            this.constructor.showDdeleteConfirmModal(this.id);//this.constructor animal klase pasiima.
            console.log(this.id)
        })

    }

    editButton() { //kaip vis atai veikia?
        this.div.querySelector('.edit').addEventListener('click', () => {
            this.constructor.showEditModal(this);

        })

    }

};

animal.start();

// document.body.querySelector('.edit').addEventListener('click',()=>{
//     console.log('m');

// })


