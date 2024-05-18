function set_color(x)
{
	var div = document.getElementById("epilp");
	
	if(x==1) div.setAttribute("src", "img/epi1.png");
	else if(x==2) div.setAttribute("src", "img/epi2.png");
	else if(x==3) div.setAttribute("src", "img/epi3.png");
	else if(x==4) div.setAttribute("src", "img/epi4.png");
}

function show_flying()
{
	document.getElementById("maindiv").style.height = "1670px";
	var divparent = document.getElementById("divparent");
	divparent.innerHTML = "";
	
	var div = document.getElementById("flyingv");
	
	var h1 = document.createElement('h1');
	var texth1 = document.createTextNode('Flying V');
	h1.appendChild(texth1);
	div.appendChild(h1);
	
	var text = document.createTextNode('Wygląda nieźle. Jego przetworniki to humbuckery.');
	div.appendChild(text);
	var br1 = document.createElement('br');
	var br2 = document.createElement('br');
	div.appendChild(br1);
	div.appendChild(br2);
	
	var div2 = document.createElement('div');
	div2.setAttribute("style", "text-align: center;");
	
	var img = document.createElement('img');
	img.setAttribute("src", "img/flyingv.png");
	img.setAttribute("alt", "Gibson Flying V");
	div2.appendChild(img);
	div.appendChild(div2);
	
	var br3 = document.createElement('br');
	var br4 = document.createElement('br');
	div.appendChild(br3);
	div.appendChild(br4);
}