const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
function getproducts(){
  fetch('localhost:5000/products')
  .then((response) => response.json())
  .then((data) => console.log(data));

}
getproducts();

function getfriutList(){
  fetch('localhost:5000/fruitList')
  .then((response) => response.json())
  .then((data) => console.log(data));
}
getfriutList();


