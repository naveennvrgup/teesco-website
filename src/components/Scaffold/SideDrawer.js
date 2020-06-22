import React, { Component } from "react";
import clsx from "clsx";
import { withStyles, theme } from "@material-ui/core/styles";
import styles from './SideDrawer.styles'

import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Typography,
  Card,
  CardContent,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemIcon,
} from "@material-ui/core";

import Menu from "@material-ui/core/Menu";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Grid from "@material-ui/core/Grid";
import person from "../../assets/imgs/person.png";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import "./Drawer.css";

import SideDrawerOptions from './SideDrawerOptions'



class SideDrawer extends Component {
  render() {
    const { classes } = this.props
    const { orgs, selectedOrg, menuItems } = this.props.stateData;

    
    return <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Grid container spacing={3} justify="center">
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item>
            <Typography align="center" variant="h5" style={{ marginTop: 0 }}>
              teesco
              </Typography>
          </Grid>
        </Grid>
        <IconButton onClick={this.handlerDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Card className="card">
          <CardContent className="center">
            <img src={person} alt="person image" className="centerImage" />
            <Typography
              variant="h6"
              style={{ textAlign: "center" }}
              className={classes.title}
              gutterBottom
            >
              E-Cell NITRR
            </Typography>

            <Typography
              style={{
                textAlign: "center",
                backgroundColor: "#7a7a7a",
                paddingLeft: "5px",
                paddingRight: "5px",
                color: "white",
                borderRadius: "5px",
              }}
              className={classes.pos}
            >
              Admin
            </Typography>
          </CardContent>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={this.handlerClick}
            className="menu"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={true}
            keepMounted
            open={false}
            onClose={this.handlerClose}
          >
            <Card className="menuCard">
              <CardContent>
                <Typography variant="h5">Switch Orgs</Typography>
                <List>
                  {[].map((el,i) => (
                    <ListItem key={i} button>
                      <ListItemText style={{ textAlign: "center" }}>
                        <a href="#">{el.name}</a>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
                <Button className="createBtn">Create or Join orgs</Button>
              </CardContent>
            </Card>
          </Menu>
        </Card>
      </List>

      <div style={{ margin: 10 }}>
        <div className="groupHeader">
          <Typography variant="h6">GROUPS</Typography>
          <IconButton onClick={null} className="groupAdd">
            <GroupAddIcon />
          </IconButton>
        </div>
        <SideDrawerOptions/>
        {/* <List>
          {[].map((group) => (
            <ListItem
              button
              className={group.active == "true" ? classes.activeGroup : null}
              id="groups"
            >
              <ListItemIcon>
                {group.active == "true" ? (
                  <LockOpenIcon
                    className={
                      group.active == "true"
                        ? classes.activeFlag
                        : classes.disabledGroup
                    }
                  />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={group.name} />
            </ListItem>
          ))}
        </List> */}

      </div>
    </Drawer>


  }
}


export default withStyles(styles)(SideDrawer)