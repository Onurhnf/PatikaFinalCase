import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import { IStarship } from "@/interfaces/starships/IStarship.interface";

import { useTranslation } from "next-i18next";
import { Colors } from "@/utility/Colors";
import Helpers from "@/utility/Helpers";

function StarshipDetailCard(props: IStarship.IStarshipDetail) {
  const { t } = useTranslation("common");
  const isMdDown = Helpers.useMediaQuery("down", "md");

  const details = [
    { title: `${t("Model")}:`, attr: props.model },
    { title: `${t("Hyperdrive-Rating")}:`, attr: props.hyperdrive_rating },
    { title: `${t("Passengers")}:`, attr: props.passengers },
    {
      title: `${t("Max-Atmosphereing-Speed")}:`,
      attr: props.max_atmosphering_speed,
    },
    { title: `${t("Manufacturer")}:`, attr: props.manufacturer },
    { title: `${t("Crew")}:`, attr: props.crew },
    { title: `${t("Cargo-Capacity")}:`, attr: props.cargo_capacity },
  ];

  function renderDetails() {
    return details.map((detail, i) => {
      return (
        <Typography
          key={i}
          mb={isMdDown ? 1 : 2}
          variant="body2"
          color={Colors.MainText}
          component="p"
        >
          <b>{detail.title} </b> {detail.attr === "n/a" ? "-" : detail.attr}
        </Typography>
      );
    });
  }

  return (
    <Grid
      container={isMdDown ? false : true}
      item
      margin={2}
      maxWidth={isMdDown ? "250" : "600px"}
      minWidth={isMdDown ? "300" : "400px"}
      sx={{ border: "7px solid white", height: "100%", borderRadius: "30px" }}
    >
      <Card
        sx={{
          border: `7px solid ${Colors.MainSpaceDark}`,
          borderRadius: "30px",
          background: "#fff",
          height: "100%",
          minWidth: "300px",
        }}
      >
        <Box textAlign={"center"} sx={{ padding: "2px", marginY: 2 }}>
          <Typography
            variant="h4"
            display={"inline"}
            data-cy={"starship-name"}
            color={Colors.MainText}
            sx={{ borderBottom: `1px solid ${Colors.MainText}` }}
          >
            <b>{props.name}</b>
          </Typography>
        </Box>
        <Grid
          container={isMdDown ? false : true}
          item
          justifyContent="center"
          margin={2}
          sx={{
            borderRadius: 16,
            minWidth: isMdDown ? "350" : "600px",
          }}
        >
          <Image
            src={props.imageUrl ?? ""}
            alt={props.name}
            width={768}
            height={326}
            priority={true}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "15%",
              width: "100%",
              height: "100%",
              maxWidth: "400px",
              boxShadow: `12px 12px 3px ${Colors.Shadow}`,
              paddingRight: "-5px",
            }}
          />
        </Grid>
        <CardContent sx={{ paddingX: isMdDown ? 2 : 20, marginTop: 2 }}>
          {renderDetails()}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default StarshipDetailCard;
