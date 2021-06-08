import React from 'react'
import  Styled from 'styled-components'
import { device }from '../media/device'

export default function heading() {

  

    const Heading = Styled.h2`
    font-size: 5em;
    text-align: center;
    @media ${device.mobileL} { 
        font-size: 3em;

      }
    @media ${device.mobileM} { 
        font-size: 2.5em;

      }
    @media ${device.mobileS} { 
        font-size: 2em;

      }
    @media ${device.laptopL} { 
        font-size: 5em;

      }
    @media ${device.laptop} { 
        font-size: 5em;

      }
    @media ${device.tablet} { 
        font-size: 5em;

      }
      
      
`;
    return (
        <div>
      <Heading>We're opening soon!</Heading>
    
            
        </div>
    )
}
