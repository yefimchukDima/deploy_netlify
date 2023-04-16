import styled from "styled-components";
import { Grid } from "@mui/material";
import { FamilyIcon } from "@/components/SvgIcons/FamilyIcon";
import { FONT_HANKEN_GROTESK } from "@/common/constant";
import LinearGradientText from "@/components/LinearGradientText";
import { HeaderLogoIcon } from "@/components/SvgIcons/HeaderLogoIcon";
import Button from "@/components/Button";
import Panel from "@/components/Panel/Panel";

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
const TextContainer = styled(Grid)`
  mix-blend-mode: normal;
  padding: 20px;
  width: 212px;
  border: 1px solid red;

  border-radius: 8px;
`;
const Text = styled(Grid)<{ weight: number; size: string; margin?: string }>`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-family: ${FONT_HANKEN_GROTESK};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: 28px;
  color: #5a7184;
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
const GridContainer = styled(Grid)<{
  margin?: string;
}>`
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
const ActiveContent = styled(Grid)<{ isActive: boolean }>`
  height: ${(props) => (props.isActive ? "127px" : "auto")};
  border-left: ${(props) => (props.isActive ? "2px solid #3372cd;" : "none")};
`;
function ExampleLayout() {
  return (
    <GridContainer
      container
      gap={5}
      style={{ margin: "78px 0 0 0", maxWidth: "1200px" }}
    >
      <Grid container>
        <Grid container xs={6} gap={2}>
          <Left item xs={12}>
            Will you or your family ever need a medical second opinion?{" "}
          </Left>
          <Grid item xs={12}>
            <LinearGradientText
              text="- The answer is yes"
              fontSize="24px"
              style="166.72deg, #BC9A72 23.25%, #E7CFAE 101.38%"
            />
          </Grid>
          <Grid item xs={12}>
            <LinearGradientText
              text="Secure your and your family’s health with life-time access to the world’s top medical experts"
              fontSize="20px"
              style="112.8deg, #36ABFF -15.76%, #3372CD 93.98%"
            />
          </Grid>
          <Grid container gap={10}>
            <SubContent item xs={5}>
              Experlo Health is an exclusive platform dedicated to connecting
              its members globally with top US medical experts for virtual
              medical opinions{" "}
            </SubContent>
            <SubContent item xs={5}>
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
          <Grid item xs={12}>
            <Button label="Join Now" />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <FamilyIcon />
        </Grid>
      </Grid>
      <Grid container gap={4}>
        <TextContainer item xs={3}>
          <Text weight={400} size="18px">
            Medical errors are unfortunately common and the physical and
            financial cost of inappropriate or unnecessary procedures or
            diagnoses cannot be underestimated
          </Text>
        </TextContainer>
        <TextContainer item xs={3}>
          <Text weight={400} size="18px">
            Access to expert opinions is truly powerful and can change
            everything
          </Text>
        </TextContainer>
        <TextContainer item xs={3}>
          <Text weight={400} size="18px">
            The peace of mind of having a safety net of the best medical doctors
            available to you within reach and from the comfort of your own home
            is invaluable
          </Text>
        </TextContainer>
      </Grid>
      <Grid container gap={4}>
        <Grid container xs={5}>
          <Text margin="0 0 50px 0" item xs={12} size="40px" weight={700}>
            How does it work?
          </Text>
          <ActiveContent
            gap={2}
            alignContent="center"
            isActive
            container
            p={3}
            xs={10}
          >
            <Text item weight={700} size="28px" xs={12}>
              Top 1% of US hospitals
            </Text>
            <Text item weight={400} size="20    px" xs={12}>
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
            <Text item weight={700} size="28px" xs={12}>
              Upload your medical reports
            </Text>
            <Text item weight={400} size="20    px" xs={12}>
              Whenever you or your family member have doubt about a medical
              issue, you can fill out a personalized form and upload your
              medical reports and any images and submit them through the Experlo
              platform
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
            <Text item weight={700} size="28px" xs={12}>
              Expert Review
            </Text>
            <Text item weight={400} size="20    px" xs={12}>
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
            xs={10}
          >
            <Text item weight={700} size="28px" xs={12}>
              Quick & Easy: No travel or hassle
            </Text>
          </ActiveContent>
        </Grid>
        <Grid item xs={6}>
          <FamilyIcon />
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
          <Text size="48px" weight={700}>
            Why Us
          </Text>
        </Grid>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          xs={5}
        >
          <Text size="20px" weight={400} textAlign="center">
            Exclusive
          </Text>
        </Grid>
        <Grid gap={4} container xs={12}>
          <TextContainer width={212} item xs={2}>
            <Text size="20px" weight={400}>
              Exclusive
            </Text>
          </TextContainer>
          <TextContainer width="212px" item xs={2}>
            <Text size="20px" weight={400}>
              Exclusive
            </Text>
          </TextContainer>
          <TextContainer width="212px" item xs={2}>
            <Text size="20px" weight={400}>
              Exclusive
            </Text>
          </TextContainer>
          <TextContainer width="212px" item xs={2}>
            <Text size="20px" weight={400}>
              Exclusive
            </Text>
          </TextContainer>
          <TextContainer width="212px" item xs={2}>
            <Text size="20px" weight={400}>
              Exclusive
            </Text>
          </TextContainer>
        </Grid>
        <Grid container justifyContent="center" xs={12}>
          <Text size="20px" weight={400}>
            A few of the experts on the medical advisory board
          </Text>
        </Grid>
      </Grid>
      <Panel />
    </GridContainer>
  );
}

export default ExampleLayout;
