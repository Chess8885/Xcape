import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Testimonials = () => {
    return (
        <div>
            <TestimonialsContainer>

        <TopLine>
Testimonials
        </TopLine>
<Description>
What People are Saying
</Description>


<ContentWrapper>
    <ColumnOne>
    <Testimonial>
        <IoMdCheckmarkCircleOutline />
        <h3></h3>
    </Testimonial>
    </ColumnOne>
</ContentWrapper>
            </TestimonialsContainer>
        </div>
    )
}

export default Testimonials


const TestimonialsContainer = styled.div``
const TopLine = styled.div``
const Description = styled.div``
const IoMdCheckmarkCircleOutline = styled.div``
const Testimonial = styled.div``
const ColumnOne = styled.div``
const ContentWrapper = styled.div``