import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {

    const[ pickupCoordinates, setPickupCoordinates ] = useState()
    const[ dropoffCoordinates, setDropoffCoordinates ] = useState()

    const getPickupCoordinates = () => {
        const pickup ="Santa Monica";

        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?' +
         new URLSearchParams({
             access_token: 'pk.eyJ1IjoiYW51c2hrYS0xMiIsImEiOiJja3c2Z3ppaDIyaWFjMm5udDN4eDJtcXg2In0.w1D57PJteFGbN862BpsASw',
             limit: 1

         })
        )
        .then(response => response.json())
        .then(data => {
            
            setPickupCoordinates(data.features[0].center)

        })
    }

    const getDropoffCoordinates = () => {

        const dropoff ="Los Angeles";

        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?' +
         new URLSearchParams({
             access_token: 'pk.eyJ1IjoiYW51c2hrYS0xMiIsImEiOiJja3c2Z3ppaDIyaWFjMm5udDN4eDJtcXg2In0.w1D57PJteFGbN862BpsASw',
             limit: 1

         })
        )
        .then(response => response.json())
        .then(data => {
            console.log("Dropoff")
            setDropoffCoordinates(data.features[0].center)
        })
    
    }

    useEffect(()=>{
     getPickupCoordinates();
     getDropoffCoordinates();

    }, [])

    return (
        <Wrapper>
         <Map
         pickupCoordinates={pickupCoordinates}
         dropoffCoordinates={dropoffCoordinates}
         />
         <RideContainer>
          Ride Selector Confirm Button
         </RideContainer>
        </Wrapper>
    )
}

export default Confirm


const RideContainer = tw.div`
flex-1
`
const Wrapper = tw.div`
flex h-screen flex-col
`
