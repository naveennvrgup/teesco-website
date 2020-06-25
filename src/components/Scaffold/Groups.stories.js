import React from "react";

import { Groups } from "./Groups";
import { withKnobs, object, boolean } from "@storybook/addon-knobs/react";


// attaches component to the story book
export default {
    component: Groups,
    title: "Scaffold/Groups",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};


const groupsFetchedData = {
    groupsLoading: false,
    groups: [
        {
            "id": 1,
            "name": "Admin",
            "memberCount": 1
        },
        {
            "id": 2,
            "name": "Volunteer",
            "memberCount": 3
        },
        {
            "id": 3,
            "name": "Head Coordinators",
            "memberCount": 1
        },
        {
            "id": 4,
            "name": "Managers",
            "memberCount": 1
        }
    ]
}

export const loadingState = () => <Groups groupsLoading={boolean('groupsLoading', true)} />
export const groupsFetchedState = () => <Groups
    groupsLoading={boolean('groupsLoading', groupsFetchedData.groupsLoading)}
    groups={object('groups', groupsFetchedData.groups)} />
