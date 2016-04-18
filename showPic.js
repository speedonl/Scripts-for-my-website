// Voor de gallery moet ik een script maken
// Om de placeholder afbeelding te vervangen moet ik van de placeholder afbeelding het "src" attribuut vervangen
// Hiervoor gebruik ik de "setAttribute" methode. 
// Ik schrijf een functie met deze methode die 1 enkel argument accepteert: een link naar de afbeelding. 
// Mijn functie zal dan het "src" attribuut van de placeholder afbeelding vernieuwen met deze afbeelding
// De functie naam wordt showPic en het argument dat  aan de functie wordt doorgegeven gaat "whichpic" heten
//
	//	function showPic(whichpic)
//
// whichpic representeert een "element node", specifiek een <a> element dat naar een afbeelding leidt.
// Ik moet het pad naar de afbeelding uit  het <a> element halen, en dat kan ik doen door de"getAttribute" methode te gebruiken op 
// het whichpic element. Door de "href" uit te lezen en door te geven als het argument, kan ik uitlezen wat het pad naar de afbeelding is.
//whichpic.getAttribute("href")
// Ik ga deze waarde opslaan in een variabele zodat ik dez later kan gebruiken. De variabele noemen we "source"
//
	//	var source = whichpic.getAttribute("href");
//
// Het volgende dat ik moet doen is het selecteren van de placeholder afbeelding. Dit kan makkelijk met de methode getElemntById:
//document.getElementById("placeholder");
// Ik ga dit element toekennen aan een variabele zodat ik  deze opdracht niet meer dan 1 keer hoef uit te typen
//
	//	var placeholder = document.getElementById("placeholder");
//
// Nu heb ik 2 variabelen gedefinieerd, "source" en  "placeholder", Dit helpt het script overzichtelijk te houden
//
//Ik update het "src" attribuut van het placehoder element door gebruik te maken van "setAttribute". setAttribute heeft 2 argumenten nodig;
// het attribuut dat je wilt  aanpassen en de waarde die je wilt toekennen aan dit attribuut. In dit geval wil ik het src attribuut veranderen dus het 
// eerste argument is "src". Het tweede argument, de waarde die ik wil toekennen aan het "src" attribuut, is al opgeslagen als "source":
//
	//	placeholder.setAttribute("src", source);
//
// Het is mogelijk het "src" attribuut van een afbeelding te veranderen zonder het gebruik van setAttribute
//
// set Attribute is deel van de DOM Level 1 specificatie,, welke het toelaat elk attribute aan te passen voor een willekeurige element node.
// Bijvoorbeeld, om de waarde (value) attribuut van een input element te veranderen kon je "value" methode gebruiken:
//
// element.value ="de nieuwe waarde"
//
// Dat zou hetzelfde effect hebben als
//
//		 element.setAttribute("value","de nieuwe waarde")
// Hieronder de uitgeschreven funcite:
// 
	//	function showPic(whichpic){
	// 	var source = whichpic.getAttribute("href");
	// 	var placeholder = document.getElementById("placeholder");
	// 	placeholder.setAttribute("src", source);
// }
//
// Nu is het tijd om de JavaScript te koppelen met de opmaak!
//
// 22 september, 2014
// Ik moet er zeker van zijn dat mijn showPic functie beschikbaar is voor mijn image gallery.
// In de html van mijn gallery ga ik een koppeling maken met het script middels:
// <script type="text/javascript" src="scripts/showPic.js">
// Nu is het script beschikbaar. Zoals het er nu voor staat zal de functie niet uitgevoerd worden.
// Ik moet de functie koppelen aan de links in mijn lijst in de html. Ik ga dit doen door een "event handler" toe te voegen.
// Voor mijn gallery wil ik een actie toevoegen als de gebruiker op een link klikt. De "event handler" voor dit gedrag is
//
		// onclick
