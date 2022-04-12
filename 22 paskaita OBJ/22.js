// class Kibiras1 {
//     constructor() {
//         this.akmenuKiekis = 0;


//     }

//     prideti1Akmeni() {
//         this.akmenuKiekis++;
//     }
//     pridetDaugAkmenu(kiekis) {
//         this.akmenuKiekis += kiekis;

//     }
//     kiekPririnktaAkmenu() {
//         console.log('Akmenys:',this.akmenuKiekis);
//     }

// }

// const kibiras = new Kibiras1();

// kibiras.prideti1Akmeni();
// kibiras.prideti1Akmeni();
// kibiras.pridetDaugAkmenu(10);

// kibiras.kiekPririnktaAkmenu();

//---Pinigine
class pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.metaliniuPiniguSkaicius = 0;
        this.popieriniuPiniguSkaicius = 0;

    }
    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
            this.metaliniuPiniguSkaicius++;


        } else {
            this.popieriniaiPinigai += kiekis;
            this.popieriniuPiniguSkaicius++;
        }
    }
    skaiciuoti() {
        console.log('Popieriniai pinigai:', this.popieriniaiPinigai, ' Metaliniai pinigai', this.metaliniaiPinigai);
        console.log('Popieriniu pinigu skaicius', this.metaliniuPiniguSkaicius, 'Metaliniu pinigi skaicius', this.metaliniuPiniguSkaicius);
    }

}

const pinigine1 = new pinigine;

pinigine1.ideti(10);
pinigine1.ideti(1);

pinigine1.skaiciuoti();

//--- Troleibusas---

class Troleibusas {

    static visiKeleiviai = 0;
    static bendrasKeleiviuSkaiciusilipa(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;

    }
    static bendrasKeleiviuSkaiciusislipa(keleiviuSkaicius) {
        this.visiKeleiviai -= keleiviuSkaicius;
    }

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log("Bendras keleiviu skaicius", this.visiKeleiviai);
    }
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaiciusilipa(keleiviuSkaicius)

    }
    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaiciusislipa(keleiviuSkaicius)

    }
    vaziuoja() {
        if (this.keleiviuSkaicius >= 1) {
            console.log("Troleibuse važiuoja", this.keleiviuSkaicius);
        } else { console.log('Keleiviu nera') };
    }
}
const keleiviai = new Troleibusas;
const keleiviai1 = new Troleibusas;
const keleiviai2 = new Troleibusas;

keleiviai.ilipa(10)
keleiviai.islipa(9);
keleiviai.vaziuoja();

keleiviai1.ilipa(5)
keleiviai1.islipa(0);
keleiviai1.vaziuoja();

keleiviai2.ilipa(15)
keleiviai2.islipa(5);
keleiviai2.vaziuoja();

console.log(Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose());







//---- Stikline

class Stikline {

}

class TV {
    constructor() {
        this.savininkas = 'Parduotuve';
        this.kanalas = null;
    }
    pirkimas(vardas) {
        this.savininkas = vardas;
    }
    perjungtiKanala(nr) {
        this.kanalas = nr;
    }
    infoApieTV() {
        console.log('Savininkas:', this.savininkas, 'Kanalas', this.kanalas);
    }


}
const tv1 = new TV();
const tv2 = new TV();
const tv3 = new TV();

tv2.pirkimas('Antanas');
tv3.pirkimas('Birute');
tv3.perjungtiKanala(2)

tv1.infoApieTV();
tv2.infoApieTV();
tv3.infoApieTV();

//=== 7 uzduotis

class Kibiras1 {

    static visiAkmenys = 0;
    static akmenuSkaiciusVisuoseKibiruose() {
        console.log('Visuose kibiruose yra akmenų:', this.visiAkmenys);
    };
    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        Kibiras1.visiAkmenys += akmenuSkaicius;
    }

    constructor() {
        this.akmenuKiekis = 0;

    }

    prideti1Akmeni() {
        this.akmenuKiekis++; //i objekta konkreciam kibirui
        // Kibiras1.visiAkmenys++;// i statine skaiciuokle
        Kibiras1.bendrasAkmenuSkaicius(1);
    }
    pridetDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis);

    }
    kiekPririnktaAkmenu() {
        console.log('Akmenys:', this.akmenuKiekis);
    }

}

const kibiras1 = new Kibiras1();
const kibiras2 = new Kibiras1();
const kibiras3 = new Kibiras1();

kibiras1.prideti1Akmeni();
kibiras1.prideti1Akmeni();
kibiras1.pridetDaugAkmenu(10);

kibiras2.prideti1Akmeni();
kibiras2.prideti1Akmeni();
kibiras2.pridetDaugAkmenu(50);

kibiras3.prideti1Akmeni();
kibiras3.prideti1Akmeni();
kibiras3.pridetDaugAkmenu(12);

kibiras1.kiekPririnktaAkmenu();
kibiras2.kiekPririnktaAkmenu();
kibiras3.kiekPririnktaAkmenu();









