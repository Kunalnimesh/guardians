const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const clientButton = document.getElementById('clientButton');
const helperButton = document.getElementById('helperButton');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

clientButton.addEventListener('click', () => {
    signUpContainer.style.display = 'block';
    signInContainer.style.display = 'none';
});

helperButton.addEventListener('click', () => {
    signUpContainer.style.display = 'block';
    signInContainer.style.display = 'none';
});