//
// Ik kan de showPic functie niet aanroepen zonder enige informatie naar de functie te sturen. showPic verwacht
// een (1) argument: een element node met een href attribuut. Als ik de "onclick "event handler in een link plaats, wil ik die
// link versturen naar de showPic functie als argument.
//
// Het keyword voor het zeggen van "dit object" is (this).
//
// showPic(this)
//
// Ik ga dat toeveoegen via de "onclick" event handler. De syntax is:
//
// event = "JavaScript statement(s)"
//
// En dus ga ik gebruiken:
//
// De regel hieronder zal de showPic functie aanroepen via de "onclick" event handler
		// onclick = "showPic(this);"
//
// Let erop dat de JavaScript zelf tussen aanhalingstekens staat! Je kunt zoveel JavaScript statements toevoegen als je wilt.
//
// Maarrrr, als ik deze event handler toevoeg aan een link zal de functie worden aangeroepen, maar het standaard gedrag voor 
// klikken op een link zal inhouden dat de gebruiker naar de image gaat, precies dat wat ik niet wil!! 
// Ik moet de default gedrag stoppen.
//
// Als je een event handler koppelt aan een element, kun je JavaScript statements uit laten voeren met het event. De JavaScript kan een
// resultaat terug geven die vervolgenss teruggegeven wordt aan de event handler.
// Zo kun je b.v. JavaScript toekennen aan het onclick event van een link zodat het een Boolean waarde teruggeeft van "true" of "false".
// Als je op de ink klikt en de event handler ontvangt a waarde van "true", dan krijgt het het bericht "ja, deze link is geklikked."
// Als je JavaScript aan de event handler koppelt zodat het "false" teruggeeft, wordt het bericht "nee, deze link is niet geklicked."
//
// Door een "return false" statement aan het JavaScript toe te voegen dat in het onclick event handler zit, kan ik  voorkomen dat de gebruiker
// rechtreeks naar het doel van de link gaat:
//
		// onclick = showPic(this); return false;
//
// Nu wil ik de tekst op de pagina geupdate hebben. Elke link in mijn lijst heeft een "title" attribuut. Ik wil de waarde van dat attribuut
// gebruiken en weergeven op de pagina samen met de afbeelding.
// Ik kan de waarde van het "title" attribuut makkelijk verkijgen met "getAttribute", en als ik deze regel toevoeg aan de start van de showPic
// functie, kan ik de waarde ervan opslaan in een variabele:
//
		// var titleText = whichPic.getattribute("title");
//
// Dit moet ik in het document zetten. Om dit te kunnen doen heb ik wat nieuwe DOM properties nodig.
//
// CHILDNODES
//
// De childNodes property is een manier om informatie te verkijgen over de "childs" van een element in een document tree.
// childNodes geeft een array met alle "Children" terug van een element node:
//
// element.childNodes
//
// Laten we zeggen dat we alle Children van het body element willen hebben. We kunnen "getElementsByTagName" gebruiken om 
// bij het body element te komen. We weten dat er maar 1 <body> element is, dus wordt het het eerste (en enige)
// element van de array getElementsByTagName("body"):
//
// var body_element = document.getElemenstByTagName("body"[0]);
//
// De variabele body_element refereert nu aan het body element in ons document. Om de children van het body element te lezen
// heb je alleen maar nodig
//
		// body_element.childNodes
		//
		// function countBodyChildren(){
		// 	var body_element = document.getElementsByTagName("body")[0];
		// 	alert(body_element.nodeType);
		// }
		// window.onload = countBodyChildren;
// Deze kleine functie laat een popup alert zien met daarin weergegeven het totaal aantal children elementen op de pagina.
// De node.nodeType property wordt aangeroepen als
//
		// node.nodeType
//
// Echter wordt er een nummer geretouneerd
// Ik ga het alert statement in de countBodyChildren functie aanpassen zodate het ons de verschillende nodeType van het body_element zal teruggeven:
//
		// alert(body_element.nodeType);
