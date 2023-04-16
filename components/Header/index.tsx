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

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleContainer = styled(Grid)<{ gap: number }>`
  font-family: ${FONT_HANKEN_GROTESK};
  font-style: normal;
  font-weight: 500;
  font-size: ${FONT_SIZE_16};
  line-height: 19px;
  height: 100%;
  color: ${MIDNIGHT_BLUE};
  gap: ${(props) => props.gap}px;
`;

function Header() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <LeftContainer>
          <HeaderLogoIcon />
        </LeftContainer>
      </Grid>
      <Grid item xs={7}>
        <MiddleContainer
          alignItems="center"
          container
          columns={NAV_LINKS.length}
          gap={49}
        >
          {NAV_LINKS.map((link) => (
            <Grid item key={link.label}>
              {link.label}
            </Grid>
          ))}
        </MiddleContainer>
      </Grid>
      <Grid item xs={2}>
        <RightContainer>
          <Button label="Join Now" />
        </RightContainer>
      </Grid>
    </Grid>
  );
}

export default Header;
