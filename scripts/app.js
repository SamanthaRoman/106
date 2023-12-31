let isImportant = false;
let allTasks = [];
console.log(isImportant);

let isVisible = true; // true so when page loads form is visible.
console.log("form show", isVisible);


function toggleImportant(){
    const nonImportantIcon = "fa-regular fa-star";
    const importantIcon = "fa-solid fa-star";

    // below is logig to toggle on and off.
    if(isImportant){
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
        console.log("off", isImportant)
    } else 
    {
        $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
        isImportant = true;
        console.log("on", isImportant)
    }
   // BEFORE THE STATE VARIABLE...  $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
}

function toggleDetails(){
    if(isVisible){
        $("#form").hide();
        isVisible = false;
        console.log("show off", isVisible);
    } else {
        $("#form").show();
        isVisible = true;
        console.log("show on", isVisible);
    }
}

function saveTask(){
    // get values
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title,desc,color,date,status,budget);

    // build your NEW object
    let taskToSave = new Task(isImportant, title, desc, color.value, date, status, budget);
    console.log(taskToSave);

    // save to server (get connected to server)

    $.ajax({
        type: "POST", // what do we want to do? save something
        url: "http://fsdiapi.azurewebsites.net/api/tasks/", // where at
        data: JSON.stringify(taskToSave), // transform it into text (json)
        contentType: "application/json", // specify the content type will be an application from json
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        },
    });

    // display the task (get connected to server)
    // here we want to render the object in the list
    displayTask(taskToSave) // function only... 
    clearForm();
}

  // create a function that retives everything from the server

function loadTask(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(res){
            let data = JSON.parse(res);
            console.log(res), // EVERYTHING showing us text with json
            console.log(data); // showing us java objects 
            for (let i = 0; i < data.length; i++) {
                let task = data[i];
                if(task.name == "Samantha"){
                    console.log(task, task.lenght)
                    displayTask(task);
                }
                
            }

        },
        error: function(error){
            console.log(error);
        },
    })
}

// function to save task and clear form 
// grab the id and put an empty value back into it.

function clearForm(){
$("#txtTitle").val("");
$("#txtDescription").val("");
$("#selColor").val("#000000");
$("#selDate").val("");
$("#selStatus").val("");
$("#numBudget").val("");
};


let syntax = true;

function displayTask(task)
{

    if(isImportant){
        let syntax = `
        <div class="task">
            <div class="task-item imp-icon"><i class="fa-solid fa-star"></i></div>
            <div class="task-item task-details-box">
                <h5>Task: ${task.title}</h5>
                <p>Details: ${task.description}</p>
            </div>
            <div class="task-item date-budget">
                <label>${task.startDate}</label>
                <label>${task.status}</label>
                <label>${task.budget}</label>
            </div>
        </div>
        `
        $(".pending-task").append(syntax);
    }else{
        let syntax = `
        <div class="task">
            <div class="task-item empty-cell"></div>
            <div class="task-item task-details-box">
                <h5>Task: ${task.title}</h5>
                <p>Details: ${task.description}</p>
            </div>
            <div class="task-item date-budget">
                <label>${task.startDate}</label>
                <label>${task.status}</label>
                <label>${task.budget}</label>
            </div>
        </div>
        `
        $(".pending-task").append(syntax);
    }
    

}
console.log(displayTask);

function testRequest(){
    // don't forget commas...
    // get, post, put, pach, delete
    $.ajax({
        type: "GET", // read something
        url: "http://fsdiapi.azurewebsites.net/", // from where
        success: function(response){ // what to do if succesful connection with server
            console.log(response);
        },
        error: function(error){ // what to do if not succesful show us error code
            console.log(error);
        },
    });
}



function init(){
    console.log("task manager");


    // load data

    // hook events
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    $("#btnDetails").click(toggleDetails);
    loadTask();

    // create function and name it toggle important, 
    // just conosle.log
}




window.onload = init; // force browser to render everything on the css to render 
// before we start using the logic