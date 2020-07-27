function getdata(file,callback) {
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
getdata('data.json',function(text){
 var data=JSON.parse(text);
 console.log(data)
 profiledata(data.profile);
 saidata(data.profile2);

});



function profiledata(card){
 var pdata=document.querySelector('.card1');
 var heading=document.createElement('h1');
 heading.textContent="sainath personal data"
 pdata.append(heading)

 var pic=document.createElement('img')
 pic.src='s.jpeg'
 pdata.append(pic)
 var name=document.createElement('h2');
 name.textContent=card.name;
 pdata.appendChild(name)
 var email=document.createElement('h2');
 email.textContent=card.email;
 pdata.appendChild(email)
 var celno=document.createElement('h2');
 celno.textContent=card.celno;
 pdata.appendChild(celno)
 var address=document.createElement('h2');
 address.textContent=card.address;
 pdata.appendChild(address)
 var hr=document.createElement('hr');
 pdata.appendChild(hr);
 var comp=document.createElement('h2');
 comp.textContent=card.comp;
 pdata.appendChild(comp)
 var role=document.createElement('h2');
 role.textContent=card.role;
 pdata.appendChild(role)

}
function saidata(gcard)
{
var pdata2=document.querySelector('.card2');
 var heading2=document.createElement('h2');
 heading2.textContent="sainath personal data"
 pdata2.append(heading2)
 var pic2=document.createElement('img')
 pic2.src='IMG_3694-01-01-01.jpeg'
 pdata2.append(pic2)

 for (var i in gcard)
 {
 	var dlop=document.createElement('h2');
 	dlop.textContent=gcard[i]
 	pdata2.appendChild(dlop);

 }
}