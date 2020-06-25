import React, { Component } from 'react'

import { Menu, Card, CardContent, List, ListItemText, ListItem } from '@material-ui/core'

export default class ChangeOrgMenu extends Component {
    render() {
        return (
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
            </Menu>
        )
    }
}
