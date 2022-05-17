import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoTitle.css";

function TodoTitle(props) {
    const { tasks = [] } = useContext(TodoContext);
    const tasksLength = tasks?.filter(task => task.completed).length;
    return (
        <div className="ContainerTitle">
            <h1 className="TextTitle">{props.title}</h1>
            <h2 className="TextSubTitle">{!!tasks ? `Tareas completadas ${tasksLength} de ${tasks?.length}` : 'Loading...'}</h2>
        </div>
    )
}
export { TodoTitle };