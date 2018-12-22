const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function analogClock() {
	const time = new Date();
	const seconds = time.getSeconds();
	const minutes = time.getMinutes();
	const hours = time.getHours();

	const secondsDegree = Math.trunc((seconds / 60) * 360);
	const minutesDegree = Math.trunc((minutes / 60) * 360);
	const hourDegree = Math.trunc((hours / 12) * 360);

	secondHand.style.transform = `rotate(${secondsDegree - 90}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegree - 90}deg)`;
	hourHand.style.transform = `rotate(${hourDegree - 90}deg)`;
}
setInterval(analogClock, 1000);
