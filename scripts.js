
	var darthVadar = ['<img src="https://image.ibb.co/hcMBO5/darth.png" class="icon"alt="darth" border="0" /><div id="darth">Darth Vadar: If only you knew the power of the Dark Side. Obi-Wan never told you what happened to your father.</div>', '<img src="https://image.ibb.co/hcMBO5/darth.png" class="icon"alt="darth" border="0" /><div id="darth">No, I am your father.</div> ', '<img src="https://image.ibb.co/hcMBO5/darth.png" class="icon"alt="darth" border="0" /><div id="darth">Search your feelings; you know it to be true!</div>'];

	var lukeSkywalker = ['<img src="https://image.ibb.co/eQPWO5/luke.png"  class="icon" alt="luke" border="0" /><div id="luke">He told me enough! He told me you killed him!</div>', '<img src="https://image.ibb.co/eQPWO5/luke.png"  class="icon" alt="luke" border="0" /><div id="luke">No. No! That\'s not true! That\'s impossible!</div>', '<img src="https://image.ibb.co/eQPWO5/luke.png"  class="icon" alt="luke" border="0" /><div id="luke">NOOOOOOO! NOOOOOOOO!!!</div>'];

	function theScene(father, child){
		for(i=0; i <father.length; i++){
		document.write('<p>' + father[i] + '</p>');
		document.write('<p>' + child[i]+ '</p>');
		}
	}

theScene(darthVadar, lukeSkywalker);
