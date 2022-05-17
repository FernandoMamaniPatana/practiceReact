import ParticlesBg from "particles-bg";
import { useContext } from "react";
import { ButtonOpenModal } from "../ButtonOpenModal";
import { Modal } from "../Modal";
import { ModalImage } from "../ModalImage";
import { ModalInput } from "../ModalInput";
import { ModalTitle } from "../ModalTitle";
import { TodoContext } from "../TodoContext";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle";
import ContentLoader from "react-content-loader";
import './App.css';
const MyLoader = (props) => (
    <div
        style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
        }}
    >
        <ContentLoader
            speed={1}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor="#c48d8d"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="12" y="15" rx="3" ry="3" width="376" height="50" />
            <rect x="12" y="85" rx="3" ry="3" width="376" height="50" />
            <rect x="12" y="155" rx="3" ry="3" width="376" height="50" />
            <rect x="12" y="225" rx="3" ry="3" width="376" height="50" />
            <rect x="12" y="295" rx="3" ry="3" width="376" height="50" />
        </ContentLoader>
    </div>
)
function AppUI() {
    const {
        onClickTodoAdd,
        tasks,
        searchValue,
        onChangeSearch,
        filteredTasks,
        onClickIconLeft,
        onClickIconRight,
        dataStatus,
        changeStatusModal,
        isVisibleModal,
    } = useContext(TodoContext)
    return (
        <>
            <div className='Container'>
                <div className='ContainerYourTasks'>
                    <TodoTitle title="Your tasks" />
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
                    {dataStatus.loading && <MyLoader />}
                </div>
            </div>
            {!dataStatus.error && !dataStatus.loading && <ButtonOpenModal onClick={changeStatusModal} />}
            {isVisibleModal &&
                <Modal>
                    <div className='ContainerCreateTask'>
                        <div className='ContainerModal'>
                            <ModalTitle text="Create new task" />
                            <ModalInput onClickTodoAdd={onClickTodoAdd} />
                            <ModalImage src={require("./imageHappyMother.png")} alt={"Smiley face"} />
                        </div>
                    </div>
                </Modal>
            }
            <ParticlesBg type="cobweb" bg={true} />
        </>
    )
}

export { AppUI };