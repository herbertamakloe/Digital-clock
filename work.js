// 'use strict'

const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("ampm");
const todImage = document.querySelector(".time_of_day_img");
const greeting = document.querySelector(".time_of_day_img h2");

const updateClock = () => {
	let hourFigure = new Date().getHours();
	let minuteFigure = new Date().getMinutes();
	let secondFigure = new Date().getSeconds();
	let ampmLogic = "AM";

	if (hourFigure >= 0 && hourFigure < 12) {
		console.log("It's morning!!!!");
		greeting.innerHTML = "Good morning!";
		amPm.innerHTML = "AM";
	} else if (hourFigure >= 12 && hourFigure < 17) {
		console.log("The sun is setting");
		todImage.style.backgroundImage = "url(/images/afternoon-img.svg)";
		greeting.innerHTML = "Good afternoon!";
		amPm.innerHTML = "PM";
	} else if (hourFigure === 18) {
		console.log("The sun is setting");
		todImage.style.backgroundImage = "url(/images/evening-img.svg)";
		greeting.innerHTML = "Good evening!";
		amPm.innerHTML = "PM";
	} else if (hourFigure >= 19) {
		console.log("It's evening");
		todImage.style.backgroundImage = "url(/images/evening-img.svg)";
		greeting.innerHTML = "Good night!";
		amPm.innerHTML = "PM";
	}

	hourFigure = hourFigure < 10 ? "0" + hourFigure : hourFigure;
	minuteFigure = minuteFigure < 10 ? "0" + minuteFigure : minuteFigure;
	secondFigure = secondFigure < 10 ? "0" + secondFigure : secondFigure;

	hour.innerHTML = hourFigure;
	minutes.innerHTML = minuteFigure;
	seconds.innerHTML = secondFigure;

	setTimeout(() => {
		updateClock();
	}, 1000);

	console.log(hourFigure, minuteFigure, secondFigure);
};

updateClock();
