import styled from "styled-components";
import { Grid } from "@mui/material";
import { HeaderLogoIcon } from "@/components/SvgIcons/HeaderLogoIcon";
import Button from "@/components/Button";
import {
  FONT_HANKEN_GROTESK,
  FONT_SIZE_16,
  MIDNIGHT_BLUE,
  NAV_LINKS,
  DEVICE,
} from "@/common/constant";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopPanel = styled(Grid)`
  background: rgba(21, 101, 216, 0.12);
  mix-blend-mode: normal;
  border-radius: 10px 10px 0 0;
  height: 44px;
  mix-blend-mode: normal;
`;
const Circle = styled(Grid)<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${(props) => props.color};
`;
function Panel() {
  return (
    <Grid justifyContent="center" container>
      <TopPanel alignContent="center" p={2} gap={1} container xs={11}>
        <Circle color="#E95432" item />
        <Circle color="#FFFFFF" item />
        <Circle color="#36B37E" item />
      </TopPanel>
    </Grid>
  );
}

export default Panel;
