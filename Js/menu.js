const arrow = document.querySelectorAll(".list__bottom");

// for(let i = 0; i < arrow.length; i++){
// 	arrow[i].addEventListener("click", (e)=>{
// 		let arrowParent = e.target.parentElement.parentElement.parentElement;
// 		console.log(arrowParent);
// 		arrowParent.classList.toggle("showMenu");
// 	});
// }
// ========================================================
arrow.forEach( (element, index) =>{
	element.addEventListener("click", (event) =>{
		let height = 0;
		let menu = element.nextElementSibling;
		// arrowParent.classList.toggle("showMenu");

		if(menu.clientHeight == "0"){
			element.classList.add("giro");
			height = menu.scrollHeight;
		
		}else{
			element.classList.remove("giro");
		}
		menu.style.height = `${height}px`;
		console.log(height);

	});
});
//===========================================================
	const sidebar = document.querySelector(".sidebar");
	const sidebarBtn = document.querySelector(".menu");

	// agregamos esta clase a la barra de navegacion
	sidebarBtn.addEventListener("click", () =>{
		sidebar.classList.toggle("close");
		console.log(sidebar);
	});


// ================tercera opcion========================//
// let activeIndex = 0;

// const questionElements = document.querySelectorAll(".list__bottom");

// questionElements[activeIndex].classList.add("active");

/*questionElements.forEach( (element, index) =>{
	element.addEventListener("click", (event) =>{
		// let menu = element.nextElementSibling;
		// console.log(menu);
		// let activeIndex = 0;

		questionElements[activeIndex].classList.remove("active");
		activeIndex = index;
		questionElements[activeIndex].classList.add("active");


		// if(menu.clientHeight == "0"){
		// 	element.classList.add("giro");
		// 	activeIndex = menu.scrollHeight;
		
		// }else{
		// 	element.classList.remove("giro");
		// }

		// menu.style.height = `${activeIndex}px`;
	});
});*/
