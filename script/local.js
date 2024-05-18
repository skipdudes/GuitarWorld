function check_name()
{
	var div = document.getElementById("bigtitle");
	var div2 = document.getElementById("forvisitor");
	if(localStorage.visitor) 
	{
		div.innerHTML = "Witaj, " + localStorage.visitor;
		div2.innerHTML = "Jeżeli chcesz zmienić wyświetlane imię, to wprowadź nowe tutaj";
	}
}

function set_name() 
{
	var name = document.getElementById("visitor").value;

	if(name!="") 
	{
		localStorage.setItem('visitor', name);
		check_name();
	}
}