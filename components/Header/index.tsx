import styled from "styled-components";
import { Grid } from "@mui/material";
import { useState } from "react";
import { HeaderLogoIcon } from "@/components/SvgIcons/HeaderLogoIcon";
import Button from "@/components/Button";
import {
  FONT_HANKEN_GROTESK,
  FONT_SIZE_16,
  MIDNIGHT_BLUE,
  NAV_LINKS,
  DEVICE,
} from "@/common/constant";
import { useScreenSize } from "@/hooks/useScreenSize.hook";
import DropdownIcon from "@/components/SvgIcons/DropdownIcon";
import CancelIcon from "@/components/SvgIcons/CancelIcon";
import { Text } from "@/components/FamilyLayout";

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

const DropdownContainer = styled(Grid)`
  position: fixed;
  top: 0;
  right: 0;
  width: 88%;
  height: 100%;
  background-color: white;
  border: 1px solid #dddddd;
  z-index: 1;
`;

const DropdownButton = styled(Grid)`
  text-transform: uppercase;
  font-size: 12px;
`;

const DropdownList = styled(Grid)`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DropdownItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #dddddd;
`;

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const { isMobile } = useScreenSize();

  return (
    <Grid p={2} container justifyContent="center">
      <Grid container alignItems="center" sx={{ maxWidth: "1200px" }}>
        <Grid item xs={isMobile ? 11 : 3}>
          <LeftContainer>
            <HeaderLogoIcon height="37px" width="104px" />
          </LeftContainer>
        </Grid>
        <Grid item xs={7} sx={{ display: isMobile ? "none" : "flex" }}>
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
        <Grid item xs={isMobile ? 1 : 2}>
          <RightContainer>
            {isMobile ? (
              <DropdownButton onClick={handleDropdownToggle}>
                <DropdownIcon />
              </DropdownButton>
            ) : (
              <Button label="Join Now" />
            )}
          </RightContainer>
          {isMobile && isDropdownOpen && (
            <Grid container>
              <Grid
                justifyContent="center"
                sx={{
                  background: "rgba(0,0,0,0.64)",
                  zIndex: 4,
                  height: "100%",
                  top: 0,
                  position: "fixed",
                  width: "13%",
                  paddingTop: "20px",
                  left: 0,
                }}
                container
                xs={2}
              >
                <Grid
                  item
                  sx={{ height: "30px" }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <CancelIcon />
                </Grid>
              </Grid>
              <DropdownContainer item>
                <DropdownList>
                  {NAV_LINKS.map((link) => (
                    <Text
                      sx={{
                        borderBottom: "2px solid #183B56",
                      }}
                      p={2}
                      key={link.label}
                      size="15px"
                      color="#183B56"
                      weight={500}
                    >
                      {link.label}
                    </Text>
                  ))}
                  <Grid
                    sx={{ marginTop: "20px" }}
                    xs={12}
                    container
                    justifyContent="center"
                  >
                    <Grid item xs={10}>
                      <Button width="100%" label="Join Now" />
                    </Grid>
                  </Grid>
                </DropdownList>
              </DropdownContainer>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
