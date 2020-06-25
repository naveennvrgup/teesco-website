import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './SideDrawer.styles'

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'

class Appbar extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <IconButton color="inherit" >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Appbar)