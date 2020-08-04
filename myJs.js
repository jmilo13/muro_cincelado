let btnSuscribir = document.getElementById ("btnSuscribir"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrar= document.getElementById("btnCerrar"),
    principalNav= document.getElementById("principalNav");
    altura = principalNav.offsetTop;

let gracias= document.getElementById("gracias"),
    overlay2= document.getElementById("overlay2"); 

const form = document.getElementById ("formIns");
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");


window.addEventListener ("scroll", function (){
    	if (window.pageYOffset > altura) {
    		principalNav.classList.add("fixed");
	}	else {
			principalNav.classList.remove("fixed");
}
    });
 
setTimeout(function(){ 
	overlay.classList.add("activa"); 
	popup.classList.add("activa");
	},3000);

form.addEventListener("submit", function(){ 
  if (email.value.length && nombre.value.length > 0)  {
  popup.classList.remove("activa");
  overlay.classList.remove("activa"); 
  gracias.classList.add("activa");
  overlay2.classList.add("activa");
  console.log("todo bien") 
} 
});

	btnCerrar.addEventListener ("click", function (){ 	
  overlay.classList.remove("activa"); 
	popup.classList.remove("activa");
  gracias.classList.remove("activa");
  overlay2.classList.remove("activa"); 
	});

  btnCerrar2.addEventListener ("click", function (){ 
    gracias.classList.remove("activa");
overlay2.classList.remove("activa"); 
  });