//
// 
// Ik heb een p element met id "description" aangemaakt en geplaatst na de placeholder in de html.
// Ik wil dat de description wordt vervangen door de tekst die uit een het "title" attribute gehaald kan worden, tegelijkertijd met
// het verwisselen van de afbeelding in de placeholder.
//
// Ik ga de showPic functie updaten om dit uit te voeren.
//
// Om te beginnen moet ik de waarde van het "title" attribute zien te krijgen. Dit doe ik d.m.v. getAttribute:
//
		// var text = whichpic.getAttribute("title");
//
// Nu wil ik een nieuwe variabele aanmaken zodat ik aan de paragraaf met "description" kan refereren. Ik zal de variiabele ook
// "description" noemen:
//
		// var description = document.getElementById("description");
//
// Ik heb mijn variabelen:
//
	// function showPic(whichpic){
	// 	 if (!document.getElementById("placeholder")) return true;
	// 	var source = whichpic.getAttribute("href");
	// 	var placeholder = document.getElementById("placeholder");
	// 	if (placeholder.nodeName != "IMG" ) return true;
	// 	placeholder.setAttribute("src", source);
	// 	if(!document.getElementById("description")) return false;
	// 	var text = whichpic.getAttribute("title") ?
	// 	whichpic.getAttribute("title"): "";
	// 	var description = document.getElementById("description");
	// 	if(description.firstChild.nodeType == 3){
	// 		description.firstChild.nodeValue = text;
	// 	}
	// 	return false;
	// }
	// //
// Nu is het tijd om de text vervanging te doen.
//
// Nu ga ik de waarde van de "first child node" van de description paragraaf updaten
//
		// description.firstChild.nodeValue = text;
// "text" is de waarde uit de variabele text!
//
// In nederlands:
// Verkrijg de waarde van het title attribuut van de link die net is aangeklikt en bewaar deze waarde in een variabele genaamd "text"
// Verkijg het element met de id "description" en bewaar dit object als de variabele "description"
// Update de waarde van de eerste childNode van het het description object met de waarde van "text"
//
// We willen nu een popUp gaan maken voor de afbeeldingen met behulp van JavaScript
// Ik wil de  html code schoon houden, dus moeten we de JavaScript extern houden,, zoals we al doen met showPic.js
// In de gallery.html maken we gebruik van event handlers, in ons geval de "onclick" event handler
// Deze moet eruit, we willen immers geen Javascript code in de html van onze gallery.
// We moeten de JavaScript dan koppelen aan via een "hook" zoals een id of een class in de html
// Als je een event aan een element wilt koppelen met een uniek id, kun je simpelweg "getElementById" gebruiken.
//
		// getElementById("id").event = action
//
// Als het gaat om meerdere elementen kun je een combiantie van getElementsByTagName en getAttribute gebruiken om events te koppelen aan
// elementen met specifieke attributes.
//
// Het plan:
// 1. Maak een array van alle links in het docuement
// 2. Loop door het array
// 3. Als de link een class heeft van "popup". voer dan het volgende gedrag uit:
//  A. Geef de waarde van de href attribute door aan de popUp functie.
//  B. Breek het standaaard gedrag af zodat de link niet gevolgd wordt in het originele venster.
//
		//	var links = document.getElementsByTagname("a");
		//	for ( var i=0; i < links; i++){
		//		if( links[i].getAttribute("class") == "popup"){
		//			links[i].onclick = function(){
		//				popUp(this.getAttribute("href"));
		//				return false;
		//			}
		//		}
		//	}
