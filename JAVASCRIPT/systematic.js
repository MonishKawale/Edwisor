//keepAsking();		
window.onload=function()
{
var input= prompt("Do you want to make carrier in CTS? \n (yes/no)");

if(input=="yes")
{
	alert("Welcome");
}
else if(input=="no")
{
	alert("Thank You");
}
else
{
	prompt("Invalid Entry \n Do you want to make carrier in CTS? (yes/no)");
}
}

function revealmessage(){
	alert('Registered Succesfully');
	window.stop();
}