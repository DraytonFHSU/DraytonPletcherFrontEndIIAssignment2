import React, { useState } from "react";

export default function TaskComponent() { 
    const [task, setTask] = useState("");

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent the page from reloading
        console.log(task);  // Output task to console
    };

return (
    <form onSubmit={handleSubmit}>
        <p>Output a task to console:</p>
            {/* Bind input field to state */}
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} // Update state as the user types
            />
        {/* Submit button */}
        <input type="submit" value="Submit" />
    </form>
)
}