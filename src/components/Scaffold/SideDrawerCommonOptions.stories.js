import React from "react";

import SideDrawerCommonOptions from "./SideDrawerCommonOptions";
import { withKnobs } from "@storybook/addon-knobs/react";


// attaches component to the story book
export default {
    component: SideDrawerCommonOptions,
    title: "Scaffold/Common Options",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

export const initialState = () => (
    <SideDrawerCommonOptions />
);
