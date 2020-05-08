/**
 * Akis:
 *  - Dukkan icinde bir kac serker otomati ve musteri seker butonlarina basarak istegi kadar seker ve istedigi sekeri secebilir satin alabilir
 *  - makina secilen sekerlerin hacmine göre posetler ve müsteriye hazirlar/verir.
 * 
 * analiz:
 *  - her otomatin özellikleri Söyle olmali : 
 *      - Seker secme butonu, secilen sekerin sayaci, hemen yaninda toplam hacmi hesapla  
 *      - 5 çesit seker,
 *      - her sekerin hacmi toplam satin alinan miktara göre hesaplamali hangi posete sigacaksa  o poseti secmeli
 *      - her sekerin kendi fiyati, posetleme: 3 boy small, medium, large.
 *      
 */

const otomat = new CandyMachine();

const appView = new AppView(otomat);
//appView.productTemplateRender();

appView.init();

// Müsteri sekerleri secer - UI interaksiyon
// TEST
//for(let i = 0; i < 20; i++){
// otomat.addBasket(products[Math.floor((Math.random() * products.length))]);
//}
 //...addBasket
// let toplamUcret = otomat.pay();
 
// console.log(toplamUcret);
// console.log(otomat.totalVolume());
// console.log(otomat.basket);
// let olusturulanPaketler = otomat.fillPackages();

// console.log(olusturulanPaketler);   
