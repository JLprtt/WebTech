//Formulario información nutricional
const nutritionForm = document.querySelector("#nutritionForm")
const calories = document.querySelector("#calories");
const fat = document.querySelector("#fat");
const carbs = document.querySelector("#carbs");
const fiber = document.querySelector("#fiber");
const protein = document.querySelector("#protein");
const salt = document.querySelector("#salt");

function printProduct(calories, fat, carbs, fiber, protein, salt) {
    
}
/*const 
    form = document.querySelector("#form"),
    price = document.querySelector("#price"),
    discount = document.querySelector("#discount");

function calculateDiscount(price, discount) {
    //price * discount/100-1 
    let aplyDiscount = 1 - discount / 100;
    let finalPrice = price * aplyDiscount;
    return finalPrice;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    let priceValue = price.value,
        discountValue = discount.value,
        finalPrice = calculateDiscount(priceValue, discountValue);
    
    console.log(priceValue, discountValue)
    document.querySelector("#result").innerHTML = `El precio final del producto es ${finalPrice}.`
})*/