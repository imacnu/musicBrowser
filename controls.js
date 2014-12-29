window.onload = function (){
			document.getElementById('btnPlay').addEventListener('click',playMusic, false);
			document.getElementById('btnPause').addEventListener('click',pauseMusic, false);
			document.getElementById('btnStop').addEventListener('click',stopMusic, false);

			document.getElementById('btnVolUp').addEventListener('click',volUp, false);
			document.getElementById('btnVolDown').addEventListener('click',volDown, false);

			player = document.getElementById('player');
		}

		// Play Music Controls
		function playMusic(){
			player.play();
			intv = setInterval(update, 100);
		}

		function pauseMusic(){
			player.pause();
		}

		function stopMusic(){
			player.pause();
			player.currentTime = 0;
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
			document.getElementById('songTime').innerHTML = player.currentTime;
		}
		