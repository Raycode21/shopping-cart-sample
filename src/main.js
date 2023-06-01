let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
}



/*................serach form.......................*/

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick= () => {
	searchForm.classList.toggle('active');
}


/*.................Log in form...........................*/

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick= () => {
	loginForm.classList.toggle('active');
}

/*.....................shopping cart section..................*/







	
	