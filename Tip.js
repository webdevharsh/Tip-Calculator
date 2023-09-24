var plus_btn = document.querySelector('.plus-btn'); 
var minus_btn = document.querySelector('.minus-btn'); 
var tip_amount = document.querySelector('.tip_amount_percentage_range');
var bill_amount = document.querySelector('.bill_amount_input');
var check_split_value = document.querySelector('.check_split_value');
//Increment Decrement Of Check split
let a = 1;
plus_btn.addEventListener('click',()=>{
a++
document.querySelector('.check_split_value').innerHTML = a;    
console.log(a)
result();
});

minus_btn.addEventListener('click',()=>{
 a--
 document.querySelector('.check_split_value').innerHTML = a;    
 result();
});

//inner text Input range value

function result(){
document.querySelector('.tip_amount_percentage').innerHTML = tip_amount.value + '%';

//Tip Amount Percentage Convert Into Number
let x = (tip_amount.value / 100) * bill_amount.value;
document.querySelector('.tip_amount_value').innerHTML = '$' + x.toFixed(2);

//Tip Each Person Code

let y = x/a;
document.querySelector('.tpp_value').innerHTML = '$' +  y.toFixed(2);

//Total Per Person

let total =   Number(bill_amount.value) + Number(x);
document.querySelector('.total_amount').innerHTML = total.toFixed(2)
}
