import React from "react";
import styled from "styled-components";
import { FONT_HANKEN_GROTESK } from "@/common/constant";

const ButtonContainer = styled.button`
  position: relative;
  height: 48px;
  width: 131px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${FONT_HANKEN_GROTESK};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  background: linear-gradient(52.37deg, #34bf96 -5.7%, #138261 94.69%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 2px;
    margin: 0;
    background: linear-gradient(52.37deg, #34bf96 -5.7%, #138261 94.69%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
};

export default Button;
