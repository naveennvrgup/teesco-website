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
  Toolbar,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemIcon,
} from "@material-ui/core";

import Menu from "@material-ui/core/Menu";

import MoreVertIcon from "@material-ui/icons/MoreVert";


import MenuIcon from "@material-ui/icons/Menu";
import LabelIcon from "@material-ui/icons/Label";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/imgs/logo-white.png";
import LogoDark from "../../assets/imgs/logo.png";
import person from "../../assets/imgs/person.png";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import StarIcon from "@material-ui/icons/Star";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import "./Drawer.css";




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
              {selectedOrg.info.name}
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
              {selectedOrg.info.role}
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
                  {orgs.map((el,i) => (
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
      <List style={{ marginLeft: "10px" }}>
        {menuItems.top.map((item) => (
          <ListItem button id="groups">
            <ListItemIcon>
              {/* <StarIcon style={{ color: "#3f51b5" }} /> */}
              {item == "Dashboard" ? (
                <Avatar
                  className={classes.orange}
                  style={{ width: "28px", height: "28px" }}
                >
                  D
                </Avatar>
              ) : item == "Org Profile" ? (
                <Avatar
                  className={classes.orange}
                  style={{ width: "28px", height: "28px" }}
                >
                  O
                </Avatar>
              ) : item == "Statistics" ? (
                <Avatar
                  className={classes.orange}
                  style={{ width: "28px", height: "28px" }}
                >
                  S
                </Avatar>
              ) : item == "Leaderboard" ? (
                <Avatar
                  className={classes.orange}
                  style={{ width: "28px", height: "28px" }}
                >
                  L
                </Avatar>
              ) : item == "Queries" ? (
                <Avatar
                  className={classes.orange}
                  style={{ width: "28px", height: "28px" }}
                >
                  Q
                </Avatar>
              ) : null}
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      <div style={{ margin: 10 }}>
        <div className="groupHeader">
          <Typography variant="h6">GROUPS</Typography>
          <IconButton onClick={null} className="groupAdd">
            <GroupAddIcon />
          </IconButton>
        </div>
        <List>
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
        </List>
        <List style={{ marginLeft: "0px" }}>
          {menuItems.bottom.map((item) => (
            <ListItem button id="groups">
              <ListItemIcon>
                {item == "Certificates" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    C
                  </Avatar>
                ) : item == "Settings" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    S
                  </Avatar>
                ) : item == "Help" ? (
                  <Avatar
                    className={classes.orange}
                    style={{ width: "28px", height: "28px" }}
                  >
                    H
                  </Avatar>
                ) : null}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>


  }
}


export default withStyles(styles)(SideDrawer)