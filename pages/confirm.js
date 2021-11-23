import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (dropoff) => {
    const pickup = "Santa Monica";

    fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?" +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW51c2hrYS0xMiIsImEiOiJja3c2Z3ppaDIyaWFjMm5udDN4eDJtcXg2In0.w1D57PJteFGbN862BpsASw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
   

    fetch(
      'https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?' +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW51c2hrYS0xMiIsImEiOiJja3c2Z3ppaDIyaWFjMm5udDN4eDJtcXg2In0.w1D57PJteFGbN862BpsASw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Dropoff");
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>Ride Selector Confirm Button</RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const RideContainer = tw.div`
flex-1
`;
const Wrapper = tw.div`
flex h-screen flex-col
`;
