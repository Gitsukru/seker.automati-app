
class AppView {
    constructor(pOtomat) {
        this.otomat = pOtomat;
    }

    init() {
        document.querySelector(".lokum").addEventListener("click", () => this.addBasket("lokum"));
        document.querySelector(".akide").addEventListener("click", () => this.addBasket("akide"));
        document.querySelector(".jelibon").addEventListener("click", () => this.addBasket("jelibon"));
        document.querySelector(".y-lolipop").addEventListener("click", () => this.addBasket("yuvarlak lolipop"));
        document.querySelector(".b-lolipop").addEventListener("click", () => this.addBasket("burgulu lolipop"));
    }
    // productTemplateRender() {
       
    //     let productTemplate = document.querySelector(".product-category")
        
    //     this.otomat.productTemplate.data.candy.map(candyBox => {
    //         console.log(candy);
    //             productTmp += `
    //             <div class="card" style="width: 18rem;">
    //             <img src="./img/${candyBox.icon}" class="card-img-top">
    //             <div class="card-body">
    //             fvlsdkflsjknvskjldnvséfknlskfn
    //                 <a href="#" class="btn btn-primary">${candyBox.name}</a>
    //             </div>
    //         </div>
    //             `;
    //         })
    //         console.log(productTmp);
    //     productTemplate.innerHTML = productTmp;
    // }


    addBasket(pProductCategory) {
        this.otomat.addBasket(pProductCategory);
        console.log(this.otomat.pay());
        this.renderBasket();
        this.renderPackage();
    }

    renderBasket() {
        // basketin icinde hangi üründen kac tane var bilgisini bir araya getirdim.
        let productMap =
            this.otomat.basket.reduce((cum, candy) => {
                if (!cum[candy.category]) {
                    cum[candy.category] = 1;
                } else {
                    cum[candy.category]++;
                }
                return cum;
            }, {});

        // Bir araya getirdigim bu bilgiyi html tagina cevirdim.
        let categoryHtml = Object.keys(productMap).map(category => 
            `<div>Secilen ürün : ${category}: ${productMap[category]} </div>`)

        // Dinamik olarak olusturdugum bu yeni html yapisini toplam ^fiyat bilgisi ile birlestirdim.
        let html = `
            ${categoryHtml}
            <div>Total CHF ${this.otomat.pay()}</div>
        `;

        document.querySelector('basket').innerHTML = html;

    }

    renderPackage() {
        let listOfPackages = this.otomat.fillPackages();
        // paketleri ekrana bas...
        listOfPackages.map(packages => `<div> ${packages.type}</div>`)
    }
}