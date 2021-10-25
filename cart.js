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

const summedPrice = cart.reduce(reducer,0)
function reducer(prevValue,currVal,currIndex,arr){

}

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
function caclFinalPrice(cartTotal,couponValue,tax){
    taxTotal = cartTotal*tax;
    cartTotalTaxInc = taxTotal+taxTotal;
    cartTotalFinal -= couponValue; 
    return cartTotalFinal

}


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
    
    termAddress: type: 'string': Mr., Mrs., Miss, Mx., Dr., etc: greeting customers politely
    firstName: type: 'string': customer's first name: adding a personal attention value/completing mailing address
    lastName: type: 'string': customer's last name: adding a personal attention value/completing mailing address
    streetAddress: type: 'string': customer's street address: completing mailing address
    cityAddress: type: 'string': customer's city: completing mailing address
    stateAddress: type: 'string': customer's state: completing mailing address
    zipCode: type: 'string': customer's zip code: completing mailing address
    phoneNumber: 'string': customer's phone number: method of contacting customer/sending promotions/current events
    email: 'string': customer's email: method of contacting customer/sending promotions/current events

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
                  phoneNumber:`4156666666`,
                  email:'effie@doubtfire.com'}