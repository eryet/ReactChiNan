class Name {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  phone_number() {
    return console.log(123456);
  }
}

const gender = () => {
  return `Male`;
};

// console.log(typeof Name);
// function
const myname = new Name("Chen", "Wei Ming");

console.log(myname);
// Name { firstname: 'Chen', lastname: 'Wei Ming' }
console.log(typeof myname);
// object
// console.log(myname.firstname + " " + myname.lastname);
// Chen Wei Ming
myname.phone_number();
// 123456
