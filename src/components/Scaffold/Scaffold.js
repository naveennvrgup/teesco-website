import React, { Component } from 'react'

import Appbar from './Appbar'
import SideDrawer from './SideDrawer'

export default class Scaffold extends Component {
    render() {
        return (
            <div>
                {/* <Appbar /> */}
                <SideDrawer />
            </div>
        )
    }
}
