const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function animateSecondHand() {
	const time = new Date();
	const seconds = time.getSeconds();
	const secondsDegree = Math.trunc((seconds / 60) * 360);
	secondHand.style.transform = `rotate(${secondsDegree - 90}deg)`;
	console.log(seconds);
}
setInterval(animateSecondHand, 1000);
