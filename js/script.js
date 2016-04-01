// var message="in global";
// console.log (message);
// var a= function() {
// 	var message="inside function";
// 	console.log(message);
// }

// function Test (h,w){
// 	this.height = h;
// 	this.width = w;

// }
// Test.prototype.area= function (){
// 	return this.height*this.width;
// }
// var mySquare= new Test(3,4);

// testObject={
// 	name : "Ramon",
// 	sayName: function(){
// 		console.log("Hello "+this.name)
// 	}

// };

// testObject.sayName();
function showList(event){
	var clickedButton=this.id;
	console.log(clickedButton);
	var newSelector=clickedButton.replace("b","l");
	var newClass="";
	var newText="MORE";
	if (this.textContent=="MORE") {
		newClass="";
		newText="LESS";
	}
	else {
		newClass="hidden-xs";
		newText="MORE";		
	}
	document.querySelector("#"+newSelector).className=newClass;
	this.textContent=newText;

}
document.querySelector("#bMSFT").addEventListener("click",showList);
document.querySelector("#bNOKIA").addEventListener("click",showList);
document.querySelector("#bNSN").addEventListener("click",showList);
document.querySelector("#bEDU").addEventListener("click",showList);