// Nu is de connectie tussen de links en het gedrag dat moet plaatsvinden als de links geklikt worden uit de markup gehaald
// en in de externe JavaScript geplaatst. Dit is unobtrusive JavaScript.
//
// Er is echter 1 probleem. De eerste regel is: var links = document.getElementsByTagname("a");
// De code zal geexecuteerd worden op het moment dat de JavaSript file geladen wordt.
// De JavaScript wordt aangeroepen in de <head> sectie en zal geladen worden voor het document. Omdat het document
// niet compleet is is het document model ook niet compleet. Zonder een compleet Document Object Model werken
// methodes als getElementsByTagName gewoonweg niet.
//
// Ik moet de code uitvoeren als het document klaar is met laden. Gelukkig is het volledig laden van een document een "event"
// met een bijbehorende event handler!
//
// Het document laad binne het browser venster. Het document object is een property van het window object. Als het "onload" event 
// is getriggered door het window object, dan bestaat vervolgens het document object.
//
// Ik ga mijn JavaScript inpakken in een functie die ik noem "prepareLinks", en ik ga deze functie koppelen aan het "onload" event
// van het window object. Op deze manier weet ik dat het Document Object Model  zal werken:
//
		// window.onload = function() {
		// 	if(!document.getElementsByTagname) return false;
		// 	var lnks = document.getElementsByTagName("a");
		// 	for ( var i=0; i < lnks; i++){
		// 		if( lnks[i].getAttribute("class") == "popup"){
		// 			lnks[i].onclick = function(){
		// 				popUp(this.getAttribute("href"));
		// 				return false;
		// 			}
		// 		}
		// 	}
		// }
// Laten we ook de popUp functie erbij zetten:
// function popUp(winURL){
// 	window.open(winURL, "popup", "width=320, height=480");
// }
//
// Ik ga nu de behavior of (gedrag: JavaScript) scheiden van de  structure (structuur: xhtml)
//
// Als eerste ga ik aan de xhtml voor de ul waarin de hrefs naar de afbeeldingen zich bevinden een id geven van  "imagegallery" (zie de markup)
// Deze "hook" is voldoende voor JavaScript
//
// Nu moet ik een korte functie schriven om het gedrag te koppelen aan het onclick event. Ik zal deze functie "prepareGallery" noemen
//
// Wat ik ga doen:
// Check of de browser "getElementsByTagName" begrijpt.
// Check of de browser "getElementById" begrijpt,
// Check of er een element is met de ID "imagegallery".
// Loop door alle links in het "imagegalleriy" element.
// Set het onclick event op zo'n manier dat als er op de link geklikt wordt dat:
//	1.  De link wordt doorgegeven aan de showPic functie.
//	2. Het standaard gedrag wordt afgebroken zodat de link niet gevolgd wordt.
//
// Ik zal beginnen met het definieren van de prepareGallery functie. De functie zal geen argumenten gebruiken, dus komt er
// niets tussen de haakjes te staan na de functie naam:
	//	function prepareGallery() {
// Het eerste wat ik moet doen is controleren of de browser "getElementsByTagName" begrijpt:
		// if(!document.getElementsByTagName) return false;
// dit zeg "Als getElementsByTagName niet is gedefienieerd, kap het nu af.." Browser die de DOM methode wel begrijpen gaan door.
//
// Ik ga hetzelfde doen voor "getElementById"
		//	if(!document.getElementById) return false;
//
// Ik kan deze 2 ook samenvoegen als volgt:
		// if(!document.getElementsByTagName) || if(!document.getElementById) return false;.
//		
// maar dat wordt misschien een beetje moeilijk te lezen. 
// Het is wel handig om  het return statement op zijn eigen regel te zetten, gebruik dan ook curly brazes voor het statement
//
	//	if(!document.getElementsByTagName){}
	//		 return false;
	//	}
	//	if(!document.getElementById){
	//		return false;
	//	}
// Nu komt er een meer specifiekere test. Deze fucntie zal de links binnen een element gedefinieerd als "imagegallery"  onder
// handen nemen.
// Als het element niet bestaat moet het script stoppen.
// Ik ga hiervoor weer de "NOT" operator gebruiken:
//
	//	if (!document.getElementById("imagegallery")) {
	//		return false;
	//	}
