import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const Header = () => (
  <AppBar position="absolute" color="default">
    <div style={{ background: '#ff6700', display: 'flex' }}>
      <div style={{ margin: '10px' }}>+1 407-966-3081</div>
      <div style={{ margin: '10px' }}>info@usatravels.com</div>
    </div>
    <div style={{ height: '50px' }}>
      <Toolbar>
        <img height="30px" src="http://usatravels.com/images/logo.png" />
      </Toolbar>
    </div>
  </AppBar>
)
