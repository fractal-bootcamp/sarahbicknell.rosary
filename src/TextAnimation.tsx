// I GOT THIS FROM A GUY ON STACKOVERFLOW 

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define the Section styled component
const Section = styled.section`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  animation: ${fadeIn} 2s ease-out;
`;

// Define the TextStyle styled component
const TextStyle = styled.span`
  color: black;
  font-size: 2em;
  line-height: 1.3;
`;

// Define the TextAnimation component
export const TextAnimation = ({ text }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Change the key to re-trigger the animation whenever text changes
    setKey((prevKey) => prevKey + 1);
  }, [text]);

  // Split the text into characters and map them to styled components
  const letters = text.split('').map((letter, index) => (
    <TextStyle key={index}>
      {letter === ' ' ? <>&nbsp;</> : letter}
    </TextStyle>
  ));

  return <Section key={key}>{letters}</Section>;
};

