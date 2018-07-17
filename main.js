var slider_content=document.getElementById('box');
var image=['nes','jaafar','public','condidats'];
var i=0;
function nextImage(){
	i++;
	if(i>=image.length){i=0;}
	slider_content.innerHTML ="<img src=images/"+image[i]+".png>"
	
	
}
function prewImage(){

	
	i--;
	if(i<0){i=image.length-1;}
	
 slider_content.innerHTML ="<img src=images/"+image[i]+".png>"
	
}
var slider_content=document.getElementById('box');
var image=['omen1','omen2','omen3','omen4','omen5','omen6'];
var i=0;
function nextPicture(){
	i++;
	if(i>=image.length){i=0;}
	slider_content.innerHTML ="<img src=images/"+image[i]+".jpg>"
	
	
}
function prewPicture(){

	
	i--;
	if(i<0){i=image.length-1;}
	
 slider_content.innerHTML ="<img src=images/"+image[i]+".jpg>"
	
}