//
// Ik ga bovenstaande de "false" statements bovenaan mijn functie plaatsen:
	//	function prepareGallery(){
		//	if(!document.getElementsByTagName) return false;
		//	if(!document.getElementById) return false;
		//	if (!document.getElementById("imagegallery")) return false;
	//	}
//
// What's in a name??
// Ik ga dingen iets makkelijker voor mezelf maken. In plaats van het uitschrijven van docuemnt.getElementById("imagegallery");
// ga ik daarvoor een variabele aanmaken:
	//	var gallery = document.getElementById("imagegallery");

// Ik had alles kunnen kiezen voor de naam van de variabele maar gallery heeft enige betekenis. Het is makkelijker code te lezen met
// herkenbare woorden voor variabele namen.
//
// Ik wil door alle links van het "imagegallery" element loopen. Ik ga hiervoor gebruik maken van getElemtsByTagName.
// Omdat ik de de variabele "gallery" tot mijn beschikking heb kan ik simpelweg schrijven:
	//	gallery.getElementsByTagName("a")
// i.p.v. de veel langere
	//	document.getElementById("imagegallery").getElementsByTagName("a")
// Ik ga het mezelf weer makkelijker maken door deze node lijst in een mooie korte variabele te stoppen, ik zal het woord "links" gebruiken
	//	var links = gallery.getElementsByTagName("a");
//
// Dus tot nu toe hebben we:
	//	function prepareGallery(){
	//		if(!document.getElementsByTagName) return false;
	//		if(!document.getElementById) return false;
	//		if (!document.getElementById("imagegallery")) return false;
	//		var gallery = document.getElementById("imagegallery");
	//		var links = gallery.getElementsByTagName("a");
	//	}
//
// Ik moet loopen door alle individuele elementen in de links verzameling. Ik ga dit met een loop doen:
//
	//	var i = 0;
// Ik gebruik de "i" omdat dat traditioneel zo gedaan wordt. Ik begin met de counter naar 0 te zetten middels bovenstaande initializatie.
// Hierna komt de test conditie:
	//	i < links.length
// de loop zal gedraaid worden zolang als i kleiner is dan de length property van de links array. De "length" property bevat
// het totaal aantal elementen in de array. Dus als links 4 elementen bevat zal de loop doorgaan zolang als "i" kleiner is dan 4.
//
// Tot slot zal ik de counter met 1 verhogen:
	//	i++;
// Dit is shorthand voor i = i + 1;
// van dit alles maak ik een "for" loop
	//	for(var i = 0; i < links.lenth; i++){}
//
// Het gedrag veranderen:
// Ik wil het gedrag van elk element in de links array veranderen. Eigenlijk moet ik naar de links refereren als "node list" i.p.v een
// array. Het is een set van nodes. Elke node in de set heeft zijn eigen properties en methods.
//
// Ik ben geintresseer in de "onclick" methode. Dit is hoe ik het gedrag koppel voor die methode:
	//	links[i].onclick = function(){
// Dit is een zgn. "anonymous" functie, een manier van functies on the fly maken. In dit geval  wordt de functie gemaakt
// op het moment dat de "onclick" event handler wordt geactiveerd. Welke statements ik dan ook plaats , deze stataments
// zullen worden uitgevoerd als de link geklikt wordt..
//
// De waarde van links[i] zal verandereen als de waarde van "i" verhoogd wordt. Het begint als links[0], en zal eindigen als links[3]
//
// De waarde die ik door ga geven aan de showPic functie is het "this" keyword. Deze refereert aan het element dat nu de "onclick methode heeft gekoppeld
// Dus dit refereert aan links[i], die  weer refereert aan een specifieke node in de links node lijst:
	// showPic(this);
