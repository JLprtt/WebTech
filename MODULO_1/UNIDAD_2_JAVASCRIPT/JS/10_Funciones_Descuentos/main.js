const 
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
})