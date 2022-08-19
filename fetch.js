const products = document.getElementById("products");
const fruList = document.getElementById("fruList");
const vegList = document.getElementById("vegList");

async function getitems(item,element){
  const response = await fetch("http://localhost:5000/"+item).then((response)=>{
   return response.json();
   }).then((data)=>{ data.forEach((grocerry) => {
     const li = document.createElement("li");
     li.innerHTML = grocerry["name"].concat("<br/>").concat(grocerry["category"]);
     element.appendChild(li);
   });
 })
}

//Products
getitems("products",products);

//fruits
getitems("products/fruits",fruList);

//vegetables
getitems("products/vegetables",vegList);
