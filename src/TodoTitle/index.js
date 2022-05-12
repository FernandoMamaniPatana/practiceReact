import "./TodoTitle.css";

function TodoTitle(props) {
    const { tasks = [] } = props;
    const tasksLength = tasks.filter(task => task.completed).length;
    return (
        <div className="ContainerTitle">
            <h1 className="TextTitle">{props.title}</h1>
            <h2 className="TextSubTitle">{`Tareas completadas ${tasksLength} de ${tasks.length}`}</h2>
        </div>
    )
}
export { TodoTitle };