const ThisIsAnArray = () => [
  myVariable,
  function test(myVariable) {
    return myVariable;
  },
];

const [variable, myVariable] = ThisIsAnArray();

console.log(variable);
