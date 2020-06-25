import React, { Component } from 'react'

import styles from './SideDrawer.styles'
import { withStyles } from '@material-ui/core/styles'
import {
    Drawer,
    Box,
    Divider,
} from '@material-ui/core'


import Appbar from './Appbar'
import Brand from './Brand'
import UserInfo from './UserInfo'
import Groups from './Groups'
import SideDrawerOptions from './SideDrawerOptions'
import SideDrawerCommonOptions from './SideDrawerCommonOptions'


class Scaffold extends Component {
    render() {
        const { classes } = this.props

        return (
            <div>
                <Drawer
                    variant="persistent"
                    anchor='left'
                    open={true}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Box style={{ 'minHeight': '100vh' }} display='flex' flexDirection='column'>
                        <Brand />
                        <Divider />
                        <UserInfo />
                        <Divider />
                        <SideDrawerOptions />
                        <Divider />
                        <Groups />
                        <Divider />
                        <Box flex={1} />
                        <Divider />
                        <SideDrawerCommonOptions />
                    </Box>
                </Drawer>
                <Appbar />
            </div>
        )
    }
}

export default withStyles(styles)(Scaffold)