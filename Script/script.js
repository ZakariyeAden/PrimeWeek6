console.log('hello');

// Step 1: Come up with data model (In this case of box items un an array of objective)
// Step 2: Come up with some example data

let animals = [
  {
    name: 'Cat',
    awesomeLevel: 9,
  },
  {
    name: 'Dog',
    awesomeLevel: 8,
  },
  {
    name: 'Guinea pig',
    awesomeLevel: 2,
  },
  {
    name: 'Rat',
    awesomeLevel: 6,
  },
  {
    name: 'Fish',
    awesomeLevel: 4,
  },
];


/* 
  Lets write some psuedo code!

  * Make a function that takes in a box of items as an argue
  * Declare a new variable
  * Assign it to value to an empty array
* Loop through the box of items
  * IF
    * Check item awesomeLevel is > 7
    * Push the item into the new array
  * ELSE
    * Do nothing i guess
* Return the new Array 
  

*/
// Input:
    // Array of Objects, where each object
    // has a name and awesomeLevel property
// Output:
    // An array of awesomeLevel where each object 
    // awesomeLevel property is above 7
function findAwesomeItem(items){
  let awesomeItems = [];
  for(let item of animals){
    if(item.awesomeLevel > 7){
      awesomeItems.push(item);
      console.log('Items in loop', awesomeItems);
    }
  }
  // Return the items above 
  return awesomeItems
}

// Document our expectation
findAwesomeItem();
console.log('Expect an array containing Cat and Dog objects!', findAwesomeItem());