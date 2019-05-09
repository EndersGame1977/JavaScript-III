/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: If we aren't using a dot and we aren't using call(), apply(), or bind(), our "this" will be our global object.
* 2. Implicit Binding: Occurs when dot notation is used to invoke a function.
* 3. New Binding: Used to create a new variable. Uses .bind()
* 4. Explicit Binding: Occurs when .call(), .apply(), or .bind() are used on a function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
window.this

// Principle 2
// code example for Implicit Binding
const user = {
    name: 'Tyler',
    age: 27,
    greet() {
        alert(`Hello, my name is ${this.name}`)
    }
}
// invoking greet with user.greet() changes this.name to user.name which is "Tyler" 
user.greet()

// Principle 3
// code example for New Binding
function User(name, age) {
    this.name = name
    this.age = age
}
const me = new User('Tyler', 27)

// Principle 4
// code example for Explicit Binding
function greet(l1, l2, l3) {
    alert(
        `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
    )
}
const user = {
    name: 'Tyler',
    age: 27,
}
const languages = ['JavaScript', 'Ruby', 'Python']
greet.call(user, languages[0], languages[1], languages[2])
  //"greet" is the function
  //greet".call()" is a property of the function
  //greet.call("user") is the "this" in the object
  //greet.call(user, "languages[0], languages[1], languages[2]") is the array
