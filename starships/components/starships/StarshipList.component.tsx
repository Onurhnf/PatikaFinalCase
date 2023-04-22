import { Grid } from "@mui/material";
import StarShipCard from "./StarshipCard.component";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import { useRouter } from "next/router";

function StarShipList({ results }: IStarship.IStarshipList) {
  const router = useRouter();

  return (
    <Grid
      md={12}
      container
      item
      flexDirection={"row"}
      gap={5}
      justifyContent={"center"}
    >
      {results?.map((starship, i) => {
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
      })}
    </Grid>
  );
}

export default StarShipList;
