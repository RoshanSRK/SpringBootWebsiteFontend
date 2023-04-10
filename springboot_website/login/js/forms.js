const loginBtn = document.querySelector('#login-btn');
const registerBtn = document.querySelector('#register-btn');


const registerUser =  async() => {

    let response = await fetch('http://localhost:8080/api/v1/user/all');
    console.log(response);

}


// loginBtn.addEventListener('click', validateUser);
registerBtn.addEventListener('click', registerUser);
