// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.


function outer(initialBalance){
  let balance=initialBalance;
  return function inner(amount){
    if(amount>balance){
      console.log("Insufficient Balance")
    }
    else{
      balance=balance-amount
      console.log("Withdrawn amount",amount);
      console.log("amount remaining",balance)
    }
  }
}

const withdrawn=outer(3000);
withdrawn(200)
withdrawn(2000)


    