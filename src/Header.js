import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

const Header = () => {
 return (
  <div className="header">
    <IconButton>
      <PersonIcon fontSize="large" className="header__icon" />
    </IconButton>
    <img className="header__logo" src="1090192.png" alt="header" />
    <IconButton>
      <ForumIcon fontSize="large" className="header__icon" />
    </IconButton>
  </div>
 )
}

export default Header
