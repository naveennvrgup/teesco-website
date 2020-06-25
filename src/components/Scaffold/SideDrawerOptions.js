import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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


export class SideDrawerOptions extends Component {
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

const mapStateToProps = (state) => {
    const { scaffold } = state
    const { selectedOrgIndex, orgs } = scaffold

    return {
        isStaff: orgs[selectedOrgIndex]['permissions']['Is Staff']['value']
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerOptions)



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