///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const cartTotal = cart.reduce((prevValue, currVal) => (Number(prevValue) + Number(currVal.price)),0)
// const reducer = (prevValue, currVal) => (prevValue + currVal.price, 0)
console.log(`Your cart total is currently: ${cartTotal}`);
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal,couponValue,tax){
    taxTotal = cartTotal*tax;
    cartTotalTaxInc = taxTotal+cartTotal;
    cartTotalFinal = cartTotalTaxInc - couponValue; 
    console.log(`Your subtotal is: ${cartTotal} with a tax rate of ${tax} and a coupon valued at ${couponValue} for a final balance due of: ${cartTotalFinal}`)
    return cartTotalFinal
}
calcFinalPrice(cartTotal,2.00,.06)




//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    
    termAddress: type: 'string': Mr., Mrs., Miss, Mx., Dr., etc: Greeting customers politely. I chose a string because this item requires alphabetical characters.
    firstName: type: 'string': customer's first name: Adding a personal attention value for greetings/completing mailing address. I chose a string because this item requires alphabetical characters.
    lastName: type: 'string': customer's last name: adding A personal attention value/completing mailing address. I chose a string because this item requires alphabetical characters.
    streetAddress: type: 'string': customer's street address: Completing mailing address.  I chose a string because this item requires alphanumeric characters as well as white space.
    cityAddress: type: 'string': customer's city: completing mailing address. I chose a string because this item requires alphabetical characters.
    stateAddress: type: 'string': customer's state: completing mailing address. I chose a string because this item requires alphabetical characters.
    postalCode: type: 'string': customer's postal code: completing mailing address. I chose a string because this item may require alphabetical as well as numeric characters, depending on origin of address of customer.
    country: type: 'string': customer's country: completing mailing address. I chose a string because this item requires alphabetical characters and may include white space.
    phoneNumber: 'string': customer's phone number: method of contacting customer/sending promotions/current events/coupons. I chose string to allow more flexible user entry, varying quantities of input lengths and also in terms of including (), -, . in between numbers, or possibly + preceeding a country code. 
    email: 'string': customer's email: method of contacting customer/sending promotions/current events. I chose a string because this item requires a collection of alphanumeric and special characters.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {termAddress:`Mrs.`, 
                  firstName: `Euphegenia`, 
                  lastNAme: `Doubtfire`, 
                  streetAddress: `2640 Steiner St`, 
                  cityAddress: `San Francisco`, 
                  stateAddress: `CA`,
                  postalCode: `94115`,
                  country: `United States`,
                  phoneNumber:`4156666666`,
                  email:'effie@doubtfire.com'}
    console.log(customer);
