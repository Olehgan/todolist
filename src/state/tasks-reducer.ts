import {TasksStateType} from '../App';
import {AddTodolistActionType, RemoveTodolistActionType, SetTodosTypeAC} from './todolists-reducer';
import {TaskStatuses, TaskType, todolistsAPI} from '../api/todolists-api'
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK',
    task: TaskType
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    todolistId: string
    taskId: string
    status: TaskStatuses
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    todolistId: string
    taskId: string
    title: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodosTypeAC
    | FetchTaskType

const initialState: TasksStateType = {
    // 'todoId1': [],
    // 'todoId2': [],
    // 'todoId3': [],
    /*"todolistId1": [
        { id: "1", title: "CSS", status: TaskStatuses.New, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "2", title: "JS", status: TaskStatuses.Completed, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "3", title: "React", status: TaskStatuses.New, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
    ],
    "todolistId2": [
        { id: "1", title: "bread", status: TaskStatuses.New, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "2", title: "milk", status: TaskStatuses.Completed, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "3", title: "tea", status: TaskStatuses.New, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
    ]*/

}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {

        case  'SET-TASKS':

            let stateCopy = {...state}
            stateCopy [action.todoId] = action.tasks
            return stateCopy


        case 'SET-TODOS':
            let copyState = {...state}
            action.todos.forEach(tl => {
                copyState[tl.id] = []
            })
            return copyState

        case 'REMOVE-TASK': {
            debugger
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId];
            const newTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            const stateCopy = {...state}
            // const newTask: TaskType = {
            //     id: v1(),
            //     title: action.title,
            //     status: TaskStatuses.New,
            //     todoListId: action.todolistId, description: '',
            //     startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low
            // }
            const tasks = stateCopy[action.task.todoListId];
            const newTasks = [action.task, ...tasks];
            stateCopy[action.task.todoListId] = newTasks;
            return stateCopy;
        }
        case 'CHANGE-TASK-STATUS': {
            let todolistTasks = state[action.todolistId];
            let newTasksArray = todolistTasks
                .map(t => t.id === action.taskId ? {...t, status: action.status} : t);

            state[action.todolistId] = newTasksArray;
            return ({...state});
        }
        case 'CHANGE-TASK-TITLE': {
            let todolistTasks = state[action.todolistId];
            // найдём нужную таску:
            let newTasksArray = todolistTasks
                .map(t => t.id === action.taskId ? {...t, title: action.title} : t);

            state[action.todolistId] = newTasksArray;
            return ({...state});
        }
        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todolistId]: []
            }
        }
        case 'REMOVE-TODOLIST': {

            const copyState = {...state};
            delete copyState[action.id];
            return copyState;
        }
        default:
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}
export const addTaskAC = (task: TaskType): AddTaskActionType => {
    return {type: 'ADD-TASK', task}
}
export const changeTaskStatusAC = (taskId: string, status: TaskStatuses, todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', status, todolistId, taskId}
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', title, todolistId, taskId}
}


export type FetchTaskType = ReturnType<typeof fetchTaskAC>
export const fetchTaskAC = (todoId: string, tasks: Array<TaskType>) => {
    return {
        type: 'SET-TASKS',
        todoId,
        tasks
    } as const
}


export const fetchTaskTC = (todolistId: string) => {

    return (dispatch: Dispatch) => {
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                let tasks = res.data.items
                dispatch(fetchTaskAC(todolistId, tasks))
            })
    }
}

export const removeTaskTC = (todoId: string, taskId: string) => {
    debugger
    return (dispatch: Dispatch) => {
        todolistsAPI.deleteTask(todoId, taskId)

            .then((res) => {
                debugger
                dispatch(removeTaskAC(taskId, todoId))
            })
    }
}
export const addTaskTC = (todoId: string, title: string) => {
    return (dispatch: Dispatch) => {
        todolistsAPI.createTask(todoId, title)
            .then((res) => {
                let task = res.data.data.item
                dispatch(addTaskAC(task))
            })
    }
}
export const updateTasksStatusTC = (todoId: string, taskId: string, status: TaskStatuses) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState();
    debugger
    const allAppTasks = state.tasks;
    const tasksForClickedTodo = allAppTasks[todoId]
    const currentTask = tasksForClickedTodo.find(t => {
        return t.id === taskId
    })
    // const updatedTask = {...currentTask, status} as UpdateTaskModelType
    if (currentTask) {
        let model = {
            title: currentTask.title,
            status,
            description:currentTask.description,
            deadline:currentTask.deadline,
            startDate: currentTask.startDate,
            priority:currentTask.priority


        }
        todolistsAPI.updateTask(todoId, taskId, model)
        const action = changeTaskStatusAC(taskId, status, todoId);
        dispatch(action);
    }


}
