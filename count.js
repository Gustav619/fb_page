alert("connected");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var s1=document.getElementById("p1score");
var s2=document.getElementById("p2score");
var inp=document.getElementById("inp");
var upto=document.getElementById("upto");
var res=document.getElementById("res");
var p1sc=0;
var p2sc=0;
var gameover=false;
var limit=5;
p1.addEventListener("click",function(){
p1sc++;
if(!gameover)
{
	s1.textContent=p1sc;
	if(p1sc===limit)
	{
		gameover=true;
		s1.style.color="green";
	}
}
});

p2.addEventListener("click",function(){
p2sc++;
if(!gameover)
{
	s2.textContent=p2sc;
	if(p2sc===limit)
	{
		gameover=true;
		s2.style.color="green";
	}
}
});

inp.addEventListener("change",function(){
upto.textContent=inp.value;
gameover=false;
s1.textContent=0;
s2.textContent=0;
s1.style.color="black";
s2.style.color="black";
p1sc=0;
p2sc=0;
limit=Number(inp.value);
});

res.addEventListener("click",function(){
gameover=false;
s1.textContent=0;
s2.textContent=0;
s1.style.color="black";
s2.style.color="black";
p1sc=0;
p2sc=0;
});