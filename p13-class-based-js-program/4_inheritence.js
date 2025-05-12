class BankAcc{
    constructor(userName, bal = 0){
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
        
        this.bal = this.bal - this.loanAmount
        return this.bal
    }
}

class CurrentAcc extends BankAcc{
    transactionLimit = 50000;
    constructor(userName,bal){
        super(userName,bal)
    }
    takeBusinessLoan(amount){
        console.log("Taking business loan:",amount)
    }

}

class SavingAcc extends BankAcc{
    transactionLimit = 10000;
    constructor(userName,bal){
        super(userName,bal)
    }
    takeBusinessLoan(amount){
        console.log("Taking Personal loan:",amount)
    }

}

const customerSavingAcc = new SavingAcc("Jaydeep",3000)
console.log(customerSavingAcc)
customerSavingAcc.takeBusinessLoan(300)

