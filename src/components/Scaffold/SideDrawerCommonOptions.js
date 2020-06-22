import React, { Component } from 'react'
import {
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import {
    Help,
    Settings,
    School,


} from '@material-ui/icons'

export default class SideDrawerCommonOptions extends Component {
    render() {
        const items = commonOptions.map((item, key) => (
            <ListItem key={key} button id="groups">
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItem>
        ))

        return <List>{items}</List>
    }
}

export const commonOptions = [
    {
        label: "Certificates",
        icon: <School />,
    },
    {
        label: "Settings",
        icon: <Settings />,
    },
    {
        label: "Help",
        icon: <Help />,
    },
]