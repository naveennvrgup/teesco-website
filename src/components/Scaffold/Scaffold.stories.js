import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import Scaffold from "./Scaffold";
import { Provider } from 'react-redux'
import { store } from '../../utils/CreateStore'


// attaches component to the story book
export default {
    component: Scaffold,
    title: "Scaffold",
    decorators: [
        withKnobs,
        story => <Provider store={store}>{story()}</Provider>
    ],
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};


export const initialState = () => (
    <Scaffold />
);
