import { render, screen } from "@testing-library/react";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import StarshipDetailCard from "@/components/starships/StarshipDetailCard.component";
import { Constants } from "@/utility/Constants";

describe("StarshipDetailCard", () => {
  const starship: IStarship.IStarshipDetail = {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "100000",
    length: "34.37",
    max_atmosphering_speed: "1050",
    crew: "4",
    passengers: "6",
    cargo_capacity: "100000",
    consumables: "2 months",
    hyperdrive_rating: "0.5",
    mGLT: "75",
    starship_class: "Light freighter",
    pilots: [],
    films: [],
    created: "2014-12-10T16:59:45.094000Z",
    edited: "2014-12-20T21:23:49.880000Z",
    url: "https://swapi.dev/api/starships/10/",
    imageUrl: Constants.DefaultImage,
    id: "10",
  };

  it("renders the name, model, and cargo_capacity correctly", () => {
    render(<StarshipDetailCard {...starship} />);
    const nameElement = screen.getByText("Millennium Falcon");
    expect(nameElement).toBeInTheDocument();

    const modelElement = screen.getByText("YT-1300 light freighter");
    expect(modelElement).toBeInTheDocument();

    const cargo_capacityElement = screen.getByText("100000");
    expect(cargo_capacityElement).toBeInTheDocument();
  });

  it("renders the image correctly", () => {
    render(<StarshipDetailCard {...starship} />);
    const imageElement = screen.getByAltText("Millennium Falcon");
    expect(imageElement).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fcdn.shortpixel.ai%2Fspai%2Fq_lossy%2Bw_956%2Bh_406%2Bto_webp%2Bret_img%2Fhttps%3A%2F%2Fvulkk.com%2Fwp-content%2Fuploads%2F2017%2F09%2FAll-Star-Wars-Battlefront-II-Ships-and-Ground-Vehicles-Guide-768x326.jpg&w=1920&q=75"
    );
  });
});
