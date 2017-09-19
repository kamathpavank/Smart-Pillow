var milliseconds;;
var h;
var m;

function currentTime(){

	var d = new Date();
	 h = d.getHours();
	 m = d.getMinutes();
	 milliseconds = h * 36e5 + m * 6e4;
}
function getCurrenttime(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	 milliseconds = h * 36e5 + m * 6e4;
	document.getElementById("currentTime").innerHTML = milliseconds;
}

function canlcelAll(){
	document.getElementById("demo").innerHTML = " ";
	    document.getElementById("hours").innerHTML = " ";
			  document.getElementById("min").innerHTML = " ";
				  document.getElementById("milliscnd").innerHTML ="Enter Time Again";
}

document.getElementById("save").addEventListener("click", function(){

		currentTime();
	  var x = document.getElementById("timeonly").value;
    document.getElementById("demo").innerHTML = x;
    
    var hours = x.substring(0,2);
    var intihours = parseInt(hours);
    console.log(intihours);
    document.getElementById("hours").innerHTML = hours;
    
    var min = x.substring(3,5);
    var intiminute = parseInt(min);
    document.getElementById("min").innerHTML = min;
    
    
    var notifyhour = Math.abs(h - intihours);
    var notifyminute = Math.abs(m - intiminute);

    alert("Alarm set for"+notifyhour+"hours and"+notifyminute+" Minutes");

    var hrmilli = 36e5 * intihours;

    var minmilli = 6e4 * parseInt(min);

    var milli = hrmilli + minmilli ;

    var diff = milliseconds - milli ;

    var abs =  Math.abs(diff);

    document.getElementById("milliscnd").innerHTML = abs;
    var strng = abs.toString();
    publish(strng,'presence',2);
});

document.getElementById("massage").addEventListener("click", function(){
  var on = "on";
  publish(on,'alarm/massage',2);
});
