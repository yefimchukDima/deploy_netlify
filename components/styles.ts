import styled from "styled-components";
import { Grid } from "@mui/material";
import { FONT_HANKEN_GROTESK } from "@/common/constant";

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled(Grid)`
  font-family: ${FONT_HANKEN_GROTESK};
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.2px;
  color: #183b56;
`;
const HowItsWork = styled(Grid)``;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;
const TextContainer = styled(Grid)<{ padding?: string }>`
  mix-blend-mode: normal;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  width: 212px;

  border: 2px solid rgba(179, 186, 197, 0.31);
  border-radius: 8px;
`;
export const Text = styled(Grid)<{
  weight: number;
  size: string;
  margin?: string;
  color?: string;
  lineHeight?: string;
}>`
  z-index: 99;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-family: ${FONT_HANKEN_GROTESK};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "28px")};
  color: ${(props) => (props.color ? props.color : "#5a7184")};
  letter-spacing: 0.2px;
`;
const SubContent = styled(Grid)`
  font-style: normal;
  width: 50%;
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #5a7184;
  margin-bottom: 10px;
`;
export const Shape = styled(Grid)`
  width: 100%;
  height: 10px;
  box-sizing: content-box;
  background: white;
  border-radius: 10px;
  border-color: white;
  border-style: solid;
  border-width: 2px 2px 50px 2px;
  z-index: 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 70%;
    left: -2px;
    border-top: 50px solid transparent;
    border-left: 130px solid white;
    border-bottom: 54px solid transparent;
  }
`;
const StyledListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;
const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;
const StyledDot = styled.span`
  height: 10px;

  font-size: 18px;
  margin-bottom: 10px;
  color: #5a7184;
  margin-right: 8px;
`;
const GridContainer = styled(Grid)<{
  margin?: string;
}>`
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
const ActiveContent = styled(Grid)<{ isActive: boolean }>`
  height: ${(props) => (props.isActive ? "127px" : "auto")};
  border-left: ${(props) => (props.isActive ? "2px solid #3372cd;" : "none")};
`;
