import React from "react";

import { SideDrawerOptions } from "./SideDrawerOptions";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";

// attaches component to the story book
export default {
    component: SideDrawerOptions,
    title: "Scaffold/Options",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};


export const staffOptions = () => <SideDrawerOptions isStaff={boolean('isStaff', false)} />
export const nonStaffOptions = () => <SideDrawerOptions isStaff={boolean('isStaff', true)} />
