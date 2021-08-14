import GoogleMapReact from 'google-map-react'
import React, { useState } from 'react'
import Locationmarker from './Locationmarker'
import Locationinfo from './Locationinfo'

function Map({ eventData, center,zoom}) {
    const [location,setLocation]=useState(null);
    const markers=eventData.map(ev=>{
        if(ev.categories[0].id===8){
            return <Locationmarker  lat={ev.geometries[0].coordinates[1]}  lng={ev.geometries[0].coordinates[0]}
            onClick={()=>{
                setLocation({id:ev.id,title:ev.title})
            }}
           
           
            />
        }
        return null
    })
    return (
        <div className="map">
           
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyABq7Pfu0SG3BbDpedd5KdWeLVIi-W4ULI"}}
              defaultCenter={center}
              defaultZoom={zoom}
            >
               {markers}


            </GoogleMapReact>
            {location && <Locationinfo info={location} />}
              
            
            

            
        </div>
    )
}
Map.defaultProps={
    center:{
        lat:42.3265,
        lng:-122.8756
    },
    zoom:6
}

export default Map
