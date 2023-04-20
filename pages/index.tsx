import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { height, width } from "@mui/system";
import { Shape, Text } from "@/components/styles";
import Header from "@/components/Header";
import CanadaIcon from "@/components/SvgIcons/CanadaIcon";
import Button from "@/components/Button";
import LinearGradientText from "@/components/LinearGradientText";
import MinusIcon from "@/components/SvgIcons/MinusIcon";
import PlusIcon from "@/components/SvgIcons/PlusIcon";
import doctor from "@/components/SvgIcons/doctor.jpg";
import backgroundImage from "../components/SvgIcons/Oval.jpg";
import { HeaderLogoIcon } from "@/components/SvgIcons/HeaderLogoIcon";

import FamilyLayout from "@/components/FamilyLayout";
import OvalCut from "@/components/SvgIcons/OvalCut.png";
import CalendarIcon from "@/components/SvgIcons/CalendarIcon";
import MoneyCycleIcon from "@/components/SvgIcons/MoneyCycleIcon";
import Diagram2Icon from "@/components/SvgIcons/Diagram2Icon";
import { useScreenSize } from "@/hooks/useScreenSize.hook";

export default function Home() {
  const { isMobile } = useScreenSize();
  const questions = [
    {
      index: 0,
      title: "Is the membership fee a one-time payment only?",
      open: true,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 1,
      title: "Is there a fee for each second opinion request?",
      open: true,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 2,
      title: "Is there the option to speak directly to the expert?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 3,
      title: "Is my family included as well?",
      open: true,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 4,
      title: "Is this available to patients in the US?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 5,
      title: "What will happen once you sign up?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 6,
      title: "Can I ask follow-up questions?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 7,
      title: "How much time does it take to receive my written report?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 8,
      title: "Is my medical and payment information secure?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 9,
      title: "How do you choose the specialist?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
    {
      index: 10,
      title: "Does insurance cover the second opinion fee?",
      open: false,
      text: "Yes. The first 100 members will receive lifetime (non-expiring) access to our platform and medical experts for a one-time $500 payment. Members who join later will incur a yearly membership fee.",
    },
  ];
  const [questionList, setQuestionList] = useState(questions);

  const handleOpen = (index: number) => {
    const updatedQuestionList = questionList.map((question, i) => {
      if (i === index) {
        return { ...question, open: !question.open };
      }

      return question;
    });

    setQuestionList(updatedQuestionList);
  };

  const membership = [
    {
      title: "First 100 members",
      body: "The one-time fee offer is only available to the first 100 members, afterwards memberships will be billed yearly",
      image: <Diagram2Icon />,
    },
    {
      title: "Fully launch in late 2023",
      body:
        "While we are planning to fully launch \n" +
        "in late 2023, if in the meantime you require a second opinion, let us know \n" +
        "and we will get that available to you",
      image: <CalendarIcon />,
    },
    {
      title: "Money back guarantee",
      body:
        "While unlikely, if your second opinion is not delivered to you, we promise to refund the second opinion fee\n" +
        "\n",
      image: <MoneyCycleIcon />,
    },
  ];
  const renderQuestion = ({
    text,
    title,
    index,
    open,
  }: {
    text: string;
    title: string;
    open: boolean;
    index: number;
  }) => {
    const getHeight = () => {
      if (open) {
        return isMobile ? "30%" : "30%";
      }

      return isMobile ? "30%" : "30%";
    };

    return (
      <Grid
        xs={11}
        p={3}
        container
        sx={{
          height: getHeight(),
          background: "rgba(179,186,197,0.16)",
          borderRadius: "8px",
        }}
      >
        <Grid container sx={{ width: "95%" }} gap={1}>
          <Text xs={10} size="20px" weight={700} color="#FAFAFB">
            {title}
          </Text>
          <Text xs={12} size="17px" weight={300} color="#B3BAC5">
            {open && text}
          </Text>
        </Grid>
        <Grid
          onClick={() => handleOpen(index)}
          item
          sx={{ width: "5%", paddingTop: !open ? "10px" : "20px" }}
        >
          {open ? <MinusIcon /> : <PlusIcon />}
        </Grid>
      </Grid>
    );
  };
  const renderMembership = ({
    title,
    body,
    image,
  }: {
    title: string;
    body: string;
    image: JSX.Element;
  }) => {
    return (
      <Grid
        container
        xs={12}
        gap={2}
        sx={{ justifyContent: isMobile ? "center" : "flex-start" }}
      >
        <Grid
          xs={10}
          lg={2}
          container
          sx={{ justifyContent: isMobile ? "center" : "flex-start" }}
          p={2}
        >
          {image}
        </Grid>
        <Grid
          xs={9}
          container
          gap={2}
          sx={{ textAlign: isMobile ? "center" : "left" }}
        >
          <Text xs={12} size="28px" weight={700} color="#183B56">
            {title}
          </Text>
          <Text xs={12} size="20px" weight={300} lineHeight="32px">
            {body && body}
          </Text>
        </Grid>
      </Grid>
    );
  };

  return (
    <main>
      <Grid container xs={12}>
        <Grid xs={12} sx={{ zIndex: 1 }} item>
          <Header />
        </Grid>
        <Grid xs={12} sx={{ zIndex: 0 }} item>
          <Grid container justifyContent="center">
            <FamilyLayout />
          </Grid>

          <Grid
            justifyContent="center"
            container
            xs={12}
            style={{
              background: "rgba(179,186,197,0.09)",
            }}
          >
            <Grid
              container
              style={{
                maxWidth: "1200px",
              }}
            >
              <Grid p={4} container justifyContent="center" gap={5}>
                <Grid container borderRadius="15px">
                  <Text
                    xs={10}
                    size="36px"
                    weight={700}
                    color="#183B56"
                    sx={{
                      textAlign: isMobile ? "center" : "right",
                      justifyContent: isMobile ? "center" : "flex-start",
                    }}
                  >
                    Our Members Says…
                  </Text>
                  <Grid
                    container
                    xs={2}
                    sx={{ display: isMobile ? "none" : "flex" }}
                    justifyContent="flex-end"
                  >
                    <ArrowBackIcon />
                    <ArrowForwardIcon />
                  </Grid>
                </Grid>

                <Shape p={5} isMobile={isMobile} xs={10} container>
                  <Text size="20px" weight={400} color="#183B56">
                    “Getting access to doctors in elite US hospitals like Johns
                    Hopkins is truly invaluable. It gives me the peace of mind
                    knowing that my family and I have a strong safety net when
                    medical issues arise.”
                  </Text>
                </Shape>

                <Grid container xs={12}>
                  <Grid
                    container
                    xs={isMobile ? 6 : 3}
                    p={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={6}>
                      <CanadaIcon />
                    </Grid>
                    <Grid flexDirection="column" container xs={6}>
                      <Text size="20px" weight={600}>
                        Ruby
                      </Text>
                      <Text size="16px" weight={400}>
                        Canada
                      </Text>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid
              container
              sx={{
                marginTop: "100px",
                maxWidth: "1200px",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <Grid xs={10} lg={6} item>
                <Image src={doctor} alt="doctor" />
              </Grid>
              <Grid container xs={10} lg={6} justifyContent="flex-end" gap={2}>
                <Text
                  xs={12}
                  sx={{ textAlign: isMobile ? "center" : "right" }}
                  size="40px"
                  color="#183B56"
                  weight={700}
                  lineHeight="48px"
                >
                  Give yourself and your family the gift of a lifetime
                </Text>
                <Grid item sx={{ textAlign: isMobile ? "center" : "left" }}>
                  <LinearGradientText
                    style="166.72deg, #BC9A72 23.25%, #E7CFAE 101.38%"
                    fontSize="28px"
                    text="Get your exclusive membership today."
                  />
                </Grid>
                <Grid
                  container
                  xs={12}
                  sx={{ justifyContent: isMobile ? "center" : "flex-end" }}
                  textAlign="center"
                >
                  <Button color="#FFFFFF" label="Join Now" />
                </Grid>

                <Grid container xs={12} gap={3}>
                  {membership.map((value) => renderMembership(value))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            p={4}
            container
            style={{ background: "#183B56", marginTop: "100px" }}
          >
            <Container>
              <Grid
                container
                p={isMobile ? 0 : 2}
                gap={3}
                justifyContent="center"
              >
                <Text
                  size="35px"
                  weight={700}
                  lineHeight="40px"
                  color="white"
                  sx={{ textAlign: isMobile ? "center" : "left" }}
                >
                  Frequently Asked Questions
                </Text>
                {questionList.map((q) => renderQuestion(q))}
                <Grid
                  m={2}
                  container
                  xs={isMobile ? 10 : 6}
                  sx={{
                    textAlign: isMobile ? "center" : "left",
                    justifyContent: isMobile ? "center" : "space-between",
                  }}
                  alignItems="center"
                >
                  <Text
                    sx={{ paddingBottom: isMobile ? "20px" : "0" }}
                    xs={8}
                    size="20px"
                    weight={700}
                    color="#FFFFFF"
                  >
                    Further Questions?
                  </Text>
                  <Button label="Contact Us" />
                  <Grid />
                </Grid>
              </Grid>
            </Container>
          </Grid>

          <Grid
            justifyContent="center"
            container
            sx={{
              background: "#E8F0FB",
              backgroundImage: `url(${
                isMobile ? OvalCut.src : backgroundImage.src
              })`,
              backgroundSize: isMobile ? "50%" : "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: isMobile ? "right bottom" : "center",
            }}
          >
            <Grid
              container
              justifyContent="center"
              xs={10}
              style={{
                height: isMobile ? "350px" : "346px",
                marginTop: isMobile ? "50px" : "0",
                marginBottom: isMobile ? "50px" : "0",
              }}
              gap={3}
            >
              <Grid
                container
                xs={12}
                justifyContent="center"
                gap={3}
                sx={{ maxWidth: "1200px" }}
                p={isMobile ? 1 : 10}
              >
                <Text
                  xs={isMobile ? 12 : 10}
                  textAlign="center"
                  size="36px"
                  weight={700}
                  color="#183B56"
                  lineHeight="48px;"
                >
                  Get your exclusive membership today before we reach our first
                  100-member limit
                </Text>
                <Grid justifyContent="center" container xs={12}>
                  <Button
                    color="#FFFFFF"
                    style="112.8deg, #36ABFF -15.76%, #3372CD 93.98%"
                    label="Join Now"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid justifyContent="center" container>
            <Grid
              container
              xs={12}
              m={5}
              gap={isMobile ? 2 : 5}
              style={{ maxWidth: "1200px" }}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid container xs={12} lg={4} gap={2}>
                <Grid
                  container
                  xs={12}
                  lg={9}
                  gap={2}
                  sx={{ justifyContent: isMobile ? "center" : "flex-start" }}
                >
                  <HeaderLogoIcon height="58.7px" width="165px" />
                  <Text
                    size="16px"
                    weight={400}
                    sx={{ textAlign: isMobile ? "center" : "left" }}
                  >
                    Experlo Health is a platform focused on connecting patients
                    around the world with expert doctors to obtain a second
                    opinion regarding their diagnosis and/or treatment.
                  </Text>
                </Grid>
              </Grid>
              <Grid
                container
                xs={10}
                lg={2}
                gap={1}
                sx={{
                  justifyContent: isMobile ? "center" : "flex-start",
                  marginTop: isMobile ? "20px" : "0",
                }}
              >
                <Text height="33px" size="18px" weight={700} color="#183B56">
                  Quick Linkxs
                </Text>
                <Grid
                  sx={{ textAlign: isMobile ? "center" : "left" }}
                  container
                  gap={2}
                >
                  <Text xs={12} size="16px" weight={400}>
                    Sign Up
                  </Text>
                  <Text xs={12} size="16px" weight={400}>
                    Login
                  </Text>
                </Grid>
              </Grid>
              <Grid
                container
                xs={10}
                gap={2}
                lg={2}
                sx={{
                  justifyContent: isMobile ? "center" : "flex-start",
                  marginTop: isMobile ? "20px" : "0",
                }}
              >
                <Text size="18px" weight={700} height="33px" color="#183B56">
                  Company
                </Text>
                <Grid
                  container
                  gap={2}
                  sx={{ textAlign: isMobile ? "center" : "left" }}
                >
                  <Text xs={12} size="16px" weight={400}>
                    About
                  </Text>
                  <Text xs={12} size="16px" weight={400}>
                    Terms
                  </Text>
                  <Text xs={12} size="16px" weight={400}>
                    Privacy Policy
                  </Text>
                  <Text xs={12} size="16px" weight={400}>
                    Careers
                  </Text>
                </Grid>
              </Grid>
              <Grid
                container
                xs={10}
                gap={2}
                lg={2}
                sx={{
                  justifyContent: isMobile ? "center" : "flex-start",
                  marginTop: isMobile ? "20px" : "0",
                }}
              >
                <Text size="18px" weight={700} height="33px" color="#183B56">
                  More
                </Text>
                <Grid
                  container
                  gap={2}
                  sx={{ textAlign: isMobile ? "center" : "left" }}
                >
                  <Text xs={12} size="16px" weight={400}>
                    Why Us
                  </Text>
                  <Text xs={12} size="16px" weight={400}>
                    Membership
                  </Text>
                  <Text xs={12} size="16px" weight={400}>
                    How it works
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            p={4}
            container
            justifyContent="center"
            style={{ background: "#E8F0FB" }}
          >
            <Grid
              xs={12}
              justifyContent="center"
              container
              style={{
                maxWidth: "1200px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Text size="20px" xs={10} lg={2} weight={500} color="#5A7184">
                References:
              </Text>
              <Grid
                xs={10}
                container
                gap={3}
                sx={{ justifyContent: isMobile ? "center" : "flex-start" }}
              >
                <Text size="16px" xs={10} lg={5} weight={400} color="#5A7184">
                  <a href="https://www.axios.com/2022/12/27/evolving-business-second-opinions:">
                    [1] https://www.axios.com
                    /2022/12/27/evolving-business-second-opinions
                  </a>
                </Text>
                <Text size="16px" xs={10} lg={6} weight={400} color="#5A7184">
                  <a href="https://www.axios.com/2022/12/27/evolving-business-second-opinions:">
                    [2] Van Such M, Lohr R, Beckman T, Naessens JM. Extent of
                    diagnostic agreement among medical referrals. Journal of
                    evaluation in clinical practice. 2017 Aug;23(4):870-4.
                  </a>
                </Text>
                <Grid container xs={10} lg={5}>
                  <Text size="16px" weight={400} color="#5A7184">
                    [3] Meyer AN, Singh H, Graber ML. Evaluation of outcomes
                    from a national patient-initiated second-opinion program.
                    The American journal of medicine. 2015 Oct
                    1;128(10):1138-e25.
                  </Text>
                </Grid>

                <Text size="16px" xs={10} lg={5} weight={400} color="#5A7184">
                  [4] Lien BV, Brown NJ, Gattas S, Choi EH, Sahyouni R, Campos
                  JK, Zhang A, Oh MY. The market landscape of online second
                  opinion services for spine surgery. Surgical neurology
                  international. 2020;11.
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
