import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
        <ul className="container">
            {props.children}
        </ul>
    </section>
  );
}

export { TodoList };