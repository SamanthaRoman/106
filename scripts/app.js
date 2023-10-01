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
    let taskToSave = new Task(isImportant.value, title, desc, color.value, date, status.value, budget);
    console.log(taskToSave);
    allTasks.push(saveTask);

    // save to server (get connected to server)

    // display the task (get connected to server)
    // here we want to render the object in the list
    displayTask(taskToSave) // function only... 
}

let syntax = true;

function displayTask(task)
{

    if(isImportant){
        let syntax = `
        <div class="task">
            <div class="task-item><i id="iImportant" class="fa-solid fa-star"></i></div>
            <div class="task-item">
                <h5>Task: ${task.title}</h5>
                <p>Details: ${task.description}</p>
            </div>
            <div class="task-item date-budget">
                <label>Start Date: ${task.startDate}</label>
                <label>Status: ${task.staus}</label>
                <label>Budget: ${task.budget}</label>
            </div>
        </div>
        `
        $(".pending-task").append(syntax);
    }else{
        let syntax = `
        <div class="task">
            <div class="task-item empty-cell"></div>
            <div class="task-item">
                <h5>Task: ${task.title}</h5>
                <p>Details: ${task.description}</p>
            </div>
            <div class="task-item date-budget">
                <label>Start Date: ${task.startDate}</label>
                <label>Status: ${task.status}</label>
                <label>Budget: ${task.budget}</label>
            </div>
        </div>
        `
        $(".pending-task").append(syntax);
    }
    

}
console.log(displayTask);

function init(){
    console.log("task manager");


    // load data

    // hook events
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    $("#btnDetails").click(toggleDetails);

    // create function and name it toggle important, 
    // just conosle.log
}




window.onload = init; // force browser to render everything on the css to render 
// before we start using the logic