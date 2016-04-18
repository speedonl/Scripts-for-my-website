function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_effectAppearFade(targetElement, duration, from, to, toggle)
{
	Spry.Effect.DoFade(targetElement, {duration: duration, from: from, to: to, toggle: toggle});
}

function MM_setTextOfLayer(objId,x,newText) { //v9.0
  with (document) if (getElementById && ((obj=getElementById(objId))!=null))
    with (obj) innerHTML = unescape(newText);
}



$(document).ready(function() {

	// Show or hide the sticky nav
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.mobile_nav').fadeIn(200);
		} else {
			$('.mobile_nav').fadeOut(200);
		}
	});
	
	// Animate the scroll to top
	$('.mobile_nav').click(function(event) {
		event.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 300);
	})

	/*
	* contenthover als er over een portfolio item wordt gehoverd
	*/
	//begin scroll functie
	$('nav ul li a').click(function(){

		var el = $(this).attr('href');
		var elWrapped = $(el);

		scrollToDiv(elWrapped,40);

		return false;

	});

	function scrollToDiv(element,navheight){



		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;

		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);

	}
	//end scroll functie
	
	/*
	* Info block on project toggle
	*/
	
	// button 001
	$("#btn_info_001").click(function(){
		$("#project_001_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_001").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_001").hide("slow");
	});
	
	$("#btn_info_001_close").click(function(){
		$("#btn_close_001").css({ "display":"none"} );
		$("#project_001_info").hide("slow");
		$("#btn_info_001").show("slow");
	});
	// end button 001

	// button 002
	$("#btn_info_002").click(function(){
		$("#project_002_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_002").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_002").hide("slow");
	});
	
	$("#btn_info_002_close").click(function(){
		$("#btn_close_002").css({ "display":"none"} );
		$("#project_002_info").hide("slow");
		$("#btn_info_002").show("slow");
	});
	// end button 002

	// button 003
	$("#btn_info_003").click(function(){
		$("#project_003_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_003").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_003").hide("slow");
	});
	
	$("#btn_info_003_close").click(function(){
		$("#btn_close_003").css({ "display":"none"} );
		$("#project_003_info").hide("slow");
		$("#btn_info_003").show("slow");
	});
	// end button 003

	// button 004
	$("#btn_info_004").click(function(){
		$("#project_004_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_004").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_004").hide("slow");
	});
	
	$("#btn_info_004_close").click(function(){
		$("#btn_close_004").css({ "display":"none"} );
		$("#project_004_info").hide("slow");
		$("#btn_info_004").show("slow");
	});
	// end button 004

				// button 005
	$("#btn_info_005").click(function(){
		$("#project_005_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_005").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_005").hide("slow");
	});
	
	$("#btn_info_005_close").click(function(){
		$("#btn_close_005").css({ "display":"none"} );
		$("#project_005_info").hide("slow");
		$("#btn_info_005").show("slow");
	});
	// end button 005

				// button 006
	$("#btn_info_006").click(function(){
		$("#project_006_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_006").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_006").hide("slow");
	});
	
	$("#btn_info_006_close").click(function(){
		$("#btn_close_006").css({ "display":"none"} );
		$("#project_006_info").hide("slow");
		$("#btn_info_006").show("slow");
	});
	// end button 006

				// button 007
	$("#btn_info_007").click(function(){
		$("#project_007_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_007").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_007").hide("slow");
	});
	
	$("#btn_info_007_close").click(function(){
		$("#btn_close_007").css({ "display":"none"} );
		$("#project_007_info").hide("slow");
		$("#btn_info_007").show("slow");
	});
	// end button 007

				// button 008
	$("#btn_info_008").click(function(){
		$("#project_008_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_008").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_008").hide("slow");
	});
	
	$("#btn_info_008_close").click(function(){
		$("#btn_close_008").css({ "display":"none"} );
		$("#project_008_info").hide("slow");
		$("#btn_info_008").show("slow");
	});
	// end button 008
	
				// button 009
	$("#btn_info_009").click(function(){
		$("#project_009_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_009").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_009").hide("slow");
	});
	
	$("#btn_info_009_close").click(function(){
		$("#btn_close_009").css({ "display":"none"} );
		$("#project_009_info").hide("slow");
		$("#btn_info_009").show("slow");
	});
	// end button 009
	
	// button 012
	$("#btn_info_012").click(function(){
		$("#project_012_info").show("slow");
		// Maakt het close buttontje zichtbaar
		$("#btn_close_012").css({ "display":"block"} );
		// Verbergt de Info button
		$("#btn_info_012").hide("slow");
	});
	
	$("#btn_info_012_close").click(function(){
		$("#btn_close_012").css({ "display":"none"} );
		$("#project_012_info").hide("slow");
		$("#btn_info_012").show("slow");
	});
	// end button 012


			// end button functions

			

})
		

