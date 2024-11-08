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