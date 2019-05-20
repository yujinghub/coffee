var ols=document.getElementsByTagName("ol");
var dls=document.getElementsByTagName("dl");
	for(var i=0;i<ols.length;i++){
		ols[i].onclick=function(){
			for(var i=0;i<ols.length;i++){
				ols[i].setAttribute("class","");
			}
			for(var i=0;i<dls.length;i++){
				dls[i].setAttribute("class","");
			}
				this.setAttribute("class","active");
						
				var j=this.getAttribute("yj");
			
				dls[j].setAttribute("class","active");
	}
	
}
			

		    var btns=document.getElementsByTagName("button");
			var imgs=document.getElementsByTagName("img");
			var ban=document.getElementById("bannerWrap");
			var lis=ban.getElementsByTagName("li");
//			console.log(lis)
			var j=0;
			for(var i=0;i<btns.length;i++){
				btns[i].onclick=function(){
					if(this.innerHTML=="&gt;"){
						for(var i=0;i<imgs.length;i++){
							imgs[i].setAttribute("class","");
					}
						for(var i=0;i<lis.length;i++){
							lis[i].setAttribute("class","");
						}
							j++;
							if(j==3){
								j=0;
							}
							imgs[j].setAttribute("class","active");
							lis[j].setAttribute("class","active");
							
							
					}else{
						for(var i=0;i<imgs.length;i++){
							imgs[i].setAttribute("class","");
					}
						for(var i=0;i<lis.length;i++){
							lis[i].setAttribute("class","");
						}
							j--;
							if(j==-1){
								j=2;
							}
							imgs[j].setAttribute("class","active")
							lis[j].setAttribute("class","active");
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
						this.setAttribute("class","active");
						j=this.getAttribute("yj");
						imgs[j].setAttribute("class","active");
				}
			}
			timer=setInterval(function(){
				for(var i=0;i<imgs.length;i++){
							imgs[i].setAttribute("class","");
					}
						for(var i=0;i<lis.length;i++){
							lis[i].setAttribute("class","");
						}
							j++;
							if(j==3){
								j=0;
							}
							imgs[j].setAttribute("class","active");
							lis[j].setAttribute("class","active");
			},2000);
			
			time.onmouseover=function(){
				clearInterval(timer);
				timer=null;
			}
			time.onmouseout=function(){
				timer=setInterval(function(){
				for(var i=0;i<imgs.length;i++){
							imgs[i].setAttribute("class","");
					}
						for(var i=0;i<lis.length;i++){
							lis[i].setAttribute("class","");
						}
							j++;
							if(j==3){
								j=0;
							}
							imgs[j].setAttribute("class","active");
							lis[j].setAttribute("class","active");
			},2000);	
			}