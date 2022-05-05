"use strict";

const totalCalc = (bill,persons,billAmount) =>{
	inputTotal.value = `${toMoney(bill/persons+billAmount)}`;
}

const tipAmount = (bill,tip,persons) =>{
	inputTipAmount.value = `${toMoney(bill*tip/persons)}`;
	let billAmount = bill*tip/persons;
	return billAmount;
}

const selectButton = button => {
	if (button.className !== "tip-button button-select") {
		deselectButton();
		button.classList.add("button-select");
	} else {
		button.classList.remove("button-select");
		tip = 0;
	}
}

const deselectButton = () => {
	document.getElementById("button5").classList.remove("button-select");
	document.getElementById("button10").classList.remove("button-select");
	document.getElementById("button15").classList.remove("button-select");
	document.getElementById("button25").classList.remove("button-select");
	document.getElementById("button50").classList.remove("button-select");
}

const toMoney = valor => {
    return valor.toLocaleString("en-US",{
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    });
}

const showError = mensaje => {
	if (inputPersons.value == "0") {
		errorPersons.textContent = mensaje;
		inputPersons.classList.add ("input-error");
	} else {
		errorPersons.textContent = "";
		inputPersons.classList.remove ("input-error");
	}
}

const validateTip = () => {
	if(inputBill.value !== "" && inputPersons.value !== "") {
		reset.classList.add("btn-able");
	}
	if (inputBill.value !== "" && inputPersons.value !== "" && inputPersons.value != "0")  {
		billAmount = tipAmount(bill,tip,persons);
		totalCalc(bill,persons,billAmount);
	}
}

const inputBill = document.getElementById("bill");

const inputPersons = document.getElementById("people");

const button5 = document.getElementById("button5");
const button10 = document.getElementById("button10");
const button15 = document.getElementById("button15");
const button25 = document.getElementById("button25");
const button50 = document.getElementById("button50");
const inputCustom = document.querySelector(".button-custom");

const inputTotal = document.querySelector(".total");
const inputTipAmount = document.querySelector(".tip-amount");

const reset = document.querySelector(".button-reset");

const errorPersons = document.getElementById("error-persons")

let bill = 0.0;
let persons = 1;
let tip = 0.0;
let billAmount = 0.0;

inputBill.addEventListener("keyup",()=>{
	bill = (parseFloat(inputBill.value) || 0);
	if(inputPersons.value!=="" && tip !== 0.0) {
		reset.classList.add("btn-able");
	}
	if (tip !== 0.0 && inputPersons.value !== "" && inputPersons.value != "0")  {
		billAmount = tipAmount(bill,tip,persons);
		totalCalc(bill,persons,billAmount);
	}
});

inputPersons.addEventListener("keyup",()=>{
	persons = (parseInt(inputPersons.value) || 1);
	showError("Can't be zero");
	if (inputBill.value!=="" && tip !== 0.0) {
		reset.classList.add("btn-able");
	}
	if(inputBill.value!=="" && tip !== 0.0 && inputPersons.value != "0") {
		billAmount = tipAmount(bill,tip,persons);
		totalCalc(bill,persons,billAmount);	
	}
});

button5.addEventListener("click",()=>{
	selectButton(button5);
	tip = 0.05;
	validateTip();
});

button10.addEventListener("click",()=>{
	selectButton(button10);
	tip = 0.10;
	validateTip();
});

button15.addEventListener("click",()=>{
	selectButton(button15);
	tip = 0.15;
	validateTip();
});

button25.addEventListener("click",()=>{
	selectButton(button25);
	tip = 0.25;
	validateTip();
});

button50.addEventListener("click",()=>{
	selectButton(button50);
	tip = 0.50;
	validateTip();
});

inputCustom.addEventListener("click",()=>{
	deselectButton();
	tip = (parseInt(inputCustom.value)|| 0)/100;
	validateTip();
});

inputCustom.addEventListener("keyup",()=>{
	tip = (parseInt(inputCustom.value)|| 0)/100;
	validateTip();
});

reset.addEventListener("click",()=>{
	if (inputBill.value !== "" && tip !== 0.0 && inputPersons.value !== "") {
		deselectButton();
		inputBill.value = "";
		inputPersons.value = "";
		inputCustom.value = "";
		bill = 0.00;
		persons = 1;
		tip = 0;
		billAmount = 0.00;
		billAmount = tipAmount(bill,tip,persons);
		totalCalc(bill,persons,billAmount);
		showError("");
		reset.classList.add("btn-disable");
		reset.classList.remove("btn-able");
	}
});