import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from '../Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "All" | "Active" | "Completed";
type  todoListsType = { id: string, title: string, filter: FilterValuesType }
type TasksType = { [key: string]: Array<TaskType> }


function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'All'},
        {id: todolistID2, title: 'What to buy', filter: 'All'},

    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {

        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t=>t.id!==id) } )

        // let currenTask = tasks[todolistID];
        // tasks[todolistID] = currenTask.filter(t => t.id !== id);
        // setTasks({...tasks})

        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistID: string, title: string) {
        setTasks({...tasks,[todolistID] : [...tasks[todolistID], {id: v1(), title: title, isDone: false}]})

        // setTasks({...tasks,[todolistID] : [ {id: v1(), title: "GraphQL2", isDone: false},...tasks[todolistID]]})


        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus( todolistID: string, taskId: string, isDone: boolean) {

        setTasks({...tasks,[todolistID] : tasks[todolistID].map(m=>m.id ===taskId ? {...m,isDone:isDone}: m)})
        // // let task = tasks.find(t => t.id === taskId);
        // // if (task) {
        // //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }

    function changeFilter(    todolistID: string,  value: FilterValuesType) {
        setTodolists(todolists.map(m=>m.id===todolistID ? {...m,filter:value}: m))
        // setFilter(value);
    }


    return (
        <div className="App">
            {todolists.map(m => {

                let tasksForTodolist = tasks[m.id];

                if (m.filter === "Active") {
                    tasksForTodolist = tasks[m.id].filter(t => !t.isDone);
                }
                if (m.filter === "Completed") {
                    tasksForTodolist = tasks[m.id].filter(t => t.isDone);
                }


                return (

                    <TodoList
                        todolistID={m.id}
                        key={m.id}
                        title={m.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={m.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
