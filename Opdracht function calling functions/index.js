function sayHello(){
    // console.log("Hello there");
    console.log("Nice to meet you");
    return sayHello;
}
// console.log("Nice to meet you");

function ageChecker(age){
    if(age >=18){
        return sayHello();
    }else{
        return "Hey kiddo";
    }
}
    console.log(ageChecker(12));


// VAT exersice 1

const calculatePriceIncludingVat = function(price){
    const consumptionTax = .21;
    const foodTax = .09;
    const totalPrice = price * (1 + consumptionTax);
    return totalPrice;

}
console.log(calculatePriceIncludingVat(1000));
console.log(calculatePriceIncludingVat(2));
console.log(calculatePriceIncludingVat(5));


// VAT exersice 2

const basePrice = function(price1, price2, price3){
    const consumptionTax2 = .21;
    // const foodTax2 = .09;
    totalPrice2 = price1, price2, price3 * (1 + consumptionTax2);
    return totalPrice2

}
const result2 = basePrice ([2, 3, 4,]);
console.log(result2);

