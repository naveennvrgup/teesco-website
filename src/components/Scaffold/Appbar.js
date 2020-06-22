import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, MenuIcon, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './SideDrawer.styles'
import Logo from "../../assets/imgs/logo-white.png";

import clsx from "clsx";

class Appbar extends Component {
    render() {
        const { classes } = this.props

        return (
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: true,
                })}
            >
                <Toolbar>
                    <img
                        className="imgBox"
                        src={Logo}
                        width="55px"
                        style={{ marginLeft: "-15px", marginRight: "22px" }}
                    />
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, true && classes.hide)}
                    >
                        <MenuIcon />
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