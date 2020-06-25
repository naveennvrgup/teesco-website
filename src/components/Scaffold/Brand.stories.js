import React from "react";

import Brand from "./Brand";
import { withKnobs } from "@storybook/addon-knobs/react";


// attaches component to the story book
export default {
    component: Brand,
    title: "Scaffold/Brand",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

export const initialState = () => <Brand />

