var url = "http://localhost:3000/products"
var btn = document.querySelector("#btn");


//
//btn.addEventListener("click", function(){
//    fetch(url)
//    .then(handleErrors)
//    .then(parseJSON)
//    .then(addItems)
//    .catch(printError)
//});
//
//
//function handleErrors(request){
//  if(!request.ok){
//    throw Error(request.status);
//  }
//  return request;
//}
//
//function parseJSON(response){
//  return response.json()
//}
//
//function addItems(data){
//    var container = document.querySelector('.recommended__container');
//    var newProduct = document.createElement('div');
//    newProduct.setAttribute('class', 'recommended__products');
//    container.appendChild(newProduct);
//    container.insertBefore(newProduct, container.lastChild);
//    for(var i=0; i<data.length; i++){
//          console.log(data[i])
//        
//    }
////    document.querySelector(".recommended__container").innerHTML = newContent;
//  }
//
//function printError(error){
//  alert(error);
//}

//btn.addEventListener("click", function(){
//    var container = document.querySelector('.recommended__container');
//    var newProduct = document.createElement('div');
//    newProduct.setAttribute('class', 'green');
//    container.appendChild(newProduct);
//    var newImg = document.createElement('div');
//    newImg.setAttribute('class', 'products--image');
//    newProduct.appendChild(newImg);
//});
