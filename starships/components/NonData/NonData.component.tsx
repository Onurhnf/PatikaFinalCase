import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { INonData } from "@/interfaces/NonData/INonData.interface";
import { Colors } from "@/utility/Colors";

export default function NonDataActivity(props: INonData.INonDataProps) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ width: "100%", mb: 3, mt: 3 }}
      alignItems={"center"}
      alignContent={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Image width="184" height="117" src={"/empty.svg"} alt="non data" />
      <Typography
        align="center"
        variant="subtitle1"
        sx={{ mt: 3 }}
        color={Colors.MainText}
      >
        <b>{props.title ? props.title : t("NON_DATA")} </b>
      </Typography>
    </Box>
  );
}
