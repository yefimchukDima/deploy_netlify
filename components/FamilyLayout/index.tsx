import styled from "styled-components";
import { Grid } from "@mui/material";
import React from "react";
import { FamilyIcon } from "@/components/SvgIcons/FamilyIcon";
import { FONT_HANKEN_GROTESK } from "@/common/constant";
import LinearGradientText from "@/components/LinearGradientText";
import Button from "@/components/Button";
import Panel from "@/components/Panel/Panel";
import Expert from "@/components/Expert";
import HarvardIcon from "@/components/SvgIcons/HarvardIcon";
import UCLAIcon from "@/components/SvgIcons/UCLAIcon";
import WeillCornellIcon from "@/components/SvgIcons/WeillCornellIcon";
import JohnsHopkinsIcon from "@/components/SvgIcons/JohnsHopkinsIcon";
import CedarsSinaiIcon from "@/components/SvgIcons/CedarsSinaiIcon";
import dawn from "@/components/SvgIcons/Dawn.jpeg";
import lily from "@/components/SvgIcons/Lily.jpeg";
import timothy from "@/components/SvgIcons/Timothy.jpeg";
import matthew from "@/components/SvgIcons/Matthew.jpeg";
import { useScreenSize } from "@/hooks/useScreenSize.hook";
import { HospitalIcon } from "@/components/SvgIcons/HospitalIcon";

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
  size?: string;
  margin?: string;
  color?: string;
  lineHeight?: string;
}>`
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
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #5a7184;
  letter-spacing: 0.2px;
  margin-bottom: 10px;
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
function Index() {
  const { isMobile } = useScreenSize();
  const arr = [
    {
      id: "1.",
      avatar: dawn,
      name: "Dawn LaPorte, MD",
      institutions: "Johns Hopkins",
      specialty: "Hand Surgery",
    },
    {
      id: "2.",
      avatar: matthew,
      name: "Matthew Best, MD",
      institutions: "Johns Hopkins, Harvard Medical School",
      specialty: "Orthopedic Surgery (Sports Medicine)",
    },
    {
      id: "3.",
      avatar: timothy,
      name: "Timothy Yau, MD",
      institutions: "Washington University Barnes-Jewish Hospital",
      specialty: "Nephrology",
    },
    {
      id: "4.",
      name: "Lily Chen, MD",
      avatar: lily,
      institutions: "Cedars-Sinai, Washington University",
      specialty: "Dermatology ",
    },
  ];

  return (
    <GridContainer
      container
      gap={5}
      style={{ margin: "78px 0 0 0", maxWidth: "1200px" }}
    >
      <Grid
        container
        sx={{
          justifyContent: isMobile ? "center" : "flex-start",
          gap: isMobile ? "40px" : "0",
        }}
      >
        <Grid container lg={6} gap={2}>
          <Left
            item
            sx={{
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Will you or your family ever need a medical second opinion?{" "}
          </Left>
          <Grid
            sx={{
              textAlign: isMobile ? "center" : "left",
            }}
            item
            xs={12}
          >
            <LinearGradientText
              text="&#8212; The answer is yes"
              fontSize="24px"
              style="166.72deg, #BC9A72 23.25%, #E7CFAE 101.38%"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              margin: isMobile ? "10px 40px 0px 40px" : "left",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <LinearGradientText
              text="Secure your and your family’s health with life-time access to the world’s top medical experts"
              fontSize="24px"
              style="112.8deg, #36ABFF -15.76%, #3372CD 93.98%"
            />
          </Grid>
          <Grid
            sx={{
              textAlign: isMobile ? "center" : "left",
              padding: isMobile ? "0!important" : "20px'",
            }}
            container
            justifyContent="center"
            gap={isMobile ? 2 : 10}
          >
            <SubContent item md={12} lg={5}>
              Experlo Health is an exclusive platform dedicated to connecting
              its members globally with top US medical experts for virtual
              medical opinions{" "}
            </SubContent>
            <SubContent item md={12} lg={5}>
              We are providing a{" "}
              <LinearGradientText
                text="limited offer to only the first 100 members who join"
                fontSize="18px"
                style="112.8deg, #36ABFF -15.76%, #3372CD 93.98%"
              />
              , for a life-time membership that includes your extended family,
              for a one-time $500 fee
            </SubContent>
          </Grid>
          <Grid
            container
            sx={{
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Grid item>
              <Button color="#FFFFFF" label="Join Now" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} lg={6}>
          <FamilyIcon />
        </Grid>
      </Grid>
      <Grid
        container
        gap={4}
        sx={{
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        <TextContainer item xs={10} lg={3}>
          <Text weight={400} size="18px">
            Medical errors are unfortunately common and the physical and
            financial cost of inappropriate or unnecessary procedures or
            diagnoses cannot be underestimated
          </Text>
        </TextContainer>
        <TextContainer item xs={10} lg={3}>
          <Text weight={400} size="18px">
            Access to expert opinions is truly powerful and can change
            everything
          </Text>
        </TextContainer>
        <TextContainer item xs={10} lg={3}>
          <Text weight={400} size="18px">
            The peace of mind of having a safety net of the best medical doctors
            available to you within reach and from the comfort of your own home
            is invaluable
          </Text>
        </TextContainer>
      </Grid>
      <Grid
        container
        gap={4}
        sx={{
          justifyContent: isMobile ? "center" : "flex-start",
        }}
        margin="70px 0 0 0"
      >
        <Grid
          container
          sx={{
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <Grid container xs={11} lg={5} sx={{ gap: isMobile ? "20px" : 0 }}>
            <Text
              margin="0 0 50px 0"
              color="#183B56"
              item
              sx={{
                textAlign: isMobile ? "center" : "left",
              }}
              xs={12}
              size="40px"
              weight={700}
            >
              How does it work?
            </Text>
            <ActiveContent
              margin="20px 0 0 0 "
              gap={2}
              alignContent="center"
              isActive
              container
              p={3}
              xs={10}
            >
              <Text item weight={700} size="28px" xs={12} color="#183B56">
                Top 1% of US hospitals
              </Text>
              <Text item weight={400} size="17px" xs={12}>
                After joining, you will get access to our network of expert
                advisors that are associated with top 1% of US hospitals
              </Text>
            </ActiveContent>
            <ActiveContent
              gap={2}
              alignContent="center"
              isActive={false}
              container
              p={3}
              xs={10}
            >
              <Text item weight={700} size="28px" xs={12} color="#183B56">
                Upload your medical reports
              </Text>
              <Text item weight={400} size="17px" xs={12}>
                Whenever you or your family member have doubt about a medical
                issue, you can fill out a personalized form and upload your
                medical reports and any images and submit them through the
                Experlo platform
              </Text>
            </ActiveContent>
            <ActiveContent
              gap={2}
              alignContent="center"
              isActive={false}
              container
              p={3}
              xs={10}
            >
              <Text item weight={700} size="28px" xs={12} color="#183B56">
                Expert Review
              </Text>
              <Text item weight={400} size="17px" xs={12}>
                The expert advisor in the relevant specialty will review your
                submission request and records and provide you with an in-depth
                report
              </Text>
            </ActiveContent>
            <ActiveContent
              gap={2}
              alignContent="center"
              isActive={false}
              container
              p={3}
              xs={12}
            >
              <Text item weight={700} size="27px" xs={12} color="#183B56">
                Quick & Easy: No travel or hassle
              </Text>
            </ActiveContent>
          </Grid>
          <Grid item xs={10} lg={6}>
            <HospitalIcon />
          </Grid>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container gap={4}>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          item
          xs={12}
        >
          <Text size="48px" weight={700} color="#183B56">
            Why Us
          </Text>
        </Grid>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          lg={5}
          xs={8}
        >
          <Text
            sx={{
              fontSize: isMobile ? "26px" : "19px",
            }}
            weight={400}
            textAlign="center"
          >
            Exclusive Access to the World’s Top Medical Specialists. Our doctors
            have trained or work at
          </Text>
        </Grid>
        <Grid
          gap={4}
          container
          lg={12}
          sx={{
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <TextContainer width={212} item xs={8} lg={2}>
            <HarvardIcon />
          </TextContainer>
          <TextContainer width="212px" item xs={8} lg={2}>
            <Text size="20px" weight={400}>
              <UCLAIcon />
            </Text>
          </TextContainer>
          <TextContainer width="212px" item xs={8} lg={2}>
            <WeillCornellIcon />
          </TextContainer>
          <TextContainer width="212px" item xs={8} lg={2}>
            <JohnsHopkinsIcon />
          </TextContainer>
          <TextContainer
            container
            alignContent="center"
            width="212px"
            item
            xs={8}
            lg={2}
          >
            <CedarsSinaiIcon />
          </TextContainer>
        </Grid>
        <Grid
          container
          justifyContent="center"
          xs={10}
          sx={{ textAlign: isMobile ? "center" : "left" }}
          lg={12}
        >
          <Text size="20px" weight={400}>
            A few of the experts on the medical advisory board
          </Text>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container gap={1}>
        <Panel />
        <Grid
          style={{ borderBottomWidth: "1px", borderColor: "#EDEFF3" }}
          container
          p={3}
          xs={11}
        >
          <Grid xs={12} container>
            <Grid container xs={1}>
              <Text
                justifyContent="flex-start"
                item
                xs={1}
                size="16px"
                weight={400}
              >
                #
              </Text>
            </Grid>
            <Text item xs={4} size="16px" weight={400}>
              Expert Name
            </Text>
            <Text item xs={5} size="16px" weight={400}>
              Associated Institutions
            </Text>
            <Text textAlign="start" item xs={1} size="16px" weight={400}>
              Specialty
            </Text>
          </Grid>
        </Grid>
        {arr.map((u) => (
          <Expert
            avatar={u.avatar}
            name={u.name}
            id={u.id}
            institutions={u.institutions}
            specialty={u.specialty}
          />
        ))}
      </Grid>
      <Grid justifyContent="center" container m="20px 0 100px 0" gap={4}>
        <TextContainer padding="18px" gap={2} container xs={10} lg={3}>
          <LinearGradientText
            fontSize="28px"
            style="166.72deg, #BC9A72 23.25%, #E7CFAE 101.38%"
            text="Save Money"
          />

          <StyledList>
            <StyledListItem>
              <StyledDot>&#8226;</StyledDot>
              <Text size="18px" weight={400}>
                A change in diagnosis saves on average $12,000
                <sup>1</sup>
              </Text>
            </StyledListItem>
            <StyledListItem style={{ marginLeft: "30px" }}>
              <StyledDot>&#8226;</StyledDot>{" "}
              <Text size="18px" weight={400}>
                A Mayo Clinic study showed that second opinions lead to a
                refined or different diagnosis 87% of the time<sup>2</sup>.{" "}
                Moreover, second opinions lead to a change in treatment 40% of
                the time<sup>3</sup>
              </Text>
            </StyledListItem>

            <StyledListItem>
              <StyledDot>&#8226;</StyledDot>
              <Text size="18px" weight={400}>
                No travel or facility fees
              </Text>
            </StyledListItem>
          </StyledList>
        </TextContainer>
        <TextContainer padding="18px" gap={2} item xs={10} lg={3}>
          <LinearGradientText
            fontSize="28px"
            style="112.8deg, #36ABFF -15.76%, #3372CD 93.98%"
            text="Save Time"
          />

          <StyledList>
            <StyledListItem>
              <Text size="18px" weight={400}>
                The average time to obtain an in-person appointment is 20 days,
                while Experlo’s second opinions are provided in less than 10
                days4.
              </Text>
            </StyledListItem>
          </StyledList>
        </TextContainer>
        <TextContainer padding="18px" item xs={12} lg={3}>
          <LinearGradientText
            fontSize="28px"
            style="52.37deg, #34BF96 -5.7%, #138261 94.69%"
            text="Save Stress"
          />

          <StyledList>
            <StyledListItem>
              <Text size="18px" weight={400}>
                The cost of a medical error on one’s health and future cannot be
                under-estimated. Experlo’s mission is to ensure that you are
                making the most informed decisions about your health
              </Text>
            </StyledListItem>
          </StyledList>
        </TextContainer>
      </Grid>
    </GridContainer>
  );
}

export default Index;
