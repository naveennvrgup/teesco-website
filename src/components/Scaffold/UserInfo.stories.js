import React from "react";

import { UserInfo } from "./UserInfo";
import { withKnobs } from "@storybook/addon-knobs/react";


// attaches component to the story book
export default {
    component: UserInfo,
    title: "Scaffold/UserInfo",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

const initialStateData = {
    orgName: "Apache Foundation",
    orgRole: "Maintainer",
    orgLogo: "https://media-exp1.licdn.com/dms/image/C4D0BAQHJvZ24dgZcHg/company-logo_200_200/0?e=1600905600&v=beta&t=83GWsHOVb9B5c9YFYmg9zNe5aHUowcRsvM5aocKgRoc",
}

export const initialState = () => <UserInfo {...initialStateData} />

