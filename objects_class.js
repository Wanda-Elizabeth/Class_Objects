
function calculateFruitCost(fruitName,quantity){
  price =30
  return `${quantity} ${fruitName} for ${price*quantity} KES`;
  }


console.log(calculateFruitCost("Oranges",2));
class KioskCalc{ 
  constructor(fruit, quantity){ 
      this.fruit=fruit,
      this.quantity=quantity,
      this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 },
      this.getTotal=function(){
    return `${this.quantity} ${this.fruit} for KES ${this.quantity*this.fruitsPriceList[this.fruit]}`
  }
  }
  }
  let kioskCalc =new KioskCalc("avocado",7);
  console.log(kioskCalc.getTotal())

