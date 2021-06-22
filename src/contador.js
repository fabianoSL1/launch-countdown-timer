const elDias = document.getElementById("dias");
const elHoras = document.getElementById("horas");
const elMinutos = document.getElementById("minutos");
const elSegundos = document.getElementById("segundos");

var alvo = new Date().getTime();
alvo += Math.random() * 15 * (24 * 60 * 60 * 1000);
 
var timer = setInterval(
	() => {
		let agora = new Date();
		let diff = alvo - agora.getTime();

		if (alvo <= agora) {
			clearInterval(timer);
			return;
		}

		let dias = Math.floor(diff / (24 * 60 * 60 * 1000));
		let horas = Math.floor(diff / (60 * 60 * 1000)) % 24;
		let minutos = Math.floor(diff / (60 * 1000)) % 60;
		let segundos = Math.floor(diff / 1000) % 60;

		let formatar = (elemento, dado) => {
			elemento.textContent = dado < 10 ? "0" + dado : dado;
		}

		formatar(elDias, dias);
		formatar(elHoras, horas);
		formatar(elMinutos, minutos);
		formatar(elSegundos, segundos);
	},
1000);