//
// Er is nog 1 ding dat ik moet doen. Ik moet het standaar gedrag veranderen. Als de showPic functi succesvol geexecuteerd
// is geweest, wil ik niet dat de browser de standaard acite uit gaat voeren van het klikken op een link.
// Net zoals eerder, wil ik dit gedrag beeindigen zodat de link niet gevolgd wordt:
	//	return false;
// Door een Boolean waarde van "false" te geven, wordt er een bericht naar de browser gestuurd die zegt
// "Reageer alsof deze link niet geklikt is".
// Ik ga van bovenstaande weer een functie maken:
	// for(var i = 0; i < links.lenth; i++){
		//	links[i].onclick = function(){
		//		showPic(this);
		//		return false;
		//	}
	//	}
// Ik heb ook de for loop erbij zetten:
// Dus mijn volledige prepareGallery functie ziet er als volgt uit:
// function prepareGallery(){
// 	if(!document.getElementsByTagName) return false;
// 	if(!document.getElementById) return false;
// 	if (!document.getElementById("imagegallery")) return false;
// 	var gallery = document.getElementById("imagegallery");
// 	var links = gallery.getElementsByTagName("a");
// 	for(var i = 0; i < links.length; i++){
// 		links[i].onclick = function(){
// 			return showPic(this);
// 		}
// 	}
// }
// Ik ga de functie addLoadEvent toevoegen zodat ik prepare Gallery kan laden als het document geladen is in de browser:
// function addLoadEvent(func) {
//   var oldonload = window.onload;
//   if (typeof window.onload != 'function') {
//     window.onload = func;
//   } else {
//     window.onload = function() {
//       oldonload();
//       func();
//     }
//   }
// }
// //
// addLoadEvent(prepareGallery);
//
 // Ik wil nog wat checks uitvoeren op de prepareGallery functie
 // Ik moet controleren of  het element "placeholder" wel bestaat, en dat geldt ook voor het "description" element, als het 
 // "description" element niet bestaat wil ik toch dat de href veranderd wordt van "placeholder", dus ik ga de controlere
 // opslitsen in 2 gedeeltes.
 //
 	// if (!document.getElementById("placeholder")) return false; (verplaatst naar de showPic functie)
 // daarna kan ik door gaan om de image swapping te doen:
 // Nu ga ik controlern op het bestaan van het element description:
 //
 	// if(!document.getElementById("description")) return false (verplaatst naar de showPic functie)
// 
// Er is 1 stukje fine tuning die ik nog wil doen, dit heeft te maken met het gebruik van een toetsenbord i.p.v. een muis.
// Er is een event handler speciaal voor de actie van het indrukken van een toets op het toetsenbord., genaamd
// onkeypress.  Ik zou simpelweg de instructies kunnen dupliceren van onclick, maar er is een simpeler manier:
	//	links[i].onkyepress = links[i].onclick
// Hiermee wij is alle functionaliteit van onclick toe aan onkeypress. Dit ga ik toevoegen aan mijn prepareGallery functie
// Bij nader inzien haal ik dit weer weg, want bij elke toets die ingedrukt wordt er een "return false" door de showPic functie
//
//
// Ik ga een nieuwe functie maken om zelf de placeholder image op de pagina te zetten m.b.v. JavaScript
// immers, de placeholder image wordt compleet gecontroleerd door DOM methodes 
// en die willen we dan ook buiten de html houden.
//
// De functie ga ik preparePlaceholder noemen:
// function preparePlaceHolder (){
// Als eerste ga ik een img element node maken:
	// var placeholder = document.createElement("img");
	// //Deze ga ik een ID geven:
	// placeholder.setAttribute("id", "placeholder");
	// // en een source
	// placeholder.setAttribute("src", "images/placeholder.gif");
	// // en een alt attribuut
	// placeholder.setAttribute("alt","my image gallery");
	// // ik maak een paragraph element node aan
	// var description = document.createElement("p");
	// // ook deze geef ik een ID
	// description.setAttribute("id","description");
	// // vervolgens maak ik een textnode aan
	// var desctext = document.createTextNode("Choose an image");
	// // en ik koppel de text node (desctext) aan de paragraph node (description)
	// description.appendChild(desctext);
	// // Nu moet ik nog de afbeelding en de paragraph in het document plaatsen:
	// document.getElementsByTagname("body")[0].appendChild("placeholder");
	// document.getElementsByTagname("body")[0].appendChild("description");

