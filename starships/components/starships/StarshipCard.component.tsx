import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import { Colors } from "@/utility/Colors";
import styles from "@/styles/StarshipCard.module.css";
import { useTranslation } from "next-i18next";

function StarShipCard({
  title,
  imageUrl,
  model,
  rating,
  id,
}: IStarship.IStarshipCardProps) {
  const { t } = useTranslation("common");

  return (
    <Grid container item maxWidth={"250px"} minWidth={"200px"}>
      <Card
        className={styles.card}
        sx={{
          border: `5px solid ${Colors.MainSpaceDark}`,
          borderRadius: "15%",
          background: Colors.MainSpaceDark,
          maxHeight: "330px",
          height: "100%",
        }}
      >
        <Link href={id ?? ""} passHref>
          <CardActionArea>
            <div style={{ position: "relative", borderRadius: 16 }}>
              <Image
                src={imageUrl ?? ""}
                alt={title}
                width={768}
                height={326}
                priority={true}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "15%",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <CardContent sx={{ padding: 3 }}>
              <Typography
                gutterBottom
                variant="h5"
                fontSize={"18px"}
                align="center"
                color={Colors.MainText}
              >
                <b>{title}</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color={Colors.MainText}
                component="p"
              >
                <b>{t("Model")}: </b> {model}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color={Colors.MainText}
                component="p"
              >
                <b>{t("Hyperdrive-Rating")}:</b> {rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default StarShipCard;
