let pizzaToppings = ["pepperoni", " sausage", " bacon", " onions."];

function greetCustomer() {
    console.log("Welcome to Deweys, our toppings are");
    for (topping of pizzaToppings) {
    console.log(`${topping}`)
    }
};
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {

console.log(`One ${size} ${crust} pizza with ${toppings} coming up!`);
return [size, crust, toppings];
};


function preparePizza([size, crust, ...toppings]) {
    let pizza = {
        size: size,
        crust: crust,
        toppings: toppings
}
    console.log("Cooking pizza");
    return pizza;
};
//preparePizza(["large", "thin", "pepperoni", "onion" ]);
function servePizza(pizza) {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} pizza with ${pizza.toppings}.`)

    return pizza;
};
servePizza(preparePizza(getPizzaOrder("large", "thin crust", "pepperoni", " sausage", " bacon", " onion", "olives", "anchovies", "Extra bacon")));



