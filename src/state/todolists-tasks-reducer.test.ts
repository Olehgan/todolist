import {TasksStateType, TodolistType} from "../App";
import {AddTodolistAC, todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {}; // создаем стартовое значение для наших тасок и говорим ,что это ассоциативный массив,пустой обьект
    const startTodolistsState: Array<TodolistType> = []; // стартовое состояние для тодулистов

    const action = AddTodolistAC("new todolist"); // вызываем экшионкркриетор(АС) и передаем в него title,там рождается обьек с генирированным id, соответствующий type, и title

    const endTasksState = tasksReducer(startTasksState, action) //
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
    expect(idFromTodolists).toBe(idFromTasks);

});



