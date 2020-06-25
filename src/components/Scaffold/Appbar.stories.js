import React from "react";

import Appbar from "./Appbar";
import { withKnobs } from "@storybook/addon-knobs/react";


// attaches component to the story book
export default {
    component: Appbar,
    title: "Scaffold/Appbar",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

export const initialState = () => <Appbar />

