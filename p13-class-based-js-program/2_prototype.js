//*** Array and Objects are inbuilt constructore in javascript  ***/

// In javascript even a function is a object

// When ever any function is created in js a default property prototype have to also added at the same time.which is an emty javascript object.

function BankAcc(username, bal = 3000) {
   
  this.username = username;
  this.accountNumber = Date.now();
  this.bal = bal;
 
  this.deposit = function(amount){
    this.bal = this.bal + amount
  }
//   this.withdraw = (amount)=>{
//     this.bal -=amount
//   }
//cut this above method and show you to how it should get access from the methods,
}

let custBankDetails = new BankAcc()

// We can not use here arrow function
BankAcc.prototype.withdraw = function(amount){ //Js check where is the withdraw methos in the consturctor when It don't get then Its starts checking in its prototype.
    this.bal -=amount
  }
  custBankDetails.withdraw(500)

  console.log(custBankDetails)