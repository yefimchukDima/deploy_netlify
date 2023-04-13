import React from 'react'
import styled from "styled-components";

const ButtonContainer = styled.button`
 


  border: double 2px ;
  border-radius: 8px;
  background-image: linear-gradient(52.37deg, #34BF96 -5.7%, #138261 94.69%) 1;
  
  background-origin: border-box;
  background-clip: content-box, border-box;
  height: 48px;
  width: 131px;


`;
interface ButtonProps {
    label: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
};

export default Button;