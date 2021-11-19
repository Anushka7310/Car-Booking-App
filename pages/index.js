import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiYW51c2hrYS0xMiIsImEiOiJja3c2Z3ppaDIyaWFjMm5udDN4eDJtcXg2In0.w1D57PJteFGbN862BpsASw';


export default function Home() {
  useEffect(() => {
    console.log('hello')

  },[])
  return (
   <Wrapper>
     <Map>Map Test</Map>
     <ActionItems>Start</ActionItems>
   </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`
const Map = tw.div`
bg-red-500 flex-1
`
const ActionItems = tw.div`
flex-1

`
