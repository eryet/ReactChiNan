// node 不能用fetch() !!!!

// {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
//   mode: 'cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     'Content-Type': 'application/json'
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   redirect: 'follow', // manual, *follow, error
//   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   body: JSON.stringify(data) // body data type must match "Content-Type" header
// }

// https://alexwohlbruck.github.io/cat-facts/docs/
fetch("https://dog.ceo/api/breeds/image/random/51")
  // https://developer.mozilla.org/en-US/docs/Web/API/Response
  // .then((response) => {
  // //   return console.log(response.json());
  // .then((respi) => {})
  // })
  // .then((json) => {
  //   console.log(json);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
