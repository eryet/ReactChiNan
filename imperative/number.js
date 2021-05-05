const AddNumber = () => {
  let number = parseInt(document.getElementById("list-number").innerHTML);
  number += 1;
  document.getElementById("list-number").innerHTML = number;
  return console.log(number);
};

// function AddNumber() {
//     let number = parseInt(document.getElementById("list-number").innerHTML);
//     number += 1;
//     document.getElementById("list-number").innerHTML = number;
//     console.log(number);
// }
