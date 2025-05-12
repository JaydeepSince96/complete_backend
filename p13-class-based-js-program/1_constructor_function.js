function BankAcc(username, bal = 0) {
    // variable inside class call properties and the function inside class we call them methos
  this.username = username;
  this.accountNumber = Date.now();
  this.bal = bal;
  //You can define the function something like this way.
  this.deposit = function(amount){
    this.bal = this.bal + amount
  }
  this.withdraw = (amount)=>{
    // You can use arrow function and can write this shortcut syntax as well
    this.bal -=amount
  }
}

const customerBankDetails = new BankAcc("jaydeep",1000)
customerBankDetails.deposit(5000)
customerBankDetails.withdraw(50)
console.log(customerBankDetails)
