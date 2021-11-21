import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'





export default function Home() {
  

  return (
   <Wrapper>
     <Map />
     <ActionItems>
       {/*Header*/}
       <Header>
         <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
          <Profile>
            <Name>Anushka Gupta</Name>
            <UserImage
            src="https://lh3.googleusercontent.com/a-/AOh14GiD9MBH2IcIdXX8uw40dBSdCkjbAbabGqJPsXaE=s96-c" />
          </Profile>
       </Header>

       



     </ActionItems>
   </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`

const ActionItems = tw.div`
flex-1

`
const Header = tw.div`
`

const UberLogo = tw.img`
h-28
`

const Profile = tw.div`
`

const Name = tw.div`
`

const UserImage = tw.img`
`