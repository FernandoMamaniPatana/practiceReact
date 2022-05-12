import { useState } from 'react';
import { AppUI } from './AppUI';
const MOCK = [
  {
    id: 1,
    text: 'First todo',
    completed: false
  },
  {
    id: 2,
    text: 'Second todo',
    completed: false
  },
  {
    id: 3,
    text: 'Third todo',
    completed: false
  },
  {
    id: 4,
    text: 'four todo',
    completed: false
  },
  {
    id: 5,
    text: 'five todo',
    completed: true
  },
  {
    id: 6,
    text: 'six todo',
    completed: true
  },
  {
    id: 7,
    text: 'seven todo',
    completed: true
  },
];

function App() {
    // localStorage.TODOS_V1 = []
  const [tasks, setTasks] = useState(MOCK);
  const [filteredTasks, setFilteredTasks] = useState(MOCK);// Error with use MOCK en initState
  const newTasks = tasks;
  const onClickIconLeft = ({ index, todo }) => {
    newTasks[index].completed = !todo.completed;
    setTasks([...newTasks]);// run without setFilteredTasks([...newTasks]): Why???
  }
  function onClickIconRight({ index }) {
    const newTasks = tasks;
    newTasks.splice(index, 1);
    setTasks([...newTasks]);
    setFilteredTasks([...newTasks])
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
  function onClickTodoAdd(params) {
    const newTasks = tasks.concat({
      id: tasks.length + 1,
      text: params,
      completed: false
    })
    setTasks(newTasks)
    setFilteredTasks(newTasks)
  }
  return (
    <AppUI
      onClickTodoAdd={onClickTodoAdd}
      tasks={tasks}
      searchValue={searchValue}
      onChangeSearch={onChangeSearch}
      filteredTasks={filteredTasks}
      onClickIconLeft={onClickIconLeft}
      onClickIconRight={onClickIconRight}
    />
  );
}

export default App;
