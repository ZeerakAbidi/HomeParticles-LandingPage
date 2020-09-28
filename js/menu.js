function listOpen(){
        document.getElementById('minus').style.display="inline-block";
        document.getElementById('plus').style.display="none";
		document.getElementById('listList').style.display="block";
		document.getElementById('firstList').style.marginTop="-110px";
		document.getElementById('firstList').style.transition="all 0.6s";
		myFunction();
}
function listClose(){
        document.getElementById('plus').style.display="inline-block";
        document.getElementById('minus').style.display="none";
		document.getElementById('listList').style.display="none";
		document.getElementById('firstList').style.marginTop="0px";
		document.getElementById('firstList').style.transition="all 0.6s";
}



function myFunction() {
	var x = window.matchMedia("(max-width: 410px)"); // Call listener function at run time
  if (x.matches) { // If media query matches
	document.getElementById('firstList').style.marginTop="0px";
  }
}

