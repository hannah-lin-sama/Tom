//预加载、加载事件
window.onload=function(){
	var cat=document.getElementById('cat');
	console.log(cat);
	
	var music=document.getElementById('music');
	var time;
	
	//返回对象，给对象 点击事件
	document.getElementById('cymbal').onclick=function(){
		play(12,'cymbal');
		
		
	}
	document.getElementById('drink').onclick=function(){
		play(80,'drink');
		
	}
	document.getElementById('eat').onclick=function(){
		play(39,'eat');
		
	}
	document.getElementById('fart').onclick=function(){
		play(27,'fart');
		
	}
	document.getElementById('pie').onclick=function(){
		play(23,'pie');
		
	}
	document.getElementById('scratch').onclick=function(){
		play(55,'scratch');
		
	}
	function play(idx,name){
		clearInterval(time);
		music.src='sounds/'+name+'.m4a';
		var num=0;
		time=setInterval(()=>{
			num++;
			if(num>idx){
				clearInterval(time);
			}else if(num<10){
				cat.src='Animations/'+name+'/'+name+'_0'+num+'.jpg';				
			}else{
				cat.src='Animations/'+name+'/'+name+'_'+num+'.jpg';
			}			
		},60)
	}
	
	
	
	
}

