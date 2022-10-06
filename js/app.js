// Globle Variable
var productNameInput =document.getElementById ('productNameInput');
var productPriceInput =document.getElementById ('productPriceInput');
var productCategoryInput =document.getElementById ('productCategoryInput');
var productDesInput =document.getElementById ('productDesInput');
var addBtn = document.getElementById('addBtn');
var updateBtn =document.getElementById('updateBtn');
var productsContainer =[]; //Array Of Object From 'product'object 

// localStorage Condition 
if( localStorage.getItem('products') != null)
{
    productsContainer = JSON.parse(localStorage.getItem('products'));
    displayProducts();
}
// Add function Validation 
function addProduct()
{
    if(valdiateProdcutName()== true)
    {
        // object
        var product= {
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            des:productDesInput.value,
        }
        productsContainer.push(product)
        displayProducts();
        localStorage.setItem('products' ,JSON.stringify(productsContainer));
        clearProduct();
    }
    else {
        document.getElementById('messageValidation').innerHTML = 'Invalid product Name...';
        clearProduct();
    }
}  
// Clear Product Function 
function clearProduct()
{
    productNameInput.value = '';
    productPriceInput.value ='';
    productCategoryInput.value ='';
    productDesInput.value = '';
}

// display Products function 
function displayProducts() 
{
    
    
    var cointProduct = ``;
    for( var i=0 ; i< productsContainer.length ; i++)
    {
        cointProduct+= `
        <tr >
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].des}</td>
            <td><button onclick='deleteProduct(${i})' class ='btn btn-outline-danger btn-sm '>Delete</button></td>
            <td><button onclick='setForm(${i})'   class ='btn btn-outline-warning btn-sm '>Update</button></td>
            </tr>
            `
        }
        document.getElementById('tablebody').innerHTML =cointProduct;
        document.getElementById('messageValidation').innerHTML = '';
    }
    
//Delete Product Function
function deleteProduct(productIndex)
{
    productsContainer.splice(productIndex,1)
    localStorage.setItem('products' ,JSON.stringify(productsContainer));
    displayProducts();
}
// search Product Name Function 
function searchTerm(term)
{
    var cointProduct = ``;
    for( var i=0 ; i< productsContainer.length ; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true){
            cointProduct+= `
            <tr >
                <td>${productsContainer[i].name}</td>
                <td>${productsContainer[i].price}</td>
                <td>${productsContainer[i].category}</td>
                <td>${productsContainer[i].des}</td>
                <td><button onclick='deleteProduct(${i})' class ='btn btn-outline-danger btn-sm '>Delete</button></td>
                <td><button onclick="setForm(${i})"  class ='btn btn-outline-warning btn-sm '>Update</button></td>
            </tr>
            `
        }
        document.getElementById('tablebody').innerHTML =cointProduct;
        }
        
}
// Glodle Varaible to 'id' in Set Product 
var updateIndex = 0;
// set value before update function
function setForm(id)
{
    updateIndex= id;
        document.getElementById ('productNameInput').value = productsContainer[id].name;
        document.getElementById ('productPriceInput').value = productsContainer[id].price;
        document.getElementById ('productCategoryInput').value = productsContainer[id].category;
        document.getElementById ('productDesInput').value = productsContainer[id].des;
        addBtn.classList.add('d-none')
        updateBtn.classList.replace('d-none' ,'d-block')
}
// update value After Sat function
function updateProdect(){
   if( valdiateProdcutName() == true){
    productsContainer[updateIndex].name = document.getElementById ('productNameInput').value;
    productsContainer[updateIndex].price =document.getElementById ('productPriceInput').value;
    productsContainer[updateIndex].category =document.getElementById ('productCategoryInput').value;
    productsContainer[updateIndex].des =document.getElementById ('productDesInput').value;
    localStorage.setItem('products' ,JSON.stringify(productsContainer));
    displayProducts();
    clearProduct();
    updateBtn.classList.add('d-none');
    addBtn.classList.replace('d-none' , 'd-block')
   }
   else {
    document.getElementById('messageValidation').innerHTML = 'Invalid product Name...';

   }
}
// Reqular Expression Function 
function valdiateProdcutName(){
    var regex =/^[A-Z][a-z]{3,8}$/
    if(regex.test(productNameInput.value) == true){
        return true
    }
    else
    {
        return false
    }
}





























// function validateProduct(){
//     var regex = /^[A-Z][a-z]{3,8}$/;
//     if(regex.test(productNameInput.value) == true) {

//         return true;
//     }
//     else {
//         return false;
//     }
    
// }



// var productName = 'web Developer and Designer And frontend and Backend '
// console.log(productName.replace(/and/ig , '&'));


// methods
// var frindes = [];
// frindes.push('ali')
// var x='Lamyaa';
// var term = 'A'
// console.log(x.toLowerCase().includes(term.toLowerCase()));
