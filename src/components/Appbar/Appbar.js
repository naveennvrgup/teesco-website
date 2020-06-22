import React, { Component } from 'react'
import { AppBar } from '@material-ui/core'

export default class Appbar extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
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
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
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
