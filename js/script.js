

function showList(event){
	var clickedButton=this.id;
	console.log(clickedButton);
	var newSelector=clickedButton.replace("b","l");
	var newClass="";
	var newText="MORE INFO";
	if (this.textContent=="MORE INFO") {
		newClass="";
		newText="LESS";
	}
	else {
		newClass="hidden-xs hidden-sm";
		newText="MORE INFO";		
	}
	document.querySelector("#"+newSelector).className=newClass;
	this.textContent=newText;

}
document.querySelector("#bMSFT").addEventListener("click",showList);
document.querySelector("#bNOKIA").addEventListener("click",showList);
document.querySelector("#bNSN").addEventListener("click",showList);
document.querySelector("#bEDU").addEventListener("click",showList);
