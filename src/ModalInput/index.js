import { useState } from "react";
import "./ModalInput.css";
import { TodoAdd } from '../TodoAdd';

function ModalInput(params) {
    const [input, setInput] = useState('');
    return (
        <div className='ContainerModalInput'>
            <p style={{
                fontSize: "16px",
                fontFamily: "Red Hat Display",
                color: "#73357D",
                fontWeight: "bold",
                marginBottom: "8px",
                alignSelf: "flex-start",
            }}>Task Name</p>
            <input
                style={{
                    // width: "90%",
                    height: "40px",
                    border: "0",
                    borderRadius: "5px",
                    padding: "0px 10px",
                    fontSize: "14px",
                    fontFamily: "Red Hat Display",
                    color: "#B6B3A6",
                    fontWeight: "bold",
                    backgroundColor: "#F5F5F5",
                    marginBottom: "16px",
                }}
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter new task'
            />
            <TodoAdd onClick={() => {
                params.onClickTodoAdd(input)
                setInput('')
            }} />
        </div>
    )
}
export { ModalInput };