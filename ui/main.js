//counter 

var btn= document.getElementById('btn');

btn.onclick=function clickCount () {

	//create a request
	var request = new XMLHttpRequest();

	//process the request
	request.onreadystatechange=function () {

			//check if request is complete
		if(request.readyState===XMLHttpRequest.DONE){
			
			//check if response code is 200 (successful AJAX call)
			if (request.status===200){

				var counter=request.responseText;
				var span=document.getElementById('count');
				span.innerHTML=counter.toString();

			}

		}
	};

	//actually send the request
	request.open('GET','/counter',true);
	request.send(null);

};

var submitButton= document.getElementById("submitButton");

submitButton.onclick=function () {
	
	var request=new XMLHttpRequest();
	var name=document.getElementById("inputName").value;
	
	request.open("GET","/submitName?name="+name,true);
	request.send(null);

	request.onreadystatechange=function(){

		if (request.readyState===XMLHttpRequest.DONE){

			if (request.status===200){
				

				var list=document.getElementById("list");
				
				//put stuff in its innerHTML
				
				var namesList=JSON.parse(request.responseText);

				var content="";
				for (var i = namesList.length - 1; i >= 0; i--) {
					content=content+"<li>"+ namesList[i] +"</li>";
				}

				list.innerHTML=content;

			}


		}

	};

};

var madi=document.getElementById("madi");
var moveAmount =0;
var moveFunction = function(){
	moveAmount+=10;
	madi.style.paddingLeft=moveAmount+"px";
};
madi.onclick=function(){
	var interval = setInterval(moveFunction,50);
};
