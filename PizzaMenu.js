'use strict';

var pizzaAvailableArray = [];
var toppingAvailable = [];
var toppings = [
    {
        price: 2,
        description: 'mozzarela'
    }, {
        price: 5,
        description: 'bacon'
    }, {
        price: 1,
        description: 'mushrooms'
    },{
        price: 3,
        description: 'tuna'
    },{
        price: 2.5,
        description: 'chicken'
    }
];


var pizzaArray = [
    {
        name: 'Marhgerita',
        price: 20,
        description: 'tomato sauce,mozzarela cheese, pepper,fresh basil' ,
        src: "assets/margherita.jpg"
    },{
        name: 'Diavola',
        price: 18,
        description: 'tomato sauce, mozzarela, garlic, red pepper, habanero pepper',
        src: "assets/diavola.jpg"    
    },{
        name: 'Salami',
        price: 25,
        description: 'tomato sauce, mozzarela, salami, red onion',
        src: "assets/salami.jpg"    
    },{
        name: 'Vegetariana',
        price: 25,
        description: 'tomato sauce, mozzarela, olive oil, brown onion, zucchini, basil leaves, red capsicum',
        src: "assets/vegetariana.jpg"    
    },{
        name: 'Quattro-Stagioni',
        price: 25,
        description: 'tomato sauce, mozzarela, mushrooms, garlic, olive oil',
        src: "assets/quattroStagioni.jpg"    
    }
];

function CPizza(){ 
    this.src;
    this.price;
    this.toppingAvailable;
    this.toppingsSelected;
    this.name;
    this.description;
    this.div;
}

CPizza.prototype.init = function(pizza) {
    var self = this;
    this.src = pizza.src;
    this.price = pizza.price;
    
    this.toppingsSelected = [];
    this.name = pizza.name;
    this.description = pizza.description;

    this.div = $('<div id="' + this.name + 'Container" class="pizzaContainer">'
    +'<span class="pizzaTitle">' + this.name + '</span>'
    +'<span id="totalPrice' + this.name + '" class="pizzaPrice">' + this.price + '$</span>'
    +'<img src="' + this.src + '" class="pizzaIcon"/></div>');
    // this.div.click(function () {
    //     for(var i = 0; i < self.toppingAvailable.length; i++){
    //         
    //     }
    // });
    $('#container').append(this.div);
};

CPizza.prototype.addTopping = function(topping){
    this.toppingsSelected.push(topping);
    console.log(this.toppingsSelected);
};

CPizza.prototype.removeTopping = function(){
    this.toppingSelected.remove(this.toppingAvailable[i]);
};

CPizza.prototype.updatePrice = function (price) {
    this.price += price;
    $('#totalPrice' + this.name).html(this.price + '$');
};

function CTopping() {
    this.parentPizza;
    this.price;
    this.description;
    this.div;
}

CTopping.prototype.init = function(topping, parent) {
    var self = this;
    this.parentPizza = parent;
    this.price = topping.price;
    this.description = topping.description;
    this.div = $('<div class="toppingPizza">' + this.description + ': ' + '$' + this.price  + '</div>');
    this.div.click(function(){
        self.parentPizza.addTopping(self);
        self.parentPizza.updatePrice(topping.price);
    });
    
};

for(var i = 0; i < pizzaArray.length; i++){
    var pizza = new CPizza();
    pizza.init(pizzaArray[i]);
    pizzaAvailableArray.push(pizzaArray[i]);
}

for(var i = 0; i < toppings.length; i++){
    var topping = new CTopping();
    topping.init(toppings[i], this);
    this.toppingAvailable.push(topping);

    $('.toppingSelect').append(self.toppingAvailable[i].div);
}