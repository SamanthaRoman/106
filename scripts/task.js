class Task {

    // order is very important with a constructor

    constructor(important,title,desc,color,startDate,status,budget){
        this.important = important;
        this.title = title;
        this.description = desc;
        this.color = color;
        this.startDate = startDate;
        this.status = status;
        this.budget = budget; 

        this.name = "Samantha";
    }
}

// the class is like a blueprint of buidling a car. 
// we don't add the enjine and paint the car at the same time. 
// paint is last. 
// the class creates a recipe that we have to follow to create our object. 