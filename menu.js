///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {name:"Margherita", price:12, category:"entree", popularity:99, rating:87, tags:[`gluten-free crust available`, `vegetarian`]};
//console.log(pizza)


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(`Popularity of ${pizza.name} is: ${pizza.popularity}.`);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(`Tags for ${pizza.name}: ${pizza.tags[1]}`)
/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
const {price} = pizza;
console.log(`The price for ${pizza.name} is: ${price}`);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
const {category} = pizza;
console.log(`The category for ${pizza.name} is: ${category}`);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [{name:"Margherita", price:12, category:"entree", popularity:99, rating:94, tags:[`gluten-free crust available`, `vegetarian`, 'not spicy']},
                {name:"Diavola", price:15, category:"entree", popularity:85, rating:80, tags:[`gluten-free crust available`, `contains pork products`, `spicy`]},
                {name:"Siciliana", price:14, category:"entree", popularity:80, rating:75, tags:[`gluten-free crust available`, `vegetarian`,`not spicy`]},
                {name:"Quattro formaggi con ananas", price:17, category:"entree", popularity:70, rating:65, tags:[`gluten-free crust available`, `vegetarian`, `contains a large quantity of dairy`]},
                {name:"Tonno e cipolla", price:16, category:"entree", popularity:75, rating:70, tags:[`gluten-free crust available`, `contains fish`, 'pescartarian']}]
//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

 function filteredFood(elementSearchTag){
    return foodArr.filter(index=>{
         return index.tags.includes(elementSearchTag) ;
         })
};

    console.log(filteredFood(`contains fish`));

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

function filterByProperty (property, number, type){
    arrFilter = foodArr.filter(isAboveBelow =>{
    
        if (property === `rating`){
            if (((type ===`above`)) && ((isAboveBelow.rating > number))||((type ===`below`) && (isAboveBelow.rating < number ))){
                return true;
                } else {return false;
                    }
            }
                else if(property === `popularity`){
                    if(((type ===`above`) && (isAboveBelow.popularity > number))||((type ===`below`) && (isAboveBelow.popularity < number))){
                        return true;
                        }else{return false;
                            }
                    }
                        else if(property === `price`){
                                if(((type ===`above`) && (isAboveBelow.price > number))||((type ===`below`) && (isAboveBelow.price < number))){
                                    return true;
                                    }else{return false;
                                        }
                            }
                })
            return arrFilter;
        }

// /*
//     Invoke the `filterByProperty` function passing
//     in a value for each paramter.

//     You'll have to console.log to see the filtered array
// */

// //CODE HERE
 console.log(filterByProperty('price', 20, 'below'));
 console.log(filterByProperty('price', 15, 'below'))
