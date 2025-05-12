// variable declaration (let, const and, var) only possible inside the constructor or inside the the mehods only.

class BankAcc{
    account_type = "saving"
    constructor(userName, bal = 0,accNo=3){
        // let loanAmount = 300;
        // Use let and const declaration only for storing temperary value where It would used in other methods as well. always use this.propertyname
        this.userName = userName;
        this.accNo = Date.now();
        this.bal = bal;
        this.loanAmount = 200;
        
    }
    Depoaite(amount){
        let roundOffVal = 300
        this.bal  += amount + roundOffVal;
    }
    Withdraw(amount){
        this.bal -= amount
    }
    totalBal(){
        // When you have to shouw or return the value please use return keyword.
        this.bal = this.bal - this.loanAmount
        return this.bal
    }
}

const userDetails = new BankAcc("Jay", 3000)
userDetails.Depoaite(2000)
console.log(userDetails.account_type)
console.log( "User Deposite Details:-", userDetails);
console.log("Total balance remain in Bank:-",  userDetails.totalBal())