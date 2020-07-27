function mobiledata(file,callback) {
 var request=new XMLHttpRequest();
 request.overrideMimeType('json');
 request.open("GET",file,true);
 request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   callback(request.responseText);

  }
 };
  request.send();
}
mobiledata('data.json',function(text)
{
	var read=JSON.parse(text);
 console.log(read)
 mobiletypes(read.web);
foot();
});
function mobiletypes(raw){
var p=document.querySelector('.parent');
var heading=document.createElement('h1');
 heading.textContent="mobiles";
 p.append(heading);

for(i in raw)
{
var div=document.createElement('div');
div.classList.add('cl1')
	var img=document.createElement('img');
	    img.src=raw[i].img;
	    img.alt="my img";
	    div.appendChild(img)
	    p.appendChild(div)
	var brand=document.createElement('h2');
 	    brand.textContent=raw[i].brand;
 	    div.appendChild(brand);
 	    p.appendChild(div);
 	var model=document.createElement('h3');
 	    model.textContent="model: "+raw[i].model;
 	    div.appendChild(model);
 	    p.appendChild(div);
 	var price=document.createElement('h3');
 	    price.textContent="Rs "+raw[i].price;
 	    div.appendChild(price);
 	    p.appendChild(div);
    var but=document.createElement('button');
 	    but.textContent=raw[i].button;
 	    but.classList.add('man')
 	    div.appendChild(but);
 	    p.appendChild(div);

}

}
function foot()
{
	const foo=document.querySelector('.foot');
	var fo=document.createElement('h1');
	fo.textContent=" All copyrights recieved by @ sainath";
	foo.appendChild(fo);
}
