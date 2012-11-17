//alert('start');

var color = new Array();
var n;
var done = new Array();
var element;
var myevent = document.createEvent('MouseEvents');
myevent.initEvent('click', false, true);

for(i = 0; true; i++){
	element = document.getElementById('card'+i);
	if (element == null) {
	  //alert('Card element is not found. Check element id.');
	  break;
	} else {
	 
	  element.dispatchEvent(myevent);
	  
	  color[i] = element.style.backgroundColor;
	  //alert(''+color[i]);
	}
}

//alert('solv');

n = color.length;

for(i=0; i<n; i++){
	done[i] = false;
}

//
for(i = 0; i<n; i++){
	if(done[i] == true){
		continue;
	}else{
		
		ptr = color.indexOf(color[i]);
		if(ptr == i){
			ptr = color.lastIndexOf(color[i]);
		}
		
		//alert('i: '+i);
		element = document.getElementById('card'+i);
		element.dispatchEvent(myevent);
		
		//alert('p: '+ptr);
		element = document.getElementById('card'+ptr);
		element.dispatchEvent(myevent);
		
		done[i] = true;
		done[ptr] = true;
	}
}