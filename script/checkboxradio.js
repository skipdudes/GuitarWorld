$( function()
{
	$( "#radio-1,#radio-2" ).checkboxradio(
	{
		icon: false
	});
} );
			
$('input[type=radio][name=radio-1]').change(function()
{
	var result = document.getElementById("resultvote");
	if (this.id == 'radio-1')
	{
		result.innerHTML = "<b>Dzięki, chociaż to była głównie improwizacja ;)</b>";
	}
    else if (this.id == 'radio-2')
	{
		result.innerHTML = "<b>Dziękuję, nauczyłem się tej melodii ze słuchu</b>";
    }
});