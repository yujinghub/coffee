var btns=document.getElementsByTagName("button");
var ban=document.getElementById("bannerWrap");
var imgs=ban.getElementsByTagName("img");
var lis=ban.getElementsByTagName("li");
var z=0;
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			for(var i=0;i<imgs.length;i++){
			imgs[i].setAttribute("class","");
		}for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("class","");
		}
		z++;
		if(z==4){
			z=0;
		}
			imgs[z].setAttribute("class","move");
			lis[z].setAttribute("class","move");
		}
		else{
			for(var i=0;i<imgs.length;i++){
			imgs[i].setAttribute("class","");
		}
			for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("class","");
		}
		z--;
		if(z==-1){
			z=3;
		}
			imgs[z].setAttribute("class","move");
			lis[z].setAttribute("class","move");
		}
		
}
}
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("class","");
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].setAttribute("class","");
		}
			this.setAttribute("class","move");
			var z=this.getAttribute("jy");
			imgs[z].setAttribute("class","move");
	}
}
timer=setInterval(function(){
	for(var i=0;i<imgs.length;i++){
			imgs[i].setAttribute("class","");
		}for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("class","");
		}
		z++;
		if(z==4){
			z=0;
		}
			imgs[z].setAttribute("class","move");
			lis[z].setAttribute("class","move");
},2000);
time.onmouseover=function(){
		clearInterval(timer);
		timer=null;
}
time.onmouseout=function(){
		timer=setInterval(function(){
	for(var i=0;i<imgs.length;i++){
			imgs[i].setAttribute("class","");
		}for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("class","");
		}
		z++;
		if(z==4){
			z=0;
		}
			imgs[z].setAttribute("class","move");
			lis[z].setAttribute("class","move");
},2000);
}
