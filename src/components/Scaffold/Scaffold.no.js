import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import Scaffold from "./Scaffold";


// attaches component to the story book
export default {
    component: Scaffold,
    title: "Scaffold",
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};


const initialStateData = {
    selectedOrgIndex: 0,
    orgs: [
        {
            "id": 1,
            "org_name": "E Cell",
            "user_role": "Admin",
            "profile_pic": "null",
            "route_slug": "0-e-cell",
            "tagline": "Leader Beyond Borders",
            "permissions": {
                "Is Admin": {
                    "value": true,
                    "perm_int": 1
                },
                "Is Staff": {
                    "value": true,
                    "perm_int": 4
                },
                "Can create tasks": {
                    "value": true,
                    "perm_int": 3
                },
                "Can create groups": {
                    "value": true,
                    "perm_int": 6
                },
                "Can reply to queries": {
                    "value": true,
                    "perm_int": 5
                }
            }
        },
        {
            "id": 2,
            "org_name": "NITRR",
            "user_role": "Volunteer",
            "profile_pic": "null",
            "route_slug": "2-nitrr",
            "tagline": "Work is worship",
            "permissions": {
                "Is Admin": {
                    "value": true,
                    "perm_int": 1
                },
                "Is Staff": {
                    "value": true,
                    "perm_int": 4
                },
                "Can create tasks": {
                    "value": true,
                    "perm_int": 3
                },
                "Can create groups": {
                    "value": true,
                    "perm_int": 6
                },
                "Can reply to queries": {
                    "value": true,
                    "perm_int": 5
                }
            }
        }
    ]
};


export const initialState = () => (
    <Scaffold stateData={object("state", initialStateData)} />
);
