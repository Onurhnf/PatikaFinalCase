import { Button, Grid, TextField } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Colors } from "@/utility/Colors";
import { useRouter } from "next/router";

function StarshipSearch() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearchClick = async () => {
    const searchQuery = query.trim(); // Remove leading/trailing whitespaces
    router.push({
      pathname: router.pathname,
      query: {
        search: searchQuery,
      },
    });
  };

  return (
    <Grid container item md={12} justifyContent={"center"}>
      <Grid
        borderBottom={`2px solid ${Colors.StarWarsYellow}`}
        marginBottom={3}
      >
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
            focused
            color="primary"
            label={t("search-area")}
            InputProps={{ style: { color: `${Colors.WHITE}` } }}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={handleSearchClick}
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "25px",
              textTransform: "none",
            }}
          >
            {t("FILTER")}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default StarshipSearch;
