window.onload = function(){
    document.getElementById("mailForm").addEventListener("submit", formSubmit);

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
    };

    closeBtn[0].onclick = function(){
        closeBoxContainer[0].style.display = "none";
    };

    function formSubmit(e){
        e.preventDefault();
        console.log("E:", e);
        var alertText = "",
            form = e.srcElement || e.target;

        for(var i = 0; i < form.length - 1; i++){
            alertText += form[i].name + ": ";

            if(form[i].value !== ""){
                alertText += form[i].value;
            } else{
                alertText += "N/A";
            }

            alertText += "\n";
        }
        alert(alertText);
    }
};