import React from "react";
import { Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Text } from "@/components/styles";

function Expert({
  id,
  name,
  avatar,
  institutions,
  specialty,
  isMobile,
}: {
  id: string;
  name: string;
  avatar: StaticImageData;
  institutions: string;
  specialty: string;
  isMobile: boolean;
}) {
  return (
    <Grid
      sx={{
        borderBottomWidth: "1px",
        borderColor: "#EDEFF3",
      }}
      p={isMobile ? 2 : 3}
      container
      xs={11}
    >
      <Grid xs={12} container alignContent="flex-start">
        <Grid alignItems="center" container xs={1}>
          <Text
            justifyContent="flex-end"
            color="#183B56"
            item
            xs={1}
            size={isMobile ? "10px" : "16px"}
            weight={400}
          >
            {id}
          </Text>
        </Grid>
        <Grid alignItems="center" container xs={4}>
          <Text
            item
            color="#183B56"
            xs={isMobile ? 3 : 2}
            size="16px"
            weight={500}
          >
            <Image
              width={isMobile ? 24 : 40}
              height={isMobile ? 24 : 40}
              src={avatar}
              alt={name}
            />
          </Text>
          <Text
            color="#183B56"
            xs={6}
            sx={{ lineHeight: isMobile ? "13.05px" : "28px" }}
            size={isMobile ? "10px" : "16px"}
            weight={500}
          >
            {name}
          </Text>
        </Grid>

        <Text
          color="#183B56"
          alignItems="center"
          container
          xs={isMobile ? 5 : 5}
          size={isMobile ? "10px" : "16px"}
          weight={400}
        >
          <Text
            color="#183B56"
            item
            xs={10}
            size={isMobile ? "10px" : "16px"}
            weight={500}
          >
            {institutions}
          </Text>
        </Text>
        <Text
          alignItems="center"
          color="#183B56"
          textAlign="start"
          item
          xs={2}
          size={isMobile ? "10px" : "16px"}
          weight={500}
        >
          {specialty}
        </Text>
      </Grid>
    </Grid>
  );
}

export default Expert;
