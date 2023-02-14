


 
//  deposit section ====================
document.getElementById('btn-deposit').addEventListener('click',function(){
    const inputDepositElement = document.getElementById('input-deposit');
    const newinputDepositAmountString = inputDepositElement.value;
    const newinputDepositAmount = parseFloat(newinputDepositAmountString);

    const totalDepositElement = document.getElementById('total-deposit');
    const previoustotalDepositAmoutString = totalDepositElement.innerText;
    const previoustotalDepositAmount = parseFloat(previoustotalDepositAmoutString);

    const currentTotalDepositAmount = newinputDepositAmount+previoustotalDepositAmount;
          totalDepositElement.innerText = currentTotalDepositAmount;

   const totalBalanceElement = document.getElementById('total-balance');
   const previousTotalBalanceAmountString =  totalBalanceElement.innerText;
   const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountString);

   const currentTotalBalance = previousTotalBalanceAmount + newinputDepositAmount ;
         totalBalanceElement.innerText = currentTotalBalance;

         inputDepositElement.value = '';
})