//
// insertBefore
// We willen een nieuw element invoegen in de pagina, dit kan met insertBefore, syntax: parentElement.insertBefore(newElement,  targetElement)
// Misschien weet je niet wat het parentElement is, dat is o.k. je kan altijd de parentNode property gebruiken om die te achterhalen
// Ik kan dan b.v. de volgende opdrachten gebruiken om de placeholder in te voegen in de pagina:
	// var gallery = document.getElementById("imagegallery");
	// gallery.parentNode.insertBefore(placeholder, gallery);
// Ik wil echter dat de placeholder wordt ingevoegd NA de imagegallery
// Hiervoor moet ik een eigen functie schrijven "insertAfter" , dit is n.l. geen standaardfunctie zoals insertBefore helaas. Hier gaan we:
// De functie zal 2 argumenten aannemen, 1. nieuw element, 2. target element
	// function insertAfter(newElement, targetElement){
	// 	// Verkrijg de "parentNode" property van targetElement en ken dit toe aan de variabele "parent"
	// 	var parent = targetElement.parentNode;
	// 	// Vind uit of het target element toevallig de laatste "Child" is van parent. Vergelijk de lastChild property  van parent met het target element:
	// 	if (parent.lastChild == targetElement){
	// 		//Als de uitkomst hiervan "true" is voeg dan het nieuwe element toe aan parent middels appendChild. Het nieuwe element zal direct na het
	// 		// target element worden ingevoegd:
	// 		parent.appendChild(newElement);
	// 	} else{
	// 		// en anders moet het nieuwe element ingevoegd worden tussen het target element en de volgende child van parent.
	// 		// Gebruik de insertBefore methode om het nieuwe element voor de target's elements volgende siblling
	// 		parent.insertBefore(newElement).targetElement.nextSibling;
	// 	}
	// }
// Ik kan de insertAfter functie nu gaan gebruiken in de preparePlaceHolder functie, eerst moet ik een referentie maken naar de image gallery
// var gallery =  document.getElementById("imagegallery");
// nu kan ik placehoder invoegen, direct na imagegallery
// insertAfter(placeholder, gallery);
// de placeholder image is nu deel van de node tree van gallery.html. Ik wil de "description" paragraaf direct daarna plaatsen.
// Ik heb al een variabele voor deze paragraaf gemaakt (description). Via de functie insertAfter kan ik ook dit element plaatsen:
// insertAfter(description, placeholder);
// Nu moet ik alleen nog testen of de browser de verschillende functies ondersteund:
	// if(!document.createElement) return false;
	// if(!document.createTextNode) return false;
	// if(!document.getElementById) return false;
	// if(!document.getElementById("imagegallery")) return false;
	// // Nu ga ik hieronder alles op een rijtje zetten,
//
//
// Uiteindelijk krijgt de showPic functie 5 onderdelen:
// 1. addLoadEvent
// 2. insertAfter
// 3. preparePlaceHolder
// 4. prepareGallery
// 5. showPic
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
function preparePlaceHolder (){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "/images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery =  document.getElementById("largePhoto");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			return showPic(this);
		}
	}
}
function showPic(whichpic){
	 if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG" ) return true;
	placeholder.setAttribute("src", source);
	if(!document.getElementById("description")) return false;
	var text = whichpic.getAttribute("title") ?
	whichpic.getAttribute("title"): "";
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}
	return false;
}
addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);

