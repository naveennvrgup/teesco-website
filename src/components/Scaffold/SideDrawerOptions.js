import React, { Component } from 'react'
import {
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import {
    Dashboard,
    Business,
    TrendingUp,
    LocalActivity,
    QuestionAnswer,

} from '@material-ui/icons'


export default class SideDrawerOptions extends Component {
    render() {
        let items = this.props.isStaff ? staffOptions : nonStaffOptions
        
        items = items.map((item, key) => (
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

export const staffOptions = [
    {
        label: "Dashboard",
        icon: <Dashboard />,
    },
    {
        label: "Org Profile",
        icon: <Business />,
    },
    {
        label: "Statistics",
        icon: <TrendingUp />,
    },
    {
        label: "Leaderboard",
        icon: <LocalActivity />,
    },
    {
        label: "Queries",
        icon: <QuestionAnswer />,
    },
]

export const nonStaffOptions = [
    {
        label: "Dashboard",
        icon: <Dashboard />,
    },
    {
        label: "Org Profile",
        icon: <Business />,
    },
    {
        label: "Leaderboard",
        icon: <LocalActivity />,
    },
]