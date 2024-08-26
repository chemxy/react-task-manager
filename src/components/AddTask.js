import {useContext} from "react";
import {TaskContext} from "../store/TaskContext";
import {NavLink} from "react-router-dom";

export default function AddTask() {

    const projectContext = useContext(TaskContext);

    function onAddTask(event) {         //TODO handle empty / invalid input
        event.preventDefault();
        const fd = new FormData(event.target);
        const newTask = Object.fromEntries(fd.entries());
        projectContext.addItem(newTask); //sync with project context
    }

    return <div>
        <form onSubmit={onAddTask}>
            <h1 className="text-cap">create a task</h1>
            <div className="input-group">
                <div>
                    <label className="input-label">name</label>
                </div>
                <div>
                    <input type="text" name="name" className="input-text"/>
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label className="input-label">due date</label>
                </div>
                <div>
                    <input type="text" name="dueDate" className="input-text"/>
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label className="input-label">description</label>
                </div>
                <div>
                    <textarea type="text" name="description" className="input-text" id="input-description"/>
                </div>
            </div>
            <button type="submit" className="primary-button text-cap" id="add-task-button">add</button>
            <NavLink to="/tasks">
                <button type="button" className="primary-button text-cap">cancel</button>
            </NavLink>

        </form>
    </div>
}
