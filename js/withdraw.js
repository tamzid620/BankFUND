


//  withdraw section ====================
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const inputWithdrawElement = document.getElementById('input-withdraw');
    const newinputWithdrawAmountString = inputWithdrawElement.value;
    const newinputWithdrawAmount = parseFloat(newinputWithdrawAmountString);
        console.log(newinputWithdrawAmount);
   
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previoustotalWithdrawAmountString = totalWithdrawElement.innerText;
    const previousTotalWithdrawAmount = parseFloat(previoustotalWithdrawAmountString);

    const currentWithdraTotalAmount = newinputWithdrawAmount + previousTotalWithdrawAmount;
          totalWithdrawElement.innerText = currentWithdraTotalAmount;
   
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceAmountString = totalBalanceElement.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceAmountString);

    const currentTotalBalance = previousTotalBalanceAmount - newinputWithdrawAmount;
        totalBalanceElement.innerText = currentTotalBalance;

        inputWithdrawElement.value = '';

        if(isNaN(newinputWithdrawAmount)){
            alert('please provide a valid number');
        }

        if(newinputWithdrawAmount > previousTotalBalanceAmount){
            alert('You do not have enough suffucient balance');
            return;
        }
})























