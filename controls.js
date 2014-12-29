// global
var player;
var intv;

window.onload = function (){

			document.getElementById('btnPlay').addEventListener('click',playMusic, false);
			document.getElementById('btnPause').addEventListener('click',pauseMusic, false);
			document.getElementById('btnStop').addEventListener('click',stopMusic, false);

			document.getElementById('btnVolUp').addEventListener('click',volUp, false);
			document.getElementById('btnVolDown').addEventListener('click',volDown, false);

			player = document.getElementById('player');

			slider = document.getElementById('sliderTime');
			slider.addEventListener('chage',reposition, false);
			
		}

	

		// Play Music Controls
		function playMusic(){
			player.play();
			intv = setInterval(update, 100);

			slider.max = player.duration;
			
		}

		function pauseMusic(){
			player.pause();
			clearInterval(intv);

		}

		function stopMusic(){
			player.pause();
			player.currentTime = 0;
			clearInterval(intv);
		}

		function volUp(){
			if (player.volume < 1) {
				player.volume += 0.1;
				//console.log(player.volume);
			}else{
				player.volume = 1;
			}
		}
		function volDown(){
			if (player.volume > 0) {
				player.volume -= 0.1;
				console.log(player.volume);
			}else{
				player.volume = 0;
			}
		}	


		// Time
		function update (){
			document.getElementById('songTime').innerHTML = millisToMins(player.currentTime);
			slider.value = player.currentTime;
		}
		
		function reposition(){
			player.currentTime = slider.value;
			console.log("se esta ejecutando reposition");

		}

		function millisToMins(seconds){

			var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
			var numseconds = (((seconds % 31536000) % 86400) % 3600) / 60;

				// if (numseconds >= 10) {
				// 	return numminutes + ":" + Math.round(numseconds);
				// }else{
				// 	return numminutes + ":0" + Math.round(numseconds);
				// }

				return numminutes + ":" + numseconds; 
			
			}
		

























		