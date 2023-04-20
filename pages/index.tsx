import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";
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
import DiagramIcon from "@/components/SvgIcons/DiagramIcon";
import CalendarIcon from "@/components/SvgIcons/CalendarIcon";
import MoneyCycleIcon from "@/components/SvgIcons/MoneyCycleIcon";
import Diagram2Icon from "@/components/SvgIcons/Diagram2Icon";

export default function Home() {
  const questions = [
    "Is there a fee for each second opinion request?",
    "Is there the option to speak directly to the expert?",
    "Is my family included as well?",
    "Is this available to patients in the US?",
    "What will happen once you sign up?",
    "Can I ask follow-up questions?",
    "How much time does it take to receive my written report?",
    "Is my medical and payment information secure?",
    "How do you choose the specialist?",
    "Does insurance cover the second opinion fee?",
  ];
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
  const renderQuestion = (text: string) => {
    return (
      <Grid
        p={3}
        container
        alignContent="center"
        alignItems="center"
        style={{
          background: "rgba(179,186,197,0.16)",
          borderRadius: "8px",
          height: "81px",
        }}
        xs={11}
      >
        <Text xs={11} size="20px" weight={700} color="#FAFAFB">
          {text}
        </Text>
        <Grid p={3} item xs={1}>
          <PlusIcon />
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
      <Grid container xs={12} gap={2}>
        <Grid xs={2} item p={2}>
          {image}
        </Grid>
        <Grid xs={9} container gap={2}>
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
      <Grid container xs={12} justifyContent="center">
        <Header />
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
              <Text xs={10} size="36px" weight={700} color="#183B56">
                Our Members Says…
              </Text>
              <Grid container xs={2} justifyContent="flex-end">
                <ArrowBackIcon />
                <ArrowForwardIcon />
              </Grid>
            </Grid>

            <Shape p={5} xs={10} container>
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
                xs={3}
                p={1}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <CanadaIcon />
                </Grid>
                <Grid flexDirection="column" container xs={4}>
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
        <Grid container style={{ marginTop: "100px", maxWidth: "1200px" }}>
          <Grid xs={6} item>
            <Image src={doctor} alt="doctor" />
          </Grid>
          <Grid container xs={6} justifyContent="flex-end" gap={2}>
            <Text
              xs={12}
              textAlign="right"
              size="40px"
              color="#183B56"
              weight={700}
              lineHeight="48px"
            >
              Give yourself and your <p>family the gift of a lifetime</p>
            </Text>
            <LinearGradientText
              style="166.72deg, #BC9A72 23.25%, #E7CFAE 101.38%"
              fontSize="28px"
              text="Get your exclusive membership today."
            />
            <Button color="#FFFFFF" label="Join Now" />
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
          <Grid container p={2} gap={3} justifyContent="center">
            <Text size="48px" weight={700} color="white">
              Frequently Asked Questions
            </Text>
            <Grid
              xs={11}
              p={3}
              container
              style={{
                height: "145px",
                background: "rgba(179,186,197,0.16)",
                borderRadius: "8px",
              }}
            >
              <Grid container xs={11} gap={1}>
                <Text xs={10} size="20px" weight={700} color="#FAFAFB">
                  Is the membership fee a one-time payment only?
                </Text>
                <Text xs={12} size="17px" weight={300} color="#B3BAC5">
                  Yes. The first 100 members will receive lifetime
                  (non-expiring) access to our platform and medical experts for
                  a one-time $500 payment. Members who join later will incur a
                  yearly membership fee.
                </Text>
              </Grid>
              <Grid p={3} item xs={1}>
                <MinusIcon />
              </Grid>
            </Grid>
            {questions.map((q) => renderQuestion(q))}
            <Grid
              m={2}
              container
              xs={6}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text xs={8} size="20px" weight={700} color="#FFFFFF">
                Further Questions?
              </Text>
              <Button label="Contact Us" />
              <Grid />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid
        container
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <Grid container justifyContent="center" style={{ height: "346px" }}>
          <Grid
            container
            xs={10}
            justifyContent="center"
            style={{ maxWidth: "1200px" }}
            p={10}
          >
            <Text
              xs={11}
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
          gap={2}
          style={{ maxWidth: "1200px" }}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid container xs={4} gap={2}>
            <Grid container xs={9} gap={2}>
              <HeaderLogoIcon height="58.7px" width="165px" />
              <Text size="16px" weight={400}>
                Experlo Health is a platform focused on connecting patients
                around the world with expert doctors to obtain a second opinion
                regarding their diagnosis and/or treatment.
              </Text>
            </Grid>
          </Grid>
          <Grid container xs={2} gap={5}>
            <Text height="33px" size="18px" weight={700}>
              Quick Linkxs
            </Text>
            <Grid container gap={2}>
              <Text xs={12} size="16px" weight={400}>
                Sign Up
              </Text>
              <Text xs={12} size="16px" weight={400}>
                Login
              </Text>
            </Grid>
          </Grid>
          <Grid container gap={5} xs={2}>
            <Text size="18px" weight={700} height="33px">
              Company
            </Text>
            <Grid container gap={2}>
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
          <Grid container gap={5} xs={2}>
            <Text size="18px" weight={700} height="33px">
              More
            </Text>
            <Grid container gap={2}>
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
          style={{ maxWidth: "1200px" }}
        >
          <Text size="20px" xs={2} weight={500} color="#5A7184">
            References:
          </Text>
          <Grid xs={10} container gap={3} justifyContent="flex-start">
            <Text size="16px" xs={5} weight={400} color="#5A7184">
              <a href="https://www.axios.com/2022/12/27/evolving-business-second-opinions:">
                [1]
                https://www.axios.com/2022/12/27/evolving-business-second-opinions:
              </a>
            </Text>
            <Text size="16px" xs={6} weight={400} color="#5A7184">
              <a href="https://www.axios.com/2022/12/27/evolving-business-second-opinions:">
                [2] Van Such M, Lohr R, Beckman T, Naessens JM. Extent of
                diagnostic agreement among medical referrals. Journal of
                evaluation in clinical practice. 2017 Aug;23(4):870-4.
              </a>
            </Text>
            <Grid container xs={5}>
              <Text size="16px" weight={400} color="#5A7184">
                [3] Meyer AN, Singh H, Graber ML. Evaluation of outcomes from a
                national patient-initiated second-opinion program. The American
                journal of medicine. 2015 Oct 1;128(10):1138-e25.
              </Text>
            </Grid>

            <Text size="16px" xs={5} weight={400} color="#5A7184">
              [4] Lien BV, Brown NJ, Gattas S, Choi EH, Sahyouni R, Campos JK,
              Zhang A, Oh MY. The market landscape of online second opinion
              services for spine surgery. Surgical neurology international.
              2020;11.
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
