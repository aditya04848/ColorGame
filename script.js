var red = document.querySelector(".r");
var green = document.querySelector(".g");
var blue = document.querySelector(".b");

var r=0;
var g=0;
var b=0;

var classes = [".first", ".second", ".third", ".fourth", ".fifth", ".sixth"]

var tile1=document.querySelector(".first");
var tile2=document.querySelector(".second");
var tile3=document.querySelector(".third");
var tile4=document.querySelector(".fourth");
var tile5=document.querySelector(".fifth");
var tile6=document.querySelector(".sixth");
var n=0;
var max=6;
var flag=0;

var ishard=true;

colorGenerate();
colorAssign();
document.querySelector(".new").addEventListener("click", colorGenerate);
document.querySelector(".first").addEventListener("click", funfirst);
document.querySelector(".second").addEventListener("click", funsecond);
document.querySelector(".third").addEventListener("click", funthird);
document.querySelector(".fourth").addEventListener("click", funfourth);
document.querySelector(".fifth").addEventListener("click", funfifth);
document.querySelector(".sixth").addEventListener("click", funsixth);
document.querySelector("#easy").addEventListener("click", funeasy);
document.querySelector("#hard").addEventListener("click", funhard);

// functions List
function colorGenerate() {
	document.querySelector(".tryagain").innerHTML="";
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	red.innerHTML=r;
	green.innerHTML=g;
	blue.innerHTML=b;
	colorAssign();
	flag=0;
};

function colorAssign(){
	if(max===3)
		n = Math.floor(Math.random()*3);
	else
		n = Math.floor(Math.random()*6);
	document.querySelector(classes[n]).style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
	for(var i=0; i<max; i++)
	{
		if(i===n)
			continue;
		else
		{
			document.querySelector(classes[i]).style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
		}
	}
}

function funfirst() {
	if(n===0)
	{
		fun();
	}
	else if(flag!=1)
	{
		document.querySelector(".first").style.backgroundColor = "#212121";
		document.querySelector(".tryagain").innerHTML="Try Again!";
	}
}

function funsecond() {
	if(n===1)
	{
		fun();
	}
	else if(flag!=1)
	{
		document.querySelector(".second").style.backgroundColor = "#212121";
		document.querySelector(".tryagain").innerHTML="Try Again!";
	}
}

function funthird() {
	if(n===2)
	{
		fun();
	}
	else if(flag!=1)
	{
		document.querySelector(".third").style.backgroundColor = "#212121";
		document.querySelector(".tryagain").innerHTML="Try Again!";
	}
}

function funfourth() {
	if(n===3)
	{
		fun();
	}
	else if(flag!=1)
	{
		document.querySelector(".fourth").style.backgroundColor = "#212121";
		document.querySelector(".tryagain").innerHTML="Try Again!";
	}
}

function funfifth() {
	if(n===4)
	{
		fun();
	}
	else if(flag!=1)
	{
		document.querySelector(".fifth").style.backgroundColor = "#212121";
		document.querySelector(".tryagain").innerHTML="Try Again!";
	}
}

function funsixth() {
	if(n===5)
	{
		fun();
	}
	else if(flag!=1)
	{
		document.querySelector(".sixth").style.backgroundColor = "#212121";
		document.querySelector(".tryagain").innerHTML="Try Again!";
	}
}

function fun() {
	document.querySelector(".tryagain").innerHTML="Yay! You Won.";
	flag=1;
}

function toggle() {
	if(ishard)
	{

	}
}

function funeasy() {
	document.querySelector("#easy").classList.toggle("selected");
	document.querySelector("#hard").classList.toggle("selected");
	n = Math.floor(Math.random()*3);
	max=3;
	document.querySelector(".fifth").style.backgroundColor = "#212121";
	document.querySelector(".fourth").style.backgroundColor = "#212121";
	document.querySelector(".sixth").style.backgroundColor = "#212121";
	colorGenerate();
}

function funhard() {
	document.querySelector("#easy").classList.toggle("selected");
	document.querySelector("#hard").classList.toggle("selected");
	n = Math.floor(Math.random()*6);
	max=6;
	colorGenerate();
}