function showModal() {
	const element = document.getElementById("modal");
	const audio = document.getElementById("myAudio");

	element.classList.add("show-modal");
	audio.volume = 1;
	audio.play();
}

function hideModal() {
	const element = document.getElementById("modal");
	const audio = document.getElementById("myAudio");

	element.classList.remove("show-modal");
	audio.pause();
}

function onZoadoIn() {
	const item = document.getElementById("meuPau");

	item.style.display = '';
}

function onZoadoOut() {
	const item = document.getElementById("meuPau");

	item.style.display = 'none';
}