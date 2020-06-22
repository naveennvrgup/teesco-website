import React from "react";

import SideDrawerOptions from "./SideDrawerOptions";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";

// attaches component to the story book
export default {
    component: SideDrawerOptions,
    title: "Side Drawer Options",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};


const initialStateData = {
    isStaff: true
}

export const initialState = () => <SideDrawerOptions isStaff={boolean('isStaff',false)} />
