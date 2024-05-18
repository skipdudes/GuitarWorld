function check_session()
{
	var div = document.getElementById("exercise");
	if(sessionStorage.exercise) 
	{
		if(sessionStorage.exercise==1) 	div.innerHTML = "<br /><b>Brawo! Trzymaj dalej tę formę :)</b>";
		if(sessionStorage.exercise==0) 	div.innerHTML = "<br /><b>Nic się nie stało, zawsze możesz zacząć od jutra ;)</b>";
	}
}

function set_session(x)
{
	sessionStorage.setItem('exercise', x);
	check_session()
}