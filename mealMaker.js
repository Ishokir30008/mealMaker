/* Meal Maker JavaScript app randomly create a 3 course meal based on what is available on a menu. */

//menu object
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn
  },
  
   get mains() {
     return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains = mainIn;
  },
  
   get desserts() {
     return this.courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts = dessertIn;
  },

/*courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.*/
  get courses() {
    return {
  appetizers: this.appetizers,  // this uses the appetizer getter method
  mains: this.mains,
  desserts: this.desserts
  }
  },

  //Adding a new dish to the specified course on the menu.
  addDishToCourse (courseName, dishName, dishPrice) {
     /* The method created an object (dish) which has a name and price which it gets from the parameter. And then push this dish object into the appropriate array in the menu‘s _courses object based on what courseName was passed in. */
     const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish); // also try using your setter method!
  },
  /* This function get a random dish from a course on the menu, which will be necessary for generating a random meal. */
  getRandomDishFromCourse(courseName) {
    /* Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes. */
    const dishes = this._courses[courseName];
    /* Generating a random index by multiplying Math.random() by the length of the dishes array (This will guarantee the random number will be between 0 and the length of the array) */
    const randomIndex = Math.floor(Math.random() * dishes.length);
    // return a dish from `dishes` by using `randomIndex`
    return dishes[randomIndex];
  },

  /* This function automatically generate a three-course meal. The function doesn’t need to take any parameters. */
  generateRandomMeal(){
    /* The function creates an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when an appetizers string is pass to it */
    const appetizer = this.getRandomDishFromCourse('appetizers');
    /* The function creates a main variable and dessert variable the same way you created the appetizer variable, but making sure to pass in the right course type. */
   const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
  /* The function calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like*/
  const totalPrice = appetizer.price + main.price + dessert.price;

  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. And the total price is ${totalPrice}.`;
  },
//Above complete the menu object.
};

//Below is the creation of menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function.
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'fufu and okro soup', 10.25);
menu.addDishToCourse('desserts', 'ice cream', 1.25);

/* Now generating a meal by using the .generateRandomMeal() function on menu, and save it to a variable called meal. Lastly, print out meal variable to see what meal was generated. */
let meal = menu.generateRandomMeal();
console.log(meal);