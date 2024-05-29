function question(){
	var number="(207) 504 1604";
	alert("1. To buy a product please press the buy button down below the item that you want to buy.\n\n 2. To purchase an item please send a request to the e-mail listed down below.\n\n 3. To find out more about this website please read the description at the bottom of this site.\n\n Please feel free to ask us any questions outcontacts are all listed down below \n\n phone number\n" + number + " \n\n\n THANK YOU!");
}

function calc(){
	var first = parseFloat( prompt("first number"));
	var second = parseFloat(prompt("second number"));
	var sum = first + second;
	var dif = first - second;
	var product = first * second;
	var quo = first / second;
	
	alert(first + " + " + second + " = " + sum);
	alert(first + " - " + second + " = " + dif );
	alert(first + " x " + second + " = " + product);
	alert(first + " / " + second + " = " + quo);
}

function text(){
	var box = prompt("Enter text here");
	var l = box.length;
	alert("you have entered " + l + " symbols");
	var n = prompt("Enter a number of your sentence that you would like to know");
	var demand = box[n - 1];
	alert("The " + n + " letter in your sentence is " + demand)
	var last = box[l - 1];
	alert("The last symbol in your sentence is " + last)
	alert(box.indexOf("Happy"));
	var box = box.toLowerCase();
	alert(box);
	var box = box.replace("happy", "sad");
	alert(box);
}

function trying(){
	var a = document.getElementById("fox");
	a.src="real-fox.png";
}

function change(){
	var a = document.getElementById("fox");
	a.src="fox.png";
}


function telephone(){
	var c = document.getElementById("phone");
	if (window.getComputedStyle(c).height == "75px")
	{
		c.style.height="85px";
	}
	else 
		c.style.height="75px";
}
function test(){
	var a = 10;
	var b = 25;
	if(a == 10 && b == 25)
	{
		alert("Good Job!");
	}
	else
		alert("Sorry, try again.");
}
function massive(){
	var arr = ["apple", "pear", "orange", "dragonfruit", "kiwi"];
	alert(arr);
	alert(arr.length);
	alert(arr.pop());
	alert(arr);
	alert(arr.shift());
	alert(arr);
	arr.push('grape');
	alert(arr);
	arr[1] = 'watermelon';
	alert(arr);
}
function cycle(){
	for(let i=1; i<11; i++){
	    alert("hello! " + i);
	}
}
function appear(){
	var on = document.getElementById("vanish");
	on.style.display="block";
}
function disappear(){
	var on = document.getElementById("vanish");
	on.style.display="none";
} 
//setInterval(appear,20000);
function stars(k){
	var ids = ["star1", "star2", "star3", "star4", "star5"];
	for (let i=0; i<k; i++){
		var b = ids[i];
		var a = document.getElementById(b);
		a.src = "full.png";
		
	}
}

function starchange(){
	var ids = ["star1", "star2", "star3", "star4", "star5"]; 
	for (let i=0; ids.length;i++){
		var b = ids[i];
		var a = document.getElementById(b);
		a.src="empty.png";
	}
	
}
