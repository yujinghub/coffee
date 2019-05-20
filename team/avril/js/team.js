			var picture=document.getElementById("pic");
			var imgs=picture.getElementsByTagName("img");
			var ols=document.getElementsByTagName("ol");
			var dls=document.getElementsByTagName("dl");
			console.log(imgs);
			for(var i=0;i<ols.length;i++){
				ols[i].onclick=function(){
					for(var i=0;i<ols.length;i++){
						ols[i].setAttribute("class","");
					}
						this.setAttribute("class","active");
						
						var j=this.getAttribute("yj");
						for(var i=0;i<imgs.length;i++){
							imgs[i].setAttribute("class","");
						}
							imgs[j].setAttribute("class","active");
							
							var j=this.getAttribute("yj");
						for(var i=0;i<dls.length;i++){
							dls[i].setAttribute("class","");
						}
							dls[j].setAttribute("class","active");
				}
			}
			


