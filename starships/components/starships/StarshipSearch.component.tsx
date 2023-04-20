import { Button, Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { StarshipsService } from "@/services/starships/Startships.service";
import { Constants } from "@/utility/Constants";

function StarshipSearch({ onSearch, setPaging }: any) {
  const [query, setQuery] = useState("");

  const handleSearchClick = async () => {
    const results = await StarshipsService.Search(query);
    setPaging({
      count: results.data.count,
      next: results.data.next,
      previous: results.data.previous,
    });
    const defaultImageUrl = Constants.DefaultImage;

    const resultsWithDefaultImage = results?.data?.results.map((starship) => {
      return {
        ...starship,
        imageUrl: defaultImageUrl,
      };
    });

    onSearch(resultsWithDefaultImage);
  };

  return (
    <Grid container item md={12} justifyContent={"center"}>
      <Grid borderBottom={"2px solid #35322B"} marginBottom={3}>
        <Grid
          marginBottom={2}
          item
          container
          direction={"row"}
          alignItems={"center"}
          gap={1}
        >
          <TextField
            size="small"
            label={"Name / Model"}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={handleSearchClick}
            variant="contained"
            sx={{ borderRadius: "25px", textTransform: "none" }}
          >
            {t("common:FILTER")}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default StarshipSearch;
