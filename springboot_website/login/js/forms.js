const registerBtn = document.querySelector('#register-btn');



const registerUser =  async() => {

    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // let response = await fetch('http://localhost:8080/api/v1/user/all');

    let response2 = await fetch('http://localhost:8092/api/v1/user/save',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password,
            "dob": dob
          })
    })

    if (response2.status == 200){
        window.location.replace("http://localhost:8090/SpringBootWebsiteFontend/springboot_website/login/html_files/index2.html");
    }
    else{
        let result = await response2.json();
        let message = document.querySelector('#errorMsg');
        message.innerHTML =result.message;
    }



    // console.log(response);
    console.log(response2);

}



registerBtn.addEventListener('click', registerUser);
