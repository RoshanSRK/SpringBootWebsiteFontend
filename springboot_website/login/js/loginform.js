const loginBtn = document.querySelector('#login-btn');

const validateUser = async() =>{
    let email = document.getElementById('email').value;
    let password =  document.getElementById('password').value;

    let response = await fetch('http://localhost:8092/api/v1/user/validate',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
          })
    })

    if (response.status == 200){
        window.location.replace("productspage.html");
    }
    else{
        let result = await response.json();
        let message = document.querySelector('#messageM');
        message.innerHTML =result.message;
    }



}
loginBtn.addEventListener('click', validateUser);