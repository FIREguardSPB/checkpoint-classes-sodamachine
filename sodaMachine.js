const { Soda } = require('./soda.js');
// const { SodaMachine } = require('./sodaMachine.js');


class SodaMachine {
  constructor(args = {}) {
    this.sodas = args.sodas;
    this.cash = args.cash;
  }

  currentInventoryCount() {
    return this.sodas.length

  }

  findSoda(sodaBrand) {
    for (let i =0; i < this.sodas.length; i++){
      if (sodaBrand == this.sodas[i].brand)
        return this.sodas[i]
    }

  }

  sell(sodaBrand) {
    for (let i =0; i < this.sodas.length; i++) {
      if (sodaBrand == this.sodas[i].brand) {
        this.cash = this.cash + this.sodas[i].price
         this.sodas.splice(i,1);

      }
    }
  }

}
// //=====================напитки
//   let pepsi ;
//   let mountainDew;
//   let cokeZero;
//   let secondPepsi;
//   let sodaMachine;
//
//   pepsi = new Soda({ brand: 'Pepsi', price: 0.65 });
//   mountainDew = new Soda({ brand: 'Mountain Dew', price: 0.75 });
//   cokeZero = new Soda({ brand: 'Coke Zero', price: 1.0 });
//   secondPepsi = new Soda({ brand: 'Pepsi', price: 0.65 });
//   sodaMachine = new SodaMachine({
//     sodas: [pepsi, mountainDew, cokeZero, secondPepsi],
//     cash: 1.0,
//   })
// //
//     console.log(sodaMachine.currentInventoryCount())
// console.log(sodaMachine.findSoda('Pepsi'))
// console.log(sodaMachine.sell('Coke Zero'))
// console.log(sodaMachine.cash)
// console.log(sodaMachine.findSoda('Coke Zero'))
// console.log(sodaMachine.currentInventoryCount())


module.exports = { SodaMachine };

