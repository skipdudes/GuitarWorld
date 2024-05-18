$(function()
{
	$( "#dialog-1" ).dialog(
	{
		closeText: "Zamknij ciekawostkę",
		autoOpen: false,  
	});
	$( "#opener" ).click(function() 
	{
		$( "#dialog-1" ).dialog( "open" );
	});
});