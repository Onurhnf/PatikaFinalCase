import { StarshipsService } from "@/services/starships/Startships.service";
import { Constants } from "@/utility/Constants";
import { Button, Grid, Typography } from "@mui/material";
import { t } from "i18next";

export default function StarshipPaging({ setResults, setPaging, paging }: any) {
  const fetchDataByUrl = async (url: string) => {
    try {
      const result = await StarshipsService.GetByUrl(url);

      //staticly added an starship image becasue there was none in api
      const defaultImageUrl = Constants.DefaultImage;

      const resultsWithDefaultImage = result?.data?.results.map((starship) => {
        return {
          ...starship,
          imageUrl: defaultImageUrl,
        };
      });

      setResults(resultsWithDefaultImage);
      setPaging({
        count: result.data.count,
        next: result.data.next,
        previous: result.data.previous,
      });
    } catch (error: any) {
      console.log("Err:", error);
    }
  };

  return (
    <Grid container item marginY={5} direction={"row"} justifyContent={"right"}>
      <Grid container item justifyContent={"center"} gap={4}>
        {paging.previous && (
          <Button
            color="info"
            size="large"
            sx={{ borderRadius: "25px", textTransform: "none" }}
            variant="contained"
            onClick={() => fetchDataByUrl(paging.previous ?? "")}
          >
            {t("common:PREVIOUS")}
          </Button>
        )}

        {paging.next && (
          <Button
            color="info"
            size="large"
            sx={{ borderRadius: "25px", textTransform: "none" }}
            variant="contained"
            onClick={() => fetchDataByUrl(paging.next ?? "")}
          >
            {t("common:NEXT")}
          </Button>
        )}
      </Grid>
      <Grid
        item
        border={"3px solid black"}
        borderRadius={"15px"}
        padding={2}
        marginRight={5}
      >
        <Typography>
          {t("common:PAGE")}:
          {paging.previous
            ? paging.previous?.charAt(paging.previous.length - 1) * 1 + 1
            : 1}
        </Typography>
      </Grid>
    </Grid>
  );
}
