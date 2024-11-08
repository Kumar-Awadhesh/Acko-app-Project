
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    const userDetails = {
        name: name,
        phone: phone,
        email: email
    }
    
    let Users = localStorage.getItem("userDetails");
    if(Users !== null){
        Users = JSON.parse(Users)
        Users.push(userDetails);
    }
    else{
        let Users = [];
        Users.push(userDetails);
    }
    
    localStorage.setItem('userDetails', JSON.stringify(Users))
    alert("Registered Successfully")

    document.getElementById("form").reset();
})