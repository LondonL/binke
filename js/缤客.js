let roll=document.querySelector(".rolllist");
let btnL=document.querySelector(".leftbtn");
let btnR=document.querySelector(".rightbtn");
let widths=parseInt(getComputedStyle(roll,null).width)/6;
littlemove(btnL,btnR,roll,widths);
//大轮播
let M2roll=document.querySelector(".rollsmall");
let M2btnL=document.querySelector(".smallleft");
let M2btnR=document.querySelector(".smallright");
let M2widths=parseInt(getComputedStyle(M2roll,null).width)/10;
littlemove(M2btnL,M2btnR,M2roll,M2widths);
//小轮播
let name=document.querySelectorAll(".selectname li");
let info=document.querySelectorAll(".selectinfo");
for(let i=0;i<name.length;i++){
			name[i].onclick=function(){
				for(let j=0;j<info.length;j++){
					info[j].style.display="none";
					name[j].style.background="#FFFFFF";
					name[j].style.color="#363636";
				}
				//让当前子元素出现
				info[i].style.display="block";
				name[i].style.background="#098FD8";
				name[i].style.color="#FFFFFF";
			}
		}
//第一个选项卡
let name1=document.querySelectorAll(".placeselect li");
let info1=document.querySelectorAll(".selectplace");
for(let i=0;i<name1.length;i++){
			name1[i].onclick=function(){
				for(let j=0;j<info1.length;j++){
					info1[j].style.display="none";
					name1[j].style.background="#FFFFFF";
					name1[j].style.color="#363636";
				}
				//让当前子元素出现
				info1[i].style.display="block";
				name1[i].style.background="#098FD8";
				name1[i].style.color="#FFFFFF";
			}
		}