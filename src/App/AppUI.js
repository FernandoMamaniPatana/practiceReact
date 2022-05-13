import ParticlesBg from "particles-bg";
import { useContext } from "react";
import { ModalImage } from "../ModalImage";
import { ModalInput } from "../ModalInput";
import { ModalTitle } from "../ModalTitle";
import { TodoContext } from "../TodoContext";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle";
import './App.css';

function AppUI() {
    const {
        onClickTodoAdd,
        tasks,
        searchValue,
        onChangeSearch,
        filteredTasks,
        onClickIconLeft,
        onClickIconRight,
        dataStatus
    } = useContext(TodoContext)
    return (
        <>
            <div className='Container'>
                <div className='ContainerCreateTask'>
                    <div className='ContainerModal'>
                        <ModalTitle text="Create new task" />
                        <ModalInput onClickTodoAdd={onClickTodoAdd} />
                        <ModalImage src={require("./imageHappyMother.png")} alt={"Smiley face"} />
                    </div>
                </div>
                <div className='ContainerYourTasks'>
                    {!dataStatus.error && !dataStatus.loading &&
                        <TodoTitle title="Your tasks" tasks={tasks} />
                    }
                    <TodoSearch value={searchValue} setValue={onChangeSearch} />
                    {!dataStatus.error && !dataStatus.loading &&
                        <TodoList>
                            {filteredTasks?.map((todo, index) => {
                                return (
                                    <TodoItem
                                        key={index}
                                        onClickIconLeft={() => onClickIconLeft({ index, todo })}
                                        onClickIconRight={() => onClickIconRight({ index, todo })}
                                        text={todo.text}
                                        completed={todo.completed}
                                    />
                                )
                            })}
                        </TodoList>
                    }
                </div>
            </div>
            <ParticlesBg type="cobweb" bg={true} />
        </>
    )
}

export { AppUI };