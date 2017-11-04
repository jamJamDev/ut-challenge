window.onload = function(){
    var accord = document.getElementsByClassName("accordion");
    accord[0].onclick = function(){
        console.log("CLICKED");
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block")
            panel.style.display = "none";
        else
            panel.style.display = "block";
    }
}