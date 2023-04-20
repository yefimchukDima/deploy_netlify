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
}: {
  id: string;
  name: string;
  avatar: StaticImageData;
  institutions: string;
  specialty: string;
}) {
  return (
    <Grid
      sx={{
        borderBottomWidth: "1px",
        borderColor: "#EDEFF3",
      }}
      p={3}
      container
      xs={11}
    >
      <Grid
        xs={12}
        container
        alignContent="flex-start"
        style={{ height: "50px" }}
      >
        <Grid alignItems="center" container xs={1}>
          <Text
            justifyContent="flex-end"
            color="#183B56"
            item
            xs={1}
            size="16px"
            weight={400}
          >
            {id}
          </Text>
        </Grid>
        <Grid alignItems="center" container xs={4}>
          <Text item color="#183B56" xs={6} size="16px" weight={500}>
            <Image width={40} height={40} src={avatar} alt={name} />
          </Text>
          <Text color="#183B56" xs={5} size="16px" weight={500}>
            {name}
          </Text>
        </Grid>

        <Text
          color="#183B56"
          alignItems="center"
          container
          xs={5}
          size="16px"
          weight={400}
        >
          <Text color="#183B56" item xs={5} size="16px" weight={500}>
            {institutions}
          </Text>
        </Text>
        <Text
          alignItems="center"
          color="#183B56"
          textAlign="start"
          item
          xs={2}
          size="16px"
          weight={500}
        >
          {specialty}
        </Text>
      </Grid>
    </Grid>
  );
}

export default Expert;
