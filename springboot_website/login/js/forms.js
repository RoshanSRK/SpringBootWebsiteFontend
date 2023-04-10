const loginBtn = document.querySelector('#login-btn');
const registerBtn = document.querySelector('#register-btn');


const registerUser =  async() => {

    let response = await fetch('http://localhost:8080/api/v1/user/all');

    let response2 = await fetch('http://localhost:8080/api/v1/user/save',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:{
            "name": "roshan",
            "email": "roshan@gmail.com",
            "password": "123456789",
            "dob": "2003-04-10"
          }

    })
    console.log(response);
    console.log(response2);

}


// loginBtn.addEventListener('click', validateUser);
registerBtn.addEventListener('click', registerUser);
