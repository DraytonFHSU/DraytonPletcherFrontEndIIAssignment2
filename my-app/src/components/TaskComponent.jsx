import React, {Component} from "react";

export default function TaskComponent() { 
var tasks = [
{
    id: 1,
    task: "Clean Kitchen"
},
{
    id: 2,
    task: "Take out Trash"
},
{
    id: 3,
    task: "Feed beholder"
},
{
    id: 4,
    task: "Complete Front End II Assignment 1"
}
]
function getRandomTask(){
    var randomNum = Math.floor(Math.random()*tasks.length)
    return tasks[randomNum].task
}
return <div>
    <h3>Here's a random task: {getRandomTask()}</h3>
</div>;
}