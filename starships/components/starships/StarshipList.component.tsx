import { Grid } from "@mui/material";
import StarShipCard from "./StarshipCard.component";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import NonDataActivity from "../NonData/NonData.component";

function StarShipList({ results }: IStarship.IStarshipList) {
  return (
    <Grid
      md={12}
      container
      item
      flexDirection={"row"}
      gap={5}
      justifyContent={"center"}
    >
      {Array.isArray(results) && results.length > 0 ? (
        results.map((starship, i) => {
          return (
            <StarShipCard
              key={i}
              title={starship.name}
              imageUrl={starship.imageUrl}
              model={starship.model}
              rating={starship.hyperdrive_rating}
              id={starship.id}
            ></StarShipCard>
          );
        })
      ) : (
        <NonDataActivity />
      )}
    </Grid>
  );
}

export default StarShipList;
