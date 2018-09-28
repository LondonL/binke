function littlemove(btnL,btnR,bookroll,bookwidths){
let res=0;
btnL.onclick=function(){
	res--;
	if(res<0){
		res=0;
	}
	bookroll.style.transform="translateX("+(-bookwidths*res)+"px)";
}

btnR.onclick=function(){
	res++;
	if(res>2){
		res=2;
	}
	bookroll.style.transform="translateX("+(-bookwidths*res)+"px)";
	
}
}