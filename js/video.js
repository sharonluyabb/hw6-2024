var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector ("#player1");
	video.autoplay = false;
	video.loop = false;
		//console log: both of autoplay and loop are set to false
		console.log("Both autoplay and loop are set to false.");
		document.querySelector("#play").addEventListener("click", function() {
			video.play()
			document.querySelector("#volume").textContent = `Volume: ${Math.round(video.volume * 100)}%`;
        	console.log("Play Video");
	});

	document.querySelector("#pause").addEventListener("click", function () {
        video.pause();
        console.log("Pause Video");
    });


	document.querySelector ("#slower").addEventListener("click", function() {
		//console log: slow down video 
		video.playbackRate = Math.max(0.1, video.playbackRate - 0.1); // slow down 10%
		// console log: new speed is ..
		console.log(`New speed is ${video.playbackRate.toFixed(2)}`);
	});

	document.querySelector("#faster").addEventListener("click", function () {
        video.playbackRate = Math.min(5, video.playbackRate + 0.1); // Limit speed to 5x
        console.log(`New speed is ${video.playbackRate.toFixed(2)}`);
    });

	document.querySelector("#skip").addEventListener("click", function () {
        video.currentTime = (video.currentTime + 10) % video.duration; // Loop to start if exceeded
        console.log(`Current time is ${video.currentTime.toFixed(2)} seconds`);
    });

	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
        console.log(video.muted ? "Muted" : "Unmuted");
	});

	document.querySelector("#slider").addEventListener("input", function () {
        video.volume = this.value / 100; // Convert slider value (0-100) to 0-1
        document.querySelector("#volume").textContent = `Volume: ${Math.round(video.volume * 100)}%`;
        console.log(`Volume is now ${Math.round(video.volume * 100)}%`);
    });

	document.querySelector("#vintage").addEventListener("click", function () {
        video.classList.add("oldSchool");
        console.log("Old School style added.");
    });

	document.querySelector("#orig").addEventListener("click", function () {
        video.classList.remove("oldSchool");
        console.log("Original style restored.");
    });
});

