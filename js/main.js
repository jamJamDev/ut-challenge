window.onload = function(){
    var accord = document.getElementsByClassName("accordion"),
        closeBtn = document.getElementsByClassName("close-btn"),
        closeBoxContainer = document.getElementsByClassName("close-box-container");

    accord[0].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block")
            panel.style.display = "none";
        else
            panel.style.display = "block";
    },

    closeBtn[0].onclick = function(){
        closeBoxContainer[0].style.display = "none";
    }
};