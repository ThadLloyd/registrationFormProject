const signUp = document.getElementById('s-u-btn');
const popUp = document.getElementById('popup-container');
const cancel = document.getElementById('cancel-close');

const openPopUp = () => {
	popUp.style.display = 'block';
}

const closePopUp = () => {
	if (popUp.style.display = 'block') {
		popUp.style.display = 'none';
	}
}

signUp.addEventListener('click', openPopUp);
cancel.addEventListener('click', closePopUp);
