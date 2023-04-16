import React from "react";
import styled from "styled-components";
import { FONT_HANKEN_GROTESK } from "@/common/constant";

const Text = styled.span<{ style: string; fontSize: string }>`
  font-family: ${FONT_HANKEN_GROTESK};
  background: linear-gradient(${(props) => props.style});
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
interface ILinearGradientTextProps {
  fontSize: string;
  text: string;
  style: string;
}
function LinearGradientText({
  fontSize,
  style,
  text,
}: ILinearGradientTextProps) {
  return (
    <Text fontSize={fontSize} style={style}>
      {text}
    </Text>
  );
}

export default LinearGradientText;
