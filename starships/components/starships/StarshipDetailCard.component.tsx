import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import { Colors } from "@/utility/Colors";
import { useTranslation } from "next-i18next";

function StarshipDetailCard(props: IStarship.IStarshipDetail) {
  const { t } = useTranslation("common");

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
  console.log(props);

  function renderDetails() {
    return details.map((detail) => {
      return (
        <Typography
          mb={2}
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
      container
      item
      maxWidth={"600px"}
      minWidth={"400px"}
      sx={{ border: "7px solid white", height: "100%", borderRadius: "30px" }}
    >
      <Card
        sx={{
          border: `7px solid ${Colors.MainSpaceDark}`,
          borderRadius: "30px",
          background: "#fff",
          height: "100%",
        }}
      >
        <Box textAlign={"center"} sx={{ padding: "2px", marginY: 2 }}>
          <Typography
            variant="h4"
            display={"inline"}
            color={Colors.MainText}
            sx={{ borderBottom: `1px solid ${Colors.MainText}` }}
          >
            <b>{props.name}</b>
          </Typography>
        </Box>
        <Grid
          container
          item
          justifyContent="center"
          sx={{
            borderRadius: 16,
            minWidth: "600px",
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
              boxShadow: "12px 12px 3px rgba(0, 0, 0, 0.7)",
              paddingRight: "-5px",
            }}
          />
        </Grid>
        <CardContent sx={{ paddingX: 20, marginTop: 2 }}>
          {renderDetails()}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default StarshipDetailCard;
