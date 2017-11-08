/**
 * Close Button Click Event
 */
function closeBtnClick(){
    document.getElementsByClassName("close-box-container")[0].style.display = "none";
}

/**
 * Form Submit Event
 * @param event object
 */
function formSubmit(e){
    e.preventDefault();
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

/**
 * Accordion Click Event
 */
function accordionClick(){
    var panel = document.getElementById('accordPanel');
    if(panel.style.display === "block")
        panel.style.display = "none";
    else
        panel.style.display = "block";
}