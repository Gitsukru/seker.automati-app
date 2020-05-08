
class CandyMachine {

    constructor() {
        this.basket = [];
        this.data ={
            candy:{
                "lokum": {icon:"./img/lokum-png-3.png",price: 1.5, volume: 8},
                "akide": {icon:"./img/akide.png", price: 5, volume: 26},
                "jelibon": {icon:"./img/jelibon.png", price: 2.75, volume: 45},
                "burgulu lolipop": {icon:"./img/b-lolipop.png", price: 2.5, volume: 20},
                "yuvarlak lolipop": {icon:"./img/y-lollipop.png",price: 3, volume: 50}
            },
            package:{
                "small":{price: 0.20, volue: 250},
                "middle":{price: 0.35, volue: 400},
                "large":{price: 0.70, volue: 750}
            }
        };
    }

    addBasket(pProductCategory){
        let product = new Candy(pProductCategory, this.data.candy[pProductCategory].price,
            this.data.candy[pProductCategory].volume);
        this.basket.push(product);
    }

    pay(){
        return this.basket.reduce((cum, candy) => cum + candy.price, 0);
    }

    totalVolume(){
        return this.basket.reduce((cum, candy) => cum + candy.volume, 0);
    }

    // [new Package("small", 2, 300), new Package("large", 7, 700), new Package("small", 2, 300)];
    fillPackages(){
        let total = this.totalVolume();

        // ?

        return [];
    }
}
