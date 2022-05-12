import "./TodoItem.css";
import { CgCheck, CgCloseO } from "react-icons/cg";

function TodoItem(props) {
  return (
    <div
      className="containerItem"
      style={{
        opacity: props.completed ? 0.5 : 1,
      }}>
      <div className="containerIcon" onClick={props.onClickIconLeft}>
        <div className={props.completed ? "containerIconTwoWithLightBlue" : "containerIconTwo"}>
          {props.completed && <CgCheck className="iconItem" />}
        </div>
      </div>
      <p className="text"
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
      >{props.text}</p>
      <div className="containerIcon" onClick={props.onClickIconRight}>
        <CgCloseO className="iconItem" />
      </div>
    </div>
  );
}

export { TodoItem };