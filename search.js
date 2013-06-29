var xx,yy;

if (window.Event)
  document.captureEvents(Event.CLICK);document.onclick = doit;

myLinkCss();

function myLinkCss() {
	var loc=document.location.href;
	var q=loc.lastIndexOf('chm::');
	if (q==-1){
	 var q2=loc.lastIndexOf("/");
	} else {
	 var q2=loc.lastIndexOf("\\",q);
	}
	
	var p=loc.indexOf("Store:");
	
	if (p==-1) {
	 var loc2=loc.substring(0,q2)+"/";
	} else {
	 p=p+6;
	 var loc2="file:///"+loc.substring(p,q2)+"/";
	}
	
	document.write('<LINK href="'+loc2+'cbeta.css" type="text/css" rel="stylesheet">');
}

function doit()
{
 xx = window.event.screenX;
 yy = window.event.screenY;
}

<!--
function showpic(name)
{

  var ff = "width=30,height=25,scrollbars,resizable";
  
  ff += ",left=" + xx ;
  
  if ( yy > (window.screen.height/2) ) { ff += ",top=" + (yy-150) ; }
  else {ff += ",top=" + (yy+10) ;}

  window.open(name,"pic",ff);
}
//-->
