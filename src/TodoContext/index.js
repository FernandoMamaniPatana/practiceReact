import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocaleStorage";
const TODO_LOCAL_STORAGE = 'TODOS_V1';

const TodoContext = createContext();

function TodoProvider(props) {
    const [value, saveValue, dataStatus] = useLocalStorage(null, TODO_LOCAL_STORAGE);
    const [filteredTasks, setFilteredTasks] = useState(null);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const tasks = value;
    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks])
    const onClickIconLeft = ({ index, todo }) => {
        const newTasks = tasks;
        newTasks[index].completed = !todo.completed;
        saveValue([...newTasks]);
    }
    function onClickIconRight({ index }) {
        const newTasks = tasks;
        newTasks.splice(index, 1);
        saveValue([...newTasks]);
    }
    const [searchValue, setSearchValue] = useState('');
    const onChangeSearch = (e) => {
        if (e.target.value.length > 0) {
            const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(e.target.value));
            setFilteredTasks([...filteredTasks]);
        } else {
            setFilteredTasks([...tasks]);
        }
        setSearchValue(e.target.value);
    }

    function changeStatusModal() {
        setIsVisibleModal(isVisible => !isVisible);
    }

    function onClickTodoAdd(params = "") {
        if (params.length > 0) {
            const newTasks = tasks.concat({
                id: tasks.length + 1,
                text: params,
                completed: false
            })
            saveValue(newTasks);
            changeStatusModal();
        }
    }

    return (
        <TodoContext.Provider
            value={{
                dataStatus,
                onClickTodoAdd,
                tasks,
                searchValue,
                onChangeSearch,
                filteredTasks,
                onClickIconLeft,
                onClickIconRight,
                isVisibleModal,
                changeStatusModal,
            }}
            children={props.children}
        />
    );
}

export { TodoContext, TodoProvider }