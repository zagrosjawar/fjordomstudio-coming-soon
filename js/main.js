/* Fjordom Studio – «Kommer snart»
   Gjør ingenting før en bakgrunnsvideo (.hero-video) er lagt inn i index.html.
   Da legger skriptet til en knapp for pause og avspilling, og respekterer
   «redusert bevegelse» ved å vise stillbildet (poster) i stedet. */
(function () {
	"use strict";

	var video = document.querySelector(".hero-video");
	if (!video) return;

	var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

	var button = document.createElement("button");
	button.type = "button";
	button.className = "video-toggle";
	document.querySelector(".site-header").appendChild(button);

	function render() {
		var paused = video.paused;
		button.textContent = paused ? "Spill av bakgrunnsvideo" : "Sett bakgrunnsvideo på pause";
		button.setAttribute("aria-pressed", String(!paused));
	}

	function stop() {
		video.pause();
		video.removeAttribute("autoplay");
		render();
	}

	button.addEventListener("click", function () {
		if (video.paused) {
			var p = video.play();
			if (p && p.catch) p.catch(render);
		} else {
			video.pause();
		}
		render();
	});
	video.addEventListener("play", render);
	video.addEventListener("pause", render);

	if (reduce.matches) stop();
	if (reduce.addEventListener) {
		reduce.addEventListener("change", function (e) { if (e.matches) stop(); });
	}
	render();
})();
