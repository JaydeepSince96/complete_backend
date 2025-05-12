// We can use and access Private property where it defined we can not access it in their sub classes.

class BankAcc{
    userName;
    #bal;
    constructor(userName, bal = 0){
        this.userName = userName;
        this.accNo = Date.now();
        this.#bal = bal;
        this.loanAmount = 200;
        
    }
    Depoaite(amount){
        let roundOffVal = 300
        this.#bal  += amount + roundOffVal;
    }
    Withdraw(amount){
        this.#bal -= amount
    }
    totalBal(){
        
        this.#bal = this.#bal - this.loanAmount
        return this.#bal
    }
  // This is getter
    get balance(){
        return this.#bal
    }
    // This is setter
    set balance(amount){
        this.#bal = amount;
    }
    
}

class CurrentAcc extends BankAcc{
    transactionLimit = 50000;
    constructor(userName,bal){
        super(userName,bal)
    }
    // Private method, I made it private because It has nothing to do outside of the class.
    #calculatingInterect(){
        console.log("Calculating Interest")
    }
    takeBusinessLoan(amount){
        this.#calculatingInterect()
        console.log("Taking business loan:",amount)
    }



}

// const userBankDetails = new BankAcc("jaydeep", 2000)
// //It can be accessible from outside of the class which is a wrong practice.
// // userBankDetails.bal = 6000

// // Private methods don't allow you to access outside of the class.
// // userBankDetails.#bal = "hello"

// console.log(userBankDetails)
// console.log("get balance", userBankDetails.balance)

const currentUserAcc = new CurrentAcc("Jaydeep", 3000)
currentUserAcc.takeBusinessLoan(2000)
