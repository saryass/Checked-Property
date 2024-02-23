// .checked =

const myCheckbox = document.getElementById('myCheckbox');
const visaBTN = document.getElementById('visaBTN');
const masterCardBTN = document.getElementById('MasterCardBTN');
const payPaldBTN = document.getElementById('PayPaldBTN');
const submitBTN =document.getElementById('submitBTN');
const checkBoxResult = document.getElementById('checkBoxResult');
const paymentResult= document.getElementById('paymentResult');


submitBTN.onclick = function () {

if(myCheckbox.checked) {         // just like Boolean Variable, (.checked) roperty will be the condition itself for the TRUE ;)
    checkBoxResult.textContent = 'Well done, you are subscribed.';
    checkBoxResult.style.color='black';
}
else {     // means if the user do not check the checkbox:
    checkBoxResult.textContent = 'you are NOT subscribed yet, please subscribe.';
    checkBoxResult.style.color='red';
}


if(visaBTN.checked) {     // just like Boolean Variable, (.checked) roperty will be the condition itself for the TRUE ;)
    paymentResult.textContent = 'You are paying with Visa.'
    paymentResult.style.color= 'black'
} 
else if(masterCardBTN.checked) {      // just like Boolean Variable, (.checked) roperty will be the condition itself for the TRUE ;)
    paymentResult.textContent = 'You are paying with MasterCard.'
    paymentResult.style.color= 'black'
}

else if(payPaldBTN.checked) {     // just like Boolean Variable, (.checked) roperty will be the condition itself for the TRUE ;)
    paymentResult.textContent = 'You are paying with Paypal.'
    paymentResult.style.color= 'black'
}

else {     // Means if the used do not select any radio Button:
    paymentResult.textContent = 'You MUST select a payment type'
    paymentResult.style.color= 'red'
}
    

}

