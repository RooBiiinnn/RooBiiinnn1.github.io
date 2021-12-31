var balance = 0;
var amount = 0;

document.querySelector("#input1").addEventListener('change', function(e){
  
   amount = amount + Number(e.target.value);
   console.log(amount);
})





document.querySelector("#deposit").addEventListener('click', function(){
   var date = new Date;
   balance = balance + amount;
   document.querySelector("#balance").textContent = "Your current balance is : " + balance + " TK"
   var transaction =  document.querySelector("#transactions").appendChild(document.createElement("p"));
   transaction.innerHTML = "Deposit successfull of BDT: "+ amount + " TK on "+ date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds() + ". Your balance tk is BDT: " + balance;
   transaction.classList.add("deposit");
   amount = 0;
})

document.querySelector("#withdraw").addEventListener('click', function(){
   var date = new Date;
   var fees = amount*0.02;
   var maxwithdraw = (100/102)*balance;   
    
   if((amount+fees) > maxwithdraw){
      alert("You don't have sufficent balance. You can withdraw maximum "+ maxwithdraw + " TK");
      amount = 0;
   } 

   else{
     
      balance = balance - (amount+fees);
      document.querySelector("#balance").textContent = "Your current balance is : " + balance + " TK"
      var transaction =  document.querySelector("#transactions").appendChild(document.createElement("p"));
      transaction.innerHTML = "Withdrawal successfull of BDT: "+ amount + " TK on "+ date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds() + ". Fees: BDT "+ fees + ". Your current balance is BDT: " + balance;
      transaction.classList.add("withdraw");
      amount = 0;
   }
   
})


document.querySelector("#withdrawall").addEventListener('click', function(){
   var confirmation = confirm("Your new balance will be zero. Are you sure?");

   if(confirmation){
      var date = new Date; 
      var maxwithdraw = (100/102)*balance; 
      var fees = maxwithdraw*0.02;
   
      balance = balance - (maxwithdraw+fees);
      document.querySelector("#balance").textContent = "Your current balance is : " + balance + " TK"
      var transaction =  document.querySelector("#transactions").appendChild(document.createElement("p"));
      transaction.innerHTML = "Withdrawal successfull of BDT: "+ maxwithdraw + " TK on "+ date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds() + ". Fees: BDT "+ fees + ". Your current balance is BDT: " + balance;
      transaction.classList.add("withdraw");
      amount = 0;
   }
      
   else {
      var transaction =  document.querySelector("#transactions").appendChild(document.createElement("p"));
      transaction.innerHTML = "Withdrawal has been cancelled";
      transaction.classList.add("withdraw");
   }

})



