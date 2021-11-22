import React from 'react'
import tw from 'tailwind-styled-components'

const search = () => {
    return (
        <Wrapper>
            <ButtonContainer>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"></BackButton>
            </ButtonContainer>
            <InputContainer> 
            <FormToIcons>
                <Circle src='data:image/png;base64,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'></Circle>
                <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'></Line>
                <Square src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEUAAACgoKCjo6Oqqqqzs7O/v7+xsbEEBAScnJzKysq6urqoqKj8/Pzv7+/l5eXV1dXd3d0SudnTAAABt0lEQVR4nO3da2vCMBhA4cRe0ss2/f+/dnUOQWEo0xDO2/PoByuY5BC/FEqbPj6/jsd5HoZh6ft+7C7Ww638f4eH1u4Z/TOW4c5ySn2KbdoKSynX49+P5ed9/fKlKcqjn782/O1Id5NtRzmNbxv/j0mbKvULm8upa72EynJaW/+RKtvDHlpIZyGfhXwW8u2hcG29hMpyOrReQmUW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXx5e8V2Lox+beIe9jA2C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5NvDFUMW0lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyHfuTD6vU3i72H858xYSGchn4V8FvJZyGchn4V8FvJZyGchn4V8FvJZyGchn4V8FvJZyGchX0596yVUZiGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyFfTmPrJVS2hz1cwt8XY9hBYWwW8lnIZyGfhXwW8lnIF/3colwK4yZuadN2BhzblE5TDmya5m/hRgf3KPKm8gAAAABJRU5ErkJggg=="></Square>
            </FormToIcons>
            <InputBoxes>
            <Input placeholder="Enter pickup location" />
            <Input  placeholder="Where to?"/>
            </InputBoxes>
            <PlusIcon src="https://img.icons8.com/50/000000/plus-math.png" />


            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
              Saved Places
            </SavedPlaces>
            <ConfirmLocations>
                Confirm Location
            </ConfirmLocations>

        </Wrapper>
    )        
}

export default search

const Wrapper = tw.div`
bg-gray-200 h-screen

`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12
`
const FormToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10`

const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1
` 

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none 
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-100 rounded-full ml-3
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4  py-2
`
const ConfirmLocations = tw.div`
flex bg-black px-5 py-4 text-white m-2 text-xl items-center justify-center 
`

