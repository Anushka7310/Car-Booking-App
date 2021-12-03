import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import  {carList}  from "../../public/data/carList.js";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/
            ${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}
            ?access_token=pk.eyJ1IjoiYW51c2hrYS0xMiIsImEiOiJja3c2Z3ppaDIyaWFjMm5udDN4eDJtcXg2In0.w1D57PJteFGbN862BpsASw`
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.code == "NoRoute")
        console.log(data.routes[0], data);
        setRideDuration(data.routes[0]?.duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.Service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)} </Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const CarDetails = tw.div`
flex-1`;

const Service = tw.div`
font-medium
`;

const Time = tw.div`
text-xs text-blue-500`;

const Price = tw.div`
text-sm
`;

const CarImage = tw.img`
h-14 mr-4
`;

const Car = tw.div`
flex p-4 items-center
`;

const Title = tw.div`
text-gray-500 text-center text-xs py-2
`;

const CarList = tw.div`
overflow-y-scroll
`;

const Wrapper = tw.div`
flex-1 flex-1 overflow-y-scroll flex flex-col
`;
