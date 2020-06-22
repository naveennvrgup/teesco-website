import React from "react";
import ecell from "../../assets/imgs/logo.png";

import PersistentDrawerLeft from "./SideDrawer";
import { withKnobs, object } from "@storybook/addon-knobs/react";

// attaches component to the story book
export default {
  component: PersistentDrawerLeft,
  title: "Side Drawer",
  decorators: [withKnobs], // use to display state in storybook
  excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

const initialStateData = {
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
};


export const initialState = () => (
  <PersistentDrawerLeft stateData={object("state", initialStateData)} />
);
