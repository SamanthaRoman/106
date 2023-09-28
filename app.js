
function saveTask(){
    console.log("saveTask btn")
}

function toggleImportant(){
    const nonImportantIcon = "fa-regular fa-star";
    const importantIcon = "fa-solid fa-star";

    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);

}

function init(){
    console.log("task manager");

    // load data

    // hook events
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);

    // create function and name it toggle important, 
    // just conosle.log
}




window.onload = init; // force browser to render everything on the css to render 
// before we start using the logic