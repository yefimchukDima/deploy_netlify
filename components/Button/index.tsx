import React from "react";
import styled from "styled-components";
import { FONT_HANKEN_GROTESK } from "@/common/constant";

const ButtonContainer = styled.button<{
  color?: string;
  style?: string;
  width?: string;
}>`
  position: relative;
  height: 48px;
  width: ${(props) => (props.width ? "100%" : " 131px;")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${FONT_HANKEN_GROTESK};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  background: linear-gradient(
    ${(props) =>
      props.style ? props.style : "52.37deg, #34bf96 -5.7%, #138261 94.69%"}
  );
  border-radius: 8px;
  color: white;
  -webkit-background-clip: ${(props) => (props.color ? "initial" : "text")};
  -webkit-text-fill-color: ${(props) =>
    props.color ? props.color : "transparent"};
  z-index: 9999;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 2px;
    margin: 0;

    background: linear-gradient(
      ${(props) =>
        props.style ? props.style : "52.37deg, #34bf96 -5.7%, #138261 94.69%"}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: string;
  style?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  width,
  onClick,
  color,
  style,
}) => {
  return (
    <ButtonContainer
      style={style}
      color={color}
      width={width}
      onClick={onClick}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
