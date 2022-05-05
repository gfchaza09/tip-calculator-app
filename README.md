# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges helps you to improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: https://github.com/gfchaza09/tip-calculator-app
- Live Site URL: https://gfchaza09.github.io/tip-calculator-app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I reinforced my knowledge in mobile-first workflow, using Flexbox. When I started this project I needed to practice because for me this is the better way to learn. I was learning HTML5, CSS and JavaScript. Regarding HTML5, I have been able to practice the use of tags and then implement a flexbox. As for CSS I have practiced and I have learned to use the backgrounds of the HTML elements. While in JavaScript I've practiced arrow functions, how to use an event listener and how to manipulate the DOM.

To see how you can add code snippets, see below:


Some CSS code I'm proud of: 
```
.desktop-input__bill {
	background: #ebebeb url('./images/icon-dollar.svg') no-repeat 6px 6px;
}

.desktop-input__person {
	background: #ebebeb url('./images/icon-person.svg') no-repeat 6px 6px;
}

.desktop-input__bill, .desktop-input__person {
	color: hsl(183, 100%, 15%);
	border: 0;
	border-radius: 2.5px;
	text-align: right;
	padding: 14px;
	width: 100%;
	height: 30px;
	font-size: 16px;
	caret-color: #5baba2;
}

.desktop-input__bill:hover, .desktop-input__person:hover, 
.tip-button:hover, .button-reset:hover { 
	cursor: pointer;
}

.desktop-input__bill:focus, .desktop-input__person:focus { 
	outline: none;
	box-shadow: 0px 0px 3px 2px #5baba2;
}
```
Some JavaScript code I'm proud of: 
```
const totalCalc = (bill,persons,billAmount) =>{
	inputTotal.value = `${toMoney(bill/persons+billAmount)}`;
}

const tipAmount = (bill,tip,persons) =>{
	inputTipAmount.value = `${toMoney(bill*tip/persons)}`;
	let billAmount = bill*tip/persons;
	return billAmount;
}
```

I chose this code because I feel like I've been polishing it throughout the challenge. At first the code took up a lot of space but I have reduced it considerably, using functions that simplified the code.

### Continued development

My CSS skills need to improve further, as does my ability to flexbox and use proper BEM methodology. I feel like I am not having good practices regarding it. On the other hand I think I need to start digging more about showing errors using try and catch. My goals in the future are to practice promises, async and await, which are knowledge that I have not managed to apply on my own yet.

### Useful resources

- https://www.youtube.com/watch?v=z95mZVUcJ-E - Start learning about HTML5, CSS, and JavaScript by watching these helpful, free courses.
- https://www.globalmentoring.com.mx/ - I have reinforced the knowledge that I previously acquired by watching Ubaldo's 2021 Web Development Course on Udemy 

## Author

- Linkedin - [Gabriel Chazarreta](https://www.linkedin.com/in/gabriel-chazarreta/)
- Frontend Mentor - [@gfchaza09](https://www.frontendmentor.io/profile/gfchaza09)
- Twitter - [@GabrielChaza9](https://www.twitter.com/GabrielChaza9)

