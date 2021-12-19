import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";


export default {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;


const Template: ComponentStory<typeof AppWithRedux> = (args) =>  <Provider store={store}>
    <AppWithRedux/>
</Provider>
export const AppWithReduxStories = Template.bind({});
AppWithReduxStories.args = {
    task: {id: '1', isDone: true, title: 'JS'},
    todolistId: 'todolistId1'
}
