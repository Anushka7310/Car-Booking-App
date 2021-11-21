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
                <Circle src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"></Circle>
                <Line src='https://img.icons8.com/ios/50/'></Line>
            </FormToIcons>


            </InputContainer>


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
w-10 flex flex-col
`

const InputContainer = tw.div`
bg-white
`
const Circle = tw.img`
`
const Line = tw.img``