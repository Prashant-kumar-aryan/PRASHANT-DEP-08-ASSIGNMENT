// Problem 2.  Task Tracker
// Description:
// You have an array of task objects.
// Each task has a taskName, a completed status (boolean),
// and a priority (numerical value where lower numbers indicate higher priority). 
// Your tasks are:
// find: Identify the first task with a high priority (for example, priority less than 3).
// findIndex: Find the index of the first task that is not completed.
// reduce: Count how many tasks have been completed.
// (forEach): Print all task names.
// 
const tasks = [   
    { taskName: "Write report", completed: true, priority: 2 },
    { taskName: "Attend meeting", completed: false, priority: 3 },
    { taskName: "Fix bug", completed: false, priority: 1 },
    { taskName: "Update website", completed: true, priority: 4 } 
];


const highPriorityTask = tasks.find(task => task.priority < 3);
const uncompletedIndex = tasks.findIndex(task => task.completed === false);
const completed = tasks.reduce((count , task)=>{
    return count+task.completed;
},0)
console.log("Answer of Find",highPriorityTask);
console.log("Answer of FindIndex",uncompletedIndex);
console.log("Number Of Completed Taks",completed);
console.log("Answer Of ForEach");
tasks.forEach((task)=>{
    console.log(task.taskName);
})
