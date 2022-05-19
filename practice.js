//declaration of variables
let product=prompt("please enter your product:");
let userName=prompt("please put name:")
let userEmail=prompt("enter email:");
let price=Number (prompt("enter price:"));
let qty=Number(prompt("enter quantity:"));

//calculate 
let anualSalary=100
let tax=.1

//display on html
document.write(`
    <div class="container">
        <h1>Daniel's Store</h1>
        <p><span>Product:</span> ${product} </p>
        <p><span>Name:</span> ${userName}
        <p><span>Email:</span> ${userEmail}</p>
        <p><span>Price:</span> ${price}</p>
        <p><span>Qty:</span> ${qty}
        <p><span>Tax:</span> ${tax}</p>
        <p><span>Total:</span> ${(price*qty)*tax+(price*qty)}</p>
        
     </div>
`);
