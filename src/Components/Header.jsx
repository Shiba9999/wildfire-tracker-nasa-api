import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from "@iconify/icons-mdi/fire-alert"

function Header() {
    return (
        <header className="header">
            <h1> <Icon  icon={locationIcon} ></Icon> Powered by Nasa</h1>
            
        </header>
    )
}

export default Header
