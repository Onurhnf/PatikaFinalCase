import { IStarship } from "@/interfaces/starships/IStarship.interface";
import { Colors } from "@/utility/Colors";
import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function StarshipPaging({
  count,
  next,
  previous,
  results,
}: IStarship.IStarshipList) {
  const { t } = useTranslation("common");
  const router = useRouter();
  function handlePageChange(num: number) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: router.query.page
          ? parseInt(router.query.page as string) + num
          : 2,
      },
    });
  }

  return (
    <Grid container item marginY={5} direction={"row"} justifyContent={"right"}>
      <Grid container item justifyContent={"center"} gap={4}>
        {previous && (
          <Button
            color="primary"
            size="large"
            sx={{ borderRadius: "25px", textTransform: "none" }}
            variant="outlined"
            onClick={() => handlePageChange(-1)}
          >
            {t("PREVIOUS")}
          </Button>
        )}

        {next && (
          <Button
            color="primary"
            size="large"
            sx={{ borderRadius: "25px", textTransform: "none" }}
            variant="contained"
            onClick={() => handlePageChange(1)}
          >
            {t("NEXT")}
          </Button>
        )}
      </Grid>
      <Grid
        item
        border={`3px solid ${Colors.StarWarsYellow}`}
        borderRadius={"15px"}
        padding={1.5}
        marginRight={5}
      >
        <Typography color={Colors.StarWarsYellow}>
          {t("PAGE")}:
          {router.query.page ? parseInt(router.query.page as string) : 1}
        </Typography>
      </Grid>
    </Grid>
  );
}
