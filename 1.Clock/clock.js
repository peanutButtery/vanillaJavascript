const clockContainer = document.querySelector(".clock"),
	  clockTitle = document.querySelector("h1");

function getTime(){
	let date = new Date();
	let minutes = date.getMinutes();
	let hours = date.getHours();
	let seconds = date.getSeconds();
	let period = "AM";
	if (hours > 12) {
		hours = hours - 12;
		period = "PM";
	} else if (hours == 0) {
		hours = 12;
	} 

	clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours }:
	${minutes < 10 ? `0${minutes}` : minutes }:
	${seconds < 10 ? `0${seconds}` : seconds }:
    ${period}`;
}

function init() {
	getTime();
	setInterval(getTime, 1000);

}

init();
