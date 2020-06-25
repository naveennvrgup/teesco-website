import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    Box,
    IconButton,
    Grid,
    Typography,
    Chip,
} from '@material-ui/core'
import { Apps } from '@material-ui/icons'


export class UserInfo extends Component {
    render() {
        let logo = <img src={this.props.orgLogo} width='60px' height='60px' />

        if (this.props.orgLogo === null) {
            logo = <div>
                <div style={{
                    width: "60px",
                    height: "60px",
                    background: 'grey',
                    borderRadius: '50%',
                }} />
            </div>
        }

        return (
            <Fragment>
                {/* org and user role in the org  */}
                <Box
                    display='flex'
                    alignItems='flex-start'
                >
                    <IconButton disabled>
                        <Apps style={{ 'opacity': 0 }} />
                    </IconButton>
                    <Grid container style={{ 'margin': '15px 0px' }} direction='column' alignItems='center'>
                        <Grid item>
                            {logo}
                        </Grid>
                        <Typography variant="h6">
                            {this.props.orgName}
                        </Typography>
                        <Chip label={this.props.orgRole} />
                    </Grid>
                    <IconButton>
                        <Apps />
                    </IconButton>
                </Box>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { scaffold } = state;
    const { selectedOrgIndex, orgs } = scaffold
    const selectedOrg = orgs[selectedOrgIndex]

    return {
        orgName: selectedOrg['org_name'],
        orgRole: selectedOrg['user_role'],
        orgLogo: selectedOrg['profile_pic'],
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)

