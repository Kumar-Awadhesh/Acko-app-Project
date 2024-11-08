// getting the element by it's id and also adding event listener
document.getElementById("select").addEventListener("change", function(){
    //check if value is change then redirect to it's relevent page
    if(this.value){
        window.open(this.value, 'blank');
    }
})

// getting the element by it's id and also adding event listener
document.getElementById("renewal").addEventListener("change", function(){
    //check if value is change then redirect to it's relevent page
    if(this.value){
        window.open(this.value, 'blank');
    }
})

// getting the element by it's id and also adding event listener
document.getElementById("claims").addEventListener("change", function(){
    //check if value is change then redirect to it's relevent page
    if(this.value){
        window.location.href = this.value;
    }
})

// getting the element by it's id and also adding event listener
document.getElementById("getInsurance").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Get your insurance on the acko app";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";
    
})

// getting the element by it's id and also adding event listener
document.getElementById("appButton").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Get the acko app on your mobile";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";

});

// getting the element by it's id and also adding event listener
document.getElementById("abha").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Create your ABHA ID on the ACKO app";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";
});

// getting the element by it's id and also adding event listener
document.getElementById("challan").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Check your pending challans on the ACKO app";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";
});


// getting the element by it's id and also adding event listener
document.getElementById("vehicle").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Add and manage your vehicles on the ACKO app";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";
});

// getting the element by it's id and also adding event listener
document.getElementById("safety").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Activate Safety Net for you and your family on the ACKO app";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";
});

// getting the element by it's id and also adding event listener
document.getElementById("visa").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Apply for a visa on the ACKO app";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";
})

// getting the element by it's id and also adding event listener
document.getElementById("couponButton").addEventListener("click", function(){
    //rediect to it's relevant page when button is clicked
    window.location.href = "login_page.html";
})

// getting the element by it's id and also adding event listener
document.getElementById("appButton2").addEventListener("click", function(){
    // getting the element by it's id and also adding event listener
    let getContainer = document.getElementById("gtiContainer")

    //empty container before adding the element
    getContainer.innerHTML = "";

    //creating a qr div element and adding class name to it
    let qrdiv = document.createElement("div");
    qrdiv.classList.add("qrdiv");

    //creating a button div element and adding class name to it
    let buttondiv = document.createElement("div");
    buttondiv.classList.add("buttondiv");

    //creating a input element and adding class name to it
    let input = document.createElement("input");
    input.classList.add("qrinput")
    //adding the type to the input element
    input.type = "number";
    //addind the place holder to input element
    input.placeholder = "Enter phone number";

    //creating a button element and adding class name to it
    let button = document.createElement("button");
    button.classList.add("qrbutton");
    //addind the text content to the button
    button.textContent = "Get the app link";

    //creating a close button element and adding class name to it
    const closebtn = document.createElement("button");
    closebtn.classList.add("closebtn")
    //addind the text content to the button
    closebtn.textContent = "x";

    //adding the event listener to the close button element
    closebtn.addEventListener("click", function(){
        // setting the display style none when button clicked
        getContainer.style.display = "none";
    });

    //creating a  div element and adding class name to it
    let insuranceDiv = document.createElement("div");
        insuranceDiv.classList.add("insuranceDiv");

     //creating a div element and adding class name to it
    let h1paraDiv = document.createElement("div");
    h1paraDiv.classList.add("h1paraDiv");

    //creating a h1 element and adding class name to it
    let h1 = document.createElement("h1")
    h1.classList.add("qrh1");
    //adding the text content to the element
    h1.textContent = "Apply for a visa on the ACKO app";

    //creating a p tag element and adding text content to the element
    let p = document.createElement("p");
    p.textContent = "Scan the QR code to get the app on your mobile"

    //creating an image element
    let qr = document.createElement("img");
    //adding the source to the element
    qr.src = "https://i.postimg.cc/fRgt0rSq/Screenshot-18-8-2024-222755-www-acko-com.jpg' border='0' alt='Screenshot-18-8-2024-222755-www-acko-com";
    //adding alternatinve to the element
    qr.alt = "qr code"
    //adding width and height to the element
    qr.width = 200;
    qr.height = 200;

    //appending the h1 and p element to div
    h1paraDiv.append(h1, p)
    //appending buuton to button div
    buttondiv.append(button);
    //appending input and button div to qr div
    qrdiv.append(input, buttondiv);
    //appending h1paradiv, qr, closebtn and qrdiv element to to it's parent div
    insuranceDiv.append(h1paraDiv, qr, closebtn, qrdiv);
    // addind all element to the container div
    getContainer.append(insuranceDiv);

    //seeting the container div style as block
    getContainer.style.display = "block";
})