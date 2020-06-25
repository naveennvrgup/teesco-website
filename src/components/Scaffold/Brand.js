import React, { Component, Fragment } from 'react'
import {
    Box,
    IconButton,
    Typography,
    Divider
} from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'



export default class Brand extends Component {
    render() {
        return (
            <Fragment>
                {/* this top bar to show the brand name
                {/* also allows to close the side drawer */}
                <Box display='flex' alignItems='center' justifyContent="center">
                    {/* this extra icon is to center the text */}
                    <IconButton disabled >
                        <ChevronLeft style={{ 'opacity': 0 }} />
                    </IconButton>
                    <Box flex={1} >
                        <Typography style={{ 'fontWeight': 'bold' }} align="center">
                            teesco
                            </Typography>
                    </Box>
                    <IconButton onClick={this.handlerDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </Box>
            </Fragment>
        )
    }
}
