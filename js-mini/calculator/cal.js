function display(num)
{
	document.getElementById("output-screen").value += num;
}

function calculate()
{
	try{
		let x = document.getElementById("output-screen").value;
		let y = eval(x);
		
		document.getElementById("output-screen").value = y;
	}
	catch(err){
		alert("Invalid Input");
	}
}

function clr()
{
	document.getElementById("output-screen").value = "";
}

function del(){
	let opScreen = document.getElementById("output-screen");
	
	opScreen.value = opScreen.value.slice(0,-1);
}


