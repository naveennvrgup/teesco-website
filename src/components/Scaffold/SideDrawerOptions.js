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


export default class SideDrawerOptionsStaff extends Component {
    render() {
        if(this.props.isStaff){
            
        }

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

const staffOptions = [
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

const nonStaffOptions = [
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