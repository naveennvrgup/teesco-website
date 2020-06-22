import React, { Component } from "react";
import clsx from "clsx";
import { withStyles, theme } from "@material-ui/core/styles";
import styles from './SideDrawer.styles'

import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Typography,
  Chip,
  Card,
  Box,
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

import { flexbox } from '@material-ui/system'
import Menu from "@material-ui/core/Menu";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Grid from "@material-ui/core/Grid";
import person from "../../assets/imgs/person.png";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Apps } from '@material-ui/icons'
import "./Drawer.css";

import SideDrawerOptions from './SideDrawerOptions'
import SideDrawerCommonOptions from './SideDrawerCommonOptions'



class SideDrawer extends Component {
  render() {
    const { classes } = this.props
    const { org_name, user_role, profile_pic, permissions } = this.props.selectedOrg;


    return <Drawer
      variant="persistent"
      anchor="left"

      open={this.props.showDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >

      <Box style={{ 'minHeight': '100vh' }} container display='flex' flexDirection='column'>


        {/* this top bar to show the brand name */}
        {/* also allows to close the side drawer */}
        <Box display='flex' alignItems='center' justifyContent="center">
          {/* this extra icon is to center the text */}
          <IconButton disabled >
            <ChevronLeftIcon style={{ 'opacity': 0 }} />
          </IconButton>
          <Box flex={1} >
            <Typography style={{ 'fontWeight': 'bold' }} align="center">
              teesco
          </Typography>
          </Box>
          <IconButton onClick={this.handlerDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />


        {/* org and user role in the org  */}
        <Box
          display='flex'
          alignItems='flex-start'
        >
          <IconButton disabled>
            <Apps style={{ 'opacity': 0 }} />
          </IconButton>
          <Grid container style={{ 'margin': '15px 0px' }} direction='column' alignItems='center'>
            <img src={person} alt="person image" />
            <Typography variant="h6">
              E-Cell NITRR
            </Typography>
            <Chip label="Admin" />
          </Grid>
          <IconButton>
            <Apps />
          </IconButton>
        </Box>
        <Divider />



        {/* <Menu
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
              {[].map((el, i) => (
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
      </Menu> */}

        {/* showing different options to staff and non staff */}
        <SideDrawerOptions isStaff={permissions['Is Staff']['value']} />
        <Divider />

        {/* push the common controls to the bottom of the screen */}
        <Box flexGrow={1} />

        {/* the common options */}
        <Divider />
        <SideDrawerCommonOptions />


      </Box>
    </Drawer>


  }
}


export default withStyles(styles)(SideDrawer)