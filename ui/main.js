//counter 

var btn= document.getElementById('btn');

btn.onclick=function () {

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
	request.open('GET','clintjohnsn.imad.hasura-app.io/counter',true);
	request.send(null);



};

