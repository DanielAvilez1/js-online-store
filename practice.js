//declaration of variables
let userName=prompt("please enter your name:");
let userEmail=prompt("enter email:");
let monthlySalary=Number (prompt("enter salary"));

//calculate the yearly salary
let yearlySalary= monthlySalary*12;

//display on html
document.write(`
    <div class="container">
        <p><span>Name:</span> ${userName} </p>
        <p><span>Email:</span> ${userEmail}</p>
        <p><span>Salary:</span> ${yearlySalary}</p>
     </div>
`);
