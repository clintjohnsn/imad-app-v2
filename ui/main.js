madi=document.getElementById('madi');

moveAmount=0;
move =function(){

	moveAmount+=5;
	madi.style.paddingLeft=moveAmount+'px';
};
madi.onclick=function(){
	interval = setInterval(move,50);
};

console.log("daf");