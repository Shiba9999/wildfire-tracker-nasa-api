import React from 'react'

function Locationinfo({info}) {
    return (
        <div className="location-info">
            <h2>event location info</h2>
            <ul>
            <li>ID:<strong>{info.id}</strong></li>
            <li>TITLE:<strong>{info.title}</strong></li>
            

            </ul>
            
        </div>
    )
}

export default Locationinfo
