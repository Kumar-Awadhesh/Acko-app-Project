document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    let phone = document.getElementById("phone").value;

    if(!localStorage.getItem('userDetails')){
        localStorage.setItem('userDetails', JSON.stringify([]));
    }

    let getUser = localStorage.getItem('userDetails');

    if(getUser){
        getUser = JSON.parse(getUser)
    }
    else{
        let getUser = [];
    }
    console.log(getUser)
        
    let Users = getUser.find(user => user.phone === phone)

    if(Users){
        alert("Login Successful");
        window.location.href = "logged_in.html";
    }
    else{
        return(alert("Login failed: details mismatch or User not Registered!"))
    }

})