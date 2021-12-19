import React from "react";
import {ComponentStory, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";


export default {
    title: 'TODOLISTS/Task',
    component: Task,
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
    }


} as Meta


const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;
export const TaskIsDoneStories = Template.bind({});
TaskIsDoneStories.args = {
    task: {id: '1', isDone: true, title: 'JS'},
    todolistId: 'todolistId1'
}
export const TaskNotDoneStories = Template.bind({});
TaskNotDoneStories.args = {
    task: {id: '1', isDone: false, title: 'JS'},
    todolistId: 'todolistId1'
}
