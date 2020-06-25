import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    List,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { People, Add } from '@material-ui/icons'


export class Groups extends Component {
    render() {
        let groups = []

        // loading state
        if (this.props.groupsLoading) {
            for (let i = 0; i < 5; i++) {
                groups.push(
                    <ListItem button key={i}>
                        <ListItemIcon>
                            <Skeleton variant='rect' height='35px' width='35px' />
                        </ListItemIcon>
                        <ListItemText>
                            <Skeleton variant='text' />
                        </ListItemText>
                    </ListItem>
                )
            }
        } else {
            groups = this.props.groups.map((group, i) => {
                // the first letters of the words in group name 
                //  will be used as avatar of the group
                const avatarText = group.name.split(' ').slice(0, 2).map(ele => ele[0]).join('').toUpperCase()

                return (
                    <ListItem button key={i}  >
                        <ListItemIcon>
                            <Avatar
                                variant='rounded'
                                style={{ width: "35px", height: "35px", background: "orange" }}>
                                {avatarText}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary={group.name} />
                    </ListItem >
                )
            })
        }


        return (
            <Fragment>
                <List>
                    <ListItem key={-1}  >
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary={"Groups"}/>
                        <IconButton>
                            <Add />
                        </IconButton>
                    </ListItem >
                    {groups}
                </List>
            </Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    const { groupsLoading, groups } = state.scaffold;
    return { groupsLoading, groups }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Groups)